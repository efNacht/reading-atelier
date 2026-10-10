import { SYNCED_KEYS } from "./state-sync-logic";
// Mirrors app progress in localStorage to /api/state. Key lives in localStorage so it survives restarts.
export const KEY_STORAGE = "ielts-sync-key";
const META = "ra-sync-meta";
const rawSet = Storage.prototype.setItem;
let timer = null;
const getKey = () => {
  try {
    return localStorage.getItem(KEY_STORAGE) || "";
  } catch {
    return "";
  }
};
const readMeta = () => {
  try {
    return JSON.parse(localStorage.getItem(META)) || {};
  } catch {
    return {};
  }
};
const writeMeta = (meta) => rawSet.call(localStorage, META, JSON.stringify(meta));
async function call(method, body) {
  const key = getKey();
  if (!key) return null;
  const res = await fetch("/api/state", {
    method,
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal: AbortSignal.timeout(6000),
  });
  if (!res.ok) throw new Error(res.status);
  return res.json();
}
// Applies newer remote keys locally, uploads newer local ones. Returns true if local data changed.
export async function pullAndPush() {
  if (!getKey()) return false;
  const remote = await call("GET");
  const meta = readMeta();
  let changed = false;
  const upload = { keys: {} };
  for (const k of SYNCED_KEYS) {
    const r = remote.keys?.[k];
    const local = localStorage.getItem(k);
    if (r && r.t > (meta[k] || 0)) {
      if (r.v !== local) changed = true;
      rawSet.call(localStorage, k, r.v);
      meta[k] = r.t;
    } else if (local !== null && (meta[k] || 0) > (r?.t || 0)) upload.keys[k] = { v: local, t: meta[k] };
    else if (local !== null && !r) upload.keys[k] = { v: local, t: (meta[k] = meta[k] || Date.now()) };
  }
  writeMeta(meta);
  if (Object.keys(upload.keys).length) await call("PUT", upload);
  return changed;
}
function schedulePush() {
  clearTimeout(timer);
  timer = setTimeout(() => pullAndPush().catch(() => {}), 2000);
}
export function installStateSync() {
  Storage.prototype.setItem = function (k, v) {
    const prev = this === localStorage && SYNCED_KEYS.includes(k) ? this.getItem(k) : v;
    rawSet.call(this, k, v);
    if (prev !== v) {
      const meta = readMeta();
      meta[k] = Date.now();
      writeMeta(meta);
      if (getKey()) schedulePush();
    }
  };
  const onVisible = () => {
    if (document.visibilityState !== "visible" || !getKey()) return;
    const typing = ["TEXTAREA", "INPUT"].includes(document.activeElement?.tagName);
    pullAndPush()
      .then((changed) => changed && !typing && location.reload())
      .catch(() => {});
  };
  document.addEventListener("visibilitychange", onVisible);
  window.addEventListener("pagehide", () => getKey() && pullAndPush().catch(() => {}));
}
export async function connectStateSync(key) {
  rawSet.call(localStorage, KEY_STORAGE, key);
  try {
    if (await pullAndPush()) location.reload();
  } catch {}
}
export function disconnectStateSync() {
  localStorage.removeItem(KEY_STORAGE);
}
