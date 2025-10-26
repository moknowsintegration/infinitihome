import { User, Heart, Languages, Award, Play } from 'lucide-react';

const CaregiverShowcase = () => {
  // PLACEHOLDER: Replace with real caregiver profiles
  const caregivers = [
    {
      name: 'Maria L.',
      experience: '8 Years',
      specialty: "Alzheimer's Care",
      languages: 'Spanish/English',
      image: null // Replace with actual photo
    },
    {
      name: 'James K.',
      experience: '12 Years',
      specialty: 'Stroke Recovery',
      languages: 'English',
      image: null
    },
    {
      name: 'Chen W.',
      experience: '6 Years',
      specialty: "Parkinson's Care",
      languages: 'Mandarin/English',
      image: null
    },
    {
      name: 'Rosa M.',
      experience: '10 Years',
      specialty: 'Diabetes Management',
      languages: 'Spanish/English',
      image: null
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Atlanta's Elite Care Professionals
          </h2>
          <p className="text-xl text-gray-600">
            Background-verified, certified, and compassionate
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {caregivers.map((caregiver, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              data-testid={`caregiver-${index + 1}`}
            >
              {/* Profile Image Placeholder */}
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 h-48 flex items-center justify-center">
                <User className="text-purple-400" size={80} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caregiver.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Award className="text-purple-600 mr-2" size={16} />
                    <span>{caregiver.experience} Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="text-purple-600 mr-2" size={16} />
                    <span>{caregiver.specialty}</span>
                  </div>
                  <div className="flex items-center">
                    <Languages className="text-purple-600 mr-2" size={16} />
                    <span>{caregiver.languages}</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full btn-outline text-sm py-2 flex items-center justify-center">
                  <Play size={14} className="mr-2" />
                  Video Intro
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="tel:4702645566" className="btn-primary">
            View All Caregivers
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <em>Note: Placeholder profiles. Replace with actual caregiver photos and bios.</em>
        </div>
      </div>
    </section>
  );
};

export default CaregiverShowcase;