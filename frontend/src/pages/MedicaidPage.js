import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, FileText, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicaidPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Georgia Medicaid Home Care Services
              </h1>
              <p className="text-2xl text-green-600 font-semibold mb-4">
                INFINITI Home Care Enterprise - Participating Provider
              </p>
              <p className="text-xl text-gray-600 mb-8">
                We accept Georgia Medicaid Waiver Programs for home care services
              </p>
              <a href="tel:4702645566" className="btn-primary text-xl px-12 py-4">
                📞 Call (470) 264-5566
              </a>
            </div>

            {/* Medicaid Waiver Programs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Georgia Medicaid Waiver Programs We Accept
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">CCSP</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Community Care Services Program
                  </p>
                  <p className="text-sm text-gray-600">
                    For adults 65+ who need nursing home level of care but prefer to stay at home
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">SOURCE</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Service Options Using Resources in a Community Environment
                  </p>
                  <p className="text-sm text-gray-600">
                    For adults with physical disabilities who need assistance with daily activities
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">NOW Waiver</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    New Options Waiver
                  </p>
                  <p className="text-sm text-gray-600">
                    For individuals with intellectual or developmental disabilities
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">COMP Waiver</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Comprehensive Supports Waiver
                  </p>
                  <p className="text-sm text-gray-600">
                    For individuals with significant support needs requiring comprehensive services
                  </p>
                </div>
              </div>
            </div>

            {/* What We Handle */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                What We Handle For You
              </h2>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 mr-4 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Prior Authorization Requests</h3>
                    <p className="text-sm text-gray-600">
                      We submit and track all prior authorization requests to Georgia Medicaid
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 mr-4 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Care Plan Coordination</h3>
                    <p className="text-sm text-gray-600">
                      We work with your case manager to develop and update your care plan
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 mr-4 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Direct Billing to Medicaid</h3>
                    <p className="text-sm text-gray-600">
                      We bill directly to Georgia Medicaid - no paperwork hassle for you
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 mr-4 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">All Required Documentation</h3>
                    <p className="text-sm text-gray-600">
                      We maintain all required documentation and submit reports to meet Medicaid requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Covered */}
            <div className="bg-green-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Services Covered by Medicaid Waivers
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Personal care assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Companion care services</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Homemaker services</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Medication reminders</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Bathing and grooming assistance</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Meal preparation</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Light housekeeping</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Transportation assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How to Get Started */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                How to Get Started
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Check Your Eligibility</h3>
                    <p className="text-gray-600">
                      Contact your local Division of Aging Services or call us to verify your Medicaid waiver eligibility
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Contact INFINITI</h3>
                    <p className="text-gray-600">
                      Call us at (470) 264-5566 to discuss your care needs and schedule a free assessment
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">We Handle the Paperwork</h3>
                    <p className="text-gray-600">
                      We'll coordinate with your case manager and handle all authorization and billing
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Start Receiving Care</h3>
                    <p className="text-gray-600">
                      Once approved, we'll match you with a qualified caregiver and begin services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-purple-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Check Your Medicaid Eligibility?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our care coordinators can help you understand your Medicaid waiver options
              </p>
              <a href="tel:4702645566" className="btn-primary text-xl px-12 py-4 inline-flex items-center">
                <Phone className="mr-3" size={24} />
                Call (470) 264-5566
              </a>
              <p className="text-gray-600 mt-6">
                Or <Link to="/" className="text-purple-600 underline">return to homepage</Link> to build your care plan
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicaidPage;