import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TechStack } from "@/components/home/TechStack";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema, webSiteSchema } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  const featuredPosts = posts.map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    date: p.frontmatter.date,
    readingTime: p.readingTime,
    tags: p.frontmatter.tags,
  }));

  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={webSiteSchema()} />
      <HeroSection />
      <FeaturedPosts posts={featuredPosts} />
      <AboutPreview />
      <TechStack />
    </>
  );
}
