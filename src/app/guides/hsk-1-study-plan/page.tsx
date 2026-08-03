import Link from "next/link";
import { GuideArticle, guideMetadata } from "@/components/GuideArticle";

export const metadata = guideMetadata("hsk-1-study-plan");

export default function Page() {
  return (
    <GuideArticle slug="hsk-1-study-plan">
      <p>
        The HSK 1 character set is 180 characters. That number is small enough to finish in a
        month and large enough that winging it fails — most self-learners who quit do so in
        week three, when yesterday&apos;s characters start evaporating faster than new ones go
        in. This plan is built around that exact failure mode: it fixes the daily new-character
        count low enough that the review load stays humane.
      </p>

      <h2>The shape of the month</h2>
      <p>
        The plan is <strong>6 new characters a day, 6 days a week, with one weekly catch-up
        day</strong>. That yields roughly 155 characters in 26 learning days; the last stretch
        finishes the set and consolidates. Twenty to thirty minutes a day is enough — split
        as about 15 minutes on new characters and 5–10 on review.
      </p>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Focus</th>
            <th>Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>The scaffolding: numbers, pronouns, basic verbs</td>
            <td>
              <Link href="/learn/numbers/">Numbers &amp; Money</Link>,{" "}
              <Link href="/learn/people/">People &amp; Pronouns</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Daily life: time words, family, places</td>
            <td>
              <Link href="/learn/time/">Time &amp; Dates</Link>,{" "}
              <Link href="/learn/family/">Family</Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>The verbs and grammar glue</td>
            <td>Actions, question words, particles</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Everything else + consolidation</td>
            <td>Remaining topics, full-set review</td>
          </tr>
        </tbody>
      </table>
      <p>
        Why topics instead of frequency order? Because characters learned in meaningful
        clusters reinforce each other.{" "}
        <Link href="/character/爸/">爸</Link>, <Link href="/character/妈/">妈</Link> and{" "}
        <Link href="/character/家/">家</Link> learned together form a little story; the same
        three scattered across three weeks are three isolated facts. The{" "}
        <Link href="/learn/">learning paths</Link> on this site are these clusters.
      </p>

      <h2>The daily routine, minute by minute</h2>
      <ol>
        <li>
          <strong>Review first (5–10 min).</strong> Open the{" "}
          <Link href="/review/">review queue</Link> and clear it before touching anything new.
          Reviews protect yesterday&apos;s investment; new characters are optional by
          comparison. If the queue is long, it&apos;s allowed to eat the whole session.
        </li>
        <li>
          <strong>Meet today&apos;s six (10 min).</strong> For each character: read the pinyin
          aloud, play the audio, watch the stroke animation once, then write it in quiz mode
          until you get it clean without hints — usually two or three attempts.
        </li>
        <li>
          <strong>Anchor them (5 min).</strong> Read each character&apos;s example words and
          one sentence aloud. A character you&apos;ve only met alone is a fact; a character
          you&apos;ve met inside 我是学生 is a tool. Then mark it as learning so it enters
          your review schedule.
        </li>
      </ol>

      <h2>When you fall behind</h2>
      <p>
        You will miss days — plan for it rather than moralize about it. The rule:{" "}
        <strong>reviews always resume first, new characters wait</strong>. After a two-day
        gap, do only reviews on the first day back, then resume new characters at the normal
        rate. Never &quot;catch up&quot; by doubling the new-character load; that&apos;s
        borrowing from next week at high interest. The weekly catch-up day absorbs most
        slippage. A month that stretches to five weeks is a success; a sprint that collapses
        in week three is not.
      </p>

      <h2>How to know it&apos;s working</h2>
      <p>
        Check the <Link href="/progress/">progress page</Link> weekly, not daily. The number
        that matters isn&apos;t characters &quot;seen&quot; — it&apos;s characters surviving
        their reviews. If more than a quarter of your reviews come back as &quot;again,&quot;
        slow the intake to four new characters a day for a week; the ratio recovers quickly.
        By day 30 you should recognize essentially all 180, write most from memory, and — the
        real test — read the example sentences on character pages without pinyin. That
        working vocabulary, not the number itself, is what HSK 1 is for: it&apos;s the
        foundation the next 300 characters of HSK 2 bolt onto.
      </p>
    </GuideArticle>
  );
}
