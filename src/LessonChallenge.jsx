import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Highlighter } from "lucide-react";
const challenges = {
  tfng: {
    text: "The club opened in May. Membership was free, and every member received a badge.",
    evidence: "Membership was free",
    prompt: "People had to pay to join the club.",
    options: ["TRUE", "FALSE", "NOT GIVEN"],
    answer: "FALSE",
    explanation:
      "Pay to join означает платное вступление. Free прямо говорит об обратном. Это противоречие, поэтому FALSE. Если бы о стоимости ничего не было, ответом был бы NOT GIVEN.",
  },
  heading: {
    text: "The survey involved only volunteers. It did not include residents who disliked the project. Its results cannot therefore represent the entire town.",
    evidence: "cannot therefore represent the entire town",
    prompt: "Какой заголовок охватывает весь абзац?",
    options: [
      "Why volunteers dislike surveys",
      "Limits of the survey",
      "A successful project",
    ],
    answer: "Limits of the survey",
    explanation:
      "Все три предложения объясняют ограничения выборки. Volunteers — деталь; основной смысл в том, на кого можно распространять выводы.",
  },
  matching: {
    text: "A. The centre opened last year. B. A new entrance will be built next spring. C. Visitors may borrow tools free of charge.",
    evidence: "A new entrance will be built next spring",
    prompt: "В каком абзаце описан будущий план?",
    options: ["A", "B", "C"],
    answer: "B",
    explanation:
      "Future plan перефразирован как will be built next spring. Opened last year описывает прошлое, may borrow — действующую возможность.",
  },
  completion: {
    text: "Participants wore wrist monitors that recorded their movements during the night.",
    evidence: "wrist monitors",
    prompt: "Participants used ___ to record movement. Не более двух слов.",
    options: ["wrist monitors", "their wrist monitors", "wrist monitores"],
    answer: "wrist monitors",
    explanation:
      "Used to record movement соответствует wore … recorded their movements. Их устройство — wrist monitors. Their wrist monitors превышает лимит, monitores — ошибка написания.",
  },
  mc: {
    text: "The town proposed charging for entry, but the plan was rejected. Access remains free.",
    evidence: "the plan was rejected",
    prompt: "What happened to the proposed fee?",
    options: ["It was introduced", "It was rejected", "It doubled"],
    answer: "It was rejected",
    explanation:
      "Proposed означает предложили, а не ввели. But меняет направление мысли. Прочитай предложение до конца: предложение отклонили.",
  },
  ynng: {
    text: "The author argues that one timetable cannot suit every learner. Flexible schedules should be tested instead.",
    evidence: "one timetable cannot suit every learner",
    prompt: "The author believes one timetable suits all learners.",
    options: ["YES", "NO", "NOT GIVEN"],
    answer: "NO",
    explanation:
      "Это мнение автора: argues. Cannot suit every противоположно suits all. Поэтому NO; в вопросе о фактах это было бы FALSE.",
  },
};
export default function LessonChallenge({ type }) {
  const c = challenges[type] || challenges.tfng;
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const at = c.text.indexOf(c.evidence);
  return (
    <section className="lesson-challenge">
      <div className="eyebrow">
        <Highlighter size={14} /> ТВОЯ МИНИ-ПРАКТИКА
      </div>
      <div className="challenge-passage">
        {checked ? (
          <>
            {c.text.slice(0, at)}
            <mark>{c.evidence}</mark>
            {c.text.slice(at + c.evidence.length)}
          </>
        ) : (
          c.text
        )}
      </div>
      <h3>{c.prompt}</h3>
      <div className="challenge-options">
        {c.options.map((o) => (
          <button
            key={o}
            disabled={checked}
            className={`secondary ${answer === o ? "chosen" : ""} ${checked && o === c.answer ? "correct-option" : ""}`}
            onClick={() => setAnswer(o)}
          >
            {o}
          </button>
        ))}
      </div>
      {checked ? (
        <div className="challenge-explanation" role="status">
          <strong>
            <CheckCircle2 size={16} />
            {answer === c.answer
              ? "Да, именно так."
              : "Посмотри на выделенный фрагмент."}
          </strong>
          <p>{c.explanation}</p>
          <button
            className="text-button"
            onClick={() => {
              setAnswer("");
              setChecked(false);
            }}
          >
            Попробовать ещё раз
          </button>
        </div>
      ) : (
        <button
          className="primary"
          disabled={!answer}
          onClick={() => setChecked(true)}
        >
          Проверить и увидеть связь <ArrowRight size={15} />
        </button>
      )}
    </section>
  );
}
