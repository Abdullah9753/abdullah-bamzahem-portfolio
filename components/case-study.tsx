"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export default function CaseStudy() {
    const { dictionary } = useTranslation();

    const solutions = [
        dictionary.caseStudy.solution.ssrParams,
        dictionary.caseStudy.solution.impact,
        dictionary.caseStudy.solution.design,
        dictionary.caseStudy.solution.performance,
        dictionary.caseStudy.solution.smartSearch,
    ];

    const renderWithBoldPrefix = (text: string) => {
        const parts = text.split(":");
        if (parts.length > 1) {
            return (
                <>
                    <strong className="block mb-2 text-lg text-luxury-gold">
                        {parts[0]}:
                    </strong>
                    {parts.slice(1).join(":")}
                </>
            );
        }
        return text;
    };

    return (
        <section className="relative overflow-hidden py-20 md:py-32">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                {/* Header */}
                <div className="mx-auto mb-24 max-w-4xl text-center">
                    <div
                        className="mb-4 inline-block rounded-full border border-gold-500/30 bg-gold-900/10 px-3 py-1 font-mono text-sm text-gold-400"
                        data-aos="fade-down"
                    >
                        CASE STUDY
                    </div>
                    <h2
                        className="mb-6 font-serif text-4xl leading-tight text-luxury-gold md:text-6xl"
                        data-aos="fade-up"
                    >
                        {dictionary.caseStudy.title}
                    </h2>
                    <p
                        className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400 md:text-2xl"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {dictionary.caseStudy.headline}
                    </p>
                </div>

                {/* Challenge Section */}
                <div className="mb-32 grid items-center gap-16 lg:grid-cols-2">
                    <div data-aos="fade-right">
                        <h3 className="mb-6 border-l-4 border-gold-500 pl-6 text-3xl font-bold text-luxury-gold rtl:border-r-4 rtl:border-l-0 rtl:pr-6 rtl:pl-0">
                            {dictionary.caseStudy.challenge.title}
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-400">
                            {dictionary.caseStudy.challenge.description}
                        </p>
                    </div>
                    <div className="group relative" data-aos="fade-left">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold-500 to-amber-700 blur opacity-25 transition duration-1000 group-hover:opacity-50"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-night-blue">
                            <Image
                                src="/images/zahra-1.png"
                                width={800}
                                height={600}
                                alt="Zahra Store Challenge"
                                className="h-auto w-full object-cover opacity-90 transition duration-500 hover:opacity-100"
                            />
                        </div>
                    </div>
                </div>

                {/* Solutions Grid */}
                <div className="mb-32">
                    <h3
                        className="mb-16 text-center text-3xl font-bold text-luxury-gold"
                        data-aos="fade-up"
                    >
                        {dictionary.caseStudy.solution.title}
                    </h3>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {solutions.map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-2xl border border-gold-500/10 bg-gold-500/5 p-8 backdrop-blur-sm transition duration-300 hover:border-gold-500/30 hover:bg-gold-500/10"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                                    {renderWithBoldPrefix(item)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Results Section */}
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div
                        className="group relative order-2 lg:order-1"
                        data-aos="fade-right"
                    >
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-green-500 to-gold-500 blur opacity-25 transition duration-1000 group-hover:opacity-50"></div>
                        <div className="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-night-blue">
                            <Image
                                src="/images/zahra-2.png"
                                width={800}
                                height={600}
                                alt="Zahra Store Results"
                                className="h-auto w-full object-cover opacity-90 transition duration-500 hover:opacity-100"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute right-6 bottom-6 flex items-center gap-4 rounded-xl border border-green-500/50 bg-night-blue/90 p-4 backdrop-blur-md lg:right-10 lg:bottom-10">
                                <div className="text-4xl font-bold text-green-500">100</div>
                                <div className="text-xs uppercase tracking-wider text-gray-400">
                                    Performance
                                    <br />
                                    Score
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2" data-aos="fade-left">
                        <h3 className="mb-8 border-l-4 border-green-500 pl-6 text-3xl font-bold text-luxury-gold rtl:border-r-4 rtl:border-l-0 rtl:pr-6 rtl:pl-0">
                            {dictionary.caseStudy.results.title}
                        </h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-400">
                                        {dictionary.caseStudy.results.sustainedPerf}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-400">
                                        {dictionary.caseStudy.results.instantUx}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
