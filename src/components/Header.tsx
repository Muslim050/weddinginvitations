"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "#templates", label: "Шаблоны" },
  { href: "#inside", label: "Что внутри" },
  { href: "#how", label: "Как это работает" },
  { href: "#pricing", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-sand/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.18em] uppercase"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="flex items-center gap-3">
          <a
            href="#order"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Оставить заявку
          </a>
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-px w-4 bg-ink transition-transform duration-300 ${
                  open ? "bottom-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 bg-ivory px-5 pt-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-sand/60 py-4 font-display text-3xl"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#order"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-full bg-ink px-6 py-4 text-center font-medium text-ivory"
          >
            Оставить заявку
          </a>
        </div>
      )}
    </header>
  );
}
