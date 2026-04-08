import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VisualBlock } from "@/components/ui/VisualBlock";

const CASE_STUDIES: Record<string, any> = {
  "codiris": {
    name: "Codiris",
    visual_problem: "/images/codiris-visual-1.jpg",
    visual_iteration: "/images/codiris-visual-2.gif",
    visual_decisions_bottom: "/images/codiris-visual-3.mp4",
    visual_outcome: "/images/codiris-visual-4.mp4",
    subhead: "Systems Architecture",
    subtitle: "Restoring the Product Development Lifecycle",
    problem: {
      paragraphs: [
        "Product teams aren’t just under pressure. They are operating inside companies struggling to keep pace with constant change. While expectations for speed are rising, team structures are shrinking. When teams fail to adapt, the result is more than a missed deadline. It is human layoffs.",
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
      constraintsPrompt: "Product Goals:",
      constraints: [
        "Design for high-efficiency product teams rather than solo builders.",
        "Build a system to support the creative product development process.",
        "Enable collaboration and permissions.",
        "Validate every design decision against its impact on speed and user goals."
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
        <span className="text-brand-text/80 font-normal">The team and I bet that by maintaining context through the iteration process, we could eliminate the friction between development phases and prevent expensive hallucinations.</span>
      ]
    },
    iteration: {
      paragraphs: [
        "Early versions of Codiris focused on structured phases and guided workflows. While this provided initial clarity, I found that it introduced unnecessary friction for high-efficiency product teams. I learned that too much structure actively blocks the creative product development process."
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
        "The transition to v2 was not about adding more features. It was a fundamental change in how I approached system behavior. By watching how teams actually interacted with Codiris, I realized that the primary friction was not what they could do, but how they moved between phases.",
        "I saw that users needed to jump between research, planning, design, and building instantly. This observation led me to replace the step-by-step flow with a tab-based architecture. This shift transformed Codiris from a sequence of pages into a non-linear environment. It allowed users to maintain multiple workstreams simultaneously, ensuring that they never had to choose between focus and context. It was no longer about following a path; it was about providing a workspace that matched the way builders actually think."
      ],
      list: []
    },
    decisionsIntro: "Each of these decisions was made to reinforce continuity over friction. I prioritized flow and momentum at every level of the interface.",
    decisions: [
      {
        feature: "Expandable phase tabs over hard navigation",
        rationale: "I enabled users to move fluidly across the iteration process without losing context or triggering mental resets."
      },
      {
        feature: "Chat as a persistent system brain",
        rationale: "Strategic decisions, reasoning, and next steps remained visible within the workspace instead of being buried in a disconnected history."
      },
      {
        feature: "Productive waiting over idle loading",
        rationale: "I transformed agent latency into active planning time, ensuring that technical processing never resulted in dead time for the user."
      },
      {
        feature: "Task-based design planning",
        rationale: "I replaced abstract page selection with concrete, editable implementation plans that bridged the gap between design and building."
      },
      {
        feature: "Embedded help over external documentation",
        rationale: "By embedding Iris directly into the workspace, I ensured that questions were answered exactly where the work happened, not in separate tools."
      }
    ],
    decisionsConclusion: "",
    outcome: {
      intro: "Codiris moved from a rigid prototype into a functional environment for active iteration. By shifting to a tab-based PDE, I transformed the product from a series of disconnected steps into a unified system for building.",
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
    visual_shift: ["/images/fit-and-fun-visual-2-v1.png", "/images/fit-and-fun-visual-2.png"],
    visual_decisions_title: ["/images/fit-and-fun-visual-3-v1.png", "/images/fit-and-fun-visual-3.png"],
    visual_decisions_bottom: "/images/fit-and-fun-visual-4.gif",
    visual_outcome: "/images/fit-and-fun-demo.mp4",
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
      constraintsPrompt: <>I evolved Fit & Fun from a Figma prototype into a production-ready environment using Antigravity. This allowed me to test real interaction, motion, and state beyond static frames.<br /><br /><strong className="font-semibold text-brand-text">Product Goals:</strong></>,
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
    visual_iteration: ["/images/cyclebot-visual-2-v1.png", "/images/cyclebot-visual-2.png"],
    visual_decisions_title: ["/images/cyclebot-visual-3-v1.png", "/images/cyclebot-visual-3.png"],
    visual_outcome: "/images/cyclebot-demo.mp4",
    subhead: "Driving ROI",
    subtitle: "Optimizing the Path to High-Value Purchase",
    problem: {
      paragraphs: [
        "Cyclelab was losing users at the exact moments that mattered most:"
      ],
      list: [
        "50% of users dropped off while browsing.",
        "70% of those who reached checkout abandoned their carts."
      ],
      conclusion: [
        "This was a trust problem. Buying a bike is expensive, technical, and personal. Without the expert guidance expected in-store, online users felt overwhelmed by options and lacked the confidence to choose the right product. The business impact was clear: if users didn’t trust their decision, they didn’t make a purchase."
      ]
    },
    context: {
      items: [
        { label: "Role", value: "Product Designer" },
        { label: "Context", value: <>Fitness Tech<br />Concept</> },
        { label: "Platform", value: "Mobile Web" },
        { label: "Key Focus", value: "Driving ROI & E-Commerce Design" }
      ],
      constraintsPrompt: <>This project started from a real business signal: people were browsing but not buying. I transformed the experience from a traditional e-commerce website into a mobile-first AI assistant designed to build trust.<br /><br /><strong className="font-semibold text-brand-text">Product Goals:</strong></>,
      constraints: [
        "Help users identify the right bike without feeling overwhelmed.",
        "Replicate real-life expert guidance in an online environment.",
        "Explain the logic behind recommendations to build trust.",
        "Remove friction points during the buying process."
      ]
    },
    insight: {
      prompt: "Users didn’t ask for better UX or technical certainty. They asked for support. They needed Cyclebot to have their back and help them think through a large, complex purchase.",
      list: [
        "“I’m not sure this is the right bike for me.”",
        "“I wish I could talk to someone who knows bikes.”",
        "“I don’t want to make a mistake at this price.”"
      ],
      conclusion: []
    },
    bet: {
      paragraphs: [
        "Trust, not persuasion, is the key for high-ticket purchases.",
        <span key="bet-span" className="text-brand-text/80 font-normal">I bet that by replicating real-life expert guidance and making sound recommendations, I will reverse the browsing drop-off and recover abandoned carts.</span>
      ],
      list: []
    },
    iteration: {
      paragraphs: [
        "The first iteration used an open conversational model where users could type anything. Testing revealed that this created high cognitive load. Without clear boundaries, users were unsure what information the expert needed to make a recommendation, which stalled momentum.",
        "I shifted the experience into a structured specs picking process with four options per question. By narrowing the focus, the product moved from an ambiguous chat into a decisive system that builds the confidence required for a high-value purchase."
      ],
      prompt: "",
      list: [],
      conclusion: []
    },
    shift: {
      paragraphs: [
        "Early designs focused on recommendation accuracy. Later designs focused on building trust. I realized that the value wasn't in finding the \"one\" perfect bike, but in helping the user understand why a selection fit their needs.",
        "I changed my priorities to reflect this:"
      ],
      list: [
        <><strong className="font-semibold text-brand-text">Reasoning over perfection.</strong> Three good recommendations with clear reasons are more valuable than one perfect recommendation.</>,
        <><strong className="font-semibold text-brand-text">Context over information.</strong> I focused on how the advice was delivered, not just the data points.</>,
        <><strong className="font-semibold text-brand-text">Support over speed.</strong> I prioritized helping the user feel safe in their choice over rushing them to the checkout.</>
      ]
    },
    decisionsIntro: "",
    decisions: [
      {
        feature: "Transparent recommendation logic",
        rationale: "I made sure users could see why a bike was suggested by integrating customer reviews and linking features to their specific needs."
      },
      {
        feature: "Structured Choice over Open Dialogue",
        rationale: "I replaced the open-text input with a four-option specs picking process. This removed the friction of the blank slate and accelerated the journey toward a confident purchase decision."
      },
      {
        feature: "Guest checkout as the default",
        rationale: "I removed account creation from the purchasing flow to eliminate unnecessary friction."
      },
      {
        feature: "Data-driven iteration",
        rationale: "I used prioritized problem logs from every user test to make sure each design update solved a specific friction point."
      },
      {
        feature: "Progressive disclosure of interactive features",
        rationale: "Advanced options like camera measurements were introduced only when they became relevant to the user."
      }
    ],
    decisionsConclusion: "",
    outcome: {
      intro: "The final prototype transformed the shopping experience from standard website browsing into an active, confident purchase.",
      improvedLabel: "Performance Gains",
      improved: [
        <><strong className="font-semibold text-brand-text">Higher Role Clarity.</strong> Users understood Cyclebot’s value immediately.</>,
        <><strong className="font-semibold text-brand-text">Natural Engagement.</strong> Conversations felt like expert guidance.</>,
        <><strong className="font-semibold text-brand-text">Removed Purchasing Friction.</strong> Smoother transition through the checkout flow.</>
      ],
      challengingLabel: "The Next Optimization",
      challenging: [
        <><strong className="font-semibold text-brand-text">Comparative Analysis.</strong> Helping users compare top options side-by-side.</>,
        <><strong className="font-semibold text-brand-text">Session Persistence.</strong> Supporting users who want to pause and return later.</>,
        <><strong className="font-semibold text-brand-text">Post-Purchase Trust.</strong> Extending the guidance into assembly and fit.</>
      ]
    },
    perspectiveTitle: "How Cyclebot Shaped My Perspective",
    perspective: {
      paragraphs: [
        "Conversion is not driven by pressure; it is driven by trust. Users don’t abandon because they are indecisive. They abandon because they don't feel safe committing to a high-stakes purchase. This project reinforced that my role is to design for better decisions, not just faster ones. This is the athlete mindset: you don't win by rushing the shot; you win by setting up the play so the team can execute with total confidence."
      ],
      list: []
    }
  },
  "ccta": {
    name: "CCTA",
    visual_problem: "/images/ccta-visual-1.jpg",
    visual_iteration_title: "/images/ccta-visual-2.jpg",
    visual_decisions_title: "/images/ccta-visual-3.jpg",
    visual_decisions_bottom: "/images/ccta-visual-4.jpg",
    subhead: "High-Trust UX",
    subtitle: "Scaling Acquisition Through Clinical Trust",
    problem: {
      paragraphs: [
        "CCTA’s website was a barrier to the practice’s growth. Despite offering high-quality clinical services, the digital experience failed to communicate trust, clarity, or ease of access.",
        "The friction was immediate:"
      ],
      list: [
        <><strong className="font-semibold text-brand-text">Cluttered Hero Space.</strong> The homepage carousel consumed prime space without explaining services.</>,
        <><strong className="font-semibold text-brand-text">Accessibility Failures.</strong> Low contrast text reduced readability and accessibility.</>,
        <><strong className="font-semibold text-brand-text">Unscannable Layout.</strong> Large blocks of centered copy were difficult to scan and digest.</>,
        <><strong className="font-semibold text-brand-text">Tone Misalignment.</strong> Dark overlays and generic imagery created a somber, heavy atmosphere that increased user anxiety.</>,
        <><strong className="font-semibold text-brand-text">Broken Inquiry Paths.</strong> Visitors couldn’t quickly find how to get started, leading to missed inquiries and unbooked clinicians.</>
      ],
      conclusion: [
        <>For a mental health practice, a confusing interface is more than a design flaw; <strong className="font-semibold text-brand-text">it was an obstacle for people who were just looking for help and support.</strong></>
      ]
    },
    context: {
      items: [
        { label: "Role", value: "Principal Consultant" },
        { label: "Context", value: "Mental Health Clinic Redesign" },
        { label: "Platform", value: "Responsive Web" },
        { label: "Key Focus", value: "High-Trust UX & User Acquisition" }
      ],
      constraintsPrompt: <>CCTA’s business goal was clear: increase qualified inbound leads and keep clinicians fully booked. My role was to redesign the site to support that goal while respecting the emotional context of people seeking therapy. I focused on building authority while respecting the sensitive emotional state of people seeking therapy.<br /><br /><strong className="font-semibold text-brand-text">Product Goals:</strong></>,
      constraints: [
        "Establish clinical authority without sacrificing warmth.",
        "Design for high-anxiety users who need immediate clarity.",
        "Optimize accessibility so the site is inclusive and usable for everyone.",
        "Streamline the path from first visit to booked inquiry."
      ]
    },
    insight: {
      prompt: "Visitors seeking therapy are often in a state of high anxiety or uncertainty. They don’t need a heavy, information-dense interface; they need to feel calm, oriented, and supported within the first few seconds.",
      list: [
        "“I’m overwhelmed and I just need to know if they can help me.”",
        "“The site feels heavy and dark; it makes me feel more anxious.”",
        "“I can’t tell which therapist is right for my specific needs.”"
      ],
      conclusion: [
        "The issue was not a lack of information. It was cognitive overload at the exact moment a user needed a clear path forward."
      ]
    },
    bet: {
      paragraphs: [
        "In mental health, trust is the product and clarity is the strategy.",
        <span key="bet-span" className="text-brand-text/80 font-normal">I bet that by replacing emotional friction with professional warmth and simplified navigation, I will increase the volume of qualified inbound leads and maximize clinician booking rates.</span>
      ],
      list: []
    },
    iteration: {
      paragraphs: [
        "The most impactful change was removing the homepage carousel and replacing it with a single, calming hero section. This clarified CCTA’s value proposition and set a professional tone immediately.",
        "From there, iteration focused on clarity over density. I restructured service categories into accessible cards, improved visual contrast, and realigned text for better scanability. Each round of feedback reinforced the same direction: if the user has to work to find the information, they will leave before they ever reach out."
      ],
      prompt: "",
      list: [],
      conclusion: []
    },
    shift: {
      paragraphs: [
        "The shift for CCTA was not about aesthetics. It was a strategic pivot in how we treated the visitor’s journey. Instead of asking how to showcase everything the practice offered, I asked: “What does a person in distress need to feel before they are ready to reach out?”",
        "This reframing prioritized:"
      ],
      list: [
        <><strong className="font-semibold text-brand-text">Guidance over decoration.</strong> Every visual element had to serve a functional purpose in building trust.</>,
        <><strong className="font-semibold text-brand-text">Confidence over cleverness.</strong> I chose clear, direct navigation labels over “creative” headings.</>,
        <><strong className="font-semibold text-brand-text">Calm over heaviness.</strong> I moved the system toward a light, breathable UI to reduce the user's mental load.</>
      ]
    },
    decisionsIntro: "",
    decisions: [
      {
        feature: "Focused hero section",
        rationale: "I replaced the rotating carousel with a single, calming message that aligned with the practice’s therapeutic tone."
      },
      {
        feature: "Accessible service architecture",
        rationale: "I restructured the services provided into scannable cards with improved contrast to ensure information was easy to digest and inclusive."
      },
      {
        feature: "Emotionally-driven navigation",
        rationale: "I reorganized the menu into a logical story: How It Works, How We Can Help, Who We Are, and Get Started."
      },
      {
        feature: "Unified “Visual Calm” system",
        rationale: "I established a consistent light background with a refined primary blue to eliminate the somber tone of the previous site."
      },
      {
        feature: "Equitable clinician representation",
        rationale: "I introduced a horizontally scrollable section to showcase all practitioners without hierarchy, humanizing the brand while maintaining a professional feel."
      }
    ],
    decisionsConclusion: "",
    outcome: {
      intro: "The redesign established a high-trust starting point for anyone seeking help.",
      improvedLabel: "Performance Gains",
      improved: [
        <><strong className="font-semibold text-brand-text">Immediate Role Clarity.</strong> Users understand the service offerings within seconds.</>,
        <><strong className="font-semibold text-brand-text">Optimized Inquiry Flow.</strong> Clearer calls-to-action led to more direct inquiries.</>,
        <><strong className="font-semibold text-brand-text">Improved Accessibility.</strong> Reached WCAG standards for contrast and scanability.</>
      ],
      challengingLabel: "The Next Optimization",
      challenging: [
        <><strong className="font-semibold text-brand-text">Direct Usability Testing.</strong> Run short usability sessions with prospective clients to refine the flow.</>,
        <><strong className="font-semibold text-brand-text">Conversion Tracking.</strong> Measure homepage-to-contact conversion to identify remaining friction.</>,
        <><strong className="font-semibold text-brand-text">Agency Handoff.</strong> Coordinate the agency handoff to protect the design's integrity and emotional tone.</>
      ]
    },
    perspectiveTitle: "How CCTA Shaped My Perspective",
    perspective: {
      paragraphs: [
        "In mental health, design directly affects the path to care. Small choices in layout, tone, and structure can either lower the barrier to care or quietly open the door. This project reinforced that when trust is the product, clarity must be the strategy. This is the athlete mindset: you win by clearing the hurdles before the user even reaches them. By removing friction and providing a clear path, the user finds help and the business achieves its goals."
      ],
      list: []
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
          <h2 className="mb-6 text-[21px] max-[390px]:text-[19px] sm:text-2xl md:text-[32px] tracking-tight sm:tracking-normal whitespace-nowrap font-semibold text-brand-text">The Problem</h2>

          {/* Visual Container: Problem */}
          <VisualBlock contained={data.contained_visuals?.includes('visual_problem')} src={data.visual_problem} alt={`${data.name} problem visual`} className="mb-8" />

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
          <h2 className="mb-6 text-[21px] max-[390px]:text-[19px] sm:text-2xl md:text-[32px] tracking-tight sm:tracking-normal whitespace-nowrap font-semibold text-brand-text">Context</h2>
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
          <h2 className="mb-6 text-[21px] max-[390px]:text-[19px] sm:text-2xl md:text-[32px] tracking-tight sm:tracking-normal whitespace-nowrap font-semibold text-brand-text">Insight</h2>
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
          <h2 className="mb-6 text-[21px] max-[390px]:text-[19px] sm:text-2xl md:text-[32px] tracking-tight sm:tracking-normal whitespace-nowrap font-semibold text-brand-text">Iteration That Mattered</h2>
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
          <h2 className="mb-6 text-[21px] max-[390px]:text-[19px] sm:text-2xl md:text-[32px] tracking-tight sm:tracking-normal whitespace-nowrap font-semibold text-brand-text">The Shift in Thinking</h2>
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
          <h2 className="mb-10 text-[21px] max-[390px]:text-[19px] sm:text-2xl md:text-[32px] tracking-tight sm:tracking-normal whitespace-nowrap font-semibold text-brand-text">Key Design Decisions</h2>
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
        <section className="w-full pt-12">
           <h2 className="text-[21px] max-[390px]:text-[19px] sm:text-2xl md:text-[32px] tracking-tight sm:tracking-normal whitespace-nowrap font-semibold text-brand-text mb-6">Outcome</h2>
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
          <h2 className="mb-8 text-[21px] max-[390px]:text-[19px] sm:text-2xl md:text-[32px] tracking-tight sm:tracking-normal font-semibold text-brand-text">{data.perspectiveTitle || "Reflection"}</h2>
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
      <section className="w-full pt-16 text-center">
         <Link href="/#work" className="inline-flex items-center gap-2 text-brand-text/60 hover:text-brand-accent transition-colors font-medium">
            <span className="transition-transform group-hover:-translate-x-1">←</span> Back to all work
         </Link>
      </section>
    </main>
  );
}
