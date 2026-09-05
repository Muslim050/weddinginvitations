# Nikoh — продажа электронных пригласительных

Лендинг и семь шаблонов в одной папке:

| Что | Папка | Порт | Стек |
|---|---|---|---|
| Продающий лендинг | `.` (корень) | 3000 | Next.js 16, Tailwind 4 |
| Шаблон «Chinor» (демо) | `templates/zedlabs` | 4321 | Astro 7 + React 19 + SQLite |
| Шаблон «Nur» (демо) | `templates/weddingly` | 3001 | Next.js 14 + React 18 |
| Шаблон «Nafis» (демо) | `public/demo/nafis` | 3000 | HTML, CSS и JavaScript |
| Шаблоны «Oud», «Azure», «Lumi», «Garden» | `public/demo/reveal` | 3000 | HTML, CSS и JavaScript |

Все семь шаблонов переведены на **русский и узбекский** — гость переключает язык одной
кнопкой. Демо-данные — узбекская пара, Ташкент.

## Запуск

```bash
# 1. Лендинг
pnpm install && pnpm dev            # http://localhost:3000

# 2. Шаблон Chinor
cd templates/zedlabs && pnpm install && pnpm dev --port 4321

# 3. Шаблон Nur
cd templates/weddingly && npm install && npm run dev -- -p 3001

# 4. Шаблон Nafis уже доступен вместе с лендингом
# http://localhost:3000/demo/nafis/index.html

# 5. Новые Reveal-шаблоны доступны вместе с лендингом
# http://localhost:3000/demo/reveal/index.html?theme=garden
```

Адреса демо заданы в `src/lib/templates.ts` (поле `demoUrl`). Chinor и Nur
открываются на отдельных портах, а Nafis встроен в лендинг и не требует второго
процесса. Четыре Reveal-шаблона тоже встроены в лендинг. При деплое внешние адреса
можно переопределить переменными из `.env.example`.

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

## Шаблон «Nafis» (public/demo/nafis)

- Акварельная композиция с анимированным раскрытием свитка и фоновой музыкой.
- Есть программа вечера, маршрут, добавление даты в календарь и анкета гостя.
- Форма в демо безопасно отключена. Для сбора ответов подключите свой Google Apps Script,
  заменив `SCRIPT_ID` в `public/demo/nafis/index.html`.

## Шаблоны Reveal (public/demo/reveal)

- Четыре оформления: Oud, Azure, Lumi и Garden.
- В каждом есть анимация открытия, музыка, RU/UZ, таймер, программа, карта,
  календарь и локальная демо-форма RSVP.
- Оформление выбирается параметром `theme`: `oud`, `azure`, `light` или `garden`.

## Лицензии шаблонов

Оба исходных репозитория под MIT (`templates/*/LICENSE`), авторы указаны в футере
и в `package.json`. Атрибуцию в футере «Nur» оставили как есть.
