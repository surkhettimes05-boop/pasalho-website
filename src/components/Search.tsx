'use client'

import { useState } from 'react'
import { Search as SearchIcon, X, Plus, Check } from 'lucide-react'
import { MOCK_PRODUCTS } from '@/lib/mockData'
import { useCart, Product } from '@/context/CartContext'
import Image from 'next/image'

export default function Search() {
  const { addItem, isSearchOpen, setSearchOpen } = useCart()
  const [query, setQuery] = useState('')
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({})

  // Filter products based on query
  const searchResults = query.trim() === '' 
    ? [] 
    : MOCK_PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5) // Limit to 5 results to keep the dropdown clean

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
    setAddedItems(prev => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }))
    }, 1500)
  }

  if (!isSearchOpen) {
    return (
      <button
        onClick={() => setSearchOpen(true)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Search"
      >
        <SearchIcon className="h-5 w-5 text-gray-700" />
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <form onSubmit={handleSearch} className="flex items-center p-4 border-b shrink-0">
          <SearchIcon className="h-6 w-6 text-orange-500 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, categories..."
            className="flex-1 outline-none text-lg text-gray-900 placeholder-gray-400"
            autoFocus
          />
          <button
            type="button"
            onClick={() => {
              setSearchOpen(false)
              setQuery('')
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ml-2"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </form>
        
        <div className="overflow-y-auto flex-1">
          {query.trim() === '' ? (
            <div className="p-6">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Popular searches</p>
              <div className="flex flex-wrap gap-2">
                {['Rice', 'Cooking Oil', 'Detergent', 'Baby Products', 'Snacks'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full font-medium hover:bg-orange-100 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="p-2">
              <p className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">Products</p>
              {searchResults.map((product) => (
                <div key={product.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                  <div className="h-16 w-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-200">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      sizes="64px"
                      className="object-cover p-1"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{product.name}</h4>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className="font-bold text-gray-900">NPR {product.price}</span>
                      <span className="text-xs text-gray-500">{product.unit}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    disabled={addedItems[product.id]}
                    className={`h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-sm ${
                      addedItems[product.id] 
                        ? 'bg-green-500 text-white shadow-green-500/30' 
                        : 'bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white hover:shadow-orange-600/30'
                    }`}
                  >
                    {addedItems[product.id] ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <SearchIcon className="h-12 w-12 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No products found for "{query}"</p>
              <p className="text-gray-400 text-sm mt-1">Try checking your spelling or using more general terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
