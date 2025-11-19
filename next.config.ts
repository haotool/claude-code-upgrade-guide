import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Turbopack configuration
  turbopack: {},
  // Optimize JavaScript output
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Performance optimizations
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: true, // Enable CSS optimization
  },
  // Headers for better performance and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/og-image.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.{svg,ico}",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
