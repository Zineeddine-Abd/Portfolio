import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { SketchDefs } from "@/components/SketchDefs";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — Developer Portfolio",
  description:
    "Developer portfolio — projects, skills, and profile, drawn by hand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <SketchDefs />
        {children}
      </body>
    </html>
  );
}
