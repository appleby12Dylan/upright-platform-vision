import { motion } from "framer-motion";
import { Server, Layers, Cloud, GitBranch, Users, Zap } from "lucide-react";

const rows = [
  {
    icon: Server,
    requirement: "Shared Backend Foundation",
    built: "C#/.NET Core API, auth pipeline, multi-tenant routing, unified data access",
    result: "40% fewer cross-service integration failures",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    icon: Layers,
    requirement: "Shared Frontend System",
    built: "TypeScript client libs, design system, standardized component patterns",
    result: "Faster frontend dev, zero reinventing per team",
    color: "from-highlight/15 to-highlight/5",
    borderColor: "border-highlight/30",
  },
  {
    icon: Cloud,
    requirement: "Shared Cloud Infrastructure",
    built: "Containerized .NET services, automated CI/CD, unified deployment pipeline",
    result: "30% shorter release cycles",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    icon: GitBranch,
    requirement: "Consistent Developer Experience",
    built: "Standardized API contracts, clear service boundaries, design review process",
    result: "Higher delivery quality across entire org",
    color: "from-highlight/15 to-highlight/5",
    borderColor: "border-highlight/30",
  },
  {
    icon: Users,
    requirement: "Faster Team Onboarding",
    built: "Centralized platform logic, shared services, standardized env provisioning",
    result: "New teams productive in days, not weeks",
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/30",
  },
  {
    icon: Zap,
    requirement: "Lower Operational Cost",
    built: "Centralized backend logic, shared tooling, observability baked in",
    result: "Scalable foundation for future products",
    color: "from-highlight/15 to-highlight/5",
    borderColor: "border-highlight/30",
  },
];

const UprightDiagram = () => {
  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="grid grid-cols-[2.5rem_1fr_1fr_1fr] md:grid-cols-[2.5rem_1.2fr_1.5fr_1fr] gap-3 px-4 py-3">
        <div />
        <span className="font-mono text-xs text-primary uppercase tracking-widest">Requirement</span>
        <span className="font-mono text-xs text-primary uppercase tracking-widest">What I Built</span>
        <span className="font-mono text-xs text-primary uppercase tracking-widest">Result</span>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <motion.div
          key={row.requirement}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className={`grid grid-cols-[2.5rem_1fr_1fr_1fr] md:grid-cols-[2.5rem_1.2fr_1.5fr_1fr] gap-3 items-start px-4 py-4 rounded-lg border ${row.borderColor} bg-gradient-to-r ${row.color} hover:border-primary/50 transition-all duration-300`}
        >
          <row.icon className="w-5 h-5 text-primary mt-0.5" />
          <span className="font-mono text-sm font-semibold text-foreground">{row.requirement}</span>
          <span className="text-sm text-muted-foreground leading-relaxed">{row.built}</span>
          <span className="font-mono text-xs text-primary">→ {row.result}</span>
        </motion.div>
      ))}

      {/* Flow arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center justify-center gap-4 pt-6"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <span className="font-mono text-xs text-primary/70 whitespace-nowrap">
          Unified Platform · Multiple Apps · One Foundation
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </motion.div>
    </div>
  );
};

export default UprightDiagram;
