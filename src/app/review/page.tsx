import type { Metadata } from "next";
import { ReviewSession } from "@/components/ReviewSession";

export const metadata: Metadata = {
  title: "Review — spaced repetition",
  description:
    "Review the Chinese characters you're learning with a simple spaced-repetition system. Everything runs in your browser.",
  alternates: { canonical: "/review/" },
};

export default function ReviewPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Review</h1>
        <p className="mt-2 text-muted">
          Characters come back for review just before you&apos;d forget them. Rate each one
          honestly — the schedule adapts.
        </p>
      </header>
      <ReviewSession />
    </div>
  );
}
