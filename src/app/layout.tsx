import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — электронные пригласительные на свадьбу`,
    template: `%s · ${site.name}`,
  },
  description:
    "Приглашение-сайт вместо бумажной открытки: на русском и узбекском, готово за 1 день. Гости отвечают в один клик, вы видите список в таблице.",
  keywords: [
    "электронное приглашение на свадьбу",
    "сайт-приглашение",
    "пригласительные онлайн",
    "wedding invitation",
    "RSVP",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: `${site.name} — электронные пригласительные на свадьбу`,
    description:
      "Приглашение-сайт вместо бумаги: таймер, анкета гостей, карта и маршрут. Готово за 1 день.",
    siteName: site.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
