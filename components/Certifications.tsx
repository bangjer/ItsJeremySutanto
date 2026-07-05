import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="07" title="Certifications" />
        <Reveal>
          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification, i) => (
              <li
                key={certification.name}
                className="flex min-h-36 flex-col justify-between gap-6 bg-paper p-6"
              >
                <p className="font-mono text-xs text-muted">0{i + 1}</p>
                <div>
                  <h3 className="text-sm font-semibold leading-snug">{certification.name}</h3>
                  <p className="mt-1 text-xs text-muted">
                    {certification.issuer ?? "Certification"}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
