import type { MetadataRoute } from "next";
import { projects } from "@/data/content";
import { siteUrl } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/research",
  "/education",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  return [
    ...routes.map((route) => ({
      url: new URL(route, siteUrl).toString(),
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteUrl).toString(),
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
