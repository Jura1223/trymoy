import { Send } from "lucide-react";
import { site } from "@/content/site";

export function FinalCTA() {
  const c = site.finalCta;
  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-20%] top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
             style={{ background: "var(--gradient-radial-glow)" }} />
      </div>

      <div className="container-rail">
        <div className="glass rounded-[32px] overflow-hidden p-8 md:p-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-4">Связаться</div>
              <h2 className="h-display max-w-2xl">
                Хотите выстроить сильную <span className="text-[var(--brand)] glow-text">медийность</span> через контент?
              </h2>
              <p className="mt-6 text-white/65 max-w-lg text-[17px]">{c.sub}</p>

              <a
                href={site.cta.href}
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-7 py-4 text-base font-semibold text-black shadow-[var(--shadow-glow-md)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow-lg)]"
              >
                <Send className="h-4 w-4" />
                {c.button}
              </a>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden rounded-3xl border border-white/10">
                <img src={c.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="container-rail flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded bg-gradient-brand text-[10px] font-bold text-black">IM</span>
          <span className="font-display text-sm font-semibold tracking-wide">{site.brand.name}</span>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Юрий Баринов · контент-продюсер</p>
      </div>
    </footer>
  );
}
