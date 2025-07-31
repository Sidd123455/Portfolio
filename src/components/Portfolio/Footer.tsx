import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Sidd123455", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/siddesh-s12", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:siddeshsapate@gmail.com", label: "Email" },
    { icon: <Phone className="w-5 h-5" />, href: "tel:+919916597453", label: "Phone" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair">Siddesh Sapate</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and digital experiences that make a difference.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary-foreground/10 hover:text-accent transition-colors"
                >
                  <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>siddeshsapate@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+91 9916597453</span>
              </div>
            </div>
            <div className="pt-2">
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span>© {currentYear} Siddesh Sapate.</span>
            </div>
            <div className="text-primary-foreground/60 text-sm">
              Built with React.js, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;