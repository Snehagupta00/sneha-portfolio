import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Certifications = () => {
  const certifications = [
    {
      title: "Java Development Training Certificate",
      issuer: "Internship Studio",
      date: "August 2024",
      description:
        "Comprehensive training in Java development covering core concepts, OOP principles, and practical application development.",
      skills: ["Java", "OOP", "Problem Solving", "Software Development"],
      credentialUrl: "#",
      type: "Professional Training",
    },
    {
      title: "Postman API Fundamental Student Expert",
      issuer: "Postman",
      date: "July 2024",
      description: "Demonstrated proficiency in API testing, documentation, and development using Postman platform.",
      skills: ["API Testing", "REST APIs", "Postman", "API Documentation"],
      credentialUrl: "#",
      type: "Technical Certification",
    },
    {
      title: "CCNA: Introduction to Networks",
      issuer: "CISCO Networking Academy",
      date: "June 2024",
      description: "Foundational knowledge in networking concepts, protocols, and network infrastructure.",
      skills: ["Networking", "TCP/IP", "Network Protocols", "Network Security"],
      credentialUrl: "#",
      type: "Networking Certification",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and training that validate my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-slide-up">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <Badge variant="secondary" className="text-xs">
                    {cert.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <CardDescription>
                  <span className="font-medium text-primary">{cert.issuer}</span>
                  <span className="block text-sm text-muted-foreground mt-1">{cert.date}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{cert.description}</p>

                <div>
                  <h4 className="font-semibold text-sm mb-2">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Credential
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Learning */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Continuous Learning</h3>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  I believe in continuous learning and staying updated with the latest technologies. Currently exploring
                  advanced React patterns, cloud technologies, and modern development practices.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Next.js", "TypeScript", "AWS", "Docker", "GraphQL", "Testing"].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      Currently Learning: {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
