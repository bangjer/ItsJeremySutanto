import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight } from "@/components/icons";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="06" title="Certifications" note="Click to open the original" />
        <ul className="border-b border-line">
          {certifications.map((certification, i) => (
            <li key={certification.name}>
              <Reveal>
                <a
                  href={certification.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid gap-1 border-t border-line py-5 pr-10 transition-colors duration-200 hover:bg-white md:-mx-4 md:grid-cols-12 md:items-baseline md:gap-8 md:px-4"
                >
                  <p className="hidden font-mono text-xs text-muted md:col-span-1 md:block">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-sm font-semibold leading-snug md:col-span-5">
                    {certification.name}
                  </h3>
                  <p className="text-sm text-muted md:col-span-3">{certification.issuer}</p>
                  <p className="font-mono text-xs text-muted md:col-span-2">
                    {certification.year ?? ""}
                  </p>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 md:static md:col-span-1 md:flex md:translate-y-0 md:justify-end">
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
