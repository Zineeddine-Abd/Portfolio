import Image from "next/image";
import { useTranslations } from "next-intl";
import { profile, socials } from "@/lib/content";
import { asset } from "@/lib/site";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
        {/* Left: large frameless illustration */}
        <Reveal className="w-full max-w-sm md:w-1/2 md:max-w-lg">
          <Image
            src={asset(profile.contactImage)}
            alt={t("imageAlt")}
            width={900}
            height={900}
            sizes="(min-width: 768px) 500px, 90vw"
            className="h-auto w-full select-none object-contain mix-blend-multiply"
            draggable={false}
          />
        </Reveal>

        {/* Right: contact text & links */}
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <Reveal>
            <p className="font-hand text-2xl text-accent">{t("title")}</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {t.rich("headline", {
                u: (chunks) => <span className="ink-underline">{chunks}</span>,
              })}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-pencil md:mx-0">
              {t("description")}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
              <a
                href={`mailto:${profile.email}`}
                className="sketch-a inline-flex items-center gap-2 border-[1.5px] border-ink bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-pencil"
              >
                {t("button")}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="ink-link text-sm text-pencil"
              >
                {profile.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex items-center justify-center gap-2 md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.kind === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="sketch-b grid h-11 w-11 place-items-center border-[1.5px] border-ink/30 text-pencil transition-colors hover:border-ink hover:text-ink"
                >
                  {s.kind === "github" && <GitHubIcon className="h-5 w-5" />}
                  {s.kind === "linkedin" && <LinkedInIcon className="h-5 w-5" />}
                  {s.kind === "mail" && <MailIcon className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
