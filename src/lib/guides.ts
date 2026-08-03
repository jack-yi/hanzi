export type GuideFaq = { question: string; answer: string };

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  emoji: string;
  faq: GuideFaq[];
};

export const GUIDES: GuideMeta[] = [
  {
    slug: "stroke-order-rules",
    title: "Chinese Stroke Order: The 8 Rules That Cover Almost Every Character",
    description:
      "Why stroke order matters, the eight rules that govern nearly every Chinese character, and the common exceptions beginners trip over.",
    date: "2026-08-03",
    emoji: "✍️",
    faq: [
      {
        question: "Does stroke order really matter for beginners?",
        answer:
          "Yes. Correct stroke order makes characters faster to write, easier to remember, and legible at speed. It also matters practically: handwriting input keyboards and this site's writing quiz both recognize characters by stroke sequence, so wrong order literally fails to register.",
      },
      {
        question: "What is the most important stroke order rule?",
        answer:
          "Top to bottom, left to right. If you remember nothing else, those two rules alone put most strokes in roughly the right sequence for the majority of characters.",
      },
      {
        question: "Are stroke order rules the same in China, Taiwan and Japan?",
        answer:
          "Mostly, but not always. A handful of characters have different official orders in mainland China, Taiwan and Japan. This site follows the mainland Chinese standard, which matches HSK study materials.",
      },
    ],
  },
  {
    slug: "pinyin-tones",
    title: "The Four Mandarin Tones (Plus the Neutral Tone): A Beginner's Guide",
    description:
      "How the four Mandarin tones work, how to hear and produce them, and why tone pairs — not isolated tones — are the fastest way to sound natural.",
    date: "2026-08-03",
    emoji: "🗣️",
    faq: [
      {
        question: "Can I learn Chinese without learning tones?",
        answer:
          "Not really. Tones are not decoration — they carry meaning the way vowels do in English. mǎi (买) means buy and mài (卖) means sell; skipping tones means native speakers must guess from context, and often they can't.",
      },
      {
        question: "Which Mandarin tone is hardest for learners?",
        answer:
          "Most beginners struggle with the third tone, because textbooks describe it as falling-rising while in natural speech it is usually just low. Learning it as a low tone fixes most third-tone problems.",
      },
      {
        question: "What is a neutral tone in Chinese?",
        answer:
          "A syllable with no tone mark, pronounced short and light, taking its pitch from the syllable before it. Common examples are the second syllables of 妈妈 (māma), 谢谢 (xièxie) and the particle 吗 (ma).",
      },
    ],
  },
  {
    slug: "hsk-1-study-plan",
    title: "A Realistic 30-Day Study Plan for All 180 HSK 1 Characters",
    description:
      "A day-by-day plan for learning every HSK 1 character in a month: how many new characters per day, when to review, and what to do when you fall behind.",
    date: "2026-08-03",
    emoji: "📅",
    faq: [
      {
        question: "How long does it take to learn HSK 1?",
        answer:
          "With 20–30 minutes a day, most learners can read and write the 180 HSK 1 characters comfortably in about a month. Reading-only recognition can be faster; solid handwriting takes the full month for most people.",
      },
      {
        question: "How many new Chinese characters should I learn per day?",
        answer:
          "Six to eight new characters a day is sustainable for beginners once daily review is factored in. Ten or more per day works for short bursts but usually collapses in week three when the review load peaks.",
      },
      {
        question: "Should I learn HSK 1 characters in order?",
        answer:
          "No — learn them in meaningful groups. Numbers, family words, pronouns and time words each form small clusters that reinforce each other, which is why this site organizes characters into topics rather than an alphabetical list.",
      },
    ],
  },
  {
    slug: "common-radicals",
    title: "Chinese Radicals for Beginners: The 15 You'll See Everywhere in HSK 1",
    description:
      "What radicals actually are, why they make characters easier to remember, and the fifteen radicals that appear again and again across the HSK 1 set.",
    date: "2026-08-03",
    emoji: "🧩",
    faq: [
      {
        question: "What is a radical in Chinese?",
        answer:
          "A radical is the component of a character under which it is indexed in dictionaries — usually a meaning-bearing part. 妈 (mā, mom) contains the woman radical 女 plus 马 (mǎ), which hints at the pronunciation.",
      },
      {
        question: "How many Chinese radicals do I need to know?",
        answer:
          "There are 214 traditional radicals, but you don't need to memorize the list. Knowing the 30–40 most frequent ones as they come up covers the vast majority of characters you'll meet through HSK 3.",
      },
      {
        question: "Do radicals tell you how to pronounce a character?",
        answer:
          "Radicals usually hint at meaning, not sound. Pronunciation hints more often come from the other component: in 妈 (mā), the radical 女 supplies the meaning while 马 (mǎ) supplies the sound.",
      },
    ],
  },
  {
    slug: "handwriting-practice",
    title: "How to Practice Writing Chinese Characters (Without Wasting Time)",
    description:
      "A practice routine that actually builds handwriting: tracing versus recall, how many repetitions matter, and the mistakes that make practice useless.",
    date: "2026-08-03",
    emoji: "🖌️",
    faq: [
      {
        question: "How many times should I write each Chinese character?",
        answer:
          "Five to ten attentive repetitions beat fifty mindless ones. Research on motor learning and the experience of generations of Chinese schoolchildren agree: once you can produce the character from memory twice in a row, further copying adds little.",
      },
      {
        question: "Is it better to write Chinese characters on paper or on a screen?",
        answer:
          "Both work. Screen practice with stroke checking, like this site's quiz mode, gives instant feedback on order and placement; paper builds finer motor control. Ideal is screen first for feedback, paper afterwards for polish.",
      },
      {
        question: "Should beginners learn to write every character they can read?",
        answer:
          "At the HSK 1 level, yes — writing all 180 cements them permanently. From HSK 3 onward many learners switch to writing only high-frequency characters and typing the rest, which is a reasonable trade-off.",
      },
    ],
  },
  {
    slug: "spaced-repetition",
    title: "Spaced Repetition for Chinese Characters: Why Cramming Fails",
    description:
      "How forgetting actually works, why reviewing at expanding intervals beats massed repetition, and how to use a review queue without letting it bury you.",
    date: "2026-08-03",
    emoji: "🔁",
    faq: [
      {
        question: "What is spaced repetition?",
        answer:
          "A review method that schedules each item right before you would forget it, at expanding intervals — for example after 1 day, 3 days, a week, then a month. Each successful recall pushes the next review further out.",
      },
      {
        question: "How many minutes a day should I spend reviewing?",
        answer:
          "For a 180-character set like HSK 1, daily review settles around 5–10 minutes once the initial learning wave passes. The essential habit is doing it every day — a missed week turns a 5-minute queue into a demoralizing hour.",
      },
      {
        question: "Is spaced repetition enough to learn Chinese on its own?",
        answer:
          "No. Spaced repetition maintains memories; it doesn't create understanding. Learn a character properly first — stroke order, words it appears in, a sentence or two — then let the review queue keep it alive.",
      },
    ],
  },
  {
    slug: "simplified-vs-traditional",
    title: "Simplified vs Traditional Chinese Characters: What Beginners Actually Need to Know",
    description:
      "Where each script is used, how different they really are, and why the choice matters far less at the beginner stage than most learners fear.",
    date: "2026-08-03",
    emoji: "🈶",
    faq: [
      {
        question: "Should I learn simplified or traditional Chinese characters?",
        answer:
          "Learn the script of the place or materials you'll actually use: simplified for mainland China, Singapore and the HSK exam; traditional for Taiwan and Hong Kong. For HSK study, that decision is already made — the exam uses simplified.",
      },
      {
        question: "How different are simplified and traditional characters?",
        answer:
          "Less than beginners fear. Roughly a third of common characters were simplified at all, and many changes follow patterns (the speech radical 言 became 讠, for example). A reader of one script can usually adapt to the other in weeks, not years.",
      },
      {
        question: "Can I learn both simplified and traditional at the same time?",
        answer:
          "You can, but as a beginner it splits your attention for little gain. A better route: learn one script solidly, glance at the other form when a character page shows it, and do a focused conversion pass later if you need it.",
      },
    ],
  },
  {
    slug: "how-many-characters",
    title: "How Many Chinese Characters Do You Need to Know?",
    description:
      "The real numbers behind Chinese literacy: what 180, 500, 1,500 and 3,000 characters each unlock, and why frequency makes the first hundred disproportionately powerful.",
    date: "2026-08-03",
    emoji: "🔢",
    faq: [
      {
        question: "How many Chinese characters are there in total?",
        answer:
          "Large dictionaries list over 50,000, but the overwhelming majority are rare, archaic or variant forms. Modern general-purpose literacy runs on a much smaller core: about 3,500 characters cover essentially all everyday written Chinese.",
      },
      {
        question: "How many characters does a native Chinese speaker know?",
        answer:
          "An educated adult typically recognizes 3,000–4,000 characters. Chinese primary school students learn roughly 2,500 over six years — a useful reality check on pacing for adult learners.",
      },
      {
        question: "Can I read a newspaper with 1,000 characters?",
        answer:
          "Partially. The most frequent 1,000 characters cover roughly 90% of running text, but the missing 10% is often exactly where the meaning lives. Comfortable newspaper reading starts around 2,500–3,000 characters.",
      },
    ],
  },
];

export function getGuide(slug: string): GuideMeta | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
