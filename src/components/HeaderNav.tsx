"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgressStore, useHasHydrated } from "@/store/progress";

const LINKS = [
  { href: "/characters/", label: "Characters" },
  { href: "/learn/", label: "Learn" },
  { href: "/guides/", label: "Guides" },
  { href: "/review/", label: "Review" },
  { href: "/progress/", label: "Progress" },
];

export function HeaderNav() {
  const pathname = usePathname();
  const hydrated = useHasHydrated();
  const dueCount = useProgressStore((s) => {
    const now = Date.now();
    return Object.values(s.characters).filter(
      (p) =>
        p.status !== "new" &&
        p.nextReviewAt !== undefined &&
        new Date(p.nextReviewAt).getTime() <= now
    ).length;
  });

  return (
    <nav className="flex items-center gap-1 sm:gap-2 text-sm overflow-x-auto">
      {LINKS.map((link) => {
        const active = pathname?.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-2.5 py-1.5 rounded-full whitespace-nowrap transition-colors ${
              active
                ? "bg-accent-soft text-accent font-medium"
                : "text-muted hover:text-foreground"
            }`}
          >
            {link.label}
            {link.href === "/review/" && hydrated && dueCount > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold min-w-4 h-4 px-1 align-middle">
                {dueCount}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
