import { motion } from "framer-motion";
import { Send, Clapperboard, Eye, Star } from "lucide-react";
import { site } from "@/content/site";

const iconMap = {
  clapperboard: Clapperboard,
  eye: Eye,
  star: Star,
};

export function Hero() {
  const h = site.hero;
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28">
      <div className="noise" aria-hidden />

      <div className="container-rail grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="h-display"
          >
            {h.titleLine1}
            <br />
            <span className="text-[var(--brand)] glow-text">{h.titleAccent}</span>
            <br />
            <span className="text-white/95">{h.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/65"
          >
            {h.subLine1}
            <br />
            {h.subLine2}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href={site.cta.href}
              className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--brand)] px-8 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow-md)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow-lg)]"
            >
              <Send className="h-5 w-5" />
              {site.cta.label}
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-14 inline-flex flex-wrap items-center gap-x-10 gap-y-6 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-5 backdrop-blur-sm"
          >
            {h.metrics.map((m) => {
              const Icon = iconMap[m.icon as keyof typeof iconMap];
              return (
                <div key={m.label} className="flex items-center gap-4">
                  <Icon className="h-7 w-7 text-[var(--brand)]" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-2xl font-bold text-[var(--brand)] leading-none">{m.value}</div>
                    <div className="mt-1.5 text-[12px] text-white/55">{m.label}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 -z-10 rounded-full opacity-80 blur-3xl"
               style={{ background: "var(--gradient-radial-glow)" }} />
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <img
              src={h.image}
              alt="Юра Баринов"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
