import { useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  ChevronDown,
  BookOpen,
  Route,
  Lightbulb,
} from "lucide-react";
import { writingSchemes, topicIdeas, bankCases } from "./writing-bank-data";
import "./writing-bank.css";
export default function WritingBank({ onPractice = () => {} }) {
  const [tab, setTab] = useState("schemes");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState("opinion");
  const [copied, setCopied] = useState("");
  const [caseIndex, setCaseIndex] = useState(0);
  const [choice, setChoice] = useState("");
  const current = bankCases[caseIndex];
  const copy = async (scheme) => {
    try {
      await navigator.clipboard.writeText(scheme.skeleton);
      setCopied(scheme.id);
    } catch {
      setCopied("unavailable");
    }
  };
  return (
    <section className="writing-bank">
      <header className="wb-header">
        <div>
          <span className="wb-eyebrow">WRITING · БАНК ОПОР</span>
          <h2>От вопроса к ясному ответу</h2>
          <p>
            Схемы, заготовки абзацев и идеи по темам. Выбирай под конкретное
            задание и заполняй своей мыслью.
          </p>
        </div>
        <div className="wb-count">
          <strong>9</strong>
          <span>схем ответа</span>
        </div>
      </header>
      <div className="wb-tabs" role="tablist" aria-label="Раздел банка Writing">
        {[
          ["schemes", "Схемы и шаблоны", Route],
          ["topics", "Темы и аргументы", BookOpen],
          ["practice", "Узнать тип задания", Lightbulb],
        ].map(([id, label, Icon]) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            className={tab === id ? "active" : ""}
            onClick={() => setTab(id)}
          >
            <Icon size={17} />
            {label}
          </button>
        ))}
      </div>
      {tab === "schemes" && (
        <>
          <div className="wb-tools">
            <div className="wb-filters">
              {[
                ["all", "Все"],
                ["2", "Task 2 · эссе"],
                ["1", "Academic Task 1"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  aria-pressed={filter === id}
                  className={filter === id ? "active" : ""}
                  onClick={() => setFilter(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            <input
              aria-label="Найти схему"
              placeholder="Найти: opinion, карты, процесс…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <p className="wb-note">
            Это гибкие учебные опоры. Готовый абзац не заменяет ответ на вопрос;
            фиксированного «правильного» числа абзацев нет.
          </p>
          <div className="wb-schemes">
            {writingSchemes
              .filter(
                (s) =>
                  (filter === "all" || String(s.task) === filter) &&
                  `${s.title} ${s.signal}`
                    .toLowerCase()
                    .includes(query.toLowerCase()),
              )
              .map((s) => (
                <article
                  key={s.id}
                  className={`wb-card ${open === s.id ? "expanded" : ""}`}
                >
                  <button
                    className="wb-card-head"
                    aria-expanded={open === s.id}
                    onClick={() => setOpen(open === s.id ? "" : s.id)}
                  >
                    <span>
                      <small>TASK {s.task}</small>
                      <strong>{s.title}</strong>
                      <em>{s.signal}</em>
                    </span>
                    <ChevronDown size={20} />
                  </button>
                  {open === s.id && (
                    <div className="wb-card-body">
                      <div className="wb-flow" aria-label="Порядок ответа">
                        {s.flow.map((step, i) => (
                          <div key={step}>
                            <b>{String(i + 1).padStart(2, "0")}</b>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                      <div className="wb-detail-grid">
                        <div>
                          <div className="wb-template-head">
                            <h3>Каркас на английском</h3>
                            <button
                              onClick={() => copy(s)}
                              aria-label={`Скопировать каркас ${s.title}`}
                            >
                              {copied === s.id ? (
                                <Check size={15} />
                              ) : (
                                <Copy size={15} />
                              )}{" "}
                              {copied === s.id ? "Скопировано" : "Копировать"}
                            </button>
                          </div>
                          <pre>{s.skeleton}</pre>
                          <small className="wb-muted">
                            Квадратные скобки — места для твоего содержания.
                            Замени их; адаптируй формулировки.
                          </small>
                          {copied === "unavailable" && (
                            <p role="status">
                              Копирование недоступно. Текст каркаса можно
                              выделить вручную.
                            </p>
                          )}
                        </div>
                        <aside>
                          <h3>Как использовать</h3>
                          <p>{s.tip}</p>
                          <h3>Ловушка</h3>
                          <p>{s.trap}</p>
                          <button
                            className="wb-practice"
                            onClick={() => onPractice(s.practice)}
                          >
                            Открыть задание <ArrowRight size={17} />
                          </button>
                        </aside>
                      </div>
                    </div>
                  )}
                </article>
              ))}
          </div>
        </>
      )}
      {tab === "topics" && (
        <>
          <p className="wb-note">
            12 направлений для практики. Это авторские идеи, а не прогноз тем
            экзамена. Выбирай только то, что отвечает на конкретный вопрос.
          </p>
          <div className="wb-topics">
            {topicIdeas.map((t) => (
              <article className="wb-topic" key={t.id}>
                <small>{t.id}</small>
                <h3>{t.title}</h3>
                <div>
                  <b>Аргумент → механизм</b>
                  <p>{t.argument}</p>
                </div>
                <div>
                  <b>Другая сторона</b>
                  <p>{t.counter}</p>
                </div>
                <div className="wb-nuance">
                  <b>Что уточнить</b>
                  <p>{t.nuance}</p>
                </div>
                <p className="wb-lexicon">{t.vocabulary}</p>
                <button
                  className="wb-practice"
                  onClick={() => onPractice(t.practice)}
                >
                  Попробовать тему <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </>
      )}
      {tab === "practice" && (
        <div className="wb-quiz">
          <small>
            МИКРОПРАКТИКА {caseIndex + 1} / {bankCases.length}
          </small>
          <h3>Какое действие требует вопрос?</h3>
          <blockquote>{current.prompt}</blockquote>
          <div className="wb-quiz-options">
            {writingSchemes
              .filter((s) =>
                [
                  "outweigh",
                  "discussion",
                  "two-part",
                  "charts",
                  "advantages",
                  "opinion",
                ].includes(s.id),
              )
              .map((s) => (
                <button
                  key={s.id}
                  aria-pressed={choice === s.id}
                  className={choice === s.id ? "selected" : ""}
                  onClick={() => setChoice(s.id)}
                >
                  {s.title}
                </button>
              ))}
          </div>
          {choice && (
            <div
              className={`wb-feedback ${choice === current.correct ? "correct" : ""}`}
              role="status"
            >
              <strong>
                {choice === current.correct
                  ? "Верно."
                  : "Проверь действие в вопросе."}
              </strong>
              <p>{current.why}</p>
              <button
                onClick={() => {
                  setCaseIndex((caseIndex + 1) % bankCases.length);
                  setChoice("");
                }}
              >
                Следующий пример <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
