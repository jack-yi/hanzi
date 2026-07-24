import Link from "next/link";
import { SearchBox } from "@/components/SearchBox";
import { CharacterCard } from "@/components/CharacterCard";
import { getAllCharacters } from "@/lib/characters";
import { TOPICS } from "@/lib/topics";
import { SITE_NAME } from "@/lib/site";

const FEATURED = ["爱", "学", "家", "好", "中", "水", "人", "天", "月", "火", "口", "山"];

export default function Home() {
  const all = getAllCharacters();
  const featured = all.filter((c) => FEATURED.includes(c.character)).slice(0, 8);
  const topics = TOPICS.filter((t) => t.slug !== "hsk-1");

  return (
    <div className="flex flex-col gap-14">
      {/* Hero */}
      <section className="text-center pt-6">
        <p className="hanzi text-6xl sm:text-7xl text-accent mb-4" aria-hidden>
          学而时习之
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Learn Chinese characters,
          <br className="hidden sm:block" /> right in your browser
        </h1>
        <p className="mt-4 text-muted max-w-2xl mx-auto">
          Stroke-order animations, handwriting practice, pinyin, meanings and Mandarin
          pronunciation for all {all.length} HSK 1 characters. No account, no cloud — your
          progress stays on your device.
        </p>
        <div className="mt-8">
          <SearchBox />
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/learn/"
            className="px-5 py-2.5 rounded-full bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            Start learning
          </Link>
          <Link
            href="/characters/"
            className="px-5 py-2.5 rounded-full border border-border bg-card font-medium hover:border-accent hover:text-accent transition-colors"
          >
            Browse all characters
          </Link>
        </div>
      </section>

      {/* Featured characters */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Popular characters</h2>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
          {featured.map((c) => (
            <CharacterCard
              key={c.character}
              character={c.character}
              pinyin={c.pinyin[0]}
              meaning={c.meanings[0]}
            />
          ))}
        </div>
      </section>

      {/* Topics */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Learning paths</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/learn/${t.slug}/`}
              className="rounded-2xl border border-border bg-card p-5 hover:border-accent hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden>{t.emoji}</span>
                <div>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    {t.title}
                  </h3>
                  <p className="hanzi text-sm text-muted">{t.zh}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted">{t.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold mb-6">How {SITE_NAME} works</h2>
        <ol className="grid sm:grid-cols-3 gap-6 text-sm">
          <li>
            <p className="text-3xl mb-2" aria-hidden>👀</p>
            <p className="font-medium mb-1">1 · Watch &amp; listen</p>
            <p className="text-muted">
              See the stroke order animated and hear the Mandarin pronunciation for every
              character.
            </p>
          </li>
          <li>
            <p className="text-3xl mb-2" aria-hidden>✍️</p>
            <p className="font-medium mb-1">2 · Write it yourself</p>
            <p className="text-muted">
              Trace each character with your finger or mouse — stroke order and placement are
              checked as you go.
            </p>
          </li>
          <li>
            <p className="text-3xl mb-2" aria-hidden>🔁</p>
            <p className="font-medium mb-1">3 · Review &amp; remember</p>
            <p className="text-muted">
              Spaced-repetition review keeps characters fresh. Progress is saved in your
              browser — export it anytime.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
