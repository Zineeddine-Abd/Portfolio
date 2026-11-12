import { Space_Grotesk, Inter, Caveat } from "next/font/google";

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

/** Class names that expose the three typefaces as CSS variables. */
export const fontVariables = `${spaceGrotesk.variable} ${inter.variable} ${caveat.variable}`;
