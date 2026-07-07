'use client'

import { useState } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Shrestha',
    location: 'Kathmandu',
    rating: 5,
    text: 'The same-day delivery guarantee is real! I got my groceries within hours. The quality is consistently excellent.',
  },
  {
    name: 'Sita Gurung',
    location: 'Pokhara',
    rating: 5,
    text: 'The fresh produce section is amazing - everything is so fresh and lasts longer. The staff is always helpful and friendly. Highly recommended!',
  },
  {
    name: 'Bikash Thapa',
    location: 'Lalitpur',
    rating: 4,
    text: 'Great selection of household items at reasonable prices. The store layout makes it easy to find what I need. Will definitely continue shopping here.',
  },
  {
    name: 'Anita Maharjan',
    location: 'Kathmandu',
    rating: 5,
    text: 'I appreciate the quality assurance - every product I buy is authentic and fresh. The loyalty program is a nice bonus too!',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm relative">
            <Quote className="h-12 w-12 text-orange-200 absolute top-8 left-8" />
            
            <div className="relative z-10 pt-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-xl text-gray-700 mb-6 italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-gray-600">{testimonials[currentIndex].location}</div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
