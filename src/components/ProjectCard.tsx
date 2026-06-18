import { type Project } from "@/lib/content";
import { ArrowUpRightIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="group relative flex h-full flex-col rounded-xl border-[1.5px] border-ink/70 p-4 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-[0_14px_34px_-20px_rgba(0,0,0,0.45)] sm:p-5"
    >
      {/* Margin note for highlighted projects */}
      {project.note && (
        <span className="pointer-events-none absolute -right-1 -top-3 z-10 rotate-6 font-hand text-lg text-accent">
          {project.note}
        </span>
      )}

      {/* Preview image */}
      <div className="overflow-hidden rounded-lg border border-ink/10 bg-paper-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} — preview`}
          width={1600}
          height={900}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-sm text-faint">{project.year}</span>
          <ArrowUpRightIcon className="h-5 w-5 text-pencil transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 leading-relaxed text-pencil">{project.blurb}</p>
        <ul className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-ink/20 px-3 py-1 text-xs text-pencil"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
