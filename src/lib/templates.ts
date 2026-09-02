import { PRICES } from "./pricing";

export type Template = {
  slug: "chinor" | "nur";
  name: string;
  style: string;
  /** Публичный адрес демо. Пустая строка = демо ещё не выложено. */
  demoUrl: string;
  price: number;
  description: string;
  /** Тёмный шаблон — влияет на палитру живого макета. */
  dark: boolean;
  accent: string;
  paper: string;
  ink: string;
  muted: string;
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
    dark: false,
    accent: "#a97a3f",
    paper: "#fbf8f3",
    ink: "#1b1712",
    muted: "#8a7f73",
    panel: "linear-gradient(180deg,#f3e9d9 0%,#e8dcc7 100%)",
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
    dark: true,
    accent: "#cda56d",
    paper: "#121011",
    ink: "#f6f1e8",
    muted: "#9d938a",
    panel: "linear-gradient(180deg,#221d19 0%,#131110 100%)",
    features: ["Тёмная тема", "Полноэкранные слайды", "Видео и трансляция", "Пожелания гостей"],
  },
];

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug);
}
