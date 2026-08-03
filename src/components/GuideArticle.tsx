import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { GUIDES, getGuide } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function guideMetadata(slug: string): Metadata {
  const g = getGuide(slug)!;
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}/` },
  };
}

export function GuideArticle({ slug, children }: { slug: string; children: React.ReactNode }) {
  const g = getGuide(slug)!;
  const related = GUIDES.filter((o) => o.slug !== slug).slice(0, 3);
  const url = `${SITE_URL}/guides/${g.slug}/`;

  return (
    <article className="max-w-2xl mx-auto">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.title,
          description: g.description,
          datePublished: g.date,
          dateModified: g.date,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: g.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />

      <header className="mb-2">
        <p className="text-sm text-muted">
          <Link href="/guides/" className="hover:text-accent">Guides</Link> /
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">{g.title}</h1>
        <p className="mt-3 text-muted">{g.description}</p>
        <p className="mt-2 text-xs text-muted uppercase tracking-wide">
          Updated {g.date}
        </p>
      </header>

      <div className="guide-prose">{children}</div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
        <dl className="flex flex-col gap-4">
          {g.faq.map((f) => (
            <div key={f.question} className="rounded-xl border border-border bg-card px-5 py-4">
              <dt className="font-medium">{f.question}</dt>
              <dd className="mt-1.5 text-sm text-muted leading-relaxed">{f.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 border-t border-border pt-6">
        <h2 className="text-sm uppercase tracking-wide text-muted mb-3">Keep reading</h2>
        <ul className="flex flex-col gap-2">
          {related.map((o) => (
            <li key={o.slug}>
              <Link href={`/guides/${o.slug}/`} className="text-accent hover:underline">
                {o.emoji} {o.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
