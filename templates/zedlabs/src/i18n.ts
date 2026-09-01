import { useEffect, useState } from "react";

export type Lang = "ru" | "uz";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
];

const STORAGE_KEY = "invitation-lang";
export const LANG_EVENT = "invitation-lang-change";

export function readLang(): Lang {
  if (typeof window === "undefined") return "ru";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "ru" || saved === "uz") return saved;
  return window.navigator.language?.toLowerCase().startsWith("uz") ? "uz" : "ru";
}

export function writeLang(lang: Lang): void {
  window.localStorage.setItem(STORAGE_KEY, lang);
  window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: lang }));
}

export function useLang(): [Lang, (lang: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(readLang);

  useEffect(() => {
    const sync = () => setLangState(readLang());
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

export function useT() {
  const [lang] = useLang();
  return dict[lang];
}

export const dict = {
  ru: {
    locale: "ru-RU",
    nav: {
      home: "Главная",
      couple: "Молодожёны",
      events: "События",
      gallery: "Галерея",
      rsvp: "Анкета",
      wishes: "Пожелания",
      darkMode: "Тёмная тема",
      lightMode: "Светлая тема",
      language: "Язык",
    },
    envelope: {
      weddingOf: "Свадьба",
      dear: "Уважаемый(ая) гость:",
      guestFallback: "Дорогой гость",
      note: "Приглашаем вас разделить с нами радость этого дня и стать частью нашего никоха.",
      open: "Открыть приглашение",
    },
    hero: {
      kicker: "Приглашение на свадьбу",
      dear: "Уважаемый(ая)",
      seeDetails: "Подробнее",
      days: "дней",
      hours: "часов",
      minutes: "минут",
      seconds: "секунд",
    },
    couple: { title: "Жених и невеста" },
    story: {
      title: "Наша история",
      subtitle: "Путь двух сердец к одной цели",
      watermark: "Наша история",
    },
    event: {
      title: "Время и место",
      sacredDay: "Наш главный день",
      saveTheDate: "Добавить в календарь",
      copyAddress: "Скопировать адрес",
      addressCopied: "Адрес скопирован",
      openInMaps: "Открыть на карте",
      calendarDesc: "Торжество",
      timezone: "",
    },
    gallery: {
      title: "Наша галерея",
      subtitle: "Тёплые моменты, которые навсегда останутся с нами",
      moment: "Кадр",
    },
    rsvp: {
      title: "Анкета гостя",
      subtitle: "Пожалуйста, подтвердите своё присутствие",
      thanks: "Спасибо!",
      saved: "Ваш ответ сохранён. Мы очень ждём встречи с вами.",
      editAgain: "Изменить ответ",
      confirm: "Подтверждение",
      fillData: "Заполните ваши данные",
      namePlaceholder: "Имя гостя",
      phonePlaceholder: "Телефон / WhatsApp",
      contact: "Контакт",
      messagePlaceholder: "Пожелание молодожёнам (необязательно)",
      message: "Сообщение",
      attendanceStatus: "Статус присутствия",
      guestCount: "Количество гостей (макс. %n)",
      sending: "Отправляем…",
      update: "Обновить ответ",
      send: "Отправить ответ",
      yes: "Буду",
      maybe: "Возможно",
      no: "Не смогу",
      guestList: "Список гостей",
      noData: "Ответов пока нет",
      newest: "Сначала новые",
      person: "чел.",
    },
    wishes: {
      title: "Пожелания",
      subtitle: "Тёплые слова и молитвы от самых близких",
      guestBook: "Книга пожеланий",
      formTitle: "Оставить пожелание",
      namePlaceholder: "Имя и фамилия",
      messagePlaceholder: "Напишите ваши пожелания…",
      yourMessage: "Ваше пожелание",
      sending: "Отправляем…",
      update: "Обновить пожелание",
      send: "Отправить пожелание",
    },
    gift: {
      onBehalf: "Получатель",
      copied: "Скопировано",
      copyNumber: "Скопировать номер",
      physicalGift: "Отправить подарок по адресу",
      copyAddress: "Скопировать адрес",
    },
    install: {
      title: "Установить приложение",
      desc: "Добавьте приглашение на главный экран телефона — так оно всегда будет под рукой.",
      later: "Позже",
      install: "Установить",
    },
    footer: { seeYou: "До встречи на нашем празднике" },
  },
  uz: {
    locale: "uz-UZ",
    nav: {
      home: "Bosh sahifa",
      couple: "Kelin-kuyov",
      events: "Tadbirlar",
      gallery: "Galereya",
      rsvp: "Anketa",
      wishes: "Tilaklar",
      darkMode: "Tungi rejim",
      lightMode: "Kunduzgi rejim",
      language: "Til",
    },
    envelope: {
      weddingOf: "To‘y",
      dear: "Hurmatli mehmon:",
      guestFallback: "Aziz mehmon",
      note: "Sizni ushbu quvonchli kunimizda biz bilan birga bo‘lishga taklif qilamiz.",
      open: "Taklifnomani ochish",
    },
    hero: {
      kicker: "To‘y taklifnomasi",
      dear: "Hurmatli",
      seeDetails: "Batafsil",
      days: "kun",
      hours: "soat",
      minutes: "daqiqa",
      seconds: "soniya",
    },
    couple: { title: "Kelin va kuyov" },
    story: {
      title: "Bizning tariximiz",
      subtitle: "Ikki qalbning bir maqsad sari yo‘li",
      watermark: "Bizning tariximiz",
    },
    event: {
      title: "Vaqt va manzil",
      sacredDay: "Muqaddas kunimiz",
      saveTheDate: "Taqvimga qo‘shish",
      copyAddress: "Manzildan nusxa olish",
      addressCopied: "Manzil nusxalandi",
      openInMaps: "Xaritada ochish",
      calendarDesc: "Tantana",
      timezone: "",
    },
    gallery: {
      title: "Bizning galereya",
      subtitle: "Qalbimizda abadiy qoladigan go‘zal lahzalar",
      moment: "Lahza",
    },
    rsvp: {
      title: "Mehmon anketasi",
      subtitle: "Iltimos, ishtirokingizni tasdiqlang",
      thanks: "Rahmat!",
      saved: "Javobingiz saqlandi. Sizni ko‘rishni intiqlik bilan kutamiz.",
      editAgain: "Javobni o‘zgartirish",
      confirm: "Tasdiqlash",
      fillData: "Ma’lumotlaringizni to‘ldiring",
      namePlaceholder: "Mehmon ismi",
      phonePlaceholder: "Telefon / WhatsApp",
      contact: "Aloqa",
      messagePlaceholder: "Kelin-kuyovga tilak (ixtiyoriy)",
      message: "Xabar",
      attendanceStatus: "Ishtirok holati",
      guestCount: "Mehmonlar soni (maks. %n)",
      sending: "Yuborilmoqda…",
      update: "Javobni yangilash",
      send: "Javobni yuborish",
      yes: "Boraman",
      maybe: "Aniq emas",
      no: "Kela olmayman",
      guestList: "Mehmonlar ro‘yxati",
      noData: "Hozircha javoblar yo‘q",
      newest: "Avval yangilari",
      person: "kishi",
    },
    wishes: {
      title: "Tilaklar",
      subtitle: "Eng yaqinlarimizdan iliq so‘z va duolar",
      guestBook: "Tilaklar kitobi",
      formTitle: "Tilak qoldirish",
      namePlaceholder: "Ism va familiya",
      messagePlaceholder: "Tilaklaringizni yozing…",
      yourMessage: "Sizning tilagingiz",
      sending: "Yuborilmoqda…",
      update: "Tilakni yangilash",
      send: "Tilak yuborish",
    },
    gift: {
      onBehalf: "Qabul qiluvchi",
      copied: "Nusxalandi",
      copyNumber: "Raqamdan nusxa olish",
      physicalGift: "Sovg‘ani manzilga yuborish",
      copyAddress: "Manzildan nusxa olish",
    },
    install: {
      title: "Ilovani o‘rnatish",
      desc: "Taklifnomani telefoningiz bosh ekraniga qo‘shing — u doim qo‘l ostingizda bo‘ladi.",
      later: "Keyinroq",
      install: "O‘rnatish",
    },
    footer: { seeYou: "Bayramimizda ko‘rishguncha" },
  },
} as const;

/* Встроенная локаль uz-UZ форматирует дату как «2026 M09 01»,
   поэтому узбекские даты собираем вручную. */
const UZ_MONTHS_SHORT = [
  "yan", "fev", "mar", "apr", "may", "iyun",
  "iyul", "avg", "sen", "okt", "noy", "dek",
];

export function formatShortDate(lang: Lang, value: string | Date): string {
  const d = new Date(value);
  if (lang === "uz") {
    return `${d.getDate()}-${UZ_MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
  }
  return d.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
