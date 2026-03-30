import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function VisualBlock({ src, alt, className = "my-4", contained = false }: { src?: string, alt: string, className?: string, contained?: boolean }) {
  if (!src) return null;
  
  const imageClasses = contained 
    ? "h-auto block w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[450px] mx-auto my-6 border border-border-dark/20 rounded-[8px]" 
    : "w-full h-auto block";
    
  const containerClasses = contained
    ? `w-full rounded-[16px] overflow-hidden relative border border-border-dark bg-border-light/40 flex justify-center py-8 ${className}`
    : `w-full rounded-[16px] overflow-hidden relative border border-border-dark ${className}`;

  return (
    <div className={containerClasses}>
      {src.endsWith('.mp4') ? (
        <video src={src} autoPlay loop muted playsInline className={imageClasses} />
      ) : (
        <Image src={src} alt={alt} width={1600} height={900} className={imageClasses} unoptimized={src.endsWith('.gif')} />
      )}
    </div>
  );
}

const CASE_STUDIES: Record<string, any> = {
  "codiris": {
    name: "Codiris",
    visual_problem: "/images/codiris-visual-1.png",
    visual_iteration: "/images/codiris-visual-2.gif",
    visual_decisions_bottom: "/images/codiris-visual-3.mp4",
    visual_outcome: "/images/codiris-visual-4.mp4",
    subhead: "Systems Architecture",
    subtitle: "Restoring the Product Development Lifecycle",
    problem: {
      paragraphs: [
        <>Product teams aren’t just under pressure. They are operating inside companies struggling to keep pace with constant change. While expectations for speed are rising, team structures are shrinking. When teams fail to adapt, the result is more than a missed deadline. It is <strong className="font-semibold text-brand-text">human layoffs</strong>.</>,
        "Inside this high-stakes environment, the product development process is broken. Instead of a cohesive flow, the system is defined by high-friction gaps:"
      ],
      list: [
        <><strong className="font-semibold text-brand-text">Ideas</strong> live in scattered, disconnected tools.</>,
        <><strong className="font-semibold text-brand-text">Research</strong> is skipped or ignored because it is seen as a barrier to moving fast.</>,
        <><strong className="font-semibold text-brand-text">Designers</strong> spend more time explaining and justifying than actually building.</>,
        <><strong className="font-semibold text-brand-text">PMs</strong> lose visibility and inevitably become bottlenecks.</>,
        <><strong className="font-semibold text-brand-text">Engineers</strong> are stuck cleaning up low-quality, hallucinated AI output.</>
      ],
      conclusion: [
        <>Everyone claims to be busy, yet very little actually moves. Codiris was built to strip away that friction and bring <strong className="font-semibold text-brand-text">performance</strong> back to the center of product development.</>
      ]
    },
    context: {
      items: [
        { label: "Role", value: "Product Designer & Co-Founder" },
        { label: "Context", value: <>0→1 Early-Stage<br />Startup</> },
        { label: "Platform", value: "Desktop Web Application" },
        { label: "Key Focus", value: "Systems Architecture & AI Workflows" }
      ],
      constraintsPrompt: "Key Constraints:",
      constraints: [
        "Design for high-efficiency product teams rather than solo builders.",
        "Build a system to support the creative product development process instead of enforcing a single, rigid workflow.",
        "Enable collaboration and permissions from day one.",
        "Validate every design choice against its impact on speed and user goals."
      ]
    },
    insight: {
      prompt: "What we heard from users was consistent:",
      list: [
        "They lost momentum between steps",
        "They had to re-explain decisions constantly",
        "They forgot why earlier choices were made",
        "Progress felt like it reset whenever they switched phases"
      ],
      conclusion: [
        "What they were describing wasn’t a missing feature, it was a continuity gap.",
        <><strong className="font-semibold text-brand-text">That insight became the foundation of Codiris.</strong></>
      ]
    },
    bet: {
      paragraphs: [
        "The solution isn't another tool. It's an integrated Product Development Environment (PDE).",
        <span className="text-brand-text/80 font-normal">We bet that by maintaining context through the iteration process, we could eliminate the friction between development phases and prevent expensive hallucinations.</span>
      ]
    },
    iteration: {
      paragraphs: [
        "Early versions of Codiris focused on structured phases and guided workflows. While this provided initial clarity, we found that it introduced unnecessary friction for high-efficiency product teams. We learned that too much structure actively blocks the creative product development process."
      ],
      prompt: "",
      list: [
        <><strong className="font-semibold text-brand-text">Structure vs. Momentum:</strong> Forced sequences helped with onboarding but became a barrier to long-term speed.</>,
        <><strong className="font-semibold text-brand-text">The Non-Linear Reality:</strong> Real-world building does not happen in a straight line; rigid steps constrained natural team behaviors.</>,
        <><strong className="font-semibold text-brand-text">Support vs. Control:</strong> Teams did not want a tool that dictated their work. They wanted an environment that supported their unique rhythm.</>
      ],
      conclusion: [
        "This feedback shifted the product away from enforcing a linear methodology and toward building an adaptable system that prioritizes efficiency and user decisions."
      ]
    },
    shift: {
      paragraphs: [
        "The transition to v2 was not about adding more features. It was a fundamental change in how we approached system behavior. By watching how teams actually interacted with Codiris, we realized that the primary friction was not what they could do, but how they moved between phases.",
        "We saw that users needed to jump between research, planning, design, and building instantly. This observation led us to replace the step-by-step flow with a tab-based architecture. This shift transformed Codiris from a sequence of pages into a non-linear environment. It allowed users to maintain multiple workstreams simultaneously, ensuring that they never had to choose between focus and context. It was no longer about following a path; it was about providing a workspace that matched the way builders actually think."
      ],
      list: []
    },
    decisionsIntro: "Each of these decisions was made to reinforce continuity over friction. We prioritized flow and momentum at every level of the interface.",
    decisions: [
      {
        feature: "Expandable phase tabs over hard navigation",
        rationale: "We enabled users to move fluidly across the iteration process without losing context or triggering mental resets."
      },
      {
        feature: "Chat as a persistent system brain",
        rationale: "Strategic decisions, reasoning, and next steps remained visible within the workspace instead of being buried in a disconnected history."
      },
      {
        feature: "Productive waiting over idle loading",
        rationale: "We transformed agent latency into active planning time, ensuring that technical processing never resulted in dead time for the user."
      },
      {
        feature: "Task-based design planning",
        rationale: "We replaced abstract page selection with concrete, editable implementation plans that bridged the gap between design and building."
      },
      {
        feature: "Embedded help over external documentation",
        rationale: "By embedding Iris directly into the workspace, we ensured that questions were answered exactly where the work happened, not in separate tools."
      }
    ],
    decisionsConclusion: "",
    outcome: {
      intro: "Codiris moved from a rigid prototype into a functional environment for active iteration. By shifting to a tab-based PDE, we transformed the product from a series of disconnected steps into a unified system for building.",
      improvedLabel: "Performance Gains",
      improved: [
        <><strong className="font-semibold text-brand-text">Zero Context Loss.</strong> Users moved between phases without resets.</>,
        <><strong className="font-semibold text-brand-text">Cross-Role Alignment.</strong> Direct visibility for PMs and Designers.</>,
        <><strong className="font-semibold text-brand-text">High-Environment Retention.</strong> Sustained engagement within the tool.</>
      ],
      challengingLabel: "The Next Optimization",
      challenging: [
        <><strong className="font-semibold text-brand-text">Intuitive Onboarding.</strong> Reducing the learning curve for the PDE model.</>,
        <><strong className="font-semibold text-brand-text">Adaptive Guidance.</strong> Teaching flexibility without overwhelming the user.</>,
        <><strong className="font-semibold text-brand-text">System Stability.</strong> Stress-testing the architecture for massive data sets.</>
      ]
    },

    perspectiveTitle: "How Designing Codiris Shaped My Perspective",
    perspective: {
      paragraphs: [
        "Products fail when tools break a team’s ability to think creatively. My role is to maximize momentum and provide support exactly where it is needed. When we prioritize user intent over features, the user wins. When the user wins, the product and the business win too. This is the athlete mindset in practice: optimizing the environment so the team can perform at their highest level."
      ],
      list: []
    }
  },
  "fit-and-fun": {
    name: "Fit & Fun",
    visual_problem: "/images/fit-and-fun-visual-1.png",
    visual_shift: "/images/fit-and-fun-visual-2.png",
    visual_decisions_title: "/images/fit-and-fun-visual-3.png",
    visual_decisions_bottom: "/images/fit-and-fun-visual-4.gif",
    visual_outcome: "/images/fit-and-fun-visual-5.png",
    contained_visuals: ["visual_shift", "visual_decisions_title", "visual_decisions_bottom", "visual_outcome"],
    subhead: "Behavioral Design",
    subtitle: "Designing Momentum in the Daily Routine",
    problem: {
      paragraphs: [
        "As adults move into their 30s and beyond, staying active is a real challenge. Not because people stop caring about their health, but because most fitness products assume users have consistent time, stable motivation, and a clean routine. In reality, most adults are trying to fit movement into small gaps between work, life, and fatigue.",
        "The primary friction is not finishing a workout. It is starting one. When progress feels invisible, effort feels pointless. When effort feels pointless, consistency collapses. Fit & Fun was built to solve this by making effort visible immediately."
      ],
      list: [],
      conclusion: []
    },
    context: {
      items: [
        { label: "Role", value: "Product Designer" },
        { label: "Context", value: <>Mobile Health<br />Concept</> },
        { label: "Platform", value: "Mobile App" },
        { label: "Key Focus", value: "Behavioral Design & Gamification" }
      ],
      constraintsPrompt: <>I evolved Fit & Fun from a Figma prototype into a production-ready environment using Antigravity. This allowed me to test real interaction, motion, and state beyond static frames.<br /><br /><strong className="font-semibold text-brand-text">Key Constraints:</strong></>,
      constraints: [
        "Prioritize \"Time-to-Start\" over workout duration.",
        "Build for variable motivation levels instead of assuming a clean routine.",
        "Ensure progress is visible within seconds of opening the app.",
        "Eliminate performance guilt to protect long-term retention."
      ]
    },
    insight: {
      prompt: "What users described was a persistent trust gap. They didn't want more pressure; they wanted reassurance that showing up counted.",
      list: [
        "\"I lose momentum between workouts.\"",
        "\"I feel guilty every time I miss a day.\"",
        "\"I don't feel rewarded for the effort I actually put in.\""
      ],
      conclusion: []
    },
    bet: {
      paragraphs: [
        "Most fitness products demand intensity before they earn trust.",
        <span key="bet-span" className="text-brand-text/80 font-normal">I bet that by reducing Time-to-start and making progress instantly visible, users will work out more.</span>
      ],
      list: []
    },
    iteration: {
      paragraphs: [
        "The Figma prototype proved that a friendly, character-driven experience could lower the barrier to entry. However, moving the design into a production-ready environment revealed what static prototypes don't:"
      ],
      prompt: "",
      list: [
        "Hidden steps create unnecessary friction before a workout.",
        "Single timers make short sessions feel artificially long.",
        "Feedback loops are too delayed to affect the user’s state."
      ],
      conclusion: [
        "The rebuild prioritizes momentum."
      ]
    },
    shift: {
      paragraphs: [
        "The transition to v2 was a shift from designing screens to designing behavior. Instead of asking if the UI looked correct, the primary design question became:",
        <strong key="shift-q" className="font-semibold text-brand-text">Does this reduce friction the moment a user decides to start?</strong>,
        "I changed my priorities to reflect this:"
      ],
      list: [
        <><strong className="font-semibold text-brand-text">Clarity over features.</strong> Every element that didn't help a user start was removed.</>,
        <><strong className="font-semibold text-brand-text">State over static screens.</strong> I designed for the fluid transition between rest and effort.</>,
        <><strong className="font-semibold text-brand-text">Feedback tied to effort.</strong> Rewards were linked to the act of doing, not just the final outcome.</>
      ]
    },
    decisions: [
      {
        feature: "Singular primary action",
        rationale: "The home screen is intentionally constrained to one clear action: Start Workout. I avoided feeds, dashboards, and competing choices to ensure the interface is clear and decisive."
      },
      {
        feature: "Selection as a gentle constraint",
        rationale: "Users choose time, intensity, and focus. This reduces choice overload while keeping the user moving forward."
      },
      {
        feature: "Dual-layer progress",
        rationale: "Real-time feedback shows both current step time and total workout time. This reduces the mental load of a session."
      },
      {
        feature: "Persistent step visibility",
        rationale: "Current and upcoming steps remain visible in a persistent bottom sheet, eliminating uncertainty during the workout."
      },
      {
        feature: "Journey-based growth",
        rationale: "Levels are represented as a forward-filling path. I replaced leaderboards and streaks with a sense of personal growth to eliminate performance guilt."
      }
    ],
    decisionsConclusion: "",
    outcome: {
      intro: "The rebuild made Fit & Fun lighter, clearer, and more motivating to use.",
      improvedLabel: "Performance Gains",
      improved: [
        <><strong className="font-semibold text-brand-text">Removed Friction.</strong> Minimal user hesitation from opening the app to starting a workout.</>,
        <><strong className="font-semibold text-brand-text">Visible Progress.</strong> Users felt the impact of effort in real-time.</>,
        <><strong className="font-semibold text-brand-text">Consistency without Pressure.</strong> High retention through personal growth.</>
      ],
      challengingLabel: "The Next Optimization",
      challenging: [
        <><strong className="font-semibold text-brand-text">Adaptive Personalization.</strong> Tailoring suggestions based on real behavior patterns.</>,
        <><strong className="font-semibold text-brand-text">Supportive Notifications.</strong> Using calm reinforcement to protect the routine.</>,
        <><strong className="font-semibold text-brand-text">Reward Scaling.</strong> Ensuring the gamification stays meaningful over months.</>
      ]
    },
    perspectiveTitle: "How Fit & Fun Shaped My Perspective",
    perspective: {
      paragraphs: [
        "Consistency is not a motivation problem; it is a design problem. People drop off because products introduce friction, ambiguity, or pressure at the wrong moments. If a product asks for consistency, it must earn it by removing every barrier to start. This is the athlete mindset: you don't win with a single intense effort; you win by showing up every day."
      ],
      list: []
    }
  },
  "cyclebot": {
    name: "CycleBot",
    visual_problem: "/images/cyclebot-visual-1.png",
    visual_iteration: "/images/cyclebot-visual-2.png",
    visual_decisions_title: "/images/cyclebot-visual-3.png",
    visual_outcome: "/images/cyclebot-visual-4.png",
    contained_visuals: ["visual_iteration", "visual_decisions_title", "visual_outcome"],
    subhead: "Conversion Strategy",
    subtitle: "Optimizing the Path to High-Intent Purchase",
    problem: {
      paragraphs: [
        "Cyclelab was losing users at the exact moments that mattered most.",
        "Half of users dropped off while browsing.",
        "Among those who reached checkout, 70% abandoned.",
        "It was a decision problem.",
        "Buying a bike is expensive, technical, and personal.",
        "Online, users lacked confidence that they were choosing the right bike.",
        "What we saw consistently:"
      ],
      list: [
        "Users felt overwhelmed by options",
        "They missed expert guidance they’d expect in-store",
        "They were unsure how recommendations were made",
        "They hesitated before committing, then left"
      ],
      conclusion: [
        "The business impact was clear:",
        "If users didn’t trust their decision, they didn’t convert."
      ]
    },
    context: {
      items: [
        { label: "Role", value: "Product Designer" },
        { label: "Context", value: <>Fitness Tech<br />Concept</> },
        { label: "Platform", value: "Mobile Web" },
        { label: "Key Focus", value: "Conversion Strategy & E-Commerce" }
      ],
      constraintsPrompt: "This project started from a real business signal: people were browsing but not buying. The goal was not to redesign the entire store. It was to reduce uncertainty at the point of decision. CycleBot was designed as a mobile-first assistant to help users navigate the product catalog more easily than traditional browsing.",
      constraints: []
    },
    insight: {
      prompt: "Users didn’t say they wanted “better UX.” They said things like:",
      list: [
        "“I’m not sure this is the right bike for me.”",
        "“I wish I could talk to someone who knows bikes.”",
        "“I don’t want to make a mistake at this price.”"
      ],
      conclusion: [
        "What they were describing was a lack of confidence.",
        "They didn’t need more filters.",
        "They needed reassurance.",
        "That reframed the problem from discovery to decision support."
      ]
    },
    bet: {
      paragraphs: [
        "If Cyclelab could replicate the feeling of expert guidance online, users would feel confident enough to commit.",
        "Trust, not persuasion, was the missing lever.",
        "CycleBot was designed as an AI bike expert that could:"
      ],
      list: [
        "Ask the right questions",
        "Explain recommendations clearly",
        "Reduce anxiety around high-value decisions"
      ]
    },
    iteration: {
      paragraphs: [
        "The first version leaned heavily on a questionnaire model.",
        "It technically worked, but testing revealed problems:"
      ],
      prompt: "",
      list: [
        "Users weren’t sure if they were chatting or filling a form",
        "The AI’s role wasn’t immediately clear",
        "Input options (voice, camera, text) created early confusion"
      ],
      conclusion: [
        "Instead of helping, the interface added cognitive load.",
        "Iteration shifted the experience from “answering questions” to “having a conversation.”",
        "That change alone dramatically improved clarity and engagement."
      ]
    },
    shift: {
      paragraphs: [
        "Early designs focused on accuracy.",
        "Later designs focused on confidence.",
        "The key shift was realizing that users didn’t need perfect recommendations.",
        "They needed to understand why a recommendation made sense.",
        "Design decisions moved from optimization to explanation."
      ],
      list: []
    },
    decisions: [
      {
        feature: "Conversational AI over static questionnaires",
        rationale: "CycleBot was presented as a clear, named AI expert, not a form disguised as chat."
      },
      {
        feature: "Progressive disclosure of inputs",
        rationale: "Advanced inputs like camera and measurements were introduced only when relevant."
      },
      {
        feature: "Recommendation justification",
        rationale: "Users could see why a bike was recommended, not just what was recommended."
      },
      {
        feature: "Guest checkout as default",
        rationale: "Account creation was removed from the moment of commitment to reduce friction."
      },
      {
        feature: "Problem logs driving iteration",
        rationale: "Each test produced a prioritized problem log to guide the next design pass."
      }
    ],
    decisionsConclusion: "",
    outcome: {
      intro: "The final prototype showed clear improvements.",
      improved: [
        "Users understood CycleBot’s role earlier",
        "Conversations felt more natural",
        "Recommendations felt more trustworthy",
        "Checkout friction was reduced"
      ],
      challenging: [
        "Building enough reassurance for high-value purchases",
        "Helping users compare options side by side",
        "Supporting users who wanted to pause and return later"
      ]
    },

    perspectiveTitle: "What This Project Reinforced for Me",
    perspective: {
      paragraphs: [
        "Conversion isn’t driven by pressure.",
        "It’s driven by confidence.",
        "Users don’t abandon because they’re indecisive.",
        "They abandon because they don’t feel safe committing.",
        "CycleBot reinforced how good design drives outcomes by helping people make better decisions, not faster ones."
      ],
      list: []
    }
  },
  "ccta": {
    name: "Center for Cognitive Therapy and Assessment",
    visual_problem: "/images/ccta-visual-1.jpg",
    visual_iteration_title: "/images/ccta-visual-2.jpg",
    visual_decisions_title: "/images/ccta-visual-3.jpg",
    visual_decisions_bottom: "/images/ccta-visual-4.jpg",
    contained_visuals: ["visual_decisions_title"],
    subhead: "User Acquisition",
    subtitle: "Scaling Acquisition Through Clinical Trust",
    problem: {
      paragraphs: [
        "CCTA’s website was actively working against the practice.",
        "Despite high-quality services, the site failed to communicate trust, clarity, or ease of access.",
        "Key issues surfaced immediately:"
      ],
      list: [
        "The homepage carousel consumed prime space without explaining services",
        "Low contrast text reduced readability and accessibility",
        "Large blocks of centered copy were difficult to scan",
        "Dark overlays created a somber tone misaligned with therapy",
        "Authority and credibility were unclear",
        "Generic imagery added noise instead of reassurance"
      ],
      conclusion: [
        "For a mental health practice, this wasn’t just a design flaw.",
        "It meant missed inquiries and lost potential clients.",
        "If website visitors couldn’t quickly understand what CCTA offered or how to get started, they left."
      ]
    },
    context: {
      items: [
        { label: "Role", value: "Principal Consultant" },
        { label: "Context", value: "Mental Health Clinic Redesign" },
        { label: "Platform", value: "Responsive Web" },
        { label: "Key Focus", value: "High-Trust UX & User Acquisition" }
      ],
      constraintsPrompt: "CCTA’s business goal was clear: increase qualified inbound inquiries and keep clinicians fully booked. My role was to redesign the site to support that goal while respecting the emotional context of people seeking therapy.",
      constraints: []
    },
    insight: {
      prompt: "Two assumptions guided the work:",
      list: [
        "First, people searching for therapy are often anxious or uncertain.",
        "Second, a cluttered or heavy interface increases hesitation."
      ],
      conclusion: [
        "Through competitive analysis, website audits, and clinician conversations, those assumptions were validated.",
        "Visitors need to feel calm, oriented, and informed before they feel ready to reach out.",
        "The issue wasn’t missing information.",
        "It was cognitive overload at the wrong moment."
      ]
    },
    bet: {
      paragraphs: [
        "If the website could communicate professionalism, warmth, and clarity within the first few seconds, visitors would feel safe enough to take the next step.",
        "Lowering emotional friction would increase inquiry volume."
      ],
      list: []
    },
    iteration: {
      paragraphs: [
        "The most impactful change was removing the homepage carousel and replacing it with a single, calming hero section.",
        "This clarified what CCTA does and set the right emotional tone immediately.",
        "From there, iteration focused on simplifying and restructuring the rest of the homepage.",
        "Service categories were redesigned for readability and accessibility.",
        "Contrast was improved.",
        "Centered text blocks were rewritten and realigned for scanability.",
        "Navigation labels were rewritten to guide visitors through a logical story:"
      ],
      prompt: "",
      list: [
        "How It Works",
        "How We Can Help",
        "Who We Are",
        "Get Started"
      ],
      conclusion: [
        "Each round of feedback reinforced the same direction: increase clarity."
      ]
    },
    shift: {
      paragraphs: [
        "The shift wasn’t visual.",
        "It was strategic.",
        "Instead of asking, “How do we showcase everything?”",
        "the question became, “What does someone need to understand and feel before reaching out?”",
        "That reframing prioritized:"
      ],
      list: [
        "Clarity over density",
        "Guidance over decoration",
        "Confidence over cleverness"
      ]
    },
    decisions: [
      {
        feature: "Replaced carousel with a focused hero section",
        rationale: "Removed rotating content and replaced it with a single, calming message aligned with the practice’s tone."
      },
      {
        feature: "Restructured service content into accessible cards",
        rationale: "Separated imagery and text, improved contrast, and made services easier to scan."
      },
      {
        feature: "Rewrote navigation for emotional flow",
        rationale: "Organized menu titles to guide visitors from understanding to action."
      },
      {
        feature: "Unified color system for visual calm",
        rationale: "Established a consistent light background with a refined primary blue to reduce visual heaviness."
      },
      {
        feature: "Humanized the homepage with equitable clinician representation",
        rationale: "Introduced a horizontally scrollable clinician section to showcase all practitioners without hierarchy."
      }
    ],
    decisionsConclusion: "",
    outcome: {
      intro: "The redesign delivers a calmer, clearer, and more trustworthy experience.",
      improved: [
        "Services are easier to understand",
        "Paths to contact are clearer and more visible",
        "Visual tone aligns with the therapeutic context",
        "Stakeholders feel accurately and fairly represented"
      ],
      challenging: [
        "Formal user testing is limited by scope and budget",
        "Final implementation depends on third-party development execution"
      ]
    },

    perspectiveTitle: "What This Project Reinforced for Me",
    perspective: {
      paragraphs: [
        "In mental health, design directly affects access.",
        "Small choices in layout, tone, and structure can either lower the barrier to care or quietly increase it.",
        "This project reinforced the importance of:"
      ],
      list: [
        "Designing for emotional context",
        "Reducing cognitive load before asking for commitment",
        "Aligning business goals with human sensitivity"
      ],
      conclusion: [
        "When trust is the product, clarity becomes the strategy."
      ]
    }
  }
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug as string];
  
  if (!data) return notFound();

  return (
    <main className="flex flex-col items-center px-6 md:px-12 pt-32 pb-24 max-w-[800px] mx-auto w-full">
      {/* Hero block */}
      <section className="w-full mb-16 md:mb-24 text-center">
        <h2 className="text-brand-accent text-[20px] font-semibold tracking-wide uppercase mb-6">{data.name}</h2>
        <h1 className={data.subtitle ? "mb-4" : "mb-6"}>{data.subhead}</h1>
        {data.subtitle && <p className="text-[20px] md:text-[24px] font-medium leading-[32px] text-brand-text/70 mb-6 max-w-2xl mx-auto">{data.subtitle}</p>}
      </section>

      {/* Main Content constraints - using proper width like Homepage */}
      <div className="w-full flex flex-col items-start gap-12">

        {/* The Problem */}
        <section className="w-full">
          <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">The Problem</h2>

          {/* Visual Container: Problem */}
          <VisualBlock contained={data.contained_visuals?.includes('visual_problem')} src={data.visual_problem} alt={`${data.name} problem visual`} className={`mb-8 ${data.name === 'CycleBot' ? '!border-[3px] !border-[#222222]' : ''}`} />

          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4">
            {data.problem.paragraphs?.map((p: any, i: number) => <p key={i}>{p}</p>)}
          </div>
          {data.problem.list && data.problem.list.length > 0 && (
            <ul className="mt-6 mb-6 list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
              {data.problem.list.map((it: any, i: number) => <li key={i}>{it}</li>)}
            </ul>
          )}
          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4">
            {data.problem.conclusion?.map((p: any, i: number) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* Context Grid */}
        <section className="w-full border-t border-b border-border-light py-6">
          <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">Context</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 w-full lg:grid-cols-4">
            {data.context.items?.map((item: {label: string, value: any}, i: number) => (
              <div key={i}>
                <div className="text-sm font-semibold text-brand-text/50 uppercase tracking-widest mb-2">{item.label}</div>
                <div className="font-medium text-brand-text">{item.value}</div>
              </div>
            ))}
          </div>
          {data.context.constraintsPrompt && (
            <p className="text-[16px] leading-[24px] text-brand-text/80 mt-8 mb-0">{data.context.constraintsPrompt}</p>
          )}
          {data.context.constraints && data.context.constraints.length > 0 && (
            <ul className="list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80 mt-4">
              {data.context.constraints.map((c: string, i: number) => <li key={i}>{c}</li>)}
            </ul>
          )}
        </section>



        {/* Insight */}
        <section className="w-full">
          <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">Insight</h2>
          {data.insight.prompt && (
            <p className="text-[16px] leading-[24px] text-brand-text/80 mb-4">{data.insight.prompt}</p>
          )}
          {data.insight.list && data.insight.list.length > 0 && (
            <ul className="mb-6 list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
              {data.insight.list.map((it: string, i: number) => <li key={i}>{it}</li>)}
            </ul>
          )}
          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4">
            {data.insight.conclusion?.map((p: any, i: number) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* The Bet */}
        <section className="w-full bg-brand-accent/5 p-8 md:p-12 rounded-[16px] border border-brand-accent/20">
          <h3 className="mb-6 text-brand-accent text-xl font-semibold">The Bet</h3>
          <div className="text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] text-brand-text font-medium flex flex-col gap-4 mb-6">
            {data.bet.paragraphs?.map((p: any, i: number) => <p key={i}>{p}</p>)}
          </div>
          {data.bet.list && data.bet.list.length > 0 && (
            <ul className="list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
              {data.bet.list.map((c: string, i: number) => <li key={i}>{c}</li>)}
            </ul>
          )}
        </section>

        {/* Iteration That Mattered */}
        <section className="w-full">
          <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">Iteration That Mattered</h2>
          {/* Visual Container: Iteration Title */}
          <VisualBlock contained={data.contained_visuals?.includes('visual_iteration_title')} src={data.visual_iteration_title} alt={`${data.name} iteration intro visual`} className="mb-8" />
          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4 mb-6">
            {data.iteration.paragraphs?.map((p: any, i: number) => <p key={i}>{p}</p>)}
          </div>
          {data.iteration.prompt && (
             <p className="text-[16px] leading-[24px] text-brand-text/80 mb-4">{data.iteration.prompt}</p>
          )}
          {data.iteration.list && data.iteration.list.length > 0 && (
            <ul className="mb-6 list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
              {data.iteration.list.map((it: any, i: number) => <li key={i}>{it}</li>)}
            </ul>
          )}
          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4">
            {data.iteration.conclusion?.map((p: any, i: number) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* Visual Container: Iteration */}
        <VisualBlock contained={data.contained_visuals?.includes('visual_iteration')} src={data.visual_iteration} alt={`${data.name} iteration visual`} />

        {/* The Shift in Thinking */}
        <section className="w-full mt-4">
          <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">The Shift in Thinking</h2>
          {/* Visual Container: Shift */}
          <VisualBlock contained={data.contained_visuals?.includes('visual_shift')} src={data.visual_shift} alt={`${data.name} shift visual`} className="mb-8" />
          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4">
            {data.shift.paragraphs?.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
          {data.shift.list && data.shift.list.length > 0 && (
            <ul className="mt-4 list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
              {data.shift.list.map((it: string, i: number) => <li key={i}>{it}</li>)}
            </ul>
          )}
        </section>



        {/* Key Design Decisions */}
        <section className="w-full">
          <h2 className="mb-10 text-2xl md:text-[32px] font-semibold text-brand-text">Key Design Decisions</h2>
          {/* Visual Container: Decisions Title */}
          <VisualBlock contained={data.contained_visuals?.includes('visual_decisions_title')} src={data.visual_decisions_title} alt={`${data.name} decisions intro visual`} className="mb-10" />
          {data.decisionsIntro && (
            <p className="text-[16px] leading-[24px] text-brand-text/80 mb-10">{data.decisionsIntro}</p>
          )}
          <div className="grid grid-cols-1 gap-10">
            {data.decisions?.map((decision: {feature: string, rationale: string}, i: number) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="font-bold text-brand-accent shrink-0 text-xl font-mono pt-1">{(i + 1).toString().padStart(2, '0')}</div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-semibold text-brand-text">{decision.feature}</h3>
                  <p className="text-[16px] leading-[24px] text-brand-text/80">{decision.rationale}</p>
                </div>
              </div>
            ))}
          </div>
          {data.decisionsConclusion && (
            <p className="text-[16px] leading-[24px] text-brand-text/80 mt-10 font-medium">
              {data.decisionsConclusion}
            </p>
          )}
        </section>

        {/* Visual Container: Decisions Bottom */}
        <VisualBlock contained={data.contained_visuals?.includes('visual_decisions_bottom')} src={data.visual_decisions_bottom} alt={`${data.name} decisions conclusion visual`} />

        {/* Outcome */}
        <section className="w-full border-t border-border-light pt-12">
           <h2 className="text-2xl md:text-[32px] font-semibold text-brand-text mb-6">Outcome</h2>
           <p className="text-[16px] leading-[24px] text-brand-text/80 mb-6">{data.outcome.intro}</p>

           {/* Visual Container: Outcome */}
           <VisualBlock contained={data.contained_visuals?.includes('visual_outcome')} src={data.visual_outcome} alt={`${data.name} outcome visual`} className="mb-10" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div>
                <h3 className="mb-6 font-semibold text-[20px]">{data.outcome.improvedLabel || "What improved"}</h3>
                <ul className="space-y-4">
                  {data.outcome.improved?.map((item: any, i: number) => (
                   <li key={i} className="flex items-start gap-4">
                     <span className="text-brand-accent mt-1">✓</span>
                     <span className="text-[16px] leading-[24px] text-brand-text/80">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div>
                <h3 className="mb-6 font-semibold text-[20px]">{data.outcome.challengingLabel || "What remained challenging"}</h3>
                <ul className="space-y-4">
                  {data.outcome.challenging?.map((item: any, i: number) => (
                   <li key={i} className="flex items-start gap-4">
                     <span className="text-brand-text/30 mt-1 text-[12px]">◆</span>
                     <span className="text-[16px] leading-[24px] text-brand-text/80">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </section>


        {/* How Designing [Name] Shaped My Perspective */}
        <section className="w-full bg-brand-bg border border-border-light rounded-[16px] p-8 md:p-12 mb-12">
          <h2 className="mb-8 text-2xl md:text-[32px] font-semibold text-brand-text">{data.perspectiveTitle || "Reflection"}</h2>
          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4 mb-8">
            {data.perspective.paragraphs?.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
          {data.perspective.list && data.perspective.list.length > 0 && (
            <ul className="list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
              {data.perspective.list.map((item: string, i: number) => <li key={i}>{item}</li>)}
            </ul>
          )}
          {data.perspective.conclusion && data.perspective.conclusion.length > 0 && (
            <div className="text-[16px] leading-[24px] text-brand-text mt-6 font-medium">
              {data.perspective.conclusion.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          )}
        </section>
        
      </div>

      {/* Back to Home CTA */}
      <section className="w-full pt-16 border-t border-border-light text-center">
         <Link href="/#work" className="inline-flex items-center gap-2 text-brand-text/60 hover:text-brand-accent transition-colors font-medium">
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to all work
         </Link>
      </section>
    </main>
  );
}
