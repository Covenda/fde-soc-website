import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/mdx";
import { getAllCaseStudySlugs } from "@/lib/case-studies";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://covenda.ai";

  // Static pages
  const staticPages = [
    "",
    "/services",
    "/services/fde",
    "/services/ai-soc",
    "/pricing/services",
    "/about",
    "/contact",
    "/customers/case-studies",
    "/blog",
    "/legal/privacy",
    "/legal/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts
  const posts = await getBlogPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Case studies
  const caseSlugs = await getAllCaseStudySlugs();
  const casePages = caseSlugs.map((slug) => ({
    url: `${baseUrl}/customers/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages, ...casePages];
}
