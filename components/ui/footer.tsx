"use client";

import Link from "next/link";
import Logo from "./logo";
import { useTranslation } from "@/lib/useTranslation";

export default function Footer({ border = false }: { border?: boolean }) {
  const currentYear = new Date().getFullYear();
  const { dictionary } = useTranslation();

  return (
    <footer className="bg-night-blue text-luxury-gold">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t border-luxury-gold/20" : ""
            }`}
        >
          {/* 1st block: Logo and Copyright */}
          <div className="space-y-4 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-muted-gold leading-relaxed">
              &copy; {currentYear} BAMZAHEM Digital<br />
              <span className="text-xs opacity-70">dev.abdullah.bamzahem@gmail.com</span>
            </div>
          </div>

          {/* 2nd block: Services */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-gold">
              {dictionary.footer.services}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-muted-gold transition hover:text-white" href="#features">
                  {dictionary.footer.headlessShopify}
                </Link>
              </li>
              <li>
                <Link className="text-muted-gold transition hover:text-white" href="#0">
                  {dictionary.footer.speedOptimization}
                </Link>
              </li>
              <li>
                <Link className="text-muted-gold transition hover:text-white" href="#0">
                  {dictionary.footer.customUiUx}
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block: Showroom */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-gold">
              {dictionary.footer.showroom}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-muted-gold transition hover:text-white" href="https://zahra-store-alpha.vercel.app/" target="_blank">
                  {dictionary.footer.zahraDemo}
                </Link>
              </li>
              <li>
                <Link className="text-muted-gold transition hover:text-white" href="#pricing">
                  {dictionary.footer.pricingPlans}
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block: Contact */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-gold">
              {dictionary.footer.contact}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-muted-gold transition hover:text-white" href="https://wa.me/9665XXXXXXXX">
                  {dictionary.footer.whatsapp}
                </Link>
              </li>
              <li>
                <Link className="text-muted-gold transition hover:text-white" href="mailto:dev.abdullah.bamzahem@gmail.com">
                  {dictionary.footer.emailMe}
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block: Social */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-gold">
              {dictionary.footer.social}
            </h3>
            <ul className="flex gap-2">
              <li>
                <Link
                  className="flex items-center justify-center text-luxury-gold transition hover:scale-110 hover:text-white"
                  href="https://github.com/YourUsername"
                  aria-label="Github"
                >
                  <svg className="h-7 w-7 fill-current" viewBox="0 0 32 32">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big Decorative Text */}
      <div className="relative -mt-16 h-60 w-full overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[220px] font-black leading-none opacity-10 select-none uppercase tracking-tighter">
          BAMZAHEM
        </div>
        {/* Glow Effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden="true">
          <div className="h-56 w-56 rounded-full bg-luxury-gold/20 blur-[100px]"></div>
        </div>
      </div>
    </footer>
  );
}