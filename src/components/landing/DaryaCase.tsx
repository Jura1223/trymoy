import { motion } from "framer-motion";
import { Play, Mic } from "lucide-react";
import { site } from "@/content/site";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { VideoModal } from "@/components/ui/VideoModal";
import { useState } from "react";

const exampleWorks = [
  {
    id: "dasha-1",
    title: "Пример работы 1",
    vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239030&autoplay=1",
    image: "/images/previewsforvideo/dashaexamplework1.png"
  },
  {
    id: "dasha-2",
    title: "Пример работы 2",
    vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239031&autoplay=1",
    image: "/images/previewsforvideo/dashaexamplework2.png"
  },
  {
    id: "dasha-3",
    title: "Пример работы 3",
    vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239032&autoplay=1",
    image: "/images/previewsforvideo/dashaexamplework3.png"
  },
  {
    id: "dasha-4",
    title: "Пример работы 4",
    vkUrl: "https://vk.com/clip_ext.php?oid=1050064932&id=456239035&autoplay=1",
    image: "/images/previewsforvideo/dashaexamplework4.png"
  }
];

function Waveform() {
  // pseudo-random heights, deterministic
  const bars = [
    8, 14, 22, 12, 28, 36, 20, 14, 26, 34, 18, 12, 24, 30, 16, 10, 22, 28, 14,
    20, 32, 26, 12, 18, 28, 36, 22, 14, 10, 18, 26, 30, 18, 12, 22, 28, 16, 10,
    20, 30, 24, 14, 18, 26, 20, 12, 16, 22,
  ];
  return (
    <div className="flex items-center gap-[3px] h-10">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-[var(--brand)]"
          style={{ height: `${h}px`, opacity: i < 6 ? 1 : 0.55 }}
        />
      ))}
    </div>
  );
}

export function DaryaCase() {
  const c = site.daryaCase;
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);
  return (
    <section className="bg-[#0E0E0E] pb-20 md:pb-28">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div
            className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-radial-glow)" }}
            aria-hidden
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative">
            <div className="lg:col-span-4">
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{c.name}</h3>
              <p className="mt-2 text-sm text-white/55">{c.role}</p>

              {/* Audio CTA - moved to left top */}
              {c.audioFile && (
                <AudioPlayer 
                  audioSrc={c.audioFile}
                  label={c.audioLabel}
                  className="mt-6 scale-[1.3] origin-left w-full max-w-[250px]"
                />
              )}
              
              {c.instagramImage && (
                <div className="mt-4 relative overflow-hidden rounded-2xl border border-white/10">
                  <img src={c.instagramImage} alt="Instagram Дарьи Черняк" loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white text-[10px] px-2 py-1 rounded-full">
                    Instagram
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-8">
              <div className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-xl text-white glow-text">
                {c.headline}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl">
                {c.metrics.map((m) => (
                  <div key={m.label} className="bg-[#0E0E0E] border border-white/[0.07] rounded-xl p-5">
                    <div className="font-display text-2xl md:text-3xl font-bold text-[var(--brand)]">{m.value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 border-l-2 border-[var(--brand)] pl-5 text-[15px] md:text-[16px] leading-relaxed text-white/80 whitespace-pre-line">
                {c.quote}
              </blockquote>

              {/* 4 примера работ */}
              <div className="mt-8 grid grid-cols-4 gap-3">
                {exampleWorks.map((video, i) => (
                  <motion.button
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => setSelectedVideo({ url: video.vkUrl, title: video.title })}
                    className="relative aspect-[9/16] overflow-hidden rounded-xl border border-white/10 hover:border-[var(--brand)]/40 transition-all group"
                  >
                    <img src={video.image} alt={video.title} loading="lazy" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--brand)]/90 text-black opacity-100 transition-all">
                        <Play className="h-5 w-5 fill-current" />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <VideoModal
            isOpen={selectedVideo !== null}
            onClose={() => setSelectedVideo(null)}
            videoUrl={selectedVideo?.url || ""}
            title={selectedVideo?.title}
          />
        </motion.div>
      </div>
    </section>
  );
}
