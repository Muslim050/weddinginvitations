"use client";

import { included, price, tiers } from "@/lib/pricing";
import { promises } from "@/lib/promises";
import { currency } from "@/lib/site";

export default function Pricing() {
  /** Выбранный шаблон доезжает до формы заявки — иначе продавец не узнает, что выбрали. */
  const choose = (name: string) => {
    try {
      sessionStorage.setItem("nikoh:template", name);
    } catch {
      // приватный режим — не критично, форма просто останется на значении по умолчанию
    }
    window.dispatchEvent(new CustomEvent("nikoh:template", { detail: name }));
  };

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-sand bg-cream/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="eyebrow inline-flex items-center gap-3 text-bronze">
          <span className="rule" />
          Стоимость
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
          Три цены на семь шаблонов
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ash">
          {promises.free}. {promises.payment}.
        </p>

        {/* Общее — один раз наверху, чтобы карточки говорили только о разнице */}
        <div className="mt-10 rounded-3xl border border-sand bg-ivory p-6 sm:p-8">
          <h3 className="font-display text-2xl">В любом шаблоне</h3>
          <ul className="mt-4 grid gap-3 text-[0.95rem] text-ash sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-bronze" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => {
            const dark = tier.highlight;
            const single = tier.templates.length === 1;

            return (
              <article
                key={tier.id}
                className={`flex h-full flex-col rounded-3xl border p-8 ${
                  dark
                    ? "border-ink bg-ink text-ivory shadow-[0_40px_80px_-45px_rgba(23,19,15,0.5)]"
                    : "border-sand bg-ivory shadow-[0_30px_60px_-45px_rgba(23,19,15,0.28)]"
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[clamp(2.2rem,5vw,3rem)] leading-none tabular-nums">
                    {tier.value.toLocaleString("ru-RU")}
                  </span>
                  <span
                    className={`font-display text-xl ${dark ? "text-ivory/50" : "text-muted"}`}
                  >
                    {currency}
                  </span>
                </div>

                <p className={`mt-3 text-sm ${dark ? "text-ivory/60" : "text-muted"}`}>
                  {tier.description}
                </p>

                {/* Названия шаблонов — сразу и выбор: клик доносит его до заявки */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tier.templates.map((name) => (
                    <li key={name}>
                      <a
                        href="#order"
                        onClick={() => choose(name)}
                        className={`block rounded-full border px-3.5 py-1.5 font-display text-lg transition-colors ${
                          dark
                            ? "border-white/20 hover:border-ivory hover:bg-white/10"
                            : "border-sand bg-cream/50 hover:border-ink/40"
                        }`}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>

                <ul
                  className={`mt-6 flex-1 space-y-3 text-[0.95rem] ${
                    dark ? "text-ivory/80" : "text-ash"
                  }`}
                >
                  {tier.features.map((f) => (
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

                <a
                  href={single ? "#order" : "#templates"}
                  onClick={single ? () => choose(tier.templates[0]) : undefined}
                  className={`mt-8 rounded-full px-6 py-3.5 text-center text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    dark ? "bg-ivory text-ink" : "bg-ink text-ivory"
                  }`}
                >
                  {single ? `Выбрать ${tier.templates[0]}` : "Посмотреть эти шаблоны"}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
