import { Heart, User, Stethoscope, Clock, Home, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'companion',
      icon: Heart,
      title: 'Companion Care',
      rate: '$35/hour',
      image: '/images/services/companion-care.jpg',
      description: 'Friendly companionship and light assistance for independent seniors',
      features: [
        'Meal preparation',
        'Light housekeeping',
        'Medication reminders',
        'Transportation to appointments',
        'Social engagement and activities'
      ]
    },
    {
      id: 'personal-care',
      icon: User,
      title: 'Personal Care',
      rate: '$38-$48/hour',
      image: '/images/services/personal-care.jpg',
      description: 'Comprehensive assistance with daily living activities',
      features: [
        'Bathing and grooming assistance',
        'Dressing and mobility support',
        'Toileting and incontinence care',
        'Transfer assistance',
        'Medication management'
      ]
    },
    {
      id: 'skilled-nursing',
      icon: Stethoscope,
      title: 'Skilled Nursing',
      rate: '$48-$95/hour',
      image: '/images/services/skilled-nursing.jpg',
      description: 'Licensed nursing care for complex medical needs',
      features: [
        'Wound care and IV therapy',
        'Medication administration',
        'Chronic disease management',
        'Post-surgical care',
        'Health monitoring and assessments'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Care Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized care plans tailored to your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                data-testid={`service-card-${service.id}`}
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Card Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="text-purple-600" size={48} />
                    <span className="text-2xl font-bold text-purple-600">{service.rate}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Shield className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Payment Options for This Service:
                    </p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>&#10003; Medicaid (check waiver eligibility)</li>
                      <li>&#10003; Peachstate Health Plan</li>
                      <li>&#10003; Private Pay</li>
                      <li>&#10003; Long-Term Care Insurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose INFINITI?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="text-purple-600 mx-auto mb-4" size={48} />
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-sm text-gray-600">Round-the-clock care when you need it</p>
            </div>
            <div className="text-center">
              <Shield className="text-purple-600 mx-auto mb-4" size={48} />
              <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
              <p className="text-sm text-gray-600">Certified caregivers you can trust</p>
            </div>
            <div className="text-center">
              <Home className="text-purple-600 mx-auto mb-4" size={48} />
              <h4 className="font-semibold text-gray-900 mb-2">Personalized Care</h4>
              <p className="text-sm text-gray-600">Customized plans for your unique needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
