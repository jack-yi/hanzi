// Smoke test: load key pages headlessly, capture console errors + screenshots.
import { chromium } from "playwright";

const BASE = "http://localhost:8788";
const pages = [
  ["home", "/"],
  ["character", "/character/%E5%AD%A6/"],
  ["characters", "/characters/"],
  ["learn", "/learn/"],
  ["topic", "/learn/numbers/"],
  ["review", "/review/"],
  ["progress", "/progress/"],
];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const errors = [];

for (const [name, path] of pages) {
  const page = await ctx.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`[${name}] console: ${msg.text()}`);
  });
  page.on("pageerror", (err) => errors.push(`[${name}] pageerror: ${err.message}`));
  page.on("requestfailed", (req) => {
    // Link prefetches aborted on page close are benign
    if (req.failure()?.errorText === "net::ERR_ABORTED") return;
    errors.push(`[${name}] requestfailed: ${req.url()} — ${req.failure()?.errorText}`);
  });
  const res = await page.goto(BASE + path, { waitUntil: "networkidle" });
  if (!res || res.status() !== 200) errors.push(`[${name}] HTTP ${res?.status()} for ${path}`);
  await page.waitForTimeout(600);
  await page.screenshot({ path: `/tmp/shots/${name}.png`, fullPage: name === "character" });
  await page.close();
}

// Interaction test on the character page: run the stroke animation & practice quiz start
const page = await ctx.newPage();
page.on("pageerror", (err) => errors.push(`[interact] ${err.message}`));
await page.goto(`${BASE}/character/%E5%AD%A6/`, { waitUntil: "networkidle" });
await page.getByRole("button", { name: /Stroke order/ }).click();
await page.waitForTimeout(1500);
await page.getByRole("button", { name: /Add to learning/ }).click();
await page.waitForTimeout(300);
const learning = await page.getByRole("button", { name: /★ Learning/ }).count();
if (learning !== 1) errors.push("[interact] Add to learning did not toggle");
// search interaction on home
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.getByRole("searchbox").fill("xue");
await page.waitForTimeout(300);
const resultCount = await page.locator("ul li a").count();
if (resultCount === 0) errors.push("[interact] search for 'xue' returned nothing");
await page.screenshot({ path: "/tmp/shots/search.png" });
// review flow reachable with the stored progress
await page.goto(BASE + "/review/", { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.screenshot({ path: "/tmp/shots/review-after.png" });
await page.close();

await browser.close();
if (errors.length) {
  console.log("ISSUES:");
  for (const e of errors) console.log(" -", e);
  process.exit(1);
}
console.log("✓ all pages loaded clean, interactions OK");
