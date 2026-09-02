"use client";

import { useState } from "react";
import Screen from "./Screen";
import { shots } from "@/lib/shots";
import { price } from "@/lib/site";
import { PRICES } from "@/lib/pricing";
import { promises } from "@/lib/promises";

const views = [
  { key: "chinor-ru", label: "Chinor", lang: "ru", shot: shots.chinorHero },
  { key: "chinor-uz", label: "Chinor", lang: "uz", shot: shots.chinorHeroUz },
  { key: "nur-ru", label: "Nur", lang: "ru", shot: shots.nurWelcome },
] as const;

export default function Hero() {
  const [tpl, setTpl] = useState<"Chinor" | "Nur">("Chinor");
  const [lang, setLang] = useState<"ru" | "uz">("ru");

  // У Nur снят только русский экран — переключатель языка показываем для Chinor
  const view =
    views.find((v) => v.label === tpl && v.lang === lang) ??
    views.find((v) => v.label === tpl) ??
    views[0];

  return (
    <section className="relative overflow-hidden pb-14 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-96 opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(201,160,106,0.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-5 pt-6 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:pt-14">
        <div>
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Пригласительные · Ташкент
          </span>

          <h1 className="mt-5 font-display text-[clamp(1.85rem,7.6vw,4.4rem)] leading-[0.98] tracking-tight text-balance">
            Одна ссылка&nbsp;— и&nbsp;приглашена вся свадьба
          </h1>

          <p className="mt-3.5 max-w-md text-[0.98rem] leading-snug text-ash sm:text-lg sm:leading-relaxed">
            Гость видит своё имя, никох и той, строит маршрут и отвечает: буду
            или нет.
          </p>

          <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-2xl border border-sand bg-cream/50 px-4 py-3 sm:px-5 sm:py-4">
            <span className="font-display text-xl sm:text-2xl">
              от {price(PRICES.chinor)}
            </span>
            <span className="text-sm text-ash">{promises.free.toLowerCase()}</span>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row">
            <a
              href="#order"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 font-medium text-ivory transition-transform hover:-translate-y-0.5 sm:py-4"
            >
              Хочу черновик бесплатно
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#tour"
              className="hidden items-center justify-center rounded-full border border-ink/20 px-8 py-4 font-medium transition-colors hover:border-ink hover:bg-cream sm:inline-flex"
            >
              Как это увидит гость
            </a>
          </div>
        </div>

        {/* Настоящий экран шаблона, а не рисунок */}
        <div className="mx-auto w-full max-w-[18rem]">
          <Screen shot={view.shot} priority sizes="(max-width: 640px) 68vw, 288px" />

          <div className="mt-4 flex items-center justify-center gap-2">
            {(["Chinor", "Nur"] as const).map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setTpl(name)}
                className={`rounded-full px-4 py-2 text-xs transition-colors ${
                  name === tpl
                    ? "bg-ink text-ivory"
                    : "border border-sand text-muted hover:border-ink/30"
                }`}
              >
                {name}
              </button>
            ))}

            {tpl === "Chinor" && (
              <button
                type="button"
                onClick={() => setLang(lang === "ru" ? "uz" : "ru")}
                className="rounded-full border border-sand px-4 py-2 text-xs text-muted transition-colors hover:border-ink/30 hover:text-ink"
                aria-label="Показать приглашение на другом языке"
              >
                {lang === "ru" ? "показать UZ" : "показать RU"}
              </button>
            )}
          </div>

          <p className="mt-3 text-center text-xs leading-relaxed text-muted">
            Настоящий экран шаблона, снятый с телефона.
            {tpl === "Chinor" && " Нажмите «показать UZ» — то же приглашение на узбекском."}
          </p>

          <a
            href="#tour"
            className="mt-5 flex items-center justify-center rounded-full border border-ink/20 px-8 py-3.5 font-medium transition-colors hover:border-ink hover:bg-cream sm:hidden"
          >
            Как это увидит гость
          </a>
        </div>
      </div>
    </section>
  );
}
