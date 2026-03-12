import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Education</h2>
        <div className="w-20 h-1 bg-accent mb-8" />
        
        <Card className="border-border max-w-2xl">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">
                  Bachelor of Engineering
                </h3>
                <p className="text-muted-foreground mb-2">
                  Information Science and Engineering
                </p>
                <p className="text-primary font-medium">
                  Kalpataru Institute of Technology
                </p>
                <p className="text-sm text-muted-foreground">
                  Tiptur, Karnataka, India
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-sm text-muted-foreground">2019 - 2023</span>
                  <span className="text-sm font-medium text-accent">CGPA: 8.29</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
