import type { Metadata } from "next";
import { Cormorant_Garamond, Marck_Script, Montserrat } from "next/font/google";
import Bogh from "./Bogh";
import "./bogh.css";

/**
 * Шаблон «Bog‘» — акварельная ботаника со свитком.
 * Все три шрифта из Google Fonts: кириллица и латиница, лицензия открытая.
 */
const script = Marck_Script({
  variable: "--font-bogh-script",
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-bogh-display",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const label = Montserrat({
  variable: "--font-bogh-label",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Бехзод и Мохинабону — приглашение",
  description: "Приглашение на свадьбу 5 сентября, Ташкент.",
  robots: { index: false, follow: false },
};

export default function BoghDemo() {
  return (
    <div className={`${script.variable} ${display.variable} ${label.variable}`}>
      <Bogh />
    </div>
  );
}
