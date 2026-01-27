// Dictionary type interface for translations
export interface Dictionary {
    header: {
        cta: string;
    };
    hero: {
        title: string;
        titleLine2: string;
        description: string;
        cta: string;
    };
    features: {
        title: string;
        speed: {
            title: string;
            description: string;
        };
        seo: {
            title: string;
            description: string;
        };
        security: {
            title: string;
            description: string;
        };
    };
    cta: {
        title: string;
        button: string;
    };
    testimonial: {
        description: string;
        storeName: string;
        descriptionLine2: string;
        button: string;
    };
    footer: {
        services: string;
        showroom: string;
        contact: string;
        social: string;
        headlessShopify: string;
        speedOptimization: string;
        customUiUx: string;
        zahraDemo: string;
        pricingPlans: string;
        email: string;
    };
    caseStudy: {
        title: string;
        headline: string;
        challenge: {
            title: string;
            description: string;
        };
        solution: {
            title: string;
            ssrParams: string;
            impact: string;
            design: string;
            performance: string;
            smartSearch: string;
        };
        results: {
            title: string;
            sustainedPerf: string;
            instantUx: string;
        };
    };
}

export const en: Dictionary = {
    // Header
    header: {
        cta: "Start Your Project Now",
    },

    // Hero Section
    hero: {
        title: "We Build the Fastest",
        titleLine2: "Online Stores in the World",
        description: "Transforming your business into a digital masterpiece using",
        cta: "Start Your Project Now",
    },

    // Features Section
    features: {
        title: "Redefining E-commerce (Headless)",
        speed: {
            title: "Lightning Speed",
            description: "99+ Google PageSpeed score to boost conversion rates. Optimized for maximum performance.",
        },
        seo: {
            title: "Outstanding SEO",
            description: "Built-in technical SEO optimization that boosts your rankings. Ready-to-use structured data and semantic markup.",
        },
        security: {
            title: "Better Security",
            description: "Frontend-backend separation for maximum security.",
        },
    },

    // CTA Section
    cta: {
        title: "Start Building Your Next Digital Masterpiece",
        button: "Start Your Project Now",
    },

    // Testimonial Section
    testimonial: {
        description: "Explore our capabilities with the",
        storeName: "Z A H R A",
        descriptionLine2: "live demo. Experience the speed and elegance.",
        button: "View Live Demo (Z A H R A Store)",
    },

    // Footer
    footer: {
        services: "Services",
        showroom: "Showroom",
        contact: "Contact",
        social: "Social",
        headlessShopify: "Headless Shopify",
        speedOptimization: "Speed Optimization",
        customUiUx: "Custom UI/UX",
        zahraDemo: "Z A H R A Store (Demo)",
        pricingPlans: "Pricing Plans",
        email: "Email Me",
    },

    // Case Study Section
    caseStudy: {
        title: "💎 Case Study: Zahra Luxury Boutique",
        headline: "Re-engineering the Luxury E-commerce Experience with 100/100 Performance.",
        challenge: {
            title: "1. The Challenge",
            description: "Traditional RTL support methods (like relying on client-side JavaScript) often cause design 'flicker' and noticeable performance drops. The challenge was to deliver full RTL support without sacrificing a single millisecond of load speed.",
        },
        solution: {
            title: "2. The Innovative Solutions",
            ssrParams: "Strict RTL Support (Server-Side Injection): Instead of traditional hacks, we adopted strict Next.js Server-Side Rendering best practices. We inject page direction (dir='rtl') and content language directly from the server side.",
            impact: "Technical Impact: This ensures the site appears in the correct direction from the very first moment of loading (Zero Layout Shift), maintaining interface stability and perfect CLS scores.",
            design: "Bespoke Design: Building a unique UI with Next.js 15 to ensure a luxury experience that doesn't look like off-the-shelf templates.",
            performance: "Super Performance & SEO: Achieving 100/100 score by embedding SEO optimizations into the core architecture to ensure top rankings.",
            smartSearch: "Innovative smart search solutions.",
        },
        results: {
            title: "3. The Results & Impact",
            sustainedPerf: "Sustained 100/100 Performance: Maintaining full scores despite the complexity of linguistic solutions.",
            instantUx: "Instant User Experience: Seamless browsing in Arabic without any visual or technical delays.",
        },
    },
};
