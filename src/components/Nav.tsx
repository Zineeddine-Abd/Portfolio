"use client";

import { useEffect, useState } from "react";
import { navLinks, profile, socials, type Social } from "@/lib/content";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
  CloseIcon,
} from "./icons";

function SocialIcon({ kind, className }: { kind: Social["kind"]; className?: string }) {
  if (kind === "github") return <GitHubIcon className={className} />;
  if (kind === "linkedin") return <LinkedInIcon className={className} />;
  return <MailIcon className={className} />;
}

export function Nav() {
  const t = useTranslations("Navigation");
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-4 py-3 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.2)] sm:px-6">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name} — home`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink font-display text-sm font-semibold text-paper">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-medium tracking-tight text-ink sm:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            const linkKey = link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`ink-link pb-0.5 text-sm transition-colors ${
                    isActive ? "text-ink" : "text-pencil hover:text-ink"
                  }`}
                >
                  {t(linkKey)}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Socials + language switcher + mobile toggle */}
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.kind === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-lg text-pencil transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <SocialIcon kind={s.kind} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-paper p-3 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)] md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const linkKey = link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-pencil transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    {t(linkKey)}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-2 flex items-center gap-1 border-t border-line pt-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.kind === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-lg text-pencil transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <SocialIcon kind={s.kind} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
