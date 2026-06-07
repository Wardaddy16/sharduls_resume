"use client";

import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-emerald-500 text-xs font-mono tracking-[0.2em] uppercase mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </motion.div>
  );
}
