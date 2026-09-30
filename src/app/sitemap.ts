import { MetadataRoute } from "next";
import { SERVICE_IDS } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://puraqua-cahul.vercel.app";
  const locale = "ru";
  const pages = ["", "/services", "/portfolio", "/about", "/contact"];

  const staticPages = pages.map((page) => ({
    url: `${base}/${locale}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));

  const servicePages = SERVICE_IDS.map((slug) => ({
    url: `${base}/${locale}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}
