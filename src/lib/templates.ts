import { PRICES } from "./pricing";

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
};

export const templates: Template[] = [
  {
    slug: "chinor",
    name: "Chinor",
    style: "Классика · светлая и тёмная тема",
    demoUrl: process.env.NEXT_PUBLIC_DEMO_CHINOR ?? "",
    price: PRICES.chinor,
    description:
      "Спокойная классика для никоха и тоя: конверт с именем гостя, таймер, история пары, карта и книга пожеланий.",
    panel: "linear-gradient(180deg,#1c2440 0%,#0d1120 100%)",
    features: ["Светлая и тёмная тема", "Анкета гостя", "QR для гостей", "Панель управления"],
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
  },
];

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug);
}
