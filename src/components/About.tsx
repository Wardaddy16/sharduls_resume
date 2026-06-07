"use client";

import { motion } from "framer-motion";
import { GraduationCap, TrendingUp, MapPin, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="About" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-zinc-400 text-[1.05rem] leading-relaxed mb-5">
              I&apos;m a Full Stack Engineer at{" "}
              <span className="text-white font-medium">CAGR Labs</span>, where I
              design and build scalable fintech CRM and wealth management
              platforms. I work across the full stack — from backend APIs and
              async pipelines to responsive UIs and mobile apps.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-5">
              I recently graduated with a B.Tech in Electrical &amp; Computer
              Engineering and immediately transitioned into a full-time
              engineering role, having already shipped 15+ production modules
              during my internship.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Outside of code, I&apos;m passionate about financial markets —
              I&apos;ve been actively investing for 3+ years and have managed
              portfolios for multiple individuals, combining technical rigor
              with market intuition.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="space-y-4">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-emerald-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold">
                    MIT World Peace University
                  </h3>
                  <p className="text-zinc-400 text-sm mt-0.5">
                    B.Tech — Electrical &amp; Computer Engineering
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2.5">
                    <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
                      <Calendar size={11} />
                      Graduated July 2025
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500 text-xs">
                      <MapPin size={11} />
                      Pune, India
                    </span>
                  </div>
                  <span className="inline-flex items-center mt-3 bg-emerald-500/10 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded-full">
                    CGPA: 8.1 / 10.00
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Investing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={20} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    Stock Market Enthusiast
                  </h3>
                  <p className="text-zinc-400 text-sm mt-0.5 leading-relaxed">
                    Active investor for 3+ years. Managed ~5 individual
                    portfolios with a focus on market analysis, risk management,
                    and diverse investment strategies. Previously worked at a
                    mutual fund company.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
