import Image from "next/image";
import { useMessages, useTranslations } from "next-intl";
import { profile } from "@/lib/content";
import { asset } from "@/lib/site";
import { Annotation } from "./Annotation";
import { Reveal } from "./Reveal";

export function About() {
  const t = useTranslations("About");
  const { paragraphs, facts } = useMessages().About;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        {/* Illustration panel */}
        <Reveal>
          <div className="sketch-b mx-auto flex w-full max-w-xs items-end justify-center overflow-hidden border-[1.5px] border-ink/70 bg-paper-2 px-6 pt-6">
            <Image
              src={asset(profile.aboutImage)}
              alt={t("imageAlt")}
              width={600}
              height={600}
              sizes="(min-width: 640px) 320px, 80vw"
              className="h-auto w-full select-none mix-blend-multiply"
              draggable={false}
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="font-hand text-2xl text-accent">{t("title")}</p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.rich("headline", {
                // The circled words stay on one line so the loop never breaks.
                mark: (chunks) => (
                  <span className="relative inline-block whitespace-nowrap">
                    {chunks}
                    <Annotation
                      variant="circle"
                      delay={300}
                      strokeWidth={3}
                      className="absolute -inset-x-4 -inset-y-3 h-[150%] w-[calc(100%+2rem)]"
                    />
                  </span>
                ),
              })}
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
