import PhotoGrid from "@/components/PhotoGrid";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { internshipGallery } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading index="04" title="Gallery" note="Internships & professional life" />
        <Reveal>
          <PhotoGrid photos={internshipGallery} />
        </Reveal>
      </div>
    </section>
  );
}
