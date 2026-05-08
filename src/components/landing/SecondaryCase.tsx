import { motion } from "framer-motion";
import { site } from "@/content/site";

export function SecondaryCase() {
  const c = site.secondaryCase;
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/70">
                {c.tag}
              </div>
              <h3 className="mt-6 font-display text-3xl md:text-4xl font-bold">{c.name}</h3>
              <p className="mt-2 text-sm text-white/55">{c.role}</p>

              <div className="mt-8 aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover" />
              </div>

              <div className="mt-8">
                <div className="eyebrow mb-3">Точка А</div>
                <ul className="space-y-2">
                  {c.pointA.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="mt-2 h-1 w-1 rounded-full bg-white/30" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07] rounded-2xl overflow-hidden">
                {[c.headlineLeft, c.headlineMid, c.headlineRight].map((m) => (
                  <div key={m.caption} className="bg-[#0e0e0e] p-6">
                    <div className="font-display text-3xl md:text-4xl font-bold text-white">{m.value}</div>
                    <div className="mt-2 text-xs text-white/55">{m.caption}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/[0.07] bg-black/30 px-4 py-4">
                    <div className="font-display text-xl font-semibold text-[var(--brand)]">{m.value}</div>
                    <div className="mt-1 text-[11px] text-white/55">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/[0.07] bg-black/20 p-6">
                <div className="eyebrow mb-3">Что было сделано</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/70">
                  <li>— Стратегия и контент-план</li>
                  <li>— Сценарии для Reels и YouTube</li>
                  <li>— Запуск рубрик и серий</li>
                  <li>— Упаковка профиля и канала</li>
                  <li>— Постоянная аналитика и докрутка</li>
                  <li>— Команда монтажа и графики</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
