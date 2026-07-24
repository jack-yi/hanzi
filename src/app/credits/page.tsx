import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Credits & data sources",
  description:
    "Open-source projects and data that power this site: Hanzi Writer, Make Me a Hanzi, and more.",
  alternates: { canonical: "/credits/" },
};

const CREDITS = [
  {
    name: "Hanzi Writer",
    url: "https://hanziwriter.org/",
    license: "MIT",
    what: "Stroke-order animation and handwriting quiz engine.",
  },
  {
    name: "Hanzi Writer Data (from Make Me a Hanzi)",
    url: "https://github.com/chanind/hanzi-writer-data",
    license: "Arphic Public License / LGPL",
    what: "Per-character stroke vector data, self-hosted on this site.",
  },
  {
    name: "Make Me a Hanzi",
    url: "https://github.com/skishore/makemeahanzi",
    license: "Arphic Public License / LGPL",
    what: "Radical and dictionary data used when building the character database.",
  },
  {
    name: "OpenCC",
    url: "https://github.com/BYVoid/OpenCC",
    license: "Apache 2.0",
    what: "Simplified ↔ traditional character conversion (at build time).",
  },
  {
    name: "audio-cmn",
    url: "https://github.com/hugolpz/audio-cmn",
    license: "CC BY-SA",
    what: "Planned source of recorded Mandarin syllable audio. Until recordings are added and reviewed, the site uses your browser's speech synthesis.",
  },
];

export default function CreditsPage() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Credits &amp; data sources</h1>
        <p className="mt-2 text-muted">
          {SITE_NAME} stands on excellent open-source work. Thank you to these projects:
        </p>
      </header>
      <ul className="flex flex-col gap-4">
        {CREDITS.map((cr) => (
          <li key={cr.name} className="rounded-xl border border-border bg-card px-5 py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <a
                href={cr.url}
                rel="noopener noreferrer"
                target="_blank"
                className="font-semibold text-accent hover:underline"
              >
                {cr.name}
              </a>
              <span className="text-xs text-muted rounded-full border border-border px-2 py-0.5">
                {cr.license}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted">{cr.what}</p>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted">
        The HSK 1 character list, English glosses, example words and sentences were curated
        for this site. If you spot an error, corrections are welcome.
      </p>
    </article>
  );
}
