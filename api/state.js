import { get, put } from "@vercel/blob";
import { authorize } from "./_auth.js";
import { mergeState, validateState } from "../src/state-sync-logic.js";
const pathname = "single-user/state.json";
async function readRemote() {
  const remote = await get(pathname, { access: "private", useCache: false });
  return remote ? JSON.parse(await new Response(remote.stream).text()) : { keys: {} };
}
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (!["GET", "PUT"].includes(req.method))
    return res.status(405).json({ error: "Method not allowed" });
  if (!authorize(req, res)) return;
  try {
    if (req.method === "GET") return res.json(await readRemote());
    let incoming;
    try {
      incoming = validateState(typeof req.body === "string" ? JSON.parse(req.body) : req.body);
    } catch {
      return res.status(400).json({ error: "Invalid state" });
    }
    // Server-side merge so two devices never overwrite each other's newer keys.
    const merged = mergeState(await readRemote(), incoming);
    await put(pathname, JSON.stringify(merged), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return res.json(merged);
  } catch {
    return res.status(503).json({ error: "Storage unavailable" });
  }
}
