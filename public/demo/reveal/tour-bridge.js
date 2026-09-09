/*
 * Мост между приглашением и лендингом, который показывает его в рамке телефона.
 *
 * Лендинг не читает прокрутку приглашения сам: рамка может стоять и на другом
 * origin, где браузер такой доступ запрещает. Поэтому о текущем экране
 * приглашение сообщает само, а команду «покажи такой-то экран» принимает
 * через postMessage.
 *
 * Вне рамки мост не делает ничего: обычный гость не должен платить за него
 * ни одним обработчиком.
 */
(function () {
  if (window.parent === window) return;

  /*
   * Экраны, о которых лендинг рассказывает в блоке «Так это увидит гость».
   * Секции здесь размечены классами, а не id, поэтому и селекторы такие.
   * Книги пожеланий у Reveal нет — поздравление пишут в анкете, поэтому
   * последний шаг ведёт на прощальный экран.
   */
  var STEPS = [
    { step: "open", selector: null },
    { step: "event", selector: ".details" },
    { step: "rsvp", selector: ".rsvp" },
    { step: "wishes", selector: "footer" },
  ];

  var last = "";
  /** Куда едет прокрутка по команде лендинга. Пока едем — не отчитываемся. */
  var pending = null;
  var release;

  function post(step) {
    if (step === last) return;
    last = step;
    window.parent.postMessage({ source: "nikoh-preview", type: "step", step: step }, "*");
  }

  function current() {
    // Активен последний экран, чья верхушка уже поднялась выше середины окна.
    var active = STEPS[0].step;
    for (var i = 0; i < STEPS.length; i++) {
      if (!STEPS[i].selector) continue;
      var el = document.querySelector(STEPS[i].selector);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
        active = STEPS[i].step;
      }
    }
    return active;
  }

  /** Гость сам взялся за прокрутку — команда больше не главная. */
  function unlock() {
    pending = null;
    clearTimeout(release);
  }

  function report() {
    var active = current();
    // Экраны, пролетающие мимо во время команды, — не выбор гостя.
    if (pending) {
      if (active !== pending) return;
      unlock();
    }
    post(active);
  }

  /** Обложка ещё закрывает приглашение: под ней листать нечего. */
  function closed() {
    var cover = document.querySelector(".cover");
    return !!cover && !cover.classList.contains("is-open");
  }

  function onMessage(e) {
    if (e.source !== window.parent) return;
    var data = e.data;
    if (!data || data.source !== "nikoh-tour" || data.type !== "goto") return;

    var target = null;
    for (var i = 0; i < STEPS.length; i++) {
      if (STEPS[i].step === data.step) target = STEPS[i];
    }
    if (!target) return;

    // Открываем обложку сами: иначе гость увидит команду без результата.
    if (closed() && target.selector) {
      var cover = document.querySelector(".cover");
      if (cover) cover.click();
    }

    pending = target.step;
    // Если доехать не удалось, отчёты не должны замолчать навсегда.
    clearTimeout(release);
    release = setTimeout(unlock, 4000);

    // Обложка уходит с анимацией — пробуем, пока цель не станет достижимой.
    var tries = 25;
    (function reach() {
      if (!target.selector) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(report, 400);
        return;
      }
      var el = document.querySelector(target.selector);
      if (el && !closed()) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Прокрутка доезжает не мгновенно, а событие scroll во вкладке в фоне
        // может и не прийти — подтверждаем позицию сами.
        setTimeout(report, 400);
        setTimeout(report, 900);
        return;
      }
      if (--tries > 0) setTimeout(reach, 160);
    })();
  }

  window.addEventListener("scroll", report, { passive: true });
  window.addEventListener("wheel", unlock, { passive: true });
  window.addEventListener("touchstart", unlock, { passive: true });
  window.addEventListener("message", onMessage);

  report();
  // Лендинг мог выбрать шаг, пока приглашение ещё грузилось: пусть повторит.
  window.parent.postMessage({ source: "nikoh-preview", type: "ready" }, "*");
})();
