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
            
            {/* Why section */}
            <h2 className="mb-8 text-2xl md:text-[32px] font-semibold text-brand-text">Why sports, fitness, and youth matter to me</h2>
            
            <p className="mb-6 text-[18px] leading-[28px] text-brand-text font-medium">
              I grew up in sports, training and competing from a young age. It taught me something simple early on.<br />
              Talent matters, but effort is what keeps you in the game.
            </p>
            
            <div className="text-[16px] leading-[24px] text-brand-text/75 flex flex-col mb-16">
              <p className="mb-4">
                I don’t spend much time wondering if I’m good at something. I learn it. I practice it. I improve a little every day.
              </p>
              <p className="mb-6">
                That mindset has shaped every step of my career.
              </p>
              
              <p className="mb-6">
                I’ve built my career across three different environments, all centered around people.
              </p>
              <p className="mb-6">
                In communications, I learned how language shapes perception and how to speak to many without losing clarity.<br />
                In hospitality, I learned how to listen, adapt quickly, and lead teams in high-pressure environments where every interaction matters.<br />
                In product design, I bring those lessons into digital products that help people take action, stay engaged, and improve over time.
              </p>
              
              <p className="mb-6">
                I focus on youth sports, fitness, and health because these products shape habits early. When they are designed well, they build confidence, consistency, and long-term commitment.
              </p>
              <p>
                That is the kind of work I want to do.
              </p>
            </div>

            {/* Approach section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">How I approach design</h2>
            <div className="text-[16px] leading-[24px] text-brand-text/75 flex flex-col mb-16">
              <p className="mb-4">
                I design products that help people act, not hesitate.
              </p>
              <p className="mb-4">
                I focus on clear, intuitive experiences that people can use without thinking twice.
              </p>
              <p>
                I move quickly from idea to shipped product, working closely with engineers to make sure what we design holds up in the real world.
              </p>
            </div>

            {/* What I care about section */}
            <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">What I care about</h2>
            <ul className="mb-10 list-outside list-disc pl-6 space-y-3 text-[16px] leading-[24px] text-brand-text/75">
              <li>Health as a foundation, not an afterthought</li>
              <li>Learning through play and repetition</li>
              <li>Building confidence through visible progress</li>
              <li>Designing products that support long-term commitment</li>
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
