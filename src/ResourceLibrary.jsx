import { useState } from "react";
import { ArrowUpRight, BookOpen, Check, Search, Plus } from "lucide-react";
import {
  officialDrills,
  sourceBank,
  strategyCards,
  starterVocabulary,
} from "./resource-data";
import "./resource-library.css";
const External = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
    <ArrowUpRight size={15} />
  </a>
);
function Tip({ tip }) {
  const [choice, setChoice] = useState("");
  return (
    <article className="resource-tip">
      <div className="resource-label">
        {tip.skill} · {tip.basis}
      </div>
      <h3>{tip.title}</h3>
      <ol>
        {tip.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      <blockquote lang="en">{tip.text}</blockquote>
      <p>{tip.question}</p>
      <div className="resource-choices">
        {tip.choices.map((c) => (
          <button
            type="button"
            key={c}
            className={choice === c ? "chosen" : ""}
            onClick={() => setChoice(c)}
            aria-pressed={choice === c}
          >
            {c}
          </button>
        ))}
      </div>
      {choice && (
        <div className="resource-feedback" role="status">
          <strong>
            {choice === tip.answer ? "Верно" : "Проверь смысл ещё раз"} ·{" "}
            {tip.answer}
          </strong>
          <p>{tip.why}</p>
        </div>
      )}
      <External href={tip.source}>Источник</External>
    </article>
  );
}
export default function ResourceLibrary({ onSaveWord = () => {} }) {
  const [tab, setTab] = useState("sources"),
    [search, setSearch] = useState(""),
    [group, setGroup] = useState("Все"),
    [saved, setSaved] = useState({});
  const matches = (s) => s.toLowerCase().includes(search.toLowerCase().trim());
  const add = (word) => {
    onSaveWord({
      text: word.text,
      translation: word.translation,
      context: word.context,
    });
    setSaved((p) => ({ ...p, [word.text]: true }));
  };
  return (
    <section className="resource-library">
      <div className="resource-heading">
        <span className="eyebrow">Практика и инструменты</span>
        <h1>Банк материалов</h1>
        <p>
          Официальные задания, приёмы с мини-практикой и слова для личного
          словаря.
        </p>
      </div>
      <div className="resource-tabs" role="tablist" aria-label="Раздел банка">
        {[
          ["sources", "Задания и ключи"],
          ["tips", "Приёмы и ловушки"],
          ["words", "60 слов в контексте"],
        ].map(([id, label]) => (
          <button
            role="tab"
            aria-selected={tab === id}
            type="button"
            key={id}
            onClick={() => {
              setTab(id);
              setSearch("");
              setGroup("Все");
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <label className="resource-search">
        <Search size={18} />
        <input
          placeholder="Найти тип задания, приём или слово"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Поиск по банку"
        />
      </label>
      {tab === "sources" && (
        <>
          <div className="resource-notice">
            <BookOpen size={19} />
            <p>
              Здесь задания открываются на сайтах организаторов. Пройди
              упражнение, затем открой ключ и сравни доказательства в тексте.
              Если тренажёр не открывается, используй страницу источника или
              PDF.
            </p>
          </div>
          <h2>10 официальных упражнений Reading</h2>
          <div className="resource-grid">
            {officialDrills
              .filter((d) => matches(d.title + " " + d.topic))
              .map((d) => (
                <article className="resource-source" key={d.title}>
                  <span className="resource-label">IELTS.org · {d.topic}</span>
                  <h3>{d.title}</h3>
                  <div className="resource-links">
                    <External href={d.url}>Задание</External>
                    <External href={d.key}>Ключ PDF</External>
                    <External href={d.source}>Страница источника</External>
                  </div>
                </article>
              ))}
          </div>
          <h2>Полные тесты и критерии</h2>
          <div className="resource-grid">
            {sourceBank
              .filter((s) => matches(s.name + " " + s.description))
              .map((s) => (
                <article className="resource-source" key={s.name}>
                  <span className="resource-label">{s.kind}</span>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <External href={s.url}>Открыть материал</External>
                </article>
              ))}
          </div>
          <p className="resource-footnote">
            Связанные материалы остаются на сайтах правообладателей. Авторские
            тексты тренажёра находятся в Reading, темы и схемы — в Writing.
          </p>
        </>
      )}
      {tab === "tips" && (
        <>
          <div className="resource-notice">
            <p>
              Советы сообщества — опыт участников, а не правила экзамена и не
              гарантия балла. Мини-примеры ниже авторские. Проверяй, помогает ли
              приём именно тебе, по времени и числу ошибок.
            </p>
          </div>
          <div className="resource-filters">
            {["Все", "Reading", "Writing"].map((g) => (
              <button
                type="button"
                key={g}
                aria-pressed={group === g}
                onClick={() => setGroup(g)}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="resource-grid">
            {strategyCards
              .filter(
                (t) =>
                  (group === "Все" || t.skill === group) &&
                  matches(t.title + " " + t.steps.join(" ")),
              )
              .map((t) => (
                <Tip key={t.id} tip={t} />
              ))}
          </div>
        </>
      )}
      {tab === "words" && (
        <>
          <p className="resource-word-intro">
            Учись узнавать перефразирование. Синонимы здесь подсказки: они не
            взаимозаменяемы во всех предложениях. Нажми «В словарь», чтобы
            сохранить слово и пример для повторения.
          </p>
          <div className="resource-filters">
            {["Все", ...new Set(starterVocabulary.map((w) => w.group))].map(
              (g) => (
                <button
                  type="button"
                  key={g}
                  aria-pressed={group === g}
                  onClick={() => setGroup(g)}
                >
                  {g}
                </button>
              ),
            )}
          </div>
          <div className="resource-grid">
            {starterVocabulary
              .filter(
                (w) =>
                  (group === "Все" || w.group === group) &&
                  matches(Object.values(w).join(" ")),
              )
              .map((w) => (
                <article className="resource-word" key={w.text}>
                  <span className="resource-label">{w.group}</span>
                  <h3 lang="en">{w.text}</h3>
                  <p>{w.translation}</p>
                  <div className="resource-synonym">≈ {w.synonym}</div>
                  <blockquote lang="en">{w.context}</blockquote>
                  <button
                    type="button"
                    onClick={() => add(w)}
                    disabled={saved[w.text]}
                  >
                    {saved[w.text] ? <Check size={16} /> : <Plus size={16} />}{" "}
                    {saved[w.text] ? "Сохранено" : "В словарь"}
                  </button>
                </article>
              ))}
          </div>
        </>
      )}
    </section>
  );
}
