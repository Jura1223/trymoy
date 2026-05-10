import { motion } from "framer-motion";
import { site } from "@/content/site";

export function IntroGlass() {
  const intro = site.intro;
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto max-w-4xl glass rounded-[28px] overflow-hidden px-8 py-14 md:px-16 md:py-20"
        >
          <div
            className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-radial-glow)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-40 -right-32 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-radial-glow)" }}
            aria-hidden
          />

          <div className="relative">
            <div className="font-display text-[22px] md:text-[28px] leading-[1.5] text-white/90 tracking-tight">
              {intro.lines.map((l, i) => (
                <p key={i} className={i === 0 ? "" : "mt-1.5"}>
                  {l}
                </p>
              ))}
            </div>

            <div className="mt-10 h-px w-16 bg-gradient-to-r from-[var(--brand)] to-transparent" />

            <p className="mt-8 max-w-2xl text-[17px] md:text-[19px] leading-relaxed text-white/70">
              {intro.accent}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
