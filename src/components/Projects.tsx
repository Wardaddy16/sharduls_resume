"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "SharVault",
    url: "https://sharvault.vercel.app/login",
    github: null,
    description:
      "Full-stack personal productivity PWA with 14 independent modules — Kanban boards, finance tracker, rich-text notes, freeform canvas, calendar with cron-based email reminders, and global unified search.",
    highlights: [
      "Personal finance module: transaction CRUD, custom color-coded categories, income/expense analytics, trend visualizations, monthly summary API, and optimistic UI with pending queue.",
      "5 independent version-history and data-restore systems with per-save snapshots and email-triggered full restore flows.",
      "Diagnosed and resolved a production outage from Prisma connection pool exhaustion — introduced singleton client pattern, eliminating redundant DB round-trips.",
      "Single /api/search endpoint fanning out across 4 data sources in parallel, surfaced in a global modal with grouped results and full keyboard navigation.",
    ],
    stack: ["Next.js 15", "Prisma", "PostgreSQL", "NextAuth", "TailwindCSS", "Vercel"],
    featured: true,
  },
  {
    name: "Dehazing — Nexus Hackathon",
    url: null,
    github: "https://github.com/gauriket/Nexus_Dehazing",
    description:
      "ML project using an atmospheric scattering model to enhance video visibility in challenging weather. Integrated object detection and deployed a web interface via Flask.",
    highlights: [
      "PSNR: 17 | SSIM: 0.89 — strong perceptual quality metrics.",
      "Deployed user-friendly Flask web interface for API accessibility.",
    ],
    stack: ["Python", "OpenCV", "Flask", "Object Detection", "ML"],
    featured: false,
  },
  {
    name: "Medical AI ChatBot",
    url: null,
    github: null,
    description:
      "AI-powered chatbot using ML techniques that diagnoses diseases and provides basic medical information to patients before a doctor consultation.",
    highlights: [
      "Analyzes input symptoms to output a comprehensive list of possible medical conditions.",
      "Addresses the challenge of limited consultation time through AI-powered pre-screening.",
    ],
    stack: ["Python", "Machine Learning", "NLP", "Flask"],
    featured: false,
  },
  {
    name: "Food Order Prediction Model",
    url: null,
    github: null,
    description:
      "Predictive model for food orders using multi-restaurant data. Designed and implemented algorithms to analyze and train the model for accuracy.",
    highlights: [
      "Collaborated on multi-restaurant dataset analysis and model training pipeline.",
      "Enhanced prediction accuracy and reliability through iterative model improvements.",
    ],
    stack: ["Python", "Data Science", "Scikit-learn", "Statistics"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Projects" title="Things I've Built" />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative bg-[#111] border ${
                p.featured
                  ? "border-emerald-500/25 hover:border-emerald-500/50"
                  : "border-white/5 hover:border-emerald-500/20"
              } rounded-2xl p-6 transition-all duration-300 group flex flex-col`}
            >
              {p.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/3 to-transparent rounded-2xl pointer-events-none" />
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  {p.featured && (
                    <span className="text-[10px] text-emerald-500 font-mono tracking-widest uppercase block mb-1.5">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors duration-200">
                    {p.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-emerald-400 transition-colors"
                      aria-label="Visit project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              <ul className="space-y-1.5 mb-5 flex-1">
                {p.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex gap-2.5 text-zinc-500 text-xs leading-relaxed"
                  >
                    <span className="text-emerald-500/50 flex-shrink-0 mt-0.5">
                      ▸
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mt-auto">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-white/4 text-zinc-500 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
