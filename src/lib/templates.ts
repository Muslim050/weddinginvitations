import { PRICES } from "./pricing";
import { shots, type Shot } from "./shots";

export type Template = {
  slug: "chinor" | "nur" | "nafis" | "oud" | "azure" | "lumi" | "garden";
  name: string;
  style: string;
  /** Публичный адрес демо. Пустая строка = демо ещё не выложено. */
  demoUrl: string;
  price: number;
  description: string;
  /** Подложка карточки в каталоге. */
  panel: string;
  features: string[];
  /**
   * Экраны шаблона по порядку сверху вниз. В просмотре «на весь экран» они
   * стоят встык и листаются — так видно всё приглашение, а не один кадр.
   */
  gallery: Shot[];
};

export const templates: Template[] = [
  {
    slug: "chinor",
    name: "Chinor",
    style: "Классика · светлая и тёмная тема",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_CHINOR ?? "",
    price: PRICES.chinor,
    description:
      "Спокойная классика для никоха и тоя: таймер до свадьбы, история пары, карта и книга пожеланий.",
    panel: "linear-gradient(180deg,#1c2440 0%,#0d1120 100%)",
    features: ["Светлая и тёмная тема", "Анкета гостя", "QR для гостей", "Панель управления"],
    gallery: [shots.chinorHero, shots.chinorEvent, shots.chinorRsvp, shots.chinorHeroUz],
  },
  {
    slug: "nur",
    name: "Nur",
    style: "Кинематографичный · тёмный",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_NUR ?? "",
    price: PRICES.nur,
    description:
      "Полноэкранные вертикальные слайды, видео-история и онлайн-трансляция. Смотрится дорого на телефоне.",
    panel: "linear-gradient(180deg,#221d19 0%,#131110 100%)",
    features: ["Тёмная тема", "Полноэкранные слайды", "Видео и трансляция", "Пожелания гостей"],
    gallery: [shots.nurWelcome, shots.nurDate],
  },
  {
    slug: "nafis",
    name: "Nafis",
    style: "Акварельный · нежная ботаника",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_NAFIS || "/demo/nafis/index.html",
    price: PRICES.nafis,
    description:
      "Нежное приглашение с раскрывающимся свитком, музыкой, программой вечера, календарём и анкетой гостя.",
    panel: "linear-gradient(180deg,#f3e9e5 0%,#d7c0b7 100%)",
    features: ["Анимация свитка", "Фоновая музыка", "Русский и узбекский", "Календарь и RSVP"],
    gallery: [shots.nafisHero],
  },
  {
    slug: "oud",
    name: "Oud",
    style: "Дворцовый · золотой",
    demoUrl: "/demo/reveal/index.html?theme=oud",
    price: PRICES.oud,
    description:
      "Торжественное приглашение с дворцовой архитектурой, золотой печатью и кинематографичным видео-вступлением.",
    panel: "linear-gradient(180deg,#c9ab82 0%,#725a3b 100%)",
    features: ["Видео-вступление", "Золотая печать", "Музыка", "RU и UZ"],
    gallery: [shots.oudHero],
  },
  {
    slug: "azure",
    name: "Azure",
    style: "Современный · воздушный",
    demoUrl: "/demo/reveal/index.html?theme=azure",
    price: PRICES.azure,
    description:
      "Воздушный минимализм с голубым акцентом, крупными фотографиями и чистой журнальной типографикой.",
    panel: "linear-gradient(180deg,#dff2fb 0%,#70b7d8 100%)",
    features: ["Фотогалерея", "Обратный отсчёт", "Календарь", "RSVP"],
    gallery: [shots.azureHero],
  },
  {
    slug: "lumi",
    name: "Lumi",
    style: "Светлый · редакционный",
    demoUrl: "/demo/reveal/index.html?theme=light",
    price: PRICES.lumi,
    description:
      "Светлый конверт с восковой печатью, сдержанная фотоподача и мягкая современная композиция.",
    panel: "linear-gradient(180deg,#f4f2ed 0%,#cfc8bc 100%)",
    features: ["Анимация конверта", "Фото пары", "Дресс-код", "RU и UZ"],
    gallery: [shots.lumiHero],
  },
  {
    slug: "garden",
    name: "Garden",
    style: "Цветочный · классический",
    demoUrl: "/demo/reveal/index.html?theme=garden",
    price: PRICES.garden,
    description:
      "Роскошный цветочный сад, бордовая сургучная печать и романтичная композиция в классическом стиле.",
    panel: "linear-gradient(180deg,#f4ead4 0%,#7d2530 100%)",
    features: ["Цветочный конверт", "Музыка", "Программа вечера", "RSVP"],
    gallery: [shots.gardenHero],
  },
];

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug);
}
