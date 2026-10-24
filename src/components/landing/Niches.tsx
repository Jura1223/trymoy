import { motion } from "framer-motion";
import { site } from "@/content/site";

/** Работаю в разных нишах: список ниш и один заметный кейс (недвижимость). */
export function Niches() {
  const n = site.niches;
  return (
    <section className="bg-[#0E0E0E] pb-16 md:pb-28">
      <div className="container-rail">
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow mb-3 text-[var(--brand)]">{n.eyebrow}</div>
          <h3 className="h2">{n.title}</h3>
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
            {n.chips.map((c) => (
              <li
                key={c}
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 font-display text-[16px] font-semibold text-white/94 md:text-lg"
              >
                {c}
              </li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.7 }}
            className="glass mt-10 rounded-3xl border border-[var(--brand)]/35 p-6 md:p-9"
          >
            <div className="eyebrow mb-3 text-[var(--brand)]">{n.case.label}</div>
            <div className="font-display text-5xl font-bold leading-none text-[var(--brand)] glow-text md:text-6xl">{n.case.big}</div>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/94 md:text-lg">{n.case.text}</p>
            {n.case.link && (
              <a
                href={n.case.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/50 px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--brand)] hover:text-black"
              >
                {n.case.link.label}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
