import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CreditCard, CheckCircle, DollarSign, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivatePayPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <CreditCard className="text-purple-600 mx-auto mb-6" size={80} />
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Private Pay Home Care Atlanta
              </h1>
              <p className="text-2xl text-purple-600 font-semibold mb-4">
                Flexible Payment Plans - No Insurance Required
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Pay as you need care with INFINITI's flexible private pay options
              </p>
              <a href="tel:4702645566" className="btn-primary text-xl px-12 py-4">
                📞 Call (470) 264-5566
              </a>
            </div>

            {/* Why Choose Private Pay */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Choose Private Pay?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Insurance Needed</h3>
                  <p className="text-gray-600">
                    Start care immediately without waiting for insurance approvals or authorizations
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Flexibility</h3>
                  <p className="text-gray-600">
                    Choose your own schedule, adjust hours as needed, no long-term commitments
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600">
                    Know exactly what you're paying - no hidden fees or surprise charges
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <CheckCircle className="text-green-500 mb-3" size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Service</h3>
                  <p className="text-gray-600">
                    Direct relationship with caregivers, personalized attention, higher quality care
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Schedules */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Flexible Payment Schedules
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 text-center">
                  <Calendar className="text-purple-600 mx-auto mb-3" size={48} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekly Billing</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Billed every Friday for the previous week's services
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-gray-700">
                      <strong>Best for:</strong> Short-term care needs or those who prefer frequent billing
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 text-center">
                  <Calendar className="text-purple-600 mx-auto mb-3" size={48} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bi-Weekly Billing</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Billed twice a month for services rendered
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-gray-700">
                      <strong>Best for:</strong> Regular ongoing care with moderate payment frequency
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 text-center">
                  <Calendar className="text-purple-600 mx-auto mb-3" size={48} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Billing</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Billed once per month for all services
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-gray-700">
                      <strong>Best for:</strong> Long-term care with predictable schedules
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-purple-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Accepted Payment Methods
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <CreditCard className="text-purple-600 mx-auto mb-3" size={48} />
                  <h3 className="font-bold text-gray-900 mb-2">Credit/Debit Cards</h3>
                  <p className="text-sm text-gray-600">
                    All major cards accepted (Visa, Mastercard, Amex, Discover)
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <DollarSign className="text-purple-600 mx-auto mb-3" size={48} />
                  <h3 className="font-bold text-gray-900 mb-2">ACH Bank Transfer</h3>
                  <p className="text-sm text-gray-600">
                    Automatic bank transfers - convenient and secure
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <CheckCircle className="text-purple-600 mx-auto mb-3" size={48} />
                  <h3 className="font-bold text-gray-900 mb-2">Checks</h3>
                  <p className="text-sm text-gray-600">
                    Personal or business checks accepted
                  </p>
                </div>
              </div>
            </div>

            {/* Special Options */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Special Payment Options
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={28} />
                    Family Cost-Sharing Plans
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Multiple family members can contribute to care costs. We can split billing across 
                    multiple payment methods or send invoices to different family members.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={28} />
                    Auto-Pay Discounts
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Save 3% when you enroll in automatic monthly payments via ACH or credit card.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={28} />
                    No Long-Term Contracts
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Pay only for the care you need. No commitments, no cancellation fees, adjust or stop 
                    services anytime with 2 weeks notice.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={28} />
                    Payment Plans Available
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Need help managing costs? We offer customized payment plans for qualifying families. 
                    Contact us to discuss options.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Transparent Pricing
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h3 className="font-bold text-gray-900">Companion Care</h3>
                    <p className="text-sm text-gray-600">Light assistance and companionship</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">$35/hour</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h3 className="font-bold text-gray-900">Personal Care</h3>
                    <p className="text-sm text-gray-600">Assistance with daily living activities</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">$38-$48/hour</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h3 className="font-bold text-gray-900">Skilled Nursing</h3>
                    <p className="text-sm text-gray-600">Licensed nursing care</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">$48-$95/hour</div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-6">
                Use our <Link to="/#calculator" className="text-purple-600 underline">Care Plan Calculator</Link> to 
                estimate your monthly costs
              </p>
            </div>

            {/* CTA */}
            <div className="text-center bg-purple-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Discuss Payment Plans?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our care coordinators can help you find the best payment option for your family
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

export default PrivatePayPage;