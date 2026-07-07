'use client'

import Link from 'next/link'
import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">PasalHO</span>
            </div>
            <p className="text-gray-400">
              Nepal&apos;s premier organized retail chain, bringing quality products and convenience to every neighborhood.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link href="/stores" className="text-gray-400 hover:text-orange-500 transition-colors">Store Locations</Link></li>
              <li><Link href="/suppliers" className="text-gray-400 hover:text-orange-500 transition-colors">Supplier Portal</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-orange-500 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <span className="text-gray-400">Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">+977 1-XXXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">info@pasalho.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-500"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 PasalHO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
