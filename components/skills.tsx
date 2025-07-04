import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Wrench } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "Java", "Core Java"],
      color: "text-blue-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: ["React.js", "Next.js", "Express.js", "Node.js", "Tailwind CSS"],
      color: "text-green-500",
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["MongoDB", "Firebase", "Cloudinary"],
      color: "text-purple-500",
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel"],
      color: "text-orange-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-slide-up">
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 ${category.color}`}>
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Skill Proficiency */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { skill: "Java & OOP", level: 90 },
              { skill: "React.js & JavaScript", level: 85 },
              { skill: "HTML & CSS", level: 95 },
              { skill: "Node.js & Express.js", level: 80 },
              { skill: "MongoDB & Firebase", level: 75 },
              { skill: "Git & Version Control", level: 85 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
