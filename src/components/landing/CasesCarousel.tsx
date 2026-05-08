import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function CasesCarousel() {
  return (
    <section className="pb-28 md:pb-40">
      <div className="container-rail mb-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="eyebrow mb-3">Другие кейсы</div>
            <h2 className="h2">Каждый проект — продакшн под ключ</h2>
          </div>
          <button className="hidden sm:inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors">
            смотреть все <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="scroll-snap-x flex gap-5 overflow-x-auto pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pr-8">
        {site.otherCases.map((c, i) => (
          <article
            key={i}
            className="snap-start group relative shrink-0 w-[240px] md:w-[280px] aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.07]"
          >
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5">
              <div className="font-display text-lg font-semibold text-white">{c.name}</div>
              <div className="mt-1 text-xs text-white/60">{c.role}</div>
            </div>
            <div className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/[0.08] backdrop-blur border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
          </article>
        ))}
        <div className="shrink-0 w-1" />
      </div>
    </section>
  );
}
