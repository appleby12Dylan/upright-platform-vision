import { motion } from "framer-motion";

const experiences = [
  {
    company: "Alert Logic",
    role: "Software Engineer",
    period: "Sep 2018 – Dec 2020",
    desc: "Maintained C#/.NET threat-detection services, built React UI for security analytics, improved database reliability.",
  },
  {
    company: "PROS",
    role: "Software Engineering Intern",
    period: "May 2017 – Aug 2018",
    desc: "Supported pricing/revenue optimization tools in C#/.NET, modernized internal UI workflows with React.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-24 md:py-32" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-12 bg-primary" />
            <span className="font-mono text-primary text-sm tracking-widest uppercase">
              Earlier Career
            </span>
          </div>
        </motion.div>

        <div className="space-y-8 max-w-3xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="line-accent pl-8 py-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-mono text-lg font-semibold text-foreground">
                  {exp.company}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="font-mono text-sm text-primary mb-2">{exp.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="line-accent pl-8 py-4"
          >
            <h3 className="font-mono text-lg font-semibold text-foreground mb-1">
              Rice University
            </h3>
            <p className="font-mono text-sm text-primary mb-1">B.S. Computer Science</p>
            <p className="font-mono text-xs text-muted-foreground">May 2018</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
