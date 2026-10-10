import { createHash, timingSafeEqual } from "node:crypto";
// Shared single-user check: Bearer key must match IELTS_SYNC_KEY_HASH (sha256 hex) and same origin.
export function authorize(req, res) {
  const secret = process.env.IELTS_SYNC_KEY_HASH;
  const key = (req.headers.authorization || "").replace(/^Bearer /, "");
  if (!secret) return res.status(503).json({ error: "Sync is not configured" }), false;
  const actual = createHash("sha256").update(key).digest();
  const expected = Buffer.from(secret, "hex");
  if (expected.length !== actual.length || !timingSafeEqual(actual, expected))
    return res.status(401).json({ error: "Unauthorized" }), false;
  if (req.headers.origin) {
    try {
      if (new URL(req.headers.origin).host !== req.headers.host)
        return res.status(403).json({ error: "Origin mismatch" }), false;
    } catch {
      return res.status(403).json({ error: "Invalid origin" }), false;
    }
  }
  return true;
}
