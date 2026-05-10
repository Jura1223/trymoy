import { Play } from "lucide-react";
import { site } from "@/content/site";

export function ReelsCarousel() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-rail">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow mb-4">Reels · Shorts</div>
            <h2 className="h1">Примеры коротких видео</h2>
          </div>
        </div>
      </div>

      <div className="scroll-snap-x flex gap-6 overflow-x-auto pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pr-8">
        {site.reels.map((r, i) => (
          <div
            key={i}
            className="snap-start group relative shrink-0 w-[140px] md:w-[160px] aspect-[9/16] overflow-hidden rounded-2xl glass"
          >
            <img
              src={r.src}
              alt={r.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />

            <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur px-2 py-0.5 border border-white/10">
              <span className="h-1 w-1 rounded-full bg-[var(--brand)]" />
              <span className="text-[8px] uppercase tracking-wider text-white/80">{r.label}</span>
            </div>

            <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
              <div>
                <div className="font-display text-sm font-bold text-white">{r.views}</div>
                <div className="text-[8px] uppercase tracking-wider text-white/55">просмотров</div>
              </div>
              <button className="grid h-7 w-7 place-items-center rounded-full bg-[var(--brand)] text-black opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                <Play className="h-3 w-3 fill-current" />
              </button>
            </div>
          </div>
        ))}
        <div className="shrink-0 w-1" />
      </div>
    </section>
  );
}
