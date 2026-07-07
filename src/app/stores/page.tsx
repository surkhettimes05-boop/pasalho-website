"use client";

import { MapPin, Phone, Clock, Info, Navigation2 } from 'lucide-react';
import { MOCK_STORES } from '@/lib/mockData';
import Image from 'next/image';

export default function Stores() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find a PasalHO Near You</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Experience our modern retail stores designed for convenience, quality, and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Stores List */}
      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_STORES.map((store) => (
              <div key={store.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image 
                    src={store.image} 
                    alt={store.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h2 className="text-white text-2xl font-bold">{store.name}</h2>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  
                  <div className="flex items-start text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 text-orange-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">{store.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 mr-3 text-orange-500 shrink-0" />
                    <p>{store.hours}</p>
                  </div>

                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 mr-3 text-orange-500 shrink-0" />
                    <p>{store.phone}</p>
                  </div>

                  <div className="flex items-start text-gray-700 border-t border-gray-100 pt-4 mt-2">
                    <Info className="h-5 w-5 mr-3 text-orange-500 mt-0.5 shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      {store.amenities.map((amenity, idx) => (
                        <span key={idx} className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-md font-medium">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <button className="w-full py-3 bg-white border-2 border-orange-500 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 hover:text-orange-700 transition-colors flex items-center justify-center">
                      <Navigation2 className="h-5 w-5 mr-2" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
