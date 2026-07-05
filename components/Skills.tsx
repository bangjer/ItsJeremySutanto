import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="05" title="Skills" note="Finance · Technical · Business" />
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.group} delay={groupIndex * 80}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                {group.group}
              </h3>
              <ul className="mt-5">
                {group.items.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-3 text-sm"
                  >
                    <span>{item}</span>
                    <span aria-hidden="true" className="font-mono text-[10px] text-muted">
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
