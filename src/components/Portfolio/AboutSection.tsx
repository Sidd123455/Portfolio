import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Award, Book, Code, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Experienced in React.js, Node.js, MongoDB, and modern web technologies"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Currently pursuing BCA with 7.02 CGPA at Sandip University, Nashik"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professional",
      description: "Certified in Web Technologies, AI & Data Science from leading institutions"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Driven",
      description: "NASA Space App Challenge participant, passionate about solving real problems"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.1}>
              <h2 className="heading-lg text-foreground mb-6">About Me</h2>
              <div className="space-y-6 text-muted-foreground body-md">
                <p>
                  I'm a passionate Full Stack Developer currently pursuing my Bachelor of Computer 
                  Application at Sandip University, Nashik. With hands-on experience in modern web 
                  technologies and a strong foundation in programming, I love creating digital 
                  experiences that make a difference.
                </p>
                <p>
                  My journey in technology began with curiosity and has evolved into expertise 
                  across multiple programming languages and frameworks. I've completed internships 
                  at Technohacks.co.in and gained practical experience in both web development 
                  and data management.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  participating in hackathons like the NASA Space App Challenge, or working 
                  on innovative projects that push the boundaries of what's possible on the web.
                </p>
              </div>
            </motion.div>
            {/* Stats */}
            <motion.div className="grid grid-cols-2 gap-6" initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.2}>
              <div className="text-center">
                <div className="heading-sm text-accent font-bold">7.02</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="heading-sm text-accent font-bold">8+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </motion.div>
          </div>
          {/* Highlights Grid */}
          <motion.div className="grid gap-6" initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.3}>
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="card-modern"
                initial="hidden"
                animate={controls}
                variants={fadeUpVariant}
                custom={0.4 + index * 0.2}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;