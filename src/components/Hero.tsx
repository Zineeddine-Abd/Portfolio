import Image from "next/image";
import { useTranslations } from "next-intl";
import { profile } from "@/lib/content";
import { asset } from "@/lib/site";
import { Annotation } from "./Annotation";
import { Reveal } from "./Reveal";
import { ArrowUpRightIcon } from "./icons";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 pb-16 pt-28 sm:pt-40 md:grid-cols-[1.05fr_0.95fr] md:gap-6 md:pb-24"
    >
      {/* Left — the thesis */}
      <div className="order-2 md:order-1">
        <Reveal>
          <p className="font-hand text-2xl text-accent">{t("lead")}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-2 font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl sm:leading-[1.1] lg:text-[3.4rem]">
            {t.rich("headline", {
              u: (chunks) => <span className="ink-underline">{chunks}</span>,
            })}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pencil">
            {t("sub")}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-4">
            <a
              href="#contact"
              className="sketch-a inline-flex items-center gap-2 border-[1.5px] border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-pencil"
            >
              {t("ctaContact")}
            </a>
            <a
              href="#work"
              className="sketch-b group inline-flex items-center gap-2 border-[1.5px] border-ink/80 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
            >
              {t("ctaWork")}
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {profile.cvUrl && (
              <a
                href={asset(profile.cvUrl)}
                download
                className="ink-link ml-2 text-sm font-medium text-ink"
              >
                {t("ctaCv")}
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 text-sm text-faint">{t("location")}</p>
        </Reveal>
      </div>

      {/* Right — the character (first on phones) */}
      <div className="relative order-1 flex justify-center md:order-2">
        <div className="relative w-[min(56vw,400px)]">
          <Image
            src={asset(profile.heroImage)}
            alt={t("imageAlt")}
            width={800}
            height={800}
            preload
            sizes="(min-width: 768px) 400px, 56vw"
            className="float-soft h-auto w-full select-none mix-blend-multiply"
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
