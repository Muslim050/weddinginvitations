"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { templates } from "@/lib/templates";

/**
 * Заявка уходит в мессенджер заранее заполненным сообщением —
 * бэкенд не нужен. Если появится CRM, замените openMessenger на fetch к API.
 */
export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    template: templates[0].name,
    date: "",
    comment: "",
  });

  const message = [
    "Здравствуйте! Хочу заказать электронное приглашение.",
    `Имя: ${form.name || "—"}`,
    `Связь: ${form.contact || "—"}`,
    `Шаблон: ${form.template}`,
    `Дата свадьбы: ${form.date || "—"}`,
    form.comment ? `Комментарий: ${form.comment}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const openMessenger = (target: "telegram" | "whatsapp") => {
    const text = encodeURIComponent(message);
    const url =
      target === "telegram"
        ? `${site.telegram}?text=${text}`
        : `${site.whatsapp}?text=${text}`;
    window.open(url, "_blank", "noopener");
  };

  const field =
    "w-full rounded-2xl border border-sand bg-ivory px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-bronze";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        openMessenger("telegram");
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.15em] uppercase text-muted">
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
          <span className="mb-2 block text-xs tracking-[0.15em] uppercase text-muted">
            Телефон или Telegram
          </span>
          <input
            required
            className={field}
            placeholder="+998 90 000-00-00"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs tracking-[0.15em] uppercase text-muted">
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
          <span className="mb-2 block text-xs tracking-[0.15em] uppercase text-muted">
            Дата свадьбы
          </span>
          <input
            type="date"
            className={field}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs tracking-[0.15em] uppercase text-muted">
          Комментарий
        </span>
        <textarea
          rows={3}
          className={`${field} resize-none`}
          placeholder="Свадьба в Ташкенте, нужен узбекский и русский, гостей около 200"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />
      </label>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="flex-1 rounded-full bg-ink px-6 py-4 font-medium text-ivory transition-transform hover:-translate-y-0.5"
        >
          Отправить в Telegram
        </button>
        <button
          type="button"
          onClick={() => openMessenger("whatsapp")}
          className="flex-1 rounded-full border border-ink/20 px-6 py-4 font-medium transition-colors hover:border-ink hover:bg-cream"
        >
          Написать в WhatsApp
        </button>
      </div>

      <p className="pt-1 text-xs leading-relaxed text-muted">
        Нажимая кнопку, вы открываете мессенджер с уже готовым сообщением —
        останется только отправить.
      </p>
    </form>
  );
}
