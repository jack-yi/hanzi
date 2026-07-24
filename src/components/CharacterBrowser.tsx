"use client";

import { useMemo, useState } from "react";
import searchIndex from "@/data/search-index.json";
import type { SearchIndexEntry } from "@/lib/types";
import { CharacterCard } from "./CharacterCard";
import { TOPICS } from "@/lib/topics";
import { useProgressStore, useHasHydrated } from "@/store/progress";
import type { CharacterStatus } from "@/lib/types";

const INDEX = searchIndex as SearchIndexEntry[];

function normalizePinyin(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ü/g, "v")
    .replace(/[0-9\s'’-]/g, "");
}

type StatusFilter = "all" | CharacterStatus;

export function CharacterBrowser() {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("hsk-1");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const hydrated = useHasHydrated();
  const progress = useProgressStore((s) => s.characters);

  const filtered = useMemo(() => {
    const q = query.trim();
    const qLower = q.toLowerCase();
    const qPinyin = normalizePinyin(q);
    return INDEX.filter((e) => {
      if (topic !== "hsk-1" && !e.t.includes(topic)) return false;
      if (statusFilter !== "all") {
        const st = progress[e.c]?.status ?? "new";
        if (st !== statusFilter) return false;
      }
      if (!q) return true;
      if (q.includes(e.c)) return true;
      if (qPinyin && e.pn.some((p) => p.startsWith(qPinyin))) return true;
      return e.m.some((m) => m.toLowerCase().includes(qLower));
    });
  }, [query, topic, statusFilter, progress]);

  const chip = (active: boolean) =>
    `px-3 py-1.5 rounded-full text-sm border transition-colors whitespace-nowrap ${
      active
        ? "bg-accent text-white border-accent"
        : "border-border bg-card text-muted hover:text-foreground"
    }`;

  return (
    <div className="flex flex-col gap-5">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter by hanzi, pinyin or meaning…"
        aria-label="Filter characters"
        className="w-full max-w-md rounded-xl border border-border bg-card px-4 py-2.5 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />

      <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Topic filter">
        {TOPICS.map((t) => (
          <button
            key={t.slug}
            onClick={() => setTopic(t.slug)}
            className={chip(topic === t.slug)}
          >
            {t.slug === "hsk-1" ? "All" : t.title.split(" — ")[0].split(" & ")[0]}
          </button>
        ))}
      </div>

      {hydrated && (
        <div className="flex gap-2" aria-label="Status filter">
          {(["all", "new", "learning", "learned"] as StatusFilter[]).map((s) => (
            <button key={s} onClick={() => setStatusFilter(s)} className={chip(statusFilter === s)}>
              {s === "all" ? "Any status" : s === "new" ? "Not started" : s}
            </button>
          ))}
        </div>
      )}

      <p className="text-sm text-muted">
        {filtered.length} {filtered.length === 1 ? "character" : "characters"}
      </p>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
        {filtered.map((e) => (
          <CharacterCard key={e.c} character={e.c} pinyin={e.p[0]} meaning={e.m[0]} />
        ))}
      </div>
    </div>
  );
}
