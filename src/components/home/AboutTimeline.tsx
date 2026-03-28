"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const timelineYears = ["2005", "2010", "2016", "2019", "2021", "2023", "2026"];

export function AboutTimeline() {
  const t = useTranslations("timeline");

  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-[18px] w-px bg-card-border sm:left-1/2 sm:-translate-x-px" />

      <div className="space-y-10">
        {timelineYears.map((year, i) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative flex items-start gap-6 sm:gap-0 ${
              i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <div className="absolute left-[14px] z-10 h-[10px] w-[10px] rounded-full border-2 border-accent bg-background sm:left-1/2 sm:-translate-x-1/2" />

            <div className={`flex-1 pl-10 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
              <span className="font-mono text-sm text-accent">{year}</span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {t(`${year}.title`)}
              </h3>
              <p className="mt-1 text-sm text-muted">{t(`${year}.description`)}</p>
            </div>

            <div className="hidden flex-1 sm:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
