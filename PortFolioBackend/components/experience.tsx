import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Database, TestTube, Zap, Bug, Brain, Bot, BarChart2 } from "lucide-react"

const airoboAccomplishments = [
  {
    icon: Shield,
    title: "PCI DSS Compliance",
    description: "Implemented sensitive data masking for credit card details, phone numbers, and CVV in API payloads to ensure security compliance."
  },
  {
    icon: Database,
    title: "Backend Logic",
    description: "Developed complex Oracle PL/SQL stored procedures using JOINs and CASE logic for real-time package shortage detection and multi-channel fulfillment (BOPIS, Ship From Store, etc.)."
  },
  {
    icon: TestTube,
    title: "Testing & Quality",
    description: "Wrote and executed comprehensive unit and integration tests using JUnit 5 and Mockito, achieving over 90% code coverage."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Utilized Java Streams API, switch expressions, and ConcurrentHashMap to optimize dynamic package reconciliation logic."
  },
  {
    icon: Bug,
    title: "Debugging",
    description: "Conducted end-to-end debugging using IntelliJ and Postman to ensure robust API performance."
  }
]

const ybiAccomplishments = [
  {
    icon: Brain,
    title: "LLM Integration",
    description: "Worked with large language models (LLMs), exploring prompt engineering techniques and integrating LLM APIs into AI-powered applications."
  },
  {
    icon: Bot,
    title: "RAG Pipelines",
    description: "Built Retrieval-Augmented Generation (RAG) pipelines to ground LLM responses in real data, reducing hallucinations and improving answer accuracy."
  },
  {
    icon: BarChart2,
    title: "AI Project Development",
    description: "Developed and evaluated AI/ML models as part of hands-on internship projects, gaining practical experience in the end-to-end machine learning lifecycle."
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-accent mb-8" />

        {/* AIROBOSOFT */}
        <Card className="border-border mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle className="text-xl text-primary">Java Developer</CardTitle>
                <CardDescription className="text-base mt-1">
                  AIROBOSOFT Products and Services LLP
                </CardDescription>
                <p className="text-sm text-accent font-medium mt-1">
                  Client: Qurate Retail Group (Fortune 500)
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>November 2022 - March 2025</p>
                <p>Bangalore, Karnataka, India</p>
              </div>
            </div>
          </CardHeader>
        </Card>

        <h3 className="text-xl font-semibold text-primary mb-6">Key Accomplishments</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {airoboAccomplishments.map((item, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* YBI Foundation */}
        <Card className="border-border mb-8">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <CardTitle className="text-xl text-primary">AI Intern</CardTitle>
              <CardDescription className="text-base mt-1">
                YBI Foundation
              </CardDescription>
              <p className="text-sm text-accent font-medium mt-1">
                Artificial Intelligence & Machine Learning
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>April 2025 - June 2025</p>
              <p>Remote</p>
            </div>
          </div>
        </CardHeader>
      </Card>

        <h3 className="text-xl font-semibold text-primary mb-6">Key Accomplishments</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ybiAccomplishments.map((item, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
