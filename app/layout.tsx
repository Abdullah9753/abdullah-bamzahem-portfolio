import "./css/style.css";

import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "./fonts/inter-v20-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/inter-v20-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const playfair = localFont({
  src: [
    {
      path: "./fonts/playfair-display-v40-latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/playfair-display-v40-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Z A H R A",
  description: "Ultra-fast Headless Shopify Stores",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} bg-night-blue font-inter tracking-tight text-luxury-gold antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
