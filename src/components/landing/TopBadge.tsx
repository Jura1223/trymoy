import { site } from "@/content/site";
import { Award } from "lucide-react";

export function TopBadge() {
  const t = site.topBadge;
  return (
    <section className="py-24 md:py-32">
      <div className="container-rail">
        <div className="relative glass rounded-3xl overflow-hidden p-8 md:p-12">
          <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full opacity-50 blur-3xl"
               style={{ background: "var(--gradient-radial-glow)" }} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative">
            <div className="md:col-span-4 relative aspect-square max-w-[280px] mx-auto md:mx-0 w-full overflow-hidden rounded-2xl border border-white/10">
              <img src={t.image} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--brand)]">
                <Award className="h-3 w-3" /> Признание
              </div>
              <h3 className="mt-5 font-display text-3xl md:text-4xl font-bold leading-[1.1]">{t.title}</h3>
              <p className="mt-4 text-white/65">{t.sub}</p>
              <p className="mt-1 text-sm text-white/45">{t.note}</p>
            </div>

            <div className="md:col-span-2 grid place-items-center">
              <div className="relative grid h-32 w-32 place-items-center rounded-2xl border border-[var(--brand)]/40 bg-[var(--brand)]/8">
                <div className="absolute inset-0 rounded-2xl blur-2xl opacity-60"
                     style={{ background: "var(--gradient-radial-glow)" }} />
                <span className="relative font-display text-6xl font-bold text-[var(--brand)] glow-text">K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
