import type { Metadata } from "next";
import { SITE } from "./constants";
import type { Post } from "./posts";

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = "",
  image?: string
): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image || `${SITE.url}/og/default.png`;

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${SITE.name}`,
      description,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export function generatePostMetadata(post: Post): Metadata {
  const url = `${SITE.url}/blog/${post.slug}`;
  const ogImage = `${SITE.url}/og/${post.slug}.png`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      siteName: SITE.name,
      locale: SITE.locale,
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.updatedAt || post.frontmatter.date,
      authors: [SITE.author.name],
      tags: post.frontmatter.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.frontmatter.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.author.name,
    jobTitle: SITE.author.jobTitle,
    url: SITE.url,
    email: SITE.author.email,
    description: SITE.author.bio,
    sameAs: [SITE.social.linkedin, SITE.social.github],
    knowsAbout: [
      "React", "Node.js", "Python", "TypeScript", "Machine Learning",
      "BigQuery", "Software Architecture", "Full-Stack Development",
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    author: { "@type": "Person", name: SITE.author.name },
  };
}

export function blogPostingSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updatedAt || post.frontmatter.date,
    author: {
      "@type": "Person",
      name: SITE.author.name,
      url: SITE.url,
    },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
    wordCount: post.wordCount,
    keywords: post.frontmatter.tags.join(", "),
    image: post.frontmatter.image || `${SITE.url}/og/${post.slug}.png`,
  };
}

export function breadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}
