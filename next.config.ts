import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for deployment
  experimental: {
    optimizePackageImports: ["@tailwindcss/postcss"],
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
