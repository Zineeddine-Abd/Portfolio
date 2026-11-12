import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    // Bottom padding keeps the last line clear of the back-to-top button.
    <footer className="px-6 pb-20">
      <div className="mx-auto max-w-6xl">
        {/* A ruled line, drawn by hand */}
        <svg
          viewBox="0 0 1200 8"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
          className="h-2 w-full text-ink/25"
        >
          <path
            d="M2 4c150-2.500 290 2 440 .5s300-2.500 450-.5 200 1.500 306-.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="mt-5 flex flex-col items-center justify-between gap-2 text-sm text-faint sm:flex-row">
          <p>
            © {year} {t("copyright")}
          </p>
          <p className="font-hand text-base">{t("signature")}</p>
        </div>
      </div>
    </footer>
  );
}
