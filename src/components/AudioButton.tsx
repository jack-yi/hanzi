"use client";

import { useState } from "react";
import { playCharacterAudio, speakChinese } from "@/lib/audio";

export function AudioButton({
  audioKey,
  text,
  label,
  small,
}: {
  audioKey?: string | null;
  text: string;
  label?: string;
  small?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  const play = async () => {
    setPlaying(true);
    try {
      if (audioKey !== undefined) {
        await playCharacterAudio(audioKey, text);
      } else {
        await speakChinese(text);
      }
    } finally {
      setTimeout(() => setPlaying(false), 400);
    }
  };

  return (
    <button
      onClick={play}
      aria-label={`Play pronunciation of ${text}`}
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-card font-medium transition-colors hover:border-accent hover:text-accent ${
        small ? "px-2 py-0.5 text-xs" : "px-3.5 py-1.5 text-sm"
      } ${playing ? "text-accent border-accent" : ""}`}
    >
      <span aria-hidden>{playing ? "🔊" : "🔈"}</span>
      {label === "" ? null : (label ?? "Listen")}
    </button>
  );
}
