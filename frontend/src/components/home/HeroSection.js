import { CheckCircle, Star, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and Main Heading */}
          <img 
            src="https://customer-assets.emergentagent.com/job_doc-upload-portal/artifacts/cbdxw1p3_Infiniti%20purple%20logo%20website.png" 
            alt="INFINITI Home Care Enterprise"
            className="h-32 md:h-40 mx-auto mb-6"
          />
          <p className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
            Atlanta's Premier Private Home Care Service
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience compassionate, technology-enabled care with dedicated coordinators
            and certified professionals
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#calculator"
              className="btn-primary text-center"
              data-testid="build-care-plan-btn"
            >
              Build Your Care Plan
            </a>
            <a
              href="tel:4702645566"
              className="btn-outline text-center"
              data-testid="schedule-consultation-btn"
            >
              Schedule Video Consultation
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm" data-testid="trust-badge-licensed">
              <Shield className="text-purple-600 mb-2" size={32} />
              <p className="text-sm font-semibold text-gray-800">Georgia Licensed</p>
              <p className="text-xs text-gray-600">Provider</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm" data-testid="trust-badge-medicaid">
              <CheckCircle className="text-green-600 mb-2" size={32} />
              <p className="text-sm font-semibold text-gray-800">Medicaid &</p>
              <p className="text-xs text-gray-600">Peachstate Accepted</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm" data-testid="trust-badge-rating">
              <Star className="text-yellow-500 mb-2" size={32} fill="#EAB308" />
              <p className="text-sm font-semibold text-gray-800">4.9/5 Rating</p>
              <p className="text-xs text-gray-600">500+ Families</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm" data-testid="trust-badge-insurance">
              <Award className="text-purple-600 mb-2" size={32} />
              <p className="text-sm font-semibold text-gray-800">LTC Insurance</p>
              <p className="text-xs text-gray-600">Welcome</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;