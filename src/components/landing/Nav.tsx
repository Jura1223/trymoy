import { Send } from "lucide-react";
import { site } from "@/content/site";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0b0b0b]/70 backdrop-blur-xl border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <div className="container-rail flex h-16 items-center justify-between">
        <a href="#" className="flex items-center">
          <div>
            <div className="font-display text-[15px] font-bold tracking-wide text-white">{site.brand.name}</div>
            <div className="text-[11px] text-[var(--brand)]">{site.brand.tagline}</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-white/70 transition-colors hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={site.cta.href}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/[0.06] hover:border-[var(--brand)]/40"
        >
          <Send className="h-3.5 w-3.5 text-[var(--brand)]" />
          <span className="hidden sm:inline">{site.cta.label}</span>
        </a>
      </div>
    </header>
  );
}
