import type { CharacterData } from "./types";
import charactersJson from "@/data/characters.json";

const characters = charactersJson as CharacterData[];

export function getAllCharacters(): CharacterData[] {
  return characters;
}

export function getCharacter(char: string): CharacterData | undefined {
  return characters.find((c) => c.character === char);
}

export function getCharactersByTopic(topic: string): CharacterData[] {
  if (topic === "hsk-1") return characters;
  return characters.filter((c) => c.topics.includes(topic));
}
