import { Quote, Star } from "lucide-react";
import { site } from "@/content/site";

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32">
      <div className="container-rail">
        <div className="text-center mb-14">
          <h2 className="h1">Что говорят обо мне</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {site.testimonials.map((t, i) => (
            <figure key={i} className="glass rounded-3xl p-8 relative">
              <Quote className="absolute top-6 right-6 h-6 w-6 text-[var(--brand)]/40" />
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-[var(--brand)] text-[var(--brand)]" />
                ))}
              </div>
              <blockquote className="text-[15px] leading-relaxed text-white/85">«{t.quote}»</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} loading="lazy"
                     className="h-10 w-10 rounded-full object-cover border border-white/10" />
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
