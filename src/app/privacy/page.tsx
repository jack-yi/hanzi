import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy: no accounts, no tracking of personal data — learning progress is stored only in your browser.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-5">
      <h1 className="text-3xl font-bold tracking-tight">Privacy</h1>
      <p className="text-muted">
        {SITE_NAME} is designed to work without collecting personal information.
      </p>
      <h2 className="text-xl font-semibold">What is stored, and where</h2>
      <p className="text-muted">
        Your learning progress — which characters you&apos;re learning, your practice counts,
        review schedule and streak — is stored in your browser&apos;s local storage on your
        own device. It is never uploaded anywhere. There are no accounts and no cookies used
        for tracking you across sites.
      </p>
      <h2 className="text-xl font-semibold">What this means for you</h2>
      <p className="text-muted">
        Because progress lives only in this browser: switching browsers or devices will not
        carry it over automatically; clearing browser data may remove it; and private/incognito
        windows won&apos;t keep it after the window closes. Use the export feature on the
        Progress page to make a backup file you control.
      </p>
      <h2 className="text-xl font-semibold">Pronunciation audio</h2>
      <p className="text-muted">
        When pre-recorded audio isn&apos;t available, the site uses your browser&apos;s
        built-in speech synthesis to pronounce Chinese text. This happens on your device
        (or through your browser vendor&apos;s speech service, depending on your browser).
      </p>
      <h2 className="text-xl font-semibold">Hosting logs</h2>
      <p className="text-muted">
        Like any website, the static files are delivered by a hosting provider that may keep
        standard technical logs (such as IP addresses) for security and operations. The site
        itself adds no analytics or tracking scripts.
      </p>
    </article>
  );
}
