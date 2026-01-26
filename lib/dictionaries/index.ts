import { en, type Dictionary } from "./en";
import { ar } from "./ar";

export type Locale = "en" | "ar";

export const dictionaries: Record<Locale, Dictionary> = {
    en,
    ar,
};

export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale] || dictionaries.en;
}

export type { Dictionary };
