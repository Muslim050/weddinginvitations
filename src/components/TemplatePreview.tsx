import Image from "next/image";
import type { Template } from "@/lib/templates";

/**
 * Настоящий скриншот первого экрана шаблона в рамке «телефона».
 * Пересъёмка: откройте демо в браузере шириной 500px и сохраните
 * снимок в public/previews/<slug>.jpg.
 */
export default function TemplatePreview({
  template,
  className = "",
  priority = false,
  sizes = "(max-width: 640px) 70vw, 300px",
}: {
  template: Template;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const dark = template.slug === "nur";

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border shadow-[0_30px_70px_-30px_rgba(23,19,15,0.45)] ${
        dark ? "border-white/10" : "border-sand"
      } ${className}`}
      style={{ background: template.bg }}
    >
      <Image
        src={template.preview}
        alt={`Первый экран приглашения «${template.name}» — то, что увидит гость`}
        width={template.previewWidth}
        height={template.previewHeight}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
      {/* лёгкий блик, чтобы снимок читался как экран телефона */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
    </div>
  );
}
