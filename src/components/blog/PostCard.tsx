"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { TiltCard } from "@/components/ui/TiltCard";
import { DATE_LOCALES } from "@/lib/constants";

interface PostCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  index: number;
}

export function PostCard({
  slug,
  title,
  description,
  date,
  readingTime,
  tags,
  index,
}: PostCardProps) {
  const locale = useLocale();
  const dateLocale = DATE_LOCALES[locale] || "en-US";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <TiltCard className="flex h-full flex-col p-6">
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
            {title}
          </h2>

          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
            {description}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(date).toLocaleDateString(dateLocale, {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readingTime}
            </span>
          </div>
        </TiltCard>
      </Link>
    </motion.div>
  );
}
