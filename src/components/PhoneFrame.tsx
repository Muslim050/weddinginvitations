import type { ReactNode } from "react";

/**
 * Корпус телефона вокруг живого макета приглашения.
 * Рисуется CSS: ни одной растровой картинки и ни одного чужого фото.
 */
export default function PhoneFrame({
  children,
  className = "",
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 -z-10 rounded-[4rem] opacity-70 blur-2xl"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 40%, rgba(169,122,63,0.28), transparent 70%)",
          }}
        />
      )}

      <div className="relative rounded-[2.6rem] bg-gradient-to-b from-[#2c2722] to-[#100e0c] p-[3px] shadow-[0_40px_90px_-40px_rgba(23,19,15,0.7)]">
        <div className="relative overflow-hidden rounded-[2.45rem] bg-black">
          {/* «Чёлка» */}
          <div
            aria-hidden
            className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black"
          />
          {children}
        </div>
      </div>
    </div>
  );
}
