import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     // локальная разработка
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       port: "5000",
  //       pathname: "/image/**",
  //     },

  //     // production (Render)
  //     {
  //       protocol: "https",
  //       hostname: "music-platform-ys1b.onrender.com",
  //       pathname: "/image/**",
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;