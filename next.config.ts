/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
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
