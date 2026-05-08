import { site } from "@/content/site";
import { PlayCircle, Clapperboard, Youtube, PenTool } from "lucide-react";

const icons = [Clapperboard, PlayCircle, Youtube, PenTool];

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
            const Icon = icons[i % icons.length];
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
    <section className="pb-24 md:pb-32">
      <div className="container-rail">
        <div className="text-center mb-10">
          <div className="eyebrow">Дополнительные возможности</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {site.extras.map((e) => (
            <div key={e.title} className="bg-[#0c0c0c] p-6 text-center">
              <div className="font-display text-base font-semibold text-white">{e.title}</div>
              <div className="mt-1 text-xs text-white/50">{e.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
