import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Shield, Code2, TestTube } from "lucide-react"

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

const technologies = [
  "Java 17", "Spring Boot 3", "Oracle PL/SQL", "JUnit 5", "Mockito", "REST APIs", "Microservices"
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Key Project Spotlight</h2>
        <div className="w-20 h-1 bg-accent mb-8" />
        
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
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="border-accent/50 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {projectFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
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
    </section>
  )
}
