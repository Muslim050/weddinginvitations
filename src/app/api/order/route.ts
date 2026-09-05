import { NextResponse } from "next/server";

/**
 * Приём заявки с лендинга и отправка её владельцу в Telegram.
 *
 * Токен бота — серверный секрет: он живёт только здесь и НИКОГДА не должен
 * попадать в переменную с префиксом NEXT_PUBLIC_, иначе уедет в браузер
 * вместе со сборкой, и любой сможет писать от имени бота.
 */

/** Поля заявки. Длины ограничены, чтобы в чат не залили простыню. */
const LIMITS = {
  name: 100,
  contact: 100,
  template: 60,
  date: 40,
  guests: 10,
  comment: 1500,
} as const;

type Field = keyof typeof LIMITS;

/** Экранирование под parse_mode: HTML — иначе имя с «<» сломает сообщение. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function clean(value: unknown, field: Field) {
  if (typeof value !== "string") return "";
  return escapeHtml(value.trim().slice(0, LIMITS[field]));
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Молча «принять» заявку и потерять её — худшее, что можно сделать.
  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Приём заявок не настроен" },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректная заявка" }, { status: 400 });
  }

  /*
   * Ловушка для ботов: поле спрятано от человека, и заполнить его может только
   * автозаполнялка спам-скрипта. Отвечаем успехом, чтобы бот не подбирал форму
   * дальше, но никому не пишем.
   */
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, "name");
  const contact = clean(body.contact, "contact");
  if (!name || !contact) {
    return NextResponse.json(
      { error: "Нужны имя и способ связи" },
      { status: 400 },
    );
  }

  const lines = [
    "<b>Заявка с сайта</b>",
    `Имя: ${name}`,
    `Связь: ${contact}`,
    `Шаблон: ${clean(body.template, "template") || "—"}`,
    `Дата свадьбы: ${clean(body.date, "date") || "—"}`,
  ];
  const guests = clean(body.guests, "guests");
  if (guests) lines.push(`Гостей: ${guests}`);
  const comment = clean(body.comment, "comment");
  if (comment) lines.push("", comment);

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines.join("\n"),
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );

    if (!response.ok) {
      // Ответ Telegram пишем в лог сервера: он нужен для отладки, но в браузер
      // отдавать его нельзя — там бывает и имя бота, и причина отказа.
      console.error("Telegram отказал:", response.status, await response.text());
      return NextResponse.json(
        { error: "Не удалось отправить заявку" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Telegram недоступен:", error);
    return NextResponse.json(
      { error: "Не удалось отправить заявку" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
