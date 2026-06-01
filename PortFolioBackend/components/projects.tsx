"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Shield, Code2, TestTube, ChevronLeft, ChevronRight, Database, Search, Cpu, BarChart3, FlaskConical, Layers, Github, ExternalLink } from "lucide-react"

// ─── Professional Project ───────────────────────────────────────────────────

const projectFeatures = [
  {
    icon: Building2,
    title: "Multi-Channel Fulfillment",
    description: "Built and maintained microservices for order processing and inventory across multiple fulfillment channels including Buy Online Pick-up In Store and Ship From Store."
  },
  {
    icon: Code2,
    title: "Advanced Java Features",
    description: "Implemented Streams API for data processing, switch expressions for business logic, and OffsetDateTime for UTC timestamp comparisons."
  },
  {
    icon: Shield,
    title: "PCI DSS Security",
    description: "Integrated security compliance through automated masking of sensitive data including credit card details, phone numbers, and CVV in all API payloads."
  },
  {
    icon: TestTube,
    title: "Robust Testing",
    description: "Established testing workflow using JUnit 5, Mockito, and MockMvc for unit and integration tests, combined with Postman and IntelliJ debugger for end-to-end validation."
  }
]

const professionalTech = [
  "Java 17", "Spring Boot 3", "Oracle PL/SQL", "JUnit 5", "Mockito", "REST APIs", "Microservices"
]

// ─── Personal Projects ───────────────────────────────────────────────────────

