'use client'

import { useState } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', query)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Search"
      >
        <SearchIcon className="h-5 w-5 text-gray-700" />
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden">
        <form onSubmit={handleSearch} className="flex items-center p-4 border-b">
          <SearchIcon className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, categories, stores..."
            className="flex-1 outline-none text-lg"
            autoFocus
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </form>
        
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {['Rice', 'Cooking Oil', 'Detergent', 'Baby Products', 'Snacks'].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm hover:bg-orange-100 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
