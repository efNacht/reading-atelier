import test from "node:test";
import assert from "node:assert/strict";
import { annotationRanges, anchorRanges } from "../src/highlight-logic.js";
test("A selected quote keeps its paragraph and does not mark identical text elsewhere", () => {
  const note = { text: "free", paragraph: 1, start: 11, end: 15 };
  assert.deepEqual(annotationRanges("Entry was free.", 0, [note]), []);
  assert.deepEqual(
    annotationRanges("Entry was free.", 1, [{ ...note, start: 10, end: 14 }]),
    [[10, 14]],
  );
  assert.deepEqual(annotationRanges("Entry is charged.", 1, [note]), []);
});
test("Question anchors match whole words and phrases, not incidental substrings", () => {
  assert.deepEqual(anchorRanges("The town owns the plots.", ["own"]), []);
  assert.deepEqual(
    anchorRanges("They pay to join, but PAY is not required.", ["pay to join"]),
    [[5, 16]],
  );
});
