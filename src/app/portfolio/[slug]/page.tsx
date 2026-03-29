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
    subhead: "Designing coherence for modern product teams",
    problem: {
      paragraphs: [
        "Product teams aren’t just under pressure.",
        "They’re operating inside companies trying to keep up with constant change.",
        "Speed expectations are rising.",
        "Headcount is shrinking.",
        "And when teams fail to adapt, people get laid off.",
        "Inside that environment, the product development process has broken down:"
      ],
      list: [
        "Ideas live in scattered tools",
        "Research gets buried and forgotten",
        "Designers explain instead of build",
        "PMs lose visibility",
        "Engineers clean up low-quality AI output"
      ],
      conclusion: [
        "Everyone is busy.",
        "Very little moves.",
        "Codiris was created to bring coherence back to product development."
      ]
    },
    context: {
      items: [
        { label: "Role", value: "Product Designer and Co-Founder" },
        { label: "Team", value: "4 people (1 PM, 1 designer, 2 engineers)" },
        { label: "Company stage", value: "Early-stage startup" },
        { label: "Product", value: "Product Development Environment (IDE for product builders)" }
      ],
      constraintsPrompt: "Key constraints shaped the work:",
      constraints: [
        "We had to support product teams, not solo builders",
        "The system needed to adapt to different building styles, not enforce a single workflow",
        "Multiplayer had to work from day one: permissions, sharing, continuity",
        "Every design choice needed to justify its existence."
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
        "What they were describing wasn’t a missing feature.",
        "It was a continuity gap.",
        "That insight became the foundation of Codiris."
      ]
    },
    bet: {
      paragraphs: [
        "If we could preserve intent and context as work evolved, teams wouldn’t need more tools.",
        "They would need fewer resets.",
        "Codiris bet on becoming a continuous environment where:"
      ],
      list: [
        "Ideas evolve instead of restarting",
        "Decisions remain visible",
        "Progress feels cumulative, not fragmented"
      ]
    },
    iteration: {
      paragraphs: [
        "Early versions leaned into structured phases and guidance."
      ],
      prompt: "What we learned:",
      list: [
        "Structure improved clarity",
        "Too much structure constrained real workflows"
      ],
      conclusion: [
        "Teams didn’t want to be told how to build.",
        "They wanted support that adapted to them.",
        "This pushed the product toward flexibility over prescription."
      ]
    },
    shift: {
      paragraphs: [
        "v2 wasn’t about adding features.",
        "It was about adapting to real usage.",
        "That shift changed how we approached interaction, navigation, and system behavior across Codiris."
      ],
      list: []
    },
    decisions: [
      {
        feature: "Expandable phase tabs instead of hard navigation",
        rationale: "Allowed users to move fluidly without losing context or triggering mental resets."
      },
      {
        feature: "Chat as the persistent system brain",
        rationale: "Decisions, reasoning, and next steps stayed visible instead of being buried in history."
      },
      {
        feature: "Productive waiting instead of idle loading",
        rationale: "Agent latency became planning time instead of dead time."
      },
      {
        feature: "Task-based design planning",
        rationale: "Replaced abstract page selection with concrete, editable implementation plans."
      },
      {
        feature: "Iris as embedded help, not external documentation",
        rationale: "Questions were answered where work happened, not in separate tools."
      }
    ],
    decisionsConclusion: "Each decision reinforced continuity over fragmentation.",
    outcome: {
      intro: "Codiris shipped and entered active iteration.",
      improved: [
        "Reduced context loss across phases",
        "Stronger alignment across roles",
        "Higher engagement inside the environment"
      ],
      challenging: [
        "Onboarding first-time users",
        "Teaching flexibility without overwhelming",
        "Scaling collaboration for larger teams"
      ]
    },
    next: [
      "Introduce progressive onboarding tied to user intent",
      "Instrument phase transitions to detect friction",
      "Expand permission and collaboration models for enterprise teams"
    ],
    perspectiveTitle: "How Designing Codiris Shaped My Perspective",
    perspective: {
      paragraphs: [
        "Products don’t fail because teams lack tools.",
        "They fail because systems break thinking.",
        "Codiris pushed me to design for:"
      ],
      list: [
        "Multi-user environments",
        "Ambiguity over certainty",
        "Momentum over output"
      ]
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
    subhead: "Designing a lightweight fitness experience that turns consistency into momentum",
    problem: {
      paragraphs: [
        "As adults move into their 30s and beyond, staying active becomes harder.",
        "Not because people stop caring about their health, but because most fitness products assume people have stable time, stable motivation, and a clean routine.",
        "What I saw consistently was simpler:"
      ],
      list: [
        "Adults are trying to fit movement into small gaps between work, life, and fatigue",
        "Motivation changes day to day",
        "Progress feels delayed or unclear",
        "Fitness apps demand intensity before trust is earned"
      ],
      conclusion: [
        "For most adults, the challenge isn’t finishing a workout.",
        "It is starting one.",
        "When progress feels invisible, effort feels pointless.",
        "When effort feels pointless, consistency collapses.",
        "Fit & Fun was designed to make effort feel visible, immediately."
      ]
    },
    context: {
      items: [
        { label: "Role", value: "Product Designer" },
        { label: "Project type", value: "Bootcamp concept rebuilt into a fully coded app" },
        { label: "Platform", value: "Mobile" },
        { label: "Scope", value: "End-to-end UX, interaction design, and live product behavior" }
      ],
      constraintsPrompt: "I rebuilt Fit & Fun using modern AI-assisted tools (Antigravity) to extend UX decisions beyond Figma into real interaction, motion, and state.",
      constraints: []
    },
    insight: {
      prompt: "What users described wasn’t a lack of information or a need for better workouts. They described:",
      list: [
        "Struggling to start",
        "Feeling guilty when they fell off",
        "Not feeling rewarded by the effort they did manage to put in"
      ],
      conclusion: [
        "They didn’t want more pressure.",
        "They wanted reassurance.",
        "They wanted to feel, quickly and clearly: showing up counted."
      ]
    },
    bet: {
      paragraphs: [
        "If a fitness experience could reduce activation friction and make progress instantly legible, users would build momentum through completion, not intensity.",
        "Fit & Fun bet on rewarding consistency through visible progress and calm reinforcement."
      ],
      list: []
    },
    iteration: {
      paragraphs: [
        "v1 proved the concept: progress, levels, and a motivating character could make fitness feel friendlier.",
        "But it also revealed a limit: in a static prototype, many decisions lived as assumptions.",
        "In v2, rebuilding the product exposed what prototypes hide:"
      ],
      prompt: "",
      list: [
        "Hidden steps created uncertainty",
        "Single timers made workouts feel longer than they were",
        "Feedback needed to happen in the moment, not after the fact"
      ],
      conclusion: [
        "The rebuild turned conceptual design into real behavior."
      ]
    },
    shift: {
      paragraphs: [
        "v1 focused on screens and flows.",
        "v2 focused on behavior and pacing.",
        "Instead of asking “Does this look right?” the design question became:",
        "Does this reduce hesitation in the moment a user is deciding whether to start?",
        "That shift changed priorities:"
      ],
      list: [
        "Clarity over features",
        "State over static screens",
        "Feedback timed to effort, not outcomes"
      ]
    },
    decisions: [
      {
        feature: "Singular primary action",
        rationale: "The home screen is intentionally constrained: one clear action, Start Workout. No feeds, no dashboards, no competing choices. When motivation is fragile, the interface must be decisive."
      },
      {
        feature: "Workout selection as gentle constraint",
        rationale: "Users choose across time, intensity, and body focus. This reduces choice overload while preserving agency, and keeps the product moving forward."
      },
      {
        feature: "Dual-layer progress during workouts",
        rationale: "Progress is shown at two levels: total workout time and current step time. Users always know what’s happening now and how close they are to finishing."
      },
      {
        feature: "Steps always visible",
        rationale: "Workout steps remain visible in a bottom sheet with the current step highlighted and the next step previewed. This reduces uncertainty and supports momentum without extra interaction."
      },
      {
        feature: "Progress shown as a journey, not a scoreboard",
        rationale: "Levels are represented as a path that fills forward. Completion advances the avatar and unlocks the next level. No streak anxiety, no leaderboards, no performance guilt."
      }
    ],
    decisionsConclusion: "",
    outcome: {
      intro: "The rebuild made Fit & Fun lighter, clearer, and more motivating in real use.",
      improved: [
        "Lower hesitation to start",
        "Less uncertainty during workouts",
        "Progress felt earned through feedback",
        "Gamification reinforced consistency without pressure"
      ],
      challenging: [
        "Balancing simplicity with long-term depth",
        "Designing rewards that scale without becoming gimmicky"
      ]
    },
    next: [
      "Add lightweight personalization based on behavior (not profiles)",
      "Introduce optional routines that adapt to time patterns over weeks",
      "Test how progression affects retention over 14–30 days",
      "Explore a social layer that is opt-in and low pressure"
    ],
    perspectiveTitle: "What This Project Reinforced for Me",
    perspective: {
      paragraphs: [
        "Fit & Fun reinforced a core belief:",
        "Consistency is not a motivation problem.",
        "It’s a design problem.",
        "People don’t fall off because they lack discipline.",
        "They fall off when products introduce friction, ambiguity, or pressure at the wrong moments.",
        "If a product asks for consistency, it has to earn it."
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
    subhead: "Designing trust and decision support in an e-commerce experience",
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
        { label: "Project type", value: "Speculative concept grounded in real business metrics" },
        { label: "Platform", value: "Mobile web e-commerce" },
        { label: "Scope", value: "Research, interaction design, AI concept design, usability testing" }
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
    next: [
      "Allow users to save progress and return without restarting",
      "Measure conversion differences between guided and unguided flows",
      "Introduce comparison tools for recommended bikes",
      "Surface reviews and expert validation alongside recommendations"
    ],
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
    subhead: "Designing clarity and trust for a mental health practice",
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
        { label: "Role", value: "Product Designer (Consultant)" },
        { label: "Project type", value: "Client website redesign" },
        { label: "Platform", value: "Responsive web" },
        { label: "Timing", value: "2023" }
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
    next: [
      "Run short usability sessions with prospective clients",
      "Measure homepage-to-contact conversion",
      "Refine copy using real visitor language",
      "Stay involved through implementation to protect design intent"
    ],
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
        <h1 className="mb-6">{data.subhead}</h1>
      </section>

      {/* Main Content constraints - using proper width like Homepage */}
      <div className="w-full flex flex-col items-start gap-12">

        {/* The Problem */}
        <section className="w-full">
          <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">The Problem</h2>

          {/* Visual Container: Problem */}
          <VisualBlock contained={data.contained_visuals?.includes('visual_problem')} src={data.visual_problem} alt={`${data.name} problem visual`} className={`mb-8 ${data.name === 'CycleBot' ? '!border-[3px] !border-[#222222]' : ''}`} />

          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4">
            {data.problem.paragraphs?.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
          {data.problem.list && data.problem.list.length > 0 && (
            <ul className="mt-6 mb-6 list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
              {data.problem.list.map((it: string, i: number) => <li key={i}>{it}</li>)}
            </ul>
          )}
          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4">
            {data.problem.conclusion?.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* Context Grid */}
        <section className="w-full border-t border-b border-border-light py-6">
          <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">Context</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 w-full lg:grid-cols-4">
            {data.context.items?.map((item: {label: string, value: string}, i: number) => (
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
            {data.insight.conclusion?.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* The Bet */}
        <section className="w-full bg-brand-accent/5 p-8 md:p-12 rounded-[16px] border border-brand-accent/20">
          <h3 className="mb-6 text-brand-accent text-xl font-semibold">The Bet</h3>
          <div className="text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] text-brand-text font-medium flex flex-col gap-4 mb-6">
            {data.bet.paragraphs?.map((p: string, i: number) => <p key={i}>{p}</p>)}
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
            {data.iteration.paragraphs?.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>
          {data.iteration.prompt && (
             <p className="text-[16px] leading-[24px] text-brand-text/80 mb-4">{data.iteration.prompt}</p>
          )}
          {data.iteration.list && data.iteration.list.length > 0 && (
            <ul className="mb-6 list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
              {data.iteration.list.map((it: string, i: number) => <li key={i}>{it}</li>)}
            </ul>
          )}
          <div className="text-[16px] leading-[24px] text-brand-text/80 flex flex-col gap-4">
            {data.iteration.conclusion?.map((p: string, i: number) => <p key={i}>{p}</p>)}
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



        {/* Key Design Decisions (v2) */}
        <section className="w-full">
          <h2 className="mb-10 text-2xl md:text-[32px] font-semibold text-brand-text">Key Design Decisions (v2)</h2>
          {/* Visual Container: Decisions Title */}
          <VisualBlock contained={data.contained_visuals?.includes('visual_decisions_title')} src={data.visual_decisions_title} alt={`${data.name} decisions intro visual`} className="mb-10" />
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
               <h3 className="mb-6 font-semibold text-[20px]">What improved</h3>
               <ul className="space-y-4">
                 {data.outcome.improved?.map((item: string, i: number) => (
                   <li key={i} className="flex items-start gap-4">
                     <span className="text-brand-accent mt-1">✓</span>
                     <span className="text-[16px] leading-[24px] text-brand-text/80">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
             <div>
               <h3 className="mb-6 font-semibold text-[20px]">What remained challenging</h3>
               <ul className="space-y-4">
                 {data.outcome.challenging?.map((item: string, i: number) => (
                   <li key={i} className="flex items-start gap-4">
                     <span className="text-brand-text/30 mt-1 text-[12px]">◆</span>
                     <span className="text-[16px] leading-[24px] text-brand-text/80">{item}</span>
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </section>

        {/* What I'd Do Next */}
        <section className="w-full">
          <h2 className="mb-6 text-2xl md:text-[32px] font-semibold text-brand-text">What I&apos;d Do Next</h2>
          <ul className="list-outside list-disc pl-6 space-y-2 text-[16px] leading-[24px] text-brand-text/80">
            {data.next?.map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>
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
