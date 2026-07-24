"use client";

import { useEffect, useRef, useState } from "react";
import type HanziWriterType from "hanzi-writer";
import { useProgressStore } from "@/store/progress";

type Mode = "idle" | "animating" | "practice" | "test";

const SIZE = 280;

async function loadCharData(char: string) {
  const res = await fetch(`/stroke-data/${encodeURIComponent(char)}.json`);
  if (!res.ok) throw new Error(`No stroke data for ${char}`);
  return res.json();
}

export function HanziPractice({ character }: { character: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriterType | null>(null);
  const [mode, setMode] = useState<Mode>("idle");
  const [result, setResult] = useState<string | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const recordPractice = useProgressStore((s) => s.recordPractice);

  useEffect(() => {
    let cancelled = false;
    let writer: HanziWriterType | null = null;

    (async () => {
      const HanziWriter = (await import("hanzi-writer")).default;
      if (cancelled || !containerRef.current) return;
      containerRef.current.innerHTML = "";
      // hanzi-writer needs concrete color values — resolve the CSS variables.
      const styles = getComputedStyle(document.documentElement);
      const strokeColor = styles.getPropertyValue("--foreground").trim() || "#1c1917";
      const drawingColor = styles.getPropertyValue("--accent").trim() || "#c53030";
      try {
        writer = HanziWriter.create(containerRef.current, character, {
          width: SIZE,
          height: SIZE,
          padding: 12,
          showOutline: true,
          showCharacter: true,
          strokeColor,
          outlineColor: "#b0a89e",
          drawingColor,
          drawingWidth: 14,
          charDataLoader: (char, onComplete) => {
            loadCharData(char)
              .then(onComplete)
              .catch(() => setUnavailable(true));
          },
        });
        writerRef.current = writer;
      } catch {
        setUnavailable(true);
      }
    })();

    return () => {
      cancelled = true;
      writerRef.current = null;
    };
  }, [character]);

  const animate = () => {
    const writer = writerRef.current;
    if (!writer) return;
    setResult(null);
    setMode("animating");
    writer.cancelQuiz();
    writer.showOutline();
    writer.animateCharacter({
      onComplete: () => setMode("idle"),
    });
  };

  const startQuiz = (test: boolean) => {
    const writer = writerRef.current;
    if (!writer) return;
    setResult(null);
    setMode(test ? "test" : "practice");
    if (test) {
      writer.hideOutline();
    } else {
      writer.showOutline();
    }
    writer.quiz({
      showHintAfterMisses: test ? 3 : 1,
      onComplete: ({ totalMistakes }: { totalMistakes: number }) => {
        recordPractice(character, totalMistakes);
        setMode("idle");
        writer.showOutline();
        setResult(
          totalMistakes === 0
            ? "Perfect! Every stroke was right. 🎉"
            : `Done — ${totalMistakes} ${totalMistakes === 1 ? "mistake" : "mistakes"}. Keep practicing!`
        );
      },
    });
  };

  if (unavailable) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-center text-muted">
        Stroke data for this character isn&apos;t available.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="rice-grid rounded-2xl border border-border bg-card"
        style={{ width: SIZE, height: SIZE }}
        ref={containerRef}
        aria-label={`Stroke practice area for ${character}`}
      />
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={animate}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            mode === "animating"
              ? "bg-accent text-white border-accent"
              : "border-border bg-card hover:border-accent hover:text-accent"
          }`}
        >
          ▶ Stroke order
        </button>
        <button
          onClick={() => startQuiz(false)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            mode === "practice"
              ? "bg-accent text-white border-accent"
              : "border-border bg-card hover:border-accent hover:text-accent"
          }`}
        >
          ✍️ Practice
        </button>
        <button
          onClick={() => startQuiz(true)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
            mode === "test"
              ? "bg-accent text-white border-accent"
              : "border-border bg-card hover:border-accent hover:text-accent"
          }`}
        >
          🧠 Test yourself
        </button>
      </div>
      {mode === "practice" && (
        <p className="text-sm text-muted">Trace the strokes in the right order.</p>
      )}
      {mode === "test" && (
        <p className="text-sm text-muted">Write from memory — hints appear after 3 misses.</p>
      )}
      {result && <p className="text-sm font-medium text-accent">{result}</p>}
    </div>
  );
}
