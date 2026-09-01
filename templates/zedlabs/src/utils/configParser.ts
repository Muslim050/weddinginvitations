import type { AppConfig } from "../types";
import type { Lang } from "../i18n";

export function parseConfig(
  raw: Record<string, string>,
  lang: Lang = "ru"
): AppConfig {
  // Узбекская версия значения хранится в ключе с суффиксом _UZ.
  const pick = (key: string): string | undefined => {
    if (lang === "uz") {
      const localized = raw[`${key}_UZ`];
      if (localized) return localized;
    }
    return raw[key];
  };
  const parseJson = <T>(str: string, fallback: T): T => {
    try {
      return JSON.parse(str) as T;
    } catch {
      return fallback;
    }
  };

  return {
    couple: {
      bride: {
        name: pick("BRIDE_NICKNAME") ?? "Bride",
        fullName: pick("BRIDE_FULLNAME") ?? "Bride",
        parents: pick("BRIDE_PARENTS") ?? "",
        instagram: pick("BRIDE_INSTAGRAM") ?? "",
        image: pick("BRIDE_IMAGE") ?? "https://placehold.co/600x800",
      },
      groom: {
        name: pick("GROOM_NICKNAME") ?? "Groom",
        fullName: pick("GROOM_FULLNAME") ?? "Groom",
        parents: pick("GROOM_PARENTS") ?? "",
        instagram: pick("GROOM_INSTAGRAM") ?? "",
        image: pick("GROOM_IMAGE") ?? "https://placehold.co/600x800",
      },
    },
    venue: {
      name: pick("VENUE_NAME") ?? "",
      address: pick("VENUE_ADDRESS") ?? "",
      latitude: parseFloat(pick("VENUE_LAT") ?? "0"),
      longitude: parseFloat(pick("VENUE_LNG") ?? "0"),
    },
    events: {
      akad: {
        title: pick("AKAD_TITLE") ?? "Akad Nikah",
        day: pick("AKAD_DAY") ?? "",
        date: pick("AKAD_DATE") ?? "",
        startTime: pick("AKAD_START") ?? "",
        endTime: pick("AKAD_END") ?? "",
        startDateTime: new Date(
          pick("AKAD_ISO_START") ?? "2025-01-01T08:00:00+07:00"
        ),
        endDateTime: new Date(pick("AKAD_ISO_END") ?? "2025-01-01T10:00:00+07:00"),
      },
      resepsi: {
        title: pick("RESEPSI_TITLE") ?? "Resepsi",
        day: pick("RESEPSI_DAY") ?? "",
        date: pick("RESEPSI_DATE") ?? "",
        startTime: pick("RESEPSI_START") ?? "",
        endTime: pick("RESEPSI_END") ?? "",
        startDateTime: new Date(
          pick("RESEPSI_ISO_START") ?? "2025-01-01T11:00:00+07:00"
        ),
        endDateTime: new Date(
          pick("RESEPSI_ISO_END") ?? "2025-01-01T14:00:00+07:00"
        ),
      },
    },
    hero: {
      image: pick("HERO_IMAGE") ?? "",
      city: pick("HERO_CITY") ?? "",
    },
    music: {
      url: pick("MUSIC_URL") ?? "",
    },
    rsvp: {
      maxGuests: parseInt(pick("RSVP_MAX_GUESTS") ?? "10", 10),
    },
    bankAccounts: parseJson(pick("BANK_ACCOUNTS") ?? "[]", []),
    loveStory: parseJson(pick("LOVE_STORY") ?? "[]", []),
    galleryImages: parseJson(pick("GALLERY_IMAGES") ?? "[]", []),
    text: {
      opening: {
        salam: pick("TEXT_SALAM_OPENING") ?? "",
      },
      quote: {
        ar_rum: pick("TEXT_QUOTE_AR_RUM") ?? "",
        source: pick("TEXT_QUOTE_SOURCE") ?? "",
      },
      invitation: pick("TEXT_INVITATION") ?? "",
      closing: {
        text: pick("TEXT_CLOSING") ?? "",
        salam: pick("TEXT_SALAM_CLOSING") ?? "",
        signature: pick("TEXT_SIGNATURE") ?? "",
        family: pick("TEXT_FAMILY") ?? "",
      },
      gift: {
        title: pick("TEXT_GIFT_TITLE") ?? "",
        desc: pick("TEXT_GIFT_DESC") ?? "",
      },
    },
    telegram: {
      botToken: pick("TELEGRAM_BOT_TOKEN") ?? "",
      chatId: pick("TELEGRAM_CHAT_ID") ?? "",
    },
  };
}
