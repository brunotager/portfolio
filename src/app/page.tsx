"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { CopyEmail } from "@/components/ui/CopyEmail";

const PORTFOLIO_ITEMS = [
  {
    title: "Codiris",
    summary: <>Eliminated the continuity gap in AI workflows by <strong>creating a unified system</strong> that preserves context and prevents mental resets.</>,
    href: "/portfolio/codiris",
    imageSrc: "/images/codiris-homepage.png",
    imageBgColor: "#0E0E0F",
  },
  {
    title: "Fit & Fun",
    summary: <>Drove fitness consistency by engineering a low-friction habit loop that rewards effort and builds <strong>visible, immediate momentum.</strong></>,
    href: "/portfolio/fit-and-fun",
    imageSrc: "/images/fit-and-fun-homepage.png",
    imageBgColor: "#F7F6F3",
  },
  {
    title: "CycleBot",
    summary: <>Solved a <strong>70% abandonment rate</strong> by replacing user hesitation with a decisive AI agent that builds buying confidence.</>,
    href: "/portfolio/cyclebot",
    imageSrc: "/images/cyclebot-homepage.png",
    imageBgColor: "#F7F6F3",
  },
  {
    title: "CCTA",
    summary: <>Lowered the barrier to mental health care by transforming a cluttered interface into a <strong>calm, goal-oriented experience.</strong></>,
    href: "/portfolio/ccta",
    imageSrc: "/images/ccta-homepage.jpg",
    imageBgColor: "#F7F6F3",
  },
];

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Clear hash if scrolled to top
      if (window.scrollY < 50 && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      // If user scrolls, hide arrow permanently and clear timeout
      setShowArrow(false);
      clearTimeout(scrollTimeout);
      // We don't remove event listener entirely here anymore because we need it for the hash clearing,
      // but we do want the arrow fading logic to only run until scrolled.
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
          Athlete Mindset.<br />
          Product Clarity.
        </h1>
        <p className="text-[18px] md:text-[22px] font-normal leading-[28px] md:leading-[32px] text-brand-text/80 mb-8 max-w-2xl">
          <span className="block md:inline">Designing for Results. </span>
          <span className="block md:inline">Eliminating Hesitation.</span>
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
      <section id="work" className="scroll-mt-[64px] px-6 md:px-12 pt-16 pb-24 max-w-6xl mx-auto w-full">
        <div className="mb-16 max-w-3xl">
          <h2 className="mb-6">
            <span className="block md:inline">Four Problems Solved. </span>
            <span className="block md:inline">Sixteen Years of Results.</span>
          </h2>
          <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] text-brand-text/80">
            These case studies are selected benchmarks from three careers spent turning complex friction into customer satisfaction. From managing Fortune 500 communications to creating high-impact systems, I focus on the decisions that delight the customer and drive the business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PORTFOLIO_ITEMS.map((item) => (
            <CaseStudyCard
              key={item.href}
              title={item.title}
              summary={item.summary}
              href={item.href}
              imageSrc={item.imageSrc}
              imageBgColor={item.imageBgColor}
              imageAlign={(item as any).imageAlign}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-[64px] px-6 md:px-12 pt-16 pb-32 max-w-6xl mx-auto w-full bg-brand-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="w-full">
            <h2 className="mb-8">
              <span className="block md:inline">Designing for Results. </span>
              <span className="block md:inline">Eliminating Hesitation.</span>
            </h2>
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
              Whether it’s a fitness app or a complex AI workflow, my goal is the same: <strong>I remove the friction between a user’s intention and their end goal.</strong>
            </p>
            
            <div className="text-[16px] leading-[24px] text-brand-text/75 flex flex-col">
              <h3 className="text-[20px] font-semibold text-brand-text mb-3">Three Careers. One Goal.</h3>
              <p className="mb-4">
                I’ve built my career across three distinct industries, all centered on one thing: understanding how people move from intention to action.
              </p>
              <ul className="list-outside list-disc pl-6 space-y-3 mb-10 text-[16px] leading-[24px] text-brand-text/80">
                <li><span className="font-semibold text-brand-text">Strategic Communications (6 years):</span> Managed communications for Fortune 500 clients, learning how to shape perception and move large audiences toward a specific goal without losing clarity.</li>
                <li><span className="font-semibold text-brand-text">Operations &amp; Hospitality (8 years):</span> Built and scaled new business concepts from the ground up, focusing on how small, consistent details build the trust required to build customer loyalty.</li>
                <li><span className="font-semibold text-brand-text">Product Development (2+ years):</span> I treat design as a practice of continuous iteration—refining every detail until the system satisfies the customer.</li>
              </ul>
              
              <h3 className="text-[20px] font-semibold text-brand-text mb-4">Core Principles</h3>
              <ul className="list-outside list-disc pl-6 space-y-3 mb-4 text-[16px] leading-[24px] text-brand-text/80">
                <li><span className="font-semibold text-brand-text">Strategic Clarity:</span> I bridge the gap between business objectives and user needs, ensuring every feature is a deliberate choice that leads to a measurable outcome.</li>
                <li><span className="font-semibold text-brand-text">Retention through Visible Progress:</span> I design products that make user effort legible, turning initial curiosity into the long-term commitment that drives lifetime value.</li>
                <li><span className="font-semibold text-brand-text">Calm Systems:</span> In health and fitness, I build high-trust environments where the interface never becomes a barrier to the user’s health goals.</li>
              </ul>
            </div>
            
            <div className="flex items-center gap-6 mt-10">
              <Button href="/about">Read More</Button>
              <div className="flex flex-col items-start">
                <CopyEmail />
                <p className="text-brand-text/50 font-medium text-[13px] mt-2">
                  I respond the same day
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
