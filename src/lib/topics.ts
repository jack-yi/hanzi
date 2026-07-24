export type Topic = {
  slug: string;
  tag: string; // tag used in character data ("hsk-1" = all)
  title: string;
  zh: string;
  description: string;
  emoji: string;
};

export const TOPICS: Topic[] = [
  {
    slug: "hsk-1",
    tag: "hsk-1",
    title: "HSK 1 — All Characters",
    zh: "全部",
    description: "Every character on this site: the full HSK 1 set, 180 essential characters for beginners.",
    emoji: "📚",
  },
  {
    slug: "numbers",
    tag: "numbers",
    title: "Numbers & Money",
    zh: "数字",
    description: "Count from zero to a hundred, ask prices and talk about money.",
    emoji: "🔢",
  },
  {
    slug: "time",
    tag: "time",
    title: "Time & Dates",
    zh: "时间",
    description: "Days, months, weeks, hours — say when things happen.",
    emoji: "🕐",
  },
  {
    slug: "family",
    tag: "family",
    title: "Family",
    zh: "家庭",
    description: "Talk about parents, children and the people at home.",
    emoji: "👨‍👩‍👧",
  },
  {
    slug: "people",
    tag: "people",
    title: "People & Pronouns",
    zh: "人",
    description: "I, you, he, she — plus teachers, friends, doctors and names.",
    emoji: "🧑‍🤝‍🧑",
  },
  {
    slug: "food",
    tag: "food",
    title: "Food & Drink",
    zh: "饮食",
    description: "Eat, drink, order tea and talk about everyday meals.",
    emoji: "🍚",
  },
  {
    slug: "school",
    tag: "school",
    title: "School & Learning",
    zh: "学习",
    description: "Study, read, write — the characters of the classroom.",
    emoji: "✏️",
  },
  {
    slug: "travel",
    tag: "travel",
    title: "Travel & Places",
    zh: "出行",
    description: "Get around: vehicles, stations, shops, countries and directions.",
    emoji: "✈️",
  },
  {
    slug: "weather",
    tag: "weather",
    title: "Weather",
    zh: "天气",
    description: "Hot, cold, rain and sky — small talk essentials.",
    emoji: "🌦️",
  },
  {
    slug: "everyday",
    tag: "everyday",
    title: "Everyday Essentials",
    zh: "日常",
    description: "Core verbs, adjectives and particles that glue sentences together.",
    emoji: "🏠",
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
