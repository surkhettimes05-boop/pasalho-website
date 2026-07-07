"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle2, X } from "lucide-react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { Product } from "@/context/CartContext";

const MOCK_NAMES = ["Ram", "Sita", "Hari", "Gita", "Shyam", "Bishnu", "Nita", "Pooja", "Arjun", "Kripa"];
const MOCK_LOCATIONS = ["Baneshwor", "Patan", "Birendranagar", "Pokhara", "Lazimpat", "Bhaktapur", "Dharan", "Butwal"];

export default function RecentSalesPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [saleData, setSaleData] = useState<{name: string, location: string, product: Product, time: string} | null>(null);

  useEffect(() => {
    // Show a popup every 15-25 seconds randomly
    const generateSale = () => {
      const name = MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)];
      const location = MOCK_LOCATIONS[Math.floor(Math.random() * MOCK_LOCATIONS.length)];
      const product = MOCK_PRODUCTS[Math.floor(Math.random() * MOCK_PRODUCTS.length)];
      const time = `${Math.floor(Math.random() * 10) + 1} min ago`;
      
      setSaleData({ name, location, product, time });
      setIsVisible(true);

      // Auto dismiss after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Initial delay before first popup
    const timeout = setTimeout(() => {
      generateSale();
      const interval = setInterval(generateSale, Math.floor(Math.random() * 10000) + 15000);
      return () => clearInterval(interval);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  if (!saleData) return null;

  return (
    <div 
      className={`fixed bottom-20 md:bottom-6 left-4 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-3 pr-8 flex items-center gap-3 w-[300px] relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="h-12 w-12 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-100">
          <Image 
            src={saleData.product.image} 
            alt={saleData.product.name}
            fill
            sizes="48px"
            className="object-cover p-1"
          />
        </div>
        
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-0.5">
            <span className="font-semibold text-gray-900">{saleData.name}</span> in {saleData.location}
          </p>
          <p className="text-[13px] font-medium text-gray-900 leading-tight line-clamp-1 mb-1">
            Purchased {saleData.product.name}
          </p>
          <div className="flex items-center text-[10px] text-gray-400">
            <CheckCircle2 className="h-3 w-3 text-green-500 mr-1" /> Verified Buyer • {saleData.time}
          </div>
        </div>
      </div>
    </div>
  );
}
