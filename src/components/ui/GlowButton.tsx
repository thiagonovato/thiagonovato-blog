"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function GlowButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: GlowButtonProps) {
  const base =
    "relative inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-sm transition-all duration-300 cursor-pointer";
  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-light shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
    secondary:
      "border border-card-border text-foreground hover:border-accent/50 hover:text-accent",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
