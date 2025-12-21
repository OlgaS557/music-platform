import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // локальная разработка
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/image/**",
      },

      // production (Render)
      {
        protocol: "https",
        hostname: "*.onrender.com",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;