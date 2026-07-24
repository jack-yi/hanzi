import Link from "next/link";
import { StatusDot } from "./StatusButtons";

export function CharacterCard({
  character,
  pinyin,
  meaning,
}: {
  character: string;
  pinyin: string;
  meaning: string;
}) {
  return (
    <Link
      href={`/character/${character}/`}
      className="relative flex flex-col items-center rounded-xl border border-border bg-card px-2 py-3 hover:border-accent hover:shadow-sm transition-all group"
    >
      <StatusDot character={character} />
      <span className="hanzi text-4xl leading-none group-hover:text-accent transition-colors">
        {character}
      </span>
      <span className="mt-1.5 text-xs text-accent">{pinyin}</span>
      <span className="text-[11px] text-muted text-center leading-tight line-clamp-1">
        {meaning}
      </span>
    </Link>
  );
}
