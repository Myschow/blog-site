import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for deployment
  experimental: {
    optimizePackageImports: ["@tailwindcss/postcss"],
  },

  // Enable standalone output for containerized deployments
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
