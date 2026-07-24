# Hanzi Garden 字

A privacy-friendly Chinese character learning site that works entirely in the browser.
Covers all **180 HSK 1 characters** with stroke-order animation, handwriting practice,
pinyin, meanings, example words & sentences, Mandarin pronunciation, and a local
spaced-repetition review system. No accounts, no backend — pure static export.

Built with **Next.js (static export) + TypeScript + Tailwind CSS + Hanzi Writer + Zustand**.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build (static export)

```bash
npm run build      # outputs a fully static site to ./out
```

Deploy `out/` to any static host (Cloudflare Pages, Vercel, Netlify, GitHub Pages, nginx…).
Before deploying, set your real domain in `src/lib/site.ts` (or the `NEXT_PUBLIC_SITE_URL`
env var) so the sitemap, robots.txt and canonical URLs are correct.

## Project layout

```
scripts/
  source/chars.mjs      # hand-curated HSK1 character list (pinyin, meanings, topics)
  source/words.mjs      # HSK1 vocabulary (attached to character pages by inclusion)
  source/sentences.mjs  # example sentences + similar-character groups
  build-data.mjs        # merges sources → src/data/*.json + public/stroke-data/*
src/
  app/                  # routes: /, /characters, /character/[char], /learn, /learn/[slug],
                        #         /review, /progress, /about, /privacy, /credits,
                        #         sitemap.xml, robots.txt, manifest
  components/           # HanziPractice (stroke animation + quiz), SearchBox, ReviewSession…
  lib/                  # data access, SRS algorithm, audio (MP3-first + TTS fallback)
  store/progress.ts     # Zustand store persisted to localStorage (v1 schema)
  data/                 # generated: characters.json, search-index.json (committed)
public/
  stroke-data/          # generated: per-character Hanzi Writer stroke JSON (committed)
  audio/syllables/      # drop reviewed MP3s here, named by numbered pinyin (xue2.mp3)
```

## Regenerating the character data

The generated files (`src/data/*.json`, `public/stroke-data/*`) are committed, so you only
need this when editing the source lists in `scripts/source/`:

```bash
# optional, for radical data: clone makemeahanzi as a sibling of this repo
git clone --depth 1 https://github.com/skishore/makemeahanzi ../makemeahanzi

npm run build:data
```

Without makemeahanzi the script still runs (it warns and leaves radicals empty), so don't
run it casually — you'd lose radical info until you re-run with the dictionary present.

## Audio strategy

1. If `public/audio/syllables/<audioKey>.mp3` exists (e.g. `xue2.mp3`, ü → v as in `nv3`),
   it is played.
2. Otherwise the browser's Mandarin speech synthesis is used (also for words/sentences).

To add real recordings, review files from [audio-cmn](https://github.com/hugolpz/audio-cmn)
(CC BY-SA — keep the attribution on `/credits`) and drop them into `public/audio/syllables/`.

## Learning progress

Progress lives in `localStorage` under `hanzi-learning-progress-v1` — see
`src/store/progress.ts` for the schema. Users can export/import it as JSON on `/progress`.

## Smoke test

```bash
npm run build
python3 -m http.server 8788 --directory out &
node scripts/verify.mjs   # headless Chromium: loads key pages, checks console + interactions
```
