import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE } from "@/lib/constants";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/blog", "/about", "/contact"];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    routing.locales.map((locale) => {
      const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
      return {
        url: `${SITE.url}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : page === "/blog" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page === "/blog" ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => {
              const p = l === routing.defaultLocale ? "" : `/${l}`;
              return [l, `${SITE.url}${p}${page}`];
            })
          ),
        },
      };
    })
  );

  const blogEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) => {
    const posts = getAllPosts(locale);
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    return posts.map((post) => ({
      url: `${SITE.url}${prefix}/blog/${post.slug}`,
      lastModified: new Date(post.frontmatter.updatedAt || post.frontmatter.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  });

  return [...staticEntries, ...blogEntries];
}
