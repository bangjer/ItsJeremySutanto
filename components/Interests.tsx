import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { interests, personalInterests, type PersonalInterest } from "@/lib/data";

interface InterestListProps {
  label: string;
  items: PersonalInterest[];
  delay?: number;
}

function InterestList({ label, items, delay = 0 }: InterestListProps) {
  return (
    <Reveal delay={delay}>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">{label}</h3>
      <ul className="mt-5 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="border border-line bg-white px-5 py-3 text-sm transition-colors duration-200 hover:border-ink"
          >
            <span className="font-medium">{item.label}</span>
            {item.note ? <span className="text-muted"> — {item.note}</span> : null}
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
        <SectionHeading index="07" title="Interests" note="Professional & personal" />
        <div className="space-y-12">
          <InterestList
            label="Markets & Themes"
            items={interests.map((interest) => ({ label: interest }))}
          />
          <InterestList label="Beyond the Desk" items={personalInterests} delay={100} />
        </div>
      </div>
    </section>
  );
}
