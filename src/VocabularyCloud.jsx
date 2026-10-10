import React, { useState } from "react";
import { Cloud, RefreshCw, KeyRound } from "lucide-react";
export default function VocabularyCloud({ cloud }) {
  const [key, setKey] = useState(""),
    [open, setOpen] = useState(false);
  return (
    <section className="cloud-panel">
      <div>
        <Cloud size={19} />
        <strong>Мой словарь на всех устройствах</strong>
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
            Подключить личный словарь
          </button>
          {open && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                cloud.connect(key);
                setKey("");
              }}
            >
              <label htmlFor="cloud-key">Личный ключ доступа</label>
              <input
                id="cloud-key"
                type="password"
                autoComplete="off"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Введи ключ из личного файла"
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
        Приватное хранилище одного пользователя. Синхронизируются слова,
        контекст, перевод и расписание повторения. Ключ действует в этой
        вкладке; на другом устройстве введи его снова. Без сети словарь
        сохраняется локально.
      </small>
    </section>
  );
}
