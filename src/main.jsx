import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  BookOpen,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Check,
  Clock,
  Bookmark,
  Search,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Target,
  Upload,
  Download,
  X,
  Volume2,
  RotateCcw,
  GraduationCap,
  Flower2,
  Highlighter,
  Menu,
  Pause,
  Play,
  CheckCircle2,
  BarChart3,
  Layers,
  Plus,
  Trash2,
} from "lucide-react";
import { passages, techniques, resources, glossary } from "./content";
import {
  isCorrect,
  validateImport,
  readStorage,
  letters,
  wordCount,
  formatTime,
} from "./logic";
import "./style.css";
import LessonChallenge from "./LessonChallenge";
import { unzipSync, strFromU8 } from "fflate";
const labels = {
  tfng: "True / False / Not Given",
  ynng: "Yes / No / Not Given",
  completion: "Заполнение пропуска",
  matching: "Поиск информации",
  heading: "Главная мысль",
  features: "Сопоставление имён",
  mc: "Выбор ответа",
};
function useSaved(key, initial) {
  const [value, setValue] = useState(() => readStorage(key, initial));
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }, [key, value]);
  return [value, setValue, failed];
}
function download(name, data, type = "application/json") {
  const url = URL.createObjectURL(new Blob([data], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function App() {
  const [page, setPage] = useState("home"),
    [mode, setMode] = useState("coach"),
    [filter, setFilter] = useState("Все"),
    [search, setSearch] = useState("");
  const [words, setWords, wordFailure] = useSaved("ra-vocab", []),
    [history, setHistory, historyFailure] = useSaved("ra-history", []),
    [custom, setCustom, customFailure] = useSaved("ra-custom", []),
    [sessions, setSessions, sessionFailure] = useSaved("ra-sessions", {});
  const [highlights, setHighlights, highlightFailure] = useSaved(
    "ra-highlights",
    {},
  );
  const bank = [...passages, ...custom];
  const [activeId, setActiveId] = useState(passages[0].id);
  const active = bank.find((p) => p.id === activeId) || passages[0];
  const [idx, setIdx] = useState(0),
    [answers, setAnswers] = useState({}),
    [checked, setChecked] = useState({}),
    [hints, setHints] = useState({}),
    [finished, setFinished] = useState(false),
    [remaining, setRemaining] = useState(0),
    [paused, setPaused] = useState(false),
    [savedRun, setSavedRun] = useState(false);
  const [word, setWord] = useState(null),
    [translation, setTranslation] = useState(""),
    [toast, setToast] = useState(""),
    [lesson, setLesson] = useState(null),
    [importOpen, setImportOpen] = useState(false),
    [importError, setImportError] = useState(""),
    [review, setReview] = useState(false),
    [flipped, setFlipped] = useState(false),
    [confirmReset, setConfirmReset] = useState(false);
  const paragraphRefs = useRef([]);
  const textPanelRef = useRef(null),
    questionPanelRef = useRef(null);
  const q = active.questions[idx];
  const correctCount = active.questions.filter((q, i) =>
    isCorrect(q, answers[i]),
  ).length;
  function notify(t) {
    setToast(t);
  }
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(""), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);
  useEffect(() => {
    if (page !== "reader") return;
    setSessions((prev) => ({
      ...prev,
      [`${activeId}:${mode}`]: {
        answers,
        checked,
        hints,
        idx,
        remaining,
        mode,
        finished,
      },
    }));
  }, [page, activeId, answers, checked, hints, idx, remaining, mode, finished]);
  useEffect(() => {
    if (page === "reader" && mode === "exam" && !paused && !finished) {
      const t = setInterval(
        () => setRemaining((v) => Math.max(0, v - 1)),
        1000,
      );
      return () => clearInterval(t);
    }
  }, [page, mode, paused, finished]);
  useEffect(() => {
    if (page === "reader" && mode === "exam" && remaining === 0 && !finished) {
      finish();
    }
  }, [remaining, page, mode]);
  function navigate(p) {
    setPage(p);
    setLesson(null);
    setWord(null);
    setReview(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  function start(p, m = mode, fresh = false) {
    setActiveId(p.id);
    const saved =
      !fresh && !sessions[`${p.id}:${m}`]?.finished && sessions[`${p.id}:${m}`];
    setAnswers(saved?.answers || {});
    setChecked(saved?.checked || {});
    setHints(saved?.hints || {});
    setIdx(Math.min(saved?.idx || 0, Math.max(0, p.questions.length - 1)));
    setRemaining(
      saved && !saved.finished && saved.mode === m
        ? saved.remaining
        : p.minutes * 60,
    );
    setMode(p.questions.length ? m : "practice");
    setFinished(false);
    setSavedRun(false);
    setPaused(false);
    setConfirmReset(false);
    setPage("reader");
    window.scrollTo(0, 0);
  }
  function finish() {
    setFinished(true);
    setPaused(true);
    if (!savedRun) {
      const record = {
        id: crypto.randomUUID(),
        passage: active.id,
        title: active.title,
        date: new Date().toISOString(),
        mode,
        correct: correctCount,
        total: active.questions.length,
        assisted: Object.keys(hints).length,
        items: active.questions.map((question, i) => ({
          prompt: question.prompt,
          type: question.type,
          answer: answers[i] || "",
          correct: question.answer,
          ok: isCorrect(question, answers[i]),
          index: i,
        })),
      };
      setHistory((h) => [record, ...h].slice(0, 100));
      setSavedRun(true);
    }
  }
  function reveal() {
    setHints((h) => ({ ...h, [idx]: Math.min(3, (h[idx] || 0) + 1) }));
  }
  function evidence() {
    paragraphRefs.current[q?.paragraph]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  function pickWord(raw, context) {
    const text = raw.trim().replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
    if (!text || text.length > 120) return;
    setWord({ text, context });
    setTranslation(
      glossary[text.toLowerCase()] ||
        words.find((w) => w.text.toLowerCase() === text.toLowerCase())
          ?.translation ||
        "",
    );
  }
  function saveWord() {
    if (!word) return;
    setWords((prev) => {
      const existing = prev.find(
        (w) => w.text.toLowerCase() === word.text.toLowerCase(),
      );
      return existing
        ? prev.map((w) =>
            w === existing ? { ...w, translation, context: word.context } : w,
          )
        : [
            {
              ...word,
              translation,
              id: crypto.randomUUID(),
              due: Date.now(),
              interval: 0,
            },
            ...prev,
          ];
    });
    setWord(null);
    notify("Сохранено в словарь");
  }
  function handleSelection(e) {
    const selection = window.getSelection();
    const t = selection?.toString().trim();
    if (
      t &&
      t.length < 120 &&
      e.currentTarget.contains(selection.anchorNode) &&
      e.currentTarget.contains(selection.focusNode)
    ) {
      pickWord(
        t,
        selection.anchorNode?.parentElement?.closest("p")?.textContent ||
          active.title,
      );
    }
  }
  function renderParagraph(text, pi) {
    let ranges = [];
    let personalRanges = [];
    for (const phrase of highlights[`${activeId}:${mode}`] || []) {
      let at = text.indexOf(phrase);
      while (at >= 0) {
        personalRanges.push([at, at + phrase.length]);
        at = text.indexOf(phrase, at + phrase.length);
      }
    }
    const show =
      q &&
      (checked[idx] ||
        finished ||
        (mode === "coach" && (hints[idx] || 0) >= 3));
    if (show && q.paragraph === pi) {
      let start = text.indexOf(q.evidence);
      if (start >= 0) ranges.push([start, start + q.evidence.length]);
    }
    let offset = 0;
    return text.split(/(\s+)/).map((token, j) => {
      const start = offset;
      offset += token.length;
      const lit = ranges.some(([a, b]) => start < b && offset > a);
      if (/^\s+$/.test(token)) return token;
      const cleaned = token.replace(/[^\p{L}-]/gu, "").toLowerCase();
      return (
        <span
          key={j}
          className={`${lit ? "proof " : ""}${personalRanges.some(([a, b]) => start < b && offset > a) ? "manual-mark " : ""}${words.some((w) => w.text.toLowerCase() === cleaned) ? "known-word" : ""}`}
          role="button"
          tabIndex={0}
          aria-label={`Слово ${token}`}
          onClick={() => {
            if (!window.getSelection()?.toString()) pickWord(token, text);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              pickWord(token, text);
            }
          }}
        >
          {token}
        </span>
      );
    });
  }
  function importData(text) {
    try {
      const data = JSON.parse(text);
      const items = (Array.isArray(data) ? data : [data]).map(validateImport);
      setCustom((c) => [...c, ...items]);
      setImportOpen(false);
      setImportError("");
      notify("Текст добавлен в личную библиотеку");
    } catch (e) {
      setImportError(e.message);
    }
  }
  async function importFile(file) {
    try {
      if (file.size > 15 * 1024 * 1024)
        throw Error("Файл слишком большой: максимум 15 МБ.");
      if (file.name.toLowerCase().endsWith(".json")) {
        importData(await file.text());
        return;
      }
      const entries = file.name.toLowerCase().endsWith(".zip")
        ? Object.entries(
            unzipSync(new Uint8Array(await file.arrayBuffer()), {
              filter: (entry) =>
                /reading passage\.html$/i.test(entry.name) &&
                entry.originalSize < 2000000,
            }),
          )
            .filter(([name]) => /reading passage\.html$/i.test(name))
            .map(([name, data]) => [name, strFromU8(data)])
        : [[file.name, await file.text()]];
      if (!entries.length)
        throw Error(
          "В ZIP не найдены файлы Reading Passage.html. Задания с ключами можно добавить через JSON.",
        );
      const items = entries.map(([name, text]) => {
        let title = name.replace(/\.[^.]+$/, "");
        let paragraphs;
        if (/\.html$/i.test(name)) {
          const doc = new DOMParser().parseFromString(text, "text/html");
          doc
            .querySelectorAll("script,style,iframe,object")
            .forEach((el) => el.remove());
          const ps = [...doc.querySelectorAll("p")]
            .map((el) => el.textContent.trim())
            .filter(Boolean);
          if (ps[0] && ps[0].length < 150) title = ps.shift();
          paragraphs = ps.length ? ps : [doc.body.textContent.trim()];
        } else
          paragraphs = text
            .trim()
            .split(/\n\s*\n/)
            .filter(Boolean);
        return validateImport({
          title,
          paragraphs,
          questions: [],
          minutes: 20,
        });
      });
      setCustom((c) => [...c, ...items]);
      setImportOpen(false);
      setImportError("");
      notify(
        `Добавлено текстов: ${items.length}. Можно читать и собирать словарь.`,
      );
    } catch (e) {
      setImportError(e.message);
    }
  }
  useEffect(() => {
    if (!word && !importOpen && !confirmReset) return;
    const previous = document.activeElement;
    const handler = (e) => {
      if (e.key === "Escape") {
        setWord(null);
        setImportOpen(false);
        setConfirmReset(false);
      }
      if (e.key === "Tab") {
        const modal = document.querySelector("[role=dialog]");
        const els = [
          ...modal.querySelectorAll(
            "button:not(:disabled),input:not([type=file]),textarea,a[href]",
          ),
        ];
        if (!els.length) return;
        const first = els[0],
          last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handler);
    const modal = document.querySelector("[role=dialog]");
    modal?.querySelector("input,button")?.focus();
    return () => {
      document.removeEventListener("keydown", handler);
      previous?.focus();
    };
  }, [Boolean(word), importOpen, confirmReset]);
  const completed = history.length,
    answered = history.reduce((n, h) => n + h.total, 0),
    right = history.reduce((n, h) => n + h.correct, 0),
    mistakes = history.flatMap((h) =>
      h.items
        .filter((i) => !i.ok)
        .map((i) => ({ ...i, passage: h.passage, title: h.title })),
    );
  return (
    <>
      <header>
        <div className="header-inner">
          <button className="brand" onClick={() => navigate("home")}>
            <span className="brand-icon">
              <BookOpen size={21} />
              <span>✦</span>
            </span>
            <span>
              Reading <b>Atelier</b>
              <small>маленькие шаги. ясные ответы.</small>
            </span>
          </button>
          <nav aria-label="Основная навигация">
            {[
              ["home", "Практика"],
              ["learn", "Техники"],
              ["vocab", "Словарь"],
              ["progress", "Мой путь"],
            ].map(([p, name]) => (
              <button
                className={page === p ? "active" : ""}
                key={p}
                onClick={() => navigate(p)}
              >
                {name}
                {p === "vocab" && words.length > 0 && <sup>{words.length}</sup>}
              </button>
            ))}
          </nav>
          <span className="header-note">
            <span /> IELTS Reading
          </span>
        </div>
      </header>
      {(wordFailure ||
        historyFailure ||
        customFailure ||
        sessionFailure ||
        highlightFailure) && (
        <div className="storage-warning">
          Браузер не смог сохранить изменения. Скачай резервную копию в «Мой
          путь», прежде чем закрывать страницу.
        </div>
      )}
      {page === "home" && (
        <main>
          <section className="hero">
            <div>
              <div className="eyebrow">
                <Sparkles size={13} /> ТВОЁ СПОКОЙНОЕ МЕСТО ДЛЯ ПОДГОТОВКИ
              </div>
              <h1>
                Читать внимательнее.
                <br />
                <em>Отвечать увереннее.</em>
              </h1>
              <p>
                Не нужно понимать каждое слово. Научись находить нужную мысль,
                <br className="desktop" /> замечать ловушки и опираться на текст
                — шаг за шагом.
              </p>
              <div className="hero-actions">
                <button
                  className="primary"
                  onClick={() => start(passages[0], "coach")}
                >
                  Начать с подсказками <ArrowRight size={16} />
                </button>
                <button
                  className="text-button"
                  onClick={() => navigate("learn")}
                >
                  Как это работает <ArrowUpRight size={15} />
                </button>
              </div>
              <div className="hero-meta">
                <span>
                  <Check size={13} /> Без оценок за скорость
                </span>
                <span>
                  <Check size={13} /> Объяснение каждого ответа
                </span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-flower">
                <Flower2 size={140} strokeWidth={0.75} />
              </div>
              <div className="paper-card">
                <span className="mini-label">THE ART OF NOTICING</span>
                <div className="paper-line">
                  The study found that <mark>some</mark>
                </div>
                <div className="paper-line">
                  participants felt more confident.
                </div>
                <div className="paper-rule" />
                <span className="paper-question">
                  Does this mean <b>everyone</b>?
                </span>
                <div className="paper-note">
                  <Lightbulb size={15} /> Одно слово меняет весь смысл.
                </div>
              </div>
              <div className="floating-pill">
                <Highlighter size={15} /> Найти. Сравнить. Понять.
              </div>
            </div>
          </section>
          <section className="modes">
            {[
              [
                "coach",
                Lightbulb,
                "Со мной",
                "Подсказки, якоря и поиск доказательств",
              ],
              [
                "practice",
                Target,
                "Самостоятельно",
                "Сначала твой ответ, потом объяснение",
              ],
              ["exam", Clock, "На время", "Без подсказок до завершения"],
            ].map(([id, Icon, title, desc]) => (
              <button
                key={id}
                className={`mode-card ${mode === id ? "selected" : ""}`}
                onClick={() => setMode(id)}
              >
                <span className="icon-box">
                  <Icon size={19} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
                <span className="mode-radio">{mode === id && <span />}</span>
              </button>
            ))}
          </section>
          <section className="library">
            <div className="section-top">
              <div>
                <div className="eyebrow">ОДИН ТЕКСТ ЗА РАЗ</div>
                <h2>
                  Твоя библиотека практики <span>{bank.length}</span>
                </h2>
              </div>
              <button className="secondary" onClick={() => setImportOpen(true)}>
                <Plus size={15} /> Добавить свой текст
              </button>
            </div>
            <div className="filters">
              <div className="chips">
                {["Все", "Старт", "Средний", "Сложнее", "Мои тексты"].map(
                  (f) => (
                    <button
                      key={f}
                      className={filter === f ? "active" : ""}
                      onClick={() => setFilter(f)}
                    >
                      {f}
                    </button>
                  ),
                )}
              </div>
              <label className="search">
                <Search size={15} />
                <input
                  aria-label="Поиск текстов"
                  placeholder="Тема или название"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>
            <div className="passage-grid">
              {bank
                .filter(
                  (p) =>
                    (filter === "Все" ||
                      p.level === filter ||
                      p.topic === filter) &&
                    `${p.title} ${p.topic}`
                      .toLowerCase()
                      .includes(search.toLowerCase()),
                )
                .map((p, i) => {
                  const last = history.find((h) => h.passage === p.id);
                  return (
                    <article className="passage-card" key={p.id}>
                      <div className="card-top">
                        <span className={`level level-${p.level}`}>
                          {p.level}
                        </span>
                        <span className="topic">{p.topic}</span>
                      </div>
                      <div className="card-num">
                        {String(bank.indexOf(p) + 1).padStart(2, "0")}{" "}
                        <span>↗</span>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.subtitle}</p>
                      <div className="card-tags">
                        {[...new Set(p.questions.map((q) => q.type))]
                          .slice(0, 3)
                          .map((t) => (
                            <span key={t}>
                              {t === "tfng"
                                ? "T / F / NG"
                                : t === "ynng"
                                  ? "Y / N / NG"
                                  : t === "completion"
                                    ? "Пропуски"
                                    : t === "heading"
                                      ? "Заголовки"
                                      : "Поиск"}
                            </span>
                          ))}
                      </div>
                      <div className="card-bottom">
                        <span>
                          <Clock size={13} />
                          {p.minutes} мин · {p.questions.length} вопросов
                        </span>
                        <button
                          aria-label={`Открыть ${p.title}`}
                          onClick={() => start(p)}
                        >
                          <ArrowRight size={19} />
                        </button>
                      </div>
                      {last && (
                        <div className="last-score">
                          <CheckCircle2 size={12} /> Последняя попытка:{" "}
                          {last.correct}/{last.total}
                        </div>
                      )}
                      {p.personal && (
                        <button
                          className="text-button delete-import"
                          onClick={() => {
                            setCustom((c) => c.filter((a) => a.id !== p.id));
                            notify("Текст убран из библиотеки");
                          }}
                        >
                          Убрать личный текст
                        </button>
                      )}
                    </article>
                  );
                })}
            </div>
            {!bank.some(
              (p) =>
                (filter === "Все" ||
                  p.level === filter ||
                  p.topic === filter) &&
                `${p.title} ${p.topic}`
                  .toLowerCase()
                  .includes(search.toLowerCase()),
            ) && (
              <div className="empty">
                Ничего не нашлось. Попробуй другую тему или фильтр.
              </div>
            )}
          </section>
          <section className="bottom-banner">
            <span className="icon-box">
              <Bookmark size={22} />
            </span>
            <div>
              <h3>Незнакомое слово — начало, а не препятствие.</h3>
              <p>
                Нажми на слово в тексте или выдели фразу. Сохрани её вместе с
                контекстом.
              </p>
            </div>
            <button className="text-button" onClick={() => navigate("vocab")}>
              Мой словарь <ArrowRight size={16} />
            </button>
          </section>
          <div className="source-note">
            Авторские учебные тексты: вымышленные исследования, а не официальные
            экзамены IELTS. Короткие сессии для освоения техник.
          </div>
        </main>
      )}
      {page === "reader" && (
        <main className="reader-main">
          <div className="reader-top">
            <button className="text-button" onClick={() => navigate("home")}>
              <ChevronLeft size={15} /> Библиотека
            </button>
            <div className="session-info">
              <span>
                {mode === "coach"
                  ? "С подсказками"
                  : mode === "practice"
                    ? "Самостоятельно"
                    : "На время"}
              </span>
              {mode === "exam" && !finished && (
                <>
                  <button
                    className="timer"
                    onClick={() => setPaused(!paused)}
                    aria-label={paused ? "Продолжить таймер" : "Пауза"}
                  >
                    {paused ? <Play size={13} /> : <Pause size={13} />}{" "}
                    {formatTime(remaining)}
                  </button>
                </>
              )}
              <button
                className="text-button"
                onClick={() => setConfirmReset(true)}
              >
                <RotateCcw size={13} /> Сначала
              </button>
            </div>
          </div>
          <div className="reader-title">
            <button
              className="text-button clear-marks"
              disabled={!(highlights[`${activeId}:${mode}`] || []).length}
              onClick={() =>
                setHighlights((h) => ({ ...h, [`${activeId}:${mode}`]: [] }))
              }
            >
              Убрать мои выделения
            </button>
            <div className="eyebrow">
              {active.topic} · {wordCount(active)} СЛОВ
            </div>
            <h1>{active.title}</h1>
            <p>{active.subtitle}</p>
          </div>
          {finished && (
            <div className="result-banner">
              <CheckCircle2 size={24} />
              <div>
                <strong>
                  Практика завершена · {correctCount} из{" "}
                  {active.questions.length}
                </strong>
                <p>
                  {Object.keys(hints).length
                    ? "Попытка с подсказками. Теперь попробуй найти доказательства самостоятельно."
                    : "Посмотри объяснения, а затем повтори вопросы, которые вызвали сомнения."}
                </p>
              </div>
              <button
                className="secondary"
                onClick={() => navigate("progress")}
              >
                Мой путь <ArrowRight size={14} />
              </button>
            </div>
          )}
          <div className="reader-mobile-tabs">
            <button
              onClick={() =>
                textPanelRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <BookOpen size={16} /> К тексту
            </button>
            <button
              onClick={() =>
                questionPanelRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <Target size={16} /> Вопрос{" "}
              {active.questions.length ? idx + 1 : ""}
            </button>
          </div>
          <div className="workspace">
            <article
              ref={textPanelRef}
              className="text-panel"
              onMouseUp={handleSelection}
              onTouchEnd={handleSelection}
            >
              <div className="panel-top">
                <span>
                  <BookOpen size={15} /> Текст
                </span>
                <small>Слово → словарь · фраза → маркер</small>
              </div>
              {active.paragraphs.map((p, pi) => (
                <div
                  className={`paragraph ${q && (checked[idx] || finished || (hints[idx] || 0) >= 2) && q.paragraph === pi ? "located" : ""}`}
                  key={pi}
                  ref={(el) => (paragraphRefs.current[pi] = el)}
                >
                  <span className="paragraph-letter">{letters[pi]}</span>
                  <p>{renderParagraph(p, pi)}</p>
                </div>
              ))}
            </article>
            <aside ref={questionPanelRef} className="question-panel">
              {active.questions.length > 0 ? (
                <>
                  <div className="panel-top">
                    <span>Практика</span>
                    <small>
                      {idx + 1} / {active.questions.length}
                    </small>
                  </div>
                  <div className="question-dots" aria-label="Перейти к вопросу">
                    {active.questions.map((question, i) => (
                      <button
                        key={i}
                        className={`${idx === i ? "current" : ""} ${checked[i] || finished ? (isCorrect(question, answers[i]) ? "right" : "wrong") : answers[i] ? "answered" : ""}`}
                        aria-label={`Вопрос ${i + 1}`}
                        onClick={() => setIdx(i)}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <div className="question-body">
                    <span className="type-label">{labels[q.type]}</span>
                    <h2>
                      {mode === "coach"
                        ? q.prompt.split(/(\s+)/).map((w, i) => (
                            <span
                              key={i}
                              className={
                                (q.anchors || []).some(
                                  (a) =>
                                    a
                                      .toLowerCase()
                                      .includes(
                                        w.toLowerCase().replace(/[^a-z]/g, ""),
                                      ) && w.trim().length > 2,
                                )
                                  ? "anchor"
                                  : ""
                              }
                            >
                              {w}
                            </span>
                          ))
                        : q.prompt}
                    </h2>
                    {q.type === "completion" ? (
                      <>
                        <label className="input-label" htmlFor="answer">
                          Не более {q.limit || 3} слов из текста
                        </label>
                        <input
                          id="answer"
                          className="answer-input"
                          placeholder="Твой ответ…"
                          value={answers[idx] || ""}
                          disabled={
                            finished ||
                            checked[idx] ||
                            (mode === "exam" && paused)
                          }
                          onChange={(e) =>
                            setAnswers((a) => ({ ...a, [idx]: e.target.value }))
                          }
                          onKeyDown={(e) => {
                            if (
                              e.key === "Enter" &&
                              mode !== "exam" &&
                              answers[idx]?.trim()
                            )
                              setChecked((c) => ({ ...c, [idx]: true }));
                          }}
                        />
                      </>
                    ) : (
                      <div className="options">
                        {(q.type === "tfng"
                          ? ["TRUE", "FALSE", "NOT GIVEN"]
                          : q.type === "ynng"
                            ? ["YES", "NO", "NOT GIVEN"]
                            : q.type === "matching"
                              ? active.paragraphs.map((_, i) => letters[i])
                              : q.options || []
                        ).map((option) => (
                          <button
                            key={option}
                            disabled={
                              finished ||
                              checked[idx] ||
                              (mode === "exam" && paused)
                            }
                            className={`${answers[idx] === option ? "chosen" : ""} ${(checked[idx] || finished) && q.answer === option ? "correct-option" : ""}`}
                            onClick={() =>
                              setAnswers((a) => ({ ...a, [idx]: option }))
                            }
                          >
                            <span className="option-radio">
                              {answers[idx] === option && <span />}
                            </span>
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                    {checked[idx] || finished ? (
                      <div
                        className={`feedback ${isCorrect(q, answers[idx]) ? "success" : "needs-work"}`}
                        role="status"
                      >
                        <strong>
                          {isCorrect(q, answers[idx])
                            ? "Верно. Вот доказательство."
                            : "Давай разберёмся."}
                        </strong>
                        <p className="correct-answer">
                          Ответ: <b>{q.answer}</b>
                          {!isCorrect(q, answers[idx]) && (
                            <span>Твой: {answers[idx] || "не заполнен"}</span>
                          )}
                        </p>
                        <button className="quote" onClick={evidence}>
                          «{q.evidence}» <ArrowUpRight size={13} />
                        </button>
                        <p>{q.explanation}</p>
                        <button className="text-button" onClick={evidence}>
                          <Highlighter size={14} /> Показать в тексте
                        </button>
                      </div>
                    ) : (
                      <>
                        {mode !== "exam" && (
                          <>
                            <button
                              className="primary check-btn"
                              disabled={!answers[idx]?.trim()}
                              onClick={() =>
                                setChecked((c) => ({ ...c, [idx]: true }))
                              }
                            >
                              Проверить ответ <Check size={16} />
                            </button>
                            {mode === "coach" && (
                              <div className="hint-box">
                                <div>
                                  <Lightbulb size={16} />
                                  <strong>
                                    Подсказка{" "}
                                    {Math.min(3, (hints[idx] || 0) + 1)} из 3
                                  </strong>
                                </div>
                                {hints[idx] >= 1 && <p>{q.hint}</p>}
                                {hints[idx] >= 2 && (
                                  <p>
                                    Посмотри абзац <b>{letters[q.paragraph]}</b>
                                    . Прочитай предложение и соседние.
                                  </p>
                                )}
                                {hints[idx] >= 3 && (
                                  <p>
                                    Доказательство выделено в тексте. Сравни его
                                    со всем утверждением: субъект, время и
                                    степень уверенности.
                                  </p>
                                )}
                                <button
                                  className="text-button"
                                  onClick={() => {
                                    reveal();
                                    if ((hints[idx] || 0) >= 1) evidence();
                                  }}
                                  disabled={hints[idx] >= 3}
                                >
                                  {!hints[idx]
                                    ? "С чего начать?"
                                    : hints[idx] >= 3
                                      ? "Теперь выбери ответ"
                                      : "Следующая подсказка"}{" "}
                                  <ArrowRight size={14} />
                                </button>
                              </div>
                            )}
                          </>
                        )}
                        {mode === "exam" && paused && (
                          <div className="hint-box">
                            Таймер на паузе. Нажми «Продолжить таймер», чтобы
                            отвечать.
                          </div>
                        )}
                      </>
                    )}
                    <div className="question-nav">
                      <button
                        className="secondary"
                        disabled={idx === 0}
                        onClick={() => setIdx((i) => i - 1)}
                      >
                        <ChevronLeft size={15} /> Назад
                      </button>
                      <button
                        className="secondary"
                        disabled={idx === active.questions.length - 1}
                        onClick={() => setIdx((i) => i + 1)}
                      >
                        Дальше <ChevronRight size={15} />
                      </button>
                    </div>
                    {!finished && (
                      <button className="finish-btn" onClick={finish}>
                        Завершить · заполнено{" "}
                        {Object.values(answers).filter((v) => v?.trim()).length}
                        /{active.questions.length}
                      </button>
                    )}
                    <p className="small-note">
                      {mode === "exam"
                        ? "Незаполненные вопросы при завершении считаются ошибками. Таймер работает, пока открыт текст."
                        : "Прогресс сохраняется на этом устройстве. Подсказки учитываются отдельно."}
                    </p>
                  </div>
                </>
              ) : (
                <div className="question-body">
                  <h2>Свободное чтение</h2>
                  <p>
                    В этом личном тексте пока нет вопросов. Нажимай на слова и
                    собирай словарь.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </main>
      )}
      {page === "learn" && (
        <main>
          <section className="page-heading">
            <div className="eyebrow">МЕНЬШЕ УГАДЫВАНИЯ, БОЛЬШЕ ЯСНОСТИ</div>
            <h1>
              У каждой задачи
              <br />
              <em>свой подход.</em>
            </h1>
            <p>
              Сначала найди место. Затем прочитай внимательно. И только потом
              отвечай.
            </p>
          </section>
          {lesson ? (
            <div className="lesson card">
              <button className="text-button" onClick={() => setLesson(null)}>
                <ChevronLeft size={15} /> Все техники
              </button>
              <h2>{lesson.name}</h2>
              <p>{lesson.intro}</p>
              <ol>
                {lesson.steps.map((step, i) => (
                  <li key={i}>
                    <span>{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="example">
                <strong>Попробуй заметить разницу</strong>
                {lesson.example.map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
              </div>
              <LessonChallenge key={lesson.id} type={lesson.id} />
              <button
                className="primary"
                onClick={() => {
                  const p =
                    passages.find((p) =>
                      p.questions.some((q) => q.type === lesson.id),
                    ) || passages[0];
                  start(p, "coach", true);
                  setIdx(p.questions.findIndex((q) => q.type === lesson.id));
                }}
              >
                Потренироваться <ArrowRight size={15} />
              </button>
            </div>
          ) : (
            <div className="technique-grid">
              {techniques.map((t, i) => (
                <button
                  className="technique-card"
                  key={t.id}
                  onClick={() => setLesson(t)}
                >
                  <span className="icon-box">
                    {i % 2 ? <Target size={21} /> : <Lightbulb size={21} />}
                  </span>
                  <span className="type-label">
                    {t.tag} · {t.time}
                  </span>
                  <h2>{t.name}</h2>
                  <p>{t.intro}</p>
                  <span className="text-button">
                    Разобраться <ArrowRight size={15} />
                  </span>
                </button>
              ))}
            </div>
          )}
          <section className="resource-section">
            <div className="eyebrow">ОФИЦИАЛЬНАЯ ПРАКТИКА</div>
            <h2>Когда захочется полного теста</h2>
            <p>
              Здесь — короткие авторские упражнения. Полные официальные тесты
              доступны у их издателей; свой материал можно добавить в личную
              библиотеку.
            </p>
            <div className="resource-grid">
              {resources.map((r) => (
                <a href={r.url} key={r.name} target="_blank" rel="noreferrer">
                  <strong>
                    {r.name}
                    <ArrowUpRight size={16} />
                  </strong>
                  <p>{r.text}</p>
                </a>
              ))}
            </div>
          </section>
        </main>
      )}
      {page === "vocab" && (
        <main>
          <section className="page-heading">
            <div className="eyebrow">СЛОВА, КОТОРЫЕ УЖЕ НЕ ПУГАЮТ</div>
            <h1>
              Твой маленький
              <br />
              <em>большой словарь.</em>
            </h1>
            <p>
              Сохраняй не только перевод, но и предложение. В контексте слово
              запоминается лучше.
            </p>
          </section>
          <div className="section-top">
            <div className="chips">
              <span>{words.length} слов</span>
              <span>
                {words.filter((w) => w.due <= Date.now()).length} для повторения
              </span>
            </div>
            <div className="button-row">
              <button
                className="secondary"
                onClick={() => {
                  setWord({ text: "", context: "" });
                  setTranslation("");
                }}
              >
                <Plus size={15} /> Своё слово
              </button>
              <button
                className="secondary"
                disabled={!words.length}
                onClick={() => {
                  setReview(!review);
                  setFlipped(false);
                }}
              >
                <RotateCcw size={15} /> Повторить
              </button>
              <button
                className="secondary"
                disabled={!words.length}
                onClick={() =>
                  download(
                    "reading-atelier-vocabulary.csv",
                    "\ufeff" +
                      [
                        ["Word", "Translation", "Context"],
                        ...words.map((w) => [w.text, w.translation, w.context]),
                      ]
                        .map((row) =>
                          row
                            .map(
                              (c) =>
                                '"' + String(c).replaceAll('"', '""') + '"',
                            )
                            .join(","),
                        )
                        .join("\n"),
                    "text/csv;charset=utf-8",
                  )
                }
              >
                <Download size={15} /> CSV для Anki
              </button>
            </div>
          </div>
          {review ? (
            (() => {
              const w = words.find((w) => w.due <= Date.now());
              return w ? (
                <div className="review-card card">
                  <span className="type-label">ВСПОМНИ ПЕРЕВОД</span>
                  <h2>{w.text}</h2>
                  <p>{w.context}</p>
                  {flipped ? (
                    <>
                      <div className="review-translation">
                        {w.translation || "Перевод ещё не добавлен"}
                      </div>
                      <div className="button-row">
                        <button
                          className="secondary"
                          onClick={() => {
                            setWords((ws) =>
                              ws.map((v) =>
                                v.id === w.id
                                  ? {
                                      ...v,
                                      due: Date.now() + 600000,
                                      interval: 0,
                                    }
                                  : v,
                              ),
                            );
                            setFlipped(false);
                          }}
                        >
                          Ещё повторить
                        </button>
                        <button
                          className="primary"
                          onClick={() => {
                            setWords((ws) =>
                              ws.map((v) =>
                                v.id === w.id
                                  ? {
                                      ...v,
                                      due:
                                        Date.now() +
                                        Math.max(1, (v.interval || 0) * 2) *
                                          86400000,
                                      interval: Math.max(
                                        1,
                                        (v.interval || 0) * 2,
                                      ),
                                    }
                                  : v,
                              ),
                            );
                            setFlipped(false);
                          }}
                        >
                          Помню <Check size={15} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      className="primary"
                      onClick={() => setFlipped(true)}
                    >
                      Показать перевод
                    </button>
                  )}
                </div>
              ) : (
                <div className="empty card">
                  <CheckCircle2 size={30} />
                  <h2>На сегодня всё.</h2>
                  <p>Повтори слова, когда они снова появятся в очереди.</p>
                  <button
                    className="secondary"
                    onClick={() => setReview(false)}
                  >
                    К словарю
                  </button>
                </div>
              );
            })()
          ) : (
            <>
              <label className="search vocab-search">
                <Search size={15} />
                <input
                  aria-label="Поиск в словаре"
                  placeholder="Слово или перевод"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <div className="vocab-grid">
                {words
                  .filter((w) =>
                    `${w.text} ${w.translation}`
                      .toLowerCase()
                      .includes(search.toLowerCase()),
                  )
                  .map((w) => (
                    <article className="word-card" key={w.id}>
                      <div>
                        <h3>{w.text}</h3>
                        <button
                          aria-label={`Произнести ${w.text}`}
                          onClick={() => {
                            if ("speechSynthesis" in window) {
                              const u = new SpeechSynthesisUtterance(w.text);
                              u.lang = "en-GB";
                              speechSynthesis.speak(u);
                            } else notify("В этом браузере озвучка недоступна");
                          }}
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <strong>{w.translation || "Добавь свой перевод"}</strong>
                      <p>{w.context}</p>
                      <div className="word-actions">
                        <button
                          onClick={() => {
                            setWord(w);
                            setTranslation(w.translation);
                          }}
                        >
                          Изменить
                        </button>
                        <button
                          onClick={() => {
                            setWords((ws) => ws.filter((v) => v.id !== w.id));
                            notify("Слово удалено");
                          }}
                          aria-label={`Удалить ${w.text}`}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </article>
                  ))}
              </div>
              {!words.length && (
                <div className="empty card">
                  <Bookmark size={32} />
                  <h2>Первое слово ждёт в тексте.</h2>
                  <p>
                    Нажми на любое слово во время чтения — оно сохранится вместе
                    с предложением.
                  </p>
                  <button
                    className="primary"
                    onClick={() => start(passages[0], "coach")}
                  >
                    Открыть первый текст <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      )}
      {page === "progress" && (
        <main>
          <section className="page-heading">
            <div className="eyebrow">ПРОГРЕСС — ЭТО НЕ ТОЛЬКО БАЛЛЫ</div>
            <h1>
              Ты замечаешь
              <br />
              <em>всё больше.</em>
            </h1>
            <p>Ошибки показывают, что потренировать дальше. Начни с одной.</p>
          </section>
          <div className="stats-grid">
            {[
              [completed, "завершённых практик"],
              [
                answered ? Math.round((right / answered) * 100) + "%" : "—",
                "верных ответов",
              ],
              [words.length, "слов в коллекции"],
              [mistakes.length, "вопросов для разбора"],
            ].map(([v, l]) => (
              <div className="card" key={l}>
                <strong>{v}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
          <div className="progress-columns">
            <section className="card">
              <h2>Что уже получается</h2>
              {Object.entries(labels).map(([type, label]) => {
                const items = history
                  .flatMap((h) => h.items)
                  .filter((i) => i.type === type);
                if (!items.length) return null;
                const pc = Math.round(
                  (items.filter((i) => i.ok).length / items.length) * 100,
                );
                return (
                  <div className="skill-bar" key={type}>
                    <div>
                      <span>{label}</span>
                      <strong>{pc}%</strong>
                    </div>
                    <div className="bar">
                      <span style={{ width: pc + "%" }} />
                    </div>
                  </div>
                );
              })}
              {!completed && (
                <p className="muted">
                  После первой завершённой практики здесь появятся твои
                  результаты.
                </p>
              )}
              <p className="small-note">
                Короткие учебные сессии не переводятся в IELTS Band. Попытки с
                подсказками отмечаются отдельно.
              </p>
            </section>
            <section className="card">
              <h2>История маленьких побед</h2>
              {history.slice(0, 6).map((h) => (
                <div className="history-row" key={h.id}>
                  <div>
                    <strong>{h.title}</strong>
                    <small>
                      {new Date(h.date).toLocaleDateString("ru-RU")} ·{" "}
                      {h.mode === "coach"
                        ? "с подсказками"
                        : h.mode === "exam"
                          ? "на время"
                          : "самостоятельно"}
                      {h.assisted
                        ? ` · подсказок к вопросам: ${h.assisted}`
                        : ""}
                    </small>
                  </div>
                  <span>
                    {h.correct}/{h.total}
                  </span>
                </div>
              ))}
              {!completed && (
                <p className="muted">
                  Заверши любую практику, чтобы сохранить попытку.
                </p>
              )}
            </section>
          </div>
          <section className="mistake-section">
            <div className="section-top">
              <h2>Не ошибка. Следующий шаг.</h2>
              <span className="muted">Последние вопросы для повторения</span>
            </div>
            {mistakes.slice(0, 12).map((m, i) => (
              <div className="mistake-row" key={i}>
                <div>
                  <span className="type-label">{labels[m.type]}</span>
                  <h3>{m.prompt}</h3>
                  <p>
                    Твой ответ: {m.answer || "не заполнен"} · Верный:{" "}
                    {m.correct}
                  </p>
                </div>
                <button
                  className="secondary"
                  disabled={!bank.some((p) => p.id === m.passage)}
                  onClick={() => {
                    start(
                      bank.find((p) => p.id === m.passage),
                      "coach",
                      true,
                    );
                    setIdx(m.index);
                  }}
                >
                  Разобрать <ArrowRight size={15} />
                </button>
              </div>
            ))}
            {!mistakes.length && (
              <div className="empty card">
                Здесь появятся вопросы, к которым полезно вернуться.
              </div>
            )}
          </section>
          <div className="backup-row">
            <p>
              Твои данные хранятся в этом браузере. Резервная копия переносит
              словарь, историю и личные тексты на другое устройство.
            </p>
            <button
              className="secondary"
              onClick={() =>
                download(
                  "reading-atelier-backup.json",
                  JSON.stringify(
                    {
                      version: 1,
                      words,
                      history,
                      custom,
                      sessions,
                      highlights,
                    },
                    null,
                    2,
                  ),
                )
              }
            >
              <Download size={15} /> Скачать копию
            </button>
            <label className="secondary upload-label">
              <Upload size={15} /> Восстановить
              <input
                type="file"
                accept=".json"
                onChange={async (e) => {
                  try {
                    const b = JSON.parse(await e.target.files[0].text());
                    if (
                      b.version !== 1 ||
                      !Array.isArray(b.words) ||
                      !Array.isArray(b.history) ||
                      !Array.isArray(b.custom)
                    )
                      throw Error("Неверный формат");
                    if (
                      b.words.some(
                        (w) =>
                          typeof w.text !== "string" ||
                          typeof w.context !== "string" ||
                          typeof w.translation !== "string",
                      ) ||
                      b.history.some(
                        (h) =>
                          !Array.isArray(h.items) ||
                          typeof h.title !== "string",
                      )
                    )
                      throw Error("Повреждённые данные");
                    const restored = b.custom.map((p) => ({
                      ...validateImport(p),
                      id: p.id,
                    }));
                    setWords(b.words);
                    setHistory(b.history);
                    setCustom(restored);
                    setSessions(b.sessions || {});
                    setHighlights(b.highlights || {});
                    notify("Копия восстановлена");
                  } catch {
                    notify("Не удалось прочитать резервную копию");
                  }
                  e.target.value = "";
                }}
              />
            </label>
          </div>
        </main>
      )}
      <footer>
        <span>
          Reading Atelier <span className="footer-flower">✳</span> Учимся
          замечать смысл.
        </span>
        <span>
          Авторская практика · IELTS Academic · С любовью к маленьким шагам
        </span>
      </footer>
      {word && (
        <div className="modal-backdrop" onClick={() => setWord(null)}>
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="word-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setWord(null)}
              aria-label="Закрыть"
            >
              <X size={19} />
            </button>
            <div className="eyebrow">В ТВОЮ КОЛЛЕКЦИЮ</div>
            <h2 id="word-title">Сохраним это слово.</h2>
            <label className="input-label">
              Слово или фраза
              <input
                autoFocus
                className="answer-input"
                value={word.text}
                maxLength={120}
                onChange={(e) =>
                  setWord((w) => ({ ...w, text: e.target.value }))
                }
              />
            </label>
            <label className="input-label">
              Твой перевод
              <input
                className="answer-input"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                placeholder="Как ты понимаешь это слово?"
              />
            </label>
            <label className="input-label">
              Контекст
              <textarea
                value={word.context}
                onChange={(e) =>
                  setWord((w) => ({ ...w, context: e.target.value }))
                }
              />
            </label>
            <p className="small-note">
              Перевод некоторых слов предложен из учебного словаря. Остальные
              добавляй своими словами.
            </p>
            <button
              className="secondary"
              disabled={!word.text.trim() || page !== "reader"}
              onClick={() => {
                setHighlights((h) => ({
                  ...h,
                  [`${activeId}:${mode}`]: [
                    ...new Set([
                      ...(h[`${activeId}:${mode}`] || []),
                      word.text,
                    ]),
                  ],
                }));
                setWord(null);
                notify("Фраза выделена в тексте");
              }}
            >
              <Highlighter size={15} /> Выделить в тексте
            </button>{" "}
            <button
              className="primary"
              disabled={!word.text.trim()}
              onClick={saveWord}
            >
              <Bookmark size={15} /> Сохранить слово
            </button>
          </section>
        </div>
      )}
      {importOpen && (
        <div className="modal-backdrop" onClick={() => setImportOpen(false)}>
          <section
            className="modal import-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="import-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setImportOpen(false)}
              aria-label="Закрыть"
            >
              <X size={19} />
            </button>
            <div className="eyebrow">ЛИЧНАЯ БИБЛИОТЕКА</div>
            <h2 id="import-title">Практикуйся на своих материалах.</h2>
            <p>
              Вставь текст, загрузи HTML / TXT или ZIP с Reading Passage.html.
              Для заданий с ключами и объяснениями используй JSON. Материал
              остаётся только в твоём браузере.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const p = String(f.get("passage"))
                  .trim()
                  .split(/\n\s*\n/)
                  .filter(Boolean);
                try {
                  const item = validateImport({
                    title: String(f.get("title")),
                    paragraphs: p,
                    questions: [],
                  });
                  setCustom((c) => [...c, item]);
                  setImportOpen(false);
                  notify("Текст добавлен");
                } catch (e) {
                  setImportError(e.message);
                }
              }}
            >
              <input
                name="title"
                className="answer-input"
                placeholder="Название текста"
                required
                maxLength={200}
              />
              <textarea
                name="passage"
                placeholder="Вставь текст. Отделяй абзацы пустой строкой."
                required
                rows={5}
              />
              <button className="primary">
                Добавить для чтения <Plus size={15} />
              </button>
            </form>
            <div className="import-json">
              <label className="secondary upload-label">
                <Upload size={15} /> Загрузить файл
                <input
                  type="file"
                  accept=".json,.zip,.html,.txt"
                  onChange={async (e) => {
                    if (e.target.files[0]) await importFile(e.target.files[0]);
                    e.target.value = "";
                  }}
                />
              </label>
              <button
                className="text-button"
                onClick={() =>
                  download(
                    "reading-atelier-template.json",
                    JSON.stringify(
                      {
                        title: "My passage",
                        minutes: 15,
                        paragraphs: [
                          "Some residents joined a free club. The club opened in May.",
                        ],
                        questions: [
                          {
                            type: "tfng",
                            prompt: "Members paid to join.",
                            answer: "FALSE",
                            paragraph: 0,
                            evidence: "a free club",
                            explanation: "Free прямо противоречит paid.",
                            anchors: ["paid"],
                            hint: "Найди стоимость членства.",
                          },
                        ],
                      },
                      null,
                      2,
                    ),
                  )
                }
              >
                Скачать шаблон <Download size={14} />
              </button>
            </div>
            {importError && (
              <p className="error" role="alert">
                {importError}
              </p>
            )}
            <p className="small-note">
              Типы JSON: tfng, ynng, completion, matching, heading, features,
              mc. Для вариантов выбора добавь options; paragraph нумеруется с 0.
              Для пропусков можно задать limit и alternatives.
            </p>
          </section>
        </div>
      )}
      {confirmReset && (
        <div className="modal-backdrop">
          <section className="modal" role="dialog" aria-modal="true">
            <h2>Начать новую попытку?</h2>
            <p>
              Ответы текущей сессии очистятся. Завершённые попытки останутся в
              истории.
            </p>
            <div className="button-row">
              <button
                className="secondary"
                onClick={() => setConfirmReset(false)}
              >
                Продолжить текущую
              </button>
              <button
                className="primary"
                onClick={() => start(active, mode, true)}
              >
                Начать сначала
              </button>
            </div>
          </section>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <CheckCircle2 size={16} />
          {toast}
        </div>
      )}
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
