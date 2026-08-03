import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch: report a data error, suggest a feature, or ask a question about learning Chinese characters.",
  alternates: { canonical: "/contact/" },
};

const CONTACT_EMAIL = "ybyi00515@gmail.com";

export default function ContactPage() {
  return (
    <article className="prose-page max-w-2xl mx-auto flex flex-col gap-5">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="text-muted">
        The fastest way to reach me is email:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
          {CONTACT_EMAIL}
        </a>
        . I read everything, and usually reply within a couple of days.
      </p>
      <h2 className="text-xl font-semibold">What to write about</h2>
      <ul className="text-muted list-disc pl-5 flex flex-col gap-2">
        <li>
          <strong className="text-foreground">Data errors</strong> — a wrong pinyin, meaning,
          stroke count or example sentence on any{" "}
          <Link href="/characters/" className="text-accent hover:underline">character page</Link>.
          Please include the character and what you expected to see.
        </li>
        <li>
          <strong className="text-foreground">Feature ideas</strong> — something that would make
          practicing or <Link href="/review/" className="text-accent hover:underline">reviewing</Link>{" "}
          work better for you.
        </li>
        <li>
          <strong className="text-foreground">Bugs</strong> — anything broken, from audio that
          won&apos;t play to progress that won&apos;t save. Mentioning your browser helps.
        </li>
      </ul>
      <h2 className="text-xl font-semibold">A note on progress data</h2>
      <p className="text-muted">
        {SITE_NAME} stores your learning progress only in your own browser, so I can&apos;t see,
        recover or transfer it for you. If you&apos;re switching devices, use the export button on
        the <Link href="/progress/" className="text-accent hover:underline">Progress page</Link>{" "}
        first.
      </p>
    </article>
  );
}
