"use client";

import { useState } from "react";
import LiveScreen from "./LiveScreen";
import { price } from "@/lib/site";
import { PRICES } from "@/lib/pricing";
import { promises } from "@/lib/promises";
import { templates } from "@/lib/templates";

/** Витрина первого экрана: с чего начинается знакомство с продуктом. */
const DEFAULT_SLUG = "oud";

export default function Hero() {
  const [slug, setSlug] = useState<string>(DEFAULT_SLUG);
  const [live, setLive] = useState(false);
  const tpl = templates.find((t) => t.slug === slug) ?? templates[0];

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
            Никох и той с адресами и таймингом, маршрут в навигаторе и ответ
            гостя в один тап: буду или нет.
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

        {/* Живой шаблон, а не рисунок и не снимок */}
        <div className="mx-auto w-full max-w-[18rem]">
          <LiveScreen
            src={tpl.demoUrl}
            title={`Живое приглашение ${tpl.name}`}
            fallback={tpl.gallery[0]}
            onLive={setLive}
            priority
            eager
            sizes="(max-width: 640px) 68vw, 288px"
          />

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {templates.map((t) => (
              <button
                key={t.slug}
                type="button"
                onClick={() => setSlug(t.slug)}
                className={`rounded-full px-4 py-2 text-xs transition-colors ${
                  t.slug === tpl.slug
                    ? "bg-ink text-ivory"
                    : "border border-sand text-muted hover:border-ink/30"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <p className="mt-3 text-center text-xs leading-relaxed text-muted">
            {live
              ? "Это не картинка — настоящее приглашение. Листайте прямо здесь."
              : "Настоящий экран шаблона, снятый с телефона."}
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
