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
  badge?: string;
  features: string[];
};

export const templates: Template[] = [
  {
    slug: "chinor",
    name: "Chinor",
    style: "Классика · светлая и тёмная тема",
    demoUrl: "http://localhost:4321",
    preview: "/previews/chinor.jpg",
    previewWidth: 800,
    previewHeight: 1411,
    price: 450000,
    oldPrice: 690000,
    description:
      "Спокойная классика для никоха и тоя: конверт с именем гостя, таймер, история пары, карта, анкета и книга пожеланий. Есть админка — меняете текст и фото сами.",
    accent: "#a97a3f",
    bg: "#faf7f2",
    ink: "#17130f",
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
    preview: "/previews/nur.jpg",
    previewWidth: 800,
    previewHeight: 1411,
    price: 550000,
    oldPrice: 790000,
    description:
      "Вертикальные слайды с фото на весь экран, видео-история, онлайн-трансляция и пожелания. Смотрится дорого на телефоне и подходит вечерней свадьбе.",
    accent: "#c9a06a",
    bg: "#14120f",
    ink: "#f4efe6",
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
