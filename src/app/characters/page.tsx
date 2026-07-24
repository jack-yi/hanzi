import type { Metadata } from "next";
import { CharacterBrowser } from "@/components/CharacterBrowser";

export const metadata: Metadata = {
  title: "All HSK 1 Chinese characters",
  description:
    "Browse all 180 HSK 1 Chinese characters with pinyin and meanings. Filter by topic, search by hanzi, pinyin or English.",
  alternates: { canonical: "/characters/" },
};

export default function CharactersPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">All characters</h1>
        <p className="mt-2 text-muted">
          Every HSK 1 character on the site. Click any character for stroke order, writing
          practice and pronunciation.
        </p>
      </header>
      <CharacterBrowser />
    </div>
  );
}
