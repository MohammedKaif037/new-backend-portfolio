import { Award, Building2, Code2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Building2,
    title: "Fortune 500 Experience",
    description: "Built systems for Qurate Retail Group, a major US retail client"
  },
  {
    icon: Code2,
    title: "90%+ Code Coverage",
    description: "Comprehensive testing with JUnit 5, Mockito, and MockMvc"
  },
  {
    icon: Award,
    title: "PCI DSS Compliance",
    description: "Implemented security-first data masking for sensitive information"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
        <div className="w-20 h-1 bg-accent mb-8" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a Backend Developer with 2.5 years of hands-on experience building 
              and maintaining high-scale e-commerce fulfillment microservices for a 
              US Fortune 500 retail client.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in Java 17, Spring Boot, REST APIs, Oracle PL/SQL, and 
              ensuring PCI DSS compliance through data masking. I have a proven 
              ability in comprehensive testing with JUnit and Mockito, production 
              debugging, and performance optimization.
            </p>
          </div>
          
          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
