import { MetadataRoute } from "next";
import { SITE_METADATA } from "@/lib/constants";
import { projects } from "@/data/projects";

/**
 * Actual content update date for the redesign — not `new Date()`, so
 * crawlers are not told the site changes on every build.
 */
const LAST_MODIFIED = new Date("2026-09-05");

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `${SITE_METADATA.url}/projects/${project.id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_METADATA.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
