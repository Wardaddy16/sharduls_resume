import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // static HTML export for GitHub Pages
  trailingSlash: true,    // ensures GitHub Pages serves paths correctly
  images: {
    unoptimized: true,    // required for static export (no Next.js image server)
  },

  basePath: "/sharduls_resume",
  assetPrefix: "/sharduls_resume/",
};

export default nextConfig;
