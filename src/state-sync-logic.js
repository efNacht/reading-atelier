// Keys of app progress synced across devices (vocabulary has its own merge in /api/vocabulary).
export const SYNCED_KEYS = ["ra-history", "ra-custom", "ra-sessions", "ra-highlights", "ra-writing-v2"];
// Per-key last-write-wins: { keys: { [key]: { v: string, t: number } } }
export function mergeState(a = { keys: {} }, b = { keys: {} }) {
  const keys = { ...(a.keys || {}) };
  for (const [k, entry] of Object.entries(b.keys || {}))
    if (!keys[k] || entry.t > keys[k].t) keys[k] = entry;
  return { keys };
}
export function validateState(data) {
  if (!data || typeof data.keys !== "object" || Array.isArray(data.keys))
    throw new Error("Повреждены данные.");
  const keys = {};
  for (const k of SYNCED_KEYS) {
    const e = data.keys[k];
    if (!e) continue;
    if (typeof e.v !== "string" || e.v.length > 2500000 || !Number.isFinite(e.t))
      throw new Error("Повреждён ключ " + k);
    keys[k] = { v: e.v, t: e.t };
  }
  return { keys };
}
