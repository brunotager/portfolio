"use client";

import { Button } from "@/components/ui/Button";
import { CopyEmail } from "@/components/ui/CopyEmail";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="relative px-6 md:px-12 pt-16 md:pt-24 pb-32 max-w-6xl mx-auto w-full flex flex-col justify-start">
        
        {/* Intro Header */}
        <div className="mb-8 md:mb-12">
          <p className="text-[18px] md:text-[22px] font-normal leading-[28px] md:leading-[32px] text-brand-text/80 max-w-2xl">
            Product designer focused on sports, fitness, and behavior
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col max-w-3xl w-full">
            
            {/* Intro section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">
              <span className="block md:inline">Designing for Results. </span>
              <span className="block md:inline">Eliminating Friction.</span>
            </h2>
            <p className="mb-12 text-[18px] leading-[28px] text-brand-text font-medium">
              Whether it’s a fitness app or a complex AI workflow, my goal is the same: I remove the friction between a user’s intention and their end goal.
            </p>

            {/* The Athlete Mindset section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">The Athlete Mindset</h2>
            <p className="mb-12 text-[16px] leading-[24px] text-brand-text/75">
              I grew up in competitive sports. It taught me that talent is the baseline, but effort is the leverage. I don’t wonder if I’m good at something; I practice until I am. I bring this same discipline to product design, treating every project as a practice of continuous refinement until the system satisfies the customer.
            </p>

            {/* The Career Logic section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">The Career Logic</h2>
            <div className="text-[16px] leading-[24px] text-brand-text/75 flex flex-col mb-12 space-y-4">
              <p>
                I’ve navigated three careers to reach this point, each one adding a layer to how I build products today:
              </p>
              <ul className="list-outside list-disc pl-6 space-y-3">
                <li><strong className="text-brand-text font-semibold">Strategic Communications (6 years):</strong> At firms like the Walker Marchant Group, I learned that clarity is a requirement, not a preference. If a message is cluttered, people don&apos;t act.</li>
                <li><strong className="text-brand-text font-semibold">Operations &amp; Hospitality (8 years):</strong> Running businesses like Politics &amp; Prose and Honeys taught me that trust is built in the details. I design products that respect the user&apos;s time and build the loyalty required for them to return.</li>
                <li><strong className="text-brand-text font-semibold">Product Development (2+ years):</strong> I move quickly from user insight to a shipped product, working as a strategic partner to engineering to ensure the final result is as functional as it is thoughtful.</li>
              </ul>
            </div>

            {/* What I Care About section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">What I Care About</h2>
            <p className="mb-10 text-[16px] leading-[24px] text-brand-text/75">
              I focus on sports, fitness, and health because these products have the power to shape life-long habits. When they are designed well, they don&apos;t just provide information, they build confidence and long-term commitment. That is the kind of work I want to do.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-10 border-t border-border-light w-full">
              <Button href="/#work">Portfolio</Button>
              <div className="flex flex-col items-start">
                <CopyEmail />
                <p className="text-brand-text/50 font-medium text-[13px] mt-2">
                  I respond the same day
                </p>
              </div>
            </div>

          </div>
      </section>
    </main>
  );
}
