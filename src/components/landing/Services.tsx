import { Check } from "lucide-react";
import { site } from "@/content/site";

export function Services() {
  const { left, right } = site.services;
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="container-rail grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {[left, right].map((col) => (
          <div key={col.title}>
            <div className="eyebrow mb-4">{col === left ? "01 — Стратегия" : "02 — Производство"}</div>
            <h2 className="h2 max-w-md">{col.title}</h2>
            <ul className="mt-10 space-y-px">
              {col.items.map((it) => (
                <li
                  key={it}
                  className="group flex items-center justify-between border-t border-white/[0.07] py-4 text-[15px] text-white/80 transition-colors hover:text-white"
                >
                  <span>{it}</span>
                  <Check className="h-4 w-4 text-[var(--brand)]/70 transition-transform group-hover:scale-110" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