const personalProjects = [
  {
    title: "SnippetVault",
    tagline: "Code Snippet Manager",
    overview: "Feature-rich code snippet manager for storing, organizing, and retrieving snippets. Includes tag-based organization, powerful search, light/dark mode, user authentication, favorites, archiving, cross-device sync, and guest mode.",
    highlights: [
      { icon: Database, title: "Real-Time Sync", description: "Leveraged Supabase's real-time database capabilities for seamless cross-device synchronization." },
      { icon: Search, title: "Optimized Search", description: "Implemented efficient indexing and filtering for high-performance search across large snippet datasets." },
      { icon: Shield, title: "Secure Storage", description: "Used Supabase Auth for secure user authentication and private snippet data privacy." },
      { icon: Layers, title: "Rich Editing", description: "Monaco Editor integration for a VS Code-like editing experience with syntax highlighting via Prism." },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "Monaco Editor", "Prism"],
    github: "https://github.com/MohammedKaif037/SnippetManager",
    accentColor: "from-emerald-500/20 to-teal-500/20",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
  {
    title: "APInspect",
    tagline: "API Testing Tool",
    overview: "Full-featured API testing tool with HTTP request builder supporting all methods, JSON response viewer, environment variables, request collections, history tracking, multiple auth methods (Basic, Bearer, API Key, OAuth), test scripts for response validation, and code snippet generation.",
    highlights: [
      { icon: Code2, title: "Centralized State", description: "Implemented unidirectional data flow with centralized state management in the root component for all interconnected features." },
      { icon: Layers, title: "Modular Architecture", description: "Built modular components with clear separation of concerns for maintainability and scalability." },
      { icon: Shield, title: "Multi-Auth Support", description: "Flexible authentication system supporting Basic, Bearer Token, API Key, and OAuth 2.0 methods." },
      { icon: FlaskConical, title: "Test Scripts", description: "Intuitive test interface for response validation with code snippet generation in multiple programming languages." },
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Fetch API", "OAuth 2.0"],
    github: "https://github.com/MohammedKaif037/APIInspect/tree/main/apinspect%20(1)",
    accentColor: "from-blue-500/20 to-indigo-500/20",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    title: "News Article Classifier",
    tagline: "NLP Classification System",
    overview: "Text classification system categorizing BBC news articles (2,225) into Business, Entertainment, Politics, Sports, and Technology. Compares Bag of Words vs TF-IDF with Multinomial Naive Bayes, achieving 98% and 97% accuracy respectively. Includes a custom real-time prediction function.",
    highlights: [
      { icon: Cpu, title: "Dual Vectorization", description: "Implements and compares BoW (98% accuracy) and TF-IDF (97% accuracy) with Multinomial Naive Bayes classifier." },
      { icon: Search, title: "Custom Preprocessing", description: "NLTK-based pipeline for tokenization, stopword removal, and text cleaning while preserving contextual keywords." },
      { icon: BarChart3, title: "High Accuracy", description: "Achieved 98% accuracy using sparse matrix representations and reproducible train-test splitting with random_state=42." },
      { icon: FlaskConical, title: "Real-Time Prediction", description: "Custom prediction function for instant categorization of user-provided news text from both trained models." },
    ],
    tech: ["Python", "NLTK", "scikit-learn", "pandas", "NumPy", "MultinomialNB", "Jupyter Notebook"],
    github: "https://github.com/MohammedKaif037/NewsArticleNLP",
    accentColor: "from-violet-500/20 to-purple-500/20",
    badgeColor: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
  }
]

const ragProjects = [
  {
  title: "SQL Agent",
  tagline: "Text-to-SQL · Self-Correction · LLM Agent",
  overview: "An intelligent SQL assistant that converts natural language questions into MySQL queries with a self-correcting agent loop. Uses GPT-3.5-turbo to generate SQL from plain English, executes against a live database, and automatically fixes errors with up to 3 retry attempts. Features real-time streaming feedback via Server-Sent Events, schema introspection, and a clean web interface — no SQL knowledge required.",
  highlights: [
    { icon: Cpu, title: "Self-Correction Agent Loop", description: "LLM generates SQL → executes → if error, sends error + original question back to LLM for fixing. Repeats up to 3 times with progressive improvements. Shows real-time status of each attempt via SSE streaming." },
    { icon: Database, title: "Schema-Aware Generation", description: "Automatically introspects MySQL database schema (tables, columns, data types, foreign keys) and injects it into the LLM system prompt — so generated SQL always matches actual table structures." },
    { icon: Search, title: "Intelligent Error Recovery", description: "When SQL fails, the LLM receives the exact MySQL error message and original question, then generates corrected SQL. Handles syntax errors, missing columns, join mistakes, and type mismatches automatically." },
    { icon: Layers, title: "Full-Stack Implementation", description: "Flask backend with SSE streaming, vanilla HTML/CSS/JS frontend, MySQL integration, and REST APIs for both NL-to-SQL and raw SQL execution. Zero frontend framework dependencies." }
  ],
  tech: ["Python", "Flask", "MySQL", "GPT-3.5-turbo", "SSE", "REST API", "LLM Agent", "Self-Correction"],
  github: "https://github.com/MohammedKaif037/natural-language-to-sql-agent", 
  accentColor: "from-green-500/20 to-emerald-500/20",
  badgeColor: "bg-green-500/10 text-green-400 border-green-500/30",
  iconColor: "text-green-400",
  iconBg: "bg-green-500/10",
},
  {
    title: "Recipe-to-Cart Agent",
    tagline: "Agentic AI · Spring Boot · Redis Vector Store · LangChain4j",
    overview: "An AI grocery agent inspired by Zepto that converts a plain recipe description into a ready-to-order cart. LangChain4j orchestrates a multi-step pipeline: the LLM parses and normalises ingredients, a pantry check skips what you already own, Redis Stack vector search finds the best catalog match per ingredient, and a second LLM call writes a natural-language explanation for every out-of-stock substitution. Results are semantically cached in Redis so identical queries return instantly.",
    highlights: [
      { icon: Cpu, title: "LangChain4j agent pipeline", description: "Declarative @SystemMessage AI services handle ingredient parsing and swap explanation. @Tool-annotated methods expose pantry check and catalog search so the LLM can call them autonomously during reasoning." },
      { icon: Database, title: "Redis vector store + semantic cache", description: "All 28 catalog products are embedded via text-embedding-3-small and indexed in Redis Stack on startup. Cosine KNN search finds semantically similar products. Cart responses are cached with a normalised key — same dish, different word order still hits the cache." },
      { icon: Search, title: "Graceful fallback & substitution", description: "Out-of-stock products are automatically substituted with the closest in-category alternative. If Redis Stack is unavailable, the service silently falls back to tag-based search with zero downtime." },
      { icon: Layers, title: "Full-stack, zero extra server", description: "Vanilla HTML/CSS/JS UI served directly by Spring Boot static resources. Live health status, animated progress steps, ingredient breakdown cards, and a sticky cart panel — no React or separate frontend server needed." }
    ],
    tech: ["Java 21", "Spring Boot 3.2", "LangChain4j 0.31", "Redis Stack", "Vector Search", "ChatAnywhere LLM", "Docker Compose", "Vanilla JS"],
    github: "https://github.com/MohammedKaif037/recipe-cart-agent",
    accentColor: "from-rose-500/20 to-orange-500/20",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
  },
  {
    title: "AI-Powered Order Assistant",
    tagline: "RAG · Spring Boot · LLM",
    overview: "A Spring Boot microservice that answers natural language questions about order status, inventory, and fulfillment. Uses a TF-IDF vector store for retrieval-augmented generation — so every AI answer is grounded in real database records, never hallucinated. Includes a full-stack frontend (vanilla HTML/CSS/JS) served by Spring Boot with zero extra dependencies.",
    highlights: [
      { icon: Database, title: "RAG pipeline", description: "DocumentIndexer converts DB rows into text chunks at startup. TF-IDF cosine similarity retrieves the top-K most relevant chunks per query, injected into the LLM system prompt before calling ChatAnywhere." },
      { icon: Layers, title: "Live re-indexing", description: "Updating an order status via PATCH /orders/{id}/status immediately re-indexes that document in the vector store — so the next AI query reflects the change without a restart." },
      { icon: Cpu, title: "Intent classification", description: "Keyword fast-path first (free), LLM fallback only for ambiguous queries. Classifies into ORDER_STATUS, INVENTORY, FULFILLMENT, POLICY, or GENERAL to route retrieval efficiently." },
      { icon: Code2, title: "Swap-ready architecture", description: "InMemoryVectorStore exposes the same public API as FAISS or ChromaDB. Swapping the vector backend is one bean replacement — migration comments included in the source." }
    ],
    tech: ["Java 17", "Spring Boot 3.2", "H2 / PostgreSQL", "TF-IDF Vector Store", "ChatAnywhere LLM", "RAG", "REST API", "Vanilla JS"],
    github: "https://github.com/MohammedKaif037/ai-rag-order-assistant",
    accentColor: "from-orange-500/20 to-amber-500/20",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
  }
]

// ─── Slider Component (Reusable) ─────────────────────────────────────────────

function ProjectSlider({ projects }: { projects: typeof personalProjects }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliding, setSliding] = useState(false)
  const [slideDir, setSlideDir] = useState<"left" | "right">("right")

  const slideToProject = (index: number, dir: "left" | "right") => {
    if (sliding) return
    setSlideDir(dir)
    setSliding(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setSliding(false)
    }, 300)
  }

  const next = () => {
    const nextIndex = (currentIndex + 1) % projects.length
    slideToProject(nextIndex, "right")
  }

  const prev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length
    slideToProject(prevIndex, "left")
  }

  const project = projects[currentIndex]

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      {/* Navigation dots and arrows */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => slideToProject(i, i > currentIndex ? "right" : "left")}
              className={`transition-all duration-200 rounded-full ${
                i === currentIndex 
                  ? "bg-accent w-6 h-2.5" 
                  : "bg-border hover:bg-muted-foreground w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{currentIndex + 1} / {projects.length}</span>
          <button
            onClick={prev}
            className="p-1.5 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </button>
          <button
            onClick={next}
            className="p-1.5 rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Slide container */}
      <div className="overflow-hidden">
        <div
          className={`transition-all duration-300 ${
            sliding
              ? slideDir === "right"
                ? "-translate-x-8 opacity-0"
                : "translate-x-8 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <Card className="border-2 border-accent/20 overflow-hidden">
            {/* Gradient header */}
            <CardHeader className={`bg-gradient-to-r ${project.accentColor} border-b border-border`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-1">{project.tagline}</CardDescription>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={`w-fit border ${project.badgeColor}`}>AI/RAG</Badge>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 border border-border text-primary text-xs font-medium transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3 opacity-60" />
                  </a>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {/* Overview */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.overview}</p>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-accent/50 text-primary">{tech}</Badge>
                  ))}
                </div>
              </div>

              {/* Highlights grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                    <div className={`p-2 rounded-lg shrink-0 ${project.iconBg}`}>
                      <h.icon className={`h-5 w-5 ${project.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{h.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Projects() {
  const [activeTab, setActiveTab] = useState<"professional" | "personal" | "rag">("professional")
  const [currentPersonal, setCurrentPersonal] = useState(0)
  const [sliding, setSliding] = useState(false)
  const [slideDir, setSlideDir] = useState<"left" | "right">("right")

  const slideToProject = (index: number, dir: "left" | "right") => {
    if (sliding) return
    setSlideDir(dir)
    setSliding(true)
    setTimeout(() => {
      setCurrentPersonal(index)
      setSliding(false)
    }, 300)
  }

  const next = () => {
    const nextIndex = (currentPersonal + 1) % personalProjects.length
    slideToProject(nextIndex, "right")
  }

  const prev = () => {
    const prevIndex = (currentPersonal - 1 + personalProjects.length) % personalProjects.length
    slideToProject(prevIndex, "left")
  }

  const project = personalProjects[currentPersonal]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Projects</h2>
        <div className="w-20 h-1 bg-accent mb-8" />

        {/* ── Tab Toggle ── */}
        <div className="flex gap-1 p-1 bg-secondary/60 rounded-xl w-fit mb-8 border border-border">
          {(["professional", "personal", "rag"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all duration-200
                ${activeTab === tab
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-primary"}
              `}
            >
              {tab === "rag" ? "RAG & AI" : tab}
            </button>
          ))}
        </div>

        {/* ── Professional ── */}
        {activeTab === "professional" && (
          <div className="animate-in fade-in slide-in-from-left-4 duration-300">
            <Card className="border-border border-2 border-accent/20 overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-border">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary">PDAL Omni-Channel Fulfillment System</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Built for Qurate Retail Group (Fortune 500)
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent text-accent-foreground w-fit">Enterprise Scale</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {professionalTech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-accent/50 text-primary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {projectFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                      <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                        <feature.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ── Personal Slider ── */}
        {activeTab === "personal" && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Navigation dots and arrows */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                {personalProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => slideToProject(i, i > currentPersonal ? "right" : "left")}
                    className={`transition-all duration-200 rounded-full ${
                      i === currentPersonal 
                        ? "bg-accent w-6 h-2.5" 
                        : "bg-border hover:bg-muted-foreground w-2.5 h-2.5"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{currentPersonal + 1} / {personalProjects.length}</span>
                <button
                  onClick={prev}
                  className="p-1.5 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                </button>
                <button
                  onClick={next}
                  className="p-1.5 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Slide container */}
            <div className="overflow-hidden">
              <div
                className={`transition-all duration-300 ${
                  sliding
                    ? slideDir === "right"
                      ? "-translate-x-8 opacity-0"
                      : "translate-x-8 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <Card className="border-2 border-accent/20 overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${project.accentColor} border-b border-border`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{project.tagline}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={`w-fit border ${project.badgeColor}`}>Personal Project</Badge>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 border border-border text-primary text-xs font-medium transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          View on GitHub
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </a>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.overview}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-accent/50 text-primary">{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                          <div className={`p-2 rounded-lg shrink-0 ${project.iconBg}`}>
                            <h.icon className={`h-5 w-5 ${project.iconColor}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-1">{h.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{h.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* ── RAG Slider ── */}
        {activeTab === "rag" && <ProjectSlider projects={ragProjects} />}
      </div>
    </section>
  )
}
