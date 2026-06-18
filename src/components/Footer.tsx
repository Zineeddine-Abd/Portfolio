import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full bg-ink/15" />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-sm text-faint sm:flex-row">
          <p>
            © {year} {profile.name}
          </p>
          <p className="font-hand text-base">drawn by hand · built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
