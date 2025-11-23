import type { MetadataRoute } from "next";
import { PROJECTS } from "./_data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.nerom-ebs.gr";
  const languages = ["en", "el"];
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    "",
    "/services",
    "/contact",
    "/architecture",
    "/privacy",
  ];

  // Generate static page entries for both languages
  const staticEntries = languages.flatMap((lang) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1.0 : 0.8,
    }))
  );

  // Generate dynamic project page entries for both languages
  const projectEntries = languages.flatMap((lang) =>
    PROJECTS.map((project) => ({
      url: `${baseUrl}/${lang}/architecture/${project.id}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...projectEntries];
}
