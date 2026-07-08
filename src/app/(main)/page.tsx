"use client";

import { useCart } from "@/context/CartContext";
import { MOCK_CATEGORY_DETAILS } from "@/lib/mockData";
import { MapPin, Search, ChevronRight, Plus, Minus, Tag, Zap, Check, Star, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ConversionBar from "@/components/ConversionBar";
import { useQuery } from '@tanstack/react-query';
import { catalogApi, Product as ApiProduct } from '@/lib/api/catalog';
import { useRouter } from 'next/navigation';

function ProductCard({ product }: { product: ApiProduct }) {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find(item => item.product.id === product.id);
  const quantity = cartItem?.quantity || 0;
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: Number(product.sellingPrice || product.mrp || 0),
      image: product.imageUrl || '/placeholder.png',
      unit: (product as any).defaultUnit?.name || 'Unit'
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-3 flex flex-col relative h-full">
      {/* Tags/Badges */}
      <div className="absolute top-0 left-0 z-10 w-full px-3 py-2 flex flex-col gap-1 pointer-events-none">
        {product.storefrontCategory && (
          <div className="bg-orange-600 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase self-start shadow-sm flex items-center">
            <Zap className="h-3 w-3 mr-0.5" />
            {product.storefrontCategory}
          </div>
        )}
        {isLowStock && (
          <div className="bg-red-500 text-white text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase self-start shadow-sm">
            Only {product.stock} left
          </div>
        )}
      </div>

      <div className="h-32 md:h-40 w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden relative mb-3 p-2 flex items-center justify-center border border-gray-100/50">
        <Image 
          src={product.imageUrl || '/placeholder.png'} 
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain drop-shadow-md hover:scale-110 hover:drop-shadow-xl transition-all duration-500 ease-out p-2"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="text-[10px] md:text-xs text-gray-500 mb-1">{/* @ts-ignore */}{(product.defaultUnit?.name) || 'Unit'}</div>
        <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-tight mb-1.5 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            {product.mrp && product.mrp > product.sellingPrice && (
              <span className="text-[10px] md:text-xs text-gray-400 line-through">
                NPR {product.mrp}
              </span>
            )}
            <span className="font-bold text-gray-900 text-sm md:text-base">
              NPR {product.sellingPrice || product.mrp}
            </span>
          </div>

          {quantity === 0 ? (
            <button 
              onClick={handleAdd}
              className={`h-8 w-8 md:h-10 md:w-10 rounded-lg flex items-center justify-center font-bold border transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${
                justAdded 
                  ? 'bg-green-500 text-white border-green-600' 
                  : 'bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white border-orange-200'
              }`}
            >
              {justAdded ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            </button>
          ) : (
            <div className="flex items-center bg-orange-600 rounded-lg text-white h-8 md:h-10 overflow-hidden shadow-sm">
              <button 
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-7 md:w-9 h-full flex items-center justify-center hover:bg-orange-700 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-6 md:w-8 text-center font-bold text-sm md:text-base">
                {quantity}
              </span>
              <button 
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="w-7 md:w-9 h-full flex items-center justify-center hover:bg-orange-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  const { data: categoriesData } = useQuery({
    queryKey: ['public-categories'],
    queryFn: () => catalogApi.getCategories(),
  });

  const { data: productsData, isLoading } = useQuery({
    queryKey: ['public-products', { limit: 100 }],
    queryFn: () => catalogApi.getProducts({ limit: 100 }),
  });

  const categories = categoriesData || [];
  const products = productsData?.data || [];

  // Group products by category dynamically
  const productsByCategory = categories.reduce((acc, cat) => {
    const catProducts = products.filter(p => p.categoryId === cat.id);
    if (catProducts.length > 0) {
      acc[cat.name] = catProducts;
    }
    return acc;
  }, {} as Record<string, ApiProduct[]>);

  const featuredProducts = products.slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sticky Header: Urgency & Hyperlocal */}
      <header className="sticky top-[64px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="bg-orange-100 p-2 rounded-full hidden sm:block">
              <MapPin className="h-5 w-5 text-orange-600" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-gray-900 font-bold md:text-lg">
                Delivering to <ChevronRight className="h-4 w-4 ml-1" />
              </div>
              <div className="text-gray-500 text-xs md:text-sm flex items-center">
                <MapPin className="h-3 w-3 mr-1 sm:hidden" />
                Aman Store, Birendranagar
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            {/* Search Bar for Desktop (hidden on very small mobile if taking too much space, but good to have) */}
            <div className="relative hidden md:block w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:bg-white transition-all"
                placeholder="Search for 'Atta' or 'Noodles'"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    // Navigate to products page with search (could implement via query params)
                    router.push('/products');
                  }
                }}
              />
            </div>
            
            {/* Delivery Timer Pulse */}
            <div className="bg-orange-50 border border-orange-200 px-4 py-2 rounded-xl flex items-center shadow-sm w-fit">
              <div className="relative flex h-2.5 w-2.5 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </div>
              <span className="text-orange-700 font-black text-sm md:text-base">19 min</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-10">
        
        {/* Mobile Search Bar (Visual) */}
        <div className="relative md:hidden">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="Search for anything..."
            onClick={() => router.push('/products')}
          />
        </div>

        {/* Acquisition Hook Banner */}
        <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-rose-500 rounded-2xl p-6 md:p-10 text-white shadow-xl shadow-orange-500/20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
          <div className="relative z-10 w-full text-center md:text-left mb-6 md:mb-0">
            <div className="inline-flex items-center text-orange-100 text-xs md:text-sm font-bold uppercase tracking-wider mb-2 bg-black/15 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
              <Tag className="h-4 w-4 mr-2" /> New User Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-2 drop-shadow-sm">Get 20% OFF</h2>
            <p className="text-base md:text-xl text-orange-50 font-medium">On your first order above NPR 500</p>
          </div>
          <div className="relative z-10 bg-white/20 px-6 py-3 md:px-8 md:py-4 rounded-xl backdrop-blur-md border border-white/40 font-mono font-bold text-xl md:text-3xl tracking-wider group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500 shadow-inner">
            WELCOME20
          </div>
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-white opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out"></div>
          <div className="absolute bottom-0 right-32 -mb-8 w-24 h-24 rounded-full bg-white opacity-20 blur-xl"></div>
        </div>

        {/* Conversion Bar */}
        <ConversionBar />

        {/* Variety Loop: Categories */}
        <section id="categories" className="sticky top-[72px] z-20 bg-gray-50 pt-4 pb-2 border-b border-gray-200 shadow-sm md:static md:bg-transparent md:pt-0 md:pb-0 md:border-none md:shadow-none -mx-4 px-4 sm:mx-0 sm:px-0 mt-0">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-8 pb-2 snap-x md:grid md:grid-cols-7 md:overflow-visible">
            {MOCK_CATEGORY_DETAILS.map((cat) => (
              <div 
                key={cat.name} 
                onClick={() => router.push('/products')}
                className="flex flex-col items-center gap-3 snap-start group cursor-pointer w-20 md:w-full flex-shrink-0"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden relative">
                  <Image 
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-[11px] md:text-sm font-semibold text-center text-gray-700 leading-tight group-hover:text-orange-600 transition-colors">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 text-orange-500 animate-spin" />
          </div>
        ) : (
          <>
            {/* Habit Loop: Reorder / Featured */}
            {featuredProducts.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                    Top Featured
                  </h2>
                </div>
                <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x md:grid md:grid-cols-4 lg:grid-cols-5 md:overflow-visible">
                  {featuredProducts.map(product => (
                    <div key={product.id} className="w-40 md:w-full flex-shrink-0 snap-start">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Dynamic Category Rows from DB */}
            {Object.entries(productsByCategory).map(([categoryName, catProducts]) => (
              <section key={categoryName}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {categoryName}
                  </h2>
                  <span 
                    onClick={() => router.push('/products')}
                    className="text-orange-600 text-sm font-semibold flex items-center cursor-pointer hover:text-orange-700 transition-colors"
                  >
                    See all <ChevronRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {catProducts.slice(0, 10).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))}
            
            {products.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium text-gray-900">No products available yet</h3>
                <p className="mt-1 text-gray-500">Check back later for exciting new products.</p>
              </div>
            )}
          </>
        )}
        
        {/* Extra padding to scroll past the bottom nav on mobile */}
        <div className="h-24 md:h-12"></div>
      </main>
    </div>
  );
}
