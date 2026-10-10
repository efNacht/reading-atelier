import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Download,
  FileText,
  Lightbulb,
  Pause,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";
import {
  writingTasks,
  writingLessons,
  writingSources,
} from "./writing-content.js";
import {
  WRITING_STORAGE,
  countWritingWords,
  writingStats,
  initialWritingDraft,
  clampTimer,
  exportWritingReview,
  validateWritingBackup,
  promptSegments,
} from "./writing-logic.js";
import "./writing.css";

const criteria = [
  {
    id: "task",
    title: "Task Achievement / Response",
    short: "Выполнение задания",
    items: [
      "Я ответила на каждую часть задания.",
      "Task 1: выделила главные особенности и overview. Task 2: моя позиция ясна.",
      "Данные точны / аргументы объяснены и подкреплены примером.",
    ],
  },
  {
    id: "coherence",
    title: "Coherence and Cohesion",
    short: "Логика и связь",
    items: [
      "Абзацы выстроены в понятном порядке.",
      "В каждом абзаце одна главная мысль с развитием.",
      "Связки и местоимения показывают реальные отношения между мыслями.",
    ],
  },
  {
    id: "lexis",
    title: "Lexical Resource",
    short: "Точность слов",
    items: [
      "Я понимаю значение и сочетаемость выбранных слов.",
      "Перефразирование сохраняет исходный смысл.",
      "Проверила написание и формы слов.",
    ],
  },
  {
    id: "grammar",
    title: "Grammatical Range and Accuracy",
    short: "Грамматика",
    items: [
      "Есть разные конструкции, которые я умею использовать.",
      "Проверила согласование, времена и артикли.",
      "Пунктуация помогает понять границы предложений.",
    ],
  },
];
const stages = ["Разобрать задание", "Собрать план", "Написать", "Проверить"];
const taskNumber = (t) => (t.task === 1 || t.task === "task1" ? 1 : 2);
function normalTask(task) {
  return {
    ...task,
    task: taskNumber(task),
    constraints: task.constraints || task.annotations || [],
    plan:
      task.plan ||
      task.outline?.map((p) => ({ label: p.label, help: p.prompt })) ||
      [],
    pitfalls: task.pitfalls || [task.pitfall].filter(Boolean),
    minWords: task.minWords || (taskNumber(task) === 1 ? 150 : 250),
    minutes: task.minutes || (taskNumber(task) === 1 ? 20 : 40),
  };
}
const tasks = writingTasks.map(normalTask);
const timeLabel = (seconds) =>
  `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
function downloadFile(name, content, type = "text/plain;charset=utf-8") {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function Visual({ visual }) {
  if (!visual) return null;
  const type = visual.type || visual.kind;
  if (type === "process")
    return (
      <div className="ws-process" aria-label="Этапы процесса">
        {visual.steps.map((step, i) => (
          <React.Fragment key={step}>
            <div>
              <span>{i + 1}</span>
              {step}
            </div>
            {i < visual.steps.length - 1 && <ArrowRight size={18} />}
          </React.Fragment>
        ))}
      </div>
    );
  if (type === "map")
    return (
      <div className="ws-maps">
        {["before", "after"].map((side) => (
          <div key={side}>
            <strong>{side === "before" ? "2005" : "2025"}</strong>
            <svg
              viewBox="0 0 420 380"
              role="img"
              aria-label={`Meadow Park ${side === "before" ? "2005" : "2025"}: north at top`}
            >
              <rect
                x="20"
                y="35"
                width="380"
                height="325"
                rx="14"
                fill="#f5f2e9"
                stroke="#b4c1a6"
              />
              <text x="210" y="20" textAnchor="middle" fontSize="13">
                ↑ N
              </text>
              <rect
                x="38"
                y="53"
                width="135"
                height="85"
                rx="12"
                fill="#dce8cf"
              />
              <text x="105" y="100" textAnchor="middle" fontSize="14">
                Woodland
              </text>
              <ellipse cx="313" cy="96" rx="65" ry="37" fill="#d4e7ec" />
              <text x="313" y="101" textAnchor="middle" fontSize="14">
                Pond
              </text>
              {side === "after" && (
                <>
                  <rect x="275" y="132" width="76" height="14" fill="#c7ad86" />
                  <text x="310" y="160" textAnchor="middle" fontSize="10">
                    Viewing platform
                  </text>
                </>
              )}
              <ellipse
                cx="210"
                cy="202"
                rx={side === "before" ? 110 : 75}
                ry="42"
                fill="#dce8cf"
              />
              {side === "after" && (
                <ellipse
                  cx="210"
                  cy="202"
                  rx="96"
                  ry="60"
                  fill="none"
                  stroke="#c7ad86"
                  strokeWidth="9"
                />
              )}
              <text x="210" y="206" textAnchor="middle" fontSize="13">
                Grass field
              </text>
              {side === "after" && (
                <text x="210" y="278" textAnchor="middle" fontSize="10">
                  Circular walking path
                </text>
              )}
              <rect
                x="35"
                y="286"
                width="130"
                height="48"
                rx="8"
                fill={side === "before" ? "#e0dfe1" : "#dce8cf"}
              />
              <text x="100" y="314" textAnchor="middle" fontSize="12">
                {side === "before" ? "Car park" : "Community garden"}
              </text>
              <rect
                x="274"
                y="286"
                width="110"
                height="48"
                rx="8"
                fill="#ead9de"
              />
              <text x="330" y="314" textAnchor="middle" fontSize="12">
                {side === "before" ? "Tennis court" : "Playground"}
              </text>
              {side === "before" ? (
                <path d="M210 245V342" stroke="#c7ad86" strokeWidth="9" />
              ) : (
                <>
                  <rect
                    x="225"
                    y="321"
                    width="42"
                    height="22"
                    rx="4"
                    fill="#c7ad86"
                  />
                  <text x="246" y="337" textAnchor="middle" fontSize="10">
                    Café
                  </text>
                </>
              )}
              <text x="210" y="356" textAnchor="middle" fontSize="12">
                Main entrance
              </text>
            </svg>
            <details>
              <summary>Точное описание схемы</summary>
              <ul>
                {visual[side].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          </div>
        ))}
      </div>
    );
  const rows = visual.rows || [],
    columns = visual.columns || [],
    numerical = rows.every((row) =>
      row.slice(1).every((value) => Number.isFinite(parseFloat(String(value)))),
    );
  const maximum =
    Math.max(
      1,
      ...rows.flatMap((row) => row.slice(1).map((v) => parseFloat(v) || 0)),
    ) * 1.12;
  const colors = ["#a83969", "#4d8072", "#d3a665", "#7474a8"];
  return (
    <div className="ws-visual">
      <p>{visual.caption || visual.unit || "Авторские учебные данные"}</p>
      {(type === "bar" || type === "line") && numerical && (
        <svg
          viewBox="0 0 600 260"
          role="img"
          aria-label={visual.caption || "График учебных данных"}
        >
          {[0, 1, 2, 3, 4].map((tick) => (
            <g key={tick}>
              <line
                x1="50"
                y1={220 - tick * 47.5}
                x2="580"
                y2={220 - tick * 47.5}
                stroke="#eadde3"
              />
              <text
                x="43"
                y={224 - tick * 47.5}
                textAnchor="end"
                fontSize="10"
                fill="#887681"
              >
                {Math.round((maximum * tick) / 4)}
              </text>
            </g>
          ))}
          {type === "line"
            ? columns.slice(1).map((label, series) => (
                <g key={label}>
                  <polyline
                    fill="none"
                    stroke={colors[series % 4]}
                    strokeWidth="3"
                    points={rows
                      .map(
                        (row, index) =>
                          `${70 + index * (480 / Math.max(1, rows.length - 1))},${220 - (parseFloat(row[series + 1]) / maximum) * 190}`,
                      )
                      .join(" ")}
                  />
                  {rows.map((row, index) => (
                    <circle
                      key={index}
                      cx={70 + index * (480 / Math.max(1, rows.length - 1))}
                      cy={220 - (parseFloat(row[series + 1]) / maximum) * 190}
                      r="4"
                      fill={colors[series % 4]}
                    />
                  ))}
                </g>
              ))
            : rows.map((row, index) =>
                row.slice(1).map((value, series) => {
                  const groupWidth = 510 / rows.length,
                    barWidth = Math.min(32, groupWidth / (columns.length + 1));
                  return (
                    <rect
                      key={`${index}-${series}`}
                      x={60 + index * groupWidth + series * barWidth}
                      y={220 - (parseFloat(value) / maximum) * 190}
                      width={barWidth - 4}
                      height={(parseFloat(value) / maximum) * 190}
                      rx="3"
                      fill={colors[series % 4]}
                    />
                  );
                }),
              )}
          {rows.map((row, index) => (
            <text
              key={index}
              x={
                type === "line"
                  ? 70 + index * (480 / Math.max(1, rows.length - 1))
                  : 60 + (index * 510) / rows.length + 20
              }
              y="244"
              textAnchor="middle"
              fontSize="10"
              fill="#30242d"
            >
              {row[0]}
            </text>
          ))}
        </svg>
      )}
      {(type === "bar" || type === "line") && (
        <div className="ws-legend">
          {columns.slice(1).map((label, i) => (
            <span key={label}>
              <i style={{ background: colors[i % 4] }} />
              {label}
            </span>
          ))}
        </div>
      )}
      <div className="ws-table-scroll">
        <table>
          <caption className="sr-only">
            {visual.caption || "Точные данные задания"}
          </caption>
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((value, j) => (
                  <td key={j}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function Lesson({ lesson }) {
  const [choice, setChoice] = useState(null),
    [revealed, setRevealed] = useState(false);
  return (
    <article className="ws-lesson">
      <div className="ws-lesson-heading">
        <Lightbulb size={20} />
        <h3>{lesson.title}</h3>
      </div>
      <p>{lesson.summary}</p>
      <ol>
        {lesson.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <h4>Какой вариант лучше выполняет задачу?</h4>
      <div className="ws-compare">
        {[
          { text: lesson.weak, id: "weak" },
          { text: lesson.strong, id: "strong" },
        ].map((option) => (
          <button
            key={option.id}
            className={choice === option.id ? "selected" : ""}
            onClick={() => {
              setChoice(option.id);
              setRevealed(true);
            }}
          >
            <span>{option.id === "weak" ? "A" : "B"}</span>
            {option.text}
          </button>
        ))}
      </div>
      {revealed && (
        <div className="ws-feedback" role="status">
          <strong>
            {choice === "strong" ? "Да, B сильнее." : "Вариант B сильнее."}
          </strong>
          <p>{lesson.why}</p>
          <small>
            Учебные примеры: это сравнение приёмов, а не оценка Band.
          </small>
        </div>
      )}
      <a
        href={lesson.source?.url || lesson.source}
        target="_blank"
        rel="noreferrer"
      >
        Официальная рекомендация ↗
      </a>
    </article>
  );
}

const WritingBank = React.lazy(() => import("./WritingBank"));
export default function WritingStudio() {
  const [view, setView] = useState("bank"),
    [filter, setFilter] = useState("all"),
    [query, setQuery] = useState(""),
    [activeId, setActiveId] = useState(null),
    [stage, setStage] = useState(0),
    [exam, setExam] = useState(false),
    [running, setRunning] = useState(false),
    [annotation, setAnnotation] = useState(null),
    [saveError, setSaveError] = useState(""),
    [notice, setNotice] = useState("");
  const [drafts, setDrafts] = useState(() => {
    try {
      return validateWritingBackup(
        {
          kind: "reading-atelier-writing",
          version: 1,
          drafts: JSON.parse(localStorage.getItem(WRITING_STORAGE) || "{}"),
        },
        tasks.map((task) => task.id),
      );
    } catch {
      return {};
    }
  });
  const importRef = useRef(null),
    clockRef = useRef(Date.now());
  const active = tasks.find((t) => t.id === activeId),
    draft = active ? drafts[active.id] || initialWritingDraft(active) : null;
  useEffect(() => {
    try {
      localStorage.setItem(WRITING_STORAGE, JSON.stringify(drafts));
      setSaveError("");
    } catch {
      setSaveError(
        "Браузер не сохранил изменения. Скачай черновик перед закрытием.",
      );
    }
  }, [drafts]);
  useEffect(() => {
    if (!running || !active) return;
    clockRef.current = Date.now();
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - clockRef.current) / 1000);
      if (elapsed > 0) {
        clockRef.current += elapsed * 1000;
        setDrafts((prev) => {
          const current = prev[active.id] || initialWritingDraft(active);
          return {
            ...prev,
            [active.id]: {
              ...current,
              seconds: clampTimer(current.seconds, elapsed),
            },
          };
        });
      }
    }, 500);
    return () => clearInterval(interval);
  }, [running, activeId]);
  useEffect(() => {
    if (draft?.seconds === 0 && running) {
      setRunning(false);
      setNotice("Время закончилось. Черновик сохранён — переходи к проверке.");
      setStage(3);
    }
  }, [draft?.seconds, running]);
  function patch(update) {
    setDrafts((prev) => ({
      ...prev,
      [active.id]: {
        ...(prev[active.id] || initialWritingDraft(active)),
        ...update,
        updatedAt: new Date().toISOString(),
      },
    }));
  }
  function openTask(task) {
    window.scrollTo({ top: 0, behavior: "instant" });
    setActiveId(task.id);
    setView("editor");
    setStage(0);
    setRunning(false);
    setExam(false);
    setAnnotation(null);
    setNotice("");
  }
  function exportDraft() {
    downloadFile(
      `${active.id}-writing.txt`,
      exportWritingReview(active, draft),
    );
    setNotice(
      "Скачан текст с заданием и запросом на разбор. Его можно прислать в этот чат.",
    );
  }
  async function restore(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 3000000)
        throw new Error("Копия слишком большая (максимум 3 МБ).");
      const data = validateWritingBackup(
        JSON.parse(await file.text()),
        tasks.map((t) => t.id),
      );
      setDrafts((prev) => ({ ...prev, ...data }));
      setNotice(`Восстановлено черновиков: ${Object.keys(data).length}.`);
    } catch (error) {
      setNotice(error.message || "Не удалось прочитать копию.");
    }
    event.target.value = "";
  }
  const visible = tasks.filter(
    (t) =>
      (filter === "all" || String(t.task) === filter) &&
      `${t.title} ${t.type} ${t.topic} ${t.prompt}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const stats = draft ? writingStats(draft.text, active.minWords) : null;
  const reviewGroups = active?.selfReview?.length
    ? active.selfReview.map((group, i) => ({
        id: `custom-${i}`,
        title: group.criterion,
        short: group.criterion,
        items: group.items,
      }))
    : criteria;
  const checked = Object.values(draft?.review || {}).filter(Boolean).length;
  return (
    <section className="writing-studio">
      <div className="ws-intro">
        <div>
          <span className="eyebrow">IELTS ACADEMIC · WRITING</span>
          <h1>
            Ответить на задание.
            <br />
            <em>Развить мысль. Проверить текст.</em>
          </h1>
          <p>
            Разбирай формулировку, собирай план и пиши свой ответ. Task 1:
            данные и overview. Task 2: позиция, аргументы и примеры.
          </p>
        </div>
        <div className="ws-facts">
          <span>
            <strong>60 минут</strong>на оба задания
          </span>
          <span>
            <strong>150 / 250</strong>минимум слов
          </span>
          <span>
            <strong>Task 2 × 2</strong>вес в Writing
          </span>
        </div>
      </div>
      <div className="ws-toolbar">
        <div className="ws-tabs">
          {[
            ["bank", "Задания"],
            ["templates", "Шаблоны и темы"],
            ["learn", "Приёмы и разборы"],
            ["sources", "Источники"],
          ].map(([id, label]) => (
            <button
              className={view === id ? "active" : ""}
              key={id}
              onClick={() => {
                setView(id);
                setRunning(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="ws-backup">
          <button
            onClick={() =>
              downloadFile(
                "writing-backup.json",
                JSON.stringify(
                  { kind: "reading-atelier-writing", version: 1, drafts },
                  null,
                  2,
                ),
                "application/json",
              )
            }
          >
            <Download size={15} />
            Копия
          </button>
          <button onClick={() => importRef.current?.click()}>
            <Upload size={15} />
            Восстановить
          </button>
          <input
            ref={importRef}
            type="file"
            accept=".json"
            hidden
            onChange={restore}
          />
        </div>
      </div>
      {notice && (
        <div className="ws-notice" role="status">
          {notice}
          <button aria-label="Закрыть сообщение" onClick={() => setNotice("")}>
            ×
          </button>
        </div>
      )}
      {saveError && (
        <div className="ws-notice ws-warning" role="alert">
          {saveError}
        </div>
      )}
      {view === "bank" && (
        <>
          <div className="ws-bank-filters">
            <div className="ws-tabs">
              {[
                ["all", "Все задания"],
                ["2", "Task 2 · эссе"],
                ["1", "Task 1 · графики"],
              ].map(([id, label]) => (
                <button
                  className={filter === id ? "active" : ""}
                  key={id}
                  onClick={() => setFilter(id)}
                >
                  {label}
                </button>
              ))}
            </div>
            <label className="ws-search">
              <Search size={17} />
              <input
                aria-label="Поиск Writing заданий"
                placeholder="Тема или тип задания"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          <p className="ws-bank-caption">
            {visible.length} заданий · авторская практика по официальному
            формату. Темы не являются прогнозом экзамена.
          </p>
          <div className="ws-task-grid">
            {visible.map((task) => (
              <button
                className="ws-task-card"
                key={task.id}
                onClick={() => openTask(task)}
              >
                <div>
                  <span className="ws-task-badge">Task {task.task}</span>
                  <span>
                    {task.minutes} мин · {task.minWords}+ слов
                  </span>
                </div>
                <h3>{task.title}</h3>
                <p>{task.prompt}</p>
                <footer>
                  <span>
                    {task.type} · {task.topic}
                  </span>
                  <span>
                    {drafts[task.id]?.text ? "Продолжить" : "Разобрать"}{" "}
                    <ArrowRight size={16} />
                  </span>
                </footer>
              </button>
            ))}
          </div>
          {!visible.length && (
            <p>Нет заданий по этому поиску. Попробуй другую тему.</p>
          )}
        </>
      )}
      {view === "templates" && (
        <React.Suspense fallback={<p>Открываем схемы…</p>}>
          <WritingBank
            onPractice={(id) => {
              const task = tasks.find((t) => t.id === id);
              if (task) openTask(task);
            }}
          />
        </React.Suspense>
      )}
      {view === "learn" && (
        <>
          <div className="ws-section-title">
            <h2>Учись на конкретном исправлении</h2>
            <p>
              Выбери более точный ответ и посмотри, что изменилось и почему.
            </p>
          </div>
          <div className="ws-lessons">
            {writingLessons.map((lesson) => (
              <Lesson key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </>
      )}
      {view === "sources" && (
        <>
          <div className="ws-section-title">
            <h2>Откуда взяты правила</h2>
            <p>
              Формат и критерии — от IELTS, British Council и IDP. Учебные
              задания и примеры здесь авторские. Сайт не выставляет официальный
              Band.
            </p>
          </div>
          <div className="ws-source-grid">
            {writingSources.map((source) => (
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                key={source.id}
              >
                <BookOpen size={22} />
                <h3>{source.title}</h3>
                <p>{source.description}</p>
                <span>
                  {source.type} · проверено {source.checkedAt} ↗
                </span>
              </a>
            ))}
          </div>
          <div className="ws-feedback">
            <strong>Про «новые темы сентября и октября»</strong>
            <p>
              Списки воспоминаний кандидатов и прогнозы не являются официальным
              опубликованным банком IELTS. Учись выполнять разные инструкции, а
              не заучивать ответы на предсказанные темы.
            </p>
          </div>
        </>
      )}
      {view === "editor" && active && (
        <>
          <div className="ws-editor-top">
            <button
              className="ws-text-button"
              onClick={() => {
                setView("bank");
                setRunning(false);
              }}
            >
              <ArrowLeft size={16} />К заданиям
            </button>
            <div className="ws-mode">
              <label>
                <input
                  type="checkbox"
                  checked={exam}
                  onChange={(e) => {
                    setExam(e.target.checked);
                    setAnnotation(null);
                  }}
                />
                Практика без подсказок
              </label>
              <span
                className={draft.seconds === 0 ? "ws-clock ended" : "ws-clock"}
              >
                <Clock3 size={17} />
                {timeLabel(draft.seconds)}
              </span>
              <button
                aria-label={
                  running ? "Приостановить таймер" : "Запустить таймер"
                }
                onClick={() => setRunning((v) => !v)}
                disabled={draft.seconds === 0}
              >
                {running ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                aria-label="Сбросить таймер"
                onClick={() => {
                  setRunning(false);
                  patch({ seconds: active.minutes * 60 });
                }}
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>
          <div className="ws-stage-nav">
            {stages.map((label, index) => (
              <button
                key={label}
                className={stage === index ? "active" : ""}
                onClick={() => setStage(index)}
              >
                <span>{index + 1}</span>
                {label}
              </button>
            ))}
          </div>
          <div className="ws-workspace">
            <aside className="ws-prompt-panel">
              <div className="ws-prompt-label">
                <span className="ws-task-badge">Task {active.task}</span>
                <span>{active.label || "Авторская практика"}</span>
              </div>
              <h2>{active.title}</h2>
              <p className="ws-prompt-text">
                {promptSegments(
                  active.prompt,
                  exam ? [] : active.constraints,
                ).map((segment, index) =>
                  segment.constraint ? (
                    <button
                      key={index}
                      className={`ws-highlight ${segment.constraint.kind || ""}`}
                      onClick={() => setAnnotation(segment.constraint)}
                    >
                      {segment.text}
                    </button>
                  ) : (
                    <React.Fragment key={index}>{segment.text}</React.Fragment>
                  ),
                )}
              </p>
              {!exam && active.constraints.length > 0 && (
                <small>Нажми на выделенную часть: что именно требуется?</small>
              )}
              {annotation && !exam && (
                <div className="ws-feedback" role="status">
                  <strong>{annotation.text}</strong>
                  <p>{annotation.why}</p>
                </div>
              )}
              <Visual visual={active.visual} />
              <div className="ws-prompt-footer">
                Write at least {active.minWords} words.
                <br />
                Suggested time: {active.minutes} minutes.
              </div>
              {!exam && stage === 0 && (
                <div className="ws-pitfalls">
                  <h3>Не потеряй фокус</h3>
                  <ul>
                    {active.pitfalls.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
            <div className="ws-action-panel">
              {stage === 0 && (
                <>
                  <span className="eyebrow">ПЕРЕД ТЕМ КАК ПИСАТЬ</span>
                  <h2>{exam ? "Прочитай условия" : "Что от тебя хотят?"}</h2>
                  <p>
                    Отдели тему от инструкции. Ответ о теме в целом может
                    пропустить конкретный вопрос.
                  </p>
                  {!exam && (
                    <div className="ws-requirements">
                      {active.constraints.map((constraint, index) => (
                        <button
                          key={index}
                          onClick={() => setAnnotation(constraint)}
                        >
                          <span>{index + 1}</span>
                          <div>
                            <strong>{constraint.text}</strong>
                            <p>{constraint.why}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                  <label className="ws-field">
                    Моя задача одним предложением
                    <textarea
                      value={draft.plan["Моя задача"] || ""}
                      onChange={(e) =>
                        patch({
                          plan: { ...draft.plan, "Моя задача": e.target.value },
                        })
                      }
                      placeholder="Что именно я должна описать, сравнить или доказать?"
                      rows={3}
                    />
                  </label>
                  <button className="ws-primary" onClick={() => setStage(1)}>
                    Перейти к плану <ArrowRight size={17} />
                  </button>
                </>
              )}
              {stage === 1 && (
                <>
                  <span className="eyebrow">
                    СНАЧАЛА МЫСЛЬ · ПОТОМ АНГЛИЙСКИЙ
                  </span>
                  <h2>План ответа</h2>
                  <p>
                    {active.task === 1
                      ? "Выдели общую картину и сгруппируй детали."
                      : "Выбери позицию и две мысли, которые сможешь объяснить."}{" "}
                    План можно набросать на русском.
                  </p>
                  {active.plan.map((item, index) => (
                    <label className="ws-field" key={index}>
                      {item.label}
                      {!exam && <small>{item.help}</small>}
                      <textarea
                        rows={3}
                        value={draft.plan[item.label] || ""}
                        onChange={(e) =>
                          patch({
                            plan: {
                              ...draft.plan,
                              [item.label]: e.target.value,
                            },
                          })
                        }
                        placeholder={exam ? "Твой план" : item.help}
                      />
                    </label>
                  ))}
                  <button className="ws-primary" onClick={() => setStage(2)}>
                    Начать писать <ArrowRight size={17} />
                  </button>
                </>
              )}
              {stage === 2 && (
                <>
                  <div className="ws-draft-heading">
                    <div>
                      <span className="eyebrow">ТВОЙ ОТВЕТ</span>
                      <h2>Пиши по плану</h2>
                    </div>
                    <span
                      className={
                        stats.minimumMet ? "ws-word-count met" : "ws-word-count"
                      }
                    >
                      {stats.words} / {active.minWords} слов
                    </span>
                  </div>
                  <details className="ws-plan-preview">
                    <summary>
                      Посмотреть мой план <ChevronDown size={15} />
                    </summary>
                    {Object.entries(draft.plan)
                      .filter(([, value]) => value)
                      .map(([key, value]) => (
                        <p key={key}>
                          <strong>{key}</strong>
                          <br />
                          {value}
                        </p>
                      ))}
                  </details>
                  <label className="sr-only" htmlFor="writing-draft">
                    Черновик Writing
                  </label>
                  <textarea
                    id="writing-draft"
                    className="ws-draft"
                    lang="en"
                    spellCheck={false}
                    value={draft.text}
                    onChange={(e) => patch({ text: e.target.value })}
                    placeholder={
                      active.task === 1
                        ? "The chart illustrates…"
                        : "Write your response here…"
                    }
                  />
                  <div className="ws-draft-meta">
                    <span>
                      {saveError
                        ? "Не сохранено"
                        : "Сохраняется в этом браузере"}{" "}
                      · {stats.paragraphs} абзацев
                    </span>
                    <span>
                      {stats.minimumMet
                        ? "Учебный минимум набран"
                        : `Ещё ${stats.remainingWords} слов до минимума`}
                    </span>
                  </div>
                  <p className="ws-small">
                    Счётчик учебный: это не официальный подсчёт IELTS. Более
                    длинный текст сам по себе не повышает оценку.
                  </p>
                  <div className="ws-button-row">
                    <button
                      className="ws-primary"
                      onClick={() => {
                        setStage(3);
                        setRunning(false);
                      }}
                    >
                      Перейти к проверке <CheckCircle2 size={17} />
                    </button>
                    <button className="ws-secondary" onClick={exportDraft}>
                      <Download size={16} />
                      Скачать ответ
                    </button>
                  </div>
                </>
              )}
              {stage === 3 && (
                <>
                  <span className="eyebrow">
                    ЧЕТЫРЕ КРИТЕРИЯ · КОНКРЕТНЫЕ ИСПРАВЛЕНИЯ
                  </span>
                  <h2>Самопроверка ответа</h2>
                  <p>
                    {stats.words} слов · {stats.paragraphs} абзацев.{" "}
                    {stats.minimumMet
                      ? "Минимум набран. Теперь проверь содержание и точность."
                      : `До учебного минимума осталось ${stats.remainingWords} слов.`}
                  </p>
                  <div className="ws-review">
                    {reviewGroups.map((group, gi) => (
                      <div key={group.id}>
                        <span>0{gi + 1}</span>
                        <h3>{group.title}</h3>
                        {group.items.map((item, index) => {
                          const key = `${group.id}-${index}`;
                          return (
                            <label key={key}>
                              <input
                                type="checkbox"
                                checked={!!draft.review[key]}
                                onChange={(e) =>
                                  patch({
                                    review: {
                                      ...draft.review,
                                      [key]: e.target.checked,
                                    },
                                  })
                                }
                              />
                              {item}
                            </label>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  <div className="ws-review-result">
                    <Check size={19} />
                    <span>
                      Отмечено {checked} пунктов. Чеклист помогает
                      редактировать; количество галочек не является оценкой
                      Band.
                    </span>
                  </div>
                  <label className="ws-field">
                    Что исправлю первым
                    <textarea
                      rows={3}
                      value={draft.plan["Исправление"] || ""}
                      onChange={(e) =>
                        patch({
                          plan: { ...draft.plan, Исправление: e.target.value },
                        })
                      }
                      placeholder="Назови одну мысль или конкретное предложение, которое нужно улучшить."
                    />
                  </label>
                  <div className="ws-button-row">
                    <button className="ws-primary" onClick={() => setStage(2)}>
                      Исправить ответ <ArrowLeft size={16} />
                    </button>
                    <button className="ws-secondary" onClick={exportDraft}>
                      <Download size={16} />
                      Скачать для разбора
                    </button>
                  </div>
                  <p className="ws-small">
                    Экспорт включает задание, данные, план и твой текст. Пришли
                    файл в чат — разберём предложения по критериям.
                    Автоматической отправки нет.
                  </p>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
