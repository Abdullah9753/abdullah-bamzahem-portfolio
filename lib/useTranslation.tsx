"use client";

import { useState, useEffect, useCallback } from "react";
import { getDictionary, type Dictionary, type Locale } from "./dictionaries";

export function useTranslation() {
    const [locale, setLocale] = useState<Locale>("en");
    const [dictionary, setDictionary] = useState<Dictionary>(getDictionary("en"));

    // Initialize from localStorage and HTML lang attribute
    useEffect(() => {
        const storedLocale = localStorage.getItem("preferred-locale") as Locale | null;
        const htmlLocale = document.documentElement.lang as Locale;
        const initialLocale = storedLocale || htmlLocale || "en";

        setLocale(initialLocale);
        setDictionary(getDictionary(initialLocale));
    }, []);

    // Listen for language change events from LanguageSwitcher
    useEffect(() => {
        const handleLanguageChange = (event: CustomEvent<Locale>) => {
            const newLocale = event.detail;
            setLocale(newLocale);
            setDictionary(getDictionary(newLocale));
        };

        window.addEventListener("language-change", handleLanguageChange as EventListener);
        return () => {
            window.removeEventListener("language-change", handleLanguageChange as EventListener);
        };
    }, []);

    const t = useCallback(<T,>(accessor: (dict: Dictionary) => T): T => {
        return accessor(dictionary);
    }, [dictionary]);

    return { t, locale, dictionary };
}
