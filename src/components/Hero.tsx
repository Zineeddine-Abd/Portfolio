import { profile } from "@/lib/content";
import { Annotation } from "./Annotation";
import { Reveal } from "./Reveal";
import { ArrowUpRightIcon } from "./icons";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-32 sm:pt-40 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:pb-24"
    >
      {/* Left — the thesis */}
      <div className="order-2 md:order-1">
        <Reveal>
          <p className="font-hand text-2xl text-accent">{t("lead")}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-2 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]">
            {t("headline")}{" "}
            <span className="relative inline-block">
              {t("headlineAccent")}
              <Annotation
                variant="underline"
                delay={650}
                strokeWidth={4}
                className="absolute -bottom-2 left-0 h-4 w-full"
              />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pencil">
            {t("sub")}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-pencil"
            >
              {t("ctaContact")}
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl border border-ink/80 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
            >
              {t("ctaWork")}
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 text-sm text-faint">{t("location")}</p>
        </Reveal>
      </div>

      {/* Right — the character */}
      <div className="relative flex justify-center order-1 md:order-2">
        <div className="relative w-[min(68vw,400px)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.heroImage}
            alt={profile.heroImageAlt}
            width={420}
            height={420}
            className="float-soft h-auto w-full select-none"
            draggable={false}
          />
          {/* Hand-written margin note + arrow pointing at the character */}
          <div className="pointer-events-none absolute -left-2 top-6 hidden -rotate-6 sm:block">
            <span className="font-hand text-xl text-pencil">{t("thatsMe")}</span>
            <Annotation
              variant="arrow"
              delay={900}
              strokeWidth={3}
              color="var(--color-pencil)"
              className="ml-6 mt-1 h-12 w-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
