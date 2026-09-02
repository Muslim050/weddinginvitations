"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { templates } from "@/lib/templates";
import { plans } from "@/lib/pricing";

const PLAN_NAMES = plans.map((p) => p.name);

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    plan: PLAN_NAMES[0],
    template: templates[0].name,
    date: "",
    guests: "",
    comment: "",
  });
  const [copied, setCopied] = useState(false);

  // Тариф, выбранный в блоке цен, доезжает сюда
  useEffect(() => {
    const apply = (name: string) => {
      if (PLAN_NAMES.includes(name)) setForm((f) => ({ ...f, plan: name }));
    };
    try {
      const saved = sessionStorage.getItem("nikoh:plan");
      if (saved) apply(saved);
    } catch {
      // приватный режим
    }
    const onPick = (e: Event) => apply((e as CustomEvent<string>).detail);
    window.addEventListener("nikoh:plan", onPick);
    return () => window.removeEventListener("nikoh:plan", onPick);
  }, []);

  const message = [
    "Здравствуйте! Хочу приглашение на свадьбу.",
    `Имя: ${form.name || "—"}`,
    `Связь: ${form.contact || "—"}`,
    `Тариф: ${form.plan}`,
    `Шаблон: ${form.template}`,
    `Дата свадьбы: ${form.date || "—"}`,
    form.guests ? `Гостей: ${form.guests}` : "",
    form.comment ? `Комментарий: ${form.comment}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
      return true;
    } catch {
      return false;
    }
  };

  /**
   * Telegram не подставляет текст в личный чат через ?text= — ссылка на профиль
   * его игнорирует. Поэтому кладём сообщение в буфер и говорим об этом прямо,
   * а не обещаем «останется только отправить».
   */
  const openTelegram = async () => {
    await copy();
    window.open(site.telegram, "_blank", "noopener");
  };

  const openWhatsApp = () => {
    window.open(`${site.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  };

  const field =
    "w-full rounded-2xl border border-sand bg-ivory px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-bronze focus-visible:ring-2 focus-visible:ring-bronze/30";

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.14em] uppercase text-muted">
            Как вас зовут
          </span>
          <input
            required
            className={field}
            placeholder="Жасурбек"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.14em] uppercase text-muted">
            Телефон или Telegram
          </span>
          <input
            required
            className={field}
            placeholder="+998 90 123-45-67"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.14em] uppercase text-muted">
            Тариф
          </span>
          <select
            className={field}
            value={form.plan}
            onChange={(e) => setForm({ ...form, plan: e.target.value })}
          >
            {PLAN_NAMES.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.14em] uppercase text-muted">
            Шаблон
          </span>
          <select
            className={field}
            value={form.template}
            onChange={(e) => setForm({ ...form, template: e.target.value })}
          >
            {templates.map((t) => (
              <option key={t.slug}>{t.name}</option>
            ))}
            <option>Пока не выбрал(а)</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.14em] uppercase text-muted">
            Дата свадьбы
          </span>
          <input
            type="date"
            className={field}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.14em] uppercase text-muted">
            Сколько гостей
          </span>
          <input
            inputMode="numeric"
            className={field}
            placeholder="300"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value.replace(/\D/g, "").slice(0, 4) })}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs tracking-[0.14em] uppercase text-muted">
          Что важно учесть
        </span>
        <textarea
          rows={3}
          className={`${field} resize-none`}
          placeholder="Никох 11 октября в Ташкенте, той вечером. Нужен узбекский и русский."
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />
      </label>

      {site.configured ? (
        <>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={openTelegram}
              className="flex-1 rounded-full bg-ink px-6 py-4 font-medium text-ivory transition-transform hover:-translate-y-0.5"
            >
              Написать в Telegram
            </button>
            <button
              type="button"
              onClick={openWhatsApp}
              className="flex-1 rounded-full border border-ink/20 px-6 py-4 font-medium transition-colors hover:border-ink hover:bg-cream"
            >
              Написать в WhatsApp
            </button>
          </div>

          <p aria-live="polite" className="pt-1 text-xs leading-relaxed text-muted">
            {copied
              ? "Текст заявки скопирован — вставьте его в открывшийся чат."
              : "Telegram не умеет подставлять текст в личный чат, поэтому заявка копируется в буфер обмена, а вы вставляете её одним движением."}
          </p>
        </>
      ) : (
        <p className="rounded-2xl border border-dashed border-sand bg-cream/60 px-5 py-4 text-sm text-ash">
          Контакты ещё не подключены. Задайте <code>NEXT_PUBLIC_TELEGRAM</code> и{" "}
          <code>NEXT_PUBLIC_PHONE</code> в переменных окружения — до этого кнопки
          скрыты, чтобы заявка не уходила в никуда.
        </p>
      )}
    </form>
  );
}
