/* ============================================================================
 *  SITE DATA — everything that is the same in every language.
 *  ---------------------------------------------------------------------------
 *  Where things live:
 *
 *    • Text shown on the page (titles, descriptions, labels)
 *        → messages/en.json and messages/fr.json   (keep both in sync —
 *          the build fails if their shapes differ, see src/messages.check.ts)
 *
 *    • Your name, email, links, image paths and the project list
 *        → this file
 *
 *  To add a project:
 *    1. add an entry to `projects` below (pick a short `id`)
 *    2. add its text under "Projects" → "items" → same id, in BOTH message files
 *    3. drop a preview in /public/projects/<id>.svg — or a real screenshot
 *       (PNG/JPG/WebP) and point `image` at it
 * ==========================================================================*/

import type { Messages } from "next-intl";

export const profile = {
  name: "Zine Eddine Abdeladim",
  initials: "ZA",
  email: "abdeladimzineeddine@gmail.com",

  // Hand-drawn figures (in /public). Replace the files or change the paths.
  heroImage: "/hero-character.png",
  aboutImage: "/about-avatar.png",
  contactImage: "/pc-avatar.png",

  // Put a PDF in /public (e.g. "/cv.pdf") and a "Download CV" button appears
  // in the hero. Leave empty to hide it.
  cvUrl: "",
};

export type Social = {
  name: string;
  href: string;
  kind: "github" | "linkedin" | "mail";
};

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/Zineeddine-Abd", kind: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zine-eddine-abdeladim-075b742b7/",
    kind: "linkedin",
  },
  { name: "Email", href: `mailto:${profile.email}`, kind: "mail" },
];

/** Page sections, in the order they appear. Drives the nav and scroll-spy. */
export const sections = ["about", "work", "journey", "skills", "contact"] as const;
export type SectionId = (typeof sections)[number];

export type ProjectId = keyof Messages["Projects"]["items"];

export type Project = {
  /** Must match a key under "Projects.items" in the message files. */
  id: ProjectId;
  title: string;
  year: string;
  /** Source code. */
  href: string;
  /** Live version, when there is one. */
  demo?: string;
  /** Card preview: a sketch (SVG) or a real screenshot. */
  image: string;
};

export const projects: Project[] = [
  {
    id: "brekhtru",
    title: "Brekhtru",
    year: "2026",
    href: "https://github.com/Zineeddine-Abd/Brekhtru",
    image: "/projects/brekhtru.svg",
  },
  {
    id: "paymo",
    title: "Paymo",
    year: "2026",
    href: "https://github.com/Zineeddine-Abd/Paymo",
    image: "/projects/paymo.svg",
  },
  {
    id: "atlas",
    title: "Atlas-Q1",
    year: "2026",
    href: "https://github.com/Zineeddine-Abd/Atlas-Q1",
    demo: "https://atlas-q1.vercel.app",
    image: "/projects/atlas.svg",
  },
  {
    id: "coinex",
    title: "CoineX",
    year: "2026",
    href: "https://github.com/Zineeddine-Abd/CoineX",
    image: "/projects/coinex.svg",
  },
  {
    id: "relash",
    title: "Relash",
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Relash",
    image: "/projects/relash.svg",
  },
  {
    id: "distro",
    title: "Distro",
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Distro",
    image: "/projects/distro.svg",
  },
  {
    id: "skedu",
    title: "Skedu",
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Skedu",
    image: "/projects/skedu.svg",
  },
  {
    id: "moovi",
    title: "Moovi",
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Moovi",
    image: "/projects/moovi.svg",
  },
  {
    id: "devix",
    title: "Devix Store",
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Devix_Store",
    image: "/projects/devix.svg",
  },
  {
    id: "qubit",
    title: "Qubit AI",
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Qubit_Ai",
    image: "/projects/qubit.svg",
  },
  {
    id: "stockify",
    title: "Stockify",
    year: "2024",
    href: "https://github.com/Zineeddine-Abd/Stockify",
    image: "/projects/stockify.svg",
  },
];
