import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCharacters, getCharacter } from "@/lib/characters";
import { HanziPractice } from "@/components/HanziPractice";
import { AudioButton } from "@/components/AudioButton";
import { StatusButtons } from "@/components/StatusButtons";
import { JsonLd } from "@/components/JsonLd";
import { TOPICS } from "@/lib/topics";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ char: string }> };

export function generateStaticParams() {
  const chars = getAllCharacters();
  // `next dev` matches the URL-encoded path segment against this list, so raw
  // hanzi params 404 in dev. `next build` (static export) instead uses these
  // values literally as output directory names, so they must stay raw there —
  // encoded params would emit literal "%E5%AD%A6" folders that break hosting.
  if (process.env.NODE_ENV === "development") {
    return chars.map((c) => ({ char: encodeURIComponent(c.character) }));
  }
  return chars.map((c) => ({ char: c.character }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { char } = await params;
  const data = getCharacter(decodeURIComponent(char));
  if (!data) return {};
  const c = data.character;
  return {
    title: `${c} (${data.pinyin[0]}) — meaning, stroke order & pronunciation`,
    description: `Learn the Chinese character ${c} (${data.pinyin.join(", ")}): it means “${data.meanings[0]}”. Watch the stroke order animation, practice writing ${c}, and hear the Mandarin pronunciation.`,
    alternates: { canonical: `/character/${c}/` },
  };
}

function InfoCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3">
      <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1 font-medium">{children}</p>
    </div>
  );
}

export default async function CharacterPage({ params }: Props) {
  const { char } = await params;
  const data = getCharacter(decodeURIComponent(char));
  if (!data) notFound();

  const c = data.character;
  const topics = TOPICS.filter((t) => data.topics.includes(t.tag));

  return (
    <article className="flex flex-col gap-10">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: c,
          description: `${data.pinyin.join(", ")} — ${data.meanings.join("; ")}`,
          inLanguage: "zh-Hans",
          url: `${SITE_URL}/character/${encodeURIComponent(c)}/`,
          inDefinedTermSet: {
            "@type": "DefinedTermSet",
            name: `${SITE_NAME} — HSK 1 characters`,
            url: `${SITE_URL}/characters/`,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: SITE_NAME, item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Characters", item: `${SITE_URL}/characters/` },
            { "@type": "ListItem", position: 3, name: c },
          ],
        }}
      />
      {/* Top: character + practice */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <header className="flex flex-col gap-5">
          <div className="flex items-end gap-6">
            <h1 className="hanzi text-8xl sm:text-9xl leading-none">{c}</h1>
            <div className="pb-2">
              <p className="text-2xl text-accent font-medium">{data.pinyin.join(" / ")}</p>
              <p className="mt-1 text-lg text-muted">{data.meanings.join("; ")}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <AudioButton audioKey={data.audioKey} text={c} label={`Listen (${data.pinyin[0]})`} />
            <StatusButtons character={c} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <InfoCell label="Strokes">{data.strokeCount ?? "—"}</InfoCell>
            <InfoCell label="Radical">
              <span className="hanzi text-lg">{data.radical ?? "—"}</span>
            </InfoCell>
            <InfoCell label="Traditional">
              <span className="hanzi text-lg">{data.traditional ?? `${c} (same)`}</span>
            </InfoCell>
            <InfoCell label="HSK level">{data.hskLevel}</InfoCell>
          </div>

          {topics.length > 0 && (
            <p className="text-sm text-muted">
              In:{" "}
              {topics.map((t, i) => (
                <span key={t.slug}>
                  {i > 0 && " · "}
                  <Link href={`/learn/${t.slug}/`} className="text-accent hover:underline">
                    {t.title}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </header>

        <section aria-label="Stroke order and writing practice">
          <HanziPractice character={c} />
        </section>
      </div>

      {/* Words */}
      {data.words.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Common words with {c}</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {data.words.map((w) => (
              <li
                key={w.word}
                className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3"
              >
                <span className="hanzi text-2xl shrink-0">
                  {[...w.word].map((ch) =>
                    getCharacter(ch) && ch !== c ? (
                      <Link key={ch} href={`/character/${ch}/`} className="hover:text-accent">
                        {ch}
                      </Link>
                    ) : (
                      <span key={ch}>{ch}</span>
                    )
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-accent text-sm">{w.pinyin}</p>
                  <p className="text-sm text-muted truncate">{w.meaning}</p>
                </div>
                <AudioButton text={w.word} label="" small />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Sentences */}
      {data.sentences.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Example sentences</h2>
          <ul className="flex flex-col gap-3">
            {data.sentences.map((s) => (
              <li key={s.zh} className="rounded-xl border border-border bg-card px-5 py-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="hanzi text-xl leading-relaxed">{s.zh}</p>
                  <AudioButton text={s.zh} label="" small />
                </div>
                <p className="text-sm text-accent mt-1">{s.pinyin}</p>
                <p className="text-sm text-muted">{s.en}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Similar characters */}
      {data.similar.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Don&apos;t confuse with</h2>
          <div className="flex flex-wrap gap-3">
            {data.similar.map((sim) => {
              const simData = getCharacter(sim);
              return (
                <Link
                  key={sim}
                  href={`/character/${sim}/`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 hover:border-accent transition-colors"
                >
                  <span className="hanzi text-3xl">{sim}</span>
                  <span className="text-sm text-muted">
                    {simData?.pinyin[0]} · {simData?.meanings[0]}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}
