/**
 * Ботаническая графика шаблона «Bog‘» — рисуется вектором.
 *
 * Направление держится на акварели, и живая акварель здесь сильнее вектора.
 * Когда появятся лицензионные отрисовки, эти компоненты меняются на <Image>
 * один в один: пропорции и позиционирование те же.
 */

const OLIVE = "#8a8266";
const SAGE = "#a9ae95";
const BLOSSOM = "#e3c3bd";
const BLOSSOM_DEEP = "#cfa39c";

/** Ветка с цветами для угла рамки. */
export function Spray({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden
      focusable="false"
    >
      {/* стебли */}
      <g stroke={OLIVE} strokeWidth="1.1" strokeLinecap="round" opacity="0.75">
        <path d="M8 8C34 26 58 46 76 72c14 20 24 42 30 66" />
        <path d="M10 34c18 8 36 20 50 36" />
        <path d="M34 10c10 16 22 30 38 42" />
        <path d="M96 150c2-18 8-34 18-48" />
      </g>

      {/* листья */}
      <g fill={SAGE} opacity="0.62">
        {[
          [30, 24, -28], [50, 42, -18], [70, 64, -8], [86, 92, 4],
          [96, 122, 12], [22, 44, -52], [42, 60, -44], [60, 78, -36],
          [118, 122, 46], [110, 138, 38],
        ].map(([x, y, r], i) => (
          <ellipse key={i} cx={x} cy={y} rx="13" ry="5.4" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>

      {/* мелкие бутоны */}
      <g fill={BLOSSOM} opacity="0.85">
        {[[16, 60], [30, 76], [128, 108], [140, 128], [54, 18], [70, 30]].map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="4.6" ry="6.2" transform={`rotate(${i * 34} ${x} ${y})`} />
        ))}
      </g>

      {/* раскрытые цветы */}
      {[
        [58, 52, 1],
        [104, 96, 0.78],
        [26, 106, 0.62],
      ].map(([cx, cy, s], i) => (
        <g key={i} transform={`translate(${cx} ${cy}) scale(${s})`}>
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse
              key={a}
              cx="0"
              cy="-11"
              rx="7.5"
              ry="11"
              fill={BLOSSOM}
              opacity="0.92"
              transform={`rotate(${a})`}
            />
          ))}
          <circle r="4.4" fill={BLOSSOM_DEEP} />
          <circle r="1.7" fill="#b98f7f" />
        </g>
      ))}
    </svg>
  );
}

/** Тонкий разделитель между секциями. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 26" className={className} fill="none" aria-hidden focusable="false">
      <path d="M6 13h74M140 13h74" stroke={OLIVE} strokeWidth="0.9" opacity="0.5" strokeLinecap="round" />
      <g transform="translate(110 13)">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="0" cy="-6" rx="3.4" ry="6" fill={SAGE} opacity="0.62" transform={`rotate(${a})`} />
        ))}
        <circle r="2.4" fill={BLOSSOM_DEEP} opacity="0.9" />
      </g>
      <path d="M92 13l-7-4v8zM128 13l7-4v8z" fill={OLIVE} opacity="0.45" />
    </svg>
  );
}

/** Уголок двойной рамки-картуша. */
export function FrameCorner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" aria-hidden focusable="false">
      <path d="M60 1H14C6.8 1 1 6.8 1 14v46" stroke={OLIVE} strokeWidth="1" opacity="0.55" />
      <path d="M60 7H18C11.9 7 7 11.9 7 18v42" stroke={OLIVE} strokeWidth="0.6" opacity="0.35" />
      <path d="M7 26c6-2 10-6 12-12" stroke={OLIVE} strokeWidth="0.8" opacity="0.5" strokeLinecap="round" />
      <circle cx="7" cy="26" r="1.6" fill={BLOSSOM_DEEP} opacity="0.8" />
      <circle cx="19" cy="14" r="1.6" fill={BLOSSOM_DEEP} opacity="0.8" />
    </svg>
  );
}
