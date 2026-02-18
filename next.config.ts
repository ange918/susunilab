import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["https://*.replit.dev", "https://*.repl.co", "https://*.replit.app"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
