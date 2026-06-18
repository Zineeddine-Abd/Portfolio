/* ============================================================================
 *  EDIT EVERYTHING HERE
 *  ---------------------------------------------------------------------------
 *  This file is the single source of truth for the whole site: every piece of
 *  text, every link, and every image path lives here. You normally never need
 *  to touch the components.
 *
 *  To change an IMAGE you have two options:
 *    1. Keep the path and just replace the file in /public with the same name, OR
 *    2. Drop a new file in /public and update the path here.
 *  Real screenshots (PNG/JPG/WebP) work the same way — e.g. image: "/projects/ledgerline.png".
 *
 *  Placeholders to replace:
 *    • profile.name / role / email / location / hero / about / facts
 *    • profile.heroImage  + profile.aboutImage        (the hand-drawn figures)
 *    • socials[].href                                  (your real profiles)
 *    • projects[].image                                (preview screenshots)
 * ==========================================================================*/

export const profile = {
  name: "Zine Eddine Abdeladim",
  initials: "ZA",
  role: "Full-Stack Developer (AI & Data Engineering)",
  location: "Paris · Remote available",
  email: "abdeladimzineeddine@gmail.com",

  // Hand-drawn figures (in /public). Replace with your own illustration anytime.
  heroImage: "/hero-character.png",
  heroImageAlt: "Hand-drawn illustration of a developer",
  aboutImage: "/about-avatar.png",
  aboutImageAlt: "Hand-drawn portrait illustration",

  hero: {
    lead: "I'm Zine Eddine —",
    headline: "a developer who turns rough ideas into",
    // The annotated phrase gets a self-drawing underline.
    headlineAccent: "clean, shipped products.",
    sub: "Full-stack developer focused on AI and data engineering. I like the part where a sketch on paper becomes something people actually use.",
  },
  about: [
    "I am a 4th-year engineering student at ESIEA, majoring in Artificial Intelligence and Data Science.",
    "Passionate about AI with a solid background in software development. I have built several projects that enabled me to independently design and implement complex software solutions, while strengthening my skills in AI, data analysis, and processing.",
  ],
  facts: [
    { label: "Based in", value: "Paris (Remote Available)" },
    { label: "Focus", value: "AI & Data Engineering" },
    { label: "Currently", value: "4th-year Eng. Student at ESIEA" },
  ],
};

export type Social = {
  name: string;
  href: string;
  kind: "github" | "linkedin" | "mail";
};

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/Zineeddine-Abd", kind: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/zine-eddine-abdeladim-075b742b7/", kind: "linkedin" },
  { name: "Email", href: "mailto:abdeladimzineeddine@gmail.com", kind: "mail" },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  href: string;
  /** Preview image shown on the card. Replace with a real screenshot. */
  image: string;
  note?: string; // hand-written margin note (optional)
};

export const projects: Project[] = [
  {
    title: "Brekhtru",
    blurb: "A modern application showcasing advanced development capabilities.",
    tags: ["Project", "Development"],
    year: "2026",
    href: "https://github.com/Zineeddine-Abd/Brekhtru",
    image: "/project-placeholder.svg",
    note: "Latest build",
  },
  {
    title: "Paymo",
    blurb: "A payment management and transaction processing system developed in Python.",
    tags: ["Python", "Backend", "Data"],
    year: "2026",
    href: "https://github.com/Zineeddine-Abd/Paymo",
    image: "/project-placeholder.svg",
  },
  {
    title: "Atlas-Q1",
    blurb: "A comprehensive TypeScript project built with a focus on modern web development.",
    tags: ["TypeScript", "Web"],
    year: "2026",
    href: "https://github.com/Zineeddine-Abd/Atlas-Q1",
    image: "/project-placeholder.svg",
  },
  {
    title: "CoineX",
    blurb: "A data-driven application built with Python. Explores financial data processing and modeling.",
    tags: ["Python", "Data Engineering"],
    year: "2026",
    href: "https://github.com/Zineeddine-Abd/CoineX",
    image: "/project-placeholder.svg",
  },
  {
    title: "Relash",
    blurb: "A Java-based application highlighting object-oriented design and robust architecture.",
    tags: ["Java", "Software"],
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Relash",
    image: "/project-placeholder.svg",
  },
  {
    title: "Distro",
    blurb: "A Java application designed to explore distribution and system components.",
    tags: ["Java", "System"],
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Distro",
    image: "/project-placeholder.svg",
  },
  {
    title: "Skedu",
    blurb: "A scheduling and time management tool built using Python.",
    tags: ["Python", "Utility"],
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Skedu",
    image: "/project-placeholder.svg",
  },
  {
    title: "Moovi",
    blurb: "A movie and entertainment browsing web app leveraging JavaScript.",
    tags: ["JavaScript", "Web App"],
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Moovi",
    image: "/project-placeholder.svg",
  },
  {
    title: "Devix_Store",
    blurb: "An e-commerce storefront built with JavaScript for an interactive shopping experience.",
    tags: ["JavaScript", "E-commerce"],
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Devix_Store",
    image: "/project-placeholder.svg",
  },
  {
    title: "Qubit_Ai",
    blurb: "An AI-focused application designed to explore machine learning integrations and workflows.",
    tags: ["JavaScript", "AI", "Web"],
    year: "2025",
    href: "https://github.com/Zineeddine-Abd/Qubit_Ai",
    image: "/project-placeholder.svg",
  },
  {
    title: "Stockify",
    blurb: "IT Asset Management System Desktop App developed in Java.",
    tags: ["Java", "Desktop App"],
    year: "2024",
    href: "https://github.com/Zineeddine-Abd/Stockify",
    image: "/project-placeholder.svg",
  },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["C", "Python", "Java", "JavaScript", "SQL", "R"] },
  { group: "Frameworks", items: ["React.js", "Node.js", "Express.js", "Spring Boot"] },
  { group: "AI & Data", items: ["Prompt Engineering", "Machine Learning", "Pandas", "NumPy", "Matplotlib"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"] },
  { group: "DevOps & Tools", items: ["Linux", "Docker", "Git", "GitHub (CI/CD)", "svn", "IntelliJ", "Jupyter", "Postman"] },
];

export type Experience = {
  role: string;
  company: string;
  date: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "IT Intern",
    company: "Sonatrach",
    date: "July 2025 - August 2025",
    description: "Database administration - Internal network management - Team coordination - Project management.",
  },
  {
    role: "Designer & Content Creator",
    company: "TechTalksDz",
    date: "July 2024 - June 2025",
    description: "Educational content creation - Visual identity - Post design - Account management.",
  },
];

export type Education = {
  degree: string;
  school: string;
  date: string;
  description?: string;
};

export const education: Education[] = [
  {
    degree: "Computer Engineering, Major in AI and Data Science",
    school: "ESIEA - Paris, France",
    date: "September 2026",
  },
  {
    degree: "Bachelor's in Computer Science and Applications",
    school: "Université Paris Cité - Paris, France",
    date: "September 2025 - Present",
    description: "Ranked 9th in the cohort in semester 5.",
  },
  {
    degree: "State Engineer in Computer Science, Software Engineering",
    school: "Université Abdelhamid Mehri Constantine 2 - Algeria",
    date: "September 2022 - June 2025",
    description: "Ranked in the top 10 of the cohort during each of the 3 years.",
  },
];
