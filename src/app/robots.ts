import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/",
    },
    sitemap: "https://portfolio-brunoalves.netlify.app/sitemap.xml",
    host: "https://portfolio-brunoalves.netlify.app/",
  };
}
