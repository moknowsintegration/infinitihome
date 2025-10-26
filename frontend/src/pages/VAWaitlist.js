import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { Clock, CheckCircle, Shield, DollarSign, Heart } from 'lucide-react';

const VAWaitlist = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Clock className="text-purple-600" size={80} />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                VA Benefits Home Care Services
              </h1>
              <p className="text-2xl text-purple-600 font-semibold mb-4">
                Coming Soon to INFINITI Home Care Enterprise
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Join our veterans waitlist for priority access!
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary text-xl px-12 py-4"
                data-testid="join-va-waitlist-hero-btn"
              >
                Join VA Waitlist
              </button>
            </div>

            {/* VA Aid & Attendance Benefit */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                VA Aid & Attendance Benefit
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                We're working to become a VA-approved provider to serve veterans and their spouses
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <DollarSign className="text-purple-600 mb-3" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    For Veterans
                  </h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">
                    Up to $2,300/month
                  </p>
                  <p className="text-sm text-gray-600">
                    Financial assistance for in-home care services
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <Heart className="text-purple-600 mb-3" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    For Surviving Spouses
                  </h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">
                    Up to $1,800/month
                  </p>
                  <p className="text-sm text-gray-600">
                    Continued support for surviving spouses
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">What VA Aid & Attendance Covers:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>In-home personal care services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Assistance with activities of daily living</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>No service-connected disability required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <span>Tax-free monthly benefit</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Why Join the Waitlist */}
            <div className="bg-purple-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Benefits of Joining the Waitlist
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Free VA Benefits Consultation</h3>
                  <p className="text-gray-600 text-sm">
                    Get expert guidance on your VA benefits eligibility
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Application Assistance</h3>
                  <p className="text-gray-600 text-sm">
                    We'll help you navigate the VA application process
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Priority Placement</h3>
                  <p className="text-gray-600 text-sm">
                    First access when we become VA-approved
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Honor Our Veterans</h3>
                  <p className="text-gray-600 text-sm">
                    Specialized care from professionals trained in veteran services
                  </p>
                </div>
              </div>
            </div>

            {/* Current Services Available */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Need Care Now? We Currently Accept:
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <span className="font-semibold text-gray-900">Georgia Medicaid</span>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <span className="font-semibold text-gray-900">Peachstate Health Plan</span>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <span className="font-semibold text-gray-900">Private Pay</span>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <span className="font-semibold text-gray-900">LTC Insurance</span>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Veterans needing care services now?</p>
                <a href="tel:4702645566" className="btn-primary">
                  📞 Call (470) 264-5566
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary text-xl px-12 py-4"
                data-testid="join-va-waitlist-bottom-btn"
              >
                Join VA Waitlist Now
              </button>
              <p className="text-gray-600 mt-4">Expected Launch: 2025</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        waitlistType="va-benefits"
      />
    </div>
  );
};

export default VAWaitlist;