import Reveal from "./Reveal";
import TemplatePreview from "./TemplatePreview";
import { templates } from "@/lib/templates";

const stats = [
  ["2", "готовых дизайна"],
  ["1 день", "и приглашение готово"],
  ["∞", "гостей без доплат"],
  ["RU / UZ", "два языка в один клик"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,160,106,0.28) 0%, rgba(250,247,242,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20 lg:pb-28">
        <div>
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3 text-bronze">
              <span className="rule" />
              Электронные пригласительные
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.2rem]">
              Приглашение,
              <br />
              которое гости
              <br />
              <span className="italic text-bronze">не потеряют</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ash">
              Вместо бумажной открытки — красивый сайт-приглашение. Вы отправляете
              одну ссылку в WhatsApp или Telegram, гость открывает её с телефона и
              сразу нажимает «Буду». Ответы падают вам в таблицу.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#templates"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-medium text-ivory transition-transform hover:-translate-y-0.5"
              >
                Выбрать шаблон
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={templates[0].demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-4 font-medium transition-colors hover:border-ink hover:bg-cream"
              >
                Открыть живое демо
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-sand pt-8 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-3xl leading-none">{value}</dt>
                  <dd className="mt-2 text-xs leading-snug text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-[19rem]">
          <div className="animate-float">
            <TemplatePreview template={templates[0]} />
          </div>
          <div className="pointer-events-none absolute -right-6 -bottom-8 hidden w-40 rotate-6 opacity-95 sm:block lg:-right-10">
            <TemplatePreview template={templates[1]} className="scale-90 origin-bottom-right" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
