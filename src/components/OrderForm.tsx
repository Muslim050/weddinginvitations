"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { templates } from "@/lib/templates";

const TEMPLATE_NAMES = templates.map((t) => t.name);

/**
 * Маска телефона. На вход берём только цифры — буквы и мусор в поле не попадают
 * вовсе, поэтому набрать что-то нечитаемое невозможно.
 *
 * Код страны показываем сами, но храним вместе с номером: пустое поле остаётся
 * пустым, иначе `+998` нельзя было бы стереть и placeholder никогда бы не
 * показался.
 */
function formatPhone(value: string): string {
  let digits = value.replace(/\D/g, "");

  /*
   * Код страны снимаем всегда: он уже стоит в поле, и на каждое нажатие его
   * цифры возвращаются во ввод вместе с номером. Не отрезать их — значит
   * после второй же цифры собирать номер из «998» и того, что набрал человек.
   */
  if (digits.startsWith("998")) digits = digits.slice(3);
  digits = digits.slice(0, 9);
  if (!digits) return "";

  let out = "+998 " + digits.slice(0, 2);
  if (digits.length > 2) out += " " + digits.slice(2, 5);
  if (digits.length > 5) out += "-" + digits.slice(5, 7);
  if (digits.length > 7) out += "-" + digits.slice(7, 9);
  return out;
}

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    template: TEMPLATE_NAMES[0],
    date: "",
    guests: "",
    comment: "",
  });
  const [copied, setCopied] = useState(false);
  /** Ловушка для ботов: настоящий человек это поле не увидит и не заполнит. */
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  // Шаблон, выбранный в блоке цен, доезжает сюда
  useEffect(() => {
    const apply = (name: string) => {
      if (TEMPLATE_NAMES.includes(name)) setForm((f) => ({ ...f, template: name }));
    };
    try {
      const saved = sessionStorage.getItem("nikoh:template");
      if (saved) apply(saved);
    } catch {
      // приватный режим
    }
    const onPick = (e: Event) => apply((e as CustomEvent<string>).detail);
    window.addEventListener("nikoh:template", onPick);
    return () => window.removeEventListener("nikoh:template", onPick);
  }, []);

  const message = [
    "Здравствуйте! Хочу приглашение на свадьбу.",
    `Имя: ${form.name || "—"}`,
    `Связь: ${form.contact || "—"}`,
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

  /**
   * Основной путь: заявка уходит владельцу в Telegram сама. Если сервер не
   * настроен или не ответил, показываем ручные кнопки — потерять заявку хуже,
   * чем попросить человека написать самому.
   */
  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setFailed(false);
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-2xl border border-sand bg-ivory px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-bronze focus-visible:ring-2 focus-visible:ring-bronze/30";

  if (sent) {
    return (
      <div className="rounded-2xl border border-sand bg-cream/60 px-6 py-8 text-center">
        <p className="font-display text-2xl">Заявка ушла</p>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          Напишу вам {form.contact ? `на ${form.contact}` : "в ближайшее время"} и
          пришлю черновик с вашими именами.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={send} className="space-y-4">
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
            Телефон
          </span>
          <input
            required
            className={field}
            placeholder="+998 90 123-45-67"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.contact}
            onChange={(e) => {
              const next = formatPhone(e.target.value);
              /*
               * Backspace на разделителе иначе не двигается с места: маска
               * возвращает ту же строку. Раз ввод стал короче, а результат
               * прежний — убираем последнюю цифру, как человек и хотел.
               */
              const erasing = e.target.value.length < form.contact.length;
              setForm({
                ...form,
                contact:
                  erasing && next === form.contact
                    ? formatPhone(next.replace(/\d(?=\D*$)/, ""))
                    : next,
              });
            }}
          />
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
            {TEMPLATE_NAMES.map((n) => (
              <option key={n}>{n}</option>
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

      {/* Поле-ловушка. Скрыто от людей и от скринридеров, видно только ботам. */}
      <div aria-hidden className="hidden">
        <label>
          Не заполняйте это поле
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-ink px-6 py-4 font-medium text-ivory transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {sending ? "Отправляю…" : "Отправить заявку"}
      </button>

      <p aria-live="polite" className="pt-1 text-xs leading-relaxed text-muted">
        {failed
          ? "Не получилось отправить. Напишите мне сами — кнопки ниже, текст заявки уже собран."
          : "Отвечу в течение дня. Аванса нет: сначала черновик, потом оплата."}
      </p>

      {/* Запасной путь. Нужен, когда сервер не ответил или контакты — привычнее. */}
      {site.configured && (
        <div className={failed ? "" : "border-t border-sand pt-4"}>
          {!failed && (
            <p className="pb-3 text-xs text-muted">Или напишите напрямую:</p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openTelegram}
              className="flex-1 rounded-full border border-ink/20 px-6 py-3.5 font-medium transition-colors hover:border-ink hover:bg-cream"
            >
              Написать в Telegram
            </button>
            <button
              type="button"
              onClick={openWhatsApp}
              className="flex-1 rounded-full border border-ink/20 px-6 py-3.5 font-medium transition-colors hover:border-ink hover:bg-cream"
            >
              Написать в WhatsApp
            </button>
          </div>
          {copied && (
            <p className="pt-2 text-xs text-muted">
              Текст заявки скопирован — вставьте его в открывшийся чат.
            </p>
          )}
        </div>
      )}
    </form>
  );
}
