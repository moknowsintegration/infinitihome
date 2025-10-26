import { CheckCircle, Clock, Shield, CreditCard, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentOptionsSection = ({ openWaitlistModal }) => {
  return (
    <section id="payment-options" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How to Pay for Your Care - Multiple Options
          </h2>
          <p className="text-xl text-gray-600">
            We work with you to find the best payment solution for your family
          </p>
        </div>

        {/* Current Payment Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            💳 CURRENT PAYMENT OPTIONS
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Medicaid */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition" data-testid="payment-card-medicaid">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="text-green-500" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">MEDICAID</h4>
              <p className="text-sm text-gray-600 mb-4">
                Georgia Medicaid Waiver Programs:
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• CCSP</li>
                <li>• SOURCE</li>
                <li>• NOW Waiver</li>
                <li>• COMP Waiver</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">
                We handle all billing and documentation
              </p>
              <Link
                to="/medicaid"
                className="block w-full text-center btn-outline text-sm py-2"
              >
                Learn More
              </Link>
            </div>

            {/* Peachstate */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition" data-testid="payment-card-peachstate">
              <div className="flex items-center justify-center mb-4">
                <Heart className="text-green-500" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">PEACHSTATE HEALTH PLAN</h4>
              <p className="text-sm text-gray-600 mb-4">
                Georgia's Medicaid Managed Care Organization
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>✓ In-network provider</li>
                <li>✓ Direct billing</li>
                <li>✓ Authorization handled</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">
                Covers most home care services
              </p>
              <Link
                to="/peachstate"
                className="block w-full text-center btn-outline text-sm py-2"
              >
                Learn More
              </Link>
            </div>

            {/* Private Pay */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition" data-testid="payment-card-private-pay">
              <div className="flex items-center justify-center mb-4">
                <CreditCard className="text-green-500" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">PRIVATE PAY</h4>
              <p className="text-sm text-gray-600 mb-4">
                Pay as you need care
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Weekly billing</li>
                <li>• Bi-weekly billing</li>
                <li>• Monthly billing</li>
              </ul>
              <p className="text-xs text-gray-600 mb-4">
                Credit cards, ACH, checks accepted. Flexible payment plans available.
              </p>
              <Link
                to="/private-pay"
                className="block w-full text-center btn-outline text-sm py-2"
              >
                Learn More
              </Link>
            </div>

            {/* LTC Insurance */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition" data-testid="payment-card-ltc">
              <div className="flex items-center justify-center mb-4">
                <Shield className="text-green-500" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">LONG-TERM CARE INSURANCE</h4>
              <p className="text-sm text-gray-600 mb-4">
                We accept most major LTC insurance carriers
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>✓ Direct claim submission</li>
                <li>✓ Benefit verification</li>
                <li>✓ Documentation provided</li>
              </ul>
              <Link
                to="/ltc-insurance"
                className="block w-full text-center btn-outline text-sm py-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* LTC Insurance Details */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
          <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🛡️ LONG-TERM CARE INSURANCE
          </h4>
          <p className="text-gray-600 mb-6 text-center">
            We accept most major LTC insurance carriers:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6 text-gray-700">
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 mr-2" size={20} />
              <span>Genworth</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 mr-2" size={20} />
              <span>Mutual of Omaha</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 mr-2" size={20} />
              <span>John Hancock</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 mr-2" size={20} />
              <span>Transamerica</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 mr-2" size={20} />
              <span>MetLife</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 mr-2" size={20} />
              <span>Northwestern Mutual</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 mr-2" size={20} />
              <span>Prudential</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 mr-2" size={20} />
              <span>And many more</span>
            </div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6">
            <h5 className="font-semibold text-gray-900 mb-3">What We Do:</h5>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                <span>Submit claims directly to your insurer</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                <span>Provide required documentation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                <span>Help verify your benefits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                <span>Coordinate with adjusters</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Coming Soon Waitlist */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            🔜 COMING SOON - JOIN THE WAITLIST
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Medicare Waitlist */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-lg p-8" data-testid="medicare-coming-soon">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-purple-600" size={56} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 text-center mb-3">MEDICARE</h4>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Skilled Nursing Services Coming Soon</p>
                <p className="text-xs text-gray-600">
                  We're currently working on Medicare certification to offer:
                </p>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Part A skilled nursing services</li>
                  <li>• Part B home health services</li>
                  <li>• Post-hospital discharge care</li>
                </ul>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center font-semibold">Expected: 2025</p>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Be first to know when we're Medicare-certified
              </p>
              <button
                onClick={() => openWaitlistModal('medicare')}
                className="w-full btn-primary"
                data-testid="join-medicare-waitlist-btn"
              >
                Join Medicare Waitlist
              </button>
              <div className="mt-4 bg-white rounded-lg p-3">
                <p className="text-xs text-gray-600 font-semibold mb-2">When you join:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>✓ Priority scheduling when available</li>
                  <li>✓ Email notification at launch</li>
                  <li>✓ No obligation to enroll</li>
                </ul>
              </div>
            </div>

            {/* VA Benefits Waitlist */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-lg p-8" data-testid="va-coming-soon">
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-purple-600" size={56} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 text-center mb-3">VA BENEFITS</h4>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Veterans Aid & Attendance Benefits Coming Soon
                </p>
                <p className="text-xs text-gray-600 mb-2">
                  We're working to become a VA-approved provider to serve veterans and their spouses.
                </p>
                <p className="text-xs text-gray-700 font-semibold">
                  VA Aid & Attendance Benefit:
                </p>
                <ul className="text-xs text-gray-700 mt-2 space-y-1">
                  <li>• Up to $2,300/month for veterans</li>
                  <li>• Up to $1,800/month for surviving spouses</li>
                  <li>• Covers in-home care services</li>
                </ul>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center font-semibold">Expected: 2025</p>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Join our veterans waitlist for priority access
              </p>
              <button
                onClick={() => openWaitlistModal('va-benefits')}
                className="w-full btn-primary"
                data-testid="join-va-waitlist-btn"
              >
                Join VA Waitlist
              </button>
              <div className="mt-4 bg-white rounded-lg p-3">
                <p className="text-xs text-gray-600 font-semibold mb-2">When you join:</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>✓ Free VA benefits consultation</li>
                  <li>✓ Application assistance available</li>
                  <li>✓ Priority placement when approved</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Questions about payment? Our care coordinators can help determine your best options:
          </p>
          <a
            href="tel:4702645566"
            className="inline-block btn-primary text-xl"
          >
            📞 (470) 264-5566
          </a>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptionsSection;