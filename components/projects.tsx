"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Auto Grade System",
      description:
        "Led development of an innovative auto-grade system to streamline assessment processes. Designed a responsive UI for seamless user experience and efficient grading.",
      longDescription:
        "A comprehensive grading system that automates the assessment process for educational institutions. Features include student management, assignment creation, automated grading algorithms, and detailed analytics.",
      technologies: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "MongoDB"],
      category: "Full-Stack",
      image: "/autograde.png?height=300&width=500",
      github: "https://github.com/Snehagupta00/AutoGradeSystem.git",
      demo: "https://autogradesystem.onrender.com",
      highlights: ["MongoDB integration", "Responsive design", "Real-time grading"],
    },
    {
      id: 2,
      title: "Pizza Bill Generator",
      description:
        "Developed a robust application using Core Java to generate pizza bills. Implemented features for adding/removing items, handling extra charges, and computing total price.",
      longDescription:
        "A Java-based application demonstrating object-oriented programming principles. Features include menu management, order customization, price calculation with taxes and delivery fees.",
      technologies: ["Java", "OOP", "Core Java"],
      category: "Java",
      image: "/pizza.jpg?height=300&width=500",
      github: "https://github.com/Snehagupta00/Pizza-Bill--Generate-App.git",
      demo: "#",
      highlights: ["OOP principles", "Encapsulation", "Polymorphism"],
    },
    {
      id: 3,
      title: "Fitness Tracker Web App",
      description:
        "Built a comprehensive fitness tracking application using MERN stack with Clerk authentication. Features include workout logging, progress tracking, and personalized fitness analytics.",
      longDescription:
        "A full-stack fitness tracking web application that helps users monitor their fitness journey. Includes user authentication via Clerk, workout management, progress visualization, and responsive design for seamless mobile experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Tailwind CSS"],
      category: "Full-Stack",
      image: "/truegrit.png?height=300&width=500",
      github: "https://github.com/Snehagupta00/TrueGrit.git",
      demo: "https://truegrit.vercel.app",
      highlights: ["Clerk authentication", "MERN stack", "Real-time tracking"],
    },
    {
      id: 4,
      title: "Chat App (CONVO)",
      description:
        "Designed and implemented a full-stack chat application with a responsive and user-friendly interface for seamless messaging.",
      longDescription:
        "A real-time chat application built with React.js and Firebase. Features include user authentication, real-time messaging, file sharing, and responsive design across all devices.",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Cloudinary"],
      category: "React",
      image: "/convochat.png?height=300&width=500",
      github: "https://github.com/Snehagupta00/Convo-Chat.git",
      demo: "https://convochat.vercel.app",
      highlights: ["Real-time messaging", "File upload", "Responsive design"],
    },
  ]

  const categories = ["All", "Full-Stack", "Java", "React"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter className="h-5 w-5 text-muted-foreground mr-2" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 animate-slide-up">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Highlights:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
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

export default Projects
