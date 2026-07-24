import type { Metadata } from "next";
import Link from "next/link";
import { TOPICS } from "@/lib/topics";
import { getCharactersByTopic } from "@/lib/characters";

export const metadata: Metadata = {
  title: "Learning paths — Chinese characters by topic",
  description:
    "Structured paths through the HSK 1 Chinese characters: numbers, time, family, food, travel, school and more.",
  alternates: { canonical: "/learn/" },
};

export default function LearnPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Learning paths</h1>
        <p className="mt-2 text-muted max-w-2xl">
          Learn characters in meaningful groups. Each path is a small, focused set — work
          through one, practice the writing, then let the review system keep it fresh.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {TOPICS.map((t) => {
          const chars = getCharactersByTopic(t.tag);
          return (
            <Link
              key={t.slug}
              href={`/learn/${t.slug}/`}
              className="rounded-2xl border border-border bg-card p-5 hover:border-accent hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>{t.emoji}</span>
                  <h2 className="font-semibold group-hover:text-accent transition-colors">
                    {t.title}
                  </h2>
                </div>
                <span className="text-sm text-muted shrink-0">{chars.length} 字</span>
              </div>
              <p className="mt-2 text-sm text-muted">{t.description}</p>
              <p className="hanzi mt-3 text-lg text-muted/80 truncate">
                {chars.slice(0, 12).map((c) => c.character).join(" ")}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
