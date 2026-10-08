export const normalize = (value) =>
  String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/, "");
export function isCorrect(question, value) {
  return (
    [question.answer, ...(question.alternatives || [])].some(
      (a) => normalize(a) === normalize(value),
    ) &&
    (question.type !== "completion" ||
      normalize(value).split(/\s+/).length <= (question.limit || 3))
  );
}
export function validateImport(data) {
  if (
    !data ||
    typeof data !== "object" ||
    typeof data.title !== "string" ||
    !data.title.trim() ||
    data.title.length > 200
  )
    throw Error("Нужно название текста (до 200 символов).");
  if (
    !Array.isArray(data.paragraphs) ||
    !data.paragraphs.length ||
    data.paragraphs.length > 26 ||
    data.paragraphs.some(
      (p) => typeof p !== "string" || !p.trim() || p.length > 20000,
    )
  )
    throw Error("paragraphs: от 1 до 26 непустых абзацев.");
  if (!Array.isArray(data.questions) || data.questions.length > 100)
    throw Error("questions должен быть массивом (до 100 заданий).");
  const types = [
    "tfng",
    "ynng",
    "completion",
    "matching",
    "heading",
    "features",
    "mc",
  ];
  data.questions.forEach((q, i) => {
    if (
      !q ||
      !types.includes(q.type) ||
      typeof q.prompt !== "string" ||
      typeof q.answer !== "string" ||
      !q.answer.trim() ||
      !Number.isInteger(q.paragraph) ||
      q.paragraph < 0 ||
      q.paragraph >= data.paragraphs.length ||
      typeof q.evidence !== "string" ||
      !q.evidence ||
      !data.paragraphs[q.paragraph].includes(q.evidence) ||
      typeof q.explanation !== "string"
    )
      throw Error(
        `Вопрос ${i + 1}: проверь тип, ответ, абзац, точную цитату evidence и объяснение.`,
      );
    if (
      ["mc", "heading", "features"].includes(q.type) &&
      (!Array.isArray(q.options) ||
        q.options.some((v) => typeof v !== "string") ||
        !q.options.includes(q.answer))
    )
      throw Error(`Вопрос ${i + 1}: ответ должен быть в options.`);
    if (q.type === "tfng" && !["TRUE", "FALSE", "NOT GIVEN"].includes(q.answer))
      throw Error(`Вопрос ${i + 1}: ответ TRUE / FALSE / NOT GIVEN.`);
    if (q.type === "ynng" && !["YES", "NO", "NOT GIVEN"].includes(q.answer))
      throw Error(`Вопрос ${i + 1}: ответ YES / NO / NOT GIVEN.`);
    if (
      q.anchors &&
      (!Array.isArray(q.anchors) ||
        q.anchors.some((a) => typeof a !== "string"))
    )
      throw Error(`Вопрос ${i + 1}: anchors должен быть массивом.`);
    if (
      q.alternatives &&
      (!Array.isArray(q.alternatives) ||
        q.alternatives.some((a) => typeof a !== "string"))
    )
      throw Error(`Вопрос ${i + 1}: alternatives должен быть массивом строк.`);
    if (q.hint !== undefined && typeof q.hint !== "string")
      throw Error(`Вопрос ${i + 1}: hint должен быть текстом.`);
    if (
      q.type === "matching" &&
      !"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        .slice(0, data.paragraphs.length)
        .includes(q.answer)
    )
      throw Error(
        `Вопрос ${i + 1}: ответ должен быть буквой существующего абзаца.`,
      );
    if (
      q.limit !== undefined &&
      (!Number.isInteger(q.limit) || q.limit < 1 || q.limit > 10)
    )
      throw Error(`Вопрос ${i + 1}: неверный лимит слов.`);
  });
  return {
    ...data,
    id: `personal-${crypto.randomUUID()}`,
    subtitle: "Твой личный материал",
    topic: "Мои тексты",
    level: "Личный",
    minutes: Math.max(5, Math.min(60, Number(data.minutes) || 20)),
    personal: true,
    questions: data.questions.map((q) => ({
      ...q,
      anchors: q.anchors || [],
      hint: q.hint || "Найди якорь и сравни утверждение с текстом.",
    })),
  };
}
export function readStorage(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
export const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export function wordCount(p) {
  return p.paragraphs.join(" ").split(/\s+/).length;
}
export function formatTime(s) {
  return `${Math.floor(s / 60)
    .toString()
    .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;
}
