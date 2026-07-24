// Build script: merges hand-curated HSK1 data with makemeahanzi (radical),
// hanzi-writer-data (stroke count + stroke SVG data) and opencc-js (traditional).
// Outputs:
//   src/data/characters.json  — full dataset used at build time (SSG)
//   src/data/search-index.json — light index for client-side search
//   public/stroke-data/<char>.json — Hanzi Writer stroke data, self-hosted
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import * as OpenCC from "opencc-js";
import { CHARS } from "./source/chars.mjs";
import { WORDS } from "./source/words.mjs";
import { SENTENCES, SIMILAR_GROUPS } from "./source/sentences.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const DICT_PATH = process.env.MMAH_DICT ?? path.resolve(root, "../makemeahanzi/dictionary.txt");

// ---------- pinyin (tone marks) -> numbered audio key, e.g. xué -> xue2 ----------
const TONED = {
  ā: ["a", 1], á: ["a", 2], ǎ: ["a", 3], à: ["a", 4],
  ē: ["e", 1], é: ["e", 2], ě: ["e", 3], è: ["e", 4],
  ī: ["i", 1], í: ["i", 2], ǐ: ["i", 3], ì: ["i", 4],
  ō: ["o", 1], ó: ["o", 2], ǒ: ["o", 3], ò: ["o", 4],
  ū: ["u", 1], ú: ["u", 2], ǔ: ["u", 3], ù: ["u", 4],
  ǖ: ["v", 1], ǘ: ["v", 2], ǚ: ["v", 3], ǜ: ["v", 4],
  ü: ["v", 0],
};
export function toAudioKey(syllable) {
  let tone = 5; // neutral
  let out = "";
  for (const ch of syllable.toLowerCase()) {
    const hit = TONED[ch];
    if (hit) {
      out += hit[0];
      if (hit[1] > 0) tone = hit[1];
    } else if (/[a-z]/.test(ch)) {
      out += ch;
    }
  }
  return out ? `${out}${tone}` : null;
}

// ---------- makemeahanzi: radical + decomposition ----------
const dict = new Map();
if (existsSync(DICT_PATH)) {
  for (const line of readFileSync(DICT_PATH, "utf8").split("\n")) {
    if (!line.trim()) continue;
    try {
      const e = JSON.parse(line);
      dict.set(e.character, e);
    } catch { /* skip bad line */ }
  }
} else {
  console.warn(`! makemeahanzi dictionary not found at ${DICT_PATH} — radicals will be empty`);
}

// ---------- hanzi-writer-data: stroke count + self-hosted stroke JSON ----------
const hwDataDir = path.join(root, "node_modules", "hanzi-writer-data");
const strokeOutDir = path.join(root, "public", "stroke-data");
mkdirSync(strokeOutDir, { recursive: true });

// ---------- traditional ----------
const s2t = OpenCC.Converter({ from: "cn", to: "tw" });

const missingStroke = [];
const characters = CHARS.map((entry) => {
  const { char, pinyin, meanings, topics } = entry;

  let strokeCount = null;
  const hwFile = path.join(hwDataDir, `${char}.json`);
  if (existsSync(hwFile)) {
    const hw = JSON.parse(readFileSync(hwFile, "utf8"));
    strokeCount = hw.strokes.length;
    writeFileSync(path.join(strokeOutDir, `${char}.json`), JSON.stringify(hw));
  } else {
    missingStroke.push(char);
  }

  const mmah = dict.get(char);
  const traditional = s2t(char);
  const words = WORDS.filter((w) => w.word.includes(char)).slice(0, 4);
  const sentences = SENTENCES.filter((s) => s.zh.includes(char)).slice(0, 3);
  const similar = [
    ...new Set(
      SIMILAR_GROUPS.filter((g) => g.includes(char))
        .flat()
        .filter((c) => c !== char && CHARS.some((e) => e.char === c))
    ),
  ];

  return {
    character: char,
    traditional: traditional !== char ? traditional : null,
    pinyin,
    audioKey: toAudioKey(pinyin[0]),
    meanings,
    hskLevel: 1,
    radical: mmah?.radical ?? null,
    strokeCount,
    topics,
    words,
    sentences,
    similar,
  };
});

// ---------- sanity checks ----------
const charSet = new Set(characters.map((c) => c.character));
const wordChars = new Set(WORDS.flatMap((w) => [...w.word].filter((ch) => /\p{Script=Han}/u.test(ch))));
const missingFromChars = [...wordChars].filter((ch) => !charSet.has(ch));
if (missingFromChars.length) {
  console.warn(`! chars used in WORDS but missing from CHARS: ${missingFromChars.join(" ")}`);
}
if (missingStroke.length) {
  console.warn(`! no hanzi-writer stroke data for: ${missingStroke.join(" ")}`);
}
const dupes = CHARS.map((c) => c.char).filter((ch, i, a) => a.indexOf(ch) !== i);
if (dupes.length) {
  console.error(`!! duplicate CHARS entries: ${[...new Set(dupes)].join(" ")}`);
  process.exit(1);
}
const noSentence = characters.filter((c) => c.sentences.length === 0).map((c) => c.character);
if (noSentence.length) console.warn(`! characters without example sentences: ${noSentence.join(" ")}`);

// ---------- outputs ----------
const dataDir = path.join(root, "src", "data");
mkdirSync(dataDir, { recursive: true });
writeFileSync(path.join(dataDir, "characters.json"), JSON.stringify(characters, null, 1));

const searchIndex = characters.map((c) => ({
  c: c.character,
  p: c.pinyin,
  pn: c.pinyin.map((py) => (toAudioKey(py) ?? "").replace(/[0-9]/g, "")),
  m: c.meanings,
  t: c.topics,
  s: c.strokeCount,
}));
writeFileSync(path.join(dataDir, "search-index.json"), JSON.stringify(searchIndex));

console.log(`✓ ${characters.length} characters written`);
console.log(`✓ stroke data self-hosted for ${characters.length - missingStroke.length} characters`);
