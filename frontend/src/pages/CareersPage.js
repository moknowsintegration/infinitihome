import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, DollarSign, Clock, Award, Users, CheckCircle, Briefcase, MapPin } from 'lucide-react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const benefits = [
    { icon: DollarSign, title: 'Competitive Pay', description: 'Above-market hourly rates with weekly pay' },
    { icon: Clock, title: 'Flexible Schedule', description: 'Choose shifts that work for your life' },
    { icon: Award, title: 'Training & Growth', description: 'Paid training and career advancement opportunities' },
    { icon: Heart, title: 'Meaningful Work', description: 'Make a real difference in people\'s lives' },
    { icon: Users, title: 'Supportive Team', description: '24/7 support from our care coordination team' },
    { icon: CheckCircle, title: 'Benefits Package', description: 'Health insurance options for full-time employees' },
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Certified Nursing Assistant (CNA)',
      type: 'Full-time / Part-time',
      location: 'Atlanta Metro Area',
      pay: '$15 - $20/hour',
      description: 'Provide personal care assistance to clients in their homes. Help with daily activities, mobility, and personal hygiene.',
      requirements: [
        'Valid Georgia CNA certification',
        'At least 1 year of caregiving experience',
        'Valid driver\'s license and reliable transportation',
        'Pass background check and drug screening',
        'CPR/First Aid certification (or willingness to obtain)',
      ]
    },
    {
      id: 2,
      title: 'Home Health Aide (HHA)',
      type: 'Full-time / Part-time',
      location: 'Atlanta Metro Area',
      pay: '$14 - $18/hour',
      description: 'Assist clients with activities of daily living, light housekeeping, meal preparation, and companionship.',
      requirements: [
        'High school diploma or GED',
        'Previous caregiving experience preferred',
        'Valid driver\'s license and reliable transportation',
        'Pass background check and drug screening',
        'Compassionate and patient demeanor',
      ]
    },
    {
      id: 3,
      title: 'Companion Caregiver',
      type: 'Full-time / Part-time',
      location: 'Atlanta Metro Area',
      pay: '$13 - $16/hour',
      description: 'Provide friendly companionship, conversation, and light assistance to seniors in their homes.',
      requirements: [
        'High school diploma or GED',
        'Genuine interest in helping seniors',
        'Valid driver\'s license and reliable transportation',
        'Pass background check',
        'Excellent communication skills',
      ]
    },
    {
      id: 4,
      title: 'Licensed Practical Nurse (LPN)',
      type: 'Full-time / Part-time / PRN',
      location: 'Atlanta Metro Area',
      pay: '$25 - $35/hour',
      description: 'Provide skilled nursing care including medication administration, wound care, and vital signs monitoring.',
      requirements: [
        'Valid Georgia LPN license',
        'At least 1 year of clinical experience',
        'Home health experience preferred',
        'Valid driver\'s license and reliable transportation',
        'BLS certification',
      ]
    },
    {
      id: 5,
      title: 'Registered Nurse (RN)',
      type: 'Full-time / Part-time / PRN',
      location: 'Atlanta Metro Area',
      pay: '$35 - $50/hour',
      description: 'Provide comprehensive skilled nursing care, assessments, and care plan development for home care clients.',
      requirements: [
        'Valid Georgia RN license',
        'At least 2 years of clinical experience',
        'Home health experience preferred',
        'Valid driver\'s license and reliable transportation',
        'BLS certification',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Caregiving Team
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Make a difference in people's lives while building a rewarding career. 
              We're always looking for compassionate caregivers to join our team.
            </p>
            <a
              href="#positions"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With INFINITI Home Care?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We value our caregivers and provide the support, training, and benefits you need to succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase size={16} className="mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center text-green-600 font-semibold">
                          <DollarSign size={16} className="mr-1" />
                          {job.pay}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="text-purple-600 font-semibold">
                        {selectedJob === job.id ? 'Hide Details ▲' : 'View Details ▼'}
                      </span>
                    </div>
                  </div>
                </div>
                
                {selectedJob === job.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Description:</h4>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-2 mb-6">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                            {req}
                          </li>
                        ))}
                      </ul>
                      
                      <a
                        href={`mailto:careers@infinitihomecare.com?subject=Application for ${job.title}`}
                        className="inline-block btn-primary"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-purple-100 mb-8 text-lg">
              Join our team of compassionate caregivers and start a rewarding career 
              helping others. We offer flexible schedules, competitive pay, and ongoing support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:careers@infinitihomecare.com?subject=General Application"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Email Your Resume
              </a>
              <a
                href="tel:4702645566"
                className="bg-purple-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-400 transition border-2 border-white"
              >
                Call (470) 264-5566
              </a>
            </div>
            
            <p className="text-purple-200 mt-6 text-sm">
              Send your resume to: careers@infinitihomecare.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
