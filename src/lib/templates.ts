import { PRICES } from "./pricing";
import { shots, type Shot } from "./shots";

export type Template = {
  slug: "chinor" | "nur";
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
];

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug);
}
