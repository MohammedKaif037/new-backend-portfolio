import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java 17", "SQL (PL/SQL)", "JavaScript"]
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot 3", "Spring Data JPA", "Hibernate", "Spring MVC"]
  },
  {
    title: "Architecture & APIs",
    skills: ["Microservices", "RESTful Web Services"]
  },
  {
    title: "Databases",
    skills: ["Oracle (Stored Procedures, Query Optimization)", "MySQL", "Cassandra"]
  },
  {
    title: "Testing & Tools",
    skills: ["JUnit 5", "Mockito", "MockMvc", "Postman", "IntelliJ IDEA Debugger"]
  },
  {
    title: "DevOps & Others",
    skills: ["Git", "GitHub", "Jenkins", "Maven", "Linux", "Apache Tomcat"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Technical Skills</h2>
        <div className="w-20 h-1 bg-accent mb-8" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border hover:border-accent/50 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20 border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
