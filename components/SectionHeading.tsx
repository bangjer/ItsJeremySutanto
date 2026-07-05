interface SectionHeadingProps {
  index: string;
  title: string;
  note?: string;
}

export default function SectionHeading({ index, title, note }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-baseline justify-between gap-4 md:mb-16">
      <h2 className="flex items-baseline gap-3 text-xs font-semibold uppercase tracking-[0.25em]">
        <span aria-hidden="true" className="font-mono font-normal text-muted">
          ({index})
        </span>
        {title}
      </h2>
      {note ? (
        <p className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:block">
          {note}
        </p>
      ) : null}
    </div>
  );
}
