"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/lib/dictionaries";

interface LanguageSwitcherProps {
    className?: string;
}

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
    const [currentLocale, setCurrentLocale] = useState<Locale>("en");

    // Initialize from localStorage or HTML lang
    useEffect(() => {
        const storedLocale = localStorage.getItem("preferred-locale") as Locale | null;
        const htmlLocale = document.documentElement.lang as Locale;
        setCurrentLocale(storedLocale || htmlLocale || "en");
    }, []);

    const switchLanguage = useCallback((newLocale: Locale) => {
        // Update HTML attributes
        document.documentElement.lang = newLocale;
        document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";

        // Store preference
        localStorage.setItem("preferred-locale", newLocale);

        // Update local state
        setCurrentLocale(newLocale);

        // Dispatch custom event for translation hook
        window.dispatchEvent(new CustomEvent("language-change", { detail: newLocale }));
    }, []);

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            <button
                onClick={() => switchLanguage("en")}
                className={`px-2 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-luxury-gold/50 rounded ${currentLocale === "en"
                        ? "text-luxury-gold"
                        : "text-luxury-gold/50 hover:text-luxury-gold"
                    }`}
                aria-label="Switch to English"
            >
                EN
            </button>
            <span className="text-luxury-gold/30">|</span>
            <button
                onClick={() => switchLanguage("ar")}
                className={`px-2 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-luxury-gold/50 rounded ${currentLocale === "ar"
                        ? "text-luxury-gold"
                        : "text-luxury-gold/50 hover:text-luxury-gold"
                    }`}
                aria-label="التبديل إلى العربية"
            >
                AR
            </button>
        </div>
    );
}
