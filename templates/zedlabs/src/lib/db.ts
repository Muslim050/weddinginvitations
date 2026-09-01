import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const DB_DIR = path.resolve(process.cwd(), "database");
const DB_FILE = path.join(DB_DIR, "wedding.db");
const OLD_DB_FILE = path.resolve(process.cwd(), "wedding.db");

if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

if (fs.existsSync(OLD_DB_FILE) && !fs.existsSync(DB_FILE)) {
  fs.renameSync(OLD_DB_FILE, DB_FILE);
}

const db = new Database(DB_FILE);
db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS rsvps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    guest_name TEXT NOT NULL,
    phone TEXT,
    attendance TEXT,
    guest_count INTEGER,
    message TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS wishes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS config (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  );
`);

const DEFAULT_CONFIG: Record<string, string> = {
  // ——— Общие данные (не зависят от языка) ———
  BRIDE_INSTAGRAM: "dilnoza.karimova",
  BRIDE_IMAGE: "https://placehold.co/600x800?text=Dilnoza",
  GROOM_INSTAGRAM: "jasurbek.rahimov",
  GROOM_IMAGE: "https://placehold.co/600x800?text=Jasurbek",
  VENUE_LAT: "41.311081",
  VENUE_LNG: "69.240562",
  AKAD_START: "10:00",
  AKAD_END: "12:00",
  AKAD_ISO_START: "2026-10-11T10:00:00+05:00",
  AKAD_ISO_END: "2026-10-11T12:00:00+05:00",
  RESEPSI_START: "18:00",
  RESEPSI_END: "22:00",
  RESEPSI_ISO_START: "2026-10-11T18:00:00+05:00",
  RESEPSI_ISO_END: "2026-10-11T22:00:00+05:00",
  HERO_IMAGE:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  MUSIC_URL: "https://www.bensound.com/bensound-music/bensound-forever.mp3",
  RSVP_MAX_GUESTS: "10",
  GALLERY_IMAGES: JSON.stringify([
    "https://placehold.co/800x1200?text=Lahza+1",
    "https://placehold.co/1200x800?text=Lahza+2",
    "https://placehold.co/800x800?text=Lahza+3",
    "https://placehold.co/800x1200?text=Lahza+4",
    "https://placehold.co/1200x800?text=Lahza+5",
    "https://placehold.co/800x1200?text=Lahza+6",
  ]),
  TELEGRAM_BOT_TOKEN: "",
  TELEGRAM_CHAT_ID: "",

  // ——— Русская версия (по умолчанию) ———
  BRIDE_NICKNAME: "Дилноза",
  BRIDE_FULLNAME: "Дилноза Каримова",
  BRIDE_PARENTS: "Любимая дочь Ботира Каримова и Нодиры Каримовой",
  GROOM_NICKNAME: "Жасурбек",
  GROOM_FULLNAME: "Жасурбек Рахимов",
  GROOM_PARENTS: "Любимый сын Санжара Рахимова и Мохиры Рахимовой",
  VENUE_NAME: "Дворец торжеств «Zarafshon»",
  VENUE_ADDRESS: "г. Ташкент, Мирзо-Улугбекский район, ул. Мустакиллик, 45",
  AKAD_TITLE: "Никох тўй",
  AKAD_DAY: "Воскресенье",
  AKAD_DATE: "11 октября 2026",
  RESEPSI_TITLE: "Свадебный той",
  RESEPSI_DAY: "Воскресенье",
  RESEPSI_DATE: "11 октября 2026",
  HERO_CITY: "Ташкент, Узбекистан",
  BANK_ACCOUNTS: JSON.stringify([
    { bank: "Uzcard", number: "8600 1234 5678 9012", name: "Жасурбек Рахимов" },
    { bank: "Humo", number: "9860 1234 5678 9012", name: "Дилноза Каримова" },
  ]),
  LOVE_STORY: JSON.stringify([
    {
      date: "2021",
      title: "Первая встреча",
      desc: "По воле Всевышнего мы встретились в Ташкенте — просто, но так, что этот день запомнился обоим.",
    },
    {
      date: "2024",
      title: "Знакомство семей",
      desc: "С добрыми намерениями наши родители встретились, и мы получили благословение на совместный путь.",
    },
    {
      date: "2026",
      title: "Никох",
      desc: "Иншааллах, мы соединяем наши судьбы и приглашаем вас разделить с нами эту радость.",
    },
  ]),
  TEXT_SALAM_OPENING: "Ассалому алайкум ва рахматуллохи ва баракотух",
  TEXT_QUOTE_AR_RUM:
    "«И среди знамений Его — то, что Он создал для вас супругов из вас самих, чтобы вы находили в них покой, и установил между вами любовь и милосердие. Воистину, в этом — знамения для людей размышляющих».",
  TEXT_QUOTE_SOURCE: "Коран, сура Ар-Рум, аят 21",
  TEXT_INVITATION:
    "С искренним уважением приглашаем вас, ваших родных и близких разделить с нами радость нашего никоха и подарить нам своё благословение:",
  TEXT_CLOSING:
    "Для нас будет большой честью и радостью, если вы сможете прийти и благословить нашу семью.",
  TEXT_SALAM_CLOSING: "Вассалому алайкум ва рахматуллохи ва баракотух",
  TEXT_SIGNATURE: "С уважением и радостью,",
  TEXT_FAMILY: "Семья Рахимовых и семья Каримовых",
  TEXT_GIFT_TITLE: "Подарок молодожёнам",
  TEXT_GIFT_DESC:
    "Ваше присутствие и добрые пожелания — лучший подарок для нас. Но если вы захотите порадовать нас иначе, мы примем это с благодарностью.",

  // ——— O‘zbekcha versiya (UZ) ———
  BRIDE_NICKNAME_UZ: "Dilnoza",
  BRIDE_FULLNAME_UZ: "Dilnoza Karimova",
  BRIDE_PARENTS_UZ: "Botir Karimov va Nodira Karimovaning suyukli qizi",
  GROOM_NICKNAME_UZ: "Jasurbek",
  GROOM_FULLNAME_UZ: "Jasurbek Rahimov",
  GROOM_PARENTS_UZ: "Sanjar Rahimov va Mohira Rahimovaning suyukli o‘g‘li",
  VENUE_NAME_UZ: "«Zarafshon» to‘yxonasi",
  VENUE_ADDRESS_UZ: "Toshkent shahri, Mirzo Ulug‘bek tumani, Mustaqillik ko‘chasi, 45",
  AKAD_TITLE_UZ: "Nikoh to‘yi",
  AKAD_DAY_UZ: "Yakshanba",
  AKAD_DATE_UZ: "2026-yil 11-oktabr",
  RESEPSI_TITLE_UZ: "To‘y ziyofati",
  RESEPSI_DAY_UZ: "Yakshanba",
  RESEPSI_DATE_UZ: "2026-yil 11-oktabr",
  HERO_CITY_UZ: "Toshkent, O‘zbekiston",
  BANK_ACCOUNTS_UZ: JSON.stringify([
    { bank: "Uzcard", number: "8600 1234 5678 9012", name: "Jasurbek Rahimov" },
    { bank: "Humo", number: "9860 1234 5678 9012", name: "Dilnoza Karimova" },
  ]),
  LOVE_STORY_UZ: JSON.stringify([
    {
      date: "2021",
      title: "Ilk uchrashuv",
      desc: "Alloh nasib qilib, biz Toshkentda tanishdik — oddiy, ammo ikkalamiz uchun ham unutilmas kun bo‘ldi.",
    },
    {
      date: "2024",
      title: "Oilalar tanishuvi",
      desc: "Yaxshi niyat bilan ota-onalarimiz uchrashdi va biz birga yo‘l bosishga oqlarini oldik.",
    },
    {
      date: "2026",
      title: "Nikoh",
      desc: "Inshaalloh, taqdirlarimizni bir qilamiz va bu quvonchni siz bilan baham ko‘rishni istaymiz.",
    },
  ]),
  TEXT_SALAM_OPENING_UZ: "Assalomu alaykum va rahmatullohi va barakotuh",
  TEXT_QUOTE_AR_RUM_UZ:
    "«Uning oyatlaridan yana biri — sizlarga o‘zlaringizdan juftlar yaratganidir, toki ularda orom topgaysizlar; va oralaringizga mehr va rahm soldi. Albatta, bunda tafakkur qiluvchi qavm uchun oyatlar bordir».",
  TEXT_QUOTE_SOURCE_UZ: "Qur’on, Rum surasi, 21-oyat",
  TEXT_INVITATION_UZ:
    "Sizni, oila a’zolaringiz va yaqinlaringizni nikoh to‘yimiz quvonchini baham ko‘rishga va oq fotihangizni berishga chin dildan taklif qilamiz:",
  TEXT_CLOSING_UZ:
    "Tashrif buyurib, oilamizga oq fotiha bersangiz, biz uchun katta sharaf va quvonch bo‘ladi.",
  TEXT_SALAM_CLOSING_UZ: "Vassalomu alaykum va rahmatullohi va barakotuh",
  TEXT_SIGNATURE_UZ: "Hurmat va quvonch bilan,",
  TEXT_FAMILY_UZ: "Rahimovlar oilasi va Karimovlar oilasi",
  TEXT_GIFT_TITLE_UZ: "Yosh kelin-kuyovga sovg‘a",
  TEXT_GIFT_DESC_UZ:
    "Tashrifingiz va ezgu tilaklaringiz biz uchun eng yaxshi sovg‘a. Agar boshqacha quvontirmoqchi bo‘lsangiz, minnatdorchilik bilan qabul qilamiz.",
};

const insertDefault = db.prepare(
  "INSERT OR IGNORE INTO config (key, value) VALUES (?, ?)"
);
const insertMany = db.transaction(() => {
  for (const [key, value] of Object.entries(DEFAULT_CONFIG)) {
    insertDefault.run(key, value);
  }
});
insertMany();

export const getConfig = (): Record<string, string> => {
  const rows = db.prepare("SELECT key, value FROM config").all() as {
    key: string;
    value: string;
  }[];
  return Object.fromEntries(rows.map((r) => [r.key, r.value]));
};

export const setConfig = (key: string, value: string): void => {
  db.prepare("INSERT OR REPLACE INTO config (key, value) VALUES (?, ?)").run(
    key,
    value
  );
};

export const getDbPath = () => DB_FILE;
export default db;
