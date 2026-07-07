"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form success state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            
            {/* Contact Info (Left Column) */}
            <div className="md:col-span-2 bg-gray-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-orange-600 blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600/20 p-3 rounded-lg border border-orange-500/30">
                      <MapPin className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-gray-400 leading-relaxed">
                        PasalHO Headquarters<br />
                        New Baneshwor, Kathmandu<br />
                        Postal Code: 44600, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600/20 p-3 rounded-lg border border-orange-500/30">
                      <Phone className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-400 leading-relaxed">
                        +977 1-4123456<br />
                        +977 9801234567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600/20 p-3 rounded-lg border border-orange-500/30">
                      <Mail className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-400 leading-relaxed">
                        info@pasalho.com<br />
                        support@pasalho.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-700 relative z-10">
                <h3 className="font-semibold text-lg mb-4 text-orange-400">Business Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Retail Stores:</span>
                    <span className="text-white">Daily 07:00 AM - 09:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Corporate Office:</span>
                    <span className="text-white">Sun-Fri 09:00 AM - 06:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Column) */}
            <div className="md:col-span-3 p-10 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will respond within 24 hours.</p>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out to PasalHO. We have received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-gray-50 focus:bg-white"
                        placeholder="Ram Shrestha"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-gray-50 focus:bg-white"
                        placeholder="ram@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-gray-50 focus:bg-white"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none transition-shadow bg-gray-50 focus:bg-white"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-xl hover:bg-orange-700 transition-colors shadow-md disabled:bg-orange-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
