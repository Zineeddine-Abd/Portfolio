import type { Metadata } from "next";
import { profile } from "@/lib/content";

// Layout for the bare address ("/"), which only forwards to a language.
export const metadata: Metadata = {
  title: profile.name,
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
