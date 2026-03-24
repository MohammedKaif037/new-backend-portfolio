import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="text-accent font-medium mb-4">Hello, I am</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Mohammed Kaif
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary/80 mb-6">
            Software Engineer (Java, Spring Boot)
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
            2.5 years of experience building and maintaining high-scale e-commerce 
            fulfillment microservices for a US Fortune 500 retail client. Expert in 
            Java 17, REST APIs, and PCI DSS compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
