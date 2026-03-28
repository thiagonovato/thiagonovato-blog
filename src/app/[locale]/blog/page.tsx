import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PostList } from "@/components/blog/PostList";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { GradientText } from "@/components/ui/GradientText";
import { generatePageMetadata } from "@/lib/seo";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { SITE } from "@/lib/constants";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return generatePageMetadata(t("title"), t("metaDescription"), "/blog", locale);
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const posts = getAllPosts(locale);
  const allTags = getAllTags(locale);

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
          description: t("collectionDescription"),
          url: `${SITE.url}/blog`,
        }}
      />

      <Breadcrumbs items={[{ label: tNav("home"), href: "/" }, { label: tNav("blog") }]} />

      <div className="mt-8 mb-10">
        <GradientText as="h1" className="text-4xl font-bold sm:text-5xl">
          {t("title")}
        </GradientText>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          {t("subtitle")}
        </p>
      </div>

      <PostList posts={postData} allTags={allTags} />
    </div>
  );
}
