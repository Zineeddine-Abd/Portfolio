"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  const isEn = locale === 'en';

  return (
    <button
      onClick={toggleLocale}
      className="relative ml-2 flex h-8 w-[60px] cursor-pointer items-center rounded-full border-[1.5px] border-ink/20 bg-paper px-1 transition-all hover:border-ink/50 focus:outline-none"
      aria-label="Switch Language"
      title={`Switch to ${isEn ? 'French' : 'English'}`}
    >
      {/* Background labels */}
      <span className="absolute left-2.5 text-[10px] font-bold tracking-wider text-ink/40">EN</span>
      <span className="absolute right-2.5 text-[10px] font-bold tracking-wider text-ink/40">FR</span>

      {/* Thumb */}
      <div
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-ink shadow-sm transition-transform duration-300 ease-in-out ${
          isEn ? 'translate-x-0' : 'translate-x-[25px]'
        }`}
      >
        <span className="text-[10px] font-bold tracking-wider text-paper">
          {isEn ? 'EN' : 'FR'}
        </span>
      </div>
    </button>
  );
}
