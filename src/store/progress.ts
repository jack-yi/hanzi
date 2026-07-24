"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  CharacterProgress,
  CharacterStatus,
  LearningState,
  ReviewResult,
} from "@/lib/types";
import { calculateNextReview, nextLevel } from "@/lib/srs";

export const STORAGE_KEY = "hanzi-learning-progress-v1";

const emptyProgress = (): CharacterProgress => ({
  status: "new",
  practiceCount: 0,
  correctCount: 0,
  mistakeCount: 0,
  reviewLevel: 0,
});

function todayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function isYesterday(dateStr: string): boolean {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const y = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
  return dateStr === y;
}

type ProgressStore = LearningState & {
  hasHydrated: boolean;
  setHasHydrated: (v: boolean) => void;

  getProgress: (char: string) => CharacterProgress;
  setStatus: (char: string, status: CharacterStatus) => void;
  recordPractice: (char: string, mistakes: number) => void;
  recordReview: (char: string, result: ReviewResult) => void;
  clearAll: () => void;

  exportState: () => string;
  importState: (json: string, mode: "merge" | "replace") => { ok: boolean; error?: string };
};

function touchStreak(state: LearningState): Pick<LearningState, "streak" | "lastStudyDate"> {
  const today = todayString();
  if (state.lastStudyDate === today) {
    return { streak: state.streak, lastStudyDate: today };
  }
  if (state.lastStudyDate && isYesterday(state.lastStudyDate)) {
    return { streak: state.streak + 1, lastStudyDate: today };
  }
  return { streak: 1, lastStudyDate: today };
}

/** Validate an imported LearningState-shaped object. */
function validateImport(data: unknown): { ok: true; state: LearningState } | { ok: false; error: string } {
  if (typeof data !== "object" || data === null) return { ok: false, error: "Not a JSON object." };
  const d = data as Record<string, unknown>;
  if (d.version !== 1) return { ok: false, error: "Unsupported version (expected 1)." };
  if (typeof d.characters !== "object" || d.characters === null)
    return { ok: false, error: "Missing characters map." };
  const chars: Record<string, CharacterProgress> = {};
  const statuses: CharacterStatus[] = ["new", "learning", "learned"];
  for (const [key, raw] of Object.entries(d.characters as Record<string, unknown>)) {
    if (typeof key !== "string" || key.length > 4) continue;
    if (typeof raw !== "object" || raw === null) continue;
    const p = raw as Record<string, unknown>;
    const status = statuses.includes(p.status as CharacterStatus)
      ? (p.status as CharacterStatus)
      : "new";
    chars[key] = {
      status,
      practiceCount: typeof p.practiceCount === "number" ? p.practiceCount : 0,
      correctCount: typeof p.correctCount === "number" ? p.correctCount : 0,
      mistakeCount: typeof p.mistakeCount === "number" ? p.mistakeCount : 0,
      reviewLevel: typeof p.reviewLevel === "number" ? Math.max(0, Math.min(4, p.reviewLevel)) : 0,
      lastPracticedAt: typeof p.lastPracticedAt === "string" ? p.lastPracticedAt : undefined,
      nextReviewAt: typeof p.nextReviewAt === "string" ? p.nextReviewAt : undefined,
    };
  }
  return {
    ok: true,
    state: {
      version: 1,
      streak: typeof d.streak === "number" ? d.streak : 0,
      lastStudyDate: typeof d.lastStudyDate === "string" ? d.lastStudyDate : undefined,
      characters: chars,
    },
  };
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      version: 1,
      streak: 0,
      lastStudyDate: undefined,
      characters: {},
      hasHydrated: false,
      setHasHydrated: (v) => set({ hasHydrated: v }),

      getProgress: (char) => get().characters[char] ?? emptyProgress(),

      setStatus: (char, status) =>
        set((state) => {
          const prev = state.characters[char] ?? emptyProgress();
          const next: CharacterProgress = { ...prev, status };
          if (status === "learning" && !next.nextReviewAt) {
            next.nextReviewAt = new Date().toISOString();
          }
          return { characters: { ...state.characters, [char]: next } };
        }),

      recordPractice: (char, mistakes) =>
        set((state) => {
          const prev = state.characters[char] ?? emptyProgress();
          const next: CharacterProgress = {
            ...prev,
            status: prev.status === "new" ? "learning" : prev.status,
            practiceCount: prev.practiceCount + 1,
            correctCount: prev.correctCount + (mistakes === 0 ? 1 : 0),
            mistakeCount: prev.mistakeCount + mistakes,
            lastPracticedAt: new Date().toISOString(),
          };
          if (!next.nextReviewAt) next.nextReviewAt = new Date().toISOString();
          return {
            characters: { ...state.characters, [char]: next },
            ...touchStreak(state),
          };
        }),

      recordReview: (char, result) =>
        set((state) => {
          const prev = state.characters[char] ?? emptyProgress();
          const level = nextLevel(prev.reviewLevel, result);
          const next: CharacterProgress = {
            ...prev,
            status:
              level >= 3 && result !== "again"
                ? "learned"
                : prev.status === "new"
                  ? "learning"
                  : result === "again" && prev.status === "learned"
                    ? "learning"
                    : prev.status,
            reviewLevel: level,
            practiceCount: prev.practiceCount + 1,
            correctCount: prev.correctCount + (result === "good" || result === "easy" ? 1 : 0),
            mistakeCount: prev.mistakeCount + (result === "again" ? 1 : 0),
            lastPracticedAt: new Date().toISOString(),
            nextReviewAt: new Date(calculateNextReview(prev.reviewLevel, result)).toISOString(),
          };
          return {
            characters: { ...state.characters, [char]: next },
            ...touchStreak(state),
          };
        }),

      clearAll: () =>
        set({ version: 1, streak: 0, lastStudyDate: undefined, characters: {} }),

      exportState: () => {
        const { version, streak, lastStudyDate, characters } = get();
        return JSON.stringify({ version, streak, lastStudyDate, characters }, null, 2);
      },

      importState: (json, mode) => {
        if (json.length > 2_000_000) return { ok: false, error: "File too large." };
        let parsed: unknown;
        try {
          parsed = JSON.parse(json);
        } catch {
          return { ok: false, error: "Invalid JSON file." };
        }
        const result = validateImport(parsed);
        if (!result.ok) return { ok: false, error: result.error };

        if (mode === "replace") {
          set({ ...result.state });
        } else {
          // merge: imported entry wins if it has more practice
          const current = get().characters;
          const merged = { ...current };
          for (const [char, p] of Object.entries(result.state.characters)) {
            const existing = merged[char];
            if (!existing || p.practiceCount >= existing.practiceCount) merged[char] = p;
          }
          set((state) => ({
            characters: merged,
            streak: Math.max(state.streak, result.state.streak),
          }));
        }
        return { ok: true };
      },
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        version: state.version,
        streak: state.streak,
        lastStudyDate: state.lastStudyDate,
        characters: state.characters,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

/** Hook: true once the store has been rehydrated from localStorage. */
export function useHasHydrated(): boolean {
  return useProgressStore((s) => s.hasHydrated);
}
