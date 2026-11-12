import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { profile, socials } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import { routing } from "@/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("Metadata");

  // Structured data so search engines understand who this page is about.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: `${siteUrl}/${locale}/`,
    image: `${siteUrl}${profile.heroImage}`,
    jobTitle: t("jobTitle"),
    description: t("description"),
    sameAs: socials.filter((s) => s.kind !== "mail").map((s) => s.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
