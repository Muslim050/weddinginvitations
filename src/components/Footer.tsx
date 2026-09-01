import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-sand py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] uppercase">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ash">
          <a href="#templates" className="hover:text-bronze">Шаблоны</a>
          <a href="#pricing" className="hover:text-bronze">Цены</a>
          <a href="#faq" className="hover:text-bronze">Вопросы</a>
          <a href={site.telegram} className="hover:text-bronze">Telegram</a>
          <a href={site.instagram} className="hover:text-bronze">Instagram</a>
        </nav>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
