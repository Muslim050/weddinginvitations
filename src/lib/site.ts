export const site = {
  name: "Nikoh",
  tagline: "Электронные пригласительные на свадьбу",
  url: "https://example.com",
  // ↓ замените на свои контакты
  telegram: "https://t.me/your_username",
  whatsapp: "https://wa.me/998900000000",
  instagram: "https://instagram.com/your_username",
  email: "hello@example.com",
  phone: "+998 90 000-00-00",
  phoneHref: "tel:+998900000000",
} as const;

/** Валюта и формат цены — меняется в одном месте. */
export const currency = "сум";

export function price(value: number): string {
  return `${value.toLocaleString("ru-RU")} ${currency}`;
}
