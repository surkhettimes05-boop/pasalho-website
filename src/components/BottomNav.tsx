"use client";

import { useCart } from "@/context/CartContext";
import { Home, Search, Grid, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const { itemCount, setCartOpen, setSearchOpen } = useCart();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home, action: null },
    { name: "Search", href: "#", icon: Search, action: () => setSearchOpen(true) },
    { name: "Categories", href: "/#categories", icon: Grid, action: null },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 pb-safe">
      <div className="max-w-md mx-auto flex items-center justify-between px-6 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return item.action ? (
            <button
              key={item.name}
              onClick={item.action}
              className={`flex flex-col items-center justify-center space-y-1 text-gray-500 hover:text-gray-900`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </button>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 ${
                isActive ? "text-orange-600" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
        
        {/* Cart Button */}
        <button
          onClick={() => setCartOpen(true)}
          className="flex flex-col items-center justify-center space-y-1 text-gray-500 hover:text-gray-900 relative"
        >
          <div className="relative">
            <ShoppingBag className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-orange-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium">Cart</span>
        </button>
      </div>
    </div>
  );
}
