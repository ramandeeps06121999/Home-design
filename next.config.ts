import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    qualities: [75, 85, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  trailingSlash: true,
  allowedDevOrigins: ['http://10.0.0.220:3000'],
};

export default nextConfig;
