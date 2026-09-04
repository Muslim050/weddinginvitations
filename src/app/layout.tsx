import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { PRICES } from "@/lib/pricing";

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

const description =
  `Приглашение-сайт вместо бумажных таклифнома: никох и той с адресами, ` +
  `маршрут в навигаторе и ответ гостя в один тап. На русском и узбекском. ` +
  `От ${PRICES.chinor.toLocaleString("ru-RU")} сум, черновик бесплатно.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — электронные пригласительные на свадьбу в Ташкенте`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "электронное приглашение на свадьбу",
    "пригласительные Ташкент",
    "таклифнома онлайн",
    "сайт-приглашение",
    "никох таклифнома",
    "to‘y taklifnoma",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: site.name,
    title: `${site.name} — одна ссылка вместо стопки бумажных приглашений`,
    description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
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
