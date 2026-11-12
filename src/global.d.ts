import type { routing } from "@/routing";
import type messages from "../messages/en.json";

// Gives `useTranslations`, `useMessages`, `useLocale`… full type-safety:
// message keys autocomplete and a typo is a compile error.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
