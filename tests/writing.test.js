import test from "node:test";
import assert from "node:assert/strict";
import {
  countWritingWords,
  writingStats,
  clampTimer,
  promptSegments,
  validateWritingBackup,
  exportWritingReview,
} from "../src/writing-logic.js";
test("writing word counter handles contractions, hyphenation and empty draft", () => {
  assert.equal(countWritingWords("It's a well-known change: 25.5 percent."), 6);
  assert.equal(countWritingWords("   "), 0);
  assert.equal(
    writingStats("One paragraph.\n\nAnother paragraph.", 250).paragraphs,
    2,
  );
});
test("timer never goes negative and deducts elapsed time", () => {
  assert.equal(clampTimer(120, 63), 57);
  assert.equal(clampTimer(12, 90), 0);
});
test("prompt annotation preserves every character and ignores missing phrases", () => {
  const prompt = "Discuss both views and give your opinion.";
  const segments = promptSegments(prompt, [
    { text: "Discuss both views", why: "two views" },
    { text: "absent" },
  ]);
  assert.equal(segments.map((s) => s.text).join(""), prompt);
  assert.equal(segments.filter((s) => s.constraint).length, 1);
});
test("backup rejects malformed data and limits restoration to known tasks", () => {
  assert.throws(() => validateWritingBackup({}, ["a"]));
  const input = {
    kind: "reading-atelier-writing",
    version: 1,
    drafts: {
      a: {
        text: "draft",
        seconds: 30,
        plan: { one: "idea" },
        review: { x: true },
      },
      unknown: { text: "x", seconds: 0 },
    },
  };
  assert.deepEqual(Object.keys(validateWritingBackup(input, ["a"])), ["a"]);
  input.drafts.a.seconds = -1;
  assert.throws(() => validateWritingBackup(input, ["a"]));
});
test("review export includes original task and draft without claiming official score", () => {
  const result = exportWritingReview(
    { task: 2, title: "Work", prompt: "Discuss work." },
    { text: "My answer", plan: { idea: "because" } },
  );
  assert.match(result, /Discuss work/);
  assert.match(result, /My answer/);
  assert.match(result, /Не выдавай/);
});
