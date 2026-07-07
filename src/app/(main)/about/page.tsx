import { Target, Eye, ShieldCheck, Users, Activity } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Retail in Nepal</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            PasalHO is building the future of organized retail, powered by technology, customer-centric innovation, and a commitment to quality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded with a vision to modernize the Nepalese retail landscape, PasalHO brings everything under one roof. We recognized the fragmented nature of local commerce and set out to create a seamless, technology-driven shopping experience.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Powered by our proprietary <strong>PasalHO OS</strong>, we integrate POS, Inventory Management, and Warehouse operations to ensure efficiency, transparency, and the best prices for our customers.
              </p>
              <div className="flex gap-4">
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-1">5000+</div>
                  <div className="text-sm font-medium text-orange-800">Products SKUs</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
                  <div className="text-sm font-medium text-orange-800">Quality Assured</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Supermarket" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To provide high-quality, authentic products at competitive prices through an organized, technology-enabled retail network across every neighborhood in Nepal.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To become Nepal's most trusted and recognized retail brand, setting the benchmark for operational excellence, customer satisfaction, and technological innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make at PasalHO.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShieldCheck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Uncompromising Quality</h3>
              <p className="text-gray-600">We source only authentic products from verified suppliers.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600">Every process is designed around improving the shopper's experience.</p>
            </div>
            <div className="text-center">
              <Activity className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agile & Innovative</h3>
              <p className="text-gray-600">We leverage data and technology to constantly improve our operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Placeholder */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Guided by experienced professionals in retail, technology, and operations.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {['Chief Executive Officer', 'Head of Technology', 'Head of Operations', 'Head of Finance'].map((role, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-6 text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">Executive Name</h3>
                <p className="text-sm text-orange-400 font-medium">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
