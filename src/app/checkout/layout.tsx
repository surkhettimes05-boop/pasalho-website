import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Focused Header */}
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-500 hover:text-orange-600 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium hidden sm:inline">Back to Shop</span>
          </Link>
          
          <Link href="/" className="text-2xl font-black text-orange-600 tracking-tighter hover:opacity-90 transition-opacity">
            Pasal<span className="text-gray-900">HO</span>
          </Link>

          <div className="flex items-center text-gray-600">
            <Lock className="h-4 w-4 mr-1.5" />
            <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>
      
      {/* Minimal Footer */}
      <footer className="border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} PasalHO. All rights reserved.</p>
          <p className="mt-1">Encrypted and securely processed.</p>
        </div>
      </footer>
    </div>
  );
}
