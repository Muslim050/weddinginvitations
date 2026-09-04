(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var e = [`uz`, `ru`],
  t = { uz: `UZ`, ru: `РУ` },
  n = `invitation-lang`;
function r(t) {
  return typeof t == `string` && e.includes(t);
}
function i(e) {
  return r(e) ? e : `uz`;
}
var a = {
    uz: {
      "doc.title": `Azizbek va Madina — taklifnoma`,
      "header.title": `Taklifnoma`,
      "header.sound": `Musiqani yoqish yoki o’chirish`,
      "header.language": `Tilni o’zgartirish`,
      "preloader.click": `Bosing`,
      "preloader.scroll": `Pastga suring`,
      "preloader.label": `To’y kuni`,
      "preloader.groom": `Azizbek`,
      "preloader.bride": `Madina`,
      "preloader.date": `05.09.26`,
      "greeting.label": `Bizning to’y kunimiz`,
      "greeting.title": `Aziz mehmon !`,
      "greeting.envelope": `Ochilib, taklifnomani ko’rsatadigan konvert`,
      "bouquet.label": `To’y sanasi`,
      "bouquet.title": `Qachon?`,
      "bouquet.month": `sentabr`,
      "bouquet.time": `18:00`,
      "timeline.title": `Dastur`,
      "timeline.1.hour": `18:00`,
      "timeline.1.what": `Mehmonlar yig’ilishi`,
      "timeline.2.hour": `19:00`,
      "timeline.2.what": `To’y oqshomi dasturi`,
      "timeline.3.hour": `20:00`,
      "timeline.3.what": `Yulduz<br />san’atkorlarning<br />dasturi`,
      "timeline.4.hour": `22:00`,
      "timeline.4.what": `DJ dasturi`,
      "timeline.5.hour": `22:30`,
      "timeline.5.what": `Kechaning yakuni`,
      "location.label": `Qayerda?`,
      "location.title": `Manzil`,
      "location.venue": `Osiyo Grand`,
      "location.street": `Labzak ko’chasi 5, Toshkent`,
      "location.venueAlt": `To’y joyi`,
      "location.directions": `Yo’l ko’rsatish`,
      "location.calendar": `Kalendarga`,
      "location.event": `Azizbek va Madina — to’y`,
      "rsvp.title": `Ishtirokingizni tasdiqlang`,
      "rsvp.lead": `Kela olasizmi,<br />bizga xabar bering.`,
      "rsvp.question": `Kela olasizmi?`,
      "rsvp.yes": `Ha, bajonidil!`,
      "rsvp.no": `Afsuski, kela olmayman.`,
      "rsvp.name": `Ismingiz va familiyangiz`,
      "rsvp.namePlaceholder": `Ulug’bek`,
      "rsvp.message": `Tilak (ixtiyoriy)`,
      "rsvp.send": `Yuborish`,
      "rsvp.needAnswer": `Kela olasizmi, belgilang.`,
      "rsvp.needName": `Iltimos, ismingizni yozing.`,
      "rsvp.notConnected": `Shakl hali ulanmagan — kelin-kuyovga to’g’ridan-to’g’ri ayting.`,
      "rsvp.sending": `Yuborilmoqda…`,
      "rsvp.sent": `Rahmat! Javobingiz bizga yetib bormoqda.`,
      "rsvp.failed": `Yuborib bo’lmadi. Bir oz o’tib yana urinib ko’ring.`,
      "final.wish": `Bu kunni birga<br />o’tkazishdan xursand bo’lamiz.`,
      "final.names": `Azizbek & Madina`,
      "footer.up": `Yuqoriga`,
    },
    ru: {
      "doc.title": `Азизбек и Мадина — приглашение`,
      "header.title": `Приглашение`,
      "header.sound": `Включить или выключить музыку`,
      "header.language": `Сменить язык`,
      "preloader.click": `Нажми`,
      "preloader.scroll": `Листайте вниз`,
      "preloader.label": `День свадьбы`,
      "preloader.groom": `Азизбек`,
      "preloader.bride": `Мадина`,
      "preloader.date": `05.09.26`,
      "greeting.label": `Наш свадебный день`,
      "greeting.title": `Дорогой гость !`,
      "greeting.envelope": `Конверт, который открывается и показывает приглашение`,
      "bouquet.label": `Дата свадьбы`,
      "bouquet.title": `Когда?`,
      "bouquet.month": `сентября`,
      "bouquet.time": `18:00`,
      "timeline.title": `Программа`,
      "timeline.1.hour": `18:00`,
      "timeline.1.what": `Начало торжества`,
      "timeline.2.hour": `19:00`,
      "timeline.2.what": `Программа<br />свадебного вечера`,
      "timeline.3.hour": `20:00`,
      "timeline.3.what": `Выступление<br />артистов`,
      "timeline.4.hour": `22:00`,
      "timeline.4.what": `Выступление DJ`,
      "timeline.5.hour": `22:30`,
      "timeline.5.what": `Кульминация<br />вечера`,
      "location.label": `Где?`,
      "location.title": `Место`,
      "location.venue": `Osiyo Grand`,
      "location.street": `ул. Лабзак, 5, Ташкент`,
      "location.venueAlt": `Место проведения`,
      "location.directions": `Маршрут`,
      "location.calendar": `В календарь`,
      "location.event": `Азизбек и Мадина — свадьба`,
      "rsvp.title": `Подтвердите присутствие`,
      "rsvp.lead": `Сообщите нам,<br />сможете ли вы прийти.`,
      "rsvp.question": `Сможете ли вы прийти?`,
      "rsvp.yes": `Да, с удовольствием!`,
      "rsvp.no": `К сожалению, не смогу.`,
      "rsvp.name": `Ваши имя и фамилия`,
      "rsvp.namePlaceholder": `Егор`,
      "rsvp.message": `Пожелание (необязательно)`,
      "rsvp.send": `Отправить`,
      "rsvp.needAnswer": `Отметьте, сможете ли вы прийти.`,
      "rsvp.needName": `Напишите, пожалуйста, ваше имя.`,
      "rsvp.notConnected": `Форма ещё не подключена — сообщите молодожёнам напрямую.`,
      "rsvp.sending": `Отправляем…`,
      "rsvp.sent": `Спасибо! Ваш ответ уже в пути.`,
      "rsvp.failed": `Не удалось отправить. Попробуйте ещё раз через минуту.`,
      "final.wish": `Будем рады разделить<br />этот день вместе.`,
      "final.names": `Азизбек и Мадина`,
      "footer.up": `Наверх`,
    },
  },
  o = `uz`;
function s() {
  return o;
}
var c = new Set();
function l(e) {
  c.add(e);
}
function u(e, t = o) {
  return a[t][e] ?? a.uz[e] ?? e;
}
function d(e, t, n) {
  for (let r of t.split(`;`)) {
    let [t, i] = r.split(`:`).map((e) => e.trim());
    !t || !i || e.setAttribute(t, u(i, n));
  }
}
function f(e, t = document) {
  let n = e !== o;
  ((o = e),
    (document.documentElement.lang = e),
    (document.title = u(`doc.title`, e)));
  for (let n of t.querySelectorAll(`[data-i18n]`))
    n.textContent = u(n.dataset.i18n ?? ``, e);
  for (let n of t.querySelectorAll(`[data-i18n-html]`)) {
    let t = n.dataset.i18nHtml ?? ``,
      r = a[e][t] ?? a.uz[t];
    r === void 0 ? (n.textContent = t) : (n.innerHTML = r);
  }
  for (let n of t.querySelectorAll(`[data-i18n-attr]`))
    d(n, n.dataset.i18nAttr ?? ``, e);
  if (n) for (let t of c) t(e);
}
function p() {
  try {
    return localStorage.getItem(n);
  } catch {
    return null;
  }
}
function m(e) {
  try {
    localStorage.setItem(n, e);
  } catch {}
}
function h() {
  let e = document.getElementById(`lang`),
    n = document.getElementById(`lang-button`),
    a = document.getElementById(`lang-menu`),
    o = document.getElementById(`lang-code`),
    s = (e) => {
      if ((f(e), m(e), o && (o.textContent = t[e]), a))
        for (let t of a.querySelectorAll(`[data-lang]`))
          t.setAttribute(`aria-selected`, String(t.dataset.lang === e));
    };
  if ((s(i(p())), !e || !n || !a)) return;
  let c = () => {
    (e.classList.remove(`lang--open`),
      n.setAttribute(`aria-expanded`, `false`));
  };
  (n.addEventListener(`click`, (t) => {
    t.stopPropagation();
    let r = e.classList.toggle(`lang--open`);
    n.setAttribute(`aria-expanded`, String(r));
  }),
    a.addEventListener(`click`, (e) => {
      let t = e.target.closest(`[data-lang]`);
      !t || !r(t.dataset.lang) || (s(t.dataset.lang), c());
    }),
    document.addEventListener(`click`, c),
    document.addEventListener(`keydown`, (e) => {
      e.key === `Escape` && c();
    }));
}
function g(e, t, n) {
  return t <= 0 ? !0 : t > e ? !1 : t < e || n;
}
function _() {
  let e = document.getElementById(`site-header`);
  if (!e) return;
  let t = window.scrollY,
    n = !0;
  window.addEventListener(
    `scroll`,
    () => {
      let r = window.scrollY;
      ((n = g(t, r, n)),
        e.classList.toggle(`site-header--hidden`, !n),
        (t = r));
    },
    { passive: !0 },
  );
}
function v(e) {
  return e ? `site-header__sound--playing` : ``;
}
function y() {
  let e = document.getElementById(`sound-toggle`),
    t = document.getElementById(`bg-music`);
  if (!e || !t) return;
  let n = () => {
    let n = !t.paused,
      r = v(n);
    (e.classList.toggle(`site-header__sound--playing`, r !== ``),
      e.setAttribute(`aria-pressed`, String(n)));
  };
  (e.addEventListener(`click`, () => {
    t.paused ? t.play() : t.pause();
  }),
    t.addEventListener(`play`, n),
    t.addEventListener(`pause`, n),
    n());
}
function b(e, t) {
  return e === `idle` && t === `click`
    ? `playing`
    : e === `playing` && t === `video-ended`
      ? `done`
      : e;
}
function x() {
  let e = document.getElementById(`preloader`),
    t = document.getElementById(`preloader-hint`),
    n = document.getElementById(`preloader-click`),
    r = document.getElementById(`sound-toggle`),
    i = document.getElementById(`preloader-video`),
    a = document.getElementById(`bg-music`);
  if (!e || !t || !n || !i) return;
  let o = `idle`;
  (document.body.classList.add(`scroll-locked`), r && (r.disabled = !0));
  let s = () => e.classList.add(`preloader--open`);
  i.addEventListener(`timeupdate`, function e() {
    i.currentTime < 4.2 || (i.removeEventListener(`timeupdate`, e), s());
  });
  let c = () => {
      (s(),
        e.classList.add(`preloader--finished`),
        document.body.classList.remove(`scroll-locked`));
    },
    l = () => {
      ((o = `idle`),
        n.classList.remove(`preloader__click--waiting`),
        t.classList.remove(`preloader__hint--gone`),
        r && (r.disabled = !0),
        a?.pause());
    },
    u = () => {
      (n.classList.remove(`preloader__click--waiting`),
        t.classList.add(`preloader__hint--gone`),
        r && (r.disabled = !1),
        a?.play());
    };
  (n.addEventListener(`click`, () => {
    if (((o = b(o, `click`)), o !== `playing`)) return;
    let e = i.play();
    (i.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA
      ? u()
      : (n.classList.add(`preloader__click--waiting`),
        i.addEventListener(`playing`, u, { once: !0 })),
      e?.catch(l));
  }),
    i.addEventListener(`ended`, () => {
      ((o = b(o, `video-ended`)), o === `done` && c());
    }),
    i.addEventListener(`error`, () => {
      ((o = `done`), c());
    }));
}
var S = new Set(),
  C = !1,
  w = !1;
function T() {
  C = !1;
  for (let e of S) e();
}
function ee() {
  C || ((C = !0), requestAnimationFrame(T));
}
function te(e) {
  return (
    S.add(e),
    w ||
      ((w = !0),
      window.addEventListener(`scroll`, ee, { passive: !0 }),
      window.addEventListener(`resize`, ee, { passive: !0 })),
    e(),
    () => {
      S.delete(e);
    }
  );
}
function ne() {
  return window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches ?? !1;
}
function re() {
  let e = getComputedStyle(document.documentElement).getPropertyValue(
      `--header-height`,
    ),
    t = Number.parseFloat(e);
  return Number.isFinite(t) ? t : 0;
}
var E = null;
function ie() {
  return CSS.supports?.(`height`, `100svh`)
    ? (E?.isConnected ||
        ((E = document.createElement(`div`)),
        E.setAttribute(`aria-hidden`, `true`),
        (E.style.cssText = `position:fixed;top:0;left:0;width:0;height:100svh;visibility:hidden;pointer-events:none`),
        document.body.append(E)),
      E.getBoundingClientRect().height || window.innerHeight)
    : window.innerHeight;
}
function ae(e, t, n = 0) {
  if (!(e > 0) || !(t > 0)) return 1;
  let r = Math.max(0, e - n);
  return Math.min(1, r / t);
}
function D(e) {
  return e > 0 ? (e > 1 ? 1 : e) : 0;
}
function oe(e, t, n) {
  let r = t - n;
  return r <= 0 ? +(e <= 0) : D(-e / r);
}
function se(e, t, n = 0.7) {
  if (t <= 0) return 0;
  let r = n <= 0 ? 1 : D(e / n);
  return Math.min(t - 1, Math.round(r * (t - 1)));
}
function ce(e, t) {
  return `/letter/${t}/frame-${String(e).padStart(2, `0`)}.webp`;
}
function le(e, t) {
  let n = new Image();
  return ((n.decoding = `async`), (n.src = ce(e, t)), n);
}
function ue() {
  let e = document.getElementById(`letter-stage`),
    t = document.getElementById(`letter-canvas`);
  if (!e || !t) return;
  let n = t.getContext(`2d`);
  if (!n) return;
  let r = s(),
    i = Array(60),
    a = -1,
    o = 0,
    c = (e) => {
      let r = i[e];
      !r?.complete ||
        r.naturalWidth === 0 ||
        ((t.width !== r.naturalWidth || t.height !== r.naturalHeight) &&
          ((t.width = r.naturalWidth), (t.height = r.naturalHeight)),
        n.clearRect(0, 0, t.width, t.height),
        n.drawImage(r, 0, 0),
        (a = e));
    },
    u = (e) => {
      let t = i[e];
      if (t) {
        if (t.complete && t.naturalWidth > 0) {
          c(e);
          return;
        }
        t.addEventListener(
          `load`,
          () => {
            a === -1 && e === o && c(e);
          },
          { once: !0 },
        );
      }
    },
    d = () => {
      ((i[o] = le(o, r)), u(o));
    };
  if (ne()) {
    ((o = 59),
      d(),
      l((e) => {
        ((r = e), (i = Array(60)), (a = -1), d());
      }));
    return;
  }
  let f = document.getElementById(`greeting`),
    p = () => {
      f?.style.setProperty(`--fit`, String(ae(ie(), 720, re())));
    };
  (p(), window.addEventListener(`resize`, p, { passive: !0 }));
  let m = !1,
    h = () => {
      m = !0;
      for (let e = 0; e < 60; e += 1) e !== o && (i[e] = le(e, r));
    };
  d();
  let g = document.getElementById(`preloader-video`);
  (g ? g.addEventListener(`playing`, h, { once: !0 }) : h(),
    l((e) => {
      ((r = e), (i = Array(60)), (a = -1), d(), m && h());
    }),
    te(() => {
      let t = e.getBoundingClientRect();
      ((o = se(oe(t.top, t.height, ie()), 60)), o !== a && c(o));
    }));
}
var de = -142,
  fe = 0.55;
function pe(e, t, n) {
  return t <= 0 ? 0 : D((n - e) / t);
}
function me(e) {
  return de + -196 * D(e);
}
function he(e) {
  return D((D(e) - fe) / 0.29999999999999993);
}
function ge() {
  let e = document.getElementById(`bouquet`),
    t = document.getElementById(`bouquet-flowers`),
    n = document.getElementById(`bouquet-date`);
  if (!e || !t || !n) return;
  let r = (e) => {
    ((t.style.top = `${me(e)}px`), (n.style.opacity = String(he(e))));
  };
  if (ne()) {
    r(1);
    return;
  }
  te(() => {
    let t = e.getBoundingClientRect();
    r(pe(t.top, t.height, window.innerHeight));
  });
}
var _e = 0.05,
  ve = 131.5;
function ye(e, t, n) {
  let r = t - n;
  return r <= 0 ? +(e <= 0) : D(-e / r);
}
function be(e, t = 0) {
  return ae(e, 782, t);
}
function xe(e) {
  return D(e) * 524;
}
function Se(e) {
  return D((e - ve) / 524);
}
function Ce(e, t) {
  return D((D(e) - t) / _e);
}
function we() {
  let e = document.getElementById(`timeline`),
    t = document.getElementById(`timeline-frame`),
    n = document.getElementById(`timeline-lock`),
    r = document.getElementById(`timeline-stops`);
  if (!e || !t || !n || !r) return;
  let i = Array.from(r.querySelectorAll(`.timeline__stop`)),
    a = i.map((e) => Se(Number(e.dataset.reach ?? 0))),
    o = (e) => {
      ((n.style.transform = `translateY(${xe(e)}px)`),
        i.forEach((t, n) => {
          t.style.setProperty(`--reveal`, String(Ce(e, a[n] ?? 1)));
        }));
    },
    s = () => {
      t.style.setProperty(`--fit`, String(be(ie(), re())));
    };
  if ((s(), ne())) {
    o(1);
    return;
  }
  (window.addEventListener(`resize`, s, { passive: !0 }),
    te(() => {
      let t = e.getBoundingClientRect();
      o(ye(t.top, t.height, ie()));
    }));
}
function Te(e) {
  return `https://yandex.uz/maps/?text=${encodeURIComponent(e)}`;
}
function Ee(e) {
  let t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(
    e.trim(),
  );
  if (!t) throw Error(`Not a local date-time: ${e}`);
  let [, n, r, i, a, o, s = `00`] = t;
  return `${n}${r}${i}T${a}${o}${s}`;
}
function De(e) {
  return e
    .replace(/\\/g, `\\\\`)
    .replace(/;/g, `\\;`)
    .replace(/,/g, `\\,`)
    .replace(/\r?\n/g, `\\n`);
}
function Oe(e, t = new Date()) {
  let n = `${t.toISOString().slice(0, 19).replace(/[-:]/g, ``)}Z`;
  return `${[
    `BEGIN:VCALENDAR`,
    `VERSION:2.0`,
    `PRODID:-//Wedding Invitation//EN`,
    `CALSCALE:GREGORIAN`,
    `BEGIN:VEVENT`,
    `UID:${Ee(e.start)}-wedding@invitation`,
    `DTSTAMP:${n}`,
    `DTSTART:${Ee(e.start)}`,
    `DTEND:${Ee(e.end)}`,
    `SUMMARY:${De(e.title)}`,
    `LOCATION:${De(e.location)}`,
    ...(e.description ? [`DESCRIPTION:${De(e.description)}`] : []),
    `END:VEVENT`,
    `END:VCALENDAR`,
  ].join(`\r
`)}\r\n`;
}
function ke(e) {
  return Array.from(e.querySelectorAll(`p`))
    .map((e) => e.textContent?.trim() ?? ``)
    .filter(Boolean)
    .join(`, `);
}
function Ae(e, t) {
  let { start: n, end: r, title: i } = e.dataset;
  return !n || !r || !i ? null : { title: i, start: n, end: r, location: t };
}
function je(e) {
  let t = URL.createObjectURL(
      new Blob([e], { type: `text/calendar;charset=utf-8` }),
    ),
    n = document.createElement(`a`);
  ((n.href = t),
    (n.download = `wedding.ics`),
    n.click(),
    requestAnimationFrame(() => URL.revokeObjectURL(t)));
}
function Me() {
  let e = document.getElementById(`location-address`),
    t = document.querySelector(`#location-directions`),
    n = document.getElementById(`location-calendar`);
  if (!e) return;
  let r = e.dataset.mapsQuery?.trim() || ke(e);
  (t && r && (t.href = Te(r)),
    n &&
      n.addEventListener(`click`, () => {
        let e = Ae(n, r);
        e && je(Oe(e));
      }));
}
function Ne(e, t = s()) {
  let n = {};
  for (let [t, r] of new FormData(e)) typeof r == `string` && (n[t] = r);
  return ((n.lang = t), n);
}
function Pe(e, t) {
  return e[t.attendance]
    ? e[t.guest]?.trim()
      ? null
      : `rsvp.needName`
    : `rsvp.needAnswer`;
}
function Fe(e) {
  return new URLSearchParams(e).toString();
}
function Ie(e) {
  return !!e && !e.includes(`SCRIPT_ID`);
}
async function Le(e, t) {
  await fetch(e, {
    method: `POST`,
    mode: `no-cors`,
    headers: { "Content-Type": `application/x-www-form-urlencoded` },
    body: Fe(t),
  });
}
function Re() {
  let e = document.querySelector(`#rsvp-form`),
    t = document.getElementById(`rsvp-status`),
    n = document.querySelector(`#rsvp-send`);
  if (!e || !t || !n) return;
  let r = {
      attendance: e.dataset.attendanceField ?? ``,
      guest: e.dataset.guestField ?? ``,
    },
    i = (r, i = ``) => {
      ((e.dataset.state = r),
        (n.disabled = r === `sending`),
        (t.textContent = i));
    };
  (e.addEventListener(`submit`, async (t) => {
    t.preventDefault();
    let n = Ne(e),
      a = Pe(n, r);
    if (a) {
      i(`error`, u(a));
      return;
    }
    if (!Ie(e.action)) {
      i(`error`, u(`rsvp.notConnected`));
      return;
    }
    i(`sending`, u(`rsvp.sending`));
    try {
      (await Le(e.action, n), i(`sent`, u(`rsvp.sent`)), e.reset());
    } catch {
      i(`error`, u(`rsvp.failed`));
    }
  }),
    e.addEventListener(`input`, () => {
      e.dataset.state === `error` && i(`idle`);
    }));
}
var ze = 317 / 366;
function Be(e, t, n) {
  let r = (n + t) / 2;
  return r <= 0 ? +(e <= 0) : D((n - e) / r);
}
function Ve(e, t, n) {
  return n <= t ? +(e >= n) : D((e - t) / (n - t));
}
function He(e) {
  let t = D(e);
  return t * t * (3 - 2 * t);
}
function Ue(e) {
  let t = D(e);
  return {
    scale: ze + 0.13387978142076506 * He(Ve(t, 0, 0.9)),
    buds: 1 - He(Ve(t, 0.1, 0.7)),
    flowers: He(Ve(t, 0.15, 0.85)),
    text: He(Ve(t, 0.55, 0.95)),
  };
}
function We() {
  let e = document.getElementById(`final`);
  if (!e) return;
  let t = (t) => {
    let n = Ue(t);
    (e.style.setProperty(`--bloom-scale`, String(n.scale)),
      e.style.setProperty(`--buds`, String(n.buds)),
      e.style.setProperty(`--flowers`, String(n.flowers)),
      e.style.setProperty(`--text`, String(n.text)));
  };
  if (ne()) {
    t(1);
    return;
  }
  te(() => {
    let n = e.getBoundingClientRect();
    t(Be(n.top, n.height, window.innerHeight));
  });
}
function Ge(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ke(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var O = (e, t, n) => (n > t ? t : n < e ? e : n),
  k = {},
  qe = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Je = (e) => typeof e == `object` && !!e,
  Ye = (e) => /^0[^.\s]+$/u.test(e);
function Xe(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var A = (e) => e,
  Ze = (...e) => e.reduce((e, t) => (n) => t(e(n))),
  Qe = (e, t, n) => {
    let r = t - e;
    return r ? (n - e) / r : 1;
  },
  $e = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return (Ge(this.subscriptions, e), () => Ke(this.subscriptions, e));
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  j = (e) => e * 1e3,
  M = (e) => e / 1e3,
  et = (e, t) => (t ? (1e3 / t) * e : 0),
  tt = (e, t, n) => {
    let r = t - e;
    return ((((n - e) % r) + r) % r) + e;
  },
  nt = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  rt = 1e-7,
  it = 12;
function at(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = nt(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > rt && ++s < it);
  return o;
}
function ot(e, t, n, r) {
  if (e === t && n === r) return A;
  let i = (t) => at(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : nt(i(e), t, r));
}
var st = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  ct = (e) => (t) => 1 - e(1 - t),
  lt = ot(0.33, 1.53, 0.69, 0.99),
  ut = ct(lt),
  dt = st(ut),
  ft = (e) =>
    e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * ut(e) : 0.5 * (2 - 2 ** (-10 * (e - 1))),
  pt = (e) => 1 - Math.sin(Math.acos(e)),
  mt = ct(pt),
  ht = st(pt),
  gt = ot(0.42, 0, 1, 1),
  _t = ot(0, 0, 0.58, 1),
  vt = ot(0.42, 0, 0.58, 1),
  yt = (e) => Array.isArray(e) && typeof e[0] != `number`;
function bt(e, t) {
  return yt(e) ? e[tt(0, e.length, t)] : e;
}
var xt = (e) => Array.isArray(e) && typeof e[0] == `number`,
  St = {
    linear: A,
    easeIn: gt,
    easeInOut: vt,
    easeOut: _t,
    circIn: pt,
    circInOut: ht,
    circOut: mt,
    backIn: ut,
    backInOut: dt,
    backOut: lt,
    anticipate: ft,
  },
  Ct = (e) => typeof e == `string`,
  wt = (e) => {
    if (xt(e)) {
      e.length;
      let [t, n, r, i] = e;
      return ot(t, n, r, i);
    }
    return Ct(e) ? (St[e], `${e}`, St[e]) : e;
  },
  Tt = [
    `setup`,
    `read`,
    `resolveKeyframes`,
    `preUpdate`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ];
function Et(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      r = !0;
      let a = t;
      ((t = n),
        (n = a),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var Dt = 40;
function Ot(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = Tt.reduce((e, t) => ((e[t] = Et(a)), e), {}),
    {
      setup: s,
      read: c,
      resolveKeyframes: l,
      preUpdate: u,
      update: d,
      preRender: f,
      render: p,
      postRender: m,
    } = o,
    h = () => {
      let a = k.useManualTiming,
        o = a ? i.timestamp : performance.now();
      ((n = !1),
        a ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, Dt), 1)),
        (i.timestamp = o),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        p.process(i),
        m.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(h)));
    },
    g = () => {
      ((n = !0), (r = !0), i.isProcessing || e(h));
    };
  return {
    schedule: Tt.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < Tt.length; t++) o[Tt[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: N,
    cancel: kt,
    state: At,
    steps: jt,
  } = Ot(typeof requestAnimationFrame < `u` ? requestAnimationFrame : A, !0),
  Mt;
function Nt() {
  Mt = void 0;
}
var P = {
    now: () => (
      Mt === void 0 &&
        P.set(
          At.isProcessing || k.useManualTiming
            ? At.timestamp
            : performance.now(),
        ),
      Mt
    ),
    set: (e) => {
      ((Mt = e), queueMicrotask(Nt));
    },
  },
  Pt = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Ft = Pt(`--`),
  It = Pt(`var(--`),
  Lt = (e) => (It(e) ? Rt.test(e.split(`/*`)[0].trim()) : !1),
  Rt =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function zt(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
var F = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  I = { ...F, transform: (e) => O(0, 1, e) },
  Bt = { ...F, default: 1 },
  Vt = (e) => Math.round(e * 1e5) / 1e5,
  Ht = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ut(e) {
  return e == null;
}
var Wt =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Gt = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Wt.test(n) && n.startsWith(e)) ||
      (t && !Ut(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Kt = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Ht);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  qt = (e) => O(0, 255, e),
  Jt = { ...F, transform: (e) => Math.round(qt(e)) },
  L = {
    test: Gt(`rgb`, `red`),
    parse: Kt(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      Jt.transform(e) +
      `, ` +
      Jt.transform(t) +
      `, ` +
      Jt.transform(n) +
      `, ` +
      Vt(I.transform(r)) +
      `)`,
  };
function Yt(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Xt = { test: Gt(`#`), parse: Yt, transform: L.transform },
  Zt = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  R = Zt(`deg`),
  z = Zt(`%`),
  B = Zt(`px`),
  Qt = Zt(`vh`),
  $t = Zt(`vw`),
  en = {
    ...z,
    parse: (e) => z.parse(e) / 100,
    transform: (e) => z.transform(e * 100),
  },
  V = {
    test: Gt(`hsl`, `hue`),
    parse: Kt(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      z.transform(Vt(t)) +
      `, ` +
      z.transform(Vt(n)) +
      `, ` +
      Vt(I.transform(r)) +
      `)`,
  },
  H = {
    test: (e) => L.test(e) || Xt.test(e) || V.test(e),
    parse: (e) =>
      L.test(e) ? L.parse(e) : V.test(e) ? V.parse(e) : Xt.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? L.transform(e)
          : V.transform(e),
    getAnimatableNone: (e) => {
      let t = H.parse(e);
      return ((t.alpha = 0), H.transform(t));
    },
  },
  tn =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function nn(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(Ht)?.length || 0) + (e.match(tn)?.length || 0) > 0
  );
}
var rn = `number`,
  an = `color`,
  on = `var`,
  sn = `var(`,
  cn = "${}",
  ln =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function U(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        ln,
        (e) => (
          H.test(e)
            ? (r.color.push(a), i.push(an), n.push(H.parse(e)))
            : e.startsWith(sn)
              ? (r.var.push(a), i.push(on), n.push(e))
              : (r.number.push(a), i.push(rn), n.push(parseFloat(e))),
          ++a,
          cn
        ),
      )
      .split(cn),
    indexes: r,
    types: i,
  };
}
function un(e) {
  return U(e).values;
}
function dn({ split: e, types: t }) {
  let n = e.length;
  return (r) => {
    let i = ``;
    for (let a = 0; a < n; a++)
      if (((i += e[a]), r[a] !== void 0)) {
        let e = t[a];
        i += e === rn ? Vt(r[a]) : e === an ? H.transform(r[a]) : r[a];
      }
    return i;
  };
}
function fn(e) {
  return dn(U(e));
}
var pn = (e) =>
    typeof e == `number` ? 0 : H.test(e) ? H.getAnimatableNone(e) : e,
  mn = (e, t) =>
    typeof e == `number` ? (t?.trim().endsWith(`/`) ? e : 0) : pn(e);
function hn(e) {
  let t = U(e);
  return dn(t)(t.values.map((e, n) => mn(e, t.split[n])));
}
var W = { test: nn, parse: un, createTransformer: fn, getAnimatableNone: hn };
function gn(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function _n({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = gn(s, r, e + 1 / 3)), (a = gn(s, r, e)), (o = gn(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function vn(e, t) {
  return (n) => (n > 0 ? t : e);
}
var G = (e, t, n) => e + (t - e) * n,
  yn = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  bn = [Xt, L, V],
  xn = (e) => bn.find((t) => t.test(e));
function Sn(e) {
  let t = xn(e);
  if ((`${e}`, !t)) return !1;
  let n = t.parse(e);
  return (t === V && (n = _n(n)), n);
}
var Cn = (e, t) => {
    let n = Sn(e),
      r = Sn(t);
    if (!n || !r) return vn(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = yn(n.red, r.red, e)),
      (i.green = yn(n.green, r.green, e)),
      (i.blue = yn(n.blue, r.blue, e)),
      (i.alpha = G(n.alpha, r.alpha, e)),
      L.transform(i)
    );
  },
  wn = new Set([`none`, `hidden`]);
function Tn(e, t) {
  return wn.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function En(e, t) {
  return (n) => G(e, t, n);
}
function Dn(e) {
  return typeof e == `number`
    ? En
    : typeof e == `string`
      ? Lt(e)
        ? vn
        : H.test(e)
          ? Cn
          : jn
      : Array.isArray(e)
        ? On
        : typeof e == `object`
          ? H.test(e)
            ? Cn
            : kn
          : vn;
}
function On(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => Dn(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function kn(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Dn(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function An(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
var jn = (e, t) => {
  let n = W.createTransformer(t),
    r = U(e),
    i = U(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (wn.has(e) && !i.values.length) || (wn.has(t) && !r.values.length)
      ? Tn(e, t)
      : Ze(On(An(r, i), i.values), n)
    : (`${e}${t}`, vn(e, t));
};
function Mn(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? G(e, t, n)
    : Dn(e)(e, t);
}
var Nn = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: (e = !0) => N.update(t, e),
      stop: () => kt(t),
      now: () => (At.isProcessing ? At.timestamp : P.now()),
    };
  },
  Pn = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++)
      r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Fn = 2e4;
function In(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4;) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function Ln(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(In(r), Fn);
  return {
    type: `keyframes`,
    ease: (e) => r.next(i * e).value / t,
    duration: M(i),
  };
}
var K = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Rn(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var zn = 12;
function Bn(e, t, n) {
  let r = n;
  for (let n = 1; n < zn; n++) r -= e(r) / t(r);
  return r;
}
var Vn = 0.001;
function Hn({
  duration: e = K.duration,
  bounce: t = K.bounce,
  velocity: n = K.velocity,
  mass: r = K.mass,
}) {
  let i, a;
  K.maxDuration;
  let o = 1 - t;
  ((o = O(K.minDamping, K.maxDamping, o)),
    (e = O(K.minDuration, K.maxDuration, M(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = Rn(t, o),
            c = Math.exp(-i);
          return Vn - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = Rn(t ** 2, o);
          return ((-i(t) + Vn > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = Bn(i, a, s);
  if (((e = j(e)), isNaN(c)))
    return { stiffness: K.stiffness, damping: K.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var Un = [`duration`, `bounce`],
  Wn = [`stiffness`, `damping`, `mass`];
function Gn(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function Kn(e) {
  let t = {
    velocity: K.velocity,
    stiffness: K.stiffness,
    damping: K.damping,
    mass: K.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Gn(e, Wn) && Gn(e, Un))
    if (((t.velocity = 0), e.visualDuration)) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * O(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: K.mass, stiffness: i, damping: a };
    } else {
      let n = Hn({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: K.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function qn(e = K.visualDuration, t = K.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = Kn({ ...n, velocity: -M(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = M(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? K.restSpeed.granular : K.restSpeed.default),
    (i ||= v ? K.restDelta.granular : K.restDelta.default));
  let y, b, x, S, C, w;
  if (h < 1)
    ((x = Rn(_, h)),
      (S = (m + h * _ * g) / x),
      (y = (e) => {
        let t = Math.exp(-h * _ * e);
        return o - t * (S * Math.sin(x * e) + g * Math.cos(x * e));
      }),
      (C = h * _ * S + g * x),
      (w = h * _ * g - S * x),
      (b = (e) =>
        Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e))));
  else if (h === 1) {
    y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
    let e = m + _ * g;
    b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
  } else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
    let t = (m + h * _ * g) / e,
      n = h * _ * t - g * e,
      r = h * _ * g - t * e;
    b = (t) => {
      let i = Math.exp(-h * _ * t),
        a = Math.min(e * t, 300);
      return i * (n * Math.sinh(a) + r * Math.cosh(a));
    };
  }
  let T = {
    calculatedDuration: (p && d) || null,
    velocity: (e) => j(b(e)),
    next: (e) => {
      if (!p && h < 1) {
        let t = Math.exp(-h * _ * e),
          n = Math.sin(x * e),
          a = Math.cos(x * e),
          c = o - t * (S * n + g * a),
          l = j(t * (C * n + w * a));
        return (
          (s.done = Math.abs(l) <= r && Math.abs(o - c) <= i),
          (s.value = s.done ? o : c),
          s
        );
      }
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = j(b(e));
        s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(In(T), Fn),
        t = Pn((t) => T.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
    toTransition: () => {},
  };
  return T;
}
qn.applyToOptions = (e) => {
  let t = Ln(e, 100, qn);
  return (
    (e.ease = t.ease),
    (e.duration = j(t.duration)),
    (e.type = `keyframes`),
    e
  );
};
var Jn = 5;
function Yn(e, t, n) {
  let r = Math.max(t - Jn, 0);
  return et(n - e(r), t - r);
}
function Xn({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = qn({
          keyframes: [f.value, m(f.value)],
          velocity: Yn(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
function Zn(e, t, n) {
  let r = [],
    i = n || k.mix || Mn,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = Ze(Array.isArray(t) ? t[n] || A : t, a)), r.push(a));
  }
  return r;
}
function Qn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if ((t.length, a === 1)) return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = Zn(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = Qe(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(O(e[0], e[a - 1], t)) : l;
}
function $n(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Qe(0, t, r);
    e.push(G(n, 1, i));
  }
}
function er(e) {
  let t = [0];
  return ($n(t, e.length - 1), t);
}
function tr(e, t) {
  return e.map((e) => e * t);
}
function nr(e, t) {
  return e.map(() => t || vt).splice(0, e.length - 1);
}
function rr({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = yt(r) ? r.map(wt) : wt(r),
    a = { done: !1, value: t[0] },
    o = Qn(tr(n && n.length === t.length ? n : er(t), e), t, {
      ease: Array.isArray(i) ? i : nr(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var ir = (e) => e !== null;
function ar(e, { repeat: t, repeatType: n = `loop` }, r, i = 1) {
  let a = e.filter(ir),
    o = i < 0 || (t && n !== `loop` && t % 2 == 1) ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
var or = { decay: Xn, inertia: Xn, tween: rr, keyframes: rr, spring: qn };
function sr(e) {
  typeof e.type == `string` && (e.type = or[e.type]);
}
var cr = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((e) => {
        this.resolve = e;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
  },
  lr = (e) => e / 100,
  ur = class extends cr {
    constructor(e) {
      (super(),
        (this.state = `idle`),
        (this.startTime = null),
        (this.isStopped = !1),
        (this.currentTime = 0),
        (this.holdTime = null),
        (this.playbackSpeed = 1),
        (this.delayState = { done: !1, value: void 0 }),
        (this.stop = () => {
          let { motionValue: e } = this.options;
          (e && e.updatedAt !== P.now() && this.tick(P.now()),
            (this.isStopped = !0),
            this.state !== `idle` &&
              (this.teardown(), this.options.onStop?.()));
        }),
        (this.options = e),
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause());
    }
    initAnimation() {
      let { options: e } = this;
      sr(e);
      let {
          type: t = rr,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = e,
        { keyframes: o } = e,
        s = t || rr;
      s !== rr &&
        typeof o[0] != `number` &&
        ((this.mixKeyframes = Ze(lr, Mn(o[0], o[1]))), (o = [0, 100]));
      let c = s({ ...e, keyframes: o });
      (i === `mirror` &&
        (this.mirroredGenerator = s({
          ...e,
          keyframes: [...o].reverse(),
          velocity: -a,
        })),
        c.calculatedDuration === null && (c.calculatedDuration = In(c)));
      let { calculatedDuration: l } = c;
      ((this.calculatedDuration = l),
        (this.resolvedDuration = l + r),
        (this.totalDuration = this.resolvedDuration * (n + 1) - r),
        (this.generator = c));
    }
    updateTime(e) {
      let t = Math.round(e - this.startTime) * this.playbackSpeed;
      this.currentTime = this.holdTime === null ? t : this.holdTime;
    }
    tick(e, t = !1) {
      let {
        generator: n,
        totalDuration: r,
        mixKeyframes: i,
        mirroredGenerator: a,
        resolvedDuration: o,
        calculatedDuration: s,
      } = this;
      if (this.startTime === null) return n.next(0);
      let {
        delay: c = 0,
        keyframes: l,
        repeat: u,
        repeatType: d,
        repeatDelay: f,
        type: p,
        onUpdate: m,
        finalKeyframe: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - r / this.speed, this.startTime)),
        t ? (this.currentTime = e) : this.updateTime(e));
      let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
        _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = r));
      let v = this.currentTime,
        y = n;
      if (u) {
        let e = Math.min(this.currentTime, r) / o,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, u + 1)),
          t % 2 &&
            (d === `reverse`
              ? ((n = 1 - n), f && (n -= f / o))
              : d === `mirror` && (y = a)),
          (v = O(0, 1, n) * o));
      }
      let b;
      (_
        ? ((this.delayState.value = l[0]), (b = this.delayState))
        : (b = y.next(v)),
        i && !_ && (b.value = i(b.value)));
      let { done: x } = b;
      !_ &&
        s !== null &&
        (x =
          this.playbackSpeed >= 0
            ? this.currentTime >= r
            : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && p !== Xn && (b.value = ar(l, this.options, h, this.speed)),
        m && m(b.value),
        S && this.finish(),
        b
      );
    }
    then(e, t) {
      return this.finished.then(e, t);
    }
    get duration() {
      return M(this.calculatedDuration);
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + M(e);
    }
    get time() {
      return M(this.currentTime);
    }
    set time(e) {
      ((e = j(e)),
        (this.currentTime = e),
        this.startTime === null ||
        this.holdTime !== null ||
        this.playbackSpeed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver
          ? this.driver.start(!1)
          : ((this.startTime = 0),
            (this.state = `paused`),
            (this.holdTime = e),
            this.tick(e)));
    }
    getGeneratorVelocity() {
      let e = this.currentTime;
      if (e <= 0) return this.options.velocity || 0;
      if (this.generator.velocity) return this.generator.velocity(e);
      let t = this.generator.next(e).value;
      return Yn((e) => this.generator.next(e).value, e, t);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (t && this.driver && this.updateTime(P.now()),
        (this.playbackSpeed = e),
        t && this.driver && (this.time = M(this.currentTime)));
    }
    play() {
      if (this.isStopped) return;
      let { driver: e = Nn, startTime: t } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), this.options.onPlay?.());
      let n = this.driver.now();
      (this.state === `finished`
        ? (this.updateFinished(), (this.startTime = n))
        : this.holdTime === null
          ? (this.startTime ||= t ?? n)
          : (this.startTime = n - this.holdTime),
        this.state === `finished` &&
          this.speed < 0 &&
          (this.startTime += this.calculatedDuration),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      ((this.state = `paused`),
        this.updateTime(P.now()),
        (this.holdTime = this.currentTime));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.notifyFinished(),
        this.teardown(),
        (this.state = `finished`),
        this.options.onComplete?.());
    }
    cancel() {
      ((this.holdTime = null),
        (this.startTime = 0),
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        (this.startTime = this.holdTime = null));
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
    attachTimeline(e) {
      return (
        this.options.allowFlatten &&
          ((this.options.type = `keyframes`),
          (this.options.ease = `linear`),
          this.initAnimation()),
        this.driver?.stop(),
        e.observe(this)
      );
    }
  };
function dr(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
var q = (e) => (e * 180) / Math.PI,
  fr = (e) => mr(q(Math.atan2(e[1], e[0]))),
  pr = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: fr,
    rotateZ: fr,
    skewX: (e) => q(Math.atan(e[1])),
    skewY: (e) => q(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  mr = (e) => ((e %= 360), e < 0 && (e += 360), e),
  hr = fr,
  gr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  _r = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  vr = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: gr,
    scaleY: _r,
    scale: (e) => (gr(e) + _r(e)) / 2,
    rotateX: (e) => mr(q(Math.atan2(e[6], e[5]))),
    rotateY: (e) => mr(q(Math.atan2(-e[2], e[0]))),
    rotateZ: hr,
    rotate: hr,
    skewX: (e) => q(Math.atan(e[4])),
    skewY: (e) => q(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function yr(e) {
  return +!!e.includes(`scale`);
}
function br(e, t) {
  if (!e || e === `none`) return yr(t);
  let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),
    r,
    i;
  if (n) ((r = vr), (i = n));
  else {
    let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = pr), (i = t));
  }
  if (!i) return yr(t);
  let a = r[t],
    o = i[1].split(`,`).map(Sr);
  return typeof a == `function` ? a(o) : o[a];
}
var xr = (e, t) => {
  let { transform: n = `none` } = getComputedStyle(e);
  return br(n, t);
};
function Sr(e) {
  return parseFloat(e.trim());
}
var J = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  Y = new Set([...J, `pathRotation`]),
  Cr = (e) => e === F || e === B,
  wr = new Set([`x`, `y`, `z`]),
  Tr = J.filter((e) => !wr.has(e));
function Er(e) {
  let t = [];
  return (
    Tr.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var X = {
  width: (
    { x: e },
    { paddingLeft: t = `0`, paddingRight: n = `0`, boxSizing: r },
  ) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = `0`, paddingBottom: n = `0`, boxSizing: r },
  ) => {
    let i = e.max - e.min;
    return r === `border-box` ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => br(t, `x`),
  y: (e, { transform: t }) => br(t, `y`),
};
((X.translateX = X.x), (X.translateY = X.y));
var Z = new Set(),
  Dr = !1,
  Or = !1,
  kr = !1;
function Ar() {
  if (Or) {
    let e = Array.from(Z).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = Er(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            e.getValue(t)?.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Or = !1), (Dr = !1), Z.forEach((e) => e.complete(kr)), Z.clear());
}
function jr() {
  Z.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Or = !0));
  });
}
function Mr() {
  ((kr = !0), jr(), Ar(), (kr = !1));
}
var Nr = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.state = `pending`),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.state = `scheduled`),
        this.isAsync
          ? (Z.add(this), Dr || ((Dr = !0), N.read(jr), N.resolveKeyframes(Ar)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      if (e[0] === null) {
        let i = r?.get(),
          a = e[e.length - 1];
        if (i !== void 0) e[0] = i;
        else if (n && t) {
          let r = n.readValue(t, a);
          r != null && (e[0] = r);
        }
        (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
      }
      dr(e);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
      ((this.state = `complete`),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        Z.delete(this));
    }
    cancel() {
      this.state === `scheduled` && (Z.delete(this), (this.state = `pending`));
    }
    resume() {
      this.state === `pending` && this.scheduleResolve();
    }
  },
  Pr = (e) => e.startsWith(`--`);
function Fr(e, t, n) {
  Pr(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
var Ir = {};
function Lr(e, t) {
  let n = Xe(e);
  return () => Ir[t] ?? n();
}
var Rr = Lr(() => window.ScrollTimeline !== void 0, `scrollTimeline`),
  zr = Lr(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Br = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Vr = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: Br([0, 0.65, 0.55, 1]),
    circOut: Br([0.55, 0, 1, 0.45]),
    backIn: Br([0.31, 0.01, 0.66, -0.59]),
    backOut: Br([0.33, 1.53, 0.69, 0.99]),
  };
function Hr(e, t) {
  if (e)
    return typeof e == `function`
      ? zr()
        ? Pn(e, t)
        : `ease-out`
      : xt(e)
        ? Br(e)
        : Array.isArray(e)
          ? e.map((e) => Hr(e, t) || Vr.easeOut)
          : Vr[e];
}
function Ur(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeOut`,
    times: c,
  } = {},
  l = void 0,
) {
  let u = { [t]: n };
  c && (u.offset = c);
  let d = Hr(s, i);
  Array.isArray(d) && (u.easing = d);
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`,
  };
  return (l && (f.pseudoElement = l), e.animate(u, f));
}
function Wr(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function Gr({ type: e, ...t }) {
  return Wr(e) && zr()
    ? e.applyToOptions(t)
    : ((t.duration ??= 300), (t.ease ??= `easeOut`), t);
}
var Kr = class extends cr {
    constructor(e) {
      if (
        (super(),
        (this.finishedTime = null),
        (this.isStopped = !1),
        (this.manualStartTime = null),
        !e)
      )
        return;
      let {
        element: t,
        name: n,
        keyframes: r,
        pseudoElement: i,
        allowFlatten: a = !1,
        finalKeyframe: o,
        onComplete: s,
      } = e;
      ((this.isPseudoElement = !!i),
        (this.allowFlatten = a),
        (this.options = e),
        e.type);
      let c = Gr(e);
      ((this.animation = Ur(t, n, r, c, i)),
        c.autoplay === !1 && this.animation.pause(),
        (this.animation.onfinish = () => {
          if (((this.finishedTime = this.time), !i)) {
            let e = ar(r, this.options, o, this.speed);
            (this.updateMotionValue && this.updateMotionValue(e),
              Fr(t, n, e),
              this.animation.cancel());
          }
          (s?.(), this.notifyFinished());
        }));
    }
    play() {
      this.isStopped ||
        ((this.manualStartTime = null),
        this.animation.play(),
        this.state === `finished` && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch {}
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = !0;
      let { state: e } = this;
      e !== `idle` &&
        e !== `finished` &&
        (this.updateMotionValue
          ? this.updateMotionValue()
          : this.commitStyles(),
        this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      let e = this.options?.element;
      !this.isPseudoElement &&
        e?.isConnected &&
        this.animation.commitStyles?.();
    }
    get duration() {
      let e = this.animation.effect?.getComputedTiming?.().duration || 0;
      return M(Number(e));
    }
    get iterationDuration() {
      let { delay: e = 0 } = this.options || {};
      return this.duration + M(e);
    }
    get time() {
      return M(Number(this.animation.currentTime) || 0);
    }
    set time(e) {
      let t = this.finishedTime !== null;
      ((this.manualStartTime = null),
        (this.finishedTime = null),
        (this.animation.currentTime = j(e)),
        t && this.animation.pause());
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(e) {
      (e < 0 && (this.finishedTime = null), (this.animation.playbackRate = e));
    }
    get state() {
      return this.finishedTime === null ? this.animation.playState : `finished`;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(e) {
      this.manualStartTime = this.animation.startTime = e;
    }
    attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
      return (
        this.allowFlatten &&
          this.animation.effect?.updateTiming({ easing: `linear` }),
        (this.animation.onfinish = null),
        e && Rr()
          ? ((this.animation.timeline = e),
            t && (this.animation.rangeStart = t),
            n && (this.animation.rangeEnd = n),
            A)
          : r(this)
      );
    }
  },
  qr = { anticipate: ft, backInOut: dt, circInOut: ht };
function Jr(e) {
  return e in qr;
}
function Yr(e) {
  typeof e.ease == `string` && Jr(e.ease) && (e.ease = qr[e.ease]);
}
var Xr = 10,
  Zr = class extends Kr {
    constructor(e) {
      (Yr(e),
        sr(e),
        super(e),
        e.startTime !== void 0 &&
          e.autoplay !== !1 &&
          (this.startTime = e.startTime),
        (this.options = e));
    }
    updateMotionValue(e) {
      let {
        motionValue: t,
        onUpdate: n,
        onComplete: r,
        element: i,
        ...a
      } = this.options;
      if (!t) return;
      if (e !== void 0) {
        t.set(e);
        return;
      }
      let o = new ur({ ...a, autoplay: !1 }),
        s = Math.max(Xr, P.now() - this.startTime),
        c = O(0, Xr, s - Xr),
        l = o.sample(s).value,
        { name: u } = this.options;
      (i && u && Fr(i, u, l),
        t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c),
        o.stop());
    }
  },
  Qr = (e, t) =>
    t !== `zIndex` &&
    !!(
      typeof e == `number` ||
      Array.isArray(e) ||
      (typeof e == `string` &&
        (W.test(e) || e === `0`) &&
        !e.startsWith(`url(`))
    );
function $r(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function ei(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Qr(i, t),
    s = Qr(a, t);
  return (
    `${t}${i}${a}${o ? a : i}`,
    !o || !s ? !1 : $r(e) || ((n === `spring` || Wr(n)) && r)
  );
}
function ti(e) {
  ((e.duration = 0), (e.type = `keyframes`));
}
var ni = new Set([
    `opacity`,
    `clipPath`,
    `filter`,
    `transform`,
    `backgroundColor`,
  ]),
  ri = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ii(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == `string` && ri.test(e[t])) return !0;
  return !1;
}
var ai = new Set([
    `color`,
    `backgroundColor`,
    `outlineColor`,
    `fill`,
    `stroke`,
    `borderColor`,
    `borderTopColor`,
    `borderRightColor`,
    `borderBottomColor`,
    `borderLeftColor`,
  ]),
  oi = Xe(() => Object.hasOwnProperty.call(Element.prototype, `animate`));
function si(e) {
  let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: a,
      type: o,
      keyframes: s,
    } = e,
    c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
  let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    oi() &&
    n &&
    (ni.has(n) || (ai.has(n) && ii(s))) &&
    (n !== `transform` || !u) &&
    !l &&
    !r &&
    i !== `mirror` &&
    a !== 0 &&
    o !== `inertia`
  );
}
var ci = 40,
  li = class extends cr {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      keyframes: o,
      name: s,
      motionValue: c,
      element: l,
      ...u
    }) {
      (super(),
        (this.stop = () => {
          (this._animation && (this._animation.stop(), this.stopTimeline?.()),
            this.keyframeResolver?.cancel());
        }),
        (this.createdAt = P.now()));
      let d = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          name: s,
          motionValue: c,
          element: l,
          ...u,
        },
        f = l?.KeyframeResolver || Nr;
      ((this.keyframeResolver = new f(
        o,
        (e, t, n) => this.onKeyframesResolved(e, t, d, !n),
        s,
        c,
        l,
      )),
        this.keyframeResolver?.scheduleResolve());
    }
    onKeyframesResolved(e, t, n, r) {
      this.keyframeResolver = void 0;
      let {
        name: i,
        type: a,
        velocity: o,
        delay: s,
        isHandoff: c,
        onUpdate: l,
      } = n;
      this.resolvedAt = P.now();
      let u = !0;
      ei(e, i, a, o) ||
        ((u = !1),
        (k.instantAnimations || !s) && l?.(ar(e, n, t)),
        (e[0] = e[e.length - 1]),
        ti(n),
        (n.repeat = 0));
      let d = {
          startTime: r
            ? this.resolvedAt && this.resolvedAt - this.createdAt > ci
              ? this.resolvedAt
              : this.createdAt
            : void 0,
          finalKeyframe: t,
          ...n,
          keyframes: e,
        },
        f = u && !c && si(d),
        p = d.motionValue?.owner?.current,
        m;
      if (f)
        try {
          m = new Zr({ ...d, element: p });
        } catch {
          m = new ur(d);
        }
      else m = new ur(d);
      (m.finished
        .then(() => {
          this.notifyFinished();
        })
        .catch(A),
        (this.pendingTimeline &&=
          ((this.stopTimeline = m.attachTimeline(this.pendingTimeline)),
          void 0)),
        (this._animation = m));
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
    get animation() {
      return (
        this._animation || (this.keyframeResolver?.resume(), Mr()),
        this._animation
      );
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(e) {
      this.animation.time = e;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(e) {
      this.animation.speed = e;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(e) {
      return (
        this._animation
          ? (this.stopTimeline = this.animation.attachTimeline(e))
          : (this.pendingTimeline = e),
        () => this.stop()
      );
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      (this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel());
    }
  },
  ui = class {
    constructor(e) {
      ((this.stop = () => this.runAll(`stop`)),
        (this.animations = e.filter(Boolean)));
    }
    get finished() {
      return Promise.all(this.animations.map((e) => e.finished));
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((t) => t.attachTimeline(e));
      return () => {
        t.forEach((e, t) => {
          (e && e(), this.animations[t].stop());
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e) {
      this.setAll(`time`, e);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e) {
      this.setAll(`speed`, e);
    }
    get state() {
      return this.getAll(`state`);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      return di(this.animations, `duration`);
    }
    get iterationDuration() {
      return di(this.animations, `iterationDuration`);
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  };
function di(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
var fi = class extends ui {
    then(e, t) {
      return this.finished.finally(e).then(() => {});
    }
  },
  pi = 30,
  mi = (e) => !isNaN(parseFloat(e)),
  hi = { current: void 0 },
  gi = class {
    constructor(e, t = {}) {
      ((this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e) => {
          let t = P.now();
          if (
            (this.updatedAt !== t && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              (this.events.change?.notify(this.current), this.dependents))
          )
            for (let e of this.dependents) e.dirty();
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = P.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = mi(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new $e());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              N.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e) {
      this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(e) {
      ((this.dependents ||= new Set()), this.dependents.add(e));
    }
    removeDependent(e) {
      this.dependents && this.dependents.delete(e);
    }
    get() {
      return (hi.current && hi.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = P.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > pi
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, pi);
      return et(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function Q(e, t) {
  return new gi(e, t);
}
function _i(e, t) {
  if (e?.inherit && t) {
    let { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function vi(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  return n === e ? n : _i(n, e);
}
var yi = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  bi = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  xi = { type: `keyframes`, duration: 0.8 },
  Si = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Ci = (e, { keyframes: t }) =>
    t.length > 2 ? xi : Y.has(e) ? (e.startsWith(`scale`) ? bi(t[1]) : yi) : Si,
  wi = new Set([
    `when`,
    `delay`,
    `delayChildren`,
    `staggerChildren`,
    `staggerDirection`,
    `repeat`,
    `repeatType`,
    `repeatDelay`,
    `from`,
    `elapsed`,
  ]);
function Ti(e) {
  for (let t in e) if (!wi.has(t)) return !0;
  return !1;
}
var Ei =
    (e, t, n, r = {}, i, a) =>
    (o) => {
      let s = vi(r, e) || {},
        c = s.delay || r.delay || 0,
        { elapsed: l = 0 } = r;
      l -= j(c);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: `easeOut`,
        velocity: t.getVelocity(),
        ...s,
        delay: -l,
        onUpdate: (e) => {
          (t.set(e), s.onUpdate && s.onUpdate(e));
        },
        onComplete: () => {
          (o(), s.onComplete && s.onComplete());
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i,
      };
      (Ti(s) || Object.assign(u, Ci(e, u)),
        (u.duration &&= j(u.duration)),
        (u.repeatDelay &&= j(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from));
      let d = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          (ti(u), u.delay === 0 && (d = !0)),
        (k.instantAnimations ||
          k.skipAnimations ||
          i?.shouldSkipAnimations ||
          s.skipAnimations) &&
          ((d = !0), ti(u), (u.delay = 0)),
        (u.allowFlatten = !s.type && !s.ease),
        d && !a && t.get() !== void 0)
      ) {
        let e = ar(u.keyframes, s);
        if (e !== void 0) {
          N.update(() => {
            (u.onUpdate(e), u.onComplete());
          });
          return;
        }
      }
      return s.isSync ? new ur(u) : new li(u);
    },
  Di = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Oi(e) {
  let t = Di.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function ki(e, t, n = 1) {
  `${e}`;
  let [r, i] = Oi(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return qe(e) ? parseFloat(e) : e;
  }
  return Lt(i) ? ki(i, t, n + 1) : i;
}
function Ai(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function ji(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = Ai(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = Ai(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
function Mi(e, t, n) {
  let r = e.getProps();
  return ji(r, t, n === void 0 ? r.custom : n, e);
}
var Ni = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...J]),
  Pi = (e) => Array.isArray(e);
function Fi(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Q(n));
}
function Ii(e) {
  return Pi(e) ? e[e.length - 1] || 0 : e;
}
function Li(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = Mi(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) Fi(e, t, Ii(i[t]));
}
var $ = (e) => !!(e && e.getVelocity);
function Ri(e) {
  return !!($(e) && e.add);
}
function zi(e, t) {
  let n = e.getValue(`willChange`);
  if (Ri(n)) return n.add(t);
  if (!n && k.WillChange) {
    let n = new k.WillChange(`auto`);
    (e.addValue(`willChange`, n), n.add(t));
  }
}
function Bi(e) {
  return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Vi = `data-` + Bi(`framerAppearId`);
function Hi(e) {
  return e.props[Vi];
}
function Ui({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Wi(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a, transitionEnd: o, ...s } = t,
    c = e.getDefaultTransition();
  a = a ? _i(a, c) : c;
  let l = a?.reduceMotion,
    u = a?.skipAnimations;
  r && (a = r);
  let d = [],
    f = i && e.animationState && e.animationState.getState()[i],
    p = a?.path;
  p && p.animateVisualElement(e, s, a, n, d);
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (f && Ui(f, t))) continue;
    let o = { delay: n, ...vi(a || {}, t) };
    u && (o.skipAnimations = !0);
    let c = r.get();
    if (
      c !== void 0 &&
      !r.isAnimating() &&
      !Array.isArray(i) &&
      i === c &&
      !o.velocity
    ) {
      N.update(() => r.set(i));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      let n = Hi(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, N);
        e !== null && ((o.startTime = e), (p = !0));
      }
    }
    zi(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.start(Ei(t, r, i, m && Ni.has(t) ? { type: !1 } : o, e, p));
    let h = r.animation;
    h && d.push(h);
  }
  if (o) {
    let t = () =>
      N.update(() => {
        o && Li(e, o);
      });
    d.length ? Promise.all(d).then(t) : t();
  }
  return d;
}
var Gi = { test: (e) => e === `auto`, parse: (e) => e },
  Ki = (e) => (t) => t.test(e),
  qi = [F, B, z, R, $t, Qt, Gi],
  Ji = (e) => qi.find(Ki(e));
function Yi(e) {
  return typeof e == `number`
    ? e === 0
    : e === null || e === `none` || e === `0` || Ye(e);
}
var Xi = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function Zi(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Ht) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!Xi.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var Qi = /\b([a-z-]*)\(.*?\)/gu,
  $i = {
    ...W,
    getAnimatableNone: (e) => {
      let t = e.match(Qi);
      return t ? t.map(Zi).join(` `) : e;
    },
  },
  ea = {
    ...W,
    getAnimatableNone: (e) => {
      let t = W.parse(e);
      return W.createTransformer(e)(
        t.map((e) =>
          typeof e == `number`
            ? 0
            : typeof e == `object`
              ? { ...e, alpha: 1 }
              : e,
        ),
      );
    },
  },
  ta = { ...F, transform: Math.round },
  na = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    inset: B,
    insetBlock: B,
    insetBlockStart: B,
    insetBlockEnd: B,
    insetInline: B,
    insetInlineStart: B,
    insetInlineEnd: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    paddingBlock: B,
    paddingBlockStart: B,
    paddingBlockEnd: B,
    paddingInline: B,
    paddingInlineStart: B,
    paddingInlineEnd: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    marginBlock: B,
    marginBlockStart: B,
    marginBlockEnd: B,
    marginInline: B,
    marginInlineStart: B,
    marginInlineEnd: B,
    fontSize: B,
    backgroundPositionX: B,
    backgroundPositionY: B,
    rotate: R,
    pathRotation: R,
    rotateX: R,
    rotateY: R,
    rotateZ: R,
    scale: Bt,
    scaleX: Bt,
    scaleY: Bt,
    scaleZ: Bt,
    skew: R,
    skewX: R,
    skewY: R,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: I,
    originX: en,
    originY: en,
    originZ: B,
    zIndex: ta,
    fillOpacity: I,
    strokeOpacity: I,
    numOctaves: ta,
  },
  ra = {
    ...na,
    color: H,
    backgroundColor: H,
    outlineColor: H,
    fill: H,
    stroke: H,
    borderColor: H,
    borderTopColor: H,
    borderRightColor: H,
    borderBottomColor: H,
    borderLeftColor: H,
    filter: $i,
    WebkitFilter: $i,
    mask: ea,
    WebkitMask: ea,
  },
  ia = (e) => ra[e],
  aa = new Set([$i, ea]);
function oa(e, t) {
  let n = ia(e);
  return (
    aa.has(n) || (n = W),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var sa = new Set([`auto`, `none`, `0`]);
function ca(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !sa.has(t) && U(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = oa(n, i);
}
var la = class extends Nr {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), Lt(r))) {
          let i = ki(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !Ni.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = Ji(r),
        o = Ji(i);
      if (zt(r) !== zt(i) && X[n]) {
        this.needsMeasurement = !0;
        return;
      }
      if (a !== o)
        if (Cr(a) && Cr(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else X[n] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++)
        (e[t] === null || Yi(e[t])) && n.push(t);
      n.length && ca(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = X[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current),
        )),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = X[t](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  ua = [
    `borderTopLeftRadius`,
    `borderTopRightRadius`,
    `borderBottomRightRadius`,
    `borderBottomLeftRadius`,
  ];
function da(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((e) => e != null);
}
var fa = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  { schedule: pa, cancel: ma } = Ot(queueMicrotask, !1);
function ha(e) {
  return Je(e) && `ownerSVGElement` in e;
}
function ga(e) {
  return ha(e) && e.tagName === `svg`;
}
function _a(e, t) {
  if (e === `first`) return 0;
  {
    let n = t - 1;
    return e === `last` ? n : n / 2;
  }
}
function va(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, a) => {
    let o = typeof n == `number` ? n : _a(n, a),
      s = e * Math.abs(o - i);
    if (r) {
      let t = a * e;
      s = wt(r)(s / t) * t;
    }
    return t + s;
  };
}
var ya = [...qi, H, W],
  ba = (e) => ya.find(Ki(e)),
  xa = () => ({ min: 0, max: 0 }),
  Sa = () => ({ x: xa(), y: xa() }),
  Ca = new WeakMap();
function wa(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function Ta(e) {
  return typeof e == `string` || Array.isArray(e);
}
var Ea = [
  `initial`,
  `animate`,
  `whileInView`,
  `whileFocus`,
  `whileHover`,
  `whileTap`,
  `whileDrag`,
  `exit`,
];
function Da(e) {
  return wa(e.animate) || Ea.some((t) => Ta(e[t]));
}
function Oa(e) {
  return !!(Da(e) || e.variants);
}
function ka(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if ($(i)) e.addValue(r, i);
    else if ($(a)) e.addValue(r, Q(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, Q(t === void 0 ? i : t, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var Aa = { current: null },
  ja = { current: !1 },
  Ma = typeof window < `u`;
function Na() {
  if (((ja.current = !0), Ma))
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (Aa.current = e.matches);
      (e.addEventListener(`change`, t), t());
    } else Aa.current = !1;
}
var Pa = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  Fa = {},
  Ia = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        skipAnimations: i,
        blockInitialAnimation: a,
        visualState: o,
      },
      s = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.shouldSkipAnimations = !1),
        (this.values = new Map()),
        (this.KeyframeResolver = Nr),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.hasBeenMounted = !1),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = P.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), N.render(this.render, !1, !0));
        }));
      let { latestValues: c, renderState: l } = o;
      ((this.latestValues = c),
        (this.baseTarget = { ...c }),
        (this.initialValues = t.initial ? { ...c } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.skipAnimationsConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = !!a),
        (this.isControllingVariants = Da(t)),
        (this.isVariantNode = Oa(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        c[e] !== void 0 && $(t) && t.set(c[e]);
      }
    }
    mount(e) {
      if (this.hasBeenMounted)
        for (let e in this.initialValues)
          (this.values.get(e)?.jump(this.initialValues[e]),
            (this.latestValues[e] = this.initialValues[e]));
      ((this.current = e),
        Ca.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        this.reducedMotionConfig === `never`
          ? (this.shouldReduceMotion = !1)
          : this.reducedMotionConfig === `always`
            ? (this.shouldReduceMotion = !0)
            : (ja.current || Na(), (this.shouldReduceMotion = Aa.current)),
        (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext),
        (this.hasBeenMounted = !0));
    }
    unmount() {
      (this.projection && this.projection.unmount(),
        kt(this.notifyUpdate),
        kt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    addChild(e) {
      (this.children.add(e),
        (this.enteringChildren ??= new Set()),
        this.enteringChildren.add(e));
    }
    removeChild(e) {
      (this.children.delete(e),
        this.enteringChildren && this.enteringChildren.delete(e));
    }
    bindToMotionValue(e, t) {
      if (
        (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        t.accelerate && ni.has(e) && this.current instanceof HTMLElement)
      ) {
        let {
            factory: n,
            keyframes: r,
            times: i,
            ease: a,
            duration: o,
          } = t.accelerate,
          s = new Kr({
            element: this.current,
            name: e,
            keyframes: r,
            times: i,
            ease: a,
            duration: j(o),
          }),
          c = n(s);
        this.valueSubscriptions.set(e, () => {
          (c(), s.cancel());
        });
        return;
      }
      let n = Y.has(e);
      n && this.onBindTransform && this.onBindTransform();
      let r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && N.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        }),
        i;
      (typeof window < `u` &&
        window.MotionCheckAppearSync &&
        (i = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i && i());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in Fa) {
        let t = Fa[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Sa();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < Pa.length; t++) {
        let n = Pa[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = ka(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue());
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Q(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (qe(n) || Ye(n))
            ? (n = parseFloat(n))
            : !ba(n) && W.test(t) && (n = oa(e, t)),
          this.setBaseTarget(e, $(n) ? n.get() : n)),
        $(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = ji(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !$(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new $e()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
    scheduleRenderMicrotask() {
      pa.render(this.render);
    }
  },
  La = class extends Ia {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = la));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      let n = e.style;
      return n ? n[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      $(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  };
function Ra({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function za(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ba(e, t) {
  return Ra(za(e.getBoundingClientRect(), t));
}
var Va = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  Ha = J.length;
function Ua(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Ha; a++) {
    let o = J[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (typeof s == `number`) c = s === +!!o.startsWith(`scale`);
    else {
      let e = parseFloat(s);
      c = o.startsWith(`scale`) ? e === 1 : e === 0;
    }
    if (!c || n) {
      let e = fa(s, na[o]);
      if (!c) {
        i = !1;
        let t = Va[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  let a = e.pathRotation;
  return (
    a && ((i = !1), (r += `rotate(${fa(a, na.pathRotation)}) `)),
    (r = r.trim()),
    n ? (r = n(t, i ? `` : r)) : i && (r = `none`),
    r
  );
}
function Wa(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Y.has(e)) {
      o = !0;
      continue;
    }
    if (Ft(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = fa(n, na[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Ua(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
function Ga(e, { style: t, vars: n }, r, i) {
  let a = e.style,
    o;
  for (o in t) a[o] = t[o];
  for (o in (i?.applyProjectionStyles(a, r), n)) a.setProperty(o, n[o]);
}
function Ka(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var qa = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`)
        if (B.test(e)) e = parseFloat(e);
        else return e;
      return `${Ka(e, t.target.x)}% ${Ka(e, t.target.y)}%`;
    },
  },
  Ja = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = W.parse(e);
      if (i.length > 5) return r;
      let a = W.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = G(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  Ya = {
    borderRadius: { ...qa, applyTo: [...ua] },
    borderTopLeftRadius: qa,
    borderTopRightRadius: qa,
    borderBottomLeftRadius: qa,
    borderBottomRightRadius: qa,
    boxShadow: Ja,
  };
function Xa(e, { layout: t, layoutId: n }) {
  return (
    Y.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!Ya[e] || e === `opacity`))
  );
}
function Za(e, t, n) {
  let r = e.style,
    i = t?.style,
    a = {};
  if (!r) return a;
  for (let t in r)
    ($(r[t]) ||
      (i && $(i[t])) ||
      Xa(t, e) ||
      n?.getValue(t)?.liveStyle !== void 0) &&
      (a[t] = r[t]);
  return a;
}
function Qa(e) {
  return window.getComputedStyle(e);
}
var $a = class extends La {
  constructor() {
    (super(...arguments), (this.type = `html`), (this.renderInstance = Ga));
  }
  mount(e) {
    (e.style, super.mount(e));
  }
  readValueFromInstance(e, t) {
    if (Y.has(t)) return this.projection?.isProjecting ? yr(t) : xr(e, t);
    {
      let n = Qa(e),
        r = (Ft(t) ? n.getPropertyValue(t) : n[t]) || 0;
      return typeof r == `string` ? r.trim() : r;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: t }) {
    return Ba(e, t);
  }
  build(e, t, n) {
    Wa(e, t, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, t, n) {
    return Za(e, t, n);
  }
};
function eo(e, t) {
  return e in t;
}
var to = class extends Ia {
    constructor() {
      (super(...arguments), (this.type = `object`));
    }
    readValueFromInstance(e, t) {
      if (eo(t, e)) {
        let n = e[t];
        if (typeof n == `string` || typeof n == `number`) return n;
      }
    }
    getBaseTargetFromProps() {}
    removeValueFromRenderState(e, t) {
      delete t.output[e];
    }
    measureInstanceViewportBox() {
      return Sa();
    }
    build(e, t) {
      Object.assign(e.output, t);
    }
    renderInstance(e, { output: t }) {
      Object.assign(e, t);
    }
    sortInstanceNodePosition() {
      return 0;
    }
  },
  no = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  ro = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function io(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? no : ro;
  ((e[a.offset] = `${-r}`), (e[a.array] = `${t} ${n}`));
}
var ao = [`offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function oo(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    ...s
  },
  c,
  l,
  u,
) {
  if ((Wa(e, s, l), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: d, style: f } = e;
  (d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? `50% 50%`),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = u?.transformBox ?? `fill-box`),
      delete d.transformBox));
  for (let e of ao) d[e] !== void 0 && ((f[e] = d[e]), delete d[e]);
  (t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && io(d, i, a, o, !1));
}
var so = new Set([
    `baseFrequency`,
    `diffuseConstant`,
    `kernelMatrix`,
    `kernelUnitLength`,
    `keySplines`,
    `keyTimes`,
    `limitingConeAngle`,
    `markerHeight`,
    `markerWidth`,
    `numOctaves`,
    `targetX`,
    `targetY`,
    `surfaceScale`,
    `specularConstant`,
    `specularExponent`,
    `stdDeviation`,
    `tableValues`,
    `viewBox`,
    `gradientTransform`,
    `pathLength`,
    `startOffset`,
    `textLength`,
    `lengthAdjust`,
  ]),
  co = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function lo(e, t, n, r) {
  Ga(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(so.has(n) ? n : Bi(n), t.attrs[n]);
}
function uo(e, t, n) {
  let r = Za(e, t, n);
  for (let n in e)
    if ($(e[n]) || $(t[n])) {
      let t =
        J.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
var fo = class extends La {
  constructor() {
    (super(...arguments),
      (this.type = `svg`),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Sa));
  }
  getBaseTargetFromProps(e, t) {
    return e[t];
  }
  readValueFromInstance(e, t) {
    if (Y.has(t)) {
      let e = ia(t);
      return (e && e.default) || 0;
    }
    return ((t = so.has(t) ? t : Bi(t)), e.getAttribute(t));
  }
  scrapeMotionValuesFromProps(e, t, n) {
    return uo(e, t, n);
  }
  build(e, t, n) {
    oo(e, t, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(e, t, n, r) {
    lo(e, t, n, r);
  }
  mount(e) {
    ((this.isSVGTag = co(e.tagName)), super.mount(e));
  }
};
function po(e, t, n) {
  let r = $(e) ? e : Q(e);
  return (r.start(Ei(``, r, t, n)), r.animation);
}
function mo(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function ho(e, t, n, r) {
  return e == null
    ? []
    : typeof e == `string` && mo(t)
      ? da(e, n, r)
      : e instanceof NodeList
        ? Array.from(e)
        : Array.isArray(e)
          ? e.filter((e) => e != null)
          : [e];
}
function go(e, t, n) {
  return e * (t + 1) + n * t;
}
function _o(e, t, n, r) {
  return typeof t == `number`
    ? t
    : t.startsWith(`-`) || t.startsWith(`+`)
      ? Math.max(0, e + parseFloat(t))
      : t === `<`
        ? n
        : t.startsWith(`<`)
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function vo(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (Ke(e, i), r--);
  }
}
function yo(e, t, n, r, i, a) {
  vo(e, i, a);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: G(i, a, r[o]), easing: bt(n, o) });
}
function bo(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) e[t] = e[t] / r;
}
function xo(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
var So = `easeInOut`,
  Co = 20;
function wo(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    c = {},
    l = new Map(),
    u = 0,
    d = 0,
    f = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, d);
      continue;
    }
    if (!Array.isArray(o)) {
      l.set(o.name, _o(d, o.at, u, l));
      continue;
    }
    let [p, m, h = {}] = o;
    h.at !== void 0 && (d = _o(d, h.at, u, l));
    let g = 0,
      _ = (e, n, r, o = 0, s = 0) => {
        let c = Do(e),
          {
            delay: l = 0,
            times: u = er(c),
            type: p = t.type || `keyframes`,
            repeat: m,
            repeatType: h,
            repeatDelay: _ = 0,
            ...v
          } = n,
          { ease: y = t.ease || `easeOut`, duration: b } = n,
          x = typeof l == `function` ? l(o, s) : l,
          S = c.length,
          C = Wr(p) ? p : i?.[p || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && Ao(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = { ...t, ...v };
          b !== void 0 && (n.duration = j(b));
          let r = Ln(n, e, C);
          ((y = r.ease), (b = r.duration));
        }
        b ??= a;
        let w = d + x;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let T = u.length - c.length;
        if (
          (T > 0 && $n(u, T),
          c.length === 1 && c.unshift(null),
          m && `${m}${Co}`,
          m && m < Co)
        ) {
          let e = b > 0 ? _ / b : 0;
          b = go(b, m, _);
          let t = [...c],
            n = [...u];
          y = Array.isArray(y) ? [...y] : [y];
          let r = [...y],
            i = h === `reverse` || h === `mirror`,
            a = t,
            o = r;
          i &&
            ((a = [...t].reverse()),
            h === `reverse` &&
              (o = [...r]
                .reverse()
                .map((e) => (typeof e == `function` ? ct(e) : e))));
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0,
              d = l ? a : t,
              f = l ? o : r,
              p = (s + 1) * (1 + e);
            (e > 0 && (c.push(c[c.length - 1]), u.push(p), y.push(`linear`)),
              c.push(...d));
            for (let e = 0; e < d.length; e++)
              (u.push(n[e] + p), y.push(e === 0 ? `linear` : bt(f, e - 1)));
          }
          bo(u, m, e);
        }
        let ee = w + b;
        (yo(r, c, y, u, w, ee),
          (g = Math.max(x + b, g)),
          (f = Math.max(ee, f)));
      };
    if ($(p)) {
      let e = To(p, s);
      _(m, h, Eo(`default`, e));
    } else {
      let e = ho(p, m, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((m = m), (h = h));
        let r = e[n],
          i = To(r, s);
        for (let e in m) _(m[e], Oo(h, e), Eo(e, i), n, t);
      }
    }
    ((u = d), (d += g));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(xo);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(Qe(0, f, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(So)),
          c[c.length - 1] !== 1 && (c.push(1), s.push(null)),
          o.has(r) || o.set(r, { keyframes: {}, transition: {} }));
        let u = o.get(r);
        u.keyframes[i] = s;
        let { type: d, ...p } = t;
        u.transition[i] = { ...p, duration: f, ease: l, times: c, ...n };
      }
    }),
    o
  );
}
function To(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function Eo(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function Do(e) {
  return Array.isArray(e) ? e : [e];
}
function Oo(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
var ko = (e) => typeof e == `number`,
  Ao = (e) => e.every(ko);
function jo(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = ha(e) && !ga(e) ? new fo(t) : new $a(t);
  (n.mount(e), Ca.set(e, n));
}
function Mo(e) {
  let t = new to({
    presenceContext: null,
    props: {},
    visualState: { renderState: { output: {} }, latestValues: {} },
  });
  (t.mount(e), Ca.set(e, t));
}
function No(e, t) {
  return $(e) || typeof e == `number` || (typeof e == `string` && !mo(t));
}
function Po(e, t, n, r) {
  let i = [];
  if (No(e, t)) i.push(po(e, (mo(t) && t.default) || t, n && (n.default || n)));
  else {
    if (e == null) return i;
    let a = ho(e, t, r),
      o = a.length;
    for (let e = 0; e < o; e++) {
      let r = a[e],
        s = r instanceof Element ? jo : Mo;
      Ca.has(r) || s(r);
      let c = Ca.get(r),
        l = { ...n };
      (`delay` in l &&
        typeof l.delay == `function` &&
        (l.delay = l.delay(e, o)),
        i.push(...Wi(c, { ...t, transition: l }, {})));
    }
  }
  return i;
}
function Fo(e, t, n) {
  let r = [];
  return (
    wo(
      e.map((e) => {
        if (Array.isArray(e) && typeof e[0] == `function`) {
          let t = e[0],
            n = Q(0);
          return (
            n.on(`change`, t),
            e.length === 1
              ? [n, [0, 1]]
              : e.length === 2
                ? [n, [0, 1], e[1]]
                : [n, e[1], e[2]]
          );
        }
        return e;
      }),
      t,
      n,
      { spring: qn },
    ).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...Po(n, e, t));
    }),
    r
  );
}
function Io(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function Lo(e = {}) {
  let { scope: t, reduceMotion: n, skipAnimations: r } = e;
  function i(e, i, a) {
    let o = [],
      s,
      c = {};
    if (
      (n !== void 0 && (c.reduceMotion = n),
      r !== void 0 && (c.skipAnimations = r),
      Io(e))
    ) {
      let { onComplete: n, ...r } = i || {};
      (typeof n == `function` && (s = n), (o = Fo(e, { ...c, ...r }, t)));
    } else {
      let { onComplete: n, ...r } = a || {};
      (typeof n == `function` && (s = n), (o = Po(e, i, { ...c, ...r }, t)));
    }
    let l = new fi(o);
    return (
      s && l.finished.then(s),
      t &&
        (t.animations.push(l),
        l.finished.then(() => {
          Ke(t.animations, l);
        })),
      l
    );
  }
  return i;
}
var Ro = Lo(),
  zo = { some: 0, all: 1 };
function Bo(e, t, { root: n, margin: r, amount: i = `some` } = {}) {
  let a = da(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e.target, e);
              typeof n == `function`
                ? o.set(e.target, n)
                : s.unobserve(e.target);
            } else typeof n == `function` && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : zo[i] },
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
var Vo = 0.08,
  Ho = 0.7,
  Uo = `0 24px`,
  Wo = 0.15;
function Go(e) {
  let t = [];
  for (let n of e.querySelectorAll(`[data-reveal-group]`)) {
    let e = [...n.querySelectorAll(`[data-reveal]`)].filter(
      (e) => e.closest(`[data-reveal-group]`) === n,
    );
    e.length > 0 && t.push({ root: n, targets: e });
  }
  return t;
}
function Ko(e) {
  (e.removeAttribute(`data-reveal`),
    e.style.removeProperty(`opacity`),
    e.style.removeProperty(`translate`));
}
function qo({ root: e, targets: t }) {
  let n = Bo(
    e,
    () => {
      n();
      let e = () => {
        for (let e of t) Ko(e);
      };
      Ro(
        t,
        { opacity: [0, 1], translate: [Uo, `0 0px`] },
        { delay: va(Vo), duration: Ho, ease: [0.22, 1, 0.36, 1] },
      ).finished.then(e, e);
    },
    { amount: Wo },
  );
}
function Jo(e = document) {
  if (ne()) return;
  let t = Go(e);
  if (t.length !== 0) {
    (document.documentElement.style.setProperty(`--reveal-shift`, Uo),
      document.documentElement.classList.add(`js-reveal`));
    for (let e of t) qo(e);
  }
}
(h(), _(), y(), x(), ue(), ge(), we(), Me(), Re(), We(), Jo());
