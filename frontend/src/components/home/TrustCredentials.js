import { Shield, CheckCircle, Award, Lock } from 'lucide-react';

const TrustCredentials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Licensed, Insured, Trusted
          </h2>
          <p className="text-xl text-gray-600">
            Your family's safety is our top priority
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center" data-testid="credential-license">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="text-purple-600" size={48} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Georgia Licensed</h3>
            <p className="text-sm text-gray-600 mb-2">Healthcare Facility License</p>
            <p className="text-xs text-gray-500">#[INSERT LICENSE]</p>
          </div>

          <div className="text-center" data-testid="credential-insurance">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award className="text-purple-600" size={48} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Fully Insured</h3>
            <p className="text-sm text-gray-600 mb-2">Liability Insurance</p>
            <p className="text-xs text-gray-500">$2M Coverage</p>
          </div>

          <div className="text-center" data-testid="credential-bonded">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="text-purple-600" size={48} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Bonded</h3>
            <p className="text-sm text-gray-600 mb-2">Surety Bond</p>
            <p className="text-xs text-gray-500">Your Protection</p>
          </div>

          <div className="text-center" data-testid="credential-background">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle className="text-purple-600" size={48} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Background Checks</h3>
            <p className="text-sm text-gray-600 mb-2">FBI & State Criminal</p>
            <p className="text-xs text-gray-500">All Caregivers</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Commitment to Safety
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Comprehensive Screening</p>
                <p className="text-sm text-gray-600">FBI and state criminal background checks for every caregiver</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Certified Professionals</p>
                <p className="text-sm text-gray-600">CPR, First Aid, and specialized care certifications</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Ongoing Training</p>
                <p className="text-sm text-gray-600">Continuous education in latest care techniques</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Quality Monitoring</p>
                <p className="text-sm text-gray-600">Regular supervisor visits and family feedback reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-500">
          <em>Note: Add actual Georgia license number when provided by client</em>
        </div>
      </div>
    </section>
  );
};

export default TrustCredentials;