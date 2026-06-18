import { education, experiences } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Annotation } from "./Annotation";

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <Reveal>
        <p className="font-hand text-2xl text-accent">my path so far</p>
        <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Experience &amp;{" "}
          <span className="relative inline-block">
            Education
            <Annotation
              variant="underline"
              delay={300}
              strokeWidth={4}
              className="absolute -bottom-1.5 left-0 h-4 w-full"
            />
          </span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-16 md:grid-cols-2 md:gap-12">
        {/* Education Column */}
        <div>
          <Reveal delay={100}>
            <h3 className="font-display text-2xl font-semibold text-ink">Education</h3>
          </Reveal>
          <div className="mt-8 space-y-10">
            {education.map((edu, i) => (
              <Reveal key={i} delay={150 + i * 80}>
                <div className="relative pl-6 border-l-[1.5px] border-ink/20">
                  <div className="absolute -left-[6px] top-1.5 h-[9px] w-[9px] rounded-full border-[1.5px] border-accent bg-paper" />
                  <span className="font-sans text-base font-medium text-accent">{edu.date}</span>
                  <h4 className="mt-1 font-display text-lg font-semibold text-ink">{edu.degree}</h4>
                  <p className="text-sm font-medium text-ink/80">{edu.school}</p>
                  {edu.description && (
                    <p className="mt-2 text-sm leading-relaxed text-pencil">{edu.description}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <Reveal delay={200}>
            <h3 className="font-display text-2xl font-semibold text-ink">Experience</h3>
          </Reveal>
          <div className="mt-8 space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={250 + i * 80}>
                <div className="relative pl-6 border-l-[1.5px] border-ink/20">
                  <div className="absolute -left-[6px] top-1.5 h-[9px] w-[9px] rounded-full border-[1.5px] border-accent bg-paper" />
                  <span className="font-sans text-base font-medium text-accent">{exp.date}</span>
                  <h4 className="mt-1 font-display text-lg font-semibold text-ink">{exp.role}</h4>
                  <p className="text-sm font-medium text-ink/80">{exp.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-pencil">{exp.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
