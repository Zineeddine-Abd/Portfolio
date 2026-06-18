import { Reveal } from "./Reveal";
import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("Skills");
  const groups: any[] = t.raw("groups");

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28"
    >
      <Reveal>
        <p className="font-hand text-2xl text-accent">{t("title")}</p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("headline")}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => (
          <Reveal key={group.group} delay={i * 80}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink">
              {group.group}
            </h3>
            <div className="mt-3 h-[2px] w-10 bg-ink" />
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item: string) => (
                <li
                  key={item}
                  className="rounded-full border border-ink/25 px-3 py-1.5 text-sm text-pencil transition-colors hover:border-ink hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
