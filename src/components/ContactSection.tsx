import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-4 h-4" />
            <span className="font-mono text-sm">Austin, TX</span>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/dylan-apple-474bb33aa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-mono text-sm"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              LinkedIn
            </a>
            <a
              href="https://www.github.com/appleby12Dylan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-mono text-sm"
            >
              <Github className="w-5 h-5 text-primary" />
              GitHub
            </a>
            <a
              href="mailto:Appleby.dylan@outlook.com"
              className="flex items-center gap-3 px-6 py-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 font-mono text-sm"
            >
              <Mail className="w-5 h-5 text-primary" />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
