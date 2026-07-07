"use client";

import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Cart() {
  const { 
    items, 
    cartTotal, 
    updateQuantity, 
    remainingForFreeDelivery, 
    freeDeliveryThreshold,
    isCartOpen,
    setCartOpen
  } = useCart();
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const progressPercentage = Math.min(
    ((freeDeliveryThreshold - remainingForFreeDelivery) / freeDeliveryThreshold) * 100,
    100
  );

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 transition-opacity"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Slide-over panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-gray-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-white px-4 py-4 border-b flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-lg font-bold text-gray-900 flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            My Cart
          </h2>
          <button 
            onClick={() => setCartOpen(false)}
            className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Delivery Progress */}
        <div className="bg-white px-4 py-3 border-b border-gray-100 shadow-sm sticky top-[61px] z-10">
          {remainingForFreeDelivery > 0 ? (
            <p className="text-sm font-medium text-gray-800 mb-2">
              Add <span className="text-orange-600 font-bold">NPR {remainingForFreeDelivery}</span> more for FREE delivery
            </p>
          ) : (
            <p className="text-sm font-medium text-green-600 mb-2 flex items-center">
              🎉 You&apos;ve unlocked FREE delivery!
            </p>
          )}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${remainingForFreeDelivery === 0 ? 'bg-green-500' : 'bg-orange-500'}`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 space-y-4">
              <ShoppingBag className="h-16 w-16 text-gray-300" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <button 
                onClick={() => setCartOpen(false)}
                className="px-6 py-2 bg-orange-100 text-orange-600 font-semibold rounded-lg"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="bg-white p-4 rounded-2xl shadow-sm flex gap-4">
                <div className="h-20 w-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 relative">
                  <Image 
                    src={item.product.image} 
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover p-1"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{item.product.name}</h3>
                    <p className="text-xs text-gray-500">{item.product.unit}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-900">NPR {item.product.price}</span>
                      {item.product.mrp && (
                        <span className="text-xs text-gray-400 line-through">NPR {item.product.mrp}</span>
                      )}
                    </div>
                    
                    {/* Stepper */}
                    <div className="flex items-center bg-orange-50 rounded-lg border border-orange-100">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1.5 text-orange-600 hover:bg-orange-100 rounded-l-lg"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-semibold text-sm text-orange-600">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1.5 text-orange-600 hover:bg-orange-100 rounded-r-lg"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="bg-white border-t p-4 pb-safe space-y-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between text-gray-600 text-sm mb-1">
              <span>Item Total</span>
              <span>NPR {cartTotal}</span>
            </div>
            <div className="flex items-center justify-between text-gray-600 text-sm mb-3">
              <span>Delivery Fee</span>
              <span className={remainingForFreeDelivery === 0 ? 'text-green-600 font-medium' : ''}>
                {remainingForFreeDelivery === 0 ? 'FREE' : 'NPR 50'}
              </span>
            </div>
            
            <button className="w-full flex items-center justify-between bg-orange-600 text-white p-4 rounded-xl font-bold shadow-lg hover:bg-orange-700 transition-colors">
              <div className="flex flex-col items-start">
                <span className="text-xs text-orange-200">Total to pay</span>
                <span className="text-lg">NPR {cartTotal + (remainingForFreeDelivery === 0 ? 0 : 50)}</span>
              </div>
              <div className="flex items-center">
                Checkout
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
