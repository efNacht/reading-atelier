import test from "node:test";
import assert from "node:assert/strict";
import { passages } from "../src/content.js";
import { isCorrect, validateImport } from "../src/logic.js";
test("All 64 questions have verbatim evidence, usable answers and unique IDs", () => {
  assert.equal(new Set(passages.map((p) => p.id)).size, passages.length);
  assert.equal(
    passages.reduce((a, p) => a + p.questions.length, 0),
    64,
  );
  for (const p of passages) {
    assert.doesNotThrow(() => validateImport(p));
    for (const q of p.questions) {
      assert.equal(isCorrect(q, q.answer), true);
      if (q.type === "completion")
        assert.match(p.paragraphs.join(" "), new RegExp(q.answer, "i"));
      assert.equal(isCorrect(q, ""), false);
    }
  }
});
test("Completion normalises case and whitespace but rejects misspelling and excess words", () => {
  const q = { type: "completion", answer: "wrist monitors", limit: 2 };
  assert.ok(isCorrect(q, "  WRIST  monitors "));
  assert.equal(isCorrect(q, "wrist monitores"), false);
  assert.equal(isCorrect(q, "the wrist monitors"), false);
});
test("Imports reject unsupported questions and ungrounded evidence", () => {
  const p = passages[0];
  assert.throws(() =>
    validateImport({
      ...p,
      questions: [{ ...p.questions[0], evidence: "invented quote" }],
    }),
  );
  assert.throws(() =>
    validateImport({
      ...p,
      questions: [{ ...p.questions[0], type: "unknown" }],
    }),
  );
  assert.throws(() =>
    validateImport({
      ...p,
      questions: [{ ...p.questions[0], paragraph: 200 }],
    }),
  );
  assert.throws(() =>
    validateImport({ ...p, questions: [{ ...p.questions[0], answer: "yes" }] }),
  );
});
