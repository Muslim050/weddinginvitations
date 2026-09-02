import { promises } from "@/lib/promises";

const faq = [
  {
    q: "А старшие родственники разберутся?",
    a: "Приглашение открывается как обычная ссылка — ничего устанавливать не нужно. Для тех, кто не пользуется Telegram, делаем QR-код: его печатают на бумаге, человек наводит камеру телефона и попадает на то же приглашение.",
  },
  {
    q: "Что нужно от меня и сколько это займёт?",
    a: `Имена, дата, адреса никоха и тоя, тайминг дня и несколько фотографий. Пришлю короткую анкету — заполняется за 15 минут. Черновик будет ${promises.draft}.`,
  },
  {
    q: "Как понять, кто придёт?",
    a: "Каждый гость отвечает прямо в приглашении: буду или не смогу, и сколько человек с ним. Ответы собираются в один список, вам приходит уведомление. Не нужно обзванивать и держать всё в тетради.",
  },
  {
    q: "Приглашение будет на узбекском?",
    a: "На обоих языках сразу. Гость нажимает одну кнопку и читает по-узбекски или по-русски — это одно приглашение, а не два разных. Тексты пишем вместе с вами.",
  },
  {
    q: "А если после рассылки нужно что-то поменять?",
    a: `Ссылка остаётся прежней, меняется содержимое — гостям ничего пересылать заново не нужно. ${promises.edits.charAt(0).toUpperCase() + promises.edits.slice(1)} входят в стоимость, опечатку поправлю и так.`,
  },
  {
    q: "Ссылка не пропадёт до свадьбы?",
    a: `${promises.hosting.charAt(0).toUpperCase() + promises.hosting.slice(1)}, так что до свадьбы и долго после неё она работает. Ближе к концу срока напишу вам: продлеваем или отдаю архив, чтобы приглашение осталось у вас.`,
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Вопросы
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
            Что спрашивают чаще всего
          </h2>
        </div>

        <div className="divide-y divide-sand border-y border-sand">
          {faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-1 font-display text-2xl leading-snug marker:content-none">
                {item.q}
                <span className="mt-1.5 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-sand text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ash">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
