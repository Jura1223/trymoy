import { site } from "@/content/site";

export function LogoMarquee() {
  const row = [...site.logos, ...site.logos];
  return (
    <section className="relative py-16 border-y border-white/[0.06]">
      <div className="container-rail mb-6">
        <div className="eyebrow text-center">Работал с</div>
      </div>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {row.map((logo, i) => (
            <div
              key={i}
              className="font-display text-2xl md:text-3xl font-semibold text-white/40 transition-colors hover:text-[var(--brand)] whitespace-nowrap"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
