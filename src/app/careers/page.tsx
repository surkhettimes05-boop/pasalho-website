"use client";

import { useState } from 'react';
import { MapPin, Clock, Briefcase, Users, CheckCircle2 } from 'lucide-react';
import { MOCK_OPENINGS, MOCK_BENEFITS } from '@/lib/mockData';

export default function Careers() {
  const [appliedJob, setAppliedJob] = useState<string | null>(null);
  const [generalApply, setGeneralApply] = useState(false);

  const handleApply = (title: string) => {
    setAppliedJob(title);
    setTimeout(() => setAppliedJob(null), 5000);
  };

  const handleGeneralApply = () => {
    setGeneralApply(true);
    setTimeout(() => setGeneralApply(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-orange-100 max-w-3xl">
            Build a rewarding career with Nepal's fastest-growing retail chain. Be part of our mission to transform retail.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work at PasalHO?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a career with purpose and growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors group">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find your perfect role
            </p>
          </div>
          <div className="space-y-4">
            {MOCK_OPENINGS.map((job) => (
              <div key={job.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-1 text-orange-600" />
                        {job.department}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1 text-orange-600" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1 text-orange-600" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1 text-orange-600" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  
                  {appliedJob === job.title ? (
                    <div className="px-6 py-2 bg-green-50 text-green-700 font-medium rounded-lg flex items-center whitespace-nowrap">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Application Received
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleApply(job.title)}
                      className="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap shadow-md hover:shadow-lg"
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and transparent hiring process
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-16 right-16 h-1 bg-orange-100 -z-10"></div>
            {[
              { step: 1, title: 'Apply', description: 'Submit your application online' },
              { step: 2, title: 'Screening', description: 'Initial phone interview' },
              { step: 3, title: 'Interview', description: 'In-person or video interview' },
              { step: 4, title: 'Offer', description: 'Receive job offer and onboard' }
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-md">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-orange-600/20 blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Don't See a Role That Fits?</h2>
              <p className="text-xl mb-8 text-gray-300">
                We're always looking for talented people. Send us your resume and we'll keep you in mind for future openings.
              </p>
              
              {generalApply ? (
                <div className="inline-flex items-center justify-center px-8 py-3 bg-green-500/20 text-green-400 font-semibold rounded-lg border border-green-500/50">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  General Application Sent
                </div>
              ) : (
                <button 
                  onClick={handleGeneralApply}
                  className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors shadow-lg"
                >
                  Send General Application
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
