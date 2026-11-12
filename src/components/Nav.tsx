"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { profile, sections, socials, type Social } from "@/lib/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
} from "./icons";

function SocialIcon({ kind, className }: { kind: Social["kind"]; className?: string }) {
  if (kind === "github") return <GitHubIcon className={className} />;
  if (kind === "linkedin") return <LinkedInIcon className={className} />;
  return <MailIcon className={className} />;
}

function SocialLinks() {
  return socials.map((s) => (
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
  ));
}

export function Nav() {
  const t = useTranslations("Navigation");
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Scroll-spy: mark the section currently crossing the middle of the screen.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label={t("primary")}
        className="sketch-a mx-auto flex max-w-6xl items-center justify-between gap-4 border-[1.5px] border-ink/25 bg-paper px-4 py-3 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)] sm:px-6"
      >
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3" aria-label={t("home")}>
          <span className="sketch-b grid h-9 w-9 place-items-center bg-ink font-display text-sm font-semibold text-paper">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm font-medium tracking-tight text-ink sm:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`ink-link text-sm transition-colors ${
                  active === id ? "text-ink" : "text-pencil hover:text-ink"
                }`}
              >
                {t(id)}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials + language switcher + mobile toggle */}
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            <SocialLinks />
          </div>
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-lg text-ink transition-colors hover:bg-ink/5 md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="sketch-b mx-auto mt-2 max-w-6xl border-[1.5px] border-ink/25 bg-paper p-3 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)] md:hidden"
        >
          <ul className="flex flex-col">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === id ? "true" : undefined}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-ink/5 hover:text-ink ${
                    active === id ? "font-medium text-ink" : "text-pencil"
                  }`}
                >
                  {t(id)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center gap-1 border-t border-line pt-2">
            <SocialLinks />
          </div>
        </div>
      )}
    </header>
  );
}
