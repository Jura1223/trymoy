import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  const h = site.hero;
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-15%] top-[-10%] h-[760px] w-[760px] rounded-full opacity-60"
             style={{ background: "var(--gradient-radial-glow)" }} />
        <div className="absolute left-[-10%] bottom-[-30%] h-[520px] w-[520px] rounded-full opacity-30"
             style={{ background: "var(--gradient-radial-glow)" }} />
      </div>
      <div className="noise" aria-hidden />

      <div className="container-rail grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 mb-8"
          >
            <Sparkles className="h-3 w-3 text-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/70">{h.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="h-display"
          >
            {h.titleLine1}{" "}
            <span className="relative inline-block text-[var(--brand)] glow-text">
              {h.titleAccent}
            </span>
            <br />
            <span className="text-white/95">{h.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/65"
          >
            {h.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={site.cta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold text-black shadow-[var(--shadow-glow-md)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow-lg)]"
            >
              {site.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <div className="hidden sm:flex items-center gap-3 glass rounded-full px-4 py-2">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">{h.badge.label}</span>
              <span className="text-sm font-semibold text-white">{h.badge.brand}</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="text-xs text-[var(--brand)]">{h.badge.note}</span>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-xl"
          >
            {h.metrics.map((m) => (
              <div key={m.label} className="bg-[#0b0b0b] px-5 py-6">
                <div className="font-display text-2xl md:text-3xl font-bold text-white">{m.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-8 -z-10 rounded-full opacity-70 blur-3xl"
               style={{ background: "var(--gradient-radial-glow)" }} />
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-white/10">
            <img
              src={h.image}
              alt="Ivan Makarov"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
