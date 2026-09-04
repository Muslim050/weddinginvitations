"use client";

import { useEffect, useMemo, useState } from "react";
import { copy, EVENT_ISO, type Lang } from "./copy";
import { Spray, Divider, FrameCorner } from "./Ornament";

function useCountdown(iso: string) {
  const [left, setLeft] = useState<number[] | null>(null);
  useEffect(() => {
    const tick = () => {
      const diff = new Date(iso).getTime() - Date.now();
      if (diff <= 0) return setLeft([0, 0, 0, 0]);
      setLeft([
        Math.floor(diff / 86400000),
        Math.floor((diff / 3600000) % 24),
        Math.floor((diff / 60000) % 60),
        Math.floor((diff / 1000) % 60),
      ]);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [iso]);
  return left;
}

export default function Bogh() {
  const [lang, setLang] = useState<Lang>("ru");
  const [opened, setOpened] = useState(false);
  const [guest, setGuest] = useState("");
  const [attend, setAttend] = useState<"yes" | "no" | null>(null);
  const [sent, setSent] = useState(false);
  const t = copy[lang];
  const left = useCountdown(EVENT_ISO);

  useEffect(() => {
    const to = new URLSearchParams(window.location.search).get("to");
    if (to) setGuest(to.slice(0, 40));
  }, []);

  const mapHref = useMemo(
    () => `https://maps.google.com/?q=${encodeURIComponent("Osiyo Grand, Labzak 5, Tashkent")}`,
    []
  );

  return (
    <div className="bogh">
      {/* ——— шапка ——— */}
      <header className="bogh-bar">
        <span className="bogh-brand">{t.nav}</span>
        <button
          type="button"
          className="bogh-lang"
          onClick={() => setLang(lang === "ru" ? "uz" : "ru")}
          aria-label={lang === "ru" ? "O‘zbekchaga o‘tish" : "Переключить на русский"}
        >
          {lang === "ru" ? "РУ" : "UZ"}
        </button>
      </header>

      {/* ——— обложка ——— */}
      <section className="bogh-cover">
        <Spray className="bogh-spray bogh-spray--tl" />
        <Spray className="bogh-spray bogh-spray--br" />

        {!opened ? (
          <div className="bogh-rolled">
            <div className="bogh-roll" />
            <button type="button" className="bogh-open" onClick={() => setOpened(true)}>
              {t.open}
            </button>
          </div>
        ) : (
          <article className="bogh-card">
            <FrameCorner className="bogh-fc bogh-fc--tl" />
            <FrameCorner className="bogh-fc bogh-fc--tr" />
            <FrameCorner className="bogh-fc bogh-fc--bl" />
            <FrameCorner className="bogh-fc bogh-fc--br" />

            <p className="bogh-kicker">{t.coverKicker}</p>
            <h1 className="bogh-names">
              <span>{t.groom}</span>
              <em>&amp;</em>
              <span>{t.bride}</span>
            </h1>
            <p className="bogh-date">{t.date}</p>
            <p className="bogh-swipe">{t.swipe}</p>
          </article>
        )}
      </section>

      {opened && (
        <main>
          {/* ——— обращение ——— */}
          <section className="bogh-sec">
            <p className="bogh-kicker">{t.greetKicker}</p>
            <h2 className="bogh-script">{guest || t.greetFallback}!</h2>
            <Divider className="bogh-div" />
            <p className="bogh-body">{t.greetText}</p>
          </section>

          {/* ——— дата ——— */}
          <section className="bogh-sec bogh-sec--tint">
            <p className="bogh-kicker">{t.whenKicker}</p>
            <h2 className="bogh-script">{t.whenTitle}</h2>
            <div className="bogh-when">
              <span>{t.month}</span>
              <strong>{t.day}</strong>
              <span>{t.time}</span>
            </div>
            <ul className="bogh-count">
              {t.units.map((u, i) => (
                <li key={u}>
                  <b>{left ? String(left[i]).padStart(2, "0") : "—"}</b>
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ——— программа ——— */}
          <section className="bogh-sec">
            <p className="bogh-kicker">{t.programKicker}</p>
            <h2 className="bogh-script">{t.programTitle}</h2>
            <Divider className="bogh-div" />
            <ol className="bogh-prog">
              {t.program.map(([time, title, note]) => (
                <li key={time}>
                  <span className="bogh-time">{time}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ——— место ——— */}
          <section className="bogh-sec bogh-sec--tint">
            <p className="bogh-kicker">{t.whereKicker}</p>
            <h2 className="bogh-script">{t.whereTitle}</h2>
            <p className="bogh-venue">{t.venue}</p>
            <p className="bogh-body">{t.address}</p>
            <a className="bogh-btn" href={mapHref} target="_blank" rel="noreferrer">
              {t.route}
            </a>
          </section>

          {/* ——— анкета ——— */}
          <section className="bogh-sec">
            <p className="bogh-kicker">{t.rsvpKicker}</p>
            <h2 className="bogh-script">{t.rsvpTitle}</h2>
            <p className="bogh-body">{t.rsvpText}</p>

            <form
              className="bogh-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label>
                <span className="bogh-label">{t.name}</span>
                <input
                  required
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                  className="bogh-input"
                />
              </label>

              <div className="bogh-choice">
                {(["yes", "no"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    className={`bogh-pick ${attend === v ? "is-on" : ""}`}
                    onClick={() => setAttend(v)}
                    aria-pressed={attend === v}
                  >
                    {v === "yes" ? t.yes : t.no}
                  </button>
                ))}
              </div>

              {attend === "yes" && (
                <label>
                  <span className="bogh-label">{t.guests}</span>
                  <select className="bogh-input" defaultValue="1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </label>
              )}

              <button type="submit" className="bogh-btn bogh-btn--wide" disabled={!attend}>
                {sent ? t.sent : t.send}
              </button>
              <p className="bogh-demo">{t.demo}</p>
            </form>
          </section>

          {/* ——— финал ——— */}
          <section className="bogh-sec bogh-final">
            <Spray className="bogh-spray bogh-spray--tl bogh-spray--soft" />
            <Spray className="bogh-spray bogh-spray--br bogh-spray--soft" />
            <h2 className="bogh-script">{t.byeTitle}</h2>
            <Divider className="bogh-div" />
            <p className="bogh-body">{t.byeText}</p>
            <p className="bogh-sign">
              {t.groom} &amp; {t.bride}
            </p>
          </section>
        </main>
      )}
    </div>
  );
}
