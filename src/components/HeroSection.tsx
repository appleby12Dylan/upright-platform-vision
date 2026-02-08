import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Engineering Team Lead · Platform Architect
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Dylan Appleby</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
            Senior Software Engineer with nearly 10 years building scalable platforms, 
            leading teams, and transforming how organizations ship software.
          </p>
          <p className="font-mono text-xs text-primary/60 tracking-widest mb-10">
            C# · .NET · React · TypeScript · AWS · Kubernetes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/dylan-apple-474bb33aa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://www.github.com/appleby12Dylan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="mailto:Appleby.dylan@outlook.com"
            className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-foreground" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
