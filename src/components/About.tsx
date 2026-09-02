import { site } from "@/lib/site";
import { promises } from "@/lib/promises";

/**
 * Единственный законный заменитель отзывов, пока клиентов нет:
 * прямо признать это и подкрепить проверяемыми обещаниями.
 * Выдуманные отзывы и счётчики «120 пар» здесь запрещены.
 */
export default function About() {
  const owner = site.owner.trim();

  return (
    <section className="border-t border-sand bg-cream/40 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <span className="eyebrow inline-flex items-center gap-3 text-bronze">
            <span className="rule" />
            Честно
          </span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,6vw,3.4rem)] leading-tight">
            Отзывов пока нет
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-ash">
          <p>
            {owner ? `Меня зовут ${owner}. ` : ""}Я начал делать эти приглашения
            недавно, и клиентских историй, которыми принято хвастаться, у меня
            ещё нет. Врать про «сотни довольных пар» не буду — вы всё равно
            проверите.
          </p>
          <p>
            Вместо отзывов предлагаю другое:{" "}
            <strong className="font-semibold text-ink">
              сначала сделаю черновик с вашими именами, и только если он вам
              понравится — вы заплатите
            </strong>
            . {promises.draft.charAt(0).toUpperCase() + promises.draft.slice(1)}{" "}
            вы увидите своё приглашение по ссылке и покажете родителям. Не
            понравилось — расходимся, вы ничего не должны.
          </p>
          <p>
            Приглашения выше — не картинки из интернета, а работающие сайты,
            которые можно открыть и потыкать прямо сейчас. Судить лучше по ним,
            чем по отзывам, которые всё равно нельзя проверить.
          </p>

          <ul className="grid gap-3 border-t border-sand pt-6 text-base sm:grid-cols-2">
            {[
              promises.free,
              promises.payment,
              `Входит ${promises.edits}`,
              promises.hosting.charAt(0).toUpperCase() + promises.hosting.slice(1),
            ].map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-bronze" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
