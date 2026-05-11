import { motion } from "framer-motion";
import { Check, Play, TrendingUp } from "lucide-react";
import { site } from "@/content/site";
import { VideoModal } from "@/components/ui/VideoModal";
import { useState } from "react";

export function SecondaryCase() {
  const c = site.secondaryCase;
  const reels = site.reels.slice(0, 4);
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <section className="bg-[#0E0E0E] pb-20 md:pb-28">
      <div className="container-rail">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-5 md:p-8 overflow-hidden border border-[var(--brand)]/35"
        >
          <div className="mb-4 rounded-2xl border border-white/10 bg-[#0E0E0E] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Кейс №2</div>
            <h3 className="mt-2 font-display text-3xl md:text-4xl font-bold">{c.name}</h3>
            <p className="mt-1 text-sm text-[var(--brand)]/90">{c.role}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-5">
                <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Точка Б после сотрудничества</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[c.headlineLeft, c.headlineMid, c.headlineRight].map((m) => (
                    <div key={m.caption} className="rounded-xl border border-white/[0.07] bg-[#0E0E0E] p-4">
                      <div className="font-display text-4xl font-bold text-[var(--brand)]">{m.value}</div>
                      <div className={`mt-1 text-white/60 ${m.value ? 'text-xs' : 'text-[15px] leading-snug font-medium'}`}>{m.caption}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-5">
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Точка А</div>
                  <ul className="space-y-2">
                    {c.pointA.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand)]/80" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Отзыв Павла - moved under Point A */}
                {c.reviewVideo && (
                  <div className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Отзыв Павла</div>
                    <button
                      type="button"
                      onClick={() => setSelectedVideo({ url: c.reviewVideo.vkUrl, title: c.reviewVideo.title })}
                      className="w-full group relative aspect-[9/16] overflow-hidden rounded-lg border border-white/10 hover:border-[var(--brand)]/40 transition-all max-h-[280px]"
                    >
                      {c.reviewVideo.image && (
                        <img
                          src={c.reviewVideo.image}
                          alt={c.reviewVideo.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--brand)]/90 text-black opacity-100 transition-all">
                          <Play className="h-5 w-5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 text-center">
                        <div className="text-white font-display text-xs font-bold">Прослушать видеоотзыв</div>
                      </div>
                    </button>
                  </div>
                )}

                <div className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-5">
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Какие результаты получили</div>
                  <ul className="space-y-2 text-sm text-white/75">
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[var(--brand)]" />Лиды растут за счет системных Reels</li>
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[var(--brand)]" />Стабильный охват и повторные касания</li>
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[var(--brand)]" />Повышение цены консультации</li>
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[var(--brand)]" />Рост доверия к эксперту</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              {c.instagramImage && (
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <img src={c.instagramImage} alt="Instagram Павла Бутузова" loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white text-[10px] px-2 py-1 rounded-full">
                    Instagram
                  </div>
                </div>
              )}
              
              <div className="rounded-2xl border border-white/10 bg-[#0E0E0E] p-4">
                <div className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Примеры Reels</div>
                <div className="grid grid-cols-2 gap-2">
                  {c.videos?.map((video, i) => (
                    <button
                      key={video.id}
                      onClick={() => setSelectedVideo({ url: video.vkUrl, title: video.title })}
                      className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/10 hover:border-[var(--brand)]/40 transition-all group"
                    >
                      <img 
                        src={video.image || reels[i]?.src || reels[0]?.src} 
                        alt={video.title} 
                        loading="lazy" 
                        className="h-full w-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                      <div className="absolute bottom-1.5 right-1.5 text-[10px] text-white bg-black/50 px-1 rounded">
                        {video.title.replace("Пример работы ", "Пример №")}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--brand)]/90 text-black opacity-100 transition-all">
                          <Play className="h-4 w-4 fill-current" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
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
