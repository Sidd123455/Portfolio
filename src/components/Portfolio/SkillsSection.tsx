import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 80 },
        { name: "C", level: 85 },
        { name: "C++", level: 70 },
        { name: "Python", level: 30 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 60 },
        { name: "MongoDB", level: 60 },
        { name: "MySQL", level: 70 },
        { name: "Node.js", level: 60 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Excel", level: 90 },
        { name: "Data Analysis", level: 70 },
        { name: "UI/UX Design", level: 85 },
        { name: "Canva", level: 85 },
        { name: "Figma", level: 70 }
      ]
    }
  ];

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.h2
            className="heading-lg text-foreground mb-6"
            initial="hidden"
            animate={controls}
            variants={fadeUpVariant}
            custom={0}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="body-lg text-muted-foreground max-w-2xl mx-auto"
            initial="hidden"
            animate={controls}
            variants={fadeUpVariant}
            custom={0.1}
          >
            A comprehensive toolkit built through education, hands-on projects, 
            and continuous learning in modern web development.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="card-modern"
              initial="hidden"
              animate={controls}
              variants={fadeUpVariant}
              custom={0.2 + categoryIndex * 0.2}
            >
              <h3 className="heading-sm text-foreground mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    initial="hidden"
                    animate={controls}
                    variants={fadeUpVariant}
                    custom={0.3 + categoryIndex * 0.2 + skillIndex * 0.1}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-dark rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-accent to-accent-light"
                        initial={{ width: 0, opacity: 0 }}
                        animate={inView ? { width: `${skill.level}%`, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <motion.h3
            className="heading-sm text-foreground text-center mb-8"
            initial="hidden"
            animate={controls}
            variants={fadeUpVariant}
            custom={0.5}
          >
            Certifications
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {["Fundamentals of Web Technologies - TechSaksham",
              "Fundamentals of AI and Data Skills - Ybi Foundation", 
              "Getting Started with Data Science - IBM"
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="card-glass text-center"
                initial="hidden"
                animate={controls}
                variants={fadeUpVariant}
                custom={0.6 + index * 0.2}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;