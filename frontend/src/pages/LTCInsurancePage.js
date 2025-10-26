import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LTCInsurancePage = () => {
  const carriers = [
    'Genworth', 'Mutual of Omaha', 'John Hancock', 'Transamerica',
    'MetLife', 'Northwestern Mutual', 'Prudential', 'Bankers Life',
    'Lincoln Financial', 'New York Life', 'MassMutual', 'Nationwide'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-12">
              <Shield className="text-purple-600 mx-auto mb-6" size={80} />
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Long-Term Care Insurance Home Care
              </h1>
              <p className="text-2xl text-purple-600 font-semibold mb-4">
                INFINITI Accepts Most Major LTC Insurance Carriers
              </p>
              <p className="text-xl text-gray-600 mb-8">
                We handle claims and billing directly with your insurance company
              </p>
              <a href="tel:4702645566" className="btn-primary text-xl px-12 py-4">
                📞 Call (470) 264-5566
              </a>
            </div>

            {/* Carriers We Accept */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                LTC Insurance Carriers We Work With
              </h2>
              <p className="text-center text-gray-600 mb-8">
                We accept most major long-term care insurance carriers, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {carriers.map((carrier, index) => (
                  <div key={index} className="bg-purple-50 rounded-lg p-4 text-center">
                    <CheckCircle className="text-purple-600 mx-auto mb-2" size={24} />
                    <p className="font-semibold text-gray-900">{carrier}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600">
                Don't see your carrier? <a href="tel:4702645566" className="text-purple-600 underline">Call us</a> - 
                we work with many other carriers too!
              </p>
            </div>

            {/* What We Do For You */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                What INFINITI Does For You
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={28} />
                    Submit Claims Directly to Your Insurer
                  </h3>
                  <p className="text-gray-700 ml-11">
                    We file all claims on your behalf - no forms for you to fill out. We submit detailed 
                    invoices and required documentation directly to your insurance company.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={28} />
                    Provide Required Documentation
                  </h3>
                  <p className="text-gray-700 ml-11">
                    We maintain comprehensive service records, caregiver certifications, and care plans 
                    that meet your insurer's requirements for reimbursement.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={28} />
                    Help Verify Your Benefits
                  </h3>
                  <p className="text-gray-700 ml-11">
                    Before starting care, we'll contact your insurance company to verify your benefits, 
                    daily/monthly limits, and any waiting periods or restrictions.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={28} />
                    Coordinate with Adjusters
                  </h3>
                  <p className="text-gray-700 ml-11">
                    We communicate directly with your insurance adjuster, answer questions, provide 
                    updates, and handle any additional documentation requests.
                  </p>
                </div>
              </div>
            </div>

            {/* How LTC Insurance Works */}
            <div className="bg-purple-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                How LTC Insurance Reimbursement Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Check Your Policy</h3>
                    <p className="text-gray-600">
                      Review your policy to understand your daily/monthly benefit amount, waiting periods, 
                      and covered services. We can help you understand your coverage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">We Verify Your Benefits</h3>
                    <p className="text-gray-600">
                      INFINITI contacts your insurance company to verify coverage and obtain any required 
                      pre-authorization for services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">You Pay Upfront</h3>
                    <p className="text-gray-600">
                      Most LTC policies work on a reimbursement basis. You pay INFINITI directly, and we 
                      provide detailed invoices for you to submit to your insurer, or we submit claims directly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Get Reimbursed</h3>
                    <p className="text-gray-600">
                      Your insurance company reviews the claim and reimburses you (or us, if we billed directly) 
                      according to your policy terms. Typical turnaround is 2-4 weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Payment Options with LTC Insurance
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Option 1: Direct Billing</h3>
                  <p className="text-gray-700 mb-4">
                    We bill your insurance company directly. You pay any difference between our rates and 
                    your policy's daily benefit.
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <strong>Example:</strong> Our rate is $42/hr, insurance covers up to $200/day. 
                      If you use 4 hours ($168), insurance covers it all.
                    </p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Option 2: Reimbursement</h3>
                  <p className="text-gray-700 mb-4">
                    You pay INFINITI, we provide documentation, and you submit to insurance for reimbursement.
                  </p>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <strong>Best for:</strong> Policies that require member submission or have specific 
                      claim procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents You'll Need */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Documents You'll Need
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <FileText className="text-purple-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Insurance Policy Information</h4>
                    <p className="text-sm text-gray-600">Policy number, insurer contact info, benefit details</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <FileText className="text-purple-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Doctor's Certification</h4>
                    <p className="text-sm text-gray-600">Most policies require physician certification of need</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <FileText className="text-purple-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Care Plan</h4>
                    <p className="text-sm text-gray-600">We'll create this - detailed plan of services provided</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                  <FileText className="text-purple-600 mr-3 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Activity of Daily Living (ADL) Assessment</h4>
                    <p className="text-sm text-gray-600">We'll conduct this during your free assessment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-purple-50 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Check Your LTC Insurance Benefits?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our care coordinators can help verify your coverage and explain your options
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

export default LTCInsurancePage;