import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleViewWork = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent-muted animate-gradient-move"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"></div>
      </div>
      
      <div className="container-max section-padding relative z-10 animate-fade-in-slow">
        <div className="text-center space-y-8">
          {/* Greeting */}
          <div className="animate-bounce-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <p className="body-md text-muted-foreground mb-4">Hello, I'm</p>
            <h1 className="heading-xl text-gradient mb-6 transition-transform duration-500 hover:scale-105">
              Siddesh Sapate
            </h1>
          </div>

          {/* Title & Description */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <h2 className="heading-md text-foreground mb-6">
              Full Stack Developer & Creative Technologist
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Passionate about creating innovative web solutions with modern technologies. 
              Currently pursuing Bachelor of Computer Application at Sandip University, 
              with hands-on experience in React.js, Node.js, and full-stack development.
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9916597453</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>siddeshsapate@gmail.com</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="animate-scale-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button className="btn-accent group" onClick={handleViewWork}>
                View My Work
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-outline group">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent" asChild>
                <a href="https://github.com/Sidd123455" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/10 hover:text-accent" asChild>
                <a href="https://www.linkedin.com/in/siddesh-s12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float transition-transform duration-700 hover:scale-110"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/10 rounded-full animate-float transition-transform duration-700 hover:scale-110" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-accent/20 rounded-full animate-float transition-transform duration-700 hover:scale-110" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;