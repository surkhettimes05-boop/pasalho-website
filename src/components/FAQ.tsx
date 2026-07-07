'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What makes PasalHO different from other retail stores?',
    answer: 'PasalHO combines modern retail technology with quality products and exceptional customer service. Our PasalHO OS ensures efficient inventory management, competitive pricing, and a seamless shopping experience both in-store and online.'
  },
  {
    question: 'Do you offer home delivery?',
    answer: 'Yes! We offer same-day delivery in select areas within Kathmandu and Pokhara. Delivery options and timing may vary by location. You can check availability during checkout.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer hassle-free returns within 7 days of purchase for most products, provided they are in their original condition with receipt. Certain items like perishables and personal care products may have different policies.'
  },
  {
    question: 'How do I join the loyalty program?',
    answer: 'You can join our loyalty program by signing up at any PasalHO store or through our website. Membership is free and you earn points on every purchase that can be redeemed for discounts.'
  },
  {
    question: 'Are your products authentic and quality-checked?',
    answer: 'Absolutely. Every product at PasalHO is carefully sourced from authorized suppliers and undergoes quality checks. We maintain strict quality standards to ensure you receive only genuine products.'
  },
  {
    question: 'Do you accept digital payments?',
    answer: 'Yes, we accept all major digital payment methods including mobile wallets, credit/debit cards, and UPI. We also support cash payments at all our stores.'
  },
  {
    question: 'How can I become a supplier?',
    answer: 'Interested suppliers can apply through our Supplier Portal on the website. Our team reviews applications and will contact you if your products meet our quality and business requirements.'
  },
  {
    question: 'What are your store operating hours?',
    answer: 'Most PasalHO stores are open daily from 9AM to 9PM. Some locations may have slightly different hours, so we recommend checking the specific store page for accurate timing.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about PasalHO
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-orange-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-orange-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
