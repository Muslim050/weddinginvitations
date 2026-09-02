import OrderForm from "./OrderForm";
import { site } from "@/lib/site";
import { promises } from "@/lib/promises";

export default function Order() {
  return (
    <section id="order" className="scroll-mt-20 border-t border-sand py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Черновик бесплатно
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
            Расскажите про вашу свадьбу
          </h2>
          <p className="mt-4 text-lg text-ash">
            Соберу приглашение с вашими именами {promises.draft} и пришлю ссылку.
            Понравится — заплатите. Не понравится — ничего не должны.
          </p>

          {site.configured && (
            <dl className="mt-10 space-y-5 border-t border-sand pt-8 text-sm">
              <div>
                <dt className="text-xs tracking-[0.14em] uppercase text-muted">Telegram</dt>
                <dd className="mt-1">
                  <a href={site.telegram} className="text-bronze underline underline-offset-4">
                    @{site.telegramUser}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.14em] uppercase text-muted">Телефон</dt>
                <dd className="mt-1">
                  <a href={site.phoneHref} className="text-bronze underline underline-offset-4">
                    {site.phone}
                  </a>
                </dd>
              </div>
            </dl>
          )}
        </div>

        <div className="rounded-3xl border border-sand bg-cream/40 p-6 shadow-[0_40px_80px_-55px_rgba(23,19,15,0.4)] sm:p-9">
          <OrderForm />
        </div>
      </div>
    </section>
  );
}
