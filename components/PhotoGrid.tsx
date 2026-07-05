import Image from "next/image";
import { type GalleryImage } from "@/lib/data";

// Distribute photos across columns, always adding to the currently shortest one,
// so the columns end up roughly balanced regardless of mixed aspect ratios.
function packColumns(photos: GalleryImage[], count = 2): GalleryImage[][] {
  const columns: GalleryImage[][] = Array.from({ length: count }, () => []);
  const heights = new Array(count).fill(0);
  for (const photo of photos) {
    let shortest = 0;
    for (let i = 1; i < count; i += 1) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(photo);
    heights[shortest] += photo.height / photo.width;
  }
  return columns;
}

export default function PhotoGrid({ photos }: { photos: GalleryImage[] }) {
  const columns = packColumns(photos);

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {columns.map((column, i) => (
        <div key={`col-${i}`} className="flex flex-col gap-5">
          {column.map((photo) => (
            <figure key={photo.src}>
              <div className="overflow-hidden border border-line bg-[#f1f1ed]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 640px) 45vw, 92vw"
                  className="h-auto w-full grayscale transition-transform duration-500 ease-out hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
