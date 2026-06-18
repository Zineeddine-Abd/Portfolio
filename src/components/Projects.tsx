"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { projects as originalProjects } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { useTranslations } from "next-intl";

export function Projects() {
  const t = useTranslations("Projects");
  const translatedItems: any[] = t.raw("items");
  const [showAll, setShowAll] = useState(false);

  const mergedProjects = originalProjects.map((p, i) => ({
    ...p,
    ...translatedItems[i],
  }));

  const visibleProjects = showAll ? mergedProjects : mergedProjects.slice(0, 4);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (showAll) {
      // Record the button's position relative to the viewport before shrinking
      const btn = e.currentTarget;
      const topOffset = btn.getBoundingClientRect().top;
      
      // Force React to update the DOM synchronously before the browser paints
      flushSync(() => {
        setShowAll(false);
      });
      
      // The DOM is updated, so instantly adjust the scroll position
      const newTop = btn.getBoundingClientRect().top;
      window.scrollBy({ top: newTop - topOffset, behavior: "instant" });
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-hand text-2xl text-accent">{t("title")}</p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("headline")}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {visibleProjects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 4) * 90} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {mergedProjects.length > 4 && (
        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleToggle}
              className="cursor-pointer rounded-xl border-[1.5px] border-ink/20 px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink focus:outline-none"
            >
              {showAll ? t("showLess") : t("showMore")}
            </button>
          </div>
        </Reveal>
      )}
    </section>
  );
}
