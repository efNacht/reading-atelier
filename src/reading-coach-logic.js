const clean = (text = "") =>
  text
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[^\p{L}\p{N}' ]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
const terms = (text) => clean(text).split(" ").filter(Boolean);
const stopwords = new Set([
  "the",
  "a",
  "an",
  "of",
  "to",
  "in",
  "and",
  "was",
  "is",
  "were",
  "for",
  "with",
  "that",
  "it",
  "their",
  "they",
  "had",
]);

export function compareSelection(selected, evidence, type) {
  const a = clean(selected),
    b = clean(evidence);
  if (!a) return null;
  if (terms(a).length > 65)
    return {
      kind: "wide",
      text: "Выделен большой фрагмент. Сузь его до предложения или слов, которые решают вопрос. Соседние предложения читай для контекста, но не закрашивай весь абзац.",
    };
  const relevant = terms(b).filter((w) => !stopwords.has(w));
  const chosen = new Set(terms(a));
  const hits = relevant.filter((w) => chosen.has(w)).length;
  if (
    a.includes(b) ||
    (b.includes(a) && (terms(a).length >= 2 || type === "completion")) ||
    (hits >= 2 && hits / Math.max(relevant.length, 1) >= 0.6)
  ) {
    return {
      kind: "match",
      text: "Есть совпадение с ключевым фрагментом. Теперь проверь смысл: совпадают ли действие, время и ограничения? Совпадение слов само по себе ещё не доказывает ответ.",
    };
  }
  return {
    kind: "other",
    text: "Этот фрагмент не совпадает с опорным фрагментом упражнения. Он может помогать найти тему, но проверь, отвечает ли он именно на вопрос. Попробуй прочитать предложение до конца и выделить более точную цитату.",
  };
}

export function getTeaching(question, passage) {
  const raw = question?.teaching;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
  const text = Array.isArray(passage?.paragraphs)
    ? passage.paragraphs.join(" ")
    : "";
  return {
    anchor: typeof raw.anchor === "string" ? raw.anchor : "",
    missing: typeof raw.missing === "string" ? raw.missing : "",
    scope: Array.isArray(raw.scope)
      ? raw.scope.filter(
          (p) => p && typeof p.word === "string" && typeof p.note === "string",
        )
      : [],
    paraphrases: Array.isArray(raw.paraphrases)
      ? raw.paraphrases.filter(
          (p) =>
            p &&
            typeof p.question === "string" &&
            typeof p.text === "string" &&
            p.text.length > 0 &&
            text.includes(p.text),
        )
      : [],
  };
}
