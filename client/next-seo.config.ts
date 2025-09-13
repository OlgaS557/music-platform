"use client";
import type { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Music Platform",
  description: "A platform to explore and enjoy music tracks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000",
    siteName: "Music Platform",
  },
  twitter: {
    handle: "@music_platform",
    site: "@music_platform",
    cardType: "summary_large_image",
  },
};

export default config;