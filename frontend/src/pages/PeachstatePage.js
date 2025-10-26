import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Heart, Shield, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PeachstatePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <Heart className="text-green-600 mx-auto mb-6" size={80} />
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Peachstate Health Plan Home Care Provider
              </h1>
              <p className="text-2xl text-green-600 font-semibold mb-4">
                INFINITI - In-Network Provider
              </p>
              <p className="text-xl text-gray-600 mb-8">
                We accept Peachstate Health Plan for home care services
              </p>
              <a href="tel:4702645566" className="btn-primary text-xl px-12 py-4">
                📞 Call (470) 264-5566
              </a>
            </div>

            {/* About Peachstate */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                About Peachstate Health Plan
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Peachstate Health Plan is Georgia's Medicaid managed care organization, providing 
                comprehensive healthcare coverage for eligible Georgia residents. As an in-network 
                provider, INFINITI Home Care Enterprise delivers high-quality home care services 
                covered by your Peachstate benefits.
              </p>
              <div className="bg-green-50 rounded-lg p-6 mt-6">
                <h3 className="font-bold text-gray-900 mb-3">Key Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>In-network provider means lower or no out-of-pocket costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Direct billing to Peachstate - no claims filing needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Coordinated care with your primary care physician</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Streamlined authorization process</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services Covered */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Home Care Services Covered
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <Shield className="text-green-500 mb-3" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Care Services</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Bathing and grooming</li>
                    <li>• Dressing assistance</li>
                    <li>• Toileting and incontinence care</li>
                    <li>• Transfer and mobility support</li>
                    <li>• Medication reminders</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <Heart className="text-green-500 mb-3" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Companion Care</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Companionship and socialization</li>
                    <li>• Meal preparation</li>
                    <li>• Light housekeeping</li>
                    <li>• Transportation assistance</li>
                    <li>• Errands and shopping</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What We Handle */}
            <div className="bg-green-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                What INFINITI Handles For You
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={24} />
                    Direct Billing to Peachstate
                  </h3>
                  <p className="text-sm text-gray-600 ml-8">
                    We submit all claims directly to Peachstate Health Plan - no paperwork for you
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={24} />
                    Authorization Requests
                  </h3>
                  <p className="text-sm text-gray-600 ml-8">
                    We obtain all necessary authorizations from Peachstate for your care services
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={24} />
                    Care Coordination with PCP
                  </h3>
                  <p className="text-sm text-gray-600 ml-8">
                    We work with your primary care physician to ensure coordinated, comprehensive care
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={24} />
                    Member Services Assistance
                  </h3>
                  <p className="text-sm text-gray-600 ml-8">
                    We help you navigate Peachstate member services and answer benefit questions
                  </p>
                </div>
              </div>
            </div>

            {/* How to Get Started */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                How to Get Started with Peachstate Coverage
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Verify Your Peachstate Coverage</h3>
                    <p className="text-gray-600">
                      Have your Peachstate member ID ready. We can help verify your home care benefits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Call INFINITI</h3>
                    <p className="text-gray-600">
                      Contact us at (470) 264-5566 to discuss your care needs and schedule a free assessment
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">We Handle Authorization</h3>
                    <p className="text-gray-600">
                      We'll obtain authorization from Peachstate and coordinate with your doctor
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Begin Care Services</h3>
                    <p className="text-gray-600">
                      Once authorized, we'll match you with a qualified caregiver and start services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-purple-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Verify Your Peachstate Benefits?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our care coordinators can help you understand your Peachstate coverage
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

export default PeachstatePage;