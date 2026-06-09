import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const publicRoutes = [
  "/",
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/contact",
  "/projects/1",
  "/projects/3",
  "/projects/4",
  "/projects/5",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
