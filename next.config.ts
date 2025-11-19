import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aixabrand.blob.core.windows.net",
        port: "",
        pathname: "/aixa-logos/**",
      },
    ],
  },
};

export default nextConfig;
