import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              {/* <Image
                className="rounded-xl shadow-2xl border border-gray-700"
                src={TestimonialImg}
                width={200}
                height={200}
                alt="Live Demo"
              /> */}
            </div>
            <p className="text-2xl font-bold font-serif text-luxury-gold mt-4">
              استكشف قدراتنا مع النموذج الحي لمتجر <span className="text-muted-gold">Lumina</span>.
              جرب السرعة والأناقة.
            </p>
            <div className="pt-4">
              <a
                className="btn bg-luxury-gold text-night-blue hover:bg-gold-600 shadow-lg"
                href="https://lumina-demo-commerce.vercel.app/"
                target="_blank"
              >
                شاهد النموذج الحي (Lumina Store)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
