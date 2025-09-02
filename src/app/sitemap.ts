import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-brunoalves.netlify.app/",
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
