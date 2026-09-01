import type { Template } from "@/lib/templates";

/** Мини-макет приглашения внутри «телефона» — без картинок, чистый CSS. */
export default function TemplatePreview({
  template,
  className = "",
}: {
  template: Template;
  className?: string;
}) {
  const dark = template.slug === "nur";

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border shadow-[0_30px_70px_-30px_rgba(23,19,15,0.45)] ${
        dark ? "border-white/10" : "border-sand"
      } ${className}`}
      style={{ background: template.bg, color: template.ink }}
      aria-hidden
    >
      <div className="flex flex-col items-center px-7 py-10 text-center">
        <span
          className="eyebrow"
          style={{ color: template.accent }}
        >
          Биз уйланамиз
        </span>

        <div
          className="mt-6 flex h-16 w-16 items-center justify-center rounded-full border"
          style={{ borderColor: template.accent }}
        >
          <span className="font-display text-xl" style={{ color: template.accent }}>
            J&nbsp;&amp;&nbsp;D
          </span>
        </div>

        <h3 className="mt-6 w-full font-display text-3xl leading-[1.15] break-words">
          Жасурбек
          <span className="mx-2" style={{ color: template.accent }}>
            &amp;
          </span>
          <br />
          Дилноза
        </h3>

        <div
          className="mt-5 flex items-center gap-3 text-[0.7rem] tracking-[0.3em] uppercase"
          style={{ opacity: 0.7 }}
        >
          <span className="h-px w-8" style={{ background: template.accent }} />
          11 · 10 · 2026
          <span className="h-px w-8" style={{ background: template.accent }} />
        </div>

        <div className="mt-8 grid w-full grid-cols-4 gap-2">
          {[
            ["39", "дней"],
            ["06", "часов"],
            ["41", "мин"],
            ["09", "сек"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="rounded-xl border py-3"
              style={{
                borderColor: dark ? "rgba(255,255,255,0.12)" : "rgba(23,19,15,0.1)",
              }}
            >
              <div className="font-display text-lg leading-none">{n}</div>
              <div className="mt-1 text-[0.5rem] tracking-[0.15em] uppercase" style={{ opacity: 0.55 }}>
                {l}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-7 w-full rounded-2xl px-4 py-5 text-left"
          style={{ background: dark ? "rgba(255,255,255,0.05)" : "rgba(23,19,15,0.04)" }}
        >
          <div className="text-[0.55rem] tracking-[0.25em] uppercase" style={{ opacity: 0.5 }}>
            Локация
          </div>
          <div className="mt-1.5 font-display text-lg">Усадьба «Вишнёвый сад»</div>
          <div className="mt-0.5 text-[0.65rem]" style={{ opacity: 0.6 }}>
            Сбор гостей в 17:30
          </div>
        </div>

        <div
          className="mt-4 w-full rounded-full py-3 text-[0.65rem] font-medium tracking-[0.15em] uppercase"
          style={{ background: template.accent, color: dark ? "#14120f" : "#fff" }}
        >
          Подтвердить участие
        </div>
      </div>
    </div>
  );
}
