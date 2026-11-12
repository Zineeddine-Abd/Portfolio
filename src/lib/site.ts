/**
 * Where the site lives. Both values are set by the deploy workflow
 * (.github/workflows/deploy.yml); locally they fall back to localhost at "/".
 *
 *   NEXT_PUBLIC_SITE_URL   e.g. https://zineeddine-abd.github.io
 *   NEXT_PUBLIC_BASE_PATH  e.g. /Portfolio   (empty with a custom domain)
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Full public address, without a trailing slash. */
export const siteUrl = `${origin}${basePath}`;

/**
 * Path to a file in /public. Plain <img>/<a> tags and string `src` values do
 * not get the base path added automatically, so every such path goes through
 * here.
 */
export const asset = (path: string) => `${basePath}${path}`;
