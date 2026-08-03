import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOPICS, getTopic } from "@/lib/topics";
import { getCharactersByTopic } from "@/lib/characters";
import { CharacterCard } from "@/components/CharacterCard";
import { TopicProgress } from "@/components/TopicProgress";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TOPICS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: `${topic.title} — Chinese characters`,
    description: `${topic.description} Learn each character with stroke order animation, writing practice and pronunciation.`,
    alternates: { canonical: `/learn/${topic.slug}/` },
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const chars = getCharactersByTopic(topic.tag);

  return (
    <div className="flex flex-col gap-6">
      <header>
        <p className="text-sm text-muted">
          <Link href="/learn/" className="hover:text-accent">Learning paths</Link> /
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight flex items-center gap-3">
          <span aria-hidden>{topic.emoji}</span>
          {topic.title}
          <span className="hanzi text-2xl text-muted font-normal">{topic.zh}</span>
        </h1>
        <p className="mt-2 text-muted max-w-2xl">{topic.description}</p>
      </header>

      <div className="max-w-2xl flex flex-col gap-3 text-muted leading-relaxed">
        {topic.intro.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>

      <TopicProgress characters={chars.map((c) => c.character)} />

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
        {chars.map((c) => (
          <CharacterCard
            key={c.character}
            character={c.character}
            pinyin={c.pinyin[0]}
            meaning={c.meanings[0]}
          />
        ))}
      </div>
    </div>
  );
}
