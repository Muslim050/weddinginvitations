"use client";

import { plans } from "@/lib/pricing";
import { promises } from "@/lib/promises";
import { currency } from "@/lib/site";

/** Выбранный шаблон доезжает до формы заявки — иначе продавец не узнает, что выбрали. */
function choose(name: string) {
  try {
    sessionStorage.setItem("nikoh:template", name);
  } catch {
    // приватный режим — не критично, форма просто останется на значении по умолчанию
  }
  window.dispatchEvent(new CustomEvent("nikoh:template", { detail: name }));
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-sand bg-cream/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="eyebrow inline-flex items-center gap-3 text-bronze">
          <span className="rule" />
          Стоимость
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
          Три шаблона, три цены
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ash">
          {promises.free}. {promises.payment}.
        </p>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {plans.map((plan) => {
            const dark = plan.highlight;

            return (
              <article
                key={plan.id}
                className={`flex h-full flex-col rounded-3xl border p-8 sm:p-10 ${
                  dark
                    ? "border-ink bg-ink text-ivory shadow-[0_40px_80px_-45px_rgba(23,19,15,0.5)]"
                    : "border-sand bg-ivory shadow-[0_30px_60px_-45px_rgba(23,19,15,0.28)]"
                }`}
              >
                <h3 className="font-display text-4xl leading-none">{plan.name}</h3>
                {/* min-h держит цены на одной линии, когда карточки стоят рядом */}
                <p
                  className={`mt-3 max-w-sm leading-relaxed lg:min-h-[3.5rem] ${
                    dark ? "text-ivory/60" : "text-muted"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Цена отделена линиями: это опора карточки, а не ещё один абзац */}
                <div
                  className={`mt-8 border-y py-6 ${dark ? "border-white/10" : "border-sand"}`}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-[clamp(2.4rem,6vw,3.5rem)] leading-none tabular-nums">
                      {plan.value.toLocaleString("ru-RU")}
                    </span>
                    <span
                      className={`font-display text-2xl ${
                        dark ? "text-ivory/50" : "text-muted"
                      }`}
                    >
                      {currency}
                    </span>
                  </div>
                  <p className={`mt-2 text-sm ${dark ? "text-ivory/50" : "text-muted"}`}>
                    Разовый платёж. {promises.hosting.charAt(0).toUpperCase()}
                    {promises.hosting.slice(1)}.
                  </p>
                </div>

                {plan.includes && (
                  <p className="mt-6 text-sm">
                    Всё из{" "}
                    <span className={dark ? "text-bronze-soft" : "text-bronze"}>
                      {plan.includes}
                    </span>
                    , и сверх того:
                  </p>
                )}

                <ul
                  className={`flex-1 space-y-3.5 text-[0.95rem] ${
                    plan.includes ? "mt-4" : "mt-6"
                  } ${dark ? "text-ivory/80" : "text-ash"}`}
                >
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span
                        aria-hidden
                        className={`mt-2 h-1 w-1 flex-none rounded-full ${
                          dark ? "bg-bronze-soft" : "bg-bronze"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col items-center gap-4">
                  <a
                    href="#order"
                    onClick={() => choose(plan.name)}
                    className={`w-full rounded-full px-6 py-4 text-center text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                      dark ? "bg-ivory text-ink" : "bg-ink text-ivory"
                    }`}
                  >
                    Выбрать {plan.name}
                  </a>
                  <a
                    href="#templates"
                    className={`text-sm underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70 ${
                      dark ? "text-ivory/60" : "text-muted"
                    }`}
                  >
                    Посмотреть шаблон
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
