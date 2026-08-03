import Link from "next/link";
import { GuideArticle, guideMetadata } from "@/components/GuideArticle";

export const metadata = guideMetadata("pinyin-tones");

export default function Page() {
  return (
    <GuideArticle slug="pinyin-tones">
      <p>
        Mandarin has four tones plus a neutral tone, and they are not optional extras — they
        are as much a part of each word as its consonants and vowels. The syllable{" "}
        <em>ma</em> means <em>mother</em> (<Link href="/character/妈/">妈</Link>, mā),{" "}
        <em>horse</em> (马, mǎ) or a question particle
        (<Link href="/character/吗/">吗</Link>, ma) depending purely on pitch. This guide
        explains what each tone actually sounds like — including the parts textbooks tend to
        get wrong — and gives you a practice method that works.
      </p>

      <h2>The four tones, honestly described</h2>
      <p>
        <strong>First tone (ā): high and flat.</strong> Pick a comfortable high pitch and hold
        it level, like a singer holding a note. <Link href="/character/三/">三</Link> (sān,
        three), <Link href="/character/天/">天</Link> (tiān, day) and{" "}
        <Link href="/character/家/">家</Link> (jiā, home) are all first tone. The most common
        beginner error is not pitching it high enough — it should feel slightly artificial at
        first.
      </p>
      <p>
        <strong>Second tone (á): rising.</strong> A clean rise from mid to high, exactly like
        the English &quot;What?&quot; asked in surprise.{" "}
        <Link href="/character/人/">人</Link> (rén, person),{" "}
        <Link href="/character/十/">十</Link> (shí, ten) and{" "}
        <Link href="/character/年/">年</Link> (nián, year) ride this rise.
      </p>
      <p>
        <strong>Third tone (ǎ): low.</strong> Here is where textbooks mislead. The official
        description is &quot;falling then rising,&quot; and in isolation, slowly pronounced,
        that&apos;s true. But in real connected speech the third tone is simply{" "}
        <strong>low and a little creaky</strong> — the rise almost never happens. Think of{" "}
        <Link href="/character/我/">我</Link> (wǒ, I), <Link href="/character/你/">你</Link>{" "}
        (nǐ, you) and <Link href="/character/好/">好</Link> (hǎo, good) as spoken in the bottom
        of your voice. Learners who chase the dip-and-rise sound perpetually theatrical;
        learners who just go low sound native surprisingly fast.
      </p>
      <p>
        <strong>Fourth tone (à): falling.</strong> A sharp drop from high to low, like an
        emphatic English &quot;No!&quot; — <Link href="/character/是/">是</Link> (shì, to be),{" "}
        <Link href="/character/六/">六</Link> (liù, six),{" "}
        <Link href="/character/去/">去</Link> (qù, to go). Beginners often make it too gentle;
        it should sound almost abrupt.
      </p>
      <p>
        <strong>The neutral tone: short and light.</strong> Some syllables carry no tone of
        their own and take their pitch from the syllable before: the second half of{" "}
        <Link href="/character/妈/">妈妈</Link> (māma), the <em>xie</em> in 谢谢 (xièxie), the
        particle <Link href="/character/吗/">吗</Link> (ma) that turns statements into
        questions. Keep them quick — half the length of a normal syllable.
      </p>

      <h2>Tone changes you&apos;ll meet immediately</h2>
      <p>
        Two sandhi rules appear constantly at HSK 1. First:{" "}
        <strong>two third tones in a row</strong> — the first one turns into a second tone.
        你好 is written nǐ hǎo but pronounced <em>ní hǎo</em>. Second:{" "}
        <strong><Link href="/character/不/">不</Link> (bù) becomes bú before a fourth tone</strong>,
        so 不是 is pronounced <em>bú shì</em>. And{" "}
        <Link href="/character/一/">一</Link> (yī, one) changes too: yí before fourth tones,
        yì before everything else, keeping yī only when counting. You don&apos;t need to drill
        these as rules — your ear will absorb them from listening — but knowing they exist
        stops you distrusting what you hear.
      </p>

      <h2>Practice pairs, not single syllables</h2>
      <p>
        The single most effective tones exercise is drilling <strong>tone pairs</strong> —
        two-syllable combinations — because real Mandarin words are overwhelmingly
        two-syllable, and tones behave differently in company than alone. There are only
        twenty possible pairs (4 × 4 plus neutrals), and a few days of deliberate pair
        practice fixes problems that months of single-syllable drilling won&apos;t touch.
        Work through a <Link href="/learn/">learning path</Link> and say every example word
        aloud twice: once slowly, exaggerating the pitch contour, once at natural speed. Every
        character page and example word on this site has audio — imitate it out loud, not in
        your head. Silent practice does not train tones.
      </p>

      <h2>Trust your ear over your eye</h2>
      <p>
        Tone marks are training wheels, and useful ones — but the goal is for 好 to{" "}
        <em>sound</em> low in your inner voice, not for you to see hǎo and compute
        &quot;third tone, therefore low.&quot; That switch happens through volume of listening:
        play the audio on character pages, replay example sentences, and echo everything
        aloud. Learners who listen and imitate daily develop reliable tones in weeks. When
        you review characters in the <Link href="/review/">review queue</Link>, say the
        pinyin out loud with its tone before revealing the answer — recall plus production
        is the combination that makes tones stick.
      </p>
    </GuideArticle>
  );
}
