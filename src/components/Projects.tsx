import { projects } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-hand text-2xl text-accent">selected work</p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Things I&apos;ve built
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
