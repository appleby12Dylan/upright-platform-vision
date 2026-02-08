import { motion } from "framer-motion";
import spotheroApp from "@/assets/spothero-app.png";
import SpotHeroDiagram from "./SpotHeroDiagram";

const highlights = [
  {
    metric: "30%",
    label: "Peak throughput increase",
    desc: "Re-engineered C#/.NET Core services with clearer domain boundaries",
  },
  {
    metric: "35%",
    label: "Latency reduction",
    desc: "Event-driven workflows replacing brittle synchronous processes",
  },
  {
    metric: "25%",
    label: "Fewer data incidents",
    desc: "Optimized SQL queries, resolved schema inconsistencies",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const SpotHeroSection = () => {
  return (
    <section className="py-24 md:py-32 relative" id="spothero">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-primary text-sm tracking-widest uppercase">
              Previous Role
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            SpotHero
          </h2>
          <p className="text-muted-foreground text-lg">
            Senior Software Engineer · Platform Engineering · Jan 2021 – Apr 2023
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div {...fadeInUp}>
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              Joined during a critical growth phase where the team was transitioning from 
              "startup-speed shipping" to building a <span className="text-primary font-medium">stable, scalable platform</span>. 
              As part of the Platform Engineering team, I owned core services and backend systems — 
              not consumer-facing UI, but the infrastructure that made everything work.
            </p>
            <div className="rounded-xl overflow-hidden border border-border card-glow">
              <img
                src={spotheroApp}
                alt="SpotHero Parking Application"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-8">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-mono font-bold text-primary text-glow">
                      {h.metric}
                    </span>
                    <span className="font-mono text-sm text-foreground">{h.label}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{h.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Platform Engineering Diagram */}
        <motion.div {...fadeInUp}>
          <h3 className="font-mono text-lg text-primary mb-8 tracking-wide">
            Platform Engineering Architecture
          </h3>
          <div className="rounded-xl overflow-hidden border border-border card-glow bg-card p-4 md:p-8">
            <SpotHeroDiagram />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotHeroSection;
