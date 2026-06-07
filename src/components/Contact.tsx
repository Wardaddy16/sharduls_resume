"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeader from "./SectionHeader";

function PhoneIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );
}

const links = [
  {
    icon: Mail,
    label: "shardulanaspure1603@gmail.com",
    href: "mailto:shardulanaspure1603@gmail.com",
    external: false,
  },
  {
    icon: PhoneIcon,
    label: "+91 7755932598",
    href: "tel:+917755932598",
    external: false,
  },
  {
    icon: GithubIcon,
    label: "github.com/Wardaddy16",
    href: "https://github.com/Wardaddy16",
    external: true,
  },
  {
    icon: LinkedinIcon,
    label: "linkedin.com/in/shardul-anaspure",
    href: "https://www.linkedin.com/in/shardul-anaspure-aa7962219/",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Contact" title="Let's Connect" />

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-zinc-400 text-[1.05rem] leading-relaxed mb-8">
              I&apos;m currently open to new opportunities — whether it&apos;s
              a full-time role, contract work, or an interesting collaboration.
              My inbox is always open.
            </p>

            <a
              href="/Shardul_Anaspure_Resume.docx"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold rounded-full transition-colors duration-200 text-sm"
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          {/* Right: links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            {links.map(({ icon: Icon, label, href, external }, i) => (
              <motion.a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                className="flex items-center justify-between p-4 bg-[#111] border border-white/5 rounded-xl hover:border-emerald-500/20 group transition-all duration-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon size={16} className="text-emerald-500" />
                  </div>
                  <span className="text-zinc-400 group-hover:text-white transition-colors text-sm truncate">
                    {label}
                  </span>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-zinc-700 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Shardul Anaspure
        </p>
        <p className="text-zinc-700 text-xs font-mono">
          Built with Next.js &amp; TailwindCSS
        </p>
      </div>
    </section>
  );
}
