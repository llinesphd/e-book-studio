export interface Section {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  numberedList?: string[];
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  tagline: string;
  keyPoints: string[];
  quote: string;
  sections: Section[];
}

export const chapters: Chapter[] = [
  {
    id: 0,
    slug: 'intro',
    title: 'Introduction',
    subtitle: 'The Dragon in the Room',
    emoji: '🐉',
    color: 'from-violet-600 to-purple-700',
    tagline: 'The dragon isn\'t the threat everyone assumed.',
    quote: 'Hiccup doesn\'t tame Toothless by issuing commands. He learns the dragon\'s nature — what it responds to, how to understand it, what it needs.',
    keyPoints: [
      'This guide is for curious researchers who are time-poor and skeptical',
      'AI quality depends almost entirely on what you put in',
      'Real-world use cases: reference libraries, grant writing, literature synthesis',
      'AI has genuine limits — and this guide is honest about them',
    ],
    sections: [
      {
        paragraphs: [
          "I'll be honest with you: when I started this project, I hadn't actually seen the 2010 movie How to Train Your Dragon (I have now!). I knew it involves a boy named Hiccup who befriends a fearsome dragon called Toothless, and that the whole point is that the dragon isn't the threat everyone assumed — it just needed someone willing to approach it differently. I figured that was actually a pretty good metaphor for my experience with AI over the past couple of years.",
          "If you're a social science researcher, you've probably been watching the AI conversation from a cautious distance. Perhaps you have good reasons. The discourse around AI tends to oscillate between utopian hype and existential panic, and neither is useful if you're trying to figure out whether any of this actually helps you do your job better (or find a new one).",
          "This guide is for people who are somewhere in the middle: not early adopters evangelizing ChatGPT at every faculty meeting, and not committed skeptics either. Just researchers who are curious, a little time-poor, and wondering whether the learning curve is worth it.",
        ],
      },
      {
        heading: 'What "Training" Actually Means',
        paragraphs: [
          "The movie title works on two levels. There's the obvious one: you're learning to use a new tool. But the more interesting one is that you're also training the AI, in the sense of learning how to communicate with it effectively. The quality of what you get out is almost entirely a function of what you put in.",
          "Hiccup doesn't tame Toothless by issuing commands. He learns the dragon's nature — what it responds to, how to understand it, what it needs. There's a mutuality to it. That's a reasonable model for how to think about working with AI.",
        ],
      },
      {
        heading: "Some Things I've Actually Used It For",
        paragraphs: [
          "Building and managing reference libraries. I work across multiple research areas in public health. Keeping track of relevant literature across years can be tedious. Lately I've been using an AI-assisted workspace to organize references by year, type, and topic, with links attached, in a structured table I can actually query. This might sound mundane, but it has saved me hours and helped me find publications I might have missed before.",
          "Literature synthesis on complex topics. When I needed to get up to speed quickly on ethnic variation in Parkinson's disease prevalence and treatment patterns across Australasia, I used AI to help map the landscape. This is probably the use case I'd most recommend to social scientists: using AI as a first-pass orientation tool, not a final authority.",
          "Grant preparation. Preparing a competitive funding application involves synthesizing a huge amount of institutional knowledge about what the funder values, how to structure arguments, and what reviewers are looking for. I've used AI to draft initial frameworks, test my logic, and identify gaps in my rationale. It doesn't write the grant application, but it's a remarkably good thinking partner at 3pm my time when my US collaborators are asleep.",
          "Drafting documents I'd rather not be drafting. I have used AI to help draft a formal appeals letter to an insurance company. I have used it to prepare a 90-day plan for a job interview. I have used it to draft emails I didn't know how to start. None of this is glamorous, but all of it was genuinely useful.",
          "Organizing messy lists into structured data. I recently had a list of researchers — names, titles, institutional affiliations — that I needed to cross-reference with institutional profile pages. Eighty-odd names, done in the time it would have taken me to do maybe fifteen manually.",
        ],
      },
      {
        heading: "What It's Not Good For (Yet)",
        bullets: [
          "AI is not good at knowing what it doesn't know. It will give you a confident-sounding answer about a niche topic in your field and be subtly wrong in ways that are hard to detect if you're not already expert. Always verify citations independently.",
          "It is not a substitute for methodological expertise. It can help you explain your methods, but it shouldn't be generating them.",
          "It has a tendency toward a certain blandness. GenAI is kind of averaging all the text it has ever seen. You have to actively push against it if you want to write with a genuine point of view.",
          "It doesn't know your field the way you do. Your job is to give it the background information and resources it needs, plus good prompts, to get the tool properly trained.",
        ],
      },
    ],
  },
  {
    id: 1,
    slug: 'chapter-1',
    title: 'Chapter 1',
    subtitle: 'What AI Actually Is (and Isn\'t)',
    emoji: '🧠',
    color: 'from-violet-600 to-indigo-600',
    tagline: 'Meet the dragon before you train it.',
    quote: 'GenAI doesn\'t replace the work researchers do; it changes the way they can approach it.',
    keyPoints: [
      'LLMs do next-token prediction — not reasoning or knowing',
      'genAI ≠ traditional ML: different tools, different strengths',
      'Black boxes lack explainability and reproducibility',
      'Responsible use can genuinely transform workflows',
    ],
    sections: [
      {
        paragraphs: [
          "In How to Train Your Dragon, the villagers initially misunderstand the nature of dragons, mistaking them for threats. This dynamic mirrors the cautious perspective many social science researchers adopt towards AI. Just as the hero Hiccup learns to approach the dragon differently, researchers can rethink their relationship with AI tools.",
          "So, what exactly is AI? At its core, AI refers to the simulation of human intelligence processes by machines, especially computer systems. This encompasses learning (the acquisition of information and rules for using it), reasoning (the ability to draw conclusions based on rules), and self-correction.",
          "From chatbots to autonomous vehicles, AI is transforming industries and reshaping our day-to-day lives. Unfortunately, the conversation around AI tends to oscillate between utopian hype and existential panic, often leaving researchers uncertain about its practical benefits.",
        ],
      },
      {
        heading: 'Generative AI vs. Traditional Machine Learning',
        paragraphs: [
          "There are lots of different genAI models. Some create images, some can make videos, and some are pre-trained on huge knowledge bases. The type of genAI we will be focusing on is the Large Language Model, or LLM, of which ChatGPT is one of the better known.",
          "Under the hood, what LLMs actually do involves next-token prediction and pattern matching over training data. On its own, it is not actually reasoning, thinking, or knowing. LLMs like ChatGPT are typically black boxes lacking explainability and reproducibility.",
          "In contrast, analytic and predictive ML tools, such as random forests and natural language processing (NLP) algorithms, generally provide explainable and reproducible results. They are typically established and published packages and programs that can help researchers in data mining, linkage, analysis, and prediction.",
          "Understanding these distinctions is crucial for researchers navigating the evolving landscape of AI. Ultimately, genAI doesn't replace the work researchers do; rather, it changes the way they can approach it.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'chapter-2',
    title: 'Chapter 2',
    subtitle: 'Literature Synthesis',
    emoji: '📚',
    color: 'from-blue-600 to-cyan-600',
    tagline: 'Observe the landscape before you act.',
    quote: 'Be like Hiccup: lead with curiosity, but keep your eyes open.',
    keyPoints: [
      'Use AI as an orientation tool, not a final authority',
      'Verify every number — check the primary source',
      'Audit citations — AI can hallucinate references',
      'Disclose your use of AI tools to co-authors and editors',
    ],
    sections: [
      {
        paragraphs: [
          "Interestingly, the different versions of How to Train Your Dragon work as another AI analogy. The original (2010) and the sequels (2014, 2019) were all animated, while the latest version (2025) is live action. The live action version is much closer to real life, but you still know it's a movie. Just like how LLMs are much closer to sounding human than ever before, but they are still just computer programs.",
          "Imagine you've just been asked to brief a team on ethnic variation in Parkinson's disease (PD) prevalence across Australasia. It's not your primary field. You're short on time, the topic is complex, and you don't want to miss the key debates and data gaps. This is exactly where AI can shine.",
        ],
      },
      {
        heading: 'The Hiccup Model: Observe Before You Act',
        paragraphs: [
          "In How to Train Your Dragon, our hero Hiccup survives because he observes before he acts. While others are busy charging in, he watches the dragon, notes its reactions, and only then starts experimenting. Working with AI to search the literature is the same. If you rush in and treat outputs as instant facts, you're essentially charging a dragon head-on.",
        ],
        bullets: [
          "Observe the landscape: What are the main hypotheses about ethnic variation in PD in this region?",
          "Observe the fault lines: Where do studies disagree, and why?",
          "Observe the blind spots: Which groups, like Māori or Pasifika, are barely represented in the data?",
        ],
      },
      {
        heading: "Building Your Dragon's Hoard (Reference Database)",
        paragraphs: [
          "In my own work, I've found that training your AI dragon is much easier if you give it a structured environment. Instead of a static list in EndNote, I use an AI-assisted workspace to organize references by year, population, and topic in a table I can query. I can also add to it automatically, with an autonomous search agent that pulls relevant papers as they're published and adds them to the database with a link.",
          "A stack of papers that I used to keep in a reference manager is now a dynamic body of literature I can sort, filter, and search in seconds.",
        ],
      },
      {
        heading: 'The Verification Imperative',
        paragraphs: ["Unlike a human expert, an LLM has no internal alarm bell that rings when it wanders into thin evidence. It can't tell you what it doesn't know. This is why the following guardrails are essential:"],
        bullets: [
          "Verify every number. Never trust a quoted prevalence rate or p-value without checking the primary source.",
          "Audit citations. AI can hallucinate references. If you haven't opened the PDF yourself, don't cite it.",
          "Be transparent. Disclose your use of AI tools to co-authors, editors, and readers.",
        ],
      },
      {
        heading: 'A Practical, Step-by-Step Workflow',
        paragraphs: ["Used well, AI turns 'I have no idea where to start' into 'I have a plan' in a fraction of the time. But speed is a trap if you skip the verification."],
        numberedList: [
          "Frame the Question Precisely: Don't ask, 'Tell me about PD.' Be specific: 'Summarize major findings on ethnic variation in PD in Australasia since 2000. Emphasize Māori and Pasifika populations. What methodological issues complicate the data? Cite your sources.'",
          "Get the Map, Not the Verdict: Use AI to generate a whiteboard-style brainstorm of key themes, cohorts, and recurrent caveats, like diagnostic bias.",
          "Cross-Check with Real Databases: Take your refined queries to PubMed or Google Scholar. The AI can help you construct Boolean searches.",
          "Synthesize with Human Judgment: You remain the final arbiter. You decide which studies are weak and where the real uncertainty lies.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'chapter-3',
    title: 'Chapter 3',
    subtitle: 'Grant Writing',
    emoji: '✍️',
    color: 'from-amber-600 to-orange-600',
    tagline: 'The dragon refines your brilliance — it doesn\'t create it.',
    quote: '"Here is my argument. Tell me why a reviewer might hate it." That is how you win.',
    keyPoints: [
      'AI does not write the grant — you do',
      'Use it to stress-test logic and find gaps in rationale',
      'Draft structural skeletons, not finished text',
      'Never let AI generate methodological decisions',
    ],
    sections: [
      {
        paragraphs: [
          "There is a persistent myth circulating in the halls of academia right now — a myth that Generative AI is a 'magic button' for grant writing. The fantasy is simple: feed it a few bullet points, press a button, and out pops a fully formed and polished NIH R01 submission.",
          "If you have spent any time in the trenches of high-stakes funding, you know that this isn't just unrealistic; it's dangerous. A grant is a rigorous defense of a career's worth of expertise. However, there is a middle ground between 'AI-generated fluff' and the traditional, solitary grind of late-night drafting. The dragon serves here as a thinking partner, not a ghostwriter.",
        ],
      },
      {
        heading: "The 11 PM Partner: Why the Dragon Doesn't Write the Grant",
        paragraphs: [
          "The dragon does not write the grant. If you ask an AI to write your proposal from scratch, it will produce something that sounds suspiciously like every other grant ever written — safe, generic, and ultimately devoid of the 'high-gain, high-risk' spark that reviewers specifically hunt for. AI models are built on patterns; average is an automatic rejection.",
          "It is acting as a remarkably high-functioning thinking partner at 11:00 PM. We have all been there: your co-investigators are asleep, your department head has checked out for the weekend, and you are staring at a paragraph in your 'Significance and Innovation' section that feels... off.",
          "This is where the dragon excels. It doesn't need sleep, it doesn't get bored of reading your thirteenth draft, and it is capable of holding the entire structure of your argument in its 'head' simultaneously. It is the sounding board that helps you refine your own brilliance.",
        ],
      },
      {
        heading: 'Concrete Applications: Stress-Testing the Logic',
        paragraphs: ["When you engage with AI as a thinking partner, your workflow shifts from 'drafting' to 'interrogating.' Here are three concrete ways to use this tool:"],
        bullets: [
          "Drafting Initial Frameworks: Use AI to build the 'skeleton.' Ask it to take your core research questions and map them against the required headers of an NIH submission.",
          "Stress-Testing Logic: Tell the AI: 'I am arguing that X leads to Y through mechanism Z. Find the logical leaps. Where would a reviewer ask But what about A?' This identifies gaps in your rationale.",
          "Identifying Gaps in Rationale: Ask the AI to summarize your Approach section and see if it aligns with the Aims you stated at the beginning. If the AI can't see the link, a human reviewer definitely won't.",
        ],
      },
      {
        heading: 'What You Must Supply: The Human Element',
        paragraphs: ["The dragon is powerful, but it is 'hollow' without you. You must provide the three pillars that no AI can replicate:"],
        bullets: [
          "Institutional Knowledge: You understand the political and social landscape of your university and the specific preferences of the current year's panel.",
          "Field Expertise: You know which citations are non-negotiable and which 'hot topics' in your field are actually overblown.",
          "Judgment: Only you can decide if the AI's suggestion to 'tone down the ambition' is a wise move for a specific funder or a mistake that will cost you the grant.",
        ],
      },
      {
        heading: 'A Note on Methodological Expertise',
        paragraphs: [
          "AI can help you explain your methods, but it should never generate them. Your methodological expertise is the core of your professional identity. If you allow an AI to 'hallucinate' a statistical power analysis or a sampling strategy, you are committing a fundamental breach of research integrity.",
          "However, once you have designed your methodology, the AI is excellent at helping you articulate it clearly. The expertise is yours; the AI simply helps you stress-test the articulation of that expertise.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'chapter-4',
    title: 'Chapter 4',
    subtitle: 'Data Wrangling',
    emoji: '📊',
    color: 'from-emerald-600 to-teal-600',
    tagline: 'The data is yours. The interpretation is yours. AI provides the wings.',
    quote: 'Toothless gets Hiccup off the ground — but Hiccup reads the map, sets the destination, and knows when to land.',
    keyPoints: [
      'AI excels at turning unstructured lists into structured tables',
      'Generate R, Python, or Stata code from plain-language descriptions',
      'Paste error messages for plain-English explanations',
      'Never trust numbers AI gives you without independent verification',
    ],
    sections: [
      {
        paragraphs: [
          "Data wrangling covers three distinct tasks: cleaning and organizing, exploring and summarizing, and communicating visually. AI is useful at each stage, but in different ways.",
          "To extend the dragon metaphor: Toothless can fly, carry weight, and cover ground Hiccup couldn't cover alone — but our hero, Hiccup, still has to know where they're going.",
        ],
      },
      {
        heading: 'Data Cleaning and Organization',
        paragraphs: [
          "AI is excellent at turning unstructured lists into structured tables: names, affiliations, dates, categories. This works for participant rosters, reference lists, interview transcripts with speaker labels, survey exports with inconsistent formatting, and so on.",
          "As a concrete example, you can paste the raw export from a survey tool (Qualtrics, REDCap) and ask AI to identify inconsistent response categories, flag likely data entry errors, and suggest a cleaning protocol. Not a replacement for cleaning the data yourself — but an excellent first pass that tells you where to look.",
          "For codebook generation — one of the most painful but important tasks — you can give your AI tool a dataset with variable names and ask it to draft a codebook. This is much faster than starting from scratch and is especially useful when inheriting someone else's data.",
        ],
      },
      {
        heading: 'Exploratory Analysis and Code Generation',
        paragraphs: [
          "AI dragons are generally pretty good at quickly generating well marked-up, logical code (such as R, Python, or Stata) for standard analyses. Descriptive tables, regression models, survival analysis, multilevel models — you describe what you want; it drafts the code; you run it, check it, and modify it.",
          "Another useful AI capability is error interpretation: paste in an error message you don't understand and ask AI to explain it and suggest a fix. This is one of the most underrated uses — it turns cryptic output into plain English without requiring you to excavate Stack Overflow.",
        ],
      },
      {
        heading: 'What AI Cannot Do and Why This Matters',
        bullets: [
          "It cannot make analytical decisions for you. Which covariates to include in a model, whether a result is clinically meaningful, how to handle a systematic missing data pattern — these require your domain expertise.",
          "It cannot access your data directly (unless you're using a tool with file upload, in which case: check your institution's data governance policy before uploading anything identifiable).",
          "AI is worse with numbers than with words. It can misread tables, hallucinate statistics, and present incorrect results with the same confident fluency as correct ones. Any number AI gives you needs to be independently verified.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'chapter-5',
    title: 'Chapter 5',
    subtitle: 'Writing & Editing',
    emoji: '✏️',
    color: 'from-rose-600 to-pink-600',
    tagline: 'Your prompts and feedback are the rig that gets Toothless airborne.',
    quote: 'The cardinal sin of using AI in writing is to claim those words as your own.',
    keyPoints: [
      'Always paraphrase, rewrite, and heavily edit AI outputs',
      'AI text has recognizable "tells" — don\'t use it straight',
      'The best use is as a structural scaffold, not a finished product',
      'Push actively against blandness to write with genuine voice',
    ],
    sections: [
      {
        paragraphs: [
          "Obviously, dragons are not real. They are a legend, a metaphor, and a recurring theme in art, literature, and even music — but dragons are still just a fantasy. Similarly, it's a fantasy to imagine that AI tools can reason, think, or create in the same way as humans. What's not a fantasy is that these tools have been trained on vast oceans of material produced by humans across the ages.",
          "That said, many millions of people have found that these tools really excel in generating and editing text in various languages, including computer languages. The truth is that what you get may be slop or successful depending on how you work with the tool. In other words, slop in, slop out.",
        ],
      },
      {
        heading: 'The Cardinal Sin: Claiming AI Words as Your Own',
        paragraphs: [
          "Full disclosure: the emails in this series were drafted by the author, then refined and edited using AI tools. Importantly, everything was paraphrased, rewritten, and heavily edited. The AI output was never used straight.",
          "Doing so is risky and foolish because by now we know that AI-generated text is full of 'tells'. Tools like Pangram (pangram.com) can detect how much of a piece of text was AI-generated.",
        ],
      },
      {
        heading: 'Five Tools to Try',
        bullets: [
          "ChatGPT (chatgpt.com): OpenAI's viral smash hit. Highly adaptable; strong community support; frequent updates. Cons: expensive monthly fee; retains user data.",
          "Claude (claude.ai): Developed by Anthropic. Ethical focus, minimal data retention, advanced machine-reasoning skills. Cons: can be slower than competitors.",
          "Co-Pilot (copilot.microsoft.com): Deep integration in coding workflows; good for developers. Cons: shares data with Microsoft.",
          "DuckAI (duck.ai): User-friendly; good for educational contexts. Cons: may lack depth in professional applications.",
          "Gemini (gemini.google.com): Strong analytics; beneficial for many uses including 'vibe coding' and web development. Cons: concerns about data aggregation and privacy.",
        ],
      },
      {
        heading: 'Saving the Planet: The Environmental Question',
        paragraphs: [
          "If you are concerned with the environmental impact of these different tools, the honest answer is: we don't really know. Full lifecycle (scope 3) disclosures are not available. What we do know is that the median per-prompt energy usage for Gemini has been reported as approximately 0.24 Wh, while a typical short-text query to ChatGPT uses around 0.3–0.45 Wh.",
          "To put this in perspective, the median Gemini prompt costs the equivalent of running a standard household LED lightbulb for about 1.6 minutes. However, when you multiply that by billions of queries globally every day, those fractions of a watt-hour rapidly add up to serious grid demand. We should demand better.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'chapter-6',
    title: 'Chapter 6',
    subtitle: 'Job Hunting',
    emoji: '🎯',
    color: 'from-slate-600 to-zinc-700',
    tagline: 'Stop fighting the dragon. Start navigating the landscape.',
    quote: '"Everything we know about them is wrong." — Hiccup, on dragons and the job market alike.',
    keyPoints: [
      'Build a Fact Bank — never invent skills or achievements',
      'Modern ATS uses semantic matching, not just keywords',
      'Test your resume against Jobscan and Cake AI',
      'Build your own morning job scout dashboard',
    ],
    sections: [
      {
        paragraphs: [
          "After being laid off in October 2025, after 16 years in the same role, I started researching the new job-hunting landscape. The good news is, there are some really great tools out there now. The bad news is that there are many, many people chasing the same small pool of jobs.",
          "But fear not! If you've read this far, you have a secret weapon: you know how to train your AI dragon.",
        ],
      },
      {
        heading: 'How AI is Used on the Employer Side',
        paragraphs: ["Many recruiting teams are shifting away from keyword-matching systems toward complex, multi-layered workflows and autonomous agents:"],
        bullets: [
          "Semantic Screening & Contextual Matching: Modern ATS systems like Workable use semantic matching. They don't just look for the word Python — they look at the surrounding context to understand how you used it and your level of autonomy.",
          "Candidate Sourcing Agents: Platforms like Pin use automated models to scan massive, public profile databases to proactively score and rank passive candidates before a recruiter even looks at an active application pile.",
          "Interaction Logging: Tools like Read AI are increasingly used to transcribe interviews, analyze technical discussions, and log context into centralized talent databases.",
        ],
      },
      {
        heading: 'Tailoring Resumes & Cover Letters',
        paragraphs: [
          "The biggest mistake job seekers make is asking an LLM to 'write a resume for this job description.' This yields generic, AI-sounding text that recruiters spot instantly. Instead, build a Fact Bank that treats your real career history as the absolute source of truth.",
        ],
        bullets: [
          "Establish a Fact Bank: Create a single document containing every project, metric, tool, and role you have ever had. Include extensive, unedited details.",
          "Construct a Strict System Prompt: Enforce strict boundaries — 'Change emphasis, phrasing, and context, but do not invent new skills, metrics, dates, or achievements. If something isn't in my Fact Bank, do not include it.'",
        ],
      },
      {
        heading: 'Testing Your Resume Against the Bots',
        bullets: [
          "Jobscan: The Jobscan ATS Resume Checker generates a weighted match report identifying missing hard skills, tool proficiencies, and structural red flags.",
          "LinkedIn: The premium feature highlights jobs for which you might be a top candidate and does tailored job searches, cover letter writing, and more.",
          "Cake AI: Scores resume formatting, keyword density, and bullet-point impact against a specific job posting, offering direct inline suggestions for refinement.",
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'epilogue',
    title: 'Epilogue',
    subtitle: 'Final Thoughts on Training Your AI Dragon',
    emoji: '🏔️',
    color: 'from-indigo-700 to-violet-800',
    tagline: 'Now it\'s your turn.',
    quote: 'Hiccup didn\'t convince the whole village at once. He just showed them what was actually possible when you stop keeping your distance.',
    keyPoints: [
      'Build the Harness: give constraints, system prompts, and step-by-step sequences',
      'Stay Human in the Loop: always verify outputs',
      'Change the Village Mindset: operate like a navigator, not a desperate applicant',
    ],
    sections: [
      {
        paragraphs: [
          "If you are building out workflows, content, or systems around training your AI dragon, keep these three fundamental operational rules in mind.",
        ],
      },
      {
        heading: 'Rule 1: Stop Yelling Commands (Build the Harness)',
        paragraphs: [
          "New users treat AI like an unruly beast — they throw vague commands at it ('Write me a cover letter!') and get frustrated when it produces fire-breathing, hallucinated slop. Training the dragon means building structured frameworks. Give it a Fact Bank (constraints), a System Prompt (identity), and a Step-by-Step Sequence (clear direction). The tighter your constraints, the more precise the execution.",
        ],
      },
      {
        heading: 'Rule 2: Human in the Loop',
        paragraphs: [
          "The most iconic scene in the movie is Hiccup extending his hand, closing his eyes, and letting Toothless bridge the final gap. In AI terms, this is the Human-in-the-Loop. Never let your AI systems run entirely on autopilot. You must verify the outputs, check the data integrity of your scraped dashboards, and ensure the tailored resume still sounds like your human voice. The AI provides the speed and lift; you provide the soul and direction.",
        ],
      },
      {
        heading: 'Rule 3: Change the Village Mindset',
        paragraphs: [
          "Hiccup didn't just train Toothless; he ultimately changed how the entire village operated. When you train your AI dragon to scrape data, manage personal dashboards, and systematically isolate your best career metrics, you stop acting like a desperate applicant. You start operating like a person who understands exactly how to navigate the modern digital landscape.",
          "Hiccup didn't convince the whole village at once. He just showed them what was actually possible when you stop keeping your distance. Now it's your turn.",
        ],
      },
    ],
  },
];
