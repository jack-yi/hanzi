import Link from "next/link";
import { GuideArticle, guideMetadata } from "@/components/GuideArticle";

export const metadata = guideMetadata("stroke-order-rules");

export default function Page() {
  return (
    <GuideArticle slug="stroke-order-rules">
      <p>
        Every Chinese character is written as a fixed sequence of strokes, and that sequence is
        not a suggestion — it&apos;s part of the character. Two people who both know the rules
        will write <Link href="/character/我/">我</Link> with exactly the same seven strokes in
        exactly the same order, whether they learned to write in Beijing or Boston. The good
        news for beginners: you don&apos;t memorize an order for each of thousands of
        characters. You learn eight rules, and they cover almost everything.
      </p>

      <h2>Why stroke order is worth learning properly</h2>
      <p>
        The practical arguments are stronger than most beginners expect. First,{" "}
        <strong>speed and legibility</strong>: the standard orders evolved over centuries of
        people writing with brushes, and they exist because they let the hand flow from one
        stroke to the next with minimal travel. Write in a random order and your characters
        come out lopsided, because you can&apos;t judge proportions until the structural
        strokes are down.
      </p>
      <p>
        Second, <strong>memory</strong>: writing a character as a rhythmic motor sequence gives
        your brain a second storage channel alongside the visual one. Learners who write
        characters reliably recognize them better too — the hand teaches the eye.
      </p>
      <p>
        Third, and most concretely: <strong>software checks it</strong>. Handwriting input on
        phones recognizes characters largely by stroke sequence, and the writing quiz on every
        character page of this site does the same. If you write the right shape in the wrong
        order, it often simply won&apos;t register.
      </p>

      <h2>The eight rules</h2>
      <ol>
        <li>
          <strong>Top before bottom.</strong>{" "}
          <Link href="/character/三/">三</Link> (sān, three) is written as three horizontal
          strokes starting from the top. This is the single most load-bearing rule in the
          system.
        </li>
        <li>
          <strong>Left before right.</strong> In{" "}
          <Link href="/character/好/">好</Link> (hǎo, good), the whole 女 component on the left
          is finished before 子 on the right is started. Components are completed one at a
          time, not interleaved.
        </li>
        <li>
          <strong>Horizontal before crossing vertical.</strong> In{" "}
          <Link href="/character/十/">十</Link> (shí, ten), the horizontal stroke comes first,
          then the vertical cuts through it.
        </li>
        <li>
          <strong>Left-falling before right-falling.</strong> In{" "}
          <Link href="/character/人/">人</Link> (rén, person), the stroke sweeping down to the
          left (丿) is written before the one falling to the right (乀). The same pattern opens{" "}
          <Link href="/character/八/">八</Link> and <Link href="/character/大/">大</Link>.
        </li>
        <li>
          <strong>Outside before inside.</strong> For enclosing shapes that open downward or
          rightward, draw the frame first: in <Link href="/character/月/">月</Link> (yuè, moon),
          the outer hook comes before the two short strokes inside.
        </li>
        <li>
          <strong>Inside before closing the box.</strong> Full enclosures are the famous
          exception-to-the-exception: in <Link href="/character/国/">国</Link> (guó, country),
          you draw the left and top of the box, fill in 玉, and only then seal the bottom.
          Chinese teachers tell children &quot;the person enters the room before the door is
          closed.&quot;
        </li>
        <li>
          <strong>Middle before symmetric wings.</strong> In{" "}
          <Link href="/character/小/">小</Link> (xiǎo, small), the center hook is written
          first, then the left dot, then the right dot.
        </li>
        <li>
          <strong>Bottom enclosures come last.</strong> When a component wraps around from the
          bottom left — like the walking radical 辶 in{" "}
          <Link href="/character/这/">这</Link> (zhè, this) — the wrapped content is written
          first and the enclosure last, sliding underneath it.
        </li>
      </ol>

      <h2>The exceptions worth knowing at HSK 1</h2>
      <p>
        The rules occasionally conflict with each other, and a few characters resolve the
        conflict in ways you just have to see once.{" "}
        <Link href="/character/火/">火</Link> (huǒ, fire) writes its two small side strokes
        before the central 人 shape, which surprises learners expecting rule 7.{" "}
        <Link href="/character/九/">九</Link> (jiǔ, nine) starts with the left-falling stroke
        even though the horizontal-bend stroke looks like it should come first. When in doubt,
        don&apos;t guess from the rules — open the character&apos;s page and watch the
        animation. Every character on this site plays its official order, stroke by stroke,
        and the quiz mode will flag any stroke you place out of sequence.
      </p>

      <h2>How to actually internalize this</h2>
      <p>
        Don&apos;t study the rules as a list. Pick a{" "}
        <Link href="/learn/">learning path</Link>, and for each new character: watch the
        animation once, trace it in quiz mode two or three times, then write it once from
        memory. The rules stop being rules after thirty or forty characters — your hand starts
        predicting the next stroke before your eyes ask for it. That&apos;s the point at which
        stroke order pays for itself: new characters become combinations of familiar motions
        instead of arbitrary pictures, and each one takes minutes, not sessions, to learn.
      </p>
    </GuideArticle>
  );
}
