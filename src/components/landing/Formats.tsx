import { site } from "@/content/site";
import {
  PlayCircle,
  Clapperboard,
  Youtube,
  PenTool,
  Share2,
  Bot,
  LineChart,
  LayoutGrid,
  Flame,
  Compass,
  Film,
} from "lucide-react";

const formatIcons = [Clapperboard, PlayCircle, Youtube, PenTool];

const extraIconMap: Record<string, typeof Share2> = {
  share: Share2,
  bot: Bot,
  chart: LineChart,
  layout: LayoutGrid,
  flame: Flame,
  compass: Compass,
  film: Film,
};

export function Formats() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-rail">
        <div className="text-center mb-14">
          <div className="eyebrow mb-3">Услуги</div>
          <h2 className="h1">Форматы работы</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07] rounded-3xl overflow-hidden">
          {site.formats.map((f, i) => {
            const Icon = formatIcons[i % formatIcons.length];
            return (
              <div key={f.title} className="group bg-[#0d0d0d] p-8 transition-colors hover:bg-[#121212]">
                <Icon className="h-7 w-7 text-[var(--brand)] transition-transform group-hover:scale-110" strokeWidth={1.4} />
                <h3 className="mt-8 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Extras() {
  return (
    <section className="pb-28 md:pb-40">
      <div className="container-rail">
        <div className="text-center mb-16 md:mb-20">
          <div className="eyebrow mb-4">Ещё</div>
          <h2 className="h1">Дополнительные возможности</h2>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {site.extras.map((e) => {
            const Icon = extraIconMap[e.icon] ?? Share2;
            return (
              <div
                key={e.title}
                className="group relative rounded-2xl border border-white/[0.07] bg-[#0c0c0c]/80 px-7 py-8 transition-all duration-300 hover:border-[var(--brand)]/40 hover:bg-[#101010]"
              >
                <div className="flex items-center gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.02] transition-colors group-hover:border-[var(--brand)]/40 group-hover:bg-[var(--brand)]/[0.06]">
                    <Icon
                      className="h-5 w-5 text-white/70 transition-colors group-hover:text-[var(--brand)]"
                      strokeWidth={1.4}
                    />
                  </div>
                  <div className="font-display text-[15px] md:text-base font-medium text-white/90 leading-snug">
                    {e.title}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                     style={{ boxShadow: "inset 0 0 40px -10px color-mix(in oklab, var(--brand) 20%, transparent)" }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
