export type Topic = {
  slug: string;
  tag: string; // tag used in character data ("hsk-1" = all)
  title: string;
  zh: string;
  description: string;
  emoji: string;
  intro: string[];
};

export const TOPICS: Topic[] = [
  {
    slug: "hsk-1",
    tag: "hsk-1",
    title: "HSK 1 — All Characters",
    zh: "全部",
    description: "Every character on this site: the full HSK 1 set, 180 essential characters for beginners.",
    emoji: "📚",
    intro: [
      "HSK 1 is the first level of the Hanyu Shuiping Kaoshi, China's standard test of Mandarin for foreign learners, and its character set is the closest thing Chinese has to an official beginner's syllabus. These 180 characters were chosen for brutal practicality: they are among the most frequent characters in the entire language, and together they cover the vocabulary of daily survival — greetings, numbers, family, food, time, and the grammatical glue that holds sentences together.",
      "Don't work through this list top to bottom. The topic paths above slice the same 180 characters into meaningful groups that reinforce each other, which is measurably easier on memory than alphabetical grinding. Use this full-set view for what it's good at: seeing how far you've come, spotting gaps, and finding a specific character fast. If you're starting from zero, begin with Numbers or People instead — and if you want a day-by-day route through the whole set, the 30-day study plan in our guides section paces it out.",
    ],
  },
  {
    slug: "numbers",
    tag: "numbers",
    title: "Numbers & Money",
    zh: "数字",
    description: "Count from zero to a hundred, ask prices and talk about money.",
    emoji: "🔢",
    intro: [
      "Chinese numbers are the single best place to start learning characters, for a simple reason: the system is almost perfectly logical. Learn 一 through 十 — ten characters — and you can already form every number to ninety-nine: 二十 is two-tens, 二十五 is two-tens-five. There are no irregular forms to memorize, no 'eleven' or 'twelve' to trip over. Most learners have the core down in a day or two.",
      "The same characters immediately unlock money and shopping. 块 (kuài) is the everyday unit of currency, 钱 (qián) is money itself, and 多少钱 — how much money — may be the most useful three-character question a beginner can ask. Numbers also carry into dates, phone numbers and ages, which is why this small topic quietly powers half the others on this site.",
    ],
  },
  {
    slug: "time",
    tag: "time",
    title: "Time & Dates",
    zh: "时间",
    description: "Days, months, weeks, hours — say when things happen.",
    emoji: "🕐",
    intro: [
      "Time words are where Chinese starts feeling refreshingly simple. There are no tenses to conjugate: 今天 (today), 明天 (tomorrow) and 昨天 (yesterday) do the work that verb endings do in European languages. The days of the week are just numbers — 星期一 is literally 'week-one' for Monday — and the months follow the same pattern, with 一月 for January through 十二月 for December.",
      "Notice how much this topic recycles the numbers you already know: dates, hours (三点 is three o'clock), and weekdays are all number-plus-unit constructions. That's deliberate — Chinese builds complex meaning by stacking simple, regular pieces, and time vocabulary is your first extended demonstration of it. Learn 年 (year), 月 (month), 日 (day) and 点 (o'clock) and the calendar is essentially yours.",
    ],
  },
  {
    slug: "family",
    tag: "family",
    title: "Family",
    zh: "家庭",
    description: "Talk about parents, children and the people at home.",
    emoji: "👨‍👩‍👧",
    intro: [
      "Family words are among the first characters any learner meets, and several are small works of art. 家 — home, family — is a pig under a roof, a snapshot of ancient farmyard life fossilized into writing. 妈 (mom) pairs the woman radical 女 with 马 for its sound; 好 (good) joins woman and child — the character system's own commentary on what goodness looked like three thousand years ago.",
      "A cultural note that saves confusion later: Chinese kinship terms are more precise than English ones. Even at HSK 1 you'll see that 哥哥 (older brother) and 弟弟 (younger brother) are different words, as are 姐姐 and 妹妹 for sisters — there is no plain word for 'brother' that ignores age. The characters in this path cover the immediate household; the extended family tree, mercifully, waits for later levels.",
    ],
  },
  {
    slug: "people",
    tag: "people",
    title: "People & Pronouns",
    zh: "人",
    description: "I, you, he, she — plus teachers, friends, doctors and names.",
    emoji: "🧑‍🤝‍🧑",
    intro: [
      "Pronouns are the highest-frequency characters in the entire language, and Chinese makes them easy: 我 (I), 你 (you) and 他 (he) never change form. There's no me/my/mine — 我 covers all of it, with the particle 的 handling possession. Add 们 to any of them and you have a plural: 我们, we; 你们, you all. Two characters of grammar replace an entire pronoun table.",
      "This path also introduces the person radical 亻, one of the most productive components in the writing system: you'll find it inside 你, 他 and 们 already, and dozens more characters later. Spotting it now — a squeezed-thin version of 人 (person) standing at the left edge — is your first taste of reading characters by structure rather than memorizing them stroke by stroke.",
    ],
  },
  {
    slug: "food",
    tag: "food",
    title: "Food & Drink",
    zh: "饮食",
    description: "Eat, drink, order tea and talk about everyday meals.",
    emoji: "🍚",
    intro: [
      "Food characters come with a built-in logic lesson. 吃 (eat) and 喝 (drink) both carry the mouth radical 口; 饭 (rice, meal) and other food characters share the food radical 饣. Once you notice this, menus stop being random symbols: the radical tells you the category before you've identified the character. 米饭 is cooked rice, 茶 is tea — a character that has traveled the world, since English 'cha' and 'chai' both descend from it.",
      "Culturally, this is the vocabulary of connection. 吃饭 (eat a meal) is the anchor of Chinese social life, and 你吃了吗? — have you eaten? — historically served as a casual greeting, the equivalent of 'how are you?'. Learn these characters and the everyday warmth of the language starts showing through the writing system.",
    ],
  },
  {
    slug: "school",
    tag: "school",
    title: "School & Learning",
    zh: "学习",
    description: "Study, read, write — the characters of the classroom.",
    emoji: "✏️",
    intro: [
      "The classroom characters carry more cultural weight than any other beginner set. 学 (study) appears in 学生 (student, a 'study-person'), 学校 (school) and 大学 (university, literally 'big learning'). 字 itself — character, the writing you're learning right now — shows a child under a roof, a tidy image of where literacy begins. The very name of this site lives inside this topic.",
      "Two compounds here are worth savoring. 老师 (teacher) leads with 老, 'old' — a title of respect in a culture where age implies earned wisdom. And 中文 (Chinese language) contains 中 from 中国, the Middle Kingdom. These aren't just vocabulary: they're the first pieces of how the language talks about itself, and every one of them will follow you to the end of your studies.",
    ],
  },
  {
    slug: "travel",
    tag: "travel",
    title: "Travel & Places",
    zh: "出行",
    description: "Get around: vehicles, stations, shops, countries and directions.",
    emoji: "✈️",
    intro: [
      "Travel characters show off Chinese compound-building at its most satisfying. 车 (vehicle) — originally a pictograph of a cart viewed from above — combines into 火车 (fire-cart: train) and 出租车 (rent-out-vehicle: taxi). 飞机 is a fly-machine: airplane. Rather than inventing a new word for each technology, Chinese assembles transparent descriptions from parts you already know — which means every character in this path multiplies the vocabulary you can read.",
      "The direction and place words here — 上 (up), 下 (down), 里 (inside) — do double duty far beyond navigation. 上 and 下 also mean previous and next, appear in 上班 (going to work), and pair with 车 in 上车/下车, getting on and off a vehicle. Few characters in the language work harder, and this is where you meet them.",
    ],
  },
  {
    slug: "weather",
    tag: "weather",
    title: "Weather",
    zh: "天气",
    description: "Hot, cold, rain and sky — small talk essentials.",
    emoji: "🌦️",
    intro: [
      "Weather is prime small-talk territory in Chinese, just as everywhere else, and its characters are unusually pictorial. 雨 (rain) still looks like drops falling past a window — one of the clearest surviving pictographs in the modern script. 天 (sky, day) tops the character 大 (big) with a horizontal stroke: the thing above everything big. 天气 — sky-breath — is the weather itself.",
      "The adjectives here demonstrate a handy grammatical fact: Chinese doesn't need 'to be' before qualities. 今天很热 — today very hot — is a complete, correct sentence; 热 (hot) and 冷 (cold) act as verbs on their own. Master this tiny pattern with weather words and you can suddenly comment on food, rooms, people and everything else that has a temperature or a quality.",
    ],
  },
  {
    slug: "everyday",
    tag: "everyday",
    title: "Everyday Essentials",
    zh: "日常",
    description: "Core verbs, adjectives and particles that glue sentences together.",
    emoji: "🏠",
    intro: [
      "This path collects the characters that hold every Chinese sentence together — the ones too common to belong to any single theme. 的 tops the frequency chart for the entire written language: it marks possession the way apostrophe-s does in English (我的 — mine). 是 (to be), 有 (to have), 不 and 没 (the two flavors of 'not') form the skeleton of nearly every statement you'll ever make or read.",
      "None of these characters is glamorous, and that's precisely their value: at roughly 50% text coverage, the HSK 1 set only works because these glue characters appear in almost every sentence. Learn them early and every example sentence on this site becomes half-readable at once. They also star in the two most useful particles for a beginner: 吗, which turns any statement into a question, and 呢, which bounces a question back — 你呢? And you?",
    ],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}
