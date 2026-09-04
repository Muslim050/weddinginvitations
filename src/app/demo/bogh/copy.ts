export type Lang = "ru" | "uz";

/** Дата торжества. Меняется здесь — countdown и подписи подхватят. */
export const EVENT_ISO = "2027-09-05T18:00:00+05:00";

export const copy = {
  ru: {
    nav: "Приглашение",
    coverKicker: "День свадьбы",
    groom: "Бехзод",
    bride: "Мохинабону",
    date: "05.09.27",
    open: "Открыть",
    swipe: "Листайте вниз",

    greetKicker: "Наш свадебный день",
    greetFallback: "Дорогой гость",
    greetText:
      "С огромной радостью приглашаем вас разделить с нами самый важный день нашей жизни.",

    whenKicker: "Дата торжества",
    whenTitle: "Когда?",
    month: "сентября",
    day: "5",
    time: "18:00",
    units: ["дней", "часов", "минут", "секунд"],

    programKicker: "Программа",
    programTitle: "Как пройдёт вечер",
    program: [
      ["18:00", "Сбор гостей", "Встречаем вас с чаем и сладким столом"],
      ["19:00", "Начало торжества", "Выход молодых и первые поздравления"],
      ["20:00", "Ужин и музыка", "Живой оркестр и национальные танцы"],
      ["22:00", "Первый танец", "И торт под конец вечера"],
    ],

    whereKicker: "Где?",
    whereTitle: "Адрес",
    venue: "Osiyo Grand",
    address: "улица Лабзак, 5, Ташкент",
    route: "Построить маршрут",

    rsvpKicker: "Подтвердите участие",
    rsvpTitle: "Придёте?",
    rsvpText: "Пожалуйста, дайте знать до 20 августа — нам важно рассчитать столы.",
    name: "Ваше имя",
    yes: "Буду с радостью",
    no: "К сожалению, не смогу",
    guests: "Сколько вас будет",
    send: "Отправить ответ",
    sent: "Спасибо, ответ записан",
    demo: "Это демонстрация — ответ никуда не отправляется",

    byeTitle: "До встречи",
    byeText: "Будем счастливы провести этот день вместе с вами.",
  },

  uz: {
    nav: "Taklifnoma",
    coverKicker: "To‘y kuni",
    groom: "Behzod",
    bride: "Mohinabonu",
    date: "05.09.27",
    open: "Ochish",
    swipe: "Pastga suring",

    greetKicker: "Bizning to‘y kunimiz",
    greetFallback: "Aziz mehmon",
    greetText:
      "Hayotimizdagi eng muhim kunni biz bilan birga nishonlashga chin dildan taklif qilamiz.",

    whenKicker: "To‘y sanasi",
    whenTitle: "Qachon?",
    month: "sentabr",
    day: "5",
    time: "18:00",
    units: ["kun", "soat", "daqiqa", "soniya"],

    programKicker: "Dastur",
    programTitle: "Oqshom qanday o‘tadi",
    program: [
      ["18:00", "Mehmonlar yig‘ilishi", "Choy va shirinliklar bilan kutib olamiz"],
      ["19:00", "Tantana boshlanishi", "Yoshlarning chiqishi va ilk tabriklar"],
      ["20:00", "Ziyofat va musiqa", "Jonli ijro va milliy raqslar"],
      ["22:00", "Ilk raqs", "Va oqshom yakunida tort"],
    ],

    whereKicker: "Qayerda?",
    whereTitle: "Manzil",
    venue: "Osiyo Grand",
    address: "Labzak ko‘chasi, 5, Toshkent",
    route: "Yo‘l ko‘rsatish",

    rsvpKicker: "Ishtirokingizni tasdiqlang",
    rsvpTitle: "Kela olasizmi?",
    rsvpText: "Iltimos, 20-avgustgacha xabar bering — stollarni hisoblashimiz kerak.",
    name: "Ismingiz",
    yes: "Albatta boraman",
    no: "Afsuski, kela olmayman",
    guests: "Necha kishi bo‘lasiz",
    send: "Javobni yuborish",
    sent: "Rahmat, javob yozildi",
    demo: "Bu namoyish — javob hech qayerga yuborilmaydi",

    byeTitle: "Ko‘rishguncha",
    byeText: "Bu kunni siz bilan birga o‘tkazishdan baxtiyor bo‘lamiz.",
  },
} as const;
