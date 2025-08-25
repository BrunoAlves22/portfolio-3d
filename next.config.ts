import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://d33wubrfki0l68.cloudfront.net/**")],
  },
};

export default nextConfig;
