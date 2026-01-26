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
};
