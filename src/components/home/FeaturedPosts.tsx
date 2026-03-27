"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { GradientText } from "@/components/ui/GradientText";

interface PostPreview {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export function FeaturedPosts({ posts }: { posts: PostPreview[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex items-end justify-between"
      >
        <div>
          <GradientText as="h2" className="text-3xl font-bold sm:text-4xl">
            Últimos Posts
          </GradientText>
          <p className="mt-2 text-muted">
            Reflexões sobre código, carreira e tecnologia.
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden items-center gap-1 text-sm text-accent transition-colors hover:text-accent-light sm:flex"
        >
          Ver todos <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <TiltCard className="flex h-full flex-col p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {post.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>
              </TiltCard>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-accent"
        >
          Ver todos os posts <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
