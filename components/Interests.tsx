import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { interests } from "@/lib/data";

export default function Interests() {
  return (
    <section id="interests" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="08" title="Interests" note="Markets & themes" />
        <Reveal>
          <ul className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <li
                key={interest}
                className="border border-line bg-white px-5 py-3 text-sm transition-colors duration-200 hover:border-ink"
              >
                {interest}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
