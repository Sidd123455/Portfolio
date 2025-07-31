import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 9916597453",
      href: "tel:+919916597453"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "siddeshsapate@gmail.com",
      href: "mailto:siddeshsapate@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Bangaluru, Karnatak",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.h2 className="heading-lg text-foreground mb-6" initial="hidden" animate={controls} variants={fadeUpVariant} custom={0}>
            Let's Work Together
          </motion.h2>
          <motion.p className="body-lg text-muted-foreground max-w-2xl mx-auto" initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.1}>
            Ready to bring your ideas to life? I'm always excited to work on new projects 
            and collaborate with amazing people. Let's create something extraordinary together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div className="card-modern" initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.2}>
            <h3 className="heading-sm text-foreground mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="Siddesh" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Sapate" className="w-full" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="siddeshsapate@gmail.com" className="w-full" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input placeholder="Project Discussion" className="w-full" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  className="w-full min-h-[120px] resize-none"
                />
              </div>
              
              <Button className="btn-accent w-full group">
                Send Message
                <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-8" initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.3}>
            <motion.div initial="hidden" animate={controls} variants={fadeUpVariant} custom={0.4}>
              <h3 className="heading-sm text-foreground mb-6">Get in touch</h3>
              <p className="body-md text-muted-foreground mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  initial="hidden"
                  animate={controls}
                  variants={fadeUpVariant}
                  custom={0.5 + index * 0.1}
                >
                  <span className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-full text-accent">
                    {info.icon}
                  </span>
                  <div>
                    <div className="font-medium text-foreground">{info.title}</div>
                    <div className="text-sm text-muted-foreground">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <Card 
              className="card-glass text-center animate-scale-in opacity-0"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm">Available for work</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently accepting new projects and opportunities
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;