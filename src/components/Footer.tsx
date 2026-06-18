import { profile } from "@/lib/content";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full bg-ink/15" />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-sm text-faint sm:flex-row">
          <p>
            © {year} {t("copyright")}
          </p>
          <p className="font-hand text-base">{t("signature")}</p>
        </div>
      </div>
    </footer>
  );
}
