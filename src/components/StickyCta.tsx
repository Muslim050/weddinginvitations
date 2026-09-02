"use client";

import { useEffect, useState } from "react";
import { price } from "@/lib/site";
import { PRICES } from "@/lib/pricing";

/**
 * На мобильном между вторым и последним экраном не было ни одной кнопки заявки.
 * Панель появляется после первого экрана и прячется, когда форма уже на виду.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const order = document.getElementById("order");

    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.9;
      const orderVisible = order
        ? order.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setShow(past && !orderVisible);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-sand bg-ivory/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-display text-lg leading-none">
            от {price(PRICES.chinor)}
          </div>
          <div className="truncate text-xs text-muted">Черновик бесплатно</div>
        </div>
        <a
          href="#order"
          className="flex-none rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory"
        >
          Хочу черновик
        </a>
      </div>
    </div>
  );
}
