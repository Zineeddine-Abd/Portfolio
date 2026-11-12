import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

const nextConfig: NextConfig = {
  // `next build` writes plain static files to ./out — exactly what GitHub
  // Pages serves. No server needed.
  output: "export",

  // GitHub Pages serves a project site from /<repo-name>. The deploy workflow
  // sets this to "/Portfolio"; locally it is empty so the site lives at "/".
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,

  // /en/ → out/en/index.html, which every static host understands.
  trailingSlash: true,

  // There is no image server on a static host.
  images: { unoptimized: true },

  // One branded 404 page for the whole site (src/app/global-not-found.tsx).
  experimental: { globalNotFound: true },
};

export default withNextIntl(nextConfig);
