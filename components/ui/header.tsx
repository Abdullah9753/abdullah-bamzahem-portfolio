"use client";

import Link from "next/link";
import Logo from "./logo";
import LanguageSwitcher from "./language-switcher";
import { useTranslation } from "@/lib/useTranslation";

export default function Header() {
  const { dictionary } = useTranslation();

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-night-blue/90 px-3 shadow-lg shadow-black/[0.2] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-luxury-gold/20 before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <LanguageSwitcher />
            </li>
            <li className="h-4 w-px bg-luxury-gold/20" aria-hidden="true" />
            <li>
              <Link
                href="https://wa.me/YOUR_NUMBER"
                className="btn-sm bg-luxury-gold text-night-blue shadow-sm hover:bg-gold-600"
              >
                {dictionary.header.cta}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
