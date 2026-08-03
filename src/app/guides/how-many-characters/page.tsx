import Link from "next/link";
import { GuideArticle, guideMetadata } from "@/components/GuideArticle";

export const metadata = guideMetadata("how-many-characters");

export default function Page() {
  return (
    <GuideArticle slug="how-many-characters">
      <p>
        Ask how many characters Chinese has and you&apos;ll hear terrifying numbers — 50,000
        in the big dictionaries, 80,000 in the biggest. Ask how many you actually{" "}
        <em>need</em> and the answer collapses to something almost cozy. Written Chinese is
        one of the most top-heavy frequency distributions in any language: a tiny core of
        characters does a wildly disproportionate share of the work. Understanding this
        distribution is the best antidote to the &quot;I&apos;ll never learn them all&quot;
        despair — because nobody learns them all, including the Chinese.
      </p>

      <h2>The numbers that matter</h2>
      <table>
        <thead>
          <tr>
            <th>Characters known</th>
            <th>Share of running text</th>
            <th>What it feels like</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100</td>
            <td>~42%</td>
            <td>Recognizing islands in a sea of unknowns</td>
          </tr>
          <tr>
            <td>180 (HSK 1)</td>
            <td>~50%+</td>
            <td>Signs, menus and simple messages start yielding</td>
          </tr>
          <tr>
            <td>500</td>
            <td>~75%</td>
            <td>Gist of everyday texts; graded readers comfortable</td>
          </tr>
          <tr>
            <td>1,000</td>
            <td>~90%</td>
            <td>Social media and simple articles with a dictionary</td>
          </tr>
          <tr>
            <td>2,500</td>
            <td>~98%</td>
            <td>Chinese primary school graduate; newspapers open up</td>
          </tr>
          <tr>
            <td>3,500</td>
            <td>~99.5%</td>
            <td>Full functional literacy for daily life</td>
          </tr>
        </tbody>
      </table>
      <p>
        (Coverage figures are approximate, from modern corpus studies; sources vary by a
        point or two.) Two honest caveats. First, text coverage isn&apos;t comprehension —
        knowing 90% of the characters in a sentence can still leave you missing the one that
        carried the meaning. Second, characters aren&apos;t words: most Chinese words are
        two-character compounds, so 1,000 characters really means access to several thousand
        words like <Link href="/character/电/">电</Link>脑 (electric-brain: computer) and
        电<Link href="/character/话/">话</Link> (electric-speech: telephone). The compounds
        are frequently so logical that they&apos;re free once you know the pieces.
      </p>

      <h2>Why the first 180 punch above their weight</h2>
      <p>
        The HSK 1 set isn&apos;t just any 180 characters — it&apos;s drawn from the extreme
        top of the frequency table, so every one is a workhorse.{" "}
        <Link href="/character/的/">的</Link> alone is roughly 4% of all written Chinese; a
        handful of pronouns and function words like <Link href="/character/我/">我</Link>,{" "}
        <Link href="/character/是/">是</Link>, <Link href="/character/不/">不</Link> and{" "}
        <Link href="/character/了/">了</Link> appear in practically every sentence ever
        written. And beyond frequency, these characters are the component stock the rest of
        the system is built from: learn 马 and you&apos;ve
        prepaid most of <Link href="/character/妈/">妈</Link> and{" "}
        <Link href="/character/吗/">吗</Link>; learn{" "}
        <Link href="/guides/common-radicals/">the common radicals</Link> and HSK 2&apos;s 300
        characters arrive half-familiar. Character learning has a steep entry fee and
        steeply increasing returns.
      </p>

      <h2>Native speakers, for calibration</h2>
      <p>
        Chinese schoolchildren learn about 2,500 characters across six years of primary
        school; an educated adult recognizes 3,000–4,000 and can <em>write</em> noticeably
        fewer — character amnesia in the smartphone era is real and much discussed in China.
        Scholars of classical texts might command 6,000+. Nobody is walking around with
        50,000; the dictionary tail is variants, historical forms and characters used in
        exactly one ancient place name. The ceiling you actually need —
        3,500 — is about the vocabulary size of a solid high school French course. Large,
        real, finite.
      </p>

      <h2>What to do with this information</h2>
      <p>
        Let frequency set your priorities: master the high-frequency core deeply rather than
        skimming a large set shallowly. Concretely — learn{" "}
        <Link href="/learn/">all 180 HSK 1 characters</Link> to the point of writing them
        from memory (the <Link href="/guides/hsk-1-study-plan/">30-day plan</Link> paces
        this), keep them alive with{" "}
        <Link href="/guides/spaced-repetition/">spaced repetition</Link>, and start reading
        the example sentences on character pages immediately — at 50% coverage, real
        sentences are already within reach, and every sentence read is frequency doing your
        review scheduling for you. The mountain is real, but it&apos;s front-loaded with
        exactly the stones you&apos;re standing on now.
      </p>
    </GuideArticle>
  );
}
