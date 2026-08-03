import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides — how to learn Chinese characters",
  description:
    "Practical guides on learning Chinese characters: stroke order rules, Mandarin tones, radicals, handwriting practice, spaced repetition and study planning.",
  alternates: { canonical: "/guides/" },
};

export default function GuidesPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Guides</h1>
        <p className="mt-2 text-muted max-w-2xl">
          Short, practical articles on the how of learning Chinese characters — the method
          behind the practice tools on this site.
        </p>
      </header>
      <ul className="grid sm:grid-cols-2 gap-4">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}/`}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 hover:border-accent hover:shadow-sm transition-all group"
            >
              <p className="text-2xl" aria-hidden>{g.emoji}</p>
              <h2 className="mt-2 font-semibold group-hover:text-accent transition-colors">
                {g.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{g.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
