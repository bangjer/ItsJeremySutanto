import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { highlights } from "@/lib/data";

export default function Snapshot() {
  return (
    <section id="snapshot" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="01" title="Snapshot" note="Key highlights" />
        <Reveal>
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {highlights.map((highlight, i) => (
              <li
                key={highlight.title}
                className={`bg-paper p-6 md:p-7 ${
                  i === highlights.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <p className="font-mono text-xs text-muted">0{i + 1}</p>
                <h3 className="mt-6 text-sm font-semibold md:mt-10">{highlight.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{highlight.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
