import { profile } from "@/lib/content";
import { Annotation } from "./Annotation";
import { Reveal } from "./Reveal";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");
  const paragraphs: string[] = t.raw("paragraphs");
  const facts: { label: string; value: string }[] = t.raw("facts");

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        {/* Illustration panel */}
        <Reveal>
          <div className="relative mx-auto w-full max-w-xs">
            <div className="flex items-end justify-center rounded-2xl border-[1.5px] border-ink/70 bg-paper-2 px-6 pt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.aboutImage}
                alt={profile.aboutImageAlt}
                width={300}
                height={300}
                className="h-auto w-full select-none"
                draggable={false}
              />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="font-hand text-2xl text-accent">{t("title")}</p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("headline")}{" "}
              <span className="relative inline-block">
                {t("headlineAccent")}
                <Annotation
                  variant="circle"
                  delay={300}
                  strokeWidth={3}
                  className="absolute -inset-x-4 -inset-y-3 h-[150%] w-[calc(100%+2rem)]"
                />
              </span>
              .
            </h2>
          </Reveal>

          {paragraphs.map((para, i) => (
            <Reveal key={i} delay={120 + i * 80}>
              <p className="mt-5 max-w-xl leading-relaxed text-pencil">{para}</p>
            </Reveal>
          ))}

          <Reveal delay={320}>
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label} className="border-t-2 border-ink/15 pt-3">
                  <dt className="text-xs uppercase tracking-wider text-faint">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-display text-sm font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
