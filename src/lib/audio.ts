"use client";

/**
 * Audio strategy (per project plan):
 * 1. If a reviewed static MP3 exists for the syllable (public/audio/syllables/<key>.mp3),
 *    play it.
 * 2. Otherwise fall back to the browser's Mandarin TTS voice.
 * Sentences always use TTS.
 */

let voicesReady = false;
function ensureVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    if (voices.length > 0 || voicesReady) {
      voicesReady = true;
      resolve(voices);
      return;
    }
    const timer = setTimeout(() => resolve(synth.getVoices()), 1500);
    synth.addEventListener(
      "voiceschanged",
      () => {
        voicesReady = true;
        clearTimeout(timer);
        resolve(synth.getVoices());
      },
      { once: true }
    );
  });
}

export async function speakChinese(text: string, rate = 0.8): Promise<void> {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = rate;

  const voices = await ensureVoices();
  const voice =
    voices.find((v) => v.lang === "zh-CN") ??
    voices.find((v) => v.lang.startsWith("zh"));
  if (voice) utterance.voice = voice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

/** Cache of syllable keys known to be missing, to avoid repeated 404s. */
const missingAudio = new Set<string>();

export async function playCharacterAudio(
  audioKey: string | null,
  fallbackText: string
): Promise<void> {
  if (audioKey && !missingAudio.has(audioKey)) {
    try {
      const audio = new Audio(`/audio/syllables/${audioKey}.mp3`);
      await new Promise<void>((resolve, reject) => {
        audio.addEventListener("canplaythrough", () => resolve(), { once: true });
        audio.addEventListener("error", () => reject(new Error("missing")), { once: true });
        audio.load();
      });
      await audio.play();
      return;
    } catch {
      missingAudio.add(audioKey);
    }
  }
  await speakChinese(fallbackText);
}
