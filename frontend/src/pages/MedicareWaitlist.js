import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/modals/WaitlistModal';
import { Clock, CheckCircle, Shield, Heart } from 'lucide-react';

const MedicareWaitlist = () => {
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
                Medicare Home Care Services
              </h1>
              <p className="text-2xl text-purple-600 font-semibold mb-4">
                Coming Soon to INFINITI Home Care Enterprise
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Be first to know when we're Medicare-certified!
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary text-xl px-12 py-4"
                data-testid="join-medicare-waitlist-hero-btn"
              >
                Join Medicare Waitlist
              </button>
            </div>

            {/* What We're Working On */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Medicare Services We're Adding
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Shield className="text-purple-600 mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Part A Skilled Nursing Services
                    </h3>
                    <p className="text-gray-600">
                      Post-hospital skilled nursing care in the comfort of your home
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="text-purple-600 mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Part B Home Health Services
                    </h3>
                    <p className="text-gray-600">
                      Intermittent skilled nursing, physical therapy, and more
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-600 mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Post-Hospital Discharge Care
                    </h3>
                    <p className="text-gray-600">
                      Seamless transition from hospital to home with expert care
                    </p>
                  </div>
                </div>
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
                  <h3 className="font-bold text-gray-900 mb-2">Priority Scheduling</h3>
                  <p className="text-gray-600 text-sm">
                    Get first access to our Medicare services when we launch
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Email Notifications</h3>
                  <p className="text-gray-600 text-sm">
                    Be notified immediately when we're Medicare-certified
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">No Obligation</h3>
                  <p className="text-gray-600 text-sm">
                    Joining the waitlist doesn't commit you to anything
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={32} />
                  <h3 className="font-bold text-gray-900 mb-2">Early Bird Benefits</h3>
                  <p className="text-gray-600 text-sm">
                    Potential discounts and promotions for waitlist members
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
                <p className="text-gray-600 mb-4">Need care services now?</p>
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
                data-testid="join-medicare-waitlist-bottom-btn"
              >
                Join Medicare Waitlist Now
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
        waitlistType="medicare"
      />
    </div>
  );
};

export default MedicareWaitlist;