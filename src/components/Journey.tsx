import type { ReactNode } from "react";
import { useMessages, useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

/** One column of the timeline: a hand-drawn line with a pen dot per entry. */
function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative mt-8 space-y-10">
      <li aria-hidden="true" className="absolute left-0 top-2 h-[calc(100%-0.5rem)] w-3">
        <svg
          viewBox="0 0 12 100"
          preserveAspectRatio="none"
          fill="none"
          className="h-full w-full text-ink/30"
        >
          <path
            d="M6 0c3 9-3 17 0 26s3 16 0 25-3 16 0 25 2 16 0 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </li>
      {children}
    </ol>
  );
}

function Entry({
  date,
  title,
  place,
  description,
  delay,
}: {
  date: string;
  title: string;
  place: string;
  description: string;
  delay: number;
}) {
  return (
    <li className="relative pl-8">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="absolute -left-[2px] top-1 h-4 w-4"
      >
        <path
          d="M8.2 2.6c3.3-.3 5.6 2 5.4 5.3-.2 3.2-2.5 5.4-5.7 5.3C4.800 13.100 2.600 10.900 2.700 7.800c.1-3 2.300-5.200 5.900-5"
          fill="var(--color-paper)"
          stroke="var(--color-accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <Reveal delay={delay}>
        <span className="font-sans text-base font-medium text-accent">{date}</span>
        <h4 className="mt-1 font-display text-lg font-semibold text-ink">{title}</h4>
        <p className="text-sm font-medium text-ink/80">{place}</p>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-pencil">{description}</p>
        )}
      </Reveal>
    </li>
  );
}

export function Journey() {
  const t = useTranslations("Journey");
  const { education, experiences } = useMessages().Journey;

  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-hand text-2xl text-accent">{t("title")}</p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t.rich("headline", {
            u: (chunks) => <span className="ink-underline">{chunks}</span>,
          })}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <Reveal delay={100}>
            <h3 className="font-display text-2xl font-semibold text-ink">
              {t("educationTitle")}
            </h3>
          </Reveal>
          <Timeline>
            {education.map((edu, i) => (
              <Entry
                key={edu.degree}
                date={edu.date}
                title={edu.degree}
                place={edu.school}
                description={edu.description}
                delay={150 + i * 80}
              />
            ))}
          </Timeline>
        </div>

        <div>
          <Reveal delay={200}>
            <h3 className="font-display text-2xl font-semibold text-ink">
              {t("experienceTitle")}
            </h3>
          </Reveal>
          <Timeline>
            {experiences.map((exp, i) => (
              <Entry
                key={exp.role}
                date={exp.date}
                title={exp.role}
                place={exp.company}
                description={exp.description}
                delay={250 + i * 80}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
}
