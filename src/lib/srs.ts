import type { ReviewResult } from "./types";

/** Days until next review, indexed by current review level (0–4). */
const INTERVALS: Record<ReviewResult, number[]> = {
  again: [0, 1, 1, 2, 3],
  hard: [1, 1, 2, 4, 7],
  good: [1, 3, 7, 14, 30],
  easy: [3, 7, 14, 30, 60],
};

export const MAX_LEVEL = 4;

export function nextLevel(level: number, result: ReviewResult): number {
  switch (result) {
    case "again":
      return 0;
    case "hard":
      return level;
    case "good":
      return Math.min(level + 1, MAX_LEVEL);
    case "easy":
      return Math.min(level + 2, MAX_LEVEL);
  }
}

export function calculateNextReview(level: number, result: ReviewResult, now = Date.now()): number {
  const list = INTERVALS[result];
  const days = list[Math.min(Math.max(level, 0), list.length - 1)];
  return now + days * 24 * 60 * 60 * 1000;
}
