import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { fontVariables } from "../fonts";
import { SketchDefs } from "@/components/SketchDefs";
import { profile } from "@/lib/content";
import { siteUrl } from "@/lib/site";
import { routing } from "@/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Pre-render one static page per language at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");
  const url = `${siteUrl}/${locale}/`;
  // Share preview (LinkedIn, WhatsApp, X…): one static image per language.
  const image = `${siteUrl}/og-${locale}.png`;

  return {
    metadataBase: new URL(`${siteUrl}/`),
    title,
    description,
    authors: [{ name: profile.name }],
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en/`,
        fr: `${siteUrl}/fr/`,
        "x-default": `${siteUrl}/en/`,
      },
    },
    openGraph: {
      type: "profile",
      url,
      siteName: profile.name,
      title,
      description,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: t("ogAlt") }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // Lets next-intl render this route statically.
  setRequestLocale(locale);
  const t = await getTranslations("Navigation");

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${fontVariables} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-paper font-sans text-ink selection:bg-accent/30 selection:text-ink"
      >
        {/* Without JavaScript nothing triggers the reveals: show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.ink-underline{background-size:100% .34em!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sketch-a fixed left-4 top-4 z-[100] -translate-y-24 bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform focus:translate-y-0"
        >
          {t("skip")}
        </a>
        <NextIntlClientProvider>
          <SketchDefs />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
