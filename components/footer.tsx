import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Sneha Gupta</h3>
            <p className="text-muted-foreground mb-4">
              Aspiring Full-Stack Developer crafting innovative web solutions with passion and precision.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/sneha-gupta00" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/sneha-gupta-843812753"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:sneha.gupta_cs22@gla.ac.in">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#experience", label: "Experience" },
                { href: "#certifications", label: "Certifications" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 sneha.gupta_cs22@gla.ac.in</p>
              <p>📍 Mathura, Uttar Pradesh, India</p>
              <p>🎓 B.Tech CS, GLA University</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Sneha Gupta © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
