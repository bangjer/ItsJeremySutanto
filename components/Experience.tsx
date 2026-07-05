import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="03" title="Experience" note="Internships" />
        <div>
          {experience.map((item, i) => (
            <Reveal key={item.company}>
              <article className="group grid gap-5 border-t border-line py-10 transition-colors duration-200 hover:bg-white md:-mx-4 md:grid-cols-12 md:gap-8 md:px-4">
                <p className="font-mono text-xs text-muted md:col-span-1 md:pt-2">0{i + 1}</p>
                <div className="md:col-span-5">
                  <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-muted">{item.company}</p>
                </div>
                <div className="md:col-span-6">
                  <p className="max-w-md text-sm leading-relaxed text-muted">{item.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line bg-white px-3 py-1 text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
