"use client";

import { useEffect, useRef } from "react";

/**
 * Мост между приглашением и лендингом, который показывает его в рамке телефона.
 *
 * Лендинг не может читать прокрутку приглашения напрямую: демо живёт на другом
 * origin, и браузер такой доступ запрещает. Поэтому о текущем экране приглашение
 * сообщает само, а команду «покажи такой-то экран» принимает через postMessage.
 *
 * В отличие от Chinor здесь прокручивается не окно, а контейнер со слайдами, и
 * появляется он не сразу — стартовый экран держит сцену несколько секунд.
 *
 * Вне рамки мост не делает ничего: обычный гость не должен платить за него
 * ни одним обработчиком.
 */

/** Экраны, о которых лендинг рассказывает в блоке «Так это увидит гость». */
const STEPS = [
  /** Стартовый экран — самый верх, отдельной секции у него нет. */
  { step: "open", selector: null },
  { step: "event", selector: "#event" },
  { step: "rsvp", selector: "#rsvp" },
  { step: "wishes", selector: "#wishes" },
] as const;

const SCROLLER = "#invitationScroll";

type Props = {
  /** Приглашение уже открыто: пока нет — слайдов в разметке ещё нет. */
  opened: boolean;
  onOpen: () => void;
};

export default function TourBridge({ opened, onOpen }: Props) {
  /*
   * Состояние моста — в ref: открытие приглашения меняет `opened`, и держи мы
   * его в зависимостях эффекта, тот пересоздавался бы вместе со слушателями,
   * теряя незаконченную команду ровно в момент открытия.
   */
  const state = useRef({ opened, onOpen });
  state.current = { opened, onOpen };

  useEffect(() => {
    if (typeof window === "undefined" || window.parent === window) return;

    let last = "";
    /** Куда едет прокрутка по команде лендинга. Пока едем — не отчитываемся. */
    let pending: string | null = null;
    let release: number | undefined;
    let scroller: HTMLElement | null = null;

    const post = (step: string) => {
      if (step === last) return;
      last = step;
      window.parent.postMessage({ source: "nikoh-preview", type: "step", step }, "*");
    };

    const current = () => {
      // Активен последний экран, чья верхушка уже поднялась выше середины рамки.
      let active: string = STEPS[0].step;
      if (!scroller) return active;
      const box = scroller.getBoundingClientRect();
      for (const { step, selector } of STEPS) {
        if (!selector) continue;
        const el = scroller.querySelector(selector);
        if (el && el.getBoundingClientRect().top - box.top <= box.height * 0.5) {
          active = step;
        }
      }
      return active;
    };

    /** Гость сам взялся за прокрутку — команда больше не главная. */
    const unlock = () => {
      pending = null;
      window.clearTimeout(release);
    };

    const report = () => {
      const active = current();
      // Экраны, пролетающие мимо во время команды, — не выбор гостя.
      if (pending) {
        if (active !== pending) return;
        unlock();
      }
      post(active);
    };

    /*
     * Контейнер появляется вместе с основным контентом, через несколько секунд
     * после загрузки. Ждём его и только тогда начинаем слушать прокрутку.
     */
    let attach: number | undefined;
    const findScroller = () => {
      scroller = document.querySelector<HTMLElement>(SCROLLER);
      if (!scroller) {
        attach = window.setTimeout(findScroller, 200);
        return;
      }
      scroller.addEventListener("scroll", report, { passive: true });
      scroller.addEventListener("wheel", unlock, { passive: true });
      scroller.addEventListener("touchstart", unlock, { passive: true });
      report();
    };
    findScroller();

    const onMessage = (e: MessageEvent) => {
      if (e.source !== window.parent) return;
      const data = e.data;
      if (!data || data.source !== "nikoh-tour" || data.type !== "goto") return;

      const target = STEPS.find((s) => s.step === data.step);
      if (!target) return;

      // Слайды живут под кнопкой «Открыть приглашение» — сначала открываем.
      if (!state.current.opened && target.selector) state.current.onOpen();

      pending = target.step;
      // Если доехать не удалось, отчёты не должны замолчать навсегда.
      window.clearTimeout(release);
      release = window.setTimeout(unlock, 12_000);

      /*
       * Слайда может ещё не быть: стартовый экран держит сцену около семи
       * секунд. Пробуем, пока он не появится, а не гадаем одной задержкой.
       */
      let tries = 60;
      const reach = () => {
        const box = scroller ?? document.querySelector<HTMLElement>(SCROLLER);
        scroller = box ?? scroller;

        if (box) {
          if (!target.selector) {
            box.scrollTo({ top: 0, behavior: "smooth" });
            window.setTimeout(report, 400);
            return;
          }
          const el = box.querySelector(target.selector);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // Прокрутка доезжает не мгновенно, а событие scroll во вкладке
            // в фоне может и не прийти — подтверждаем позицию сами.
            window.setTimeout(report, 400);
            window.setTimeout(report, 900);
            return;
          }
        }
        if (--tries > 0) window.setTimeout(reach, 200);
      };
      reach();
    };

    window.addEventListener("message", onMessage);
    // Лендинг мог выбрать шаг, пока приглашение ещё грузилось: пусть повторит.
    window.parent.postMessage({ source: "nikoh-preview", type: "ready" }, "*");
    return () => {
      window.clearTimeout(attach);
      window.clearTimeout(release);
      window.removeEventListener("message", onMessage);
      scroller?.removeEventListener("scroll", report);
      scroller?.removeEventListener("wheel", unlock);
      scroller?.removeEventListener("touchstart", unlock);
    };
  }, []);

  return null;
}
