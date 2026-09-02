"use client";

import { plans, price } from "@/lib/pricing";
import { promises } from "@/lib/promises";

export default function Pricing() {
  /** Выбранный тариф доезжает до формы заявки — иначе продавец не узнает, что выбрали. */
  const choose = (name: string) => {
    try {
      sessionStorage.setItem("nikoh:plan", name);
    } catch {
      // приватный режим — не критично, форма просто останется на значении по умолчанию
    }
    window.dispatchEvent(new CustomEvent("nikoh:plan", { detail: name }));
  };

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-sand bg-cream/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="eyebrow inline-flex items-center gap-3 text-bronze">
          <span className="rule" />
          Стоимость
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
          Цена не зависит от числа гостей
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ash">
          {promises.free}. {promises.payment}.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
                plan.highlight
                  ? "border-ink bg-ink text-ivory shadow-[0_40px_80px_-45px_rgba(23,19,15,0.5)]"
                  : "border-sand bg-ivory"
              }`}
            >
              <h3 className="font-display text-3xl">{plan.name}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.highlight ? "text-ivory/60" : "text-muted"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                {plan.prefix && (
                  <span className={plan.highlight ? "text-ivory/60" : "text-muted"}>
                    {plan.prefix}
                  </span>
                )}
                <span className="font-display text-4xl">{price(plan.value)}</span>
              </div>

              <ul
                className={`mt-7 flex-1 space-y-3 text-sm ${
                  plan.highlight ? "text-ivory/80" : "text-ash"
                }`}
              >
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-bronze" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#order"
                onClick={() => choose(plan.name)}
                className={`mt-8 rounded-full px-6 py-3.5 text-center text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                  plan.highlight ? "bg-ivory text-ink" : "bg-ink text-ivory"
                }`}
              >
                Выбрать «{plan.name}»
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
