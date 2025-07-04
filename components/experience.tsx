import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Java Development & Training Intern",
      company: "Internship Studio",
      location: "Pune (Remote)",
      duration: "June 2024 - August 2024",
      type: "Internship",
      description:
        "Developed Java-based applications focusing on OOP concepts and data structures. Gained hands-on experience in Java development and problem-solving.",
      responsibilities: [
        "Developed Java applications using core OOP principles",
        "Implemented data structures and algorithms",
        "Participated in code reviews and team collaborations",
        "Created documentation for developed applications",
      ],
      technologies: ["Java", "OOP", "Data Structures", "Algorithms"],
      achievements: [
        "Successfully completed 5+ Java projects",
        "Improved problem-solving skills through practical applications",
        "Gained experience in professional software development practices",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and internships that shaped my development journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-8 hover:shadow-lg transition-shadow duration-300 animate-slide-up">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
