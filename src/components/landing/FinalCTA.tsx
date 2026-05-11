import { Send } from "lucide-react";
import { site } from "@/content/site";

export function FinalCTA() {
  const c = site.finalCta;
  return (
    <section id="contact" className="relative bg-[#0E0E0E] py-20 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-20%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
             style={{ background: "var(--gradient-radial-glow)" }} />
      </div>

      <div className="container-rail">
        <div className="mx-auto max-w-4xl glass rounded-3xl overflow-hidden p-6 md:p-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight max-w-xl">
                {c.title}
              </h2>
              <p className="mt-3 text-white/60 text-[15px] max-w-md">{c.sub}</p>

              <a
                href={site.cta.href}
                className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-black shadow-[var(--shadow-glow-md)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow-lg)]"
              >
                <Send className="h-4 w-4" />
                {c.button}
              </a>
            </div>

            <div className="md:col-span-4 relative">
              <div className="relative aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-2xl border border-white/10">
                <img src={c.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
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
          <span className="grid h-6 w-6 place-items-center rounded bg-[var(--brand)] text-[10px] font-bold text-black">YB</span>
          <span className="font-display text-[15px] font-semibold tracking-wide">{site.brand.name}</span>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Юрий Баринов · контент-продюсер</p>
      </div>
    </footer>
  );
}
