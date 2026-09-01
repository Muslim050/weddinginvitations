# Nikoh — продажа электронных пригласительных

Три проекта в одной папке:

| Что | Папка | Порт | Стек |
|---|---|---|---|
| Продающий лендинг | `.` (корень) | 3000 | Next.js 16, Tailwind 4 |
| Шаблон «Chinor» (демо) | `templates/zedlabs` | 4321 | Astro 7 + React 19 + SQLite |
| Шаблон «Nur» (демо) | `templates/weddingly` | 3001 | Next.js 14 + React 18 |

Оба шаблона переведены на **русский и узбекский** — гость переключает язык одной
кнопкой. Демо-данные — узбекская пара, Ташкент.

## Запуск

```bash
# 1. Лендинг
pnpm install && pnpm dev            # http://localhost:3000

# 2. Шаблон Chinor
cd templates/zedlabs && pnpm install && pnpm dev --port 4321

# 3. Шаблон Nur
cd templates/weddingly && npm install && npm run dev -- -p 3001
```

Лендинг ссылается на демо по этим портам — они заданы в `src/lib/templates.ts`
(поле `demoUrl`). При деплое замените на боевые адреса.

## Лендинг

- Контакты и валюта — `src/lib/site.ts` (Telegram, WhatsApp, телефон, почта, «сум»).
- Шаблоны и цены каталога — `src/lib/templates.ts`.
- Тарифы — `src/components/Pricing.tsx`, вопросы — `src/components/Faq.tsx`.
- Форма заявки открывает Telegram/WhatsApp с готовым текстом, бэкенд не нужен.
  Если появится CRM — замените `openMessenger` в `src/components/OrderForm.tsx`
  на запрос к своему API.

## Шаблон «Chinor» (templates/zedlabs)

- Тексты интерфейса — `src/i18n.ts` (`dict.ru` / `dict.uz`).
- Контент приглашения лежит в SQLite (`database/wedding.db`), начальные значения —
  `src/lib/db.ts`, объект `DEFAULT_CONFIG`. Узбекская версия значения хранится в
  ключе с суффиксом `_UZ` (например `VENUE_NAME` и `VENUE_NAME_UZ`).
  Чтобы пересоздать базу с новыми значениями — удалите папку `database/`.
- Админка: `/admin`, пароль в `.env` (`ADMIN_PASSWORD`, по умолчанию `P@ssw0rd`).
  Интерфейс админки переведён на русский.
- Персональная ссылка гостю: `/?to=Aziz%20Karimov`.

## Шаблон «Nur» (templates/weddingly)

- Тексты интерфейса — `lib/i18n.ts`, контент приглашения — `lib/config.ts`
  (объект `content` с секциями `ru` и `uz`, общие поля — в `shared`).
- Узбекские даты форматируются вручную: встроенная локаль `uz-UZ` выдаёт
  «2027 M05 15», поэтому в `lib/i18n.ts` есть `formatDate` / `formatFullDate`.
- Анкета гостей работает без MongoDB: если `MONGODB_URI` пустой, ответы пишутся
  в `.data/wishes.json` (см. `lib/store.ts`). Укажете строку подключения —
  переключится на Mongo автоматически.
- Персональная ссылка гостю: `/to%3AAziz%20Karimov`.

## Лицензии шаблонов

Оба репозитория под MIT (`templates/*/LICENSE`), авторы указаны в футере
и в `package.json`. Атрибуцию в футере «Nur» оставили как есть.
