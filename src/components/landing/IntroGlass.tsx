import { motion } from "framer-motion";
import { site } from "@/content/site";

export function IntroGlass() {
  const intro = site.intro;
  return (
    <section id="about" className="relative bg-[#0E0E0E] py-16 md:py-20">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto max-w-6xl glass rounded-[28px] overflow-hidden px-8 py-7 md:px-14 md:py-10"
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
            <div className="font-display text-[22px] md:text-[28px] leading-[1.55] text-white/94 tracking-tight">
              {intro.lines.map((l, i) => (
                <p key={i} className={i === 0 ? "" : "mt-1.5"}>
                  {l}
                </p>
              ))}
            </div>

            <div className="mt-10 h-px w-16 bg-[var(--brand)]/50" />

            <p className="mt-6 max-w-5xl text-[22px] md:text-[28px] leading-[1.6] text-white/88">
              {intro.accent}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
