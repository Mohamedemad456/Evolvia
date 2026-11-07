import type { ReactNode } from 'react';

/** Dark page header shared by inner pages, so the transparent nav reads well everywhere. */
const PageHero = ({ eyebrow, title, subtitle, children }: { eyebrow: string; title: string; subtitle: string; children?: ReactNode }) => (
  <section className="relative isolate overflow-hidden bg-ink-gradient grain text-white">
    <div className="absolute inset-0 -z-10 bg-grid-dark" />
    {/* concentric rings echoing the home-page network */}
    <svg className="absolute -end-40 -top-40 -z-10 h-[640px] w-[640px] opacity-60 sm:-end-20" viewBox="0 0 640 640" aria-hidden="true">
      {[120, 200, 280].map((r) => (
        <circle key={r} cx="320" cy="320" r={r} fill="none" stroke="rgba(147,197,253,0.14)" />
      ))}
      <g className="animate-spin-slow">
        <circle cx="320" cy="40" r="6" fill="#38bdf8" />
        <circle cx="600" cy="320" r="4" fill="#93c5fd" />
      </g>
    </svg>
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44">
      <span className="eyebrow animate-rise !text-glow">{eyebrow}</span>
      <h1 className="font-display animate-rise mt-5 max-w-4xl text-5xl font-extrabold leading-[1.02] sm:text-7xl" style={{ ['--delay' as string]: '100ms' }}>
        {title}
      </h1>
      <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl" style={{ ['--delay' as string]: '200ms' }}>
        {subtitle}
      </p>
      {children}
    </div>
  </section>
);

export default PageHero;
