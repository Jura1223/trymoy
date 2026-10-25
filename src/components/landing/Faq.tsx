import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";

/**
 * Вопросы и ответы на нативных <details>: работает без JavaScript,
 * ответы всегда лежат в HTML — их читают поисковики и нейросети.
 */
export function Faq() {
  const f = site.faq;
  return (
    <section id="faq" className="bg-[#0E0E0E] py-20 md:py-28">
      <div className="container-rail">
        <div className="text-center mb-12 md:mb-14">
          <div className="eyebrow mb-3 text-[var(--brand)]">Коротко о главном</div>
          <h2 className="h1">{f.title}</h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-white/[0.08] rounded-3xl border border-white/[0.08] bg-white/[0.02] px-6 md:px-8">
          {f.items.map((item, i) => (
            <details key={item.q} className="group py-5" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-[17px] font-semibold text-white/94 transition-colors hover:text-white md:text-lg [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[var(--brand)] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-[15px] leading-relaxed text-white/83 md:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
