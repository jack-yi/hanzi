import type { Metadata } from "next";
import { ProgressDashboard } from "@/components/ProgressDashboard";

export const metadata: Metadata = {
  title: "Your progress",
  description:
    "Your Chinese character learning progress — stored only in your browser. Export it as JSON anytime, import it on another device.",
  alternates: { canonical: "/progress/" },
};

export default function ProgressPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Your progress</h1>
        <p className="mt-2 text-muted max-w-2xl">
          Everything below lives only in this browser — nothing is sent to any server. Export
          a backup before clearing browser data or switching devices.
        </p>
      </header>
      <ProgressDashboard />
    </div>
  );
}
