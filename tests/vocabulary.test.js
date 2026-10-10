import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  mergeVocabulary,
  validateVocabulary,
} from "../src/vocab-sync-logic.js";
import handler from "../api/vocabulary.js";
const word = (id, text, updatedAt) => ({ id, text, updatedAt });
test("Vocabulary keeps concurrent additions and newest edit", () => {
  const result = mergeVocabulary(
    { words: [word("a", "old", 10), word("b", "second", 5)], deleted: {} },
    { words: [word("a", "new", 20), word("c", "third", 15)], deleted: {} },
  );
  assert.equal(result.words.length, 3);
  assert.equal(result.words.find((w) => w.id === "a").text, "new");
});
test("Deletion tombstone prevents resurrection but permits a newer intentional edit", () => {
  assert.equal(
    mergeVocabulary(
      { words: [word("a", "old", 10)], deleted: {} },
      { words: [], deleted: { a: 20 } },
    ).words.length,
    0,
  );
  assert.equal(
    mergeVocabulary(
      { words: [], deleted: { a: 20 } },
      { words: [word("a", "new", 30)], deleted: {} },
    ).words.length,
    1,
  );
});
test("Cloud input rejects bad structures and sanitises extra fields", () => {
  assert.throws(() =>
    validateVocabulary({ words: [{ id: "x", text: "" }], deleted: {} }),
  );
  assert.throws(() => validateVocabulary({ words: [], deleted: [] }));
  const result = validateVocabulary({
    words: [
      {
        id: "a",
        text: "scope",
        credential: "private",
        translation: "x".repeat(2100),
      },
    ],
    deleted: { x: 5, bad: "not time" },
  });
  assert.equal(result.words[0].credential, undefined);
  assert.equal(result.words[0].translation.length, 2000);
  assert.deepEqual(result.deleted, { x: 5 });
});
test("API rejects unauthenticated, cross-origin and unsupported requests before reading storage", async () => {
  process.env.IELTS_SYNC_KEY_HASH = createHash("sha256")
    .update("unit-test-key")
    .digest("hex");
  const request = async (method, headers) => {
    const res = {
      code: 200,
      setHeader() {},
      status(c) {
        this.code = c;
        return this;
      },
      json(body) {
        this.body = body;
        return this;
      },
    };
    await handler({ method, headers }, res);
    return res;
  };
  assert.equal((await request("GET", {})).code, 401);
  assert.equal((await request("POST", {})).code, 405);
  assert.equal(
    (
      await request("GET", {
        authorization: "Bearer unit-test-key",
        origin: "https://wrong.example",
        host: "reading-atelier.vercel.app",
      })
    ).code,
    403,
  );
  assert.equal(
    (
      await request("GET", {
        authorization: "Bearer unit-test-key",
        origin: "malformed",
        host: "reading-atelier.vercel.app",
      })
    ).code,
    403,
  );
});
