import Link from "next/link";
import { GuideArticle, guideMetadata } from "@/components/GuideArticle";

export const metadata = guideMetadata("common-radicals");

export default function Page() {
  return (
    <GuideArticle slug="common-radicals">
      <p>
        To a complete beginner, 180 characters look like 180 unrelated drawings. They
        aren&apos;t. Chinese characters are built from a limited kit of components, and the
        most important of these are <strong>radicals</strong> — recurring parts that usually
        carry a hint of meaning. Once you can see the woman radical 女 inside{" "}
        <Link href="/character/妈/">妈</Link>, <Link href="/character/好/">好</Link> and{" "}
        <Link href="/character/她/">她</Link>, those three characters stop being three
        arbitrary shapes and become three variations on a theme. Radical-vision is the single
        biggest upgrade to how fast you learn.
      </p>

      <h2>What a radical actually is</h2>
      <p>
        Strictly, a radical (部首, bùshǒu — &quot;section header&quot;) is the component under
        which a character is filed in a dictionary. There are 214 in the traditional Kangxi
        list. In practice, what matters to a learner is the looser idea:{" "}
        <strong>most characters split into a meaning-hinting part and a sound-hinting
        part</strong>. In <Link href="/character/妈/">妈</Link> (mā, mom), 女 (woman) supplies
        the meaning category and 马 (mǎ, horse) supplies
        the sound. Roughly 80% of Chinese characters follow this semantic-phonetic pattern —
        the writing system is far more systematic than it first appears.
      </p>
      <p>
        One wrinkle: radicals often change shape when squeezed into a character. Water 水
        becomes the three drops 氵on the left of a character; person{" "}
        <Link href="/character/人/">人</Link> compresses to 亻in{" "}
        <Link href="/character/你/">你</Link> (nǐ, you); speech 言 shrinks to 讠in{" "}
        <Link href="/character/请/">请</Link> (qǐng, please). Learn both forms as one thing
        and half the mystery of &quot;complicated&quot; characters evaporates.
      </p>

      <h2>The 15 radicals that dominate HSK 1</h2>
      <ul>
        <li>
          <strong>亻/人 person</strong> — <Link href="/character/你/">你</Link>,{" "}
          <Link href="/character/他/">他</Link>, <Link href="/character/们/">们</Link>.
          Anything about people.
        </li>
        <li>
          <strong>女 woman</strong> — <Link href="/character/妈/">妈</Link>,{" "}
          <Link href="/character/她/">她</Link>, <Link href="/character/好/">好</Link>.
        </li>
        <li>
          <strong>口 mouth</strong> — <Link href="/character/吃/">吃</Link> (eat),{" "}
          <Link href="/character/喝/">喝</Link> (drink), <Link href="/character/叫/">叫</Link>{" "}
          (call), plus question particles <Link href="/character/吗/">吗</Link> and{" "}
          <Link href="/character/呢/">呢</Link> — anything the mouth does, including grammar
          noises.
        </li>
        <li>
          <strong>氵water</strong> — <Link href="/character/没/">没</Link>,{" "}
          <Link href="/character/汉/">汉</Link>. Liquids and, by historical accident, some
          grammar words.
        </li>
        <li>
          <strong>讠speech</strong> — <Link href="/character/说/">说</Link> (speak),{" "}
          <Link href="/character/请/">请</Link> (please), <Link href="/character/谁/">谁</Link>{" "}
          (who). Talking.
        </li>
        <li>
          <strong>心 heart</strong> — <Link href="/character/想/">想</Link> (think/want),{" "}
          <Link href="/character/爱/">爱</Link> (love). Feelings and thought; note it hides at
          the <em>bottom</em> of 想.
        </li>
        <li>
          <strong>日 sun</strong> — <Link href="/character/明/">明</Link> (bright),{" "}
          <Link href="/character/时/">时</Link> (time), <Link href="/character/星/">星</Link>{" "}
          (star). Light and time.
        </li>
        <li>
          <strong>月 moon/flesh</strong> — <Link href="/character/期/">期</Link> (period),{" "}
          <Link href="/character/朋/">朋</Link> (friend).
        </li>
        <li>
          <strong>扌hand</strong> — <Link href="/character/打/">打</Link> (hit/play). Actions
          done with hands.
        </li>
        <li>
          <strong>饣food</strong> — <Link href="/character/饭/">饭</Link> (rice/meal),{" "}
          馆 (as in restaurant).
        </li>
        <li>
          <strong>木 tree</strong> — <Link href="/character/杯/">杯</Link> (cup),{" "}
          <Link href="/character/桌/">桌</Link> (table). Wooden things.
        </li>
        <li>
          <strong>宀 roof</strong> — <Link href="/character/家/">家</Link> (home),{" "}
          <Link href="/character/客/">客</Link> (guest). Things under a roof.
        </li>
        <li>
          <strong>辶 walking</strong> — <Link href="/character/这/">这</Link> (this),{" "}
          还 (still). Motion; always written last.
        </li>
        <li>
          <strong>门 door</strong> — <Link href="/character/们/">们</Link> uses it as sound;{" "}
          问 (ask) is a mouth at a door — one of the most
          satisfying characters in the set.
        </li>
        <li>
          <strong>子 child</strong> — <Link href="/character/学/">学</Link> (study),{" "}
          <Link href="/character/字/">字</Link> (character — a child under a roof: literacy
          begins at home).
        </li>
      </ul>

      <h2>How to use radicals without a textbook detour</h2>
      <p>
        Don&apos;t stop to memorize the radical list — that&apos;s a classic beginner
        rabbit hole. Instead, make one small habit: every time you open a{" "}
        <Link href="/characters/">character page</Link>, glance at the radical shown in its
        info card and ask &quot;does the meaning connect?&quot; Usually it does, and the
        connection does the memorizing for you. When it doesn&apos;t (some connections died
        two thousand years ago), invent your own — a memorable wrong story beats a forgotten
        true one. After a few weeks of this, new characters start arriving pre-disassembled:
        you&apos;ll see 想 and automatically read it as tree-eye-heart rather than as thirteen
        strokes. That&apos;s exactly the shift that makes HSK 2 and 3 dramatically cheaper
        than HSK 1.
      </p>
    </GuideArticle>
  );
}
