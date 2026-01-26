"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import { useTranslation } from "@/lib/useTranslation";

export default function HeroHome() {
  const { dictionary } = useTranslation();

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6"
              data-aos="zoom-y-out"
            >
              {/*  */}
            </div>
            <h1
              className="mb-6 text-5xl font-bold font-serif md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {dictionary.hero.title} <br className="max-lg:hidden" />
              {dictionary.hero.titleLine2}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-400"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {dictionary.hero.description}
              </p>
              <p
                className="mb-8 text-lg text-muted-gold"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Next.js | Headless Shopify
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-luxury-gold to-gold-500 bg-[length:100%_100%] bg-[bottom] text-night-blue shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="mailto:dev.abdullah.bamzahem@gmail.com?subject=New%20Headless%20Project%20Inquiry&body=Hi%20Abdullah%2C%20I%20saw%20your%20Zahra%20Store%20case%20study..."
                  >
                    <span className="relative inline-flex items-center">
                      {dictionary.hero.cta}{" "}
                      <span className="ms-1 tracking-normal text-gold-300 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
            dir="ltr"
          >
            <div className="relative aspect-video rounded-2xl bg-night-blue px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 after:absolute after:-inset-5 after:-z-10">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-muted-gold)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  dev.abdullah.bamzahem@gmail.com
                </span>
              </div>
              <div className="font-mono text-gray-600 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-600">
                  BAMZAHEM Digital --build-store --brand ZAHRA
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  shopify-sync --fetch-data --secure
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  Performance: 100/100 | Status: Luxury Optimized
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  seo-audit --optimize --rank-top-1
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-600">
                  deploy --to-vercel --live
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Store successfully launched.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
