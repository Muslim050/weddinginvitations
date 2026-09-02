"use client";

import { useState } from "react";
import { price } from "@/lib/site";
import { PRICES } from "@/lib/pricing";

/**
 * Денежный якорь: с чем сравнить 450 000 сум.
 * Цифры редактируемые и намеренно консервативные. Если при введённых числах
 * бумага выходит дешевле — блок честно это признаёт, а не подтасовывает.
 */
export default function PaperVsLink() {
  const [count, setCount] = useState(250);
  const [perCard, setPerCard] = useState(4000);

  const paper = count * perCard;
  const link = PRICES.chinor;
  const cheaper = paper > link;

  return (
    <section className="border-t border-sand bg-cream/40 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Сколько это против бумаги
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
            Посчитайте на своём тираже
          </h2>
          <p className="mt-4 max-w-md text-lg text-ash">
            Бумажные таклифнома печатают на всех гостей, потом развозят, потом
            допечатывают забытых. Ссылка стоит одну сумму и не заканчивается.
          </p>

          <div className="mt-8 space-y-6">
            <label className="block">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-ash">Гостей на свадьбе</span>
                <span className="font-display text-2xl tabular-nums">{count}</span>
              </div>
              <input
                type="range"
                min={50}
                max={600}
                step={10}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="mt-2 w-full accent-[#a97a3f]"
              />
            </label>

            <label className="block">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-ash">Печать одного приглашения</span>
                <span className="font-display text-2xl tabular-nums">
                  {perCard.toLocaleString("ru-RU")}
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={15000}
                step={500}
                value={perCard}
                onChange={(e) => setPerCard(Number(e.target.value))}
                className="mt-2 w-full accent-[#a97a3f]"
              />
              <span className="mt-1 block text-xs text-muted">
                Поставьте цену своей типографии — счёт пересчитается
              </span>
            </label>
          </div>
        </div>

        <div className="rounded-3xl border border-sand bg-ivory p-7 sm:p-9">
          <div className="flex items-end justify-between border-b border-sand pb-5">
            <div>
              <div className="text-xs tracking-[0.16em] uppercase text-muted">
                Бумага
              </div>
              <div className="mt-1 font-display text-3xl tabular-nums sm:text-4xl">
                {price(paper)}
              </div>
              <div className="mt-1 text-xs text-muted">
                {count} × {perCard.toLocaleString("ru-RU")} сум, без развозки
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between pt-5">
            <div>
              <div className="text-xs tracking-[0.16em] uppercase text-bronze">
                Ссылка
              </div>
              <div className="mt-1 font-display text-3xl tabular-nums text-bronze sm:text-4xl">
                {price(link)}
              </div>
              <div className="mt-1 text-xs text-muted">
                Сколько бы гостей ни было
              </div>
            </div>
          </div>

          <p className="mt-7 rounded-2xl bg-cream/70 px-5 py-4 text-sm leading-relaxed text-ash">
            {cheaper ? (
              <>
                На вашем тираже бумага обойдётся дороже примерно на{" "}
                <strong className="font-semibold">{price(paper - link)}</strong>.
                И она не скажет, кто из гостей придёт.
              </>
            ) : (
              <>
                На таком тираже бумага выходит дешевле — честно. Ссылку берут
                не ради экономии, а чтобы заранее знать, кто придёт и сколько
                накрывать столов.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
