import Reveal from "@/components/Reveal";
import { ArrowDown, ArrowUp, ArrowUpRight } from "@/components/icons";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:px-10 md:pt-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/60">
          (10) Contact
        </p>
        <Reveal>
          <h2 className="mt-10 font-display text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            Let&apos;s connect.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-paper/70">
            Open to conversations across finance, business and markets — reach out any time.
          </p>
          <div className="mt-12 flex flex-col items-start gap-5">
            <a
              href={`mailto:${site.email}`}
              className="break-all font-display text-xl font-medium tracking-tight underline decoration-paper/30 underline-offset-8 transition-colors duration-200 hover:decoration-paper md:text-3xl"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center gap-2 text-paper/70 transition-colors duration-200 hover:text-paper"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="mt-12">
            <a
              href={site.cvPath}
              download
              className="group inline-flex h-12 items-center gap-2 bg-paper px-7 text-sm font-medium text-ink transition-colors duration-200 hover:bg-white"
            >
              Download CV
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Oversized signature, cropped at the bottom edge */}
      <div aria-hidden="true" className="select-none overflow-hidden">
        <p className="translate-y-[14%] whitespace-nowrap text-center font-display text-[13vw] font-bold leading-none tracking-[-0.04em] text-white/5">
          Jeremy Sutanto
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/60 md:px-10">
          <p>© {new Date().getFullYear()} Jeremy Sutanto</p>
          <p>{site.location}</p>
          <a
            href="#top"
            className="group inline-flex min-h-11 items-center gap-2 transition-colors duration-200 hover:text-paper"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
