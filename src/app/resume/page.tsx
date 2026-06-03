import Link from "next/link";
import { CopyEmail } from "@/components/ui/CopyEmail";

export default function ResumePage() {
  return (
    <main className="flex flex-col items-center px-6 md:px-12 pt-32 pb-24 max-w-[1200px] mx-auto w-full">
      <div className="w-full flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        
        {/* Main Content Column */}
        <div className="flex-1 w-full flex flex-col min-w-0">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-[48px] font-bold text-brand-text mb-6">Bruno Tager</h1>
            <p className="text-[16px] leading-[26px] text-brand-text/80">
              I&apos;m an AI-native UX/UI designer with 16 years of experience spread across three careers: strategic communications, operations, and product. Each one taught me a different way to ask: where does the user get stuck, and how do I fix it? I&apos;ve applied that mindset to Fortune 500 brands, a B2B SaaS product I co-founded, a Section 508-compliant government platform, and my own consulting practice. This resume is a summary of those three careers; my <a href="https://www.linkedin.com/in/brunotager" target="_blank" className="text-brand-accent hover:underline">LinkedIn</a> has the full story.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-[32px] font-semibold text-brand-text mb-8">Experience</h2>
            
            <div className="flex flex-col gap-10">
              {/* Job 1 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Tager Consulting | Principal Designer (03/2024 – present)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Strategic Design, Research-Based Decision Making, and Multi-Platform Products</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">HCD &amp; Digital Redesign:</strong> Applied Human-Centered Design to reorganize a mental health clinic&apos;s <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">patient intake experience</strong>, aligning their digital presence with <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">high-trust medical standards</strong> and improving the end-to-end user journey.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Conversion Design:</strong> Designed high-converting landing pages for an EdTech platform tailored to specific user acquisition partnerships, <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">doubling annual revenue</strong> by removing friction between discovery and sign-up.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Systems &amp; Service Design:</strong> Led a full POS systems migration and staff training for a DC restaurant, <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">automating the order intake process</strong> and redirecting 100% of host team focus to the guest experience.</span></li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Codiris | Co-Founder &amp; Product Designer (04/2025 – 02/2026)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">AI-Native Product, Agent-Driven Design, and 0→1</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Systems Design:</strong> Designed an <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">AI-native environment</strong> for product teams, orchestrating specialized agents from brainstorm to shipped product. Every agent downstream carries the <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">full context</strong> of every decision that came before it.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Data-Driven Iteration:</strong> Conducted user interviews and usability testing on v1, discovering that no users followed a linear workflow, leading to a full <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">information architecture overhaul</strong> and a <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">tab-based v2</strong> that significantly improved user experience and repeat engagement.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Agile Collaboration:</strong> Worked within an Agile/Scrum framework alongside a PM and two engineers across <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Washington DC, San Francisco, and Paris</strong>, coordinating across time zones and languages to ship a complex, AI-native product from 0 to 1.</span></li>
                </ul>
              </div>

              {/* Job 3 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Operations &amp; Hospitality | General Manager &amp; Director (08/2016 – 03/2024)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Service Design, End-to-End Experience, and Customer Loyalty</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">End-to-End Experience Design:</strong> Designed and launched a Shopify e-commerce platform bridging physical production and digital fulfillment, generating <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">$20,000+</strong> in revenue within six months and a <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">20% customer return rate</strong>.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Strategic Leadership:</strong> Directed post-pandemic business revitalizations across multiple venues, achieving a <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">30% year-over-year sales increase</strong> by redesigning service programs and optimizing the end-to-end customer journey.</span></li>
                </ul>
              </div>

              {/* Job 4 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Strategic Communications | Associate &amp; Account Executive (09/2010 – 02/2016)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Strategic Messaging, Stakeholder Management, and Storytelling</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Stakeholder Identification &amp; Alignment:</strong> Managed communications for Fortune 500 clients, developing strategies that translated complex business needs into <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">clear, actionable narratives</strong>.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Behavioral Strategy:</strong> Designed strategic messaging frameworks for large-scale corporate initiatives, driving user acquisition of <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">23,000+ applicants</strong> by removing the friction between information and action.</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-2xl md:text-[32px] font-semibold text-brand-text mb-8">Education</h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-[16px] font-semibold text-brand-text mb-1">UX/UI Design Bootcamp | Springboard, Online (03/24-04/25)</h3>
                <p className="text-[16px] leading-[24px] text-brand-text/80 group inline-block">
                  Intensive HCD and AI-research training, including a 4-week internship at <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">American Dream (NJ)</strong> designing high-scale, omni-channel retail and e-commerce experiences.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-brand-text mb-1">International Studies, BA | UC Irvine, California (2006-2010)</h3>
                <p className="text-[16px] leading-[24px] text-brand-text/80 group inline-block">
                  Concentrations in <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Mediation and Conflict Resolution</strong> used to lead cross-functional alignment and navigate high-stakes stakeholder negotiations for complex initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="w-full md:w-[280px] lg:w-[320px] shrink-0 flex flex-col gap-10">
          
          {/* Links */}
          <div>
             <h3 className="text-sm font-semibold text-brand-text/50 uppercase tracking-widest mb-4">Links</h3>
             <ul className="flex flex-col gap-3 text-[16px] text-brand-text font-medium">

               <li>
                 <a href="https://www.linkedin.com/in/brunotager" target="_blank" className="hover:text-brand-accent transition-colors">My LinkedIn</a>
               </li>
               <li>
                 <CopyEmail />
               </li>
               <li>
                 <a href="https://drive.google.com/file/d/1gZZIuYEZkpbAPAtOUuuQDT2t5nuex95f/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Download Resume</a>
               </li>
             </ul>
          </div>
          
          {/* Skills */}
          <div>
             <h3 className="text-sm font-semibold text-brand-text/50 uppercase tracking-widest mb-4">Skills</h3>
             <div className="flex flex-wrap gap-2">
                {[
                  "Product Design & Strategy", "Human-Centered Design", "User Research & Testing",
                  "Discovery Workshops", "User Journey Mapping", "Prototyping",
                  "Systems Thinking", "Behavioral & Conversion Design", "Visual Design",
                  "Agile / Scrum", "Information Architecture", "WCAG & 508 Compliance",
                  "Stakeholder Alignment", "Strategic Communications"
                ].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-border-light text-[14px] text-brand-text rounded-md border border-border-dark whitespace-nowrap">
                    {skill}
                  </span>
                ))}
             </div>
          </div>

          {/* Tools */}
          <div>
             <h3 className="text-sm font-semibold text-brand-text/50 uppercase tracking-widest mb-4">Tools</h3>
             <div className="flex flex-wrap gap-2">
                {[
                  "Figma", "FigmaMake", "Cursor", "Claude Code", "Antigravity", "Gemini", "ChatGPT", "Claude",
                  "PostHog Analytics", "GitHub", "Notion", "Trello", "Adobe Creative Suite", "Miro", "FigJam",
                  "ScreenStudio", "Capcut Video"
                ].map(tool => (
                  <span key={tool} className="px-3 py-1.5 bg-border-light text-[14px] text-brand-text rounded-md border border-border-dark whitespace-nowrap">
                    {tool}
                  </span>
                ))}
             </div>
          </div>

          {/* Languages */}
          <div>
             <h3 className="text-sm font-semibold text-brand-text/50 uppercase tracking-widest mb-4">Languages</h3>
             <div className="flex flex-wrap gap-2">
                {[
                  "English (Bi-lingual)", "French (Bi-lingual)", "Spanish (Conversational)", "Arabic (Conversational)"
                ].map(lang => (
                  <span key={lang} className="px-3 py-1.5 bg-border-light text-[14px] text-brand-text rounded-md border border-border-dark whitespace-nowrap">
                    {lang}
                  </span>
                ))}
             </div>
          </div>

        </div>

      </div>
    </main>
  );
}
