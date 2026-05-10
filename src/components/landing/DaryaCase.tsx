import { motion } from "framer-motion";
import { Play, Mic } from "lucide-react";
import { site } from "@/content/site";

function Waveform() {
  // pseudo-random heights, deterministic
  const bars = [
    8, 14, 22, 12, 28, 36, 20, 14, 26, 34, 18, 12, 24, 30, 16, 10, 22, 28, 14,
    20, 32, 26, 12, 18, 28, 36, 22, 14, 10, 18, 26, 30, 18, 12, 22, 28, 16, 10,
    20, 30, 24, 14, 18, 26, 20, 12, 16, 22,
  ];
  return (
    <div className="flex items-center gap-[3px] h-10">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-[var(--brand)]/40 to-[var(--brand)]"
          style={{ height: `${h}px`, opacity: i < 6 ? 1 : 0.55 }}
        />
      ))}
    </div>
  );
}

export function DaryaCase() {
  const c = site.daryaCase;
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div
            className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-radial-glow)" }}
            aria-hidden
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
            <div className="lg:col-span-4">
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{c.name}</h3>
              <p className="mt-2 text-sm text-white/55">{c.role}</p>

              <div className="mt-8 aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {c.proof.map((src, i) => (
                    <img key={i} src={src} alt="" loading="lazy"
                         className="h-9 w-9 rounded-full border-2 border-[#1a1a1a] object-cover" />
                  ))}
                </div>
                <div className="text-xs text-white/55">эксперты доверяют</div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-xl text-white glow-text">
                {c.headline}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
                {c.metrics.map((m) => (
                  <div key={m.label} className="bg-[#0e0e0e] p-5">
                    <div className="font-display text-2xl md:text-3xl font-bold text-[var(--brand)]">{m.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Reels previews */}
              <div className="mt-8">
                <div className="eyebrow mb-3">Примеры reels</div>
                <div className="grid grid-cols-4 gap-3">
                  {c.reels.map((src, i) => (
                    <div key={i} className="relative aspect-[9/16] overflow-hidden rounded-xl border border-white/10 group">
                      <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-2 right-2 grid h-7 w-7 place-items-center rounded-full bg-[var(--brand)]/90 text-black">
                        <Play className="h-3 w-3 fill-current" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 border-l-2 border-[var(--brand)] pl-5 text-[15px] md:text-[16px] leading-relaxed text-white/80 whitespace-pre-line">
                {c.quote}
              </blockquote>

              {/* Audio CTA */}
              <button
                type="button"
                className="mt-6 group inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[var(--brand)]/40 hover:bg-white/[0.05] transition-all px-5 py-3.5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--brand)] text-black shadow-[var(--shadow-glow-md)]">
                  <Mic className="h-4 w-4" />
                </span>
                <span className="text-left">
                  <span className="block font-display text-sm font-semibold text-white">{c.audioLabel}</span>
                  <span className="block text-[11px] text-white/50">0:42 · голосовое от Дарьи</span>
                </span>
                <Waveform />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
