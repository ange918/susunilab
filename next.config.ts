import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["https://2dc3b1e3-8f8a-40f1-bca5-88b768048f3b-00-x0xbf4svq9y2.riker.replit.dev", "https://*.replit.dev"],
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
