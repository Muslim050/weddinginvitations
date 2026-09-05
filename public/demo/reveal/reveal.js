const themes = {
  oud: {
    className: "oud",
    heroVideo: "/reveal/blossom-oud/hero-bg.mp4",
    coverVideo: "/reveal/blossom-oud/intro-fade.mp4",
    coverPoster: "/reveal/blossom-oud/intro-poster.jpg",
    story: "/reveal/blossom-oud/flower-decor.png",
    ornament: "/reveal/blossom-oud/line-flower.png",
    women: "/reveal/blossom-oud/dress-attire.png",
    men: "/reveal/blossom-oud/dress-attire.png",
    venue: "/reveal/blossom-oud/venue-illustration.png",
    footer: "/reveal/blossom-oud/footer-chandelier.png",
  },
  azure: {
    className: "azure",
    hero: "/reveal/thanu-jathu/hero.png",
    story: "/reveal/thanu-jathu/timeline-photo.png",
    ornament: "/reveal/thanu-jathu/intro-icon.png",
    women: "/reveal/thanu-jathu/dress-women-1.png",
    men: "/reveal/thanu-jathu/dress-men-1.png",
    venue: "/reveal/thanu-jathu/timeline-photo.png",
    footer: "/reveal/thanu-jathu/footer-icon.png",
  },
  light: {
    className: "light",
    hero: "/reveal/light-design/couple-1.jpg",
    seal: "/reveal/light-design/cover-seal.png",
    story: "/reveal/light-design/couple-2.jpg",
    ornament: "/reveal/light-design/line.png",
    women: "/reveal/light-design/dress-women.png",
    men: "/reveal/light-design/dress-men.png",
    venue: "/reveal/light-design/couple-2.jpg",
    footer: "/reveal/light-design/decor.png",
  },
  garden: {
    className: "garden",
    hero: "/reveal/sacred-garden/garden-photo.jpg",
    cover: "/reveal/sacred-garden/cover-envelope.png",
    story: "/reveal/sacred-garden/couple-photo.jpg",
    ornament: "/reveal/sacred-garden/ornament.png",
    women: "/reveal/sacred-garden/left-element.png",
    men: "/reveal/sacred-garden/right-element.png",
    venue: "/reveal/sacred-garden/venue.png",
    footer: "/reveal/sacred-garden/peony.png",
  },
};

const copy = {
  uz: {
    heroKicker: "TO‘Y KUNI", groom: "Azizbek", bride: "Madina", heroNote: "Ikki qalb · Bir taqdir",
    date: "12-Sentabr, 2026", welcomeLabel: "AZIZ DO‘STLAR VA OILA", welcomeTitle: "Sizni taklif qilamiz",
    welcomeText: "Hayotimizning eng quvonchli kunini eng yaqin insonlarimiz bilan baham ko‘rishdan baxtiyormiz. Ushbu unutilmas damni siz bilan birga nishonlashni istaymiz.",
    whenLabel: "SANA", whenTitle: "Qachon?", whereLabel: "MANZIL", whereTitle: "Qayerda?", city: "Toshkent",
    programLabel: "BAYRAM DASTURI", programTitle: "Tadbir dasturi", program1: "Mehmonlarni kutib olish", program2: "Nikoh marosimi", program3: "Ziyofat", program4: "Tort kesish", program5: "Raqs va musiqa",
    countdownLabel: "TO‘YGA QADAR", days: "KUN", hours: "SOAT", minutes: "DAQIQA", seconds: "SONIYA",
    attireLabel: "TAVSIYA", attireTitle: "Kiyim tarzi", attireText: "Bayramimiz uslubiga mos nafis libos tanlasangiz, juda xursand bo‘lamiz.", women: "Ayollar", womenText: "Nafis kechki libos.", men: "Erkaklar", menText: "Klassik kostyum.",
    venueTitle: "Grand Emerald Hall", address: "Toshkent, Yunusobod tumani", map: "Xaritada ko‘rish", calendar: "Kalendarga",
    rsvpTitle: "Ishtirokingizni tasdiqlang", rsvpText: "Bayramni yaxshi tayyorlashimiz uchun javobingizni oldindan bildiring.", rsvpYes: "Ha, bajonidil!", rsvpNo: "Afsuski, kela olmayman", namePlaceholder: "Ismingiz va familiyangiz", wishPlaceholder: "Tilak (ixtiyoriy)", send: "Yuborish", sent: "Rahmat! Javobingiz qabul qilindi.",
    footerWish: "Sizni ko‘rishni intiqlik bilan kutamiz!", coverLabel: "NIKOH TAKLIFNOMASI", coverTitle: "Siz taklif qilingansiz!", open: "OCHISH UCHUN BOSING",
  },
  ru: {
    heroKicker: "ДЕНЬ СВАДЬБЫ", groom: "Азизбек", bride: "Мадина", heroNote: "Два сердца · Одна судьба",
    date: "12 сентября 2026", welcomeLabel: "ДОРОГИЕ ДРУЗЬЯ И РОДНЫЕ", welcomeTitle: "Приглашаем вас",
    welcomeText: "Мы счастливы разделить самый радостный день нашей жизни с близкими людьми. Будем рады провести этот незабываемый вечер вместе с вами.",
    whenLabel: "ДАТА", whenTitle: "Когда?", whereLabel: "МЕСТО", whereTitle: "Где?", city: "Ташкент",
    programLabel: "ПРОГРАММА ВЕЧЕРА", programTitle: "Программа", program1: "Сбор гостей", program2: "Церемония никоха", program3: "Праздничный ужин", program4: "Свадебный торт", program5: "Танцы и музыка",
    countdownLabel: "ДО СВАДЬБЫ", days: "ДНЕЙ", hours: "ЧАСОВ", minutes: "МИНУТ", seconds: "СЕКУНД",
    attireLabel: "РЕКОМЕНДАЦИЯ", attireTitle: "Дресс-код", attireText: "Будем рады, если ваши образы поддержат элегантное настроение нашего праздника.", women: "Для неё", womenText: "Элегантное вечернее платье.", men: "Для него", menText: "Классический костюм.",
    venueTitle: "Grand Emerald Hall", address: "Ташкент, Юнусабадский район", map: "Открыть карту", calendar: "В календарь",
    rsvpTitle: "Подтвердите присутствие", rsvpText: "Пожалуйста, сообщите заранее, сможете ли вы разделить этот день с нами.", rsvpYes: "Да, с удовольствием!", rsvpNo: "К сожалению, не смогу", namePlaceholder: "Ваши имя и фамилия", wishPlaceholder: "Пожелание (необязательно)", send: "Отправить", sent: "Спасибо! Ваш ответ принят.",
    footerWish: "С нетерпением ждём встречи!", coverLabel: "СВАДЕБНОЕ ПРИГЛАШЕНИЕ", coverTitle: "Вы приглашены!", open: "НАЖМИТЕ, ЧТОБЫ ОТКРЫТЬ",
  },
};

