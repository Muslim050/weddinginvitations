"use client";

import { useEffect, useState } from "react";

export type Lang = "ru" | "uz";

const STORAGE_KEY = "invitation-lang";
export const LANG_EVENT = "invitation-lang-change";

export function readLang(): Lang {
  if (typeof window === "undefined") return "ru";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "ru" || saved === "uz") return saved;
  return window.navigator.language?.toLowerCase().startsWith("uz") ? "uz" : "ru";
}

export function writeLang(lang: Lang) {
  window.localStorage.setItem(STORAGE_KEY, lang);
  window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: lang }));
}

export function useLang(): [Lang, (lang: Lang) => void] {
  const [lang, setLang] = useState<Lang>("ru");

  useEffect(() => {
    const sync = () => setLang(readLang());
    window.addEventListener(LANG_EVENT, sync);
    window.addEventListener("storage", sync);
    sync();
    return () => {
      window.removeEventListener(LANG_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return [lang, writeLang];
}

export const ui = {
  ru: {
    locale: "ru-RU",
    weddingOf: "Свадьба",
    welcome: "Добро пожаловать",
    dear: "Уважаемый(ая)",
    openInvitation: "Открыть приглашение",
    theGroom: "Жених",
    theBride: "Невеста",
    about: "Немного о",
    journey: "Наш путь к никоху",
    saveOurDate: "Запишите дату",
    nikoh: "Никох",
    reception: "Свадебный той",
    map: "Открыть на карте",
    almostTime: "СОВСЕМ СКОРО НАШ ПРАЗДНИК",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    liveTitle: "ПРИСОЕДИНЯЙТЕСЬ К ОНЛАЙН-ТРАНСЛЯЦИИ",
    joinLive: "Смотреть трансляцию",
    preweddingTitle: "НАША ИСТОРИЯ В ВИДЕО",
    rsvpTitle: "АНКЕТА И ПОЖЕЛАНИЯ",
    wishesTitle: "ПОЖЕЛАНИЯ",
    form: {
      name: "Имя",
      attendance: "Присутствие",
      choose: "Выберите вариант",
      coming: "Буду",
      notComing: "Не смогу",
      guests: "Количество гостей",
      chooseGuests: "Выберите количество",
      message: "Пожелание",
      submit: "Отправить",
      submitting: "Отправляем…",
      required: "Пожалуйста, заполните все поля",
      success: "Спасибо! Ваш ответ сохранён",
      error: "Не удалось отправить. Попробуйте ещё раз",
    },
    wishes: {
      empty: "Пожеланий пока нет",
      refreshing: "Обновляем…",
      prev: "Назад",
      next: "Вперёд",
      page: "Страница",
      of: "из",
    },
    langLabel: "O‘zbekcha",
  },
  uz: {
    locale: "uz-UZ",
    weddingOf: "To‘y",
    welcome: "Xush kelibsiz",
    dear: "Hurmatli",
    openInvitation: "Taklifnomani ochish",
    theGroom: "Kuyov",
    theBride: "Kelin",
    about: "U haqida:",
    journey: "Nikohga eltgan yo‘limiz",
    saveOurDate: "Sanani eslab qoling",
    nikoh: "Nikoh to‘yi",
    reception: "To‘y ziyofati",
    map: "Xaritada ochish",
    almostTime: "BAYRAMIMIZGA OZ QOLDI",
    days: "kun",
    hours: "soat",
    minutes: "daqiqa",
    seconds: "soniya",
    liveTitle: "ONLAYN TRANSLYATSIYAGA QO‘SHILING",
    joinLive: "Translyatsiyani ko‘rish",
    preweddingTitle: "TARIXIMIZ VIDEODA",
    rsvpTitle: "ANKETA VA TILAKLAR",
    wishesTitle: "TILAKLAR",
    form: {
      name: "Ism",
      attendance: "Ishtirok",
      choose: "Variantni tanlang",
      coming: "Boraman",
      notComing: "Kela olmayman",
      guests: "Mehmonlar soni",
      chooseGuests: "Sonini tanlang",
      message: "Tilak",
      submit: "Yuborish",
      submitting: "Yuborilmoqda…",
      required: "Iltimos, barcha maydonlarni to‘ldiring",
      success: "Rahmat! Javobingiz saqlandi",
      error: "Yuborib bo‘lmadi. Yana urinib ko‘ring",
    },
    wishes: {
      empty: "Hozircha tilaklar yo‘q",
      refreshing: "Yangilanmoqda…",
      prev: "Orqaga",
      next: "Oldinga",
      page: "Sahifa",
      of: "dan",
    },
    langLabel: "Русский",
  },
} as const;

export function useUi() {
  const [lang] = useLang();
  return ui[lang];
}

/* ——— Форматирование дат ———
   Встроенная локаль uz-UZ отдаёт «2027 M05 15», поэтому узбекские даты
   собираем вручную. */
const UZ_MONTHS = [
  "yanvar", "fevral", "mart", "aprel", "may", "iyun",
  "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr",
];

const UZ_WEEKDAYS = [
  "yakshanba", "dushanba", "seshanba",
  "chorshanba", "payshanba", "juma", "shanba",
];

export function formatWeekday(lang: Lang, value: string | Date): string {
  const d = new Date(value);
  if (lang === "uz") return UZ_WEEKDAYS[d.getDay()];
  return d.toLocaleDateString("ru-RU", { weekday: "long" });
}

export function formatDate(lang: Lang, value: string | Date): string {
  const d = new Date(value);
  if (lang === "uz") {
    return `${d.getFullYear()}-yil ${d.getDate()}-${UZ_MONTHS[d.getMonth()]}`;
  }
  return d.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatFullDate(lang: Lang, value: string | Date): string {
  return `${formatDate(lang, value)}, ${formatWeekday(lang, value)}`;
}

export function formatDateTime(lang: Lang, value: string | Date): string {
  const d = new Date(value);
  const time = d.toLocaleTimeString(lang === "uz" ? "en-GB" : "ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formatDate(lang, d)}, ${time}`;
}
