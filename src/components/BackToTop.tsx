"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpIcon } from "./icons";

// A circle drawn in one pass — not quite round, slightly open at the top.
const RING =
  "M22 3.500C32.600 3.200 40.600 11.400 40.500 22C40.400 32.400 32.500 40.600 22 40.500C11.600 40.400 3.400 32.600 3.500 22C3.600 11.800 11.500 3.900 21.200 3.700";

/**
 * Back-to-top button whose outline doubles as a reading-progress meter: the
 * blue ring draws itself as you scroll down the page.
 */
export function BackToTop() {
  const t = useTranslations("Footer");
  const ref = useRef<HTMLButtonElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      ref.current?.style.setProperty("--progress", progress.toFixed(4));
      setShow(window.scrollY > 500);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      aria-label={t("backToTop")}
      title={t("backToTop")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-paper text-ink shadow-[0_8px_24px_-12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-ink hover:text-paper ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        <path d={RING} stroke="var(--color-ink)" strokeOpacity="0.2" strokeWidth="1.5" />
        <path
          d={RING}
          pathLength={1}
          stroke="var(--color-accent)"
          strokeWidth="2.200"
          strokeLinecap="round"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: "calc(1 - var(--progress, 0))",
          }}
        />
      </svg>
      <ArrowUpIcon className="relative h-5 w-5" />
    </button>
  );
}
