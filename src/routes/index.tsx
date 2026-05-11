import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { IntroGlass } from "@/components/landing/IntroGlass";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { CinematicBreak } from "@/components/landing/CinematicBreak";
import { Workflow } from "@/components/landing/Workflow";
import { ReelsCarousel } from "@/components/landing/ReelsCarousel";
import { FeaturedCase } from "@/components/landing/FeaturedCase";
import { SecondaryCase } from "@/components/landing/SecondaryCase";
import { DaryaCase } from "@/components/landing/DaryaCase";
import { ContentLists } from "@/components/landing/ContentLists";
import { Contrast } from "@/components/landing/Contrast";
import { Extras } from "@/components/landing/Formats";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCTA, Footer } from "@/components/landing/FinalCTA";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Юрий Баринов — Контент-продюсер · Личный бренд через контент" },
      {
        name: "description",
        content:
          "Создаю медийность через контент. Стратегия, сценарии, продакшн, рост Reels, Shorts и YouTube. Кейсы 700K+ подписчиков и x47 рост.",
      },
      { property: "og:title", content: "Юрий Баринов — Контент-продюсер" },
      {
        property: "og:description",
        content: "Personal brand · контент под ключ · Reels · YouTube · стратегия и рост",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0E0E0E] text-white">
      <Nav />
      <main>
        <Hero />
        <IntroGlass />
        <Services />
        <LogoMarquee />
        <CinematicBreak text={site.break1.text} sub={site.break1.sub} />
        <FeaturedCase />
        <SecondaryCase />
        <DaryaCase />
        <ReelsCarousel />
        <ContentLists />
        <Contrast />
        <Workflow />
        <Extras />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
