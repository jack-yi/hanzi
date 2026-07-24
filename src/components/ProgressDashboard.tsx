"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useProgressStore, useHasHydrated } from "@/store/progress";
import { getAllCharacters, getCharacter } from "@/lib/characters";

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-4 text-center">
      <p className={`text-3xl font-bold ${accent ?? ""}`}>{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-muted">{label}</p>
    </div>
  );
}

function CharChips({ chars, empty }: { chars: string[]; empty: string }) {
  if (chars.length === 0) return <p className="text-sm text-muted">{empty}</p>;
  return (
    <div className="flex flex-wrap gap-2">
      {chars.map((c) => (
        <Link
          key={c}
          href={`/character/${c}/`}
          className="hanzi text-2xl rounded-lg border border-border bg-card px-2.5 py-1.5 hover:border-accent hover:text-accent transition-colors"
          title={getCharacter(c)?.pinyin.join(" / ")}
        >
          {c}
        </Link>
      ))}
    </div>
  );
}

export function ProgressDashboard() {
  const hydrated = useHasHydrated();
  const store = useProgressStore();
  const fileRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  if (!hydrated) return <p className="text-muted">Loading your progress…</p>;

  const entries = Object.entries(store.characters);
  const learning = entries.filter(([, p]) => p.status === "learning").map(([c]) => c);
  const learned = entries.filter(([, p]) => p.status === "learned").map(([c]) => c);
  const now = Date.now();
  const due = entries
    .filter(
      ([, p]) =>
        p.status !== "new" && p.nextReviewAt && new Date(p.nextReviewAt).getTime() <= now
    )
    .map(([c]) => c);
  const totalPractice = entries.reduce((sum, [, p]) => sum + p.practiceCount, 0);
  const today = new Date().toDateString();
  const practicedToday = entries.filter(
    ([, p]) => p.lastPracticedAt && new Date(p.lastPracticedAt).toDateString() === today
  ).length;
  const totalChars = getAllCharacters().length;

  const doExport = () => {
    const blob = new Blob([store.exportState()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "hanzi-progress.json";
    link.click();
    URL.revokeObjectURL(url);
    setMessage("Progress exported as hanzi-progress.json");
  };

  const doImport = async (file: File, mode: "merge" | "replace") => {
    const text = await file.text();
    const result = store.importState(text, mode);
    setMessage(
      result.ok ? "Progress imported successfully." : `Import failed: ${result.error}`
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <Stat label="Learning" value={learning.length} accent="text-gold" />
        <Stat label="Learned" value={learned.length} accent="text-emerald-600" />
        <Stat label="Due for review" value={due.length} accent="text-accent" />
        <Stat label="Practiced today" value={practicedToday} />
        <Stat label="Day streak" value={store.streak} accent="text-accent" />
        <Stat label="Total practices" value={totalPractice} />
      </section>

      {due.length > 0 && (
        <Link
          href="/review/"
          className="rounded-xl bg-accent text-white text-center font-medium px-6 py-3 hover:opacity-90"
        >
          Review {due.length} due {due.length === 1 ? "character" : "characters"} now →
        </Link>
      )}

      <section>
        <h2 className="text-lg font-semibold mb-3">
          Learning <span className="text-muted font-normal">({learning.length})</span>
        </h2>
        <CharChips
          chars={learning}
          empty="Nothing here yet — open a character page and press “Add to learning”."
        />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          Learned{" "}
          <span className="text-muted font-normal">
            ({learned.length} / {totalChars})
          </span>
        </h2>
        <CharChips chars={learned} empty="Characters you master will appear here." />
      </section>

      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold mb-2">Backup &amp; restore</h2>
        <p className="text-sm text-muted mb-4">
          Your learning progress is stored only in this browser. Clearing browser data may
          remove it — export a backup to be safe, or to move progress to another device.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={doExport}
            className="px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:opacity-90"
          >
            ⬇ Export progress
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-accent hover:text-accent"
          >
            ⬆ Import progress
          </button>
          {confirmClear ? (
            <span className="inline-flex items-center gap-2 text-sm">
              <span className="text-muted">Delete all local progress?</span>
              <button
                onClick={() => {
                  store.clearAll();
                  setConfirmClear(false);
                  setMessage("All local progress cleared.");
                }}
                className="px-3 py-1.5 rounded-full bg-red-600 text-white text-sm font-medium"
              >
                Yes, clear
              </button>
              <button
                onClick={() => setConfirmClear(false)}
                className="px-3 py-1.5 rounded-full border border-border text-sm"
              >
                Cancel
              </button>
            </span>
          ) : (
            <button
              onClick={() => setConfirmClear(true)}
              className="px-4 py-2 rounded-full border border-red-300 text-red-600 text-sm font-medium hover:bg-red-50 dark:hover:bg-red-950"
            >
              Clear local data
            </button>
          )}
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) doImport(file, "merge");
            e.target.value = "";
          }}
        />
        {message && <p className="mt-3 text-sm text-accent">{message}</p>}
      </section>
    </div>
  );
}
