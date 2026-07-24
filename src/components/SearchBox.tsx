"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import searchIndex from "@/data/search-index.json";
import type { SearchIndexEntry } from "@/lib/types";

const INDEX = searchIndex as SearchIndexEntry[];

/** Strip tone marks / numbers so "xué", "xue2" and "xue" all match. */
function normalizePinyin(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ü/g, "v")
    .replace(/[0-9\s'’-]/g, "");
}

export function searchCharacters(query: string, limit = 12): SearchIndexEntry[] {
  const q = query.trim();
  if (!q) return [];
  const qLower = q.toLowerCase();
  const qPinyin = normalizePinyin(q);

  const scored: { entry: SearchIndexEntry; score: number }[] = [];
  for (const entry of INDEX) {
    let score = 0;
    if (q.includes(entry.c)) score = 100; // typed the character itself
    else if (qPinyin && entry.pn.some((p) => p === qPinyin)) score = 60;
    else if (qPinyin && entry.pn.some((p) => p.startsWith(qPinyin))) score = 40;
    else if (entry.m.some((m) => m.toLowerCase().includes(qLower))) score = 30;
    if (score > 0) scored.push({ entry, score });
  }
  scored.sort((a, b) => b.score - a.score || (a.entry.s ?? 99) - (b.entry.s ?? 99));
  return scored.slice(0, limit).map((s) => s.entry);
}

export function SearchBox({ autoFocus = false }: { autoFocus?: boolean }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchCharacters(query), [query]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus={autoFocus}
        placeholder="Search 学 · xue · “to learn”…"
        aria-label="Search characters by hanzi, pinyin or meaning"
        className="w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-base shadow-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
      {results.length > 0 && (
        <ul className="absolute z-30 mt-2 w-full rounded-2xl border border-border bg-card shadow-lg overflow-hidden max-h-96 overflow-y-auto">
          {results.map((r) => (
            <li key={r.c}>
              <Link
                href={`/character/${r.c}/`}
                className="flex items-center gap-4 px-4 py-2.5 hover:bg-accent-soft transition-colors"
                onClick={() => setQuery("")}
              >
                <span className="hanzi text-3xl w-10 text-center shrink-0">{r.c}</span>
                <span className="text-accent text-sm w-16 shrink-0">{r.p.join(" / ")}</span>
                <span className="text-sm text-muted truncate">{r.m.join("; ")}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {query.trim() && results.length === 0 && (
        <p className="absolute z-30 mt-2 w-full rounded-2xl border border-border bg-card shadow-lg px-4 py-3 text-sm text-muted">
          No matching characters — this site covers the 180 HSK 1 characters.
        </p>
      )}
    </div>
  );
}
