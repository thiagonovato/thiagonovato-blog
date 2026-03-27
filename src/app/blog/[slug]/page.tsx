import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllPosts, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import { generatePostMetadata, blogPostingSchema, breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { mdxComponents } from "@/components/blog/MDXComponents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generatePostMetadata(post);
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Blog", url: `${SITE.url}/blog` },
          { name: post.frontmatter.title },
        ])}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.frontmatter.title },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 gap-12 xl:grid-cols-[1fr_220px]">
          <article className="min-w-0">
            <header className="mb-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag}`}
                    className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent transition-colors hover:bg-accent/20"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                {post.frontmatter.title}
              </h1>

              <p className="mt-4 text-lg text-muted">
                {post.frontmatter.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.frontmatter.date}>
                    {new Date(post.frontmatter.date).toLocaleDateString(
                      "pt-BR",
                      { day: "2-digit", month: "long", year: "numeric" }
                    )}
                  </time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <Share2 className="h-4 w-4" />
                  {post.wordCount} palavras
                </span>
              </div>

              <hr className="mt-8 border-card-border" />
            </header>

            <div className="prose prose-invert max-w-none">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: "wrap" }],
                      [rehypePrettyCode, { theme: "github-dark-default", keepBackground: true }],
                    ],
                  },
                }}
              />
            </div>

            <hr className="my-10 border-card-border" />

            <nav className="grid gap-4 sm:grid-cols-2">
              {prev && (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-card-border p-4 transition-colors hover:border-accent/30 hover:bg-card"
                >
                  <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  <div>
                    <p className="text-xs text-muted">Post anterior</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {prev.frontmatter.title}
                    </p>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group flex items-start justify-end gap-3 rounded-xl border border-card-border p-4 text-right transition-colors hover:border-accent/30 hover:bg-card sm:col-start-2"
                >
                  <div>
                    <p className="text-xs text-muted">Próximo post</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {next.frontmatter.title}
                    </p>
                  </div>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                </Link>
              )}
            </nav>
          </article>

          <aside>
            <TableOfContents />
          </aside>
        </div>
      </div>
    </>
  );
}
