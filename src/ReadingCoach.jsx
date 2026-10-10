import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Highlighter,
  Search,
  BookOpen,
  RotateCcw,
} from "lucide-react";
import "./reading-coach.css";

import { compareSelection, getTeaching } from "./reading-coach-logic";

export default function ReadingCoach({
  question,
  passage,
  selectedEvidence = "",
  onClearSelection = () => {},
  onReveal = () => {},
  disabled = false,
}) {
  const [step, setStep] = useState(0);
  const [anchor, setAnchor] = useState("");
  const [anchorChecked, setAnchorChecked] = useState(false);
  const [selectionChecked, setSelectionChecked] = useState(false);
  const [relation, setRelation] = useState("");
  const [relationChecked, setRelationChecked] = useState(false);
  useEffect(() => {
    setStep(0);
    setAnchor("");
    setAnchorChecked(false);
    setSelectionChecked(false);
    setRelation("");
    setRelationChecked(false);
  }, [question?.prompt, passage?.id]);
  useEffect(() => {
    setSelectionChecked(false);
  }, [selectedEvidence]);
  if (!question || disabled) return null;
  const q = question;
  const logical = q.type === "tfng" || q.type === "ynng";
  const ng = q.answer === "NOT GIVEN";
  const expectedRelation = ng
    ? "missing"
    : ["FALSE", "NO"].includes(q.answer)
      ? "contradiction"
      : "same";
  const selectionFeedback = compareSelection(
    selectedEvidence,
    q.evidence,
    q.type,
  );
  const teach = getTeaching(q, passage);
  return (
    <section className="reading-coach" aria-label="Как найти ответ в тексте">
      <div className="reading-coach-title">
        <Highlighter size={16} />
        <h3>Как найти ответ</h3>
      </div>
      <div className="coach-step-tabs" role="tablist" aria-label="Этапы чтения">
        {["1. Найти", "2. Выделить", "3. Сравнить"].map((label, i) => (
          <button
            key={label}
            role="tab"
            aria-selected={step === i}
            className={step === i ? "active" : ""}
            onClick={() => setStep(i)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="coach-step-body" role="tabpanel">
        {step === 0 && (
          <>
            <p>
              <b>Scanning: ищи ориентир.</b> Выбери имя, число или ключевой
              предмет вопроса. Слова из вопроса могут встретиться в тексте как
              синонимы.
            </p>
            <label className="coach-label">
              Какое слово или фразу ты будешь искать?
              <input
                value={anchor}
                onChange={(e) => {
                  setAnchor(e.target.value);
                  setAnchorChecked(false);
                }}
                placeholder="Например: membership fee"
                maxLength={100}
              />
            </label>
            <button
              className="coach-action"
              disabled={!anchor.trim()}
              onClick={() => setAnchorChecked(true)}
            >
              <Search size={14} /> Проверить свой ориентир
            </button>
            {anchorChecked && (
              <div className="coach-note" role="status">
                <b>Твой ориентир: {anchor.trim()}.</b>
                <p>
                  {teach.anchor ||
                    q.hint ||
                    "Найди тему вопроса, затем проверь утверждение целиком."}
                </p>
                {q.anchors?.length > 0 && (
                  <p>
                    Слова вопроса для сравнения:{" "}
                    <strong>{q.anchors.join(" · ")}</strong>. Это ориентиры, а
                    не готовый ответ.
                  </p>
                )}
              </div>
            )}
            <button className="coach-next" onClick={() => setStep(1)}>
              Нашла нужное место <ArrowRight size={14} />
            </button>
          </>
        )}
        {step === 1 && (
          <>
            <p>
              <b>Detailed reading: прочитай точно.</b> Прочитай найденное
              предложение и соседние. Выдели в тексте фразу, которая отвечает на
              вопрос. Она появится здесь для проверки.
            </p>
            {selectedEvidence ? (
              <div className="coach-selected">
                <small>ТВОЙ ФРАГМЕНТ</small>
                <blockquote>{selectedEvidence}</blockquote>
                <div className="coach-selection-actions">
                  <button
                    className="coach-action"
                    onClick={() => setSelectionChecked(true)}
                  >
                    <Check size={14} /> Проверить фрагмент
                  </button>
                  <button className="coach-link" onClick={onClearSelection}>
                    Очистить
                  </button>
                </div>
              </div>
            ) : (
              <div className="coach-empty">
                Выдели фразу в тексте слева. На телефоне удерживай слово и
                растяни выделение.
              </div>
            )}
            {selectionChecked && selectionFeedback && (
              <div
                className={`coach-note ${selectionFeedback.kind}`}
                role="status"
              >
                <p>{selectionFeedback.text}</p>
                <small>
                  Проверяем пересечение с цитатой из ключа, а не автоматически
                  оцениваем смысл твоего объяснения.
                </small>
              </div>
            )}
            <div className="coach-selection-actions">
              <button className="coach-link" onClick={onReveal}>
                Показать опорный фрагмент
              </button>
              <button className="coach-next" onClick={() => setStep(2)}>
                Сравнить смысл <ArrowRight size={14} />
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <p>
              <b>Сравни весь смысл, а не одно слово.</b> Кто? Что произошло?
              Когда? Насколько точно это утверждается?
            </p>
            <div className="coach-checklist">
              <span>
                <b>Кто / что</b> Тот же человек, группа, предмет?
              </span>
              <span>
                <b>Время</b> Уже произошло или только планируется?
              </span>
              <span>
                <b>Ограничение</b> Some / most / all · may / will · only
              </span>
              <span>
                <b>Связь</b> Причина, результат, сравнение, отрицание?
              </span>
            </div>
            {teach.scope?.length > 0 && (
              <div className="coach-checklist">
                {teach.scope.map((s, i) => (
                  <span key={i}>
                    <b>{s.word}</b>
                    {s.note}
                  </span>
                ))}
              </div>
            )}
            {teach.paraphrases?.length > 0 && (
              <div className="coach-paraphrases">
                <p>
                  Сравни формулировки: перефраз, противоположность или
                  недостающий факт.
                </p>
                {teach.paraphrases.map((p, i) => (
                  <div key={i}>
                    <span>{p.question}</span>
                    <ArrowRight size={12} />
                    <strong>{p.text}</strong>
                  </div>
                ))}
              </div>
            )}
            {logical ? (
              <>
                <p className="coach-label">Как текст связан с утверждением?</p>
                <div className="coach-relations">
                  {[
                    ["same", "Подтверждает"],
                    ["contradiction", "Противоречит"],
                    ["missing", "Данных не хватает"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      className={relation === value ? "chosen" : ""}
                      aria-pressed={relation === value}
                      onClick={() => {
                        setRelation(value);
                        setRelationChecked(false);
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <button
                  className="coach-action"
                  disabled={!relation}
                  onClick={() => setRelationChecked(true)}
                >
                  Проверить рассуждение <Check size={14} />
                </button>
                {relationChecked && (
                  <div className="coach-note" role="status">
                    <b>
                      {relation === expectedRelation
                        ? "Связь определена верно."
                        : "Сравни это различие."}
                    </b>
                    <p>{q.explanation}</p>
                    {ng && (
                      <p>
                        {teach.missing ||
                          "Упоминание темы не гарантирует ответ. Если нужный факт не сообщается, нельзя превращать отсутствие данных в опровержение."}
                      </p>
                    )}
                    <p>
                      {logical && q.type === "ynng"
                        ? "YES / NO проверяют позицию автора; NOT GIVEN — позиция не установлена."
                        : "TRUE — подтверждение. FALSE — противоречие. NOT GIVEN — недостаточно данных."}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="coach-note">
                <p>
                  {q.type === "heading"
                    ? "Заголовок должен охватывать основной смысл всего абзаца. Одного совпавшего слова или яркого примера недостаточно."
                    : q.type === "completion"
                      ? `Вставь слова из текста, проверь грамматику, число и написание. Лимит: ${q.limit || 3} слова. Не повторяй слова, которые уже стоят вокруг пропуска.`
                      : "Сравни каждый вариант целиком. Упомянутое слово может относиться к отвергнутому плану, другой причине или другому человеку."}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

const demoCases = [
  {
    label: "FALSE: противоречие",
    claim: "Members had to pay to join.",
    answer: "FALSE",
    evidence: "Membership was free",
    detail:
      "Had to pay ↔ free. Текст прямо говорит об обратном: FALSE. Семена участники покупали сами, но это другой расход.",
  },
  {
    label: "TRUE: перефраз",
    claim: "The project helped residents meet new people.",
    answer: "TRUE",
    evidence: "made new friends",
    detail:
      "Meet new people ↔ made new friends. Слова различаются, но утверждение подтверждается: TRUE.",
  },
  {
    label: "NG: факт отсутствует",
    claim: "Members spent less money on food.",
    answer: "NOT GIVEN",
    evidence: "household spending was not measured",
    detail:
      "Расходы не измеряли. Это не означает, что расходы не снизились. Нужного результата нет: NOT GIVEN.",
  },
];
export function HomeReadingDemo() {
  const [stage, setStage] = useState(0),
    [caseId, setCaseId] = useState(0),
    [selection, setSelection] = useState(""),
    [answer, setAnswer] = useState(""),
    [checked, setChecked] = useState(false);
  const current = demoCases[caseId];
  const parts = [
    "A council opened six community gardens in 2022. ",
    "Membership was free",
    ", although members supplied their own seeds. Most people interviewed said they had ",
    "made new friends",
    ". The researchers explained that ",
    "household spending was not measured",
    ".",
  ];
  const resetCase = (i) => {
    setCaseId(i);
    setSelection("");
    setAnswer("");
    setChecked(false);
    setStage(1);
  };
  return (
    <section
      className="home-reading-demo"
      aria-label="Интерактивный урок чтения"
    >
      <div className="demo-title">
        <BookOpen size={17} />
        <h2>Попробуй способ чтения на одном абзаце</h2>
      </div>
      <div
        className="demo-stages"
        role="tablist"
        aria-label="Три способа чтения"
      >
        {[
          "Обзор · skimming",
          "Поиск · scanning",
          "Проверка · detailed reading",
        ].map((name, i) => (
          <button
            key={name}
            role="tab"
            aria-selected={stage === i}
            onClick={() => setStage(i)}
            className={stage === i ? "active" : ""}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="demo-content" role="tabpanel">
        <div className="demo-reading">
          {stage === 0 ? (
            <>
              <p className="demo-instruction">
                Быстро прочитай абзац. Пока не ищи отдельный ответ: определи
                тему и что исследовали.
              </p>
              <p className="demo-passage">{parts.join("")}</p>
              <div className="demo-map">
                <b>Карта абзаца</b>
                <span>
                  Сады → условия участия → знакомства → ограничение исследования
                </span>
              </div>
              <button className="coach-next" onClick={() => setStage(1)}>
                Теперь ищем конкретный факт <ArrowRight size={14} />
              </button>
            </>
          ) : (
            <>
              <p className="demo-instruction">
                {stage === 1
                  ? "Посмотри на вопрос. Нажми на фразу в тексте, которая помогает его проверить."
                  : "Прочитай найденную фразу в контексте. Проверь утверждение целиком, затем выбери ответ."}
              </p>
              <p className="demo-passage">
                {parts.map((part, i) =>
                  [1, 3, 5].includes(i) ? (
                    <button
                      key={i}
                      className={`${selection === part ? "selected" : ""} ${checked && part === current.evidence ? "evidence" : ""}`}
                      onClick={() => setSelection(part)}
                      aria-pressed={selection === part}
                    >
                      {part}
                    </button>
                  ) : (
                    <React.Fragment key={i}>{part}</React.Fragment>
                  ),
                )}
              </p>
              {selection && (
                <div className="demo-map">
                  <b>Выбрано: {selection}</b>
                  <span>
                    {selection === current.evidence
                      ? "Это нужный участок. Теперь сравни его смысл со всем утверждением."
                      : "Тема встречается, но эта фраза проверяет другой факт. Сравни: стоимость, знакомства или расходы на еду?"}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
        <div className="demo-question">
          <label htmlFor="demo-case">
            Выбери ловушку
            <select
              id="demo-case"
              value={caseId}
              onChange={(e) => resetCase(Number(e.target.value))}
            >
              {demoCases.map((d, i) => (
                <option key={d.label} value={i}>
                  {d.label}
                </option>
              ))}
            </select>
          </label>
          <h3>{current.claim}</h3>
          {stage === 0 ? (
            <p>
              Сначала составь карту абзаца; потом найди место, относящееся к
              этому утверждению.
            </p>
          ) : (
            <>
              <div className="demo-answers">
                {["TRUE", "FALSE", "NOT GIVEN"].map((value) => (
                  <button
                    key={value}
                    disabled={checked}
                    className={`${answer === value ? "chosen" : ""} ${checked && value === current.answer ? "correct" : ""}`}
                    onClick={() => {
                      setAnswer(value);
                      setStage(2);
                    }}
                  >
                    {value}
                  </button>
                ))}
              </div>
              {!checked ? (
                <button
                  className="coach-action"
                  disabled={!answer}
                  onClick={() => {
                    setChecked(true);
                    setStage(2);
                  }}
                >
                  Проверить ответ <Check size={14} />
                </button>
              ) : (
                <div className="coach-note" role="status">
                  <b>
                    {answer === current.answer
                      ? "Верно"
                      : `Ответ: ${current.answer}`}
                  </b>
                  <p>{current.detail}</p>
                  <button
                    className="coach-link"
                    onClick={() => resetCase((caseId + 1) % demoCases.length)}
                  >
                    <RotateCcw size={13} /> Следующий пример
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
