"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "Flask",
      "Django",
      "TailwindCSS",
      "Bootstrap",
      "Chart.js",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "AWS",
      "Figma",
      "Jira",
      "Jenkins",
      "Linux",
      "VSCode",
      "Slack",
      "Arduino",
    ],
  },
  {
    category: "Other",
    skills: [
      "Selenium",
      "Celery",
      "SQLAlchemy",
      "Alembic",
      "Prisma",
      "Flutter",
      "WeasyPrint",
      "OpenAI",
      "PowerBI",
      "Tableau",
      "Azure",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Skills" title="What I Work With" />

        <div className="mt-12 space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.18em] whitespace-nowrap">
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.04 }}
                    className="px-3 py-1.5 bg-white/4 hover:bg-emerald-500/10 text-zinc-300 hover:text-emerald-400 border border-white/5 hover:border-emerald-500/30 text-sm rounded-lg transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
