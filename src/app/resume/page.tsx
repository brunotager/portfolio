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
              I&apos;m an AI-native UX/UI designer with 16 years of experience spread across three careers: strategic communications, operations, and product. Each one taught me a different way to ask the same question: where does the user get stuck, and how do I fix it? I&apos;ve applied that mindset to Fortune 500 brands, a B2B SaaS product I co-founded, a Section 508-compliant government platform, and my own consulting practice. This resume is a summary of those three careers; my <a href="https://www.linkedin.com/in/brunotager" target="_blank" className="text-brand-accent hover:underline">LinkedIn</a> has the full story.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-[32px] font-semibold text-brand-text mb-8">Experience</h2>
            
            <div className="flex flex-col gap-10">
              {/* Job 1 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Codiris | Co-Founder &amp; Product Designer (2025 - 2026)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">AI-Native Product, Agent-Driven Design, and 0→1</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Systems Design:</strong> Designed an AI-native environment for product teams, orchestrating specialized agents from brainstorm to shipped product. Every agent downstream carries the full context of every decision that came before it.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Data-Driven Iteration:</strong> Conducted user interviews and usability testing on v1, discovering that no users followed a linear workflow, leading to a full information architecture overhaul and a tab-based v2 that significantly improved user experience and repeat engagement.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Agile Collaboration:</strong> Worked within an Agile/Scrum framework alongside a PM and two engineers across Washington DC, San Francisco, and Paris, coordinating across time zones and languages to ship a complex, AI-native product from 0 to 1.</span></li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Tager Consulting | Principal Designer (2024 - 2025)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Strategic Design, Research-Based Decision Making, and Multi-Platform Products</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">HCD &amp; Digital Redesign:</strong> Applied Human-Centered Design to reorganize a mental health clinic&apos;s patient intake experience, aligning their digital presence with high-trust medical standards and improving the end-to-end user journey.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Conversion Design:</strong> Designed high-converting landing pages for an EdTech platform tailored to specific user acquisition partnerships, doubling annual revenue by removing friction between discovery and sign-up.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Systems &amp; Service Design:</strong> Led a full POS systems migration and staff training for a DC restaurant, automating the order intake process and redirecting 100% of host team focus to the guest experience.</span></li>
                </ul>
              </div>

              {/* Job 3 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Operations &amp; Hospitality | General Manager &amp; Director (2017 - 2025)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Service Design, End-to-End Experience, and Customer Loyalty</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">End-to-End Experience Design:</strong> Designed and launched a Shopify e-commerce platform bridging physical production and digital fulfillment, generating <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">$20,000+</strong> in revenue within six months and a <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">20% customer return rate</strong>.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Strategic Leadership:</strong> Directed post-pandemic business revitalizations across multiple venues, achieving a <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">30% year-over-year sales increase</strong> by redesigning service programs and optimizing the end-to-end customer journey.</span></li>
                </ul>
              </div>

              {/* Job 4 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Strategic Communications | Associate &amp; Account Executive (2010 - 2016)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Strategic Messaging, Stakeholder Management, and Storytelling</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Stakeholder Identification &amp; Alignment:</strong> Managed communications for <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Fortune 500 clients</strong>, developing strategies that translated complex business needs into clear, actionable narratives.</span></li>
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
                 <a href="/images/Bruno_Tager_Resume.pdf" download className="hover:text-brand-accent transition-colors">Download Resume</a>
               </li>
             </ul>
          </div>
          
          {/* Skills */}
          <div>
             <h3 className="text-sm font-semibold text-brand-text/50 uppercase tracking-widest mb-4">Skills</h3>
             <div className="flex flex-col gap-5">
                {[
                  { category: "Core UX/UI", items: ["Human-Centered Design", "Information Architecture", "Responsive Design", "Prototyping", "Accessibility & 508 Compliance"] },
                  { category: "Research & Discovery", items: ["User Research", "Usability Testing", "Competitive Analysis", "Discovery Workshops", "Journey Mapping"] },
                  { category: "Strategy & Systems", items: ["Product Strategy", "Service Design", "Systems Thinking", "Behavioral Design", "Agile / Scrum"] },
                  { category: "Communication", items: ["Stakeholder Alignment", "Strategic Communications"] },
                ].map(group => (
                  <div key={group.category}>
                    <h4 className="text-[13px] font-semibold text-brand-text/60 mb-2">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-border-light text-[14px] text-brand-text rounded-md border border-border-dark whitespace-nowrap">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Tools */}
          <div>
             <h3 className="text-sm font-semibold text-brand-text/50 uppercase tracking-widest mb-4">Tools</h3>
             <div className="flex flex-wrap gap-2">
                {[
                  "Figma", "FigmaMake", "Cursor", "Claude Code", "Antigravity", "Gemini", "ChatGPT", "Claude", 
                  "PostHog Analytics", "GitHub", "Notion", "Trello", "Adobe Creative Suite", "Miro", "FigJam"
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
