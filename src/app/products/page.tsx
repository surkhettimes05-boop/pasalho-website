"use client";

import { useState } from 'react';
import { ShoppingCart, Package, Truck, Utensils, Home, Baby, Sparkles, Search, Check } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '@/lib/mockData';

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedItems, setAddedItems] = useState<{[key: string]: boolean}>({});

  const handleAddToCart = (id: string) => {
    setAddedItems(prev => ({...prev, [id]: true}));
    setTimeout(() => {
      setAddedItems(prev => ({...prev, [id]: false}));
    }, 2000);
  };

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Catalog</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Discover premium quality products across multiple categories, curated to meet your daily needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-shadow"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Pills */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar gap-2">
              {MOCK_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded text-orange-600 shadow-sm">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.description}</p>
                    <div className="mt-auto flex items-end justify-between">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">{product.unit}</div>
                        <span className="text-xl font-bold text-gray-900">NPR {product.price}</span>
                      </div>
                      <button 
                        onClick={() => handleAddToCart(product.id)}
                        className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors group/btn ${
                          addedItems[product.id] 
                            ? 'bg-green-500 text-white' 
                            : 'bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white'
                        }`}
                      >
                        {addedItems[product.id] ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-6 text-orange-600 hover:text-orange-500 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
