import { profile, socials } from "@/lib/content";
import { Annotation } from "./Annotation";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
        
        {/* Left Side: Large Frameless Image */}
        <Reveal className="w-full max-w-sm md:w-1/2 md:max-w-lg">
          <img
            src="/pc-avatar.png"
            alt="PC Avatar"
            className="h-auto w-full object-contain drop-shadow-xl"
          />
        </Reveal>

        {/* Right Side: Contact Text & Links */}
        <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <Reveal>
            <p className="font-hand text-2xl text-accent">open to opportunities</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              Ready to engineer your next{" "}
              <span className="relative inline-block">
                breakthrough
                <Annotation
                  variant="underline"
                  delay={300}
                  strokeWidth={4}
                  className="absolute -bottom-1.5 left-0 h-4 w-full"
                />
              </span>
              .
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-pencil md:mx-0">
              I am actively seeking new opportunities to apply my expertise in software development, AI, and data engineering. Let&apos;s connect and discuss how I can bring value to your team and help drive your projects forward.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-pencil"
              >
                Let&apos;s collaborate
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex items-center justify-center gap-2 md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.kind === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-ink/20 text-pencil transition-colors hover:border-ink hover:text-ink"
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
