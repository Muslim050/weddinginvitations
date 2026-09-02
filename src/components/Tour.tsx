"use client";

import { useState } from "react";
import Screen from "./Screen";
import { shots } from "@/lib/shots";

const steps = [
  {
    title: "Гость видит своё имя",
    text: "Каждому уходит своя ссылка. Открывается конверт, и внутри — обращение лично к нему, а не «дорогие гости».",
    shot: shots.chinorEnvelope,
  },
  {
    title: "Понимает, когда и куда",
    text: "Никох и той отдельными блоками, со временем и адресами. Кнопка строит маршрут в навигаторе.",
    shot: shots.chinorEvent,
  },
  {
    title: "Отвечает в один тап",
    text: "«Буду» или «не смогу», и сколько человек придёт. Ответ сразу у вас — не в двадцати разных чатах.",
    shot: shots.chinorRsvp,
  },
  {
    title: "Переключает язык",
    text: "Одна кнопка — и всё приглашение на узбекском. Старшим родственникам не нужно разбирать русский текст.",
    shot: shots.chinorHeroUz,
  },
];

export default function Tour() {
  const [step, setStep] = useState(0);

  return (
    <section id="tour" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="eyebrow inline-flex items-center gap-3 text-bronze">
          <span className="rule" />
          Так это увидит гость
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
          Четыре шага, которые проходит каждый ваш гость
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-start lg:gap-16">
          <ol className="order-2 flex flex-col gap-3 lg:order-1">
            {steps.map((s, i) => {
              const active = i === step;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setStep(i)}
                    aria-current={active}
                    className={`w-full rounded-2xl border p-5 text-left transition-colors ${
                      active
                        ? "border-ink/25 bg-cream/60"
                        : "border-sand hover:border-ink/15"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-display text-xl ${
                          active ? "text-bronze" : "text-muted"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-2xl">{s.title}</h3>
                    </div>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        active ? "text-ash" : "text-muted"
                      }`}
                    >
                      {s.text}
                    </p>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="order-1 mx-auto w-full max-w-[18rem] lg:order-2 lg:sticky lg:top-24">
            <Screen shot={steps[step].shot} glow={false} sizes="(max-width: 640px) 68vw, 288px" />
            <p className="mt-3 text-center text-xs text-muted">
              Экран {step + 1} из {steps.length} — снято с реального шаблона
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
