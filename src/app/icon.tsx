import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Монограмма вместо дефолтного фавикона Next. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17130f",
          color: "#c9a06a",
          fontSize: 38,
          fontFamily: "Georgia, serif",
        }}
      >
        N
      </div>
    ),
    size
  );
}
