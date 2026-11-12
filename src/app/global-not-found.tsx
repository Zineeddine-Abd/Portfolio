import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { basePath } from "@/lib/site";

// The 404 page for the whole site (exported as 404.html, which GitHub Pages
// serves for any unknown address). It cannot know the visitor's language, so
// it speaks both.
export const metadata: Metadata = {
  title: "404 — Zine Eddine Abdeladim",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <main className="grid flex-1 place-items-center px-6 py-32 text-center">
          <div>
            <p className="font-hand text-7xl leading-none text-accent">404</p>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              This page is still a sketch.
            </h1>
            <p lang="fr" className="mt-2 font-display text-xl text-pencil">
              Cette page n&apos;est encore qu&apos;un croquis.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`${basePath}/en/`}
                className="sketch-a inline-flex border-[1.5px] border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-pencil"
              >
                Back to the portfolio
              </a>
              <a
                href={`${basePath}/fr/`}
                lang="fr"
                className="sketch-b inline-flex border-[1.5px] border-ink/80 px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink/5"
              >
                Retour au portfolio
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
