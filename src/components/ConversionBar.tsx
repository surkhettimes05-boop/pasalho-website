import { Truck, Lock, ShieldCheck } from "lucide-react";

export default function ConversionBar() {
  return (
    <div className="bg-orange-50 border-y border-orange-100 py-4 mt-8 mb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-4">
        <div className="flex items-center gap-3">
          <Truck className="h-6 w-6 text-orange-600" />
          <span className="font-bold text-sm text-gray-800">Same-Day Delivery</span>
        </div>
        <div className="flex items-center gap-3">
          <Lock className="h-6 w-6 text-orange-600" />
          <span className="font-bold text-sm text-gray-800">Secure Payments</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-orange-600" />
          <span className="font-bold text-sm text-gray-800">Quality Guaranteed</span>
        </div>
      </div>
    </div>
  );
}
