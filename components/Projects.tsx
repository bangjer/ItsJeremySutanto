import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight } from "@/components/icons";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="05" title="Selected Projects" note="Academic & independent work" />
        <ul className="border-b border-line">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal>
                <article className="group grid gap-4 border-t border-line py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10">
                  <p className="font-mono text-xs text-muted md:col-span-1">0{i + 1}</p>
                  <div className="md:col-span-7">
                    <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-200 group-hover:text-accent md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 md:col-span-3 md:justify-end">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="hidden md:col-span-1 md:flex md:justify-end">
                    <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink" />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
