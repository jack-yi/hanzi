export type WordEntry = {
  word: string;
  pinyin: string;
  meaning: string;
};

export type SentenceEntry = {
  zh: string;
  pinyin: string;
  en: string;
};

export type CharacterData = {
  character: string;
  traditional: string | null;
  pinyin: string[];
  audioKey: string | null;
  meanings: string[];
  hskLevel: number;
  radical: string | null;
  strokeCount: number | null;
  topics: string[];
  words: WordEntry[];
  sentences: SentenceEntry[];
  similar: string[];
};

export type SearchIndexEntry = {
  /** character */
  c: string;
  /** pinyin with tone marks */
  p: string[];
  /** pinyin without tones, ascii (for matching) */
  pn: string[];
  /** meanings */
  m: string[];
  /** topics */
  t: string[];
  /** stroke count */
  s: number | null;
};

export type CharacterStatus = "new" | "learning" | "learned";

export type ReviewResult = "again" | "hard" | "good" | "easy";

export type CharacterProgress = {
  status: CharacterStatus;
  practiceCount: number;
  correctCount: number;
  mistakeCount: number;
  reviewLevel: number;
  lastPracticedAt?: string;
  nextReviewAt?: string;
};

export type LearningState = {
  version: 1;
  streak: number;
  lastStudyDate?: string;
  characters: Record<string, CharacterProgress>;
};
