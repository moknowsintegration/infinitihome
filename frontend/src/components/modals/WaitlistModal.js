import { useState } from 'react';
import { X, CheckCircle, Lock } from 'lucide-react';
import { joinWaitlist } from '@/utils/api';

const WaitlistModal = ({ isOpen, onClose, waitlistType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip_code: '',
    needs_care_in: 'within-1-month',
    services_needed: [],
    additional_notes: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const getTitle = () => {
    return waitlistType === 'medicare' ? 'Medicare' : 'VA Benefits';
  };

  const handleServiceToggle = (service) => {
    const services = [...formData.services_needed];
    if (services.includes(service)) {
      setFormData({
        ...formData,
        services_needed: services.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        services_needed: [...services, service]
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await joinWaitlist({
        waitlist_type: waitlistType,
        ...formData
      });
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          zip_code: '',
          needs_care_in: 'within-1-month',
          services_needed: [],
          additional_notes: ''
        });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error joining waitlist:', error);
      alert('Error joining waitlist. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" data-testid="waitlist-modal">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Join Our {getTitle()} Waitlist</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition"
              data-testid="close-modal-btn"
            >
              <X size={28} />
            </button>
          </div>
          <p className="mt-2 text-purple-100">
            Be first to know when we start accepting {getTitle()}!
          </p>
        </div>

        {/* Form Content */}
        <div className="p-8">
          {!submitSuccess ? (
            <form onSubmit={handleSubmit}>
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                    placeholder="Your full name"
                    data-testid="waitlist-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                    placeholder="your@email.com"
                    data-testid="waitlist-email"
                  />
                </div>
              </div>

              {/* Phone & Zip */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                    placeholder="(555) 123-4567"
                    data-testid="waitlist-phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    value={formData.zip_code}
                    onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                    placeholder="30030"
                    data-testid="waitlist-zip"
                  />
                </div>
              </div>

              {/* When do you need care */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  When do you need care? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="needs_care_in"
                      value="within-1-month"
                      checked={formData.needs_care_in === 'within-1-month'}
                      onChange={(e) => setFormData({ ...formData, needs_care_in: e.target.value })}
                      className="mr-2"
                      data-testid="care-timing-1-month"
                    />
                    <span className="text-gray-700">Within 1 month</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="needs_care_in"
                      value="1-3-months"
                      checked={formData.needs_care_in === '1-3-months'}
                      onChange={(e) => setFormData({ ...formData, needs_care_in: e.target.value })}
                      className="mr-2"
                    />
                    <span className="text-gray-700">1-3 months</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="needs_care_in"
                      value="3-6-months"
                      checked={formData.needs_care_in === '3-6-months'}
                      onChange={(e) => setFormData({ ...formData, needs_care_in: e.target.value })}
                      className="mr-2"
                    />
                    <span className="text-gray-700">3-6 months</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="needs_care_in"
                      value="6-plus-months"
                      checked={formData.needs_care_in === '6-plus-months'}
                      onChange={(e) => setFormData({ ...formData, needs_care_in: e.target.value })}
                      className="mr-2"
                    />
                    <span className="text-gray-700">6+ months / Planning ahead</span>
                  </label>
                </div>
              </div>

              {/* Service type needed */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service type needed: *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.services_needed.includes('companion-care')}
                      onChange={() => handleServiceToggle('companion-care')}
                      className="mr-2"
                      data-testid="service-companion"
                    />
                    <span className="text-gray-700">Companion Care</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.services_needed.includes('personal-care')}
                      onChange={() => handleServiceToggle('personal-care')}
                      className="mr-2"
                      data-testid="service-personal"
                    />
                    <span className="text-gray-700">Personal Care</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.services_needed.includes('skilled-nursing')}
                      onChange={() => handleServiceToggle('skilled-nursing')}
                      className="mr-2"
                      data-testid="service-skilled"
                    />
                    <span className="text-gray-700">Skilled Nursing</span>
                  </label>
                </div>
              </div>

              {/* Additional notes */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  [OPTIONAL] Tell us about your situation:
                </label>
                <textarea
                  value={formData.additional_notes}
                  onChange={(e) => setFormData({ ...formData, additional_notes: e.target.value })}
                  rows="3"
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                  placeholder="Any specific needs or questions..."
                  data-testid="waitlist-notes"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary mb-4"
                data-testid="submit-waitlist-btn"
              >
                JOIN WAITLIST
              </button>

              {/* Privacy Note */}
              <div className="flex items-center justify-center text-gray-600 text-sm">
                <Lock size={16} className="mr-2" />
                <span>Your information is confidential and HIPAA-compliant</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-8" data-testid="waitlist-success">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-green-700 mb-3">You're on the list!</h3>
              <p className="text-gray-700 mb-4">Check your email for confirmation.</p>
              <p className="text-gray-600">
                We'll notify you as soon as we're approved and you'll get priority scheduling.
              </p>
            </div>
          )}

          {/* What happens next */}
          {!submitSuccess && (
            <div className="mt-8 bg-purple-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>You'll receive immediate email confirmation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>We'll notify you when we're approved</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>You'll get priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                  <span>No obligation to use our services</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
