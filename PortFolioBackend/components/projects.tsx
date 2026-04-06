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

// ─── Component ───────────────────────────────────────────────────────────────

export function Projects() {
  const [activeTab, setActiveTab] = useState<"professional" | "personal">("professional")
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
    const next = (currentPersonal + 1) % personalProjects.length
    slideToProject(next, "right")
  }

  const prev = () => {
    const prev = (currentPersonal - 1 + personalProjects.length) % personalProjects.length
    slideToProject(prev, "left")
  }

  const project = personalProjects[currentPersonal]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Projects</h2>
        <div className="w-20 h-1 bg-accent mb-8" />

        {/* ── Tab Toggle ── */}
        <div className="flex gap-1 p-1 bg-secondary/60 rounded-xl w-fit mb-8 border border-border">
          {(["professional", "personal"] as const).map((tab) => (
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
              {tab}
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

        {/* ── Personal ── */}
        {activeTab === "personal" && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Nav header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                {personalProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => slideToProject(i, i > currentPersonal ? "right" : "left")}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      i === currentPersonal ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
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
                  {/* Gradient header */}
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
                          <div className={`p-2 rounded-lg shrink-0 ${h.icon === Building2 ? project.iconBg : project.iconBg}`}>
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
      </div>
    </section>
  )
}
