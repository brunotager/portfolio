"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CopyEmail } from "@/components/ui/CopyEmail";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="relative px-6 md:px-12 py-32 max-w-6xl mx-auto w-full min-h-[calc(100vh-88px)] flex flex-col justify-center">
        
        {/* Intro Header */}
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-4">Bruno Tager</h1>
          <p className="text-[18px] md:text-[22px] font-normal leading-[28px] md:leading-[32px] text-brand-text/80 max-w-2xl">
            Product designer focused on sports, fitness, and behavior
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Left Column: Image */}
          <div className="w-full">
            <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[16px] border border-border-light bg-border-light w-full">
              <Image
                src="/images/bruno-profile-about.jpg"
                alt="Bruno Tager"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="flex flex-col max-w-[600px] pt-0 md:pt-4">
            
            {/* Designing for Action section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">Designing for Action. Eliminating Hesitation.</h2>
            <p className="mb-12 text-[18px] leading-[28px] text-brand-text font-medium">
              Whether it’s a fitness app or a complex AI workflow, my goal is the same: reduce the cognitive load so the user can keep moving.
            </p>

            {/* Three Careers section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">Three Careers. One Goal.</h2>
            <div className="text-[16px] leading-[24px] text-brand-text/75 flex flex-col mb-12 space-y-4">
              <p>
                I’ve built my career across three distinct industries, all centered on how people make decisions under pressure:
              </p>
              <ul className="list-outside list-disc pl-6 space-y-3">
                <li><strong className="text-brand-text font-semibold">Strategic Communications (6 years):</strong> Managed communications for Fortune 500 clients, learning how to speak to thousands of people at once without losing clarity or intent.</li>
                <li><strong className="text-brand-text font-semibold">Operations &amp; Hospitality (8 years):</strong> Led high-pressure teams through post-pandemic recoveries and launched startups, consistently delivering sustainable revenue growth and operational stability.</li>
                <li><strong className="text-brand-text font-semibold">Product Development (2+ years):</strong> I move quickly from user insight to shipped product, working as a strategic partner to engineering to ensure the system holds up under real-world load.</li>
              </ul>
            </div>

            {/* Core Principles section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">Core Principles</h2>
            <ul className="mb-10 list-outside list-disc pl-6 space-y-3 text-[16px] leading-[24px] text-brand-text/75">
              <li><strong className="text-brand-text font-semibold">Progress over Perfection:</strong> Visible wins build the confidence required for long-term commitment.</li>
              <li><strong className="text-brand-text font-semibold">Design as Behavior:</strong> I move beyond &quot;features&quot; to create feedback loops that reward consistency and habit formation.</li>
              <li><strong className="text-brand-text font-semibold">Calm Systems:</strong> In health and fitness, the interface should never be louder than the user&apos;s goal.</li>
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-border-light w-full">
              <Button href="/#work">Portfolio</Button>
              <CopyEmail />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
