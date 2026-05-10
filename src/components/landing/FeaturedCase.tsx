import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { site } from "@/content/site";

// Cinematic SVG growth chart with glow
function GrowthChart() {
  // up-and-to-the-right curve
  const path = "M0,180 C 80,170 140,160 200,140 C 260,120 320,90 380,70 C 440,55 500,45 560,30 C 620,18 680,10 720,4";
  return (
    <svg viewBox="0 0 720 200" className="w-full h-auto">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ff8a3d" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ff6a00" stopOpacity="1" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* grid */}
      {[40, 80, 120, 160].map((y) => (
        <line key={y} x1="0" x2="720" y1={y} y2={y} stroke="white" strokeOpacity="0.04" />
      ))}
      <path d={`${path} L720,200 L0,200 Z`} fill="url(#grad)" />
      <path d={path} fill="none" stroke="url(#line)" strokeWidth="2.5" filter="url(#glow)" />
      <circle cx="720" cy="4" r="6" fill="#ff6a00" filter="url(#glow)" />
    </svg>
  );
}

export function FeaturedCase() {
  const c = site.featuredCase;
  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="container-rail">
        <div className="text-center mb-12">
          <h2 className="h1">Кейсы</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
               style={{ background: "var(--gradient-radial-glow)" }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
            {/* Left: Identity */}
            <div className="lg:col-span-4">
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{c.name}</h3>
              <p className="mt-2 text-sm text-white/55">{c.role}</p>

              <div className="mt-8 aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
              </div>

              <div className="mt-8">
                <div className="eyebrow mb-3">Точка А</div>
                <ul className="space-y-2">
                  {c.pointA.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="mt-2 h-1 w-1 rounded-full bg-[var(--brand)]/80" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Result + chart */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <div>
                  <div className="eyebrow mb-2">Точка Б</div>
                  <div className="font-display text-6xl md:text-7xl font-bold text-white glow-text leading-none">
                    {c.headline}
                  </div>
                  <div className="mt-3 text-white/65">{c.headlineCaption}</div>
                </div>
                <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/8 px-5 py-3">
                  <div className="text-[10px] uppercase tracking-wider text-white/55">Рост</div>
                  <div className="font-display text-3xl font-bold text-[var(--brand)] flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" /> {c.growth}
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.08] bg-black/30 p-4">
                <GrowthChart />
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
                {c.metrics.map((m) => (
                  <div key={m.label} className="bg-[#0e0e0e] px-5 py-5">
                    <div className="font-display text-2xl font-bold text-white">{m.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <div className="flex -space-x-3">
                  {c.proof.map((src, i) => (
                    <img key={i} src={src} alt="" loading="lazy"
                         className="h-10 w-10 rounded-full border-2 border-[#1a1a1a] object-cover" />
                  ))}
                </div>
                <div className="text-sm text-white/55">
                  <span className="text-white">Доверяют</span> предприниматели и эксперты
                </div>
              </div>

              <blockquote className="mt-8 border-l-2 border-[var(--brand)] pl-5 text-[15px] leading-relaxed text-white/75 italic">
                «{c.quote}»
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
