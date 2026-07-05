import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { interests, personalInterests } from "@/lib/data";

interface InterestListProps {
  label: string;
  items: string[];
  delay?: number;
}

function InterestList({ label, items, delay = 0 }: InterestListProps) {
  return (
    <Reveal delay={delay}>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">{label}</h3>
      <ul className="mt-5 flex flex-wrap gap-3">
        {items.map((interest) => (
          <li
            key={interest}
            className="border border-line bg-white px-5 py-3 text-sm transition-colors duration-200 hover:border-ink"
          >
            {interest}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Interests() {
  return (
    <section id="interests" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="08" title="Interests" note="Professional & personal" />
        <div className="space-y-12">
          <InterestList label="Markets & Themes" items={interests} />
          <InterestList label="Beyond the Desk" items={personalInterests} delay={100} />
        </div>
      </div>
    </section>
  );
}
