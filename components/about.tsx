import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Heart } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions through code
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year B.Tech Computer Science student at GLA University with a passion for full-stack
              development. My journey in technology has been driven by curiosity and a desire to create meaningful
              digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With hands-on experience in Java, React.js, and modern web technologies, I've developed projects ranging
              from auto-grading systems to real-time chat applications. I believe in writing clean, efficient code and
              continuously learning new technologies to stay at the forefront of software development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects, and solving
              complex problems that challenge my technical skills.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <strong>B.Tech Computer Science</strong> - GLA University, Mathura (June 2026)
                      </p>
                      <p>
                        <strong>Intermediate</strong> - Asian Public School ( July 2022)
                      </p>
                      <p>
                        <strong>High School</strong> - Biharare Convent High School ( April 2020)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Career Goals</h3>
                    <p className="text-sm text-muted-foreground">
                      Aspiring to excel as a full-stack developer specializing in Java, React.js, and scalable web
                      applications. Focused on creating innovative solutions that make a positive impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interests</h3>
                    <p className="text-sm text-muted-foreground">
                      Passionate about coding, problem-solving, exploring modern web technologies, and staying updated
                      with the latest trends in software development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
