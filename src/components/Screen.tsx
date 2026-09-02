import Image from "next/image";
import PhoneFrame from "./PhoneFrame";
import { SHOT, type Shot } from "@/lib/shots";

/** Реальный экран шаблона в рамке телефона. */
export default function Screen({
  shot,
  priority = false,
  glow = true,
  sizes = "(max-width: 640px) 70vw, 300px",
  className = "",
}: {
  shot: Shot;
  priority?: boolean;
  glow?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <PhoneFrame glow={glow} className={className}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={SHOT.width}
        height={SHOT.height}
        sizes={sizes}
        priority={priority}
        // Снимки уже сжаты и подогнаны по ширине — оптимизатор ничего не добавит,
        // зато кэширует их по URL и отдаёт прежний кадр после пересъёмки.
        unoptimized
        className="block h-auto w-full"
      />
    </PhoneFrame>
  );
}
