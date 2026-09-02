/**
 * Снимки реальных демо-шаблонов. Это не рисунки и не стоки — ровно те экраны,
 * которые увидит гость.
 *
 * Пересъёмка: снимать при вьюпорте 402×870 — это ровно 9:19.5, пропорция
 * телефона. При другом соотношении рамка выглядит широкой, как у планшета.
 * Затем `sips --resampleWidth 720 --setProperty format jpeg`.
 */
export const SHOT = { width: 720, height: 1558 } as const;

export type Shot = {
  src: string;
  alt: string;
};

export const shots = {
  chinorEnvelope: {
    src: "/shots/chinor-envelope.jpg",
    alt: "Конверт приглашения Chinor с именем гостя",
  },
  chinorHero: {
    src: "/shots/chinor-hero.jpg",
    alt: "Приглашение Chinor: имена, дата и таймер до свадьбы",
  },
  chinorHeroUz: {
    src: "/shots/chinor-hero-uz.jpg",
    alt: "То же приглашение Chinor на узбекском языке",
  },
  chinorEvent: {
    src: "/shots/chinor-event.jpg",
    alt: "Никох и той: время, адрес и кнопка маршрута",
  },
  chinorRsvp: {
    src: "/shots/chinor-rsvp.jpg",
    alt: "Анкета гостя: придёт или нет и сколько человек",
  },
  nurWelcome: {
    src: "/shots/nur-welcome.jpg",
    alt: "Приглашение Nur: полноэкранный первый слайд",
  },
  nurDate: {
    src: "/shots/nur-date.jpg",
    alt: "Приглашение Nur: дата, никох и той с адресами",
  },
} as const satisfies Record<string, Shot>;
