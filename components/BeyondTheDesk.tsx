import PhotoGrid from "@/components/PhotoGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { athleticGallery, personalInterests } from "@/lib/data";

export default function BeyondTheDesk() {
  return (
    <section id="beyond-the-desk" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="09" title="Beyond the Desk" note="Hyrox · Running · Gym" />
        <Reveal>
          <ul className="mb-10 flex flex-wrap gap-3 md:mb-12">
            {personalInterests.map((item) => (
              <li
                key={item.label}
                className="border border-line bg-white px-5 py-3 text-sm transition-colors duration-200 hover:border-ink"
              >
                <span className="font-medium">{item.label}</span>
                {item.note ? <span className="text-muted"> — {item.note}</span> : null}
              </li>
            ))}
          </ul>
          <PhotoGrid photos={athleticGallery} />
        </Reveal>
      </div>
    </section>
  );
}
