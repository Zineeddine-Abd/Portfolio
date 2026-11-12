import { useMessages, useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

export function Skills() {
  const t = useTranslations("Skills");
  const { groups } = useMessages().Skills;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-hand text-2xl text-accent">{t("title")}</p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("headline")}
        </h2>
      </Reveal>

      {/* One row per family: label on the left, tools on the right. */}
      <dl className="mt-10 border-t border-ink/15">
        {groups.map((group, i) => (
          <Reveal key={group.group} delay={i * 70}>
            <div className="grid gap-3 border-b border-ink/15 py-5 md:grid-cols-[13rem_1fr] md:items-center md:gap-8">
              <dt className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
                {group.group}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="sketch-c border border-ink/30 px-3 py-1.5 text-sm text-pencil transition-colors hover:border-ink hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
