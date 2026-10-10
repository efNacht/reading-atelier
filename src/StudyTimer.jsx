import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, Clock } from "lucide-react";
export default function StudyTimer() {
  const [minutes, setMinutes] = useState(20),
    [remaining, setRemaining] = useState(1200),
    [running, setRunning] = useState(false),
    [finished, setFinished] = useState(false);
  const deadline = useRef(0);
  useEffect(() => {
    if (!running) return;
    deadline.current = Date.now() + remaining * 1000;
    const tick = setInterval(() => {
      const next = Math.max(
        0,
        Math.ceil((deadline.current - Date.now()) / 1000),
      );
      setRemaining(next);
      if (!next) {
        setRunning(false);
        setFinished(true);
        navigator.vibrate?.([150, 80, 150]);
      }
    }, 300);
    return () => clearInterval(tick);
  }, [running]);
  function preset(value) {
    setRunning(false);
    setMinutes(value);
    setRemaining(value * 60);
    setFinished(false);
  }
  return (
    <main className="timer-page">
      <section className="page-heading">
        <span className="eyebrow">ТАЙМЕР · ОТДЕЛЬНАЯ СЕССИЯ</span>
        <h1>Тренируй темп.</h1>
        <p>
          Reading — 60 минут на 40 вопросов. Writing — 60 минут: примерно 20 на
          Task 1 и 40 на Task 2. Для отдельной техники выбери короткую сессию.
        </p>
      </section>
      <section className="timer-card">
        <Clock />
        <div className="timer-presets">
          {[5, 12, 20, 40, 60].map((m) => (
            <button
              key={m}
              aria-pressed={minutes === m}
              onClick={() => preset(m)}
            >
              {m} мин
            </button>
          ))}
        </div>
        <label>
          Своя длительность
          <input
            type="number"
            min="1"
            max="180"
            value={minutes}
            onChange={(e) =>
              preset(Math.min(180, Math.max(1, Number(e.target.value) || 1)))
            }
          />
        </label>
        <div className="timer-digits" aria-label="Осталось времени">
          {String(Math.floor(remaining / 60)).padStart(2, "0")}:
          {String(remaining % 60).padStart(2, "0")}
        </div>
        <div className="button-row">
          <button
            className="primary"
            disabled={!remaining}
            onClick={() => setRunning(!running)}
          >
            {running ? <Pause size={18} /> : <Play size={18} />}{" "}
            {running ? "Пауза" : "Начать"}
          </button>
          <button className="secondary" onClick={() => preset(minutes)}>
            <RotateCcw size={17} />
            Сбросить
          </button>
        </div>
        <p role="status">
          {finished
            ? "Время закончилось. Зафиксируй результат и разберись с пропущенными вопросами."
            : running
              ? "Таймер продолжает считать при переключении вкладок."
              : "Можно поставить на паузу и продолжить."}
        </p>
        <small>
          Не закрывай приложение. Можно переходить между разделами. Таймеры
          Reading и Writing работают независимо.
        </small>
      </section>
    </main>
  );
}
