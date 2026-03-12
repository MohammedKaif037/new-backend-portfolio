import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Generative AI, LLM and RAG Specialization",
    issuer: "GeeksForGeeks",
    date: "2026"
  },
  {
    title: "Google Data Analytics Specialization",
    issuer: "Google",
    date: "January 2026"
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    date: "March 2025"
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    date: "May 2024"
  },
  {
    title: "Python Essentials 1 and 2",
    issuer: "Cisco",
    date: "2023"
  },
  {
    title: "CPA: Programming in C++",
    issuer: "C++ Institute",
    date: "October 2022"
  },
  {
    title: "C++ Data Structures and Algorithms",
    issuer: "DevTown",
    date: "September 2022"
  },
  {
    title: "Introduction to Digital Transformation with Google Cloud",
    issuer: "Coursera",
    date: "July 2022"
  },
  {
    title: "Python 3 Ultimate Guide 2022",
    issuer: "Udemy",
    date: "June 2022"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-accent mb-8" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg shrink-0">
                    <Award className="h-4 w-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-primary text-sm leading-tight mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-accent mt-1">{cert.date}</p>
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
