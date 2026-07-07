import { Handshake, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

export default function Suppliers() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Grow with PasalHO</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Join our network of verified suppliers and gain access to Nepal's fastest-growing retail chain.
          </p>
          <a
            href="#onboarding-form"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-bold rounded-lg shadow hover:bg-gray-50 transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a modern, transparent, and mutually beneficial partnership model.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 text-center">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unmatched Reach</h3>
              <p className="text-gray-600">
                Place your products in front of thousands of daily customers across our rapidly expanding network of physical stores.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 text-center">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">PasalHO OS Integration</h3>
              <p className="text-gray-600">
                Experience seamless order management, transparent inventory tracking, and automated PO generation through our proprietary platform.
              </p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 text-center">
              <Handshake className="h-12 w-12 text-orange-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable Payments</h3>
              <p className="text-gray-600">
                Enjoy clear payment terms and reliable settlement cycles, allowing you to focus on growing your core business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Onboarding Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, 4-step journey to getting your products on our shelves.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-10 right-10 h-1 bg-orange-200 -z-10"></div>
            
            {[
              { step: 1, title: 'Submit Inquiry', desc: 'Fill out the initial partner application below.' },
              { step: 2, title: 'Initial Review', desc: 'Our merchandising team reviews your catalog and terms.' },
              { step: 3, title: 'Quality Audit', desc: 'Sample review and compliance check with NBSM standards.' },
              { step: 4, title: 'Go Live', desc: 'Contract signing, OS onboarding, and first PO issued.' }
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center w-full md:w-1/4 px-4 mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-2xl font-bold mb-4 border-4 border-white shadow-md">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="onboarding-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Supplier Inquiry</h3>
                  <p className="text-gray-400 mb-8">
                    Ready to partner? Send us your details and our team will get back to you within 48 hours.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 shrink-0" />
                      <span className="text-sm text-gray-300">Fast onboarding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 shrink-0" />
                      <span className="text-sm text-gray-300">Direct integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 mr-3 shrink-0" />
                      <span className="text-sm text-gray-300">Transparent operations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="md:col-span-3 p-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                      <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="e.g. Acme FMCG" />
                    </div>
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                      <input type="text" id="contact" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Full Name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="you@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="+977" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Primary Product Category *</label>
                    <select id="category" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white">
                      <option value="">Select a category</option>
                      <option value="fmcg">FMCG / Groceries</option>
                      <option value="fresh">Fresh Produce</option>
                      <option value="electronics">Electronics</option>
                      <option value="home">Home & Lifestyle</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Brief Product Description *</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors" placeholder="Tell us about the products you wish to supply..."></textarea>
                  </div>

                  <button type="button" className="w-full py-4 bg-orange-600 text-white rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-md">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
