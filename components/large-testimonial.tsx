"use client";

import { useTranslation } from "@/lib/useTranslation";

export default function LargeTestimonial() {
  const { dictionary } = useTranslation();

  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              {/* Image placeholder */}
            </div>
            <p className="text-2xl font-bold font-serif text-luxury-gold mt-4">
              {dictionary.testimonial.description}{" "}
              <span className="text-muted-gold">{dictionary.testimonial.storeName}</span>.{" "}
              {dictionary.testimonial.descriptionLine2}
            </p>
            <div className="pt-4">
              <a
                className="btn bg-luxury-gold text-night-blue hover:bg-gold-600 shadow-lg"
                href="https://zahra-store-alpha.vercel.app/"
                target="_blank"
              >
                {dictionary.testimonial.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
