import { useEffect, useRef } from "react";

/**
 * Мост между приглашением и лендингом, который показывает его в рамке телефона.
 *
 * Лендинг не может читать прокрутку приглашения напрямую: демо живёт на другом
 * origin, и браузер такой доступ запрещает. Поэтому о текущем экране приглашение
 * сообщает само, а команду «покажи такой-то экран» принимает через postMessage.
 *
 * Вне рамки мост не делает ничего: обычный гость не должен платить за него
 * ни одним обработчиком.
 */

/** Экраны, о которых лендинг рассказывает в блоке «Так это увидит гость». */
const STEPS = [
  /** Конверт и первый экран — самый верх страницы, отдельной секции у него нет. */
  { step: "open", selector: null },
  { step: "event", selector: "#event" },
  { step: "rsvp", selector: "#rsvp" },
  { step: "wishes", selector: "#wishes" },
] as const;

type Props = {
  /** Конверт уже открыт: пока нет — листать нечего. */
  opened: boolean;
  onOpen: () => void;
};

export default function TourBridge({ opened, onOpen }: Props) {
  /*
   * Всё состояние моста — в ref. Открытие конверта меняет `opened`, и если бы
   * оно стояло в зависимостях эффекта, тот пересоздавался бы вместе со всеми
   * слушателями: незаконченная команда терялась бы ровно в момент открытия,
   * а свежий отчёт сбрасывал шаг, выбранный человеком на лендинге.
   */
  const state = useRef({ opened, onOpen });
  state.current = { opened, onOpen };

  useEffect(() => {
    if (typeof window === "undefined" || window.parent === window) return;

    let last = "";
    /** Куда едет прокрутка по команде лендинга. Пока едем — не отчитываемся. */
    let pending: string | null = null;
    let release: number | undefined;

    const post = (step: string) => {
      if (step === last) return;
      last = step;
      window.parent.postMessage({ source: "nikoh-preview", type: "step", step }, "*");
    };

    const current = () => {
      // Активен последний экран, чья верхушка уже поднялась выше середины окна.
      let active: string = STEPS[0].step;
      for (const { step, selector } of STEPS) {
        if (!selector) continue;
        const top = document.querySelector(selector)?.getBoundingClientRect().top;
        if (top !== undefined && top <= window.innerHeight * 0.5) active = step;
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

    const onMessage = (e: MessageEvent) => {
      if (e.source !== window.parent) return;
      const data = e.data;
      if (!data || data.source !== "nikoh-tour" || data.type !== "goto") return;

      const target = STEPS.find((s) => s.step === data.step);
      if (!target) return;

      // Из-под закрытого конверта прокручивать нечего — сначала открываем его.
      if (!state.current.opened && target.selector) state.current.onOpen();

      pending = target.step;
      // Если доехать не удалось, отчёты не должны замолчать навсегда.
      window.clearTimeout(release);
      release = window.setTimeout(unlock, 2000);

      if (!target.selector) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        report();
        return;
      }

      /*
       * Конверт исчезает не мгновенно, и сразу после команды нужной секции в
       * разметке ещё нет. Пробуем несколько раз подряд, вместо того чтобы
       * гадать с одной задержкой.
       */
      let tries = 12;
      const reach = () => {
        const el = document.querySelector(target.selector!);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // Прокрутка доезжает не мгновенно, а событие scroll во вкладке в фоне
          // может и не прийти — подтверждаем позицию сами.
          window.setTimeout(report, 400);
          window.setTimeout(report, 900);
          return;
        }
        if (--tries > 0) window.setTimeout(reach, 120);
      };
      window.setTimeout(reach, 60);
    };

    report();
    // Лендинг мог выбрать шаг, пока приглашение ещё грузилось: пусть повторит.
    window.parent.postMessage({ source: "nikoh-preview", type: "ready" }, "*");
    window.addEventListener("scroll", report, { passive: true });
    window.addEventListener("message", onMessage);
    window.addEventListener("wheel", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });
    return () => {
      window.clearTimeout(release);
      window.removeEventListener("scroll", report);
      window.removeEventListener("message", onMessage);
      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  return null;
}
