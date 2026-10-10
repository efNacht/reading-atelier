import { createHash, timingSafeEqual } from "node:crypto";
import { get, put } from "@vercel/blob";
import { validateVocabulary } from "../src/vocab-sync-logic.js";
const pathname = "single-user/vocabulary.json";
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (!["GET", "PUT"].includes(req.method))
    return res.status(405).json({ error: "Method not allowed" });
  const secret = process.env.IELTS_SYNC_KEY_HASH;
  const key = (req.headers.authorization || "").replace(/^Bearer /, "");
  if (!secret) return res.status(503).json({ error: "Sync is not configured" });
  const actual = createHash("sha256").update(key).digest();
  const expected = Buffer.from(secret, "hex");
  if (expected.length !== actual.length || !timingSafeEqual(actual, expected))
    return res.status(401).json({ error: "Unauthorized" });
  if (req.headers.origin) {
    try {
      if (new URL(req.headers.origin).host !== req.headers.host)
        return res.status(403).json({ error: "Origin mismatch" });
    } catch {
      return res.status(403).json({ error: "Invalid origin" });
    }
  }
  try {
    const remote = await get(pathname, { access: "private", useCache: false });
    const etag = remote?.blob.etag || null;
    if (req.method === "GET")
      return res.json({
        etag,
        data: remote
          ? JSON.parse(await new Response(remote.stream).text())
          : { words: [], deleted: {} },
      });
    if (Number(req.headers["content-length"] || 0) > 3000000)
      return res.status(413).json({ error: "Too large" });
    if (req.headers["if-match"] !== (etag || "new"))
      return res.status(409).json({ error: "Changed" });
    let data;
    try {
      data = validateVocabulary(
        typeof req.body === "string" ? JSON.parse(req.body) : req.body,
      );
    } catch {
      return res.status(400).json({ error: "Invalid vocabulary" });
    }
    const saved = await put(pathname, JSON.stringify(data), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: !!etag,
      ...(etag ? { ifMatch: etag } : {}),
      contentType: "application/json",
      cacheControlMaxAge: 60,
    });
    return res.json({ etag: saved.etag });
  } catch (error) {
    if (
      error.name === "BlobPreconditionFailedError" ||
      error.message?.includes("already exists")
    )
      return res.status(409).json({ error: "Changed" });
    return res.status(503).json({ error: "Storage unavailable" });
  }
}
