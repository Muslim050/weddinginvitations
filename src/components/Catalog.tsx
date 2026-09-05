"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Screen from "./Screen";
import LiveScreen from "./LiveScreen";
import { templates, type Template } from "@/lib/templates";
import { price } from "@/lib/site";

export default function Catalog() {
  const [full, setFull] = useState<Template | null>(null);
  const [live, setLive] = useState(false);

  // Пока открыт просмотр, страница под ним не должна уезжать вместе с пальцем.
  useEffect(() => {
    if (!full) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFull(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [full]);

  return (
    <section id="templates" className="scroll-mt-20 border-t border-sand bg-cream/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="eyebrow inline-flex items-center gap-3 text-bronze">
          <span className="rule" />
          Семь шаблонов
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
          Выберите характер вечера
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ash">
          Имена, дата, фотографии и адреса будут ваши. Структура останется той же.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((t) => (
            <article
              key={t.slug}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-sand bg-ivory"
            >
              <div
                className="flex justify-center px-8 pt-10 pb-0"
                style={{ background: t.panel }}
              >
                <div className="w-[14rem] translate-y-5">
                  <Screen
                    shot={t.gallery[0]}
                    glow={false}
                    sizes="(max-width: 640px) 60vw, 224px"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl">{t.name}</h3>
                    <p className="mt-1 text-xs tracking-[0.16em] uppercase text-muted">
                      {t.style}
                    </p>
                  </div>
                  <div className="font-display text-2xl whitespace-nowrap text-bronze">
                    {price(t.price)}
                  </div>
                </div>

                <p className="mt-4 text-ash">{t.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-sand bg-cream/60 px-3 py-1.5 text-xs text-ash"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setFull(t)}
                    className="flex-1 rounded-full bg-ink px-6 py-3.5 text-center text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5"
                  >
                    {t.demoUrl ? "Открыть демо" : "Показать на весь экран"}
                  </button>
                  <a
                    href="#order"
                    className="flex-1 rounded-full border border-ink/20 px-6 py-3.5 text-center text-sm font-medium transition-colors hover:border-ink hover:bg-cream"
                  >
                    Хочу такой
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/*
        Демо ещё не выложено. Вместо одного кадра показываем все экраны шаблона
        встык внутри рамки телефона — приглашение листается так же, как у гостя.

        Портал в body обязателен: `main > section` анимируется через
        `animation-timeline: view()`, а transform на предке делает секцию
        containing block для position: fixed. Без портала «весь экран»
        оказывается высотой с секцию и уезжает вместе с ней.
      */}
      {full &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Приглашение ${full.name}`}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-ink/85 p-4 backdrop-blur-sm"
          onClick={() => setFull(null)}
        >
          <div
            className="flex min-h-0 w-full max-w-[19rem] flex-1 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <LiveScreen
              src={full.demoUrl}
              title={`Живое приглашение ${full.name}`}
              fallback={full.gallery[0]}
              onLive={setLive}
              sizes="304px"
              className="w-full"
            />
          </div>

          <div
            className="flex flex-none flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs text-ivory/60">
              {live
                ? "Это настоящее приглашение — листайте и нажимайте"
                : "Демо сейчас недоступно — это снимок шаблона"}
            </p>
            <div className="flex items-center gap-3">
              {live && (
                <a
                  href={full.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ivory/30 px-6 py-2.5 text-sm font-medium text-ivory"
                >
                  Открыть в новой вкладке
                </a>
              )}
              <button
                type="button"
                onClick={() => setFull(null)}
                className="rounded-full bg-ivory px-6 py-2.5 text-sm font-medium text-ink"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>,
          document.body,
        )}
    </section>
  );
}
