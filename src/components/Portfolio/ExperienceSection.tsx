import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const ExperienceSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const experiences = [
    {
      type: "work",
      title: "Full Stack Development Intern",
      company: "Technohacks.co.in",
      period: "May 2025 - Jun 2025",
      description: "Worked on full-stack web development projects, gaining hands-on experience with modern technologies and development workflows.",
      skills: ["React.js", "Node.js", "MongoDB", "JavaScript"]
    },
    {
      type: "work", 
      title: "Data Entry Specialist",
      company: "Soluflex Packaging Private Limited",
      period: "Feb 2025 - Present",
      description: "Managed data entry operations, ensuring accuracy and efficiency in data processing.",
      skills: ["Data Management", "Excel", "Creating Dashboard"]
    },
    {
      type: "work",
      title: "Web Development Intern",
      company: "Technohacks.co.in", 
      period: "Oct 2023 - Nov 2023",
      description: "Gained hands-on experience in web development by designing and implementing responsive and user-friendly websites.",
      skills: ["HTML5", "CSS3", "JavaScript", "Frontend Development"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Sandip University, Nashik",
      period: "2022 - Present",
      grade: "7.02 CGPA",
      description: "Focused on computer science fundamentals, web development, and software engineering principles."
    },
    {
      degree: "XII (Maharashtra State Board)",
      institution: "Dnyanasadha Jr. College",
      period: "2020 - 2022", 
      grade: "85.60%",
      description: "Completed higher secondary education with strong performance in science subjects."
    },
    {
      degree: "X (Maharashtra State Board)",
      institution: "Np. Shri Shivaji High School",
      period: "2019 - 2020",
      grade: "86.40%",
      description: "Completed secondary education with excellent academic performance."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.h2 className="heading-lg text-foreground mb-6" initial="hidden" animate={controls} variants={fadeUpVariant} custom={0}>
            Experience & Education
          </motion.h2>
          <motion.p className="body-lg text-muted-foreground max-w-2xl mx-auto" initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.1}>
            My journey through professional experiences and educational achievements 
            that have shaped my skills and expertise in technology.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-accent" />
              <h3 className="heading-sm text-foreground">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="card-modern"
                  initial="hidden"
                  animate={controls}
                  variants={fadeUpVariant}
                  custom={0.3 + index * 0.2}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{exp.title}</h4>
                      <div className="text-accent font-medium mb-2">{exp.company}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="badge bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.4}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="heading-sm text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="card-modern"
                  initial="hidden"
                  animate={controls}
                  variants={fadeUpVariant}
                  custom={0.5 + index * 0.2}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <div className="text-accent font-medium mb-2">{edu.institution}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="text-muted-foreground text-sm mb-2">{edu.grade}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* NASA Challenge Highlight */}
        <Card 
          className="card-glass mt-12 text-center animate-scale-in opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h4 className="heading-sm text-foreground mb-3">NASA International Space App Challenge</h4>
            <p className="text-muted-foreground mb-2">Galactic Problem Solver</p>
            <p className="text-sm text-muted-foreground">October 5-6, 2024</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;