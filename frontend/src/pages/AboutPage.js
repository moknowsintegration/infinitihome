import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Shield, Award, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About INFINITI Home Care Enterprise
            </h1>
            <p className="text-xl text-purple-100">
              Atlanta's Premier Private Home Care Service - Providing compassionate, 
              professional care that allows your loved ones to age with dignity in the 
              comfort of their own home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional, personalized home care services that enhance the 
                quality of life for our clients and their families. We are committed to 
                delivering compassionate care with integrity, respect, and professionalism, 
                allowing individuals to maintain their independence and dignity in the 
                comfort of their own homes.
              </p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred home care provider in the Atlanta 
                metropolitan area, recognized for our commitment to excellence, innovation 
                in care delivery, and the positive impact we make in the lives of those 
                we serve. We envision a community where quality home care is accessible 
                to all who need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose INFINITI Home Care?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your loved ones receive the best possible care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-purple-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">
                Fully licensed by the State of Georgia, bonded, and insured for your peace of mind.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Vetted Caregivers</h3>
              <p className="text-gray-600 text-sm">
                All caregivers undergo thorough background checks and professional training.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock care available with flexible scheduling to meet your needs.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-purple-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Personalized Care</h3>
              <p className="text-gray-600 text-sm">
                Customized care plans tailored to each client's unique needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Compassion</h3>
                  <p className="text-gray-600">
                    We treat every client with genuine care, empathy, and understanding, 
                    recognizing the trust families place in us.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Integrity</h3>
                  <p className="text-gray-600">
                    We operate with honesty and transparency in all our interactions, 
                    maintaining the highest ethical standards.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in everything we do, continuously improving 
                    our services to exceed expectations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Respect</h3>
                  <p className="text-gray-600">
                    We honor the dignity, independence, and individual preferences of 
                    each client we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
            <p className="text-gray-600 mb-8">
              We proudly serve families throughout the greater Atlanta metropolitan area.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Atlanta', 'Decatur', 'Buckhead', 'Sandy Springs', 'Marietta',
                'Alpharetta', 'Roswell', 'Dunwoody', 'Brookhaven', 'Smyrna',
                'Kennesaw', 'Johns Creek', 'Lawrenceville', 'Stone Mountain'
              ].map((city) => (
                <span 
                  key={city}
                  className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-purple-100 mb-8 text-lg">
              Contact us today for a free, no-obligation consultation. We're here to help 
              you find the perfect care solution for your loved one.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:4702645566"
                className="flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                <Phone className="mr-2" size={20} />
                (470) 264-5566
              </a>
              <a
                href="/contact"
                className="flex items-center bg-purple-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-400 transition border-2 border-white"
              >
                <Mail className="mr-2" size={20} />
                Contact Us Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