const queryTheme = new URLSearchParams(location.search).get("theme");
const themeName = Object.hasOwn(themes, queryTheme) ? queryTheme : "garden";
const theme = themes[themeName];
document.body.dataset.theme = themeName;
document.body.classList.add(theme.className);

const setSource = (id, source) => {
  const element = document.getElementById(id);
  if (!element || !source) return;
  element.src = source;
};

setSource("hero-image", theme.hero);
setSource("story-image", theme.story);
setSource("welcome-ornament", theme.ornament);
setSource("women-image", theme.women);
setSource("men-image", theme.men);
setSource("venue-image", theme.venue);
setSource("footer-image", theme.footer);
setSource("cover-image", theme.cover);
setSource("cover-seal", theme.seal);

const heroVideo = document.getElementById("hero-video");
if (theme.heroVideo) {
  heroVideo.src = theme.heroVideo;
  heroVideo.autoplay = true;
  heroVideo.play().catch(() => {});
}

const coverVideo = document.getElementById("cover-video");
if (theme.coverVideo) {
  coverVideo.src = theme.coverVideo;
  coverVideo.poster = theme.coverPoster;
  coverVideo.autoplay = true;
  coverVideo.play().catch(() => {});
}

let language = "uz";
function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.title = language === "ru" ? "Азизбек и Мадина — приглашение" : "Azizbek va Madina — taklifnoma";
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = copy[language][element.dataset.copy];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-copy-placeholder]").forEach((element) => {
    const value = copy[language][element.dataset.copyPlaceholder];
    if (value) element.placeholder = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
}

document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));

const cover = document.getElementById("cover");
const music = document.getElementById("music");
const sound = document.getElementById("sound");
cover.addEventListener("click", () => {
  cover.classList.add("is-open");
  music.play().catch(() => {});
  sound.textContent = "♫";
});
sound.addEventListener("click", () => {
  if (music.paused) { music.play().catch(() => {}); sound.textContent = "♫"; }
  else { music.pause(); sound.textContent = "♪"; }
});

const targetDate = new Date("2026-09-12T18:00:00+05:00").getTime();
function updateCountdown() {
  const distance = Math.max(0, targetDate - Date.now());
  const values = [Math.floor(distance / 86400000), Math.floor(distance / 3600000) % 24, Math.floor(distance / 60000) % 60, Math.floor(distance / 1000) % 60];
  document.querySelectorAll("#countdown b").forEach((element, index) => { element.textContent = String(values[index]).padStart(2, "0"); });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
document.querySelectorAll(".reveal-on-scroll").forEach((element) => observer.observe(element));

document.getElementById("calendar").addEventListener("click", () => {
  const event = ["BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT", "DTSTART:20260912T130000Z", "DTEND:20260912T180000Z", "SUMMARY:Azizbek & Madina", "LOCATION:Grand Emerald Hall, Tashkent", "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([event], { type: "text/calendar" }));
  link.download = "azizbek-madina.ics";
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
});

document.getElementById("rsvp-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.getElementById("rsvp-status").textContent = copy[language].sent;
  event.currentTarget.reset();
});

applyLanguage("uz");
