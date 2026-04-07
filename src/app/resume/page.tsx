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
              Product Designer with <strong className="font-semibold text-brand-text">16 years of experience</strong> focused on <strong className="font-semibold text-brand-text">Product Performance</strong>: removing the friction between user intention and end goals. I bridge the gap between complex business objectives and human behavior, designing <strong className="font-semibold text-brand-text">calm, high-retention systems</strong> for the sports, fitness, and health-tech sectors. I specialize in <strong className="font-semibold text-brand-text">Human-Centered Design (HCD)</strong> and <strong className="font-semibold text-brand-text">Product Strategy</strong>, with a proven track record of transforming technical ambiguity and data-rich environments into intuitive experiences that delight the customer and improve the bottom line. Reach out to me so we can build a product that moves people forward.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-[32px] font-semibold text-brand-text mb-8">Experience</h2>
            
            <div className="flex flex-col gap-10">
              {/* Job 1 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Codiris | Co-Founder &amp; Product Designer</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Enterprise SaaS, Technical Complexity, and 0-&gt;1</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">System Design:</strong> Architected an <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">enterprise-grade B2B SaaS</strong> environment from the ground up, designing a unified system that eliminates the "continuity gap" in AI-driven workflows.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Data-Driven Decision Making:</strong> Leveraged mixed-methods research (<strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">PostHog and user interviews</strong>) to lead the evolution from v1 to v2, specifically solving for technical complexity and reducing context loss during phase transitions.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Workflow Optimization:</strong> Redesigned fragmented, linear processes into a <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">non-linear, tab-based architecture</strong>, significantly increasing user orientation and repeat engagement within the platform.</span></li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Operations &amp; Hospitality | General Manager &amp; Director (8 Years)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Service Design, Omni-channel Strategy, and Customer Loyalty</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Omni-channel Service Design:</strong> Led the omni-channel strategy for new business launches, connecting physical store operations with digital e-commerce platforms to drive customer loyalty and a <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">20% return rate</strong>.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Strategic Leadership:</strong> Directed high-pressure teams through complex business revitalizations, achieving a <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">30% sales increase</strong> by optimizing the end-to-end customer journey and translating high-level brand vision into actionable service standards.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Stakeholder Alignment:</strong> Managed complex cross-functional operations, aligning business requirements with human-centered principles to achieve long-term financial sustainability and <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">lifetime value</strong>.</span></li>
                </ul>
              </div>

              {/* Job 3 */}
              <div>
                <h3 className="text-[20px] font-semibold text-brand-text mb-1">Strategic Communications | Associate &amp; Account Executive (6 Years)</h3>
                <div className="text-[14px] font-medium text-brand-text/50 uppercase tracking-wider mb-4">Strategic Messaging, Stakeholder Management, and Storytelling</div>
                <ul className="flex flex-col gap-3 text-[16px] leading-[24px] text-brand-text/80">
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Stakeholder Identification &amp; Alignment:</strong> Managed communications for <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Fortune 500 clients</strong>, facilitating engagement and developing strategies to translate complex business needs into clear, actionable narratives.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Behavioral Strategy:</strong> Designed <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">strategic messaging frameworks</strong> for large-scale corporate initiatives, driving <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">user acquisition</strong> (<strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">23,000+ applicants</strong>) by removing the friction between information and action.</span></li>
                  <li className="flex gap-3 items-start group"><span className="text-brand-accent mt-0.5">→</span><span><strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">Evidence-Based Influencing:</strong> Used data-driven insights to shape public perception and community engagement, proving the value of <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">human-centered advocacy</strong> at an enterprise scale.</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-2xl md:text-[32px] font-semibold text-brand-text mb-8">Education</h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-[16px] font-semibold text-brand-text mb-1">UX/UI Design Bootcamp | Springboard, Online (03/24–04/25)</h3>
                <p className="text-[16px] leading-[24px] text-brand-text/80 group inline-block">
                  Intensive HCD and AI-research training, including a 4-week internship at <strong className="font-semibold text-brand-text group-hover:text-brand-accent transition-colors">American Dream (NJ)</strong> designing high-scale, omni-channel retail and e-commerce experiences.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-brand-text mb-1">International Studies, BA | UC Irvine, California (2006–2010)</h3>
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
             </ul>
          </div>
          
          {/* Skills */}
          <div>
             <h3 className="text-sm font-semibold text-brand-text/50 uppercase tracking-widest mb-4">Skills</h3>
             <div className="flex flex-wrap gap-2">
                {[
                  "Product Strategy", "Service Design", "Systems Thinking", "Behavioral Design", 
                  "Stakeholder Alignment", "Omni-channel Strategy", "Journey Mapping", "Mixed-Methods Research", 
                  "Data Visualization", "Human-Centered Design", "Strategic Communications"
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
