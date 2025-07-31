import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BlinkBitesImg from "@/images/BlinkBites.jpg";
import F1RacingImg from "@/images/F1 Racing Hub.webp";
import SpaceStalkerImg from "@/images/Space Stalker.jpg";
import BMWMImg from "@/images/BMW M.webp";
import BMWMSeriesImg from "@/images/BMW M Series.jpg";
import GlobalFIBCImg from "@/images/Global FIBC Services.webp";
import ExoplanetImg from "@/images/Exoplanet.jpg";
import PortfolioImg from "@/images/Portfolio.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "BlinkBites",
      description: "Modern food delivery application with real-time ordering and user-friendly interface.",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://blinkbitess-frontend.onrender.com/",
      github: "https://github.com/Sidd123455/BlinkBitess",
      image: BlinkBitesImg
    },
    {
      title: "F1 Racing Hub",
      description: "Dynamic Formula 1 racing website featuring race statistics, driver profiles, and information of Formula 1.",
      category: "Sports Website",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "https://sidd123455.github.io/Formula1/",
      github: "https://github.com/Sidd123455/Formula1",
      image: F1RacingImg
    },
    {
      title: "Space Stalkers",
      description: "An immersive website exploring space travels with interactive elements and stunning visuals.",
      category: "Web Development",
      technologies: ["React.js", "CSS3", "JavaScript"],
      link: "https://mayurbariii.github.io/SpaceStalkers/",
      image: SpaceStalkerImg
    },
    {
      title: "BMW M Series",
      description: "Elegant showcase website for BMW M series cars with interactive features and smooth animations.",
      category: "Automotive",
      technologies: ["TypeScript","React.js", "Tailwind CSS", "Framer Motion"],
      link: "https://preview--mseries-motion-magic.lovable.app/#",
      image: BMWMImg
    },
    {
      title: "BMW M Series",
      description: "Elegant showcase website for BMW M series cars with interactive features and smooth animations.",
      category: "Automotive",
      technologies: ["HTML5","CSS3", "JavaScript"],
      link: "https://sidd123455.github.io/BMW-M-Series/",
      github: "https://github.com/Sidd123455/BMW-M-Series",
      image: BMWMSeriesImg
    },
    {
      title: "Global FIBC Services",
      description: "B2B website with Buyers, Suppliers and Service provider portals.",
      category: "Portfolio",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Supabase"],
      link: "https://preview--gfs.lovable.app/",
      github: "https://github.com/Sidd123455/gfs",
      image: GlobalFIBCImg
    },
    {
      title: "Personal Portfolio",
      description: "Modern portfolio website showcasing skills, projects, and professional journey.",
      category: "Portfolio",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      image: PortfolioImg
    },
    {
      title: "Exoplanet Explorer",
      description: "Educational website about solar system and exoplanets with information.",
      category: "Educational",
      technologies: ["JavaScript", "HTML", "CSS3"],
      image: ExoplanetImg
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing different aspects of web development,
            from interactive websites to complex web applications.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="card-project group min-w-[350px] md:min-w-[400px] snap-center animate-slide-in-right opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className={`aspect-video relative overflow-hidden`}>
                  {project.image && (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                        <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" asChild={!!project.github}>
                        {project.github ? (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-4 h-4" />
                          </a>
                        ) : (
                          <Github className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="heading-sm text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button variant="outline" className="w-full btn-outline" asChild={!!project.link}>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    ) : (
                      <>View Project</>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              ></div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button className="btn-accent" asChild>
            <a href="https://github.com/Sidd123455" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>

    </section>
  );
};

export default ProjectsSection;