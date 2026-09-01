import Reveal from "./Reveal";

const faq = [
  {
    q: "Сколько времени занимает работа?",
    a: "Один рабочий день с момента, когда вы прислали данные и фото. Если свадьба совсем скоро — сделаем за несколько часов, скажите об этом сразу.",
  },
  {
    q: "Что нужно от меня?",
    a: "Имена, дата, адреса никоха и тоя, тайминг дня, 5–10 фотографий и пара слов о вас. Мы пришлём короткую анкету — заполняется за 15 минут.",
  },
  {
    q: "Гость увидит своё имя лично?",
    a: "Да. Каждому гостю можно сделать персональную ссылку — он открывает конверт и видит своё имя. Имя автоматически подставляется и в анкету.",
  },
  {
    q: "Можно на узбекском языке?",
    a: "Оба шаблона двуязычные: гость нажимает одну кнопку и переключается между русским и узбекским. Тексты пишем на обоих языках.",
  },
  {
    q: "А если после отправки нужно что-то поменять?",
    a: "Ссылка остаётся той же, а содержимое обновляется. Две правки входят в стоимость, дальше — по мелочи и бесплатно, если это опечатка.",
  },
  {
    q: "Сколько живёт ссылка?",
    a: "От 6 до 12 месяцев в зависимости от тарифа. После свадьбы её можно продлить — многие оставляют как память с галереей и пожеланиями.",
  },
  {
    q: "Гостям нужно что-то устанавливать?",
    a: "Нет. Это обычная ссылка, открывается в любом браузере на любом телефоне. Приглашение можно добавить на главный экран, если хочется.",
  },
  {
    q: "Как я узнаю, кто придёт?",
    a: "Все ответы собираются в одном списке: кто придёт, со скольких людьми и что написал. Приходит уведомление в Telegram, список выгружается в таблицу.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Вопросы
          </span>
          <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
            Что обычно спрашивают
          </h2>
          <p className="mt-5 text-ash">
            Не нашли ответ? Напишите в Telegram — отвечаем быстро и без скриптов.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-sand border-y border-sand">
            {faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-2xl leading-snug marker:content-none">
                  {item.q}
                  <span className="mt-2 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-sand text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-ash">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
