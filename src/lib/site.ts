/**
 * Контакты и реквизиты сайта.
 *
 * Все значения читаются из переменных окружения — плейсхолдеры ниже нужны только
 * чтобы страница собиралась локально. Пока переменная не задана, соответствующий
 * канал считается ненастроенным (`site.configured === false`), и интерфейс
 * не показывает мёртвую ссылку вместо рабочей.
 *
 * Задать значения: .env.local (локально) или переменные окружения хостинга.
 */

const PLACEHOLDER = {
  telegram: "your_username",
  phone: "+998900000000",
  instagram: "your_username",
  email: "hello@example.com",
} as const;

const telegramUser = process.env.NEXT_PUBLIC_TELEGRAM ?? PLACEHOLDER.telegram;
const phoneDigits = process.env.NEXT_PUBLIC_PHONE ?? PLACEHOLDER.phone;
const instagramUser = process.env.NEXT_PUBLIC_INSTAGRAM ?? PLACEHOLDER.instagram;
const email = process.env.NEXT_PUBLIC_EMAIL ?? PLACEHOLDER.email;

/** Форматирует +998901234567 → +998 90 123-45-67 */
function formatPhone(raw: string): string {
  const d = raw.replace(/\D/g, "");
  if (d.length !== 12) return raw;
  return `+${d.slice(0, 3)} ${d.slice(3, 5)} ${d.slice(5, 8)}-${d.slice(8, 10)}-${d.slice(10)}`;
}

export const site = {
  name: "Nikoh",
  tagline: "Электронные пригласительные на свадьбу",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  /** Имя мастера — подписывает страницу живым человеком, а не безликим «мы». */
  owner: process.env.NEXT_PUBLIC_OWNER_NAME ?? "",

  telegramUser,
  telegram: `https://t.me/${telegramUser}`,
  whatsapp: `https://wa.me/${phoneDigits.replace(/\D/g, "")}`,
  instagram: `https://instagram.com/${instagramUser}`,
  email,
  phone: formatPhone(phoneDigits),
  phoneHref: `tel:${phoneDigits.replace(/[^\d+]/g, "")}`,

  /** false, пока контакты не заданы: интерфейс не должен вести в никуда. */
  configured:
    telegramUser !== PLACEHOLDER.telegram &&
    phoneDigits !== PLACEHOLDER.phone,
} as const;

export const currency = "сум";

export function price(value: number): string {
  return `${value.toLocaleString("ru-RU")} ${currency}`;
}
