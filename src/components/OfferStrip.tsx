import { promises } from "@/lib/promises";

const points = [
  {
    n: "01",
    title: "Присылаете данные",
    text: "Имена, дата, адреса никоха и тоя, несколько фотографий. Короткая анкета на 15 минут.",
  },
  {
    n: "02",
    title: `Черновик ${promises.draft}`,
    text: "Собираю приглашение с вашими именами и присылаю ссылку. Открываете, показываете родителям.",
  },
  {
    n: "03",
    title: "Платите, если понравилось",
    text: "Не понравилось — расходимся, вы ничего не должны. Аванса нет.",
  },
];

export default function OfferStrip() {
  return (
    <section className="bg-ink py-16 text-ivory sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-2xl font-display text-[clamp(1.9rem,6vw,3.2rem)] leading-tight">
          Сначала черновик, деньги потом
        </h2>
        <p className="mt-3 max-w-xl text-ivory/60">
          Вы покупаете не обещание, а готовое приглашение, которое уже открыли и
          посмотрели.
        </p>

        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {points.map((p) => (
            <li key={p.n} className="border-t border-white/15 pt-5">
              <span className="font-display text-4xl text-bronze-soft/70">{p.n}</span>
              <h3 className="mt-3 font-display text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
