import type { Lang } from "./i18n";

/** Данные, не зависящие от языка. Меняются под каждую пару. */
const shared = {
  eventDate: process.env.NEXT_PUBLIC_EVENT_DATE || "2027-05-15T17:00:00",
  groomInstagram: process.env.NEXT_PUBLIC_GROOM_INSTAGRAM || "sardorbek.yusupov",
  brideInstagram: process.env.NEXT_PUBLIC_BRIDE_INSTAGRAM || "malika.tursunova",
  nikoh: {
    enabled: true,
    time: "10:00 — 12:00",
    googleMapsLink: "https://maps.google.com/?q=41.311081,69.240562",
  },
  reception: {
    enabled: true,
    time: "18:00 — 22:00",
    googleMapsLink: "https://maps.google.com/?q=41.311081,69.240562",
  },
  livestreaming: {
    enabled: true,
    time: "18:00",
    link: "https://www.youtube.com/watch?v=Q5J",
  },
  prewedding: {
    enabled: true,
    link: "YkO-e-gyp58",
  },
  rsvp: { enabled: true },
};

/** Тексты приглашения на двух языках. */
const content = {
  ru: {
    coupleNames: "Сардор & Малика",
    groom: "Сардорбек Юсупов",
    groomNickName: "Сардор",
    groomBio:
      "Родился и вырос в Ташкенте. Инженер, любит горы, плов по субботам и долгие разговоры с семьёй.",
    bride: "Малика Турсунова",
    brideNickName: "Малика",
    brideBio:
      "Из Самарканда. Преподаёт английский, собирает старые книги и делает лучший чай в доме.",
    verseSource: "Коран, сура Ар-Рум, аят 21",
    verseText:
      "«И среди знамений Его — то, что Он создал для вас супругов из вас самих, чтобы вы находили в них покой, и установил между вами любовь и милосердие. Воистину, в этом — знамения для людей размышляющих».",
    timeline_1: "ЛЕТО 2022",
    timeline_1_content:
      "Мы познакомились на свадьбе общих друзей в Ташкенте. Тогда никто из нас не думал, что через несколько лет мы будем стоять на своей.",
    timeline_2: "ОСЕНЬ 2024",
    timeline_2_content:
      "Наши семьи встретились в Самарканде. Мы получили благословение родителей и начали строить общие планы.",
    timeline_3: "ВЕСНА 2027",
    timeline_3_content:
      "Иншааллах, мы соединяем наши судьбы. Мы будем счастливы разделить этот день с самыми дорогими для нас людьми.",
    nikohPlace: "Мечеть Минор",
    nikohPlaceDetails: "г. Ташкент, ул. Кичик Халка Йули, 1",
    receptionPlace: "Дворец торжеств «Zarafshon»",
    receptionPlaceDetails:
      "г. Ташкент, Мирзо-Улугбекский район, ул. Мустакиллик, 45",
    livestreamingDetail:
      "Если вы не сможете приехать — присоединяйтесь к прямой трансляции никоха и будьте с нами в этот день.",
    preweddingDetail:
      "Каждая история любви прекрасна, но наша — самая любимая.",
    rsvpDetail:
      "Пожалуйста, оставьте пожелание и подтвердите своё присутствие в форме ниже. Спасибо!",
    thankyou: "Спасибо, что будете рядом",
    thankyouDetail:
      "Для нас честь и радость, если вы разделите с нами этот день и подарите своё благословение.",
  },
  uz: {
    coupleNames: "Sardor & Malika",
    groom: "Sardorbek Yusupov",
    groomNickName: "Sardor",
    groomBio:
      "Toshkentda tug‘ilib o‘sgan. Muhandis, tog‘larni, shanbalik oshni va oila davrasidagi uzun suhbatlarni yaxshi ko‘radi.",
    bride: "Malika Tursunova",
    brideNickName: "Malika",
    brideBio:
      "Samarqanddan. Ingliz tilidan dars beradi, eski kitob yig‘adi va uydagi eng mazali choyni damlaydi.",
    verseSource: "Qur’on, Rum surasi, 21-oyat",
    verseText:
      "«Uning oyatlaridan yana biri — sizlarga o‘zlaringizdan juftlar yaratganidir, toki ularda orom topgaysizlar; va oralaringizga mehr va rahm soldi. Albatta, bunda tafakkur qiluvchi qavm uchun oyatlar bordir».",
    timeline_1: "2022-YIL YOZI",
    timeline_1_content:
      "Toshkentda umumiy do‘stlarimiz to‘yida tanishdik. O‘shanda hech birimiz bir necha yildan so‘ng o‘z to‘yimizda turishimizni o‘ylamagandik.",
    timeline_2: "2024-YIL KUZI",
    timeline_2_content:
      "Oilalarimiz Samarqandda uchrashdi. Ota-onalarimizdan oq fotiha oldik va birga rejalar tuza boshladik.",
    timeline_3: "2027-YIL BAHORI",
    timeline_3_content:
      "Inshaalloh, taqdirlarimizni bir qilamiz. Bu kunni eng aziz insonlarimiz bilan baham ko‘rishdan baxtiyormiz.",
    nikohPlace: "Minor masjidi",
    nikohPlaceDetails: "Toshkent shahri, Kichik Halqa Yo‘li ko‘chasi, 1",
    receptionPlace: "«Zarafshon» to‘yxonasi",
    receptionPlaceDetails:
      "Toshkent shahri, Mirzo Ulug‘bek tumani, Mustaqillik ko‘chasi, 45",
    livestreamingDetail:
      "Agar kela olmasangiz — nikoh to‘yimizning jonli translyatsiyasiga qo‘shiling va shu kunda biz bilan bo‘ling.",
    preweddingDetail:
      "Har bir sevgi qissasi go‘zal, ammo bizniki — eng suyuklisi.",
    rsvpDetail:
      "Iltimos, quyidagi shakl orqali tilagingizni qoldiring va ishtirokingizni tasdiqlang. Rahmat!",
    thankyou: "Yonimizda bo‘lganingiz uchun rahmat",
    thankyouDetail:
      "Bu kunni biz bilan baham ko‘rib, oq fotihangizni bersangiz — biz uchun katta sharaf va quvonch.",
  },
} as const;

type ContentText = { [K in keyof (typeof content)["ru"]]: string };

export type InvitationConfig = typeof shared & ContentText;

export function getConfig(lang: Lang): InvitationConfig {
  return { ...shared, ...content[lang] };
}

/** Значение по умолчанию — используется в метаданных страницы. */
export const config = getConfig("ru");
