import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/Cart";
import BottomNav from "@/components/BottomNav";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <Cart />
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
