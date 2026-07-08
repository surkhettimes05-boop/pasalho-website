import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PasalHO - Nepal's Premier Retail Chain",
  description: "Modern organized retail chain bringing quality products and convenience to neighborhoods across Nepal. Shop groceries, household essentials, and more at our stores across Nepal.",
  keywords: "retail, grocery, shopping, Nepal, Kathmandu, Pokhara, supermarket, organized retail, quality products",
  authors: [{ name: "PasalHO" }],
  openGraph: {
    title: "PasalHO - Nepal's Premier Retail Chain",
    description: "Modern organized retail chain bringing quality products and convenience to neighborhoods across Nepal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PasalHO - Nepal's Premier Retail Chain",
    description: "Modern organized retail chain bringing quality products and convenience to neighborhoods across Nepal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import QueryProvider from "@/components/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col min-h-screen">
        <QueryProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
