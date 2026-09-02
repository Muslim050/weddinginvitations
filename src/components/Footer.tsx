import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-sand py-10 pb-24 lg:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl tracking-[0.16em] uppercase">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.tagline}</p>
        </div>

        {site.configured && (
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ash">
            <a href={site.telegram} className="py-1 hover:text-bronze">
              Telegram
            </a>
            <a href={site.instagram} className="py-1 hover:text-bronze">
              Instagram
            </a>
            <a href={site.phoneHref} className="py-1 hover:text-bronze">
              {site.phone}
            </a>
          </nav>
        )}

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
