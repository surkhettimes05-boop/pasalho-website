"use client";

import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Truck, ShieldCheck } from "lucide-react";
import { salesOrdersApi } from "@/lib/api/sales-orders";
import { toast } from "sonner"; // Assuming sonner is available, or use standard alert

export default function CheckoutPage() {
  const { items, cartTotal, remainingForFreeDelivery, clearCart } = useCart();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isProcessing, setIsProcessing] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Add some items to your cart before checking out.</p>
        <button 
          onClick={() => router.push("/")}
          className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const deliveryFee = remainingForFreeDelivery === 0 ? 0 : 50;
  const finalTotal = cartTotal + deliveryFee;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isProcessing) return; // Basic idempotency: prevent double click
    setIsProcessing(true);
    
    try {
      const orderData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        address: formData.address,
        items: items.map(i => ({ productId: i.product.id, quantity: i.quantity }))
      };

      const order = await salesOrdersApi.createPublicOrder(orderData);
      
      clearCart();
      router.push(`/checkout/success`);
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.error?.message || "Failed to place order. Please try again.";
      alert(msg);
      setIsProcessing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column - Form */}
      <div className="flex-1 space-y-8">
        <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-8">
          
          {/* Delivery Information */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gray-900 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-3">1</span>
              Delivery Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 p-2.5 border" placeholder="Ram" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 p-2.5 border" placeholder="Sharma" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 p-2.5 border" placeholder="98XXXXXXXX" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <textarea required rows={3} name="address" value={formData.address} onChange={handleInputChange} className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 p-2.5 border" placeholder="Full address including landmarks..."></textarea>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-gray-900 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-3">2</span>
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className={`block border rounded-xl p-4 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-orange-500 bg-orange-50 ring-1 ring-orange-500' : 'border-gray-200 hover:border-orange-300'}`}>
                <div className="flex items-center">
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300" />
                  <div className="ml-3 flex-1">
                    <span className="block text-sm font-medium text-gray-900 flex items-center">
                      <Truck className="h-5 w-5 text-gray-400 mr-2" /> Cash on Delivery
                    </span>
                    <span className="block text-xs text-gray-500 mt-1">Pay when you receive your order</span>
                  </div>
                </div>
              </label>
            </div>
          </section>

          {/* Desktop CTA */}
          <div className="hidden lg:block mt-8">
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-orange-600/30"
            >
              {isProcessing ? 'Processing...' : `Place Order (NPR ${finalTotal})`}
            </button>
            <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
              <ShieldCheck className="h-4 w-4 text-green-500 mr-1" /> All transactions are secure and encrypted.
            </p>
          </div>
        </form>
      </div>

      {/* Right Column - Order Summary */}
      <div className="lg:w-96">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
            <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full">{items.length} items</span>
          </div>
          
          <div className="p-6">
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2 mb-6 hide-scrollbar">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  <div className="h-16 w-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-200">
                    <Image 
                      src={item.product.image || "/images/placeholder-product.png"} 
                      alt={item.product.name}
                      fill
                      sizes="64px"
                      className="object-cover p-1"
                    />
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-10">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-medium text-sm text-gray-900 line-clamp-2">{item.product.name}</h3>
                    <p className="text-gray-500 text-xs mt-1">{item.product.unit}</p>
                  </div>
                  <div className="font-medium text-sm text-gray-900">
                    NPR {item.product.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm border-t border-gray-100 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">NPR {cartTotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className={`font-medium ${deliveryFee === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                  {deliveryFee === 0 ? 'FREE' : `NPR ${deliveryFee}`}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-end">
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="text-xs text-gray-400">Including VAT</p>
              </div>
              <p className="text-2xl font-bold text-gray-900">NPR {finalTotal}</p>
            </div>

            {/* Mobile CTA (visible only on mobile) */}
            <div className="lg:hidden mt-6">
              <button 
                form="checkout-form"
                type="submit" 
                disabled={isProcessing}
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition flex justify-center items-center disabled:opacity-70 shadow-lg"
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
