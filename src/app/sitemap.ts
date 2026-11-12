import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { routing } from "@/routing";

// Required for a static export: generate the file once, at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${siteUrl}/${locale}/`])
  );

  return routing.locales.map((locale) => ({
    url: `${siteUrl}/${locale}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
