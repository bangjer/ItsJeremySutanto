import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="02" title="Education" note="United Kingdom" />
        <div>
          {education.map((item) => (
            <Reveal key={item.school}>
              <article className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                    {item.school}
                  </h3>
                  <p className="mt-2 text-muted">{item.degree}</p>
                </div>
                <ul className="flex flex-wrap content-start gap-2 md:col-span-4">
                  {item.focus.map((topic) => (
                    <li
                      key={topic}
                      className="border border-line bg-white px-3 py-1 text-xs text-muted"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="md:col-span-3 md:text-right">
                  <p className="font-mono text-sm">{item.period}</p>
                  <p className="mt-1 text-sm text-muted">{item.grade}</p>
                  {item.detail ? <p className="mt-1 text-sm text-muted">{item.detail}</p> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
