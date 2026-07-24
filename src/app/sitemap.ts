import type { MetadataRoute } from "next";
import { getAllCharacters } from "@/lib/characters";
import { TOPICS } from "@/lib/topics";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/characters/",
    "/learn/",
    "/review/",
    "/progress/",
    "/about/",
    "/privacy/",
    "/credits/",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const topicPages = TOPICS.map((t) => ({
    url: `${SITE_URL}/learn/${t.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const characterPages = getAllCharacters().map((c) => ({
    url: `${SITE_URL}/character/${encodeURIComponent(c.character)}/`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...topicPages, ...characterPages];
}
