"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-8 md:gap-12 items-center">
        {/* Left: Text — 3 cols (appears second on mobile via order) */}
        <div className="md:col-span-3 order-2 md:order-1">
          <motion.p
            {...fadeUp(0)}
            className="text-emerald-500 text-xs font-mono tracking-[0.25em] uppercase mb-5"
          >
            Full Stack Engineer
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white mb-6"
          >
            Shardul
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400">
              Anaspure
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md"
          >
            Building scalable fintech platforms and productivity tools.
            Passionate about clean systems, great UX, and financial markets.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="flex items-center gap-2 text-zinc-500 text-sm mb-8"
          >
            <MapPin size={14} className="text-emerald-500/70" />
            <span>Pune, Maharashtra, India</span>
          </motion.div>

          <motion.div
            {...fadeUp(0.3)}
            className="flex items-center gap-3 flex-wrap mb-8"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-all duration-200 text-sm cursor-pointer"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-white/10 hover:border-emerald-500/40 text-white/80 hover:text-emerald-400 rounded-full transition-all duration-200 text-sm cursor-pointer"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            {...fadeUp(0.38)}
            className="flex items-center gap-5"
          >
            <a
              href="https://github.com/Wardaddy16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/shardul-anaspure-aa7962219/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
            <div className="h-px w-8 bg-zinc-800" />
            <span className="text-zinc-600 text-xs font-mono">
              github.com/Wardaddy16
            </span>
          </motion.div>
        </div>

        {/* Right: Avatar — 2 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/20 blur-3xl scale-110" />
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 scale-[1.06]" />
            {/* Avatar */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/8 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sharduls_resume/profile.jpg"
                alt="Shardul Anaspure"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 45%" }}
              />
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-zinc-900 border border-white/10 rounded-full px-3 py-1.5 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-zinc-300 font-medium whitespace-nowrap">
                Open to Work
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
