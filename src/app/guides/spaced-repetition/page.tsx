import Link from "next/link";
import { GuideArticle, guideMetadata } from "@/components/GuideArticle";

export const metadata = guideMetadata("spaced-repetition");

export default function Page() {
  return (
    <GuideArticle slug="spaced-repetition">
      <p>
        Here is the uncomfortable math of character learning: you can learn{" "}
        <Link href="/character/谢/">谢</Link> perfectly today — stroke order, pronunciation,
        three example words — and by next week it&apos;s gone. Not faded: gone. This
        isn&apos;t a personal failing; it&apos;s the forgetting curve, documented by Hermann
        Ebbinghaus in 1885 and replicated ever since. Memory for new, unconnected material
        decays exponentially, losing most of its strength within days. Spaced repetition is
        the cheapest known way to beat that curve, and it&apos;s built into this site&apos;s{" "}
        <Link href="/review/">review queue</Link>.
      </p>

      <h2>The trick: review at the point of almost-forgetting</h2>
      <p>
        The counterintuitive core finding is that a review is <em>most</em> valuable when the
        memory is <em>weakest</em> — right before it vanishes. Recalling something easy does
        little; the effortful, uncertain recall of a nearly-lost character is exactly what
        resets its forgetting curve and flattens it. Each successful hard recall roughly
        doubles how long the memory lasts. So the optimal schedule isn&apos;t &quot;review
        daily&quot; — it&apos;s <strong>review at expanding intervals</strong>: one day, then
        three, then a week, then two, then a month. Ten reviews spread this way can maintain
        a character for years. The same ten reviews crammed into one afternoon maintain it
        for about a week.
      </p>
      <p>
        That&apos;s why cramming feels great and fails reliably: massed repetition produces
        strong <em>familiarity</em> (&quot;I know this, I just saw it&quot;) that masks weak{" "}
        <em>recall</em>. The exam-week all-nighter is real learning&apos;s most convincing
        impostor.
      </p>

      <h2>How the queue on this site works</h2>
      <p>
        When you mark a character as learning — from any{" "}
        <Link href="/characters/">character page</Link> — it enters your review schedule.
        When it comes due, the <Link href="/review/">review page</Link> shows you the bare
        character and asks for the pinyin and meaning from memory. After revealing the
        answer, you grade your own recall:
      </p>
      <ul>
        <li>
          <strong>Again</strong> — blank, or wrong. The character resets to short intervals
          and reappears tomorrow. This is not punishment; it&apos;s the system finding your
          actual edge.
        </li>
        <li>
          <strong>Hard</strong> — got there, slowly or shakily. The interval grows, but
          cautiously.
        </li>
        <li>
          <strong>Good</strong> — clean recall with normal effort. The default; the interval
          roughly doubles.
        </li>
        <li>
          <strong>Easy</strong> — instant, automatic. The interval leaps ahead so the queue
          stops wasting your time on it.
        </li>
      </ul>
      <p>
        Honest grading is the entire game. Grading a shaky recall as Good feels efficient and
        quietly schedules a future failure; grading strictly costs one extra review now and
        saves three later. Everything stays in your browser&apos;s local storage — no
        account, and the <Link href="/progress/">progress page</Link> can export your data
        anytime.
      </p>

      <h2>Making it sustainable</h2>
      <p>
        Spaced repetition has one operational rule: <strong>the queue must reach zero (almost)
        every day</strong>. The daily load for an HSK 1-sized set is small — five to ten
        minutes once past the initial wave — but it compounds viciously when ignored, and a
        week&apos;s absence produces a wall of reviews that has ended many a learning streak.
        Two defenses: first, cap new characters (six a day, as in the{" "}
        <Link href="/guides/hsk-1-study-plan/">30-day study plan</Link>) since every new
        character is a loan against future review time. Second, after any gap, clear reviews
        before learning anything new. An old character maintained beats a new one met.
      </p>

      <h2>What the queue can&apos;t do</h2>
      <p>
        Spaced repetition is a maintenance system, not a learning system. A character that
        enters the queue as an arbitrary squiggle stays hard forever — reviews preserve
        whatever understanding exists, including none. So do the real learning first: watch
        the stroke order, <Link href="/guides/handwriting-practice/">write it from
        memory</Link>, meet it inside two or three words, notice its{" "}
        <Link href="/guides/common-radicals/">radical</Link>. A character with that much
        structure behind it glides through reviews at ever-longer intervals and effectively
        maintains itself. The queue is the flywheel; understanding is the push that starts
        it spinning.
      </p>
    </GuideArticle>
  );
}
