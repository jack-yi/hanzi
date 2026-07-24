"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useProgressStore, useHasHydrated } from "@/store/progress";
import { getCharacter } from "@/lib/characters";
import type { ReviewResult } from "@/lib/types";
import { AudioButton } from "./AudioButton";

export function ReviewSession() {
  const hydrated = useHasHydrated();
  const progress = useProgressStore((s) => s.characters);
  const recordReview = useProgressStore((s) => s.recordReview);

  // Queue is computed once per session start so rating doesn't reshuffle it.
  const [sessionStarted, setSessionStarted] = useState(false);
  const [queue, setQueue] = useState<string[]>([]);
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [doneCount, setDoneCount] = useState(0);

  const dueNow = useMemo(() => {
    const now = Date.now();
    return Object.entries(progress)
      .filter(
        ([, p]) =>
          p.status !== "new" &&
          p.nextReviewAt !== undefined &&
          new Date(p.nextReviewAt).getTime() <= now
      )
      .map(([char]) => char)
      .filter((char) => getCharacter(char));
  }, [progress]);

  const learningPool = useMemo(
    () =>
      Object.entries(progress)
        .filter(([, p]) => p.status === "learning")
        .map(([char]) => char)
        .filter((char) => getCharacter(char)),
    [progress]
  );

  if (!hydrated) {
    return <p className="text-muted">Loading your progress…</p>;
  }

  const start = (chars: string[]) => {
    setQueue([...chars].sort(() => Math.random() - 0.5));
    setPos(0);
    setDoneCount(0);
    setRevealed(false);
    setSessionStarted(true);
  };

  if (!sessionStarted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center flex flex-col items-center gap-4">
        {dueNow.length > 0 ? (
          <>
            <p className="text-4xl" aria-hidden>🔁</p>
            <p className="text-lg font-medium">
              {dueNow.length} {dueNow.length === 1 ? "character is" : "characters are"} due for
              review
            </p>
            <button
              onClick={() => start(dueNow)}
              className="px-6 py-2.5 rounded-full bg-accent text-white font-medium hover:opacity-90"
            >
              Start review
            </button>
          </>
        ) : learningPool.length > 0 ? (
          <>
            <p className="text-4xl" aria-hidden>✅</p>
            <p className="text-lg font-medium">Nothing due right now — nice work!</p>
            <p className="text-sm text-muted">
              You can still do an extra practice round with the {learningPool.length}{" "}
              characters you&apos;re learning.
            </p>
            <button
              onClick={() => start(learningPool)}
              className="px-6 py-2.5 rounded-full border border-border bg-card font-medium hover:border-accent hover:text-accent"
            >
              Practice anyway
            </button>
          </>
        ) : (
          <>
            <p className="text-4xl" aria-hidden>🌱</p>
            <p className="text-lg font-medium">No characters to review yet</p>
            <p className="text-sm text-muted max-w-sm">
              Add characters to your learning list first — open any character page and press
              “Add to learning”, or start with a learning path.
            </p>
            <Link
              href="/learn/"
              className="px-6 py-2.5 rounded-full bg-accent text-white font-medium hover:opacity-90"
            >
              Browse learning paths
            </Link>
          </>
        )}
      </div>
    );
  }

  if (pos >= queue.length) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center flex flex-col items-center gap-4">
        <p className="text-4xl" aria-hidden>🎉</p>
        <p className="text-lg font-medium">Session complete — {doneCount} reviewed</p>
        <button
          onClick={() => setSessionStarted(false)}
          className="px-6 py-2.5 rounded-full border border-border bg-card font-medium hover:border-accent hover:text-accent"
        >
          Back to review home
        </button>
      </div>
    );
  }

  const char = queue[pos];
  const data = getCharacter(char)!;

  const rate = (result: ReviewResult) => {
    recordReview(char, result);
    setDoneCount((n) => n + 1);
    setRevealed(false);
    setPos((p) => p + 1);
  };

  const rateBtn =
    "flex-1 px-3 py-2.5 rounded-xl border text-sm font-medium transition-colors";

  return (
    <div className="max-w-lg mx-auto w-full flex flex-col gap-4">
      <p className="text-sm text-muted text-center">
        {pos + 1} / {queue.length}
      </p>
      <div className="rounded-2xl border border-border bg-card p-8 text-center min-h-72 flex flex-col items-center justify-center gap-4">
        <p className="hanzi text-8xl">{char}</p>
        {revealed ? (
          <>
            <p className="text-xl text-accent font-medium">{data.pinyin.join(" / ")}</p>
            <p className="text-muted">{data.meanings.join("; ")}</p>
            <div className="flex gap-2">
              <AudioButton audioKey={data.audioKey} text={char} />
              <Link
                href={`/character/${char}/`}
                className="px-3.5 py-1.5 rounded-full border border-border bg-card text-sm font-medium hover:border-accent hover:text-accent"
              >
                Open page
              </Link>
            </div>
          </>
        ) : (
          <p className="text-sm text-muted">Say the pinyin and meaning out loud, then check.</p>
        )}
      </div>

      {revealed ? (
        <div className="flex gap-2">
          <button onClick={() => rate("again")} className={`${rateBtn} border-red-300 text-red-600 hover:bg-red-50 dark:hover:bg-red-950`}>
            Again
          </button>
          <button onClick={() => rate("hard")} className={`${rateBtn} border-amber-300 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950`}>
            Hard
          </button>
          <button onClick={() => rate("good")} className={`${rateBtn} border-emerald-300 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950`}>
            Good
          </button>
          <button onClick={() => rate("easy")} className={`${rateBtn} border-sky-300 text-sky-600 hover:bg-sky-50 dark:hover:bg-sky-950`}>
            Easy
          </button>
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:opacity-90"
        >
          Show answer
        </button>
      )}
    </div>
  );
}
