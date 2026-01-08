import { CheckCircle, Star, Shield, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')"
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Atlanta's Premier Private<br />
            <span className="text-purple-600">Home Care Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Experience compassionate, technology-enabled care
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Dedicated coordinators and certified professionals providing 
            personalized care in the comfort of your home
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow" data-testid="trust-badge-licensed">
              <Shield className="text-purple-600 mb-2" size={32} />
              <p className="text-sm font-semibold text-gray-800">Georgia Licensed</p>
              <p className="text-xs text-gray-600">Provider</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow" data-testid="trust-badge-medicaid">
              <CheckCircle className="text-green-600 mb-2" size={32} />
              <p className="text-sm font-semibold text-gray-800">Medicaid &</p>
              <p className="text-xs text-gray-600">Peachstate Accepted</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow" data-testid="trust-badge-rating">
              <Star className="text-yellow-500 mb-2" size={32} fill="#EAB308" />
              <p className="text-sm font-semibold text-gray-800">4.9/5 Rating</p>
              <p className="text-xs text-gray-600">500+ Families</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow" data-testid="trust-badge-insurance">
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
