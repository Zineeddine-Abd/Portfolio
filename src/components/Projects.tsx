"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import { useMessages, useTranslations } from "next-intl";
import { projects } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

/** How many projects show before "show more". */
const INITIAL = 4;

export function Projects() {
  const t = useTranslations("Projects");
  const items = useMessages().Projects.items;
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, INITIAL);
  const hiddenCount = projects.length - INITIAL;

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!showAll) {
      setShowAll(true);
      return;
    }
    // Collapsing: keep the button under the cursor instead of letting the
    // page jump. Measure, update the DOM synchronously, then compensate.
    const btn = e.currentTarget;
    const before = btn.getBoundingClientRect().top;
    flushSync(() => setShowAll(false));
    const after = btn.getBoundingClientRect().top;
    window.scrollBy({ top: after - before, behavior: "instant" });
  };

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-hand text-2xl text-accent">{t("title")}</p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("headline")}
        </h2>
      </Reveal>

      <ul id="project-list" className="mt-10 grid gap-6 sm:grid-cols-2">
        {visible.map((project, i) => (
          <li key={project.id}>
            <Reveal delay={(i % INITIAL) * 90} className="h-full">
              <ProjectCard
                project={project}
                copy={items[project.id]}
                demoLabel={t("demo")}
                sketchAlt={t("sketchAlt", { title: project.title })}
              />
            </Reveal>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={handleToggle}
              aria-expanded={showAll}
              aria-controls="project-list"
              className="sketch-c cursor-pointer border-[1.5px] border-ink/40 px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink/5"
            >
              {showAll ? t("showLess") : t("showMore", { count: hiddenCount })}
            </button>
          </div>
        </Reveal>
      )}
    </section>
  );
}
