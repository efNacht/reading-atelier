export function mergeVocabulary(
  a = { words: [], deleted: {} },
  b = { words: [], deleted: {} },
) {
  const deleted = { ...a.deleted };
  for (const [id, time] of Object.entries(b.deleted || {}))
    deleted[id] = Math.max(deleted[id] || 0, time);
  const entries = new Map();
  for (const word of [...(a.words || []), ...(b.words || [])]) {
    if (!word?.id || !word.text) continue;
    const old = entries.get(word.id);
    if (!old || (word.updatedAt || 0) >= (old.updatedAt || 0))
      entries.set(word.id, word);
  }
  return {
    words: [...entries.values()].filter(
      (w) => !deleted[w.id] || (w.updatedAt || 0) > deleted[w.id],
    ),
    deleted,
  };
}
export function validateVocabulary(data) {
  if (
    !data ||
    !Array.isArray(data.words) ||
    data.words.length > 5000 ||
    !data.deleted ||
    typeof data.deleted !== "object" ||
    Array.isArray(data.deleted)
  )
    throw new Error("Повреждены данные словаря.");
  const words = data.words.map((w) => {
    if (
      !w ||
      typeof w.id !== "string" ||
      w.id.length > 100 ||
      typeof w.text !== "string" ||
      w.text.length > 200 ||
      !w.text.trim()
    )
      throw new Error("Повреждено слово.");
    return {
      id: w.id,
      text: w.text,
      translation:
        typeof w.translation === "string" ? w.translation.slice(0, 2000) : "",
      context: typeof w.context === "string" ? w.context.slice(0, 5000) : "",
      due: Number.isFinite(w.due) ? w.due : 0,
      interval: Number.isFinite(w.interval) ? Math.max(0, w.interval) : 0,
      updatedAt: Number.isFinite(w.updatedAt) ? w.updatedAt : 0,
    };
  });
  const deleted = Object.fromEntries(
    Object.entries(data.deleted).filter(
      ([id, t]) => id.length <= 100 && Number.isFinite(t) && t >= 0,
    ),
  );
  if (Object.keys(deleted).length > 10000)
    throw new Error("Слишком много изменений.");
  return { words, deleted };
}
