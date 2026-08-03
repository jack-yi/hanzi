import Link from "next/link";
import { GuideArticle, guideMetadata } from "@/components/GuideArticle";

export const metadata = guideMetadata("simplified-vs-traditional");

export default function Page() {
  return (
    <GuideArticle slug="simplified-vs-traditional">
      <p>
        Sooner or later every learner discovers that Chinese is written in two scripts:
        simplified characters (简体字) and traditional characters (繁體字). The character for
        love is <Link href="/character/爱/">爱</Link> in one and 愛 in the other;{" "}
        <Link href="/character/学/">学</Link> faces 學. Internet debates about which is
        &quot;better&quot; run hot and eternal. For a beginner, though, the practical picture
        is much calmer than the debate — and the decision is usually already made for you.
      </p>

      <h2>Where each script lives</h2>
      <table>
        <thead>
          <tr>
            <th>Script</th>
            <th>Used in</th>
            <th>Used by</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Simplified</td>
            <td>Mainland China, Singapore, Malaysia</td>
            <td>HSK exam, most textbooks, ~95% of native speakers</td>
          </tr>
          <tr>
            <td>Traditional</td>
            <td>Taiwan, Hong Kong, Macau</td>
            <td>TOCFL exam, classical literature, calligraphy, many diaspora communities</td>
          </tr>
        </tbody>
      </table>
      <p>
        Simplified characters were standardized by the People&apos;s Republic of China in the
        1950s–60s as a literacy measure, reducing the stroke counts of a few thousand
        characters. Traditional characters continue the forms used for the previous two
        millennia. Neither is &quot;the original&quot; in any simple sense — characters have
        been evolving and shedding strokes since the oracle bones, and many simplified forms
        were borrowed from handwriting shortcuts that had existed for centuries.
      </p>

      <h2>The difference is smaller than it looks</h2>
      <p>
        Beginners imagine two separate writing systems. The reality:{" "}
        <strong>most characters are identical in both scripts</strong>.{" "}
        <Link href="/character/人/">人</Link>, <Link href="/character/水/">水</Link>,{" "}
        山, <Link href="/character/中/">中</Link>,{" "}
        <Link href="/character/明/">明</Link> — unchanged. Of the characters that do differ,
        most differ by <em>pattern</em> rather than individually: the speech radical 言
        became 讠(so 說→<Link href="/character/说/">说</Link>, 謝→
        <Link href="/character/谢/">谢</Link>, 請→<Link href="/character/请/">请</Link> all
        follow one rule), 門 became 门 wherever it
        appears, 馬 became 马 both alone and inside{" "}
        <Link href="/character/妈/">妈</Link> and <Link href="/character/吗/">吗</Link>.
        Learn a few dozen component conversions and you can decode most traditional text
        from a simplified base. Only a minority of characters were restructured beyond easy
        recognition — 愛/爱 above, or 聽/听 (listen).
      </p>
      <p>
        This is why the scripts are best thought of as two typefaces of one language, not two
        languages. The grammar is identical, the vocabulary nearly so. Readers of one script
        adapt to the other in weeks of exposure, not years of study.
      </p>

      <h2>What a beginner should actually do</h2>
      <ol>
        <li>
          <strong>Studying for HSK, or for mainland China?</strong> Simplified. This entire
          site teaches the simplified HSK 1 set — the choice is made.
        </li>
        <li>
          <strong>Connected to Taiwan or Hong Kong?</strong> Traditional, and choose
          materials built for it (the TOCFL track rather than HSK).
        </li>
        <li>
          <strong>No particular anchor?</strong> Simplified, pragmatically: the learning
          ecosystem is larger and you&apos;ll meet far more simplified text online. You can
          add traditional reading later at low cost.
        </li>
      </ol>
      <p>
        The one genuinely bad option is trying to memorize both forms of every character
        from day one. It doubles your workload at the exact stage where workload kills
        learners, for a payoff you may never need.
      </p>

      <h2>Passive familiarity is free — take it</h2>
      <p>
        While you shouldn&apos;t <em>study</em> both scripts at HSK 1, you don&apos;t need
        to ignore the other one either. Every character page on this site shows the
        traditional form in its info card when it differs. Glancing at it costs two seconds
        and quietly builds the pattern library — you&apos;ll notice 讠was 言, that 门 was
        門, and file it away. After 180 characters&apos; worth of glances, traditional text
        stops looking alien and starts looking like a fancy font. That passive familiarity
        is the right amount of &quot;both&quot; for a beginner: free now, and a running
        start if you ever need the real thing.
      </p>
    </GuideArticle>
  );
}
