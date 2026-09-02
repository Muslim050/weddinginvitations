const tiles = [
  {
    title: "Старшие разберутся",
    text: "Открывается как обычная ссылка, ничего не надо устанавливать. Для тех, кто не пользуется Telegram, печатаем QR — наводят камеру.",
  },
  {
    title: "Два адреса, а не один",
    text: "Никох и той отдельными блоками: своё время, своё место, свой маршрут в навигаторе.",
  },
  {
    title: "Русский и узбекский",
    text: "Гость переключает язык одной кнопкой. Не два разных приглашения, а одно на двух языках.",
  },
  {
    title: "Список гостей сам собой",
    text: "Кто придёт и со сколькими — в одной таблице. Не в двадцати чатах и не в тетради.",
  },
  {
    title: "Рассылать удобно",
    text: "Одна ссылка в Telegram — родственники пересылают дальше. Никого не нужно объезжать.",
  },
  {
    title: "Опечатку правим сразу",
    text: "Ссылка остаётся той же, содержимое обновляется. Гостям ничего пересылать заново не нужно.",
  },
];

export default function Features() {
  return (
    <section id="inside" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="eyebrow inline-flex items-center gap-3 text-bronze">
          <span className="rule" />
          Что внутри
        </span>
        <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
          Сделано под узбекскую свадьбу
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((t) => (
            <div key={t.title} className="bg-ivory p-6 sm:p-7">
              <h3 className="font-display text-2xl leading-snug">{t.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
