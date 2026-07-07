"use client";

import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only trigger on desktop (mouse movement)
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && // Mouse goes up towards the tab/address bar
        !hasTriggered &&
        !isVisible
      ) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 p-1.5 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors z-20"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-gradient-to-br from-orange-600 to-rose-600 p-8 text-center text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
          <Gift className="h-16 w-16 mx-auto mb-4 text-orange-100 drop-shadow-md" />
          <h2 className="text-3xl font-black mb-2 drop-shadow-sm">Wait! Don&apos;t Leave Yet!</h2>
          <p className="text-orange-100 font-medium">We noticed you&apos;re about to go. Here&apos;s a special gift just for you.</p>
        </div>

        <div className="p-8 text-center bg-gray-50">
          <p className="text-gray-600 mb-6 font-medium">
            Complete your order right now and get <strong className="text-gray-900">10% OFF</strong> your entire cart!
          </p>
          
          <div className="bg-white border-2 border-dashed border-orange-300 rounded-xl p-4 mb-6 relative">
            <span className="font-mono text-2xl font-black text-orange-600 tracking-wider">LASTCHANCE10</span>
          </div>

          <button 
            onClick={() => setIsVisible(false)}
            className="w-full bg-orange-600 text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30 active:scale-95"
          >
            Apply Code & Checkout
          </button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="w-full mt-4 text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors"
          >
            No thanks, I&apos;ll pay full price later
          </button>
        </div>
      </div>
    </div>
  );
}
