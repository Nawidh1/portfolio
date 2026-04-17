import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const publicRoutes = ["/", "/projects/1", "/projects/3"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
