import Link from "next/link";
import { GuideArticle, guideMetadata } from "@/components/GuideArticle";

export const metadata = guideMetadata("handwriting-practice");

export default function Page() {
  return (
    <GuideArticle slug="handwriting-practice">
      <p>
        Generations of learners have filled notebooks with the same character copied fifty
        times — and forgotten it by Friday. The problem isn&apos;t effort; it&apos;s that
        copying and remembering are different skills. Effective handwriting practice has one
        defining feature: <strong>your memory, not your eyes, produces the character</strong>.
        Everything in this guide follows from that principle.
      </p>

      <h2>The ladder: watch → trace → recall</h2>
      <p>
        Every character on this site is practiced on the same three-rung ladder, and the
        rungs are deliberately unequal in value.
      </p>
      <ol>
        <li>
          <strong>Watch (once).</strong> Play the stroke animation and just observe. You&apos;re
          not memorizing strokes; you&apos;re noticing structure — is this left-right like{" "}
          <Link href="/character/好/">好</Link>, top-bottom like{" "}
          <Link href="/character/学/">学</Link>, or a wrap like{" "}
          <Link href="/character/国/">国</Link>? If you&apos;ve read the{" "}
          <Link href="/guides/stroke-order-rules/">stroke order rules</Link>, one viewing is
          usually enough.
        </li>
        <li>
          <strong>Trace (two or three times).</strong> Quiz mode with the outline visible.
          Tracing wires the motor sequence — hand learns from ghost. This stage matters, and
          it&apos;s also where most learners get stuck: tracing feels productive precisely
          because it&apos;s easy. It is scaffolding, not the building.
        </li>
        <li>
          <strong>Recall (the part that counts).</strong> Blank grid, no outline, write the
          whole character from memory. Struggle is the point — the retrieval effort is what
          writes the character into long-term memory. Fail? Glance at the animation, then
          immediately try again blank. Two clean recalls in a row and you&apos;re done with
          this character today. More repetitions past that point buy almost nothing.
        </li>
      </ol>
      <p>
        Total cost per character: about two minutes. The fifty-copies method spends ten
        minutes to achieve less, because copies 4 through 50 never engage retrieval at all.
      </p>

      <h2>Space it, don&apos;t stack it</h2>
      <p>
        One session, however good, doesn&apos;t make a character permanent. The schedule that
        does is embarrassingly cheap: <strong>rewrite each character from memory the next
        day, then let the <Link href="/review/">review queue</Link> resurface it</strong> at
        stretching intervals. A character successfully recalled on day 1, day 2, day 5 and
        day 12 is essentially yours for life — that&apos;s four recalls, maybe ninety
        seconds of total work, spread where they count. The{" "}
        <Link href="/guides/spaced-repetition/">spaced repetition guide</Link> covers why
        the gaps themselves do the teaching.
      </p>

      <h2>Details that separate legible from lovely</h2>
      <ul>
        <li>
          <strong>Respect proportions.</strong> Characters live in an invisible square. In
          left-right characters the parts are rarely equal — the 讠in{" "}
          <Link href="/character/说/">说</Link> claims maybe a third of the width. The
          practice grid on this site shows the square with guide lines; use them to judge
          where components sit, not just what they look like.
        </li>
        <li>
          <strong>Watch stroke direction.</strong> Horizontals go left to right, verticals
          top to bottom, always. A stroke drawn backwards looks right on paper but is the
          first thing quiz mode — and any handwriting keyboard — rejects.
        </li>
        <li>
          <strong>Say it as you write it.</strong> Pronouncing wǒ aloud while writing{" "}
          <Link href="/character/我/">我</Link> binds sound, meaning and motion into one
          memory instead of three. It roughly doubles the value of each repetition and costs
          nothing.
        </li>
        <li>
          <strong>Keep sessions short and daily.</strong> Fifteen focused minutes every day
          beats a two-hour Sunday marathon — motor learning consolidates during sleep, and
          seven small sessions get seven nights of it.
        </li>
      </ul>

      <h2>Does handwriting still matter in the phone era?</h2>
      <p>
        Fair question — most Chinese text today is typed via pinyin. But at the beginner
        stage, writing isn&apos;t really about producing documents. It&apos;s the highest
        resolution form of <em>noticing</em>: you cannot write{" "}
        <Link href="/character/我/">我</Link> from memory without knowing exactly where its
        hook sits, which is precisely the knowledge that stops 我 blurring into 找. Learners
        who write their first few hundred characters consistently report the rest of the
        language getting easier — reading speeds up because recognition is effortless.
        Write all 180 at HSK 1 while the volume is small; whether you keep writing every
        character at HSK 3 and beyond is a choice you&apos;ll be qualified to make by then.
      </p>
    </GuideArticle>
  );
}
