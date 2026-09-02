import { ImageResponse } from "next/og";
import { PRICES } from "@/lib/pricing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Электронные пригласительные на свадьбу";

/**
 * Без этого ссылка на сайт в Telegram и Instagram выглядит голым текстом.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf7f2",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a97a3f",
          }}
        >
          Nikoh · Ташкент
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 82, lineHeight: 1.05, color: "#17130f" }}>
            Одна ссылка — и приглашена вся свадьба
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#7c7168" }}>
            Приглашение на русском и узбекском · от{" "}
            {PRICES.chinor.toLocaleString("ru-RU")} сум
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#a97a3f" }}>
          Черновик бесплатно — платите, если понравится
        </div>
      </div>
    ),
    size
  );
}
