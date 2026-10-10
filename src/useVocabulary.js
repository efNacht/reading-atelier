import { useEffect, useRef, useState } from "react";
import { mergeVocabulary } from "./vocab-sync-logic";
const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};
export default function useVocabulary() {
  const [data, setData] = useState(() => ({
    words: read("ra-vocab", []),
    deleted: read("ra-vocab-deleted", {}),
  }));
  const [key, setKey] = useState(
    () => sessionStorage.getItem("ielts-sync-key") || "",
  );
  const [status, setStatus] = useState(
    key ? "Подключаем словарь…" : "Словарь сохранён на этом устройстве",
  );
  const [failed, setFailed] = useState(false),
    [connected, setConnected] = useState(false);
  const current = useRef(data),
    credential = useRef(key),
    etag = useRef(null),
    busy = useRef(false),
    dirty = useRef(false);
  current.current = data;
  credential.current = key;
  useEffect(() => {
    try {
      localStorage.setItem("ra-vocab", JSON.stringify(data.words));
      localStorage.setItem("ra-vocab-deleted", JSON.stringify(data.deleted));
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }, [data]);
  function setWords(update) {
    setData((previous) => {
      const next =
        typeof update === "function" ? update(previous.words) : update;
      const now = Date.now(),
        old = new Map(previous.words.map((w) => [w.id, w]));
      const words = next.map((w) =>
        JSON.stringify(w) === JSON.stringify(old.get(w.id))
          ? w
          : { ...w, updatedAt: now },
      );
      const ids = new Set(words.map((w) => w.id)),
        deleted = { ...previous.deleted };
      for (const w of previous.words) if (!ids.has(w.id)) deleted[w.id] = now;
      dirty.current = true;
      return { words, deleted };
    });
  }
  async function request(method, body) {
    const response = await fetch("/api/vocabulary", {
      method,
      headers: {
        Authorization: `Bearer ${credential.current}`,
        "Content-Type": "application/json",
        ...(method === "PUT" ? { "If-Match": etag.current || "new" } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    if (response.status === 401)
      throw new Error("Ключ не подходит. Введи личный ключ доступа.");
    if (response.status === 409) return null;
    if (!response.ok)
      throw new Error(
        "Облако недоступно. Изменения остаются на устройстве; попробуй синхронизировать позже.",
      );
    return response.json();
  }
  async function sync() {
    if (!credential.current || busy.current) return;
    busy.current = true;
    setStatus("Синхронизируем…");
    try {
      let completed = false;
      for (let attempt = 0; attempt < 4; attempt++) {
        const remote = await request("GET");
        etag.current = remote.etag;
        const merged = mergeVocabulary(remote.data, current.current);
        current.current = merged;
        setData(merged);
        const snapshot = JSON.stringify(merged);
        dirty.current = false;
        const saved = await request("PUT", merged);
        if (!saved) continue;
        etag.current = saved.etag;
        setConnected(true);
        if (dirty.current || JSON.stringify(current.current) !== snapshot)
          continue;
        setStatus(
          `Синхронизировано · ${new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" })}`,
        );
        completed = true;
        break;
      }
      if (!completed && !dirty.current)
        throw new Error(
          "Словарь изменился на другом устройстве. Нажми синхронизацию ещё раз; локальные слова сохранены.",
        );
      if (dirty.current)
        setStatus(
          "Есть новые изменения — синхронизируем при следующем обновлении.",
        );
    } catch (error) {
      setStatus(error.message);
      setConnected(false);
    } finally {
      busy.current = false;
    }
  }
  useEffect(() => {
    if (!key) return;
    sessionStorage.setItem("ielts-sync-key", key);
    sync();
  }, [key]);
  useEffect(() => {
    if (!connected || !dirty.current) return;
    const timer = setTimeout(sync, 1200);
    return () => clearTimeout(timer);
  }, [data, connected]);
  useEffect(() => {
    const visible = () => {
      if (document.visibilityState === "visible") sync();
    };
    window.addEventListener("focus", visible);
    document.addEventListener("visibilitychange", visible);
    return () => {
      window.removeEventListener("focus", visible);
      document.removeEventListener("visibilitychange", visible);
    };
  }, []);
  return {
    words: data.words,
    setWords,
    failed,
    status,
    connected,
    connect: (value) => {
      etag.current = null;
      setKey(value.trim());
    },
    sync,
    disconnect: () => {
      sessionStorage.removeItem("ielts-sync-key");
      credential.current = "";
      setKey("");
      setConnected(false);
      setStatus("Облако отключено. Словарь остаётся на устройстве.");
    },
  };
}
