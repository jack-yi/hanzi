import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20 flex flex-col items-center gap-4">
      <p className="hanzi text-7xl text-accent">找不到</p>
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="text-muted max-w-md">
        This page doesn&apos;t exist — maybe the character you&apos;re looking for isn&apos;t
        in the HSK 1 set yet.
      </p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-full bg-accent text-white font-medium hover:opacity-90"
        >
          Go home
        </Link>
        <Link
          href="/characters/"
          className="px-5 py-2.5 rounded-full border border-border bg-card font-medium hover:border-accent hover:text-accent"
        >
          Browse characters
        </Link>
      </div>
    </div>
  );
}
