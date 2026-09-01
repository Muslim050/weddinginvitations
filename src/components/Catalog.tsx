import Reveal from "./Reveal";
import TemplatePreview from "./TemplatePreview";
import { templates, upcoming } from "@/lib/templates";
import { price } from "@/lib/site";

export default function Catalog() {
  return (
    <section id="templates" className="scroll-mt-24 border-t border-sand bg-cream/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Каталог
          </span>
          <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
            Два дизайна. Оба — живые сайты, а не картинки
          </h2>
          <p className="mt-5 text-lg text-ash">
            Откройте демо с телефона: так же его увидят ваши гости. Мы заменим имена,
            дату, фото и адрес — структура останется той же.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {templates.map((t, i) => (
            <Reveal key={t.slug} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-3xl border border-sand bg-ivory transition-shadow hover:shadow-[0_40px_80px_-40px_rgba(23,19,15,0.35)]">
                <div
                  className="relative flex justify-center px-8 pt-12 pb-0"
                  style={{
                    background:
                      t.slug === "nur"
                        ? "linear-gradient(180deg,#211d18 0%,#14120f 100%)"
                        : "linear-gradient(180deg,#f1e9dd 0%,#faf7f2 100%)",
                  }}
                >
                  {t.badge && (
                    <span
                      className="absolute left-6 top-6 rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] uppercase"
                      style={{ background: t.accent, color: t.slug === "nur" ? "#14120f" : "#fff" }}
                    >
                      {t.badge}
                    </span>
                  )}
                  <div className="w-[16.5rem] translate-y-6 transition-transform duration-700 group-hover:translate-y-2">
                    <TemplatePreview template={t} />
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <div className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl">{t.name}</h3>
                      <p className="mt-1 text-xs tracking-[0.18em] uppercase text-muted">
                        {t.style}
                      </p>
                    </div>
                    <div className="text-right">
                      {t.oldPrice && (
                        <div className="text-sm text-muted line-through">
                          {price(t.oldPrice)}
                        </div>
                      )}
                      <div className="font-display text-2xl text-bronze">
                        {price(t.price)}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-ash">{t.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-sand bg-cream/60 px-3 py-1.5 text-xs text-ash"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={t.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-full bg-ink px-6 py-3.5 text-center text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5"
                    >
                      Смотреть демо
                    </a>
                    <a
                      href="#order"
                      className="flex-1 rounded-full border border-ink/20 px-6 py-3.5 text-center text-sm font-medium transition-colors hover:border-ink hover:bg-cream"
                    >
                      Заказать
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {upcoming.map((u) => (
              <div
                key={u.name}
                className="rounded-2xl border border-dashed border-sand bg-ivory/60 px-6 py-7"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-2xl text-muted">{u.name}</h4>
                  <span className="rounded-full bg-cream px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-bronze">
                    {u.eta}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{u.style}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            Каталог пополняется. Нужен дизайн, которого пока нет?{" "}
            <a href="#order" className="text-bronze underline underline-offset-4">
              Напишите — соберём под вас
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
