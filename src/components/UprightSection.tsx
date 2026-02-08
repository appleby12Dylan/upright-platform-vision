import { motion } from "framer-motion";
import { ExternalLink, Users, Zap, Shield, GitBranch, Layers, Server } from "lucide-react";
import uprightDashboard from "@/assets/upright-dashboard.png";
import uprightDiagram from "@/assets/upright-diagram.png";

const requirements = [
  {
    icon: Server,
    title: "Shared Backend Foundation",
    desc: "Unified C#/.NET Core API layer, auth pipeline, multi-tenant routing & context handling",
    result: "40% reduction in cross-service integration failures",
  },
  {
    icon: Layers,
    title: "Shared Frontend System",
    desc: "TypeScript/JS client libraries, design system alignment, standardized component patterns",
    result: "Faster frontend development, zero reinventing per team",
  },
  {
    icon: Shield,
    title: "Shared Cloud Infrastructure",
    desc: "Containerized .NET services, automated CI/CD, unified deployment pipeline",
    result: "30% shorter release cycles, same-day repeatable releases",
  },
  {
    icon: GitBranch,
    title: "Consistent Developer Experience",
    desc: "API contracts, clear service boundaries, cross-team design review & guidance",
    result: "Higher delivery quality across the entire org",
  },
  {
    icon: Users,
    title: "Faster Team Onboarding",
    desc: "Centralized platform logic, shared services, standardized environment provisioning",
    result: "New teams productive in days, not weeks",
  },
  {
    icon: Zap,
    title: "Lower Operational Cost",
    desc: "Centralized backend logic, shared tooling, observability baked in",
    result: "Scalable foundation for future products",
  },
];

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

        {/* Requirements Grid */}
        <motion.div {...fadeInUp} className="mb-20">
          <h3 className="font-mono text-lg text-primary mb-8 tracking-wide">
            What I Delivered
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, i) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-surface border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <req.icon className="w-6 h-6 text-primary mb-4 group-hover:text-highlight transition-colors" />
                <h4 className="font-mono text-sm font-semibold text-foreground mb-2">
                  {req.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {req.desc}
                </p>
                <p className="font-mono text-xs text-primary/80">
                  → {req.result}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div {...fadeInUp}>
          <h3 className="font-mono text-lg text-primary mb-8 tracking-wide">
            Platform Architecture
          </h3>
          <div className="rounded-xl overflow-hidden border border-border card-glow bg-card p-4 md:p-8">
            <img
              src={uprightDiagram}
              alt="The Upright Project Architecture Diagram"
              className="w-full max-w-2xl mx-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UprightSection;
