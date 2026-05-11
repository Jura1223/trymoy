import { site } from "@/content/site";

export function LogoMarquee() {
  const row = [...site.logos, ...site.logos];
  return (
    <section className="relative bg-[#0E0E0E] py-14 border-y border-white/[0.06]">
      <div className="container-rail mb-6">
        <div className="eyebrow text-center text-[var(--brand)]">с кем работал</div>
      </div>
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {row.map((logo, i) => (
            <div
              key={i}
              className="font-display text-base md:text-xl font-semibold text-white/40 transition-colors hover:text-[var(--brand)] whitespace-nowrap"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
