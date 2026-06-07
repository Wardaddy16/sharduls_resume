"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    company: "CAGR Labs Pvt. Ltd.",
    role: "Full Stack Engineer",
    period: "July 2025 – Present",
    location: "Pune, Maharashtra",
    type: "Full-time",
    bullets: [
      "Designed and shipped 15+ production modules including Tasks, Review Meetings, Leads, Investor360, Portfolio Holdings, Lifecycle Activity, Notifications, and Business Reports.",
      "Developed scalable backend systems using Flask, PostgreSQL, SQLAlchemy, Alembic, and Celery — REST APIs, RLS-safe migrations, async workflows, and automation pipelines.",
      "Built analytics dashboards covering AUM, SIPs, Capital Gains, Dividends, Goals, EMIs, and business KPIs with CSV/PDF export via WeasyPrint.",
      "Implemented reusable platform features: mentions, threaded comments, tagging systems, lifecycle feeds, universal search, and role-based access controls.",
      "Enhanced investor experience via mobile-responsive UI revamps, PWA support, XIRR tracking, folio management, and multilingual Flutter app updates.",
      "Automated CAMS/KFintech data ingestion using Selenium and Celery, significantly reducing manual operational effort.",
    ],
    stack: [
      "Python",
      "Flask",
      "PostgreSQL",
      "Celery",
      "SQLAlchemy",
      "Flutter",
      "Chart.js",
      "WeasyPrint",
    ],
  },
  {
    company: "CAGR Labs Pvt. Ltd.",
    role: "Full Stack Intern",
    period: "Dec 2024 – Jun 2025",
    location: "Pune, Maharashtra",
    type: "Internship",
    bullets: [
      "Completed 10+ full-stack modules for a fintech CRM/wealth management platform covering Goals, Assets, EMIs, Leads, Tasks, and Review Meetings — each with lifecycle workflows and analytics.",
      "Designed a Tasks Management System from scratch with observer-based assignments, state lifecycle tracking, an analytics dashboard, and CSV/XLS exports.",
      "Developed 5 business reports (AUM, SIP, Capital Gains, Dividend, Tax Kit) with CSV/PDF export and enhanced Investor360 with XIRR tracking and folio management.",
      "Contributed to data ingestion pipelines for integrating client data into the platform.",
    ],
    stack: [
      "Flask",
      "PostgreSQL",
      "SQLAlchemy",
      "Vanilla JS",
      "jQuery",
      "Bootstrap",
      "Flutter",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Experience" title="Where I've Worked" />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[1.85rem] top-8 bottom-8 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[1.375rem] top-7 w-3.5 h-3.5 rounded-full bg-emerald-500 border-[3px] border-[#0a0a0a] ring-1 ring-emerald-500/30" />

                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-emerald-500/20 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-white font-semibold text-xl group-hover:text-emerald-400 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Briefcase size={13} className="text-emerald-500" />
                        <span className="text-emerald-400 text-sm font-medium">
                          {exp.company}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500/80 ml-1">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-zinc-400 text-sm leading-relaxed"
                      >
                        <span className="text-emerald-500 mt-[3px] flex-shrink-0 text-xs">
                          ▸
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/4 text-zinc-400 border border-white/5 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
