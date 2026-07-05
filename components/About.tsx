import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="08" title="About" />
        <div className="grid md:grid-cols-12">
          <Reveal className="md:col-span-10 lg:col-span-9">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl md:leading-[1.2]">
              {about}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
