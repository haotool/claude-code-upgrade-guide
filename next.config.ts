
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Optimized for Vercel static output if needed, but default 'nodejs' (hybrid) is best for most cases
  // images: {
  //   domains: [], 
  // },
};

export default nextConfig;
