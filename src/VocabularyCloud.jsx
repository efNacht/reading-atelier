import React, { useState } from "react";
import { Cloud, RefreshCw, KeyRound } from "lucide-react";
export default function VocabularyCloud({ cloud }) {
  const [key, setKey] = useState(""),
    [open, setOpen] = useState(false);
  return (
    <section className="cloud-panel">
      <div>
        <Cloud size={19} />
        <strong>Синхронизация между устройствами</strong>
      </div>
      <p role="status">{cloud.status}</p>
      {cloud.connected ? (
        <div className="button-row">
          <button className="secondary" onClick={cloud.sync}>
            <RefreshCw size={15} />
            Синхронизировать
          </button>
          <button className="text-button" onClick={cloud.disconnect}>
            Отключить на этом устройстве
          </button>
        </div>
      ) : (
        <>
          <button className="secondary" onClick={() => setOpen(!open)}>
            <KeyRound size={15} />
            Включить синхронизацию
          </button>
          {open && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                cloud.connect(key);
                setKey("");
              }}
            >
              <label htmlFor="cloud-key">Пароль</label>
              <input
                id="cloud-key"
                type="password"
                autoComplete="off"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                inputMode="numeric"
                placeholder="Пароль"
                required
              />
              <button className="primary" type="submit">
                Подключить
              </button>
            </form>
          )}
        </>
      )}
      <small>
        Синхронизируются словарь, история попыток, выделения, свои тексты и
        черновики Writing. Пароль вводится один раз на устройстве. Без сети всё
        сохраняется локально и догружается потом.
      </small>
    </section>
  );
}
