"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CopyEmail } from "@/components/ui/CopyEmail";

const PORTFOLIO_ITEMS = [
  {
    title: "Codiris",
    summary: "Architected a unified system that preserves context across the product lifecycle, eliminating the \"continuity gap\" in AI-driven development.",
    href: "/portfolio/codiris",
    imageSrc: "/images/codiris-homepage.png",
    imageBgColor: "#0E0E0F",
  },
  {
    title: "Fit & Fun",
    summary: "Built a gamified habit-loop that rewards daily effort, turning fitness from a high-friction chore into a low-friction routine.",
    href: "/portfolio/fit-and-fun",
    imageSrc: "/images/fit-and-fun-homepage.png",
    imageBgColor: "#FFFDF8",
  },
  {
    title: "CycleBot",
    summary: "Solved a 70% checkout abandonment rate by replacing passive browsing with an AI-driven expert that builds the trust required to commit.",
    href: "/portfolio/cyclebot",
    imageSrc: "/images/cyclebot-homepage.png",
    imageBgColor: "#F8F8F8",
  },
  {
    title: "CCTA",
    summary: "Lowered the barrier to mental health care by streamlining a complex website into a calm, trustworthy experience that prioritizes user orientation over information density.",
    href: "/portfolio/ccta",
    imageSrc: "/images/ccta-homepage.jpg",
    imageBgColor: "#F6F5F5",
  },
];

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // If user scrolls, hide arrow permanently and clear timeout
      setShowArrow(false);
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Show arrow after 2.5s if no scroll happens
    scrollTimeout = setTimeout(() => {
      if (window.scrollY < 50) {
        setShowArrow(true);
      }
    }, 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 pt-[120px] pb-16 text-center max-w-4xl mx-auto w-full">
        <h1 className="max-w-[860px] mx-auto mb-6">
          Athlete at heart.<br />
          Product Designer by craft.
        </h1>
        <p className="text-[18px] md:text-[22px] font-normal leading-[28px] md:leading-[32px] text-brand-text/80 mb-8 max-w-2xl">
          I design products that help people act, not hesitate.
        </p>
        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <Button href="#work">Portfolio</Button>
          <Button href="#about" variant="outline">About</Button>
        </div>

        {/* Fading Arrow */}
        <div
          className={`absolute bottom-12 transition-opacity duration-500 ease-in-out ${
            showArrow ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-brand-accent animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="scroll-mt-[88px] px-6 md:px-12 py-24 max-w-6xl mx-auto w-full">
        <h2 className="mb-12">Four problems worth solving.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PORTFOLIO_ITEMS.map((item) => (
            <CaseStudyCard
              key={item.href}
              title={item.title}
              summary={item.summary}
              href={item.href}
              imageSrc={item.imageSrc}
              imageBgColor={item.imageBgColor}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-[88px] px-6 md:px-12 py-32 max-w-6xl mx-auto w-full bg-brand-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="w-full">
            <h2 className="mb-8">Athlete Mindset. Product Execution.</h2>
            {/* Aspect ratio container for potential headshot later */}
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[16px] border border-border-light bg-border-light w-full">
              <Image
                src="/images/bruno-profile-about.jpg"
                alt="Bruno Tager profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
          <div className="flex flex-col max-w-[600px] pt-0 md:pt-4">
            <p className="mb-6 text-[18px] leading-[28px] text-brand-text font-medium">
              Growing up with competitive sports, I learned that talent is the baseline, but effort is the leverage. I don’t wonder if I’m good at something; I practice until I am.
            </p>
            
            <div className="text-[16px] leading-[24px] text-brand-text/75 flex flex-col">
              <p className="mb-4">
                My career is built on three pillars of human behavior:
              </p>
              <ul className="list-outside list-disc pl-6 space-y-2 mb-6 text-[16px] leading-[24px] text-brand-text/80">
                <li><span className="font-semibold text-brand-text">Strategic Communications:</span> I learned how language shapes behavior and moves audiences at scale.</li>
                <li><span className="font-semibold text-brand-text">Operations &amp; Hospitality:</span> I learned how to lead high-pressure teams and build trust through thousands of individual interactions.</li>
                <li><span className="font-semibold text-brand-text">Product Design:</span> Today, I build systems that help people stay engaged, improve every day, and win.</li>
              </ul>
              <p className="mb-4">
                I focus on sports, fitness, and health because these products shape the habits that define lives. When they are designed well, they build confidence and long-term commitment.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Button href="#work">Portfolio</Button>
              <CopyEmail />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
