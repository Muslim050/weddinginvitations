"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import PhoneFrame from "./PhoneFrame";
import Screen from "./Screen";
import type { Shot } from "@/lib/shots";

/**
 * Вьюпорт, в котором шаблон рендерится внутри рамки, и его высота в пропорции
 * снимка. Рамка на странице уже (около 280px), а вёрстка приглашения рассчитана
 * на телефон — без этого длинные имена обрезаются там, где на реальном телефоне
 * помещаются. Поэтому рендерим в телефонную ширину и ужимаем результат.
 */
const DEVICE_WIDTH = 390;
const DEVICE_HEIGHT = Math.round((DEVICE_WIDTH * 1558) / 720);

/**
 * Живой шаблон в рамке телефона: внутри крутится настоящий сайт-приглашение,
 * а не снимок экрана.
 *
 * Снимок — не «заглушка на потом», а рабочий запасной вариант. Демо показываем
 * только после того, как убедились, что оно отвечает: упавший или заблокированный
 * демо-сервер иначе рисует в рамке телефона «битую страницу», и лендинг выглядит
 * сломанным ровно там, где должен вызывать доверие.
 */
export default function LiveScreen({
  src,
  title,
  fallback,
  sizes,
  glow = false,
  className = "",
  priority = false,
  eager = false,
  onLive,
  frameRef,
}: {
  /** Адрес демо. Пустая строка — демо ещё не выложено. */
  src: string;
  title: string;
  fallback: Shot;
  sizes: string;
  glow?: boolean;
  className?: string;
  priority?: boolean;
  /** Рамка на первом экране — грузим демо сразу, а не по доезду. */
  eager?: boolean;
  /** Сообщает наружу, показываем ли живое демо: подписи не должны врать. */
  onLive?: (live: boolean) => void;
  /** Доступ к рамке для команд шаблону через postMessage. */
  frameRef?: React.Ref<HTMLIFrameElement>;
}) {
  const [live, setLive] = useState(false);
  const [scale, setScale] = useState(1);
  const viewport = useRef<HTMLDivElement>(null);

  // В ref, чтобы стрелка из родителя не перезапускала проверку на каждый рендер.
  const report = useRef(onLive);
  useEffect(() => {
    report.current = onLive;
  }, [onLive]);

  useEffect(() => {
    setLive(false);
    report.current?.(false);
    if (!src) return;

    let cancelled = false;
    const stop = new AbortController();
    // Демо не обязано быть быстрым, но рамка не должна ждать его вечно.
    const timer = setTimeout(() => stop.abort(), 4000);

    /*
     * `no-cors` отдаёт непрозрачный ответ — прочитать его нельзя, но сам факт
     * ответа отличает живое демо от упавшего. Это ловит и лежащий сервер, и
     * заблокированный запрос; заголовки вроде X-Frame-Options так не увидеть.
     */
    fetch(src, { mode: "no-cors", signal: stop.signal })
      .then(() => {
        if (cancelled) return;
        setLive(true);
        report.current?.(true);
      })
      .catch(() => {
        /* демо недоступно — остаёмся на снимке */
      })
      .finally(() => clearTimeout(timer));

    return () => {
      cancelled = true;
      clearTimeout(timer);
      stop.abort();
    };
  }, [src]);

  // Рамка резиновая (в hero одна ширина, в модалке другая) — коэффициент
  // считаем по факту, а не по вшитым в вёрстку числам.
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DEVICE_WIDTH);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [live]);

  if (!src || !live) {
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
      <div ref={viewport} className="relative aspect-[720/1558] w-full overflow-hidden">
        <iframe
          ref={frameRef}
          src={src}
          title={title}
          sandbox="allow-downloads allow-forms allow-popups allow-same-origin allow-scripts"
          // Демо тяжёлое: ниже первого экрана грузим, когда рамка доехала.
          loading={eager ? "eager" : "lazy"}
          width={DEVICE_WIDTH}
          height={DEVICE_HEIGHT}
          style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
          className="absolute left-0 top-0 border-0"
        />
      </div>
    </PhoneFrame>
  );
}
