"use client";

import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import { useTranslation } from "@/lib/useTranslation";

export default function Cta() {
  const { dictionary } = useTranslation();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-night-blue"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-luxury-gold blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 text-3xl font-bold font-serif text-luxury-gold md:mb-12 md:text-4xl">
              {dictionary.cta.title}
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-luxury-gold to-gold-500 bg-[length:100%_100%] bg-[bottom] text-night-blue shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="mailto:dev.abdullah.bamzahem@gmail.com?subject=New%20Headless%20Project%20Inquiry&body=Hi%20Abdullah%2C%20I%20saw%20your%20Zahra%20Store%20case%20study..."
              >
                <span className="relative inline-flex items-center">
                  {dictionary.cta.button}{" "}
                  <span className="ms-1 tracking-normal text-gold-300 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
