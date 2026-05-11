import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/content/site";
import { VideoModal } from "@/components/ui/VideoModal";
import { useState } from "react";

export function ReelsCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section className="bg-[#0E0E0E] py-20 md:py-24">
      <div className="container-rail">
        <div className="text-center mb-12">
          <h2 className="h1">Пример работ</h2>
        </div>
      </div>

      <div className="scroll-snap-x flex gap-6 overflow-x-auto pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pr-8">
        {site.reels.map((r, i) => {
          const isHorizontal = r.isHorizontal;
          return (
            <button
              key={i}
              onClick={() => setSelectedVideo({ url: r.vkUrl || "", title: r.label || "Видео" })}
              className={`snap-start group relative shrink-0 overflow-hidden rounded-2xl glass hover:border-[var(--brand)]/40 transition-all ${
                isHorizontal 
                  ? "w-[280px] md:w-[320px] aspect-video" 
                  : "w-[140px] md:w-[160px] aspect-[9/16]"
              }`}
            >
              <img
                src={r.src}
                alt={r.label || ""}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--brand)]/90 text-black opacity-100 transition-all">
                  <Play className="h-4 w-4 fill-current" />
                </div>
              </div>
            </button>
          );
        })}
        <div className="shrink-0 w-1" />
      </div>

      {/* Кнопки карусели */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => {
            const container = document.querySelector('.scroll-snap-x');
            if (container) {
              container.scrollBy({ left: -200, behavior: 'smooth' });
            }
          }}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Листать влево"
        >
          <ChevronLeft className="h-5 w-5 text-white/80" />
        </button>
        <button
          onClick={() => {
            const container = document.querySelector('.scroll-snap-x');
            if (container) {
              container.scrollBy({ left: 200, behavior: 'smooth' });
            }
          }}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Листать вправо"
        >
          <ChevronRight className="h-5 w-5 text-white/80" />
        </button>
      </div>
      
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title}
      />
    </section>
  );
}
