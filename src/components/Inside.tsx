import Reveal from "./Reveal";

const items = [
  {
    icon: "M12 6v6l4 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z",
    title: "Таймер до свадьбы",
    text: "Обратный отсчёт до даты — гости видят, сколько осталось, и не забывают о дне.",
  },
  {
    icon: "M9 12l2 2 4-4M4 6h16v14H4z",
    title: "Анкета гостя (RSVP)",
    text: "Придёт или нет, с парой или один, аллергии и предпочтения по напиткам.",
  },
  {
    icon: "M4 5h16v14H4zM4 10h16M9 10v9",
    title: "Ответы в одной таблице",
    text: "Каждый ответ падает в вашу Google-таблицу и в Telegram. Никаких переписок в чатах.",
  },
  {
    icon: "M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11ZM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    title: "Карта и маршрут",
    text: "Кнопка «Построить маршрут» открывает навигатор гостя. Плюс парковка и трансфер.",
  },
  {
    icon: "M4 7h16M4 12h10M4 17h13",
    title: "Тайминг дня",
    text: "Программа по часам: сбор, церемония, ужин, первый танец, финал вечера.",
  },
  {
    icon: "M4 5h16v14H4zM8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 16l5-4 5 4 3-2 3 3",
    title: "Галерея",
    text: "Ваши фотографии в аккуратной вёрстке — с любовью к сжатию, грузится быстро.",
  },
  {
    icon: "M12 3v18M7 8h10M7 16h10",
    title: "Дресс-код и палитра",
    text: "Покажите цвета вечера — гости придут в тон, а фотографии будут смотреться цельно.",
  },
  {
    icon: "M20 12v9H4v-9M2 7h20v5H2zM12 7V3M12 7c-3 0-5-4-1-4s1 4 1 4Zm0 0c3 0 5-4 1-4",
    title: "Деликатно о подарках",
    text: "Отдельный блок с пожеланиями — без неловкости и без реквизитов в общем чате.",
  },
];

export default function Inside() {
  return (
    <section id="inside" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Что внутри
          </span>
          <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
            Это не картинка — это сайт, который работает за вас
          </h2>
          <p className="mt-5 text-lg text-ash">
            Бумажную открытку теряют, в неё нельзя вписать маршрут и она молчит,
            когда вы пытаетесь посчитать гостей. Здесь всё наоборот.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 80} className="bg-ivory">
              <div className="h-full p-7">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 text-bronze"
                  aria-hidden
                >
                  <path d={item.icon} />
                </svg>
                <h3 className="mt-5 font-display text-2xl">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
