import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { getAllCharacters } from "@/lib/characters";

export const metadata: Metadata = {
  title: "About",
  description:
    "About this privacy-friendly Chinese character learning app: how it works and why it needs no account.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const count = getAllCharacters().length;
  return (
    <article className="prose-page max-w-2xl mx-auto flex flex-col gap-5">
      <h1 className="text-3xl font-bold tracking-tight">About {SITE_NAME}</h1>
      <p className="text-muted">
        {SITE_NAME} is a small, focused tool for learning to read and write Chinese
        characters. It covers the {count} characters of HSK level 1 — the essential first set
        for any beginner — with stroke-order animations, in-browser handwriting practice,
        pinyin, English meanings, example words and sentences, and Mandarin pronunciation.
      </p>
      <h2 className="text-xl font-semibold">Everything happens in your browser</h2>
      <p className="text-muted">
        There is no account, no sign-up and no server storing your data. Your learning list,
        review schedule and statistics are saved in your browser&apos;s local storage. That
        means the site is fast and private — and it also means progress does not sync between
        devices on its own. Use{" "}
        <Link href="/progress/" className="text-accent hover:underline">
          export and import
        </Link>{" "}
        on the Progress page to move your data.
      </p>
      <h2 className="text-xl font-semibold">How to use it</h2>
      <p className="text-muted">
        Pick a <Link href="/learn/" className="text-accent hover:underline">learning path</Link>,
        open a character, watch the stroke order, then practice writing it until it flows.
        Add characters to your learning list as you go. Come back daily — the{" "}
        <Link href="/review/" className="text-accent hover:underline">review queue</Link>{" "}
        uses spaced repetition to resurface characters right before you&apos;d forget them.
      </p>
      <h2 className="text-xl font-semibold">Open data</h2>
      <p className="text-muted">
        The stroke-order data and dictionary information come from wonderful open-source
        projects — see the <Link href="/credits/" className="text-accent hover:underline">credits page</Link>{" "}
        for attribution.
      </p>
    </article>
  );
}
