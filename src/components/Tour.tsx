"use client";

import { useEffect, useRef, useState } from "react";
import LiveScreen from "./LiveScreen";
import { templates } from "@/lib/templates";

/**
 * Шаги совпадают с экранами приглашения: `id` — это язык, на котором лендинг и
 * шаблон договариваются через postMessage. Менять id можно только вместе с
 * мостом внутри шаблонов (TourBridge).
 */
const steps = [
  {
    id: "open",
    title: "Открывает приглашение",
    text: "Одна ссылка приходит в Telegram. Гость нажимает — и вместо файла в чате открывается живое приглашение с вашими именами, датой и таймером.",
  },
  {
    id: "event",
    title: "Понимает, когда и куда",
    text: "Никох и той отдельными блоками, со временем и адресами. Кнопка строит маршрут в навигаторе.",
  },
  {
    id: "rsvp",
    title: "Отвечает в один тап",
    text: "«Буду» или «не смогу», и сколько человек придёт. Ответ сразу у вас — не в двадцати разных чатах.",
  },
  {
    id: "wishes",
    title: "Оставляет пожелание",
    text: "Поздравление пишут прямо в приглашении, и оно остаётся у вас — вместе со списком тех, кто придёт.",
  },
];

export default function Tour() {
  const [slug, setSlug] = useState<string>(templates[0].slug);
  const [step, setStep] = useState(0);
  const [live, setLive] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  const tpl = templates.find((t) => t.slug === slug) ?? templates[0];

  // Приглашение само сообщает, до какого экрана долистал гость.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      // На странице несколько рамок (ещё одна в первом экране) — слушаем свою.
      if (e.source !== frame.current?.contentWindow) return;
      const data = e.data;
      if (!data || data.source !== "nikoh-preview") return;

      /*
       * Приглашение грузится дольше лендинга: шаг могли выбрать, пока рамка
       * была пустой. Как только оно готово, повторяем выбор — иначе кнопка
       * подсвечена, а приглашение показывает первый экран.
       */
      if (data.type === "ready") {
        setStep((current) => {
          if (current !== 0) goto(current);
          return current;
        });
        return;
      }

      if (data.type !== "step") return;
      const index = steps.findIndex((s) => s.id === data.step);
      if (index >= 0) setStep(index);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const goto = (index: number) => {
    frame.current?.contentWindow?.postMessage(
      { source: "nikoh-tour", type: "goto", step: steps[index].id },
      "*",
    );
  };

  /** Клик по шагу листает приглашение; без живого демо просто меняет снимок. */
  const pick = (index: number) => {
    setStep(index);
    goto(index);
  };

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
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => pick(i)}
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
            <LiveScreen
              src={tpl.demoUrl}
              title={`Живое приглашение ${tpl.name}`}
              fallback={tpl.gallery[Math.min(step, tpl.gallery.length - 1)]}
              frameRef={frame}
              onLive={setLive}
              sizes="(max-width: 640px) 68vw, 288px"
            />

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {templates.map((t) => (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => {
                    setSlug(t.slug);
                    setStep(0);
                  }}
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
                ? "Это не картинка — настоящее приглашение. Листайте его или нажимайте шаги слева."
                : "Настоящий экран шаблона, снятый с телефона."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
