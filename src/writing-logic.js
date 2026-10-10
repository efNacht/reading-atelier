export const WRITING_STORAGE = "ra-writing-v2";
export function countWritingWords(text = "") {
  return (String(text).match(/[\p{L}\p{N}]+(?:['’.-][\p{L}\p{N}]+)*/gu) || [])
    .length;
}
export function writingStats(text = "", minWords = 250) {
  const words = countWritingWords(text);
  const paragraphs = String(text)
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean).length;
  return {
    words,
    paragraphs,
    minimumMet: words >= minWords,
    remainingWords: Math.max(0, minWords - words),
  };
}
export function initialWritingDraft(task) {
  return {
    text: "",
    plan: {},
    review: {},
    seconds: (task.minutes || (task.task === 1 ? 20 : 40)) * 60,
    updatedAt: null,
  };
}
export function clampTimer(seconds, elapsed) {
  return Math.max(
    0,
    Math.floor(Number(seconds) || 0) -
      Math.max(0, Math.floor(Number(elapsed) || 0)),
  );
}
export function exportWritingReview(task, draft) {
  return `IELTS Academic Writing · Task ${task.task}\n${task.title}\n\nЗАДАНИЕ\n${task.prompt}\n${task.visual ? `\nДАННЫЕ\n${JSON.stringify(task.visual, null, 2)}\n` : ""}\nПЛАН\n${Object.entries(
    draft.plan || {},
  )
    .map(([key, value]) => `${key}: ${value}`)
    .join(
      "\n",
    )}\n\nМОЙ ТЕКСТ (${countWritingWords(draft.text)} слов — учебный счётчик)\n${draft.text || ""}\n\nПРОСЬБА К ПРЕПОДАВАТЕЛЮ\nРазбери ответ по официальным критериям IELTS: ${task.task === 1 ? "Task Achievement" : "Task Response"}, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy. Покажи конкретные фрагменты и приоритетные исправления. Сначала проверь выполнение всех требований задания, затем объясни, как улучшить мой текст. Не выдавай приблизительную AI-оценку за официальный Band.\n`;
}
export function validateWritingBackup(input, taskIds) {
  if (
    !input ||
    input.kind !== "reading-atelier-writing" ||
    input.version !== 1 ||
    !input.drafts ||
    typeof input.drafts !== "object" ||
    Array.isArray(input.drafts)
  )
    throw new Error("Это не резервная копия Writing Atelier.");
  const cleaned = {};
  for (const [id, draft] of Object.entries(input.drafts)) {
    if (!taskIds.includes(id)) continue;
    if (
      !draft ||
      typeof draft.text !== "string" ||
      draft.text.length > 100000 ||
      !Number.isFinite(draft.seconds) ||
      draft.seconds < 0 ||
      draft.seconds > 86400
    )
      throw new Error("В копии повреждён черновик.");
    const safeStrings = (obj) =>
      Object.fromEntries(
        Object.entries(obj || {}).filter(
          ([k, v]) =>
            k.length < 200 && typeof v === "string" && v.length <= 20000,
        ),
      );
    cleaned[id] = {
      text: draft.text,
      seconds: draft.seconds,
      plan: safeStrings(draft.plan),
      review: Object.fromEntries(
        Object.entries(draft.review || {}).filter(
          ([k, v]) => k.length < 200 && typeof v === "boolean",
        ),
      ),
      updatedAt: typeof draft.updatedAt === "string" ? draft.updatedAt : null,
    };
  }
  return cleaned;
}
export function promptSegments(prompt, constraints = []) {
  const ranges = constraints
    .flatMap((c, index) => {
      const start = String(prompt)
        .toLowerCase()
        .indexOf(String(c.text || "").toLowerCase());
      return start >= 0 && c.text
        ? [{ start, end: start + c.text.length, index }]
        : [];
    })
    .sort((a, b) => a.start - b.start);
  const result = [];
  let position = 0;
  for (const range of ranges) {
    if (range.start < position) continue;
    if (range.start > position)
      result.push({ text: prompt.slice(position, range.start) });
    result.push({
      text: prompt.slice(range.start, range.end),
      constraint: constraints[range.index],
      index: range.index,
    });
    position = range.end;
  }
  if (position < prompt.length) result.push({ text: prompt.slice(position) });
  return result;
}
