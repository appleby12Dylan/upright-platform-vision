import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import uprightDashboard from "@/assets/upright-dashboard.png";
import UprightDiagram from "./UprightDiagram";


const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const UprightSection = () => {
  return (
    <section className="py-24 md:py-32 relative" id="upright">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-primary text-sm tracking-widest uppercase">
              Featured Project
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                The Upright Project
              </h2>
              <p className="text-muted-foreground text-lg">
                Engineering Team Lead · Sub-team of 4 · May 2023 – Present
              </p>
            </div>
            <a
              href="https://www.upright-services.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-highlight transition-colors"
            >
              Visit Upright <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          {...fadeInUp}
          className="mb-16 p-8 rounded-xl bg-card border border-border border-glow"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
            Create a <span className="text-primary font-medium">unified, scalable platform</span> that supports 
            multiple applications, teams, and customers — without each team reinventing the same 
            backend, frontend, and infrastructure.
          </p>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          {...fadeInUp}
          className="mb-20 rounded-xl overflow-hidden border border-border card-glow"
        >
          <a
            href="https://www.upright-services.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <img
              src={uprightDashboard}
              alt="The Upright Project Dashboard"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
              <span className="font-mono text-sm text-primary flex items-center gap-2">
                View The Upright Project <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </a>
        </motion.div>

        {/* Platform Architecture Diagram */}
        <motion.div {...fadeInUp}>
          <h3 className="font-mono text-lg text-primary mb-8 tracking-wide">
            Platform Requirements & Delivery
          </h3>
          <div className="rounded-xl overflow-hidden border border-border card-glow bg-card p-4 md:p-8">
            <UprightDiagram />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UprightSection;
