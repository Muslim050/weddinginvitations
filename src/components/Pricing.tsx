import Reveal from "./Reveal";
import { price } from "@/lib/site";

const plans = [
  {
    name: "Готовый шаблон",
    value: 450000,
    note: "разово",
    description: "Когда нужно быстро, красиво и без лишних сложностей.",
    features: [
      "Любой дизайн из каталога",
      "Ваши имена, дата, адрес и фото",
      "Русский и узбекский язык",
      "Анкета гостя (RSVP)",
      "Ссылка работает 6 месяцев",
      "Две правки бесплатно",
    ],
  },
  {
    name: "Всё включено",
    value: 750000,
    note: "разово",
    highlight: true,
    description: "Самый частый выбор: приглашение плюс порядок в списке гостей.",
    features: [
      "Всё из «Готового шаблона»",
      "Персональная ссылка и QR каждому гостю",
      "Уведомления об ответах в Telegram",
      "Выгрузка списка гостей в таблицу",
      "PDF-приглашения на печать",
      "Панель управления: меняете текст сами",
      "Ссылка работает 12 месяцев",
    ],
  },
  {
    name: "Индивидуально",
    value: 1500000,
    note: "от",
    description: "Свой дизайн с нуля под стиль вашей свадьбы.",
    features: [
      "Дизайн с нуля, не по шаблону",
      "Свои анимации и раскладка",
      "Свой домен вместо ссылки",
      "Помощь с рассылкой гостям",
      "Приоритетная поддержка до дня свадьбы",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-sand bg-cream/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Стоимость
          </span>
          <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
            Цена фиксированная, без «звоните — уточним»
          </h2>
          <p className="mt-5 text-lg text-ash">
            Количество гостей не влияет на цену. Хостинг и настройка уже внутри.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <article
                className={`flex h-full flex-col rounded-3xl border p-8 sm:p-9 ${
                  plan.highlight
                    ? "border-ink bg-ink text-ivory shadow-[0_40px_80px_-40px_rgba(23,19,15,0.5)]"
                    : "border-sand bg-ivory"
                }`}
              >
                {plan.highlight && (
                  <span className="mb-5 inline-block w-fit rounded-full bg-bronze px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-ivory">
                    Выбирают чаще всего
                  </span>
                )}
                <h3 className="font-display text-3xl">{plan.name}</h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlight ? "text-ivory/60" : "text-muted"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-7 flex items-baseline gap-2">
                  {plan.note === "от" && (
                    <span className="text-sm text-muted">от</span>
                  )}
                  <span className="font-display text-4xl">{price(plan.value)}</span>
                </div>

                <ul
                  className={`mt-8 flex-1 space-y-3 text-sm ${
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
                  className={`mt-9 rounded-full px-6 py-3.5 text-center text-sm font-medium transition-transform hover:-translate-y-0.5 ${
                    plan.highlight
                      ? "bg-ivory text-ink"
                      : "bg-ink text-ivory"
                  }`}
                >
                  Выбрать
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 text-center text-sm text-muted">
            Оплата после того, как вы увидите черновик своего приглашения по ссылке.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
