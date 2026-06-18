import { projects as originalProjects } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { useTranslations } from "next-intl";

export function Projects() {
  const t = useTranslations("Projects");
  const translatedItems: any[] = t.raw("items");

  const mergedProjects = originalProjects.map((p, i) => ({
    ...p,
    ...translatedItems[i],
  }));

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-hand text-2xl text-accent">{t("title")}</p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("headline")}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {mergedProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
