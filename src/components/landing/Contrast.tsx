import { X, Check } from "lucide-react";
import { site } from "@/content/site";

export function Contrast() {
  const { cold, warm, title } = site.contrast;
  return (
    <section className="py-24 md:py-32">
      <div className="container-rail">
        <h2 className="h2 max-w-3xl">{title}</h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Cold */}
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.015] p-8">
            <div className="eyebrow mb-6 text-white/50">{cold.title}</div>
            <ul className="space-y-3">
              {cold.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-[15px] text-white/55">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full border border-white/10">
                    <X className="h-3 w-3 text-white/40" />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warm */}
          <div className="relative rounded-3xl border border-[var(--brand)]/25 bg-[var(--brand)]/[0.04] p-8 overflow-hidden">
            <div className="absolute -top-32 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
                 style={{ background: "var(--gradient-radial-glow)" }} />
            <div className="eyebrow mb-6 text-[var(--brand)]">{warm.title}</div>
            <ul className="space-y-3 relative">
              {warm.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-[15px] text-white/85">
                  <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/40">
                    <Check className="h-3 w-3 text-[var(--brand)]" />
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
