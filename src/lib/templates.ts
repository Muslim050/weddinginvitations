export type Template = {
  slug: string;
  name: string;
  style: string;
  demoUrl: string;
  preview: string;
  previewWidth: number;
  previewHeight: number;
  price: number;
  oldPrice?: number;
  description: string;
  accent: string;
  bg: string;
  ink: string;
  /** тёмная подложка — влияет на рамку превью */
  dark: boolean;
  /** цвет текста бейджа: подбирается под accent, а не под подложку */
  badgeInk: string;
  /** подложка под телефоном в карточке каталога */
  panel: string;
  badge?: string;
  features: string[];
};

export const templates: Template[] = [
  {
    slug: "chinor",
    name: "Chinor",
    style: "Классика · светлая и тёмная тема",
    demoUrl: "http://localhost:4321",
    preview: "/previews/chinor-hero.jpg",
    previewWidth: 800,
    previewHeight: 1411,
    price: 450000,
    oldPrice: 690000,
    description:
      "Спокойная классика для никоха и тоя: конверт с именем гостя, таймер, история пары, карта, анкета и книга пожеланий. Есть админка — меняете текст и фото сами.",
    accent: "#a97a3f",
    bg: "#0d1120",
    ink: "#17130f",
    dark: true,
    badgeInk: "#fff",
    panel: "linear-gradient(180deg,#1c2440 0%,#0d1120 100%)",
    badge: "Хит продаж",
    features: [
      "Русский и узбекский",
      "Анкета гостя (RSVP)",
      "QR-коды для гостей",
      "Панель управления",
    ],
  },
  {
    slug: "nur",
    name: "Nur",
    style: "Кинематографичная · тёмная",
    demoUrl: "http://localhost:3001",
    preview: "/previews/nur-welcome.jpg",
    previewWidth: 800,
    previewHeight: 1411,
    price: 550000,
    oldPrice: 790000,
    description:
      "Вертикальные слайды с фото на весь экран, видео-история, онлайн-трансляция и пожелания. Смотрится дорого на телефоне и подходит вечерней свадьбе.",
    accent: "#c9a06a",
    bg: "#14120f",
    ink: "#f4efe6",
    dark: true,
    badgeInk: "#14120f",
    panel: "linear-gradient(180deg,#211d18 0%,#14120f 100%)",
    badge: "Новинка",
    features: [
      "Русский и узбекский",
      "Полноэкранные слайды",
      "Видео и трансляция",
      "Пожелания гостей",
    ],
  },
];

export const upcoming = [
  { name: "Pastel", style: "Нежная акварель", eta: "Скоро" },
  { name: "Minimal", style: "Чистая типографика", eta: "Скоро" },
  { name: "Gold", style: "Золото и орнамент", eta: "Скоро" },
];

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug);
}
