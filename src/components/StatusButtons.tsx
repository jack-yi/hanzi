"use client";

import { useProgressStore, useHasHydrated } from "@/store/progress";
import type { CharacterStatus } from "@/lib/types";

export function StatusButtons({ character }: { character: string }) {
  const hydrated = useHasHydrated();
  const status = useProgressStore((s) => s.characters[character]?.status ?? "new");
  const setStatus = useProgressStore((s) => s.setStatus);

  const toggle = (target: CharacterStatus) => {
    setStatus(character, status === target ? "new" : target);
  };

  const base =
    "px-4 py-2 rounded-full text-sm font-medium border transition-colors";

  return (
    <div className="flex flex-wrap gap-2" aria-live="polite">
      <button
        onClick={() => toggle("learning")}
        disabled={!hydrated}
        className={`${base} ${
          hydrated && status === "learning"
            ? "bg-gold text-white border-gold"
            : "border-border bg-card hover:border-gold hover:text-gold"
        }`}
      >
        {hydrated && status === "learning" ? "★ Learning" : "☆ Add to learning"}
      </button>
      <button
        onClick={() => toggle("learned")}
        disabled={!hydrated}
        className={`${base} ${
          hydrated && status === "learned"
            ? "bg-emerald-600 text-white border-emerald-600"
            : "border-border bg-card hover:border-emerald-600 hover:text-emerald-600"
        }`}
      >
        {hydrated && status === "learned" ? "✓ Learned" : "Mark as learned"}
      </button>
    </div>
  );
}

/** Small colored dot showing a character's learning status (for grids). */
export function StatusDot({ character }: { character: string }) {
  const hydrated = useHasHydrated();
  const status = useProgressStore((s) => s.characters[character]?.status ?? "new");
  if (!hydrated || status === "new") return null;
  return (
    <span
      title={status}
      className={`absolute top-1.5 right-1.5 w-2 h-2 rounded-full ${
        status === "learned" ? "bg-emerald-500" : "bg-gold"
      }`}
    />
  );
}
