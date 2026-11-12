/**
 * Compile-time guard: every language file must have exactly the same shape as
 * messages/en.json. If a key is missing or extra in fr.json, `next build` (and
 * your editor) reports an error on the line below — so a forgotten translation
 * can never reach production as a blank spot.
 *
 * Type-only: nothing here ships to the browser.
 */
import type en from "../messages/en.json";
import type fr from "../messages/fr.json";

type SameShape<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

export const frMatchesEn: SameShape<typeof fr, typeof en> = true;
