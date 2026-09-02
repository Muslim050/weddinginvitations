"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "#tour", label: "Как это выглядит" },
  { href: "#templates", label: "Шаблоны" },
  { href: "#pricing", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-sand/70 bg-ivory/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-16 sm:px-8">
        <a href="#top" className="font-display text-xl tracking-[0.16em] uppercase">
          {site.name}
        </a>

        {/* Без бургера: четыре якоря помещаются, а оверлей на 40 строк не нужен */}
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ash transition-colors hover:text-bronze"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#order"
          className="rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5 sm:px-5"
        >
          Черновик бесплатно
        </a>
      </div>
    </header>
  );
}
