import { motion } from "framer-motion";
import { Globe, ArrowDown, Database, Monitor, BarChart3, Container } from "lucide-react";

const layers = [
  {
    title: "External Integrations Layer",
    subtitle: "Partner APIs · Feeds · Webhooks",
    icon: Globe,
    accent: "highlight",
    items: [],
  },
  {
    title: "Ingestion & Normalization",
    subtitle: "Event Intake · Validation · Mapping",
    icon: ArrowDown,
    accent: "primary",
    items: [".NET Core", "C#", "SQL", "Message Queues"],
  },
  {
    title: "Platform Engineering Core",
    subtitle: null,
    icon: null,
    accent: "primary",
    items: [],
    isCore: true,
    children: [
      {
        title: "Event-Driven Pipelines",
        desc: "Queues · Workers · Async Workflows",
      },
      {
        title: "Core Service APIs",
        desc: ".NET Core · REST · Domain Boundaries",
      },
    ],
  },
  {
    title: "State & Data Layer",
    subtitle: "SQL Server · Postgres · Redis · NoSQL · Caching",
    icon: Database,
    accent: "primary",
    items: [],
  },
];

const sideBlocks = [
  {
    title: "Internal Tools & Portals",
    desc: "React · Next.js · TypeScript · Admin UX",
    icon: Monitor,
  },
  {
    title: "Observability & Quality",
    desc: "Logging · Metrics · Testing · APM",
    icon: BarChart3,
  },
  {
    title: "CI/CD & Infrastructure",
    desc: "Docker · K8s · Terraform · Azure/AWS/GCP",
    icon: Container,
  },
];

const SpotHeroDiagram = () => {
  return (
    <div className="space-y-0">
      {/* Main vertical flow */}
      <div className="grid lg:grid-cols-[1fr_auto] gap-8">
        <div className="space-y-0">
          {layers.map((layer, i) => (
            <div key={layer.title}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {layer.isCore ? (
                  /* Platform Engineering Core - special block */
                  <div className="rounded-xl border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-highlight to-primary" />
                    <h4 className="font-mono text-sm font-bold text-primary text-glow mb-4 uppercase tracking-widest text-center">
                      Platform Engineering
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {layer.children?.map((child) => (
                        <div
                          key={child.title}
                          className="rounded-lg border border-primary/20 bg-card/80 p-4 hover:border-primary/40 transition-colors"
                        >
                          <span className="font-mono text-sm font-semibold text-foreground block mb-1">
                            {child.title}
                          </span>
                          <span className="text-xs text-muted-foreground">{child.desc}</span>
                        </div>
                      ))}
                    </div>
                    {/* Flow labels */}
                    <div className="flex justify-around mt-4">
                      <span className="font-mono text-[10px] text-primary/60 uppercase tracking-wider">Events ↓</span>
                      <span className="font-mono text-[10px] text-primary/60 uppercase tracking-wider">API Calls ↓</span>
                    </div>
                  </div>
                ) : (
                  /* Regular layer block */
                  <div
                    className={`rounded-lg border ${
                      layer.accent === "highlight" ? "border-highlight/30 bg-highlight/5" : "border-border bg-card/60"
                    } p-4 flex items-center gap-4`}
                  >
                    {layer.icon && (
                      <layer.icon
                        className={`w-5 h-5 shrink-0 ${
                          layer.accent === "highlight" ? "text-highlight" : "text-primary"
                        }`}
                      />
                    )}
                    <div className="flex-1">
                      <span className="font-mono text-sm font-semibold text-foreground">{layer.title}</span>
                      {layer.subtitle && (
                        <span className="text-xs text-muted-foreground block mt-0.5">{layer.subtitle}</span>
                      )}
                    </div>
                    {layer.items.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Connector arrow between layers */}
              {i < layers.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <div className="w-px h-5 bg-gradient-to-b from-primary/40 to-primary/10" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Side blocks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex lg:flex-col gap-3 justify-center"
        >
          {sideBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-lg border border-border bg-surface p-4 hover:border-primary/30 transition-colors flex-1 lg:flex-none"
            >
              <block.icon className="w-4 h-4 text-primary mb-2" />
              <span className="font-mono text-xs font-semibold text-foreground block">{block.title}</span>
              <span className="text-[11px] text-muted-foreground leading-tight block mt-1">{block.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom output */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-4"
      >
        <div className="flex justify-center py-1.5">
          <div className="w-px h-5 bg-gradient-to-b from-primary/40 to-primary/10" />
        </div>
        <div className="rounded-lg border border-highlight/30 bg-highlight/5 p-4 text-center">
          <span className="font-mono text-sm font-semibold text-highlight">Consumer-Facing Systems</span>
          <span className="text-xs text-muted-foreground block mt-1">Web · Mobile · Partner-Facing UIs</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SpotHeroDiagram;
