import test from "node:test";
import assert from "node:assert/strict";
import { passages } from "../src/content.js";
import { compareSelection, getTeaching } from "../src/reading-coach-logic.js";

test("all authored questions have grounded teaching maps and NG names the missing fact", () => {
  let count = 0;
  for (const passage of passages)
    for (const q of passage.questions) {
      count++;
      const t = q.teaching;
      assert.ok(t.anchor.length > 15, `${passage.id}: anchor`);
      assert.ok(t.scope.length > 0);
      assert.ok(t.paraphrases.length > 0);
      for (const pair of t.paraphrases) {
        assert.ok(
          passage.paragraphs[q.paragraph].includes(pair.text),
          `${passage.id}: not verbatim ${pair.text}`,
        );
        assert.ok(
          q.prompt.toLowerCase().includes(pair.question.toLowerCase()),
          `${passage.id}: question phrase ${pair.question}`,
        );
      }
      if (q.answer === "NOT GIVEN")
        assert.ok(
          t.missing?.length > 20,
          `${passage.id}: missing fact unspecified`,
        );
      assert.equal(
        getTeaching(q, passage).paraphrases.length,
        t.paraphrases.length,
      );
    }
  assert.equal(count, 136);
});

test("citation comparison reports lexical overlap without declaring an answer correct", () => {
  assert.equal(compareSelection("", "Membership was free", "tfng"), null);
  const exact = compareSelection(
    "Membership was free",
    "Membership was free",
    "tfng",
  );
  assert.equal(exact.kind, "match");
  assert.match(exact.text, /ещё не доказывает ответ/);
  assert.equal(
    compareSelection(
      "the exhibition opened in May",
      "Membership was free",
      "tfng",
    ).kind,
    "other",
  );
  assert.equal(
    compareSelection("free", "Membership was free", "tfng").kind,
    "other",
  );
  assert.equal(
    compareSelection("seeds", "bring their own seeds", "completion").kind,
    "match",
  );
  assert.equal(
    compareSelection(
      Array(70).fill("membership").join(" "),
      "Membership was free",
      "tfng",
    ).kind,
    "wide",
  );
});

test("malformed private teaching metadata is safely ignored and ungrounded quotes are removed", () => {
  const passage = { paragraphs: ["Membership was free."] };
  assert.deepEqual(getTeaching({ teaching: "broken" }, passage), {});
  assert.deepEqual(getTeaching({ teaching: [] }, passage), {});
  const t = getTeaching(
    {
      teaching: {
        anchor: 5,
        missing: false,
        scope: [null, { word: "all", note: 2 }],
        paraphrases: [
          null,
          { question: "pay", text: "Membership was paid" },
          { question: "pay", text: "Membership was free" },
        ],
      },
    },
    passage,
  );
  assert.equal(t.anchor, "");
  assert.equal(t.scope.length, 0);
  assert.equal(t.paraphrases.length, 1);
});
