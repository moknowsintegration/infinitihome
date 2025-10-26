import { Smartphone, MapPin, MessageCircle, FileText } from 'lucide-react';

const TechnologyShowcase = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Live Schedule View',
      description: "See today's caregiver with real-time GPS check-in"
    },
    {
      icon: MessageCircle,
      title: 'Secure Messaging',
      description: 'Direct line to caregiver and coordinator'
    },
    {
      icon: FileText,
      title: 'Daily Care Reports',
      description: 'Vitals, medications, and activities documented'
    },
    {
      icon: FileText,
      title: 'Transparent Billing',
      description: 'See charges before billing cycle closes'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Family's Care Command Center
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology that keeps you connected
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Demo Side */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 shadow-xl">
                <Smartphone className="mx-auto text-purple-600 mb-6" size={120} />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Family Portal App
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Stay connected to your loved one's care in real-time
                  </p>
                  <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg">
                    Available on iOS & Android
                  </div>
                </div>
              </div>
            </div>

            {/* Features Side */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Get:</h3>
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-100 rounded-lg p-3 mr-4">
                      <IconComponent className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
              
              <div className="pt-6">
                <a
                  href="tel:4702645566"
                  className="btn-primary inline-block"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;