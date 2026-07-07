"use client";

import Link from "next/link";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function CheckoutSuccessPage() {
  const [orderId, setOrderId] = useState("PHO-...");

  useEffect(() => {
    // Generate a random order ID for display purposes after mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOrderId(`PHO-${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

  return (
    <div className="max-w-2xl mx-auto text-center py-16 px-4">
      <div className="flex justify-center mb-6">
        <div className="rounded-full bg-green-100 p-4">
          <CheckCircle2 className="h-16 w-16 text-green-600" />
        </div>
      </div>
      
      <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Order Confirmed!</h1>
      <p className="text-gray-600 text-lg mb-8">
        Thank you for your purchase. We've received your order and will begin processing it right away.
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <div className="flex items-center justify-center mb-4">
          <Package className="h-6 w-6 text-orange-500 mr-2" />
          <span className="font-semibold text-gray-700">Order Information</span>
        </div>
        
        <div className="grid grid-cols-2 gap-y-4 text-left max-w-sm mx-auto">
          <div className="text-gray-500 text-sm">Order Number:</div>
          <div className="font-bold text-gray-900 text-sm text-right">{orderId}</div>
          
          <div className="text-gray-500 text-sm">Estimated Delivery:</div>
          <div className="font-bold text-gray-900 text-sm text-right">Today (Same-Day)</div>
          
          <div className="text-gray-500 text-sm">Payment Status:</div>
          <div className="font-bold text-green-600 text-sm text-right flex items-center justify-end">
            Pending <span className="text-xs text-gray-400 ml-1">(Pay on delivery)</span>
          </div>
        </div>
      </div>

      <Link 
        href="/"
        className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition shadow-lg"
      >
        Continue Shopping
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  );
}
