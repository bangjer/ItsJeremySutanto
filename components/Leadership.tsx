import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="04" title="Leadership & Activities" note="Warwick · Leeds" />
        <Reveal>
          <ul className="grid gap-px border border-line bg-line md:grid-cols-3">
            {leadership.map((item) => (
              <li key={item.role} className="flex flex-col bg-paper p-6 md:p-7">
                <h3 className="text-base font-semibold leading-snug">{item.role}</h3>
                <p className="mt-1 text-sm text-muted">{item.organisation}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted md:mt-8">{item.summary}</p>
                <p className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {item.focus.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
