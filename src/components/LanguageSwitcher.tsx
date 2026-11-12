"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/routing";

export function LanguageSwitcher() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isEn = locale === "en";

  const toggleLocale = () => {
    // Keep the reader exactly where they are: same section, same scroll.
    router.replace(`${pathname}${window.location.hash}`, {
      locale: isEn ? "fr" : "en",
      scroll: false,
    });
  };

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t("switchLanguage")}
      title={t("switchLanguage")}
      className="relative ml-2 flex h-8 w-[60px] cursor-pointer items-center rounded-full border-[1.5px] border-ink/20 bg-paper px-1 transition-colors hover:border-ink/50"
    >
      {/* Background labels */}
      <span className="absolute left-2.5 text-[10px] font-bold tracking-wider text-ink/40">EN</span>
      <span className="absolute right-2.5 text-[10px] font-bold tracking-wider text-ink/40">FR</span>

      {/* Thumb */}
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ink shadow-sm transition-transform duration-300 ease-in-out ${
          isEn ? "translate-x-0" : "translate-x-[25px]"
        }`}
      >
        <span className="text-[10px] font-bold tracking-wider text-paper">
          {isEn ? "EN" : "FR"}
        </span>
      </span>
    </button>
  );
}
