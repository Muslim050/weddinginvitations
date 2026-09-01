import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Выбираете шаблон",
    text: "Открываете демо, смотрите с телефона. Понравилось — пишете нам название.",
  },
  {
    n: "02",
    title: "Присылаете данные",
    text: "Мы даём короткую анкету: имена, дата, адрес, тайминг, фото. Заполняется за 15 минут.",
  },
  {
    n: "03",
    title: "Собираем за 1 день",
    text: "Показываем черновик по ссылке. Две правки текста и фото — бесплатно и без нервов.",
  },
  {
    n: "04",
    title: "Отправляете гостям",
    text: "Получаете ссылку и QR-код. Дальше только смотрите, как заполняется список гостей.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 bg-ink py-20 text-ivory sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="eyebrow inline-flex items-center gap-3 text-bronze-soft">
            <span className="rule" />
            Процесс
          </span>
          <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
            От выбора до рассылки — один день
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} as="li">
              <div className="border-t border-white/15 pt-6">
                <span className="font-display text-5xl text-bronze-soft/70">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ivory/60">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="max-w-md font-display text-2xl leading-snug">
              Свадьба уже скоро? Сделаем срочно — за несколько часов.
            </p>
            <a
              href="#order"
              className="rounded-full bg-ivory px-8 py-4 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Написать нам
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
