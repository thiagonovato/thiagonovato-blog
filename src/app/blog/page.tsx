import type { Metadata } from "next";
import { PostList } from "@/components/blog/PostList";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GradientText } from "@/components/ui/GradientText";
import { generatePageMetadata } from "@/lib/seo";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata(
  "Blog",
  "Artigos sobre engenharia de software, carreira tech, React, Python, data engineering e crescimento profissional. Por Thiago Novato.",
  "/blog"
);

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  const postData = posts.map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    date: p.frontmatter.date,
    readingTime: p.readingTime,
    tags: p.frontmatter.tags,
  }));

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Blog - ${SITE.name}`,
          description: "Artigos sobre engenharia de software, carreira tech e crescimento profissional",
          url: `${SITE.url}/blog`,
        }}
      />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <div className="mt-8 mb-10">
        <GradientText as="h1" className="text-4xl font-bold sm:text-5xl">
          Blog
        </GradientText>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Reflexões, aprendizados e insights de 20 anos construindo software.
        </p>
      </div>

      <PostList posts={postData} allTags={allTags} />
    </div>
  );
}
