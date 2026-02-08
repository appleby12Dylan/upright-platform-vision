import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Backend & API",
    skills: ["C#", ".NET Core", "ASP.NET", "Entity Framework", "Dapper", "REST APIs", "Microservices", "Event-Driven Architecture"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3/SCSS", "State Management"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Data",
    skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Query Optimization"],
  },
  {
    title: "Testing & Quality",
    skills: ["xUnit", "NUnit", "Jest", "Playwright", "Cypress", "E2E", "SOLID", "Clean Code"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface/30" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-primary text-sm tracking-widest uppercase">
              Technical Skills
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <h3 className="font-mono text-sm font-semibold text-primary mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
