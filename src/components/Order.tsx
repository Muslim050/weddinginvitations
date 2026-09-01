import Reveal from "./Reveal";
import OrderForm from "./OrderForm";
import { site } from "@/lib/site";

export default function Order() {
  return (
    <section id="order" className="scroll-mt-24 border-t border-sand bg-cream/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Заявка
          </span>
          <h2 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">
            Расскажите про вашу свадьбу
          </h2>
          <p className="mt-5 text-lg text-ash">
            Ответим в течение часа, покажем черновик в тот же день. Оплата —
            только после того, как вы увидите приглашение со своими именами.
          </p>

          <dl className="mt-10 space-y-5 border-t border-sand pt-8 text-sm">
            <div>
              <dt className="text-xs tracking-[0.15em] uppercase text-muted">Telegram</dt>
              <dd className="mt-1">
                <a href={site.telegram} className="text-bronze underline underline-offset-4">
                  {site.telegram.replace("https://", "")}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.15em] uppercase text-muted">Телефон</dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="text-bronze underline underline-offset-4">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.15em] uppercase text-muted">Почта</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-bronze underline underline-offset-4">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-sand bg-ivory p-7 shadow-[0_40px_80px_-50px_rgba(23,19,15,0.4)] sm:p-9">
            <OrderForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
