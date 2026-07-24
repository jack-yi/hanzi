import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import { HeaderNav } from "@/components/HeaderNav";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <header className="border-b border-border bg-card/70 backdrop-blur sticky top-0 z-40">
          <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="hanzi text-2xl text-accent font-bold">字</span>
              <span className="font-semibold tracking-tight">{SITE_NAME}</span>
            </Link>
            <HeaderNav />
          </div>
        </header>

        <main className="flex-1 w-full mx-auto max-w-5xl px-4 py-8">{children}</main>

        <footer className="border-t border-border mt-12">
          <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted flex flex-wrap gap-x-6 gap-y-2 items-center justify-between">
            <p>
              {SITE_NAME} — {SITE_TAGLINE}. No account needed; progress stays in your browser.
            </p>
            <nav className="flex gap-4">
              <Link href="/about/" className="hover:text-accent">About</Link>
              <Link href="/privacy/" className="hover:text-accent">Privacy</Link>
              <Link href="/credits/" className="hover:text-accent">Credits</Link>
            </nav>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
