import Reveal from "@/components/Reveal";
import { ArrowDown } from "@/components/icons";
import { site } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative">
      {/* Editorial side rail, visible on very wide screens only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 border-r border-line 2xl:block"
      >
        <p className="absolute left-1/2 top-28 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-muted [writing-mode:vertical-rl]">
          Finance · Business · Markets
        </p>
        <p className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-muted [writing-mode:vertical-rl]">
          2026
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-28 md:px-10 md:pt-36 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-8 xl:col-span-7">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              — Hi, I&apos;m Jeremy Sutanto
            </p>
            <h1 className="mt-8 font-display text-[clamp(3.5rem,10.5vw,9rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
              Finance,
              <br />
              Business
              <br />
              <span className="text-stroke">&amp; Markets</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 max-w-md text-base leading-relaxed text-muted md:text-lg">
              A postgraduate business and finance student combining UK study with practical
              experience across treasury, funding, accounting and financial analysis.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="inline-flex h-12 items-center bg-ink px-7 text-sm font-medium text-paper transition-colors duration-200 hover:bg-accent"
              >
                View Experience
              </a>
              <a
                href={site.cvPath}
                download
                className="group inline-flex h-12 items-center gap-2 border border-ink px-7 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper"
              >
                Download CV
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
            </div>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-muted">
              {site.location}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-4 xl:col-span-5">
          <Reveal delay={200} className="lg:ml-auto lg:max-w-md">
            {/*
              Portrait placeholder — to use your own black & white portrait, drop
              `portrait.jpg` into /public and replace the <div> below with:

              <Image
                src="/portrait.jpg"
                alt="Portrait of Jeremy Sutanto"
                width={480}
                height={640}
                className="aspect-[3/4] w-full border border-line object-cover grayscale"
                priority
              />

              (import Image from "next/image" at the top of this file)
            */}
            <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden border border-line bg-[#f1f1ed]">
              <span
                aria-hidden="true"
                className="font-display text-8xl font-semibold tracking-tight text-ink/10"
              >
                JS
              </span>
              <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Portrait — 3:4 · B&amp;W
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <span>MSc Business &amp; Finance</span>
              <span>Warwick</span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#snapshot"
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-200 hover:text-ink"
          >
            Scroll down
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Portfolio — 2026
          </p>
        </div>
      </div>
    </section>
  );
}
