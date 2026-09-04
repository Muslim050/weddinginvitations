import PhoneFrame from "./PhoneFrame";
import Screen from "./Screen";
import type { Shot } from "@/lib/shots";

/**
 * Живой шаблон в рамке телефона: внутри крутится настоящий сайт-приглашение,
 * а не снимок экрана. Гость на лендинге листает и трогает ровно то же, что
 * получит его собственный гость.
 *
 * Пока демо не выложено (`src` пустой), показываем снимок — пустая рамка
 * выглядит как поломка, а снимок хотя бы честно показывает шаблон.
 */
export default function LiveScreen({
  src,
  title,
  fallback,
  sizes,
  glow = false,
  className = "",
  priority = false,
}: {
  /** Адрес демо. Пустая строка — демо ещё не выложено. */
  src: string;
  title: string;
  fallback: Shot;
  sizes: string;
  glow?: boolean;
  className?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <Screen
        shot={fallback}
        glow={glow}
        sizes={sizes}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <PhoneFrame glow={glow} className={className}>
      <iframe
        src={src}
        title={title}
        // Демо тяжёлое: грузим, когда рамка доехала до экрана.
        loading="lazy"
        className="block aspect-[720/1558] w-full border-0"
      />
    </PhoneFrame>
  );
}
