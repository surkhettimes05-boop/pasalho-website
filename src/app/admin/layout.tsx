import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut, Search, Bell } from "lucide-react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed inset-y-0 z-20">
        <div className="p-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="bg-orange-500 p-1.5 rounded-lg">
              <Package className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">PasalHO<span className="text-orange-500">.Admin</span></span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-slate-800 text-white font-medium">
            <LayoutDashboard className="h-5 w-5 text-orange-400" />
            Dashboard
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <ShoppingCart className="h-5 w-5 text-slate-400" />
            Orders
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <Package className="h-5 w-5 text-slate-400" />
            Products
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <Users className="h-5 w-5 text-slate-400" />
            Customers
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium transition-colors">
            <Settings className="h-5 w-5 text-slate-400" />
            Settings
          </button>
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white font-medium transition-colors mt-1">
            <LogOut className="h-5 w-5 text-slate-400" />
            Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-700"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-sm border border-orange-200">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
