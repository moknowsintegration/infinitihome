import { useState, useEffect } from 'react';
import { Calculator, DollarSign, Clock, Calendar, CheckCircle } from 'lucide-react';
import { createCarePlan } from '@/utils/api';

const PRICING_RATES = {
  companion: 35,
  personal_care: {
    level1: 38,
    level2: 42,
    level3: 48
  },
  skilled_nursing: {
    level1: 56.5,
    level2: 72.5,
    level3: 82.5
  }
};

const CarePlanCalculator = ({ openWaitlistModal }) => {
  const [serviceType, setServiceType] = useState('personal_care');
  const [level, setLevel] = useState('level2');
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [costs, setCosts] = useState({ hourlyRate: 42, weeklyCost: 1260, monthlyCost: 5456 });
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', zip_code: '' });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    calculateCosts();
  }, [serviceType, level, hoursPerDay, daysPerWeek]);

  const calculateCosts = () => {
    let hourlyRate = 0;

    if (serviceType === 'companion') {
      hourlyRate = PRICING_RATES.companion;
    } else if (serviceType === 'personal_care') {
      hourlyRate = PRICING_RATES.personal_care[level] || PRICING_RATES.personal_care.level1;
    } else if (serviceType === 'skilled_nursing') {
      hourlyRate = PRICING_RATES.skilled_nursing[level] || PRICING_RATES.skilled_nursing.level1;
    }

    const weeklyHours = hoursPerDay * daysPerWeek;
    const weeklyCost = hourlyRate * weeklyHours;
    const monthlyCost = weeklyCost * 4.33;

    setCosts({
      hourlyRate,
      weeklyCost: Math.round(weeklyCost),
      monthlyCost: Math.round(monthlyCost)
    });
  };

  const getServiceLabel = () => {
    const labels = {
      companion: 'Companion Care',
      personal_care: {
        level1: 'Personal Care - Level 1 (Enhanced)',
        level2: 'Personal Care - Level 2 (Advanced)',
        level3: 'Personal Care - Level 3 (Comprehensive)'
      },
      skilled_nursing: {
        level1: 'Skilled Nursing - Level 1 (Essential)',
        level2: 'Skilled Nursing - Level 2 (Specialized)',
        level3: 'Skilled Nursing - Level 3 (Premier)'
      }
    };

    if (serviceType === 'companion') {
      return labels.companion;
    } else {
      return labels[serviceType][level];
    }
  };

  const handleSavePlan = async (e) => {
    e.preventDefault();
    
    try {
      await createCarePlan({
        service_type: serviceType,
        level,
        hours_per_day: hoursPerDay,
        days_per_week: daysPerWeek,
        contact_info: contactInfo
      });
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowContactForm(false);
        setContactInfo({ name: '', email: '', phone: '', zip_code: '' });
      }, 3000);
    } catch (error) {
      console.error('Error saving care plan:', error);
      alert('Error saving care plan. Please try again.');
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Build Your Custom Care Plan & Get Instant Price
          </h2>
          <p className="text-xl text-gray-600">
            Personalized care estimates in seconds
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12" data-testid="care-plan-calculator">
          {/* Step 1: Service Type */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Calculator className="mr-2 text-purple-600" size={24} />
              Step 1: Select Your Service Type
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => setServiceType('companion')}
                className={`p-4 rounded-lg border-2 transition ${
                  serviceType === 'companion'
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-400'
                }`}
                data-testid="service-type-companion"
              >
                <p className="font-semibold text-gray-900">Companion Care</p>
                <p className="text-sm text-gray-600">$35/hour</p>
              </button>
              <button
                onClick={() => setServiceType('personal_care')}
                className={`p-4 rounded-lg border-2 transition ${
                  serviceType === 'personal_care'
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-400'
                }`}
                data-testid="service-type-personal-care"
              >
                <p className="font-semibold text-gray-900">Personal Care</p>
                <p className="text-sm text-gray-600">$38-$48/hour</p>
              </button>
              <button
                onClick={() => setServiceType('skilled_nursing')}
                className={`p-4 rounded-lg border-2 transition ${
                  serviceType === 'skilled_nursing'
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-300 hover:border-purple-400'
                }`}
                data-testid="service-type-skilled-nursing"
              >
                <p className="font-semibold text-gray-900">Skilled Nursing</p>
                <p className="text-sm text-gray-600">$48-$95/hour</p>
              </button>
            </div>
          </div>

          {/* Step 2: Care Level (if not companion) */}
          {serviceType !== 'companion' && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Step 2: Care Level Needed
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button
                  onClick={() => setLevel('level1')}
                  className={`p-4 rounded-lg border-2 transition ${
                    level === 'level1'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                  data-testid="care-level-1"
                >
                  <p className="font-semibold text-gray-900">Level 1</p>
                  <p className="text-sm text-gray-600">
                    {serviceType === 'personal_care' ? 'Enhanced ($38/hr)' : 'Essential ($56.50/hr)'}
                  </p>
                </button>
                <button
                  onClick={() => setLevel('level2')}
                  className={`p-4 rounded-lg border-2 transition ${
                    level === 'level2'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                  data-testid="care-level-2"
                >
                  <p className="font-semibold text-gray-900">Level 2</p>
                  <p className="text-sm text-gray-600">
                    {serviceType === 'personal_care' ? 'Advanced ($42/hr)' : 'Specialized ($72.50/hr)'}
                  </p>
                </button>
                <button
                  onClick={() => setLevel('level3')}
                  className={`p-4 rounded-lg border-2 transition ${
                    level === 'level3'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                  data-testid="care-level-3"
                >
                  <p className="font-semibold text-gray-900">Level 3</p>
                  <p className="text-sm text-gray-600">
                    {serviceType === 'personal_care' ? 'Comprehensive ($48/hr)' : 'Premier ($82.50/hr)'}
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Schedule */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="mr-2 text-purple-600" size={24} />
              Step {serviceType === 'companion' ? '2' : '3'}: Schedule Requirements
            </h3>
            
            <div className="space-y-6">
              {/* Hours per day */}
              <div>
                <label className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">Hours per day:</span>
                  <span className="text-2xl font-bold text-purple-600">{hoursPerDay} hours</span>
                </label>
                <input
                  type="range"
                  min="2"
                  max="24"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                  data-testid="hours-slider"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>2 hrs</span>
                  <span>24 hrs</span>
                </div>
              </div>

              {/* Days per week */}
              <div>
                <label className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">Days per week:</span>
                  <span className="text-2xl font-bold text-purple-600">{daysPerWeek} days</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                  data-testid="days-slider"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-1">
                  <span>1 day</span>
                  <span>7 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Estimate */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-8 mb-8" data-testid="cost-estimate">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              YOUR CUSTOM CARE PLAN ESTIMATE
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Service:</span>
                <span className="font-semibold text-gray-900">{getServiceLabel()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Rate:</span>
                <span className="font-semibold text-purple-600 text-xl">${costs.hourlyRate}/hour</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Schedule:</span>
                <span className="font-semibold text-gray-900">{hoursPerDay} hours/day × {daysPerWeek} days/week</span>
              </div>
            </div>

            <div className="border-t-2 border-purple-300 pt-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Weekly Cost:</span>
                <span className="text-3xl font-bold text-purple-600" data-testid="weekly-cost">
                  ${costs.weeklyCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Monthly Cost (4.33 weeks):</span>
                <span className="text-3xl font-bold text-purple-600" data-testid="monthly-cost">
                  ${costs.monthlyCost.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-4 text-center">
              * Estimate only. Final pricing determined after free assessment.
            </p>
          </div>

          {/* Payment Options */}
          <div className="bg-white border-2 border-purple-200 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={24} />
              We Accept These Payment Options:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Georgia Medicaid Waiver Programs</strong> (CCSP, SOURCE, NOW & COMP Waivers)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Peachstate Health Plan</strong> (Georgia Medicaid Managed Care)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Private Pay</strong> - Flexible Payment Plans (Weekly, bi-weekly, or monthly billing)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span><strong>Long-Term Care Insurance</strong> (Most major carriers accepted)</span>
              </li>
            </ul>
          </div>

          {/* Coming Soon Waitlist */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              🔜 COMING SOON - Join Our Waitlist:
            </h4>
            <div className="space-y-3">
              <button
                onClick={() => openWaitlistModal('medicare')}
                className="w-full flex items-center justify-between p-4 bg-white rounded-lg border-2 border-purple-400 hover:border-purple-600 hover:bg-purple-50 transition"
                data-testid="medicare-waitlist-btn"
              >
                <div className="flex items-center">
                  <input type="checkbox" disabled className="mr-3" />
                  <span className="font-semibold text-gray-900">Medicare Services (Skilled Nursing)</span>
                </div>
                <span className="text-sm text-purple-600 font-semibold">Notify Me When Available</span>
              </button>
              <button
                onClick={() => openWaitlistModal('va-benefits')}
                className="w-full flex items-center justify-between p-4 bg-white rounded-lg border-2 border-purple-400 hover:border-purple-600 hover:bg-purple-50 transition"
                data-testid="va-waitlist-btn"
              >
                <div className="flex items-center">
                  <input type="checkbox" disabled className="mr-3" />
                  <span className="font-semibold text-gray-900">VA Benefits (Veterans Aid & Attendance)</span>
                </div>
                <span className="text-sm text-purple-600 font-semibold">Join VA Waitlist</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => setShowContactForm(!showContactForm)}
              className="w-full btn-primary"
              data-testid="get-detailed-quote-btn"
            >
              GET DETAILED QUOTE & FREE ASSESSMENT
            </button>
            
            <a
              href="tel:4702645566"
              className="block w-full text-center btn-outline"
            >
              💬 Questions about payment options? Call (470) 264-5566
            </a>
          </div>

          {/* Contact Form */}
          {showContactForm && !submitSuccess && (
            <form onSubmit={handleSavePlan} className="mt-8 p-6 bg-gray-50 rounded-lg" data-testid="contact-form">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Get Your Detailed Quote
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg"
                  data-testid="contact-name"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg"
                  data-testid="contact-email"
                />
                <input
                  type="tel"
                  placeholder="Phone *"
                  required
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg"
                  data-testid="contact-phone"
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={contactInfo.zip_code}
                  onChange={(e) => setContactInfo({ ...contactInfo, zip_code: e.target.value })}
                  className="p-3 border border-gray-300 rounded-lg"
                  data-testid="contact-zip"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 btn-primary"
                data-testid="submit-contact-btn"
              >
                Submit Request
              </button>
            </form>
          )}

          {/* Success Message */}
          {submitSuccess && (
            <div className="mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center" data-testid="success-message">
              <CheckCircle className="text-green-500 mx-auto mb-3" size={48} />
              <h4 className="text-xl font-bold text-green-700 mb-2">Request Submitted!</h4>
              <p className="text-gray-700">
                We'll contact you within 24 hours to discuss your care plan and schedule a free assessment.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarePlanCalculator;
