import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
  image?: string;
  updatedAt?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTime: string;
  wordCount: number;
}

function getPostsDir(locale: string): string {
  return path.join(CONTENT_DIR, locale);
}

export function getAllPosts(locale: string = "en"): Post[] {
  const postsDir = getPostsDir(locale);
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, ""), locale))
    .filter((post): post is Post => post !== null && post.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

  return posts;
}

export function getPostBySlug(slug: string, locale: string = "en"): Post | null {
  const filePath = path.join(getPostsDir(locale), `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: stats.text,
    wordCount: stats.words,
  };
}

export function getAllTags(locale: string = "en"): string[] {
  const posts = getAllPosts(locale);
  const tagsSet = new Set<string>();
  posts.forEach((post) => post.frontmatter.tags.forEach((tag) => tagsSet.add(tag)));
  return Array.from(tagsSet).sort();
}

export function getPostsByTag(tag: string, locale: string = "en"): Post[] {
  return getAllPosts(locale).filter((post) =>
    post.frontmatter.tags.includes(tag)
  );
}

export function getAdjacentPosts(slug: string, locale: string = "en") {
  const posts = getAllPosts(locale);
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
