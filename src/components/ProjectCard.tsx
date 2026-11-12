import Image from "next/image";
import type { Project } from "@/lib/content";
import { asset } from "@/lib/site";
import { ArrowUpRightIcon } from "./icons";

type Props = {
  project: Project;
  copy: { blurb: string; tags: string[]; note: string };
  demoLabel: string;
  sketchAlt: string;
};

const previewClass =
  "aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]";

export function ProjectCard({ project, copy, demoLabel, sketchAlt }: Props) {
  return (
    <article className="sketch-card sketch-a group relative flex h-full flex-col border-[1.5px] border-ink/70 p-4 transition-transform duration-200 hover:-translate-y-1 sm:p-5">
      {/* Margin note for highlighted projects */}
      {copy.note && (
        <span className="pointer-events-none absolute -right-1 -top-3 z-10 rotate-6 font-hand text-lg text-accent">
          {copy.note}
        </span>
      )}

      {/* Preview: a sketch (SVG, served as-is) or a real screenshot (optimized) */}
      <div className="sketch-b overflow-hidden border border-ink/15 bg-paper-2">
        {project.image.endsWith(".svg") ? (
          // eslint-disable-next-line @next/next/no-img-element -- vector sketch, nothing to optimize
          <img
            src={asset(project.image)}
            alt={sketchAlt}
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
            className={previewClass}
          />
        ) : (
          <Image
            src={asset(project.image)}
            alt={project.title}
            width={1280}
            height={720}
            sizes="(min-width: 640px) 540px, 92vw"
            className={previewClass}
          />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-sm text-faint">{project.year}</span>
          <ArrowUpRightIcon className="h-5 w-5 text-pencil transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink">
          {/* The link stretches over the whole card (see ::after). */}
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </a>
        </h3>
        <p className="mt-2 leading-relaxed text-pencil">{copy.blurb}</p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-5">
          <ul className="flex flex-wrap gap-2">
            {copy.tags.map((tag) => (
              <li
                key={tag}
                className="sketch-c border border-ink/25 px-3 py-1 text-xs text-pencil"
              >
                {tag}
              </li>
            ))}
          </ul>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link relative z-10 text-sm font-medium text-accent"
            >
              {demoLabel} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
