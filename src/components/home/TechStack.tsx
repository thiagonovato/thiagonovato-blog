"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GradientText } from "@/components/ui/GradientText";
import { TECH_STACK } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  Frontend: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Mobile: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Language: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Backend: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Database: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Cloud: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Data: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  DevOps: "text-teal-400 bg-teal-400/10 border-teal-400/20",
};

export function TechStack() {
  const t = useTranslations("techStack");

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <GradientText as="h2" className="text-3xl font-bold sm:text-4xl">
          {t("title")}
        </GradientText>
        <p className="mt-2 text-muted">
          {t("subtitle")}
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3">
        {TECH_STACK.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{ scale: 1.08, y: -2 }}
            className={`cursor-default rounded-lg border px-4 py-2 font-mono text-sm transition-shadow hover:shadow-lg ${
              categoryColors[tech.category] || "text-muted bg-card border-card-border"
            }`}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
