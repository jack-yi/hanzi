"use client";

import { useProgressStore, useHasHydrated } from "@/store/progress";

export function TopicProgress({ characters }: { characters: string[] }) {
  const hydrated = useHasHydrated();
  const progress = useProgressStore((s) => s.characters);
  if (!hydrated) return null;

  let learning = 0;
  let learned = 0;
  for (const c of characters) {
    const st = progress[c]?.status;
    if (st === "learning") learning += 1;
    else if (st === "learned") learned += 1;
  }
  const total = characters.length;
  const pctLearned = total ? (learned / total) * 100 : 0;
  const pctLearning = total ? (learning / total) * 100 : 0;

  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-muted">
          <span className="text-emerald-600 font-medium">{learned} learned</span>
          {" · "}
          <span className="text-gold font-medium">{learning} learning</span>
          {" · "}
          {total - learned - learning} to go
        </span>
        <span className="text-muted">{Math.round(pctLearned)}%</span>
      </div>
      <div className="h-2 rounded-full bg-border overflow-hidden flex">
        <div className="bg-emerald-500 h-full" style={{ width: `${pctLearned}%` }} />
        <div className="bg-gold h-full" style={{ width: `${pctLearning}%` }} />
      </div>
    </div>
  );
}
