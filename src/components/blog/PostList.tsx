"use client";

import { useState } from "react";
import { PostCard } from "./PostCard";

interface PostData {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export function PostList({
  posts,
  allTags,
}: {
  posts: PostData[];
  allTags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((post) => {
    const matchesTag = !activeTag || post.tags.includes(activeTag);
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div>
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Buscar posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-card-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-accent/50"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-3 py-1 font-mono text-xs transition-colors ${
              !activeTag
                ? "bg-accent text-background"
                : "border border-card-border text-muted hover:text-foreground"
            }`}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`rounded-full px-3 py-1 font-mono text-xs transition-colors ${
                activeTag === tag
                  ? "bg-accent text-background"
                  : "border border-card-border text-muted hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-lg text-muted">Nenhum post encontrado.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <PostCard key={post.slug} {...post} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
