import { useState } from 'react';
import { Calendar, Video, Phone, Home, CheckCircle } from 'lucide-react';
import { submitContactForm } from '@/utils/api';

const BookConsultation = () => {
  const [consultationType, setConsultationType] = useState('video');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip_code: '',
    care_recipient: 'parent',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm({
        form_type: 'book-consultation',
        contact_info: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          zip_code: formData.zip_code
        },
        consultation_preference: consultationType,
        care_recipient: formData.care_recipient,
        description: formData.message
      });

      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          zip_code: '',
          care_recipient: 'parent',
          message: ''
        });
      }, 5000);
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      alert('Error submitting form. Please try again or call us at (470) 264-5566');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Start with a Complimentary Assessment
            </h2>
            <p className="text-xl text-purple-100">
              No obligation — just a conversation about your care needs
            </p>
          </div>

          {!submitSuccess ? (
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              {/* Consultation Type Selector */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Format:</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setConsultationType('video')}
                    className={`p-4 rounded-lg border-2 transition ${
                      consultationType === 'video'
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-300 hover:border-purple-400'
                    }`}
                    data-testid="consultation-type-video"
                  >
                    <Video className="mx-auto text-purple-600 mb-2" size={32} />
                    <p className="font-semibold text-gray-900">Video Call</p>
                    <p className="text-xs text-gray-600">Zoom or FaceTime</p>
                  </button>
                  <button
                    onClick={() => setConsultationType('phone')}
                    className={`p-4 rounded-lg border-2 transition ${
                      consultationType === 'phone'
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-300 hover:border-purple-400'
                    }`}
                    data-testid="consultation-type-phone"
                  >
                    <Phone className="mx-auto text-purple-600 mb-2" size={32} />
                    <p className="font-semibold text-gray-900">Phone Call</p>
                    <p className="text-xs text-gray-600">Traditional call</p>
                  </button>
                  <button
                    onClick={() => setConsultationType('in-home')}
                    className={`p-4 rounded-lg border-2 transition ${
                      consultationType === 'in-home'
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-300 hover:border-purple-400'
                    }`}
                    data-testid="consultation-type-in-home"
                  >
                    <Home className="mx-auto text-purple-600 mb-2" size={32} />
                    <p className="font-semibold text-gray-900">In-Home Visit</p>
                    <p className="text-xs text-gray-600">Meet in person</p>
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} data-testid="consultation-form">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                      placeholder="Full name"
                      data-testid="consultation-name"
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
                      data-testid="consultation-email"
                    />
                  </div>
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
                      data-testid="consultation-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.zip_code}
                      onChange={(e) => setFormData({ ...formData, zip_code: e.target.value })}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                      placeholder="30030"
                      maxLength="5"
                      data-testid="consultation-zip"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Who needs care? *
                  </label>
                  <select
                    value={formData.care_recipient}
                    onChange={(e) => setFormData({ ...formData, care_recipient: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                    data-testid="consultation-recipient"
                  >
                    <option value="parent">My parent</option>
                    <option value="self">Myself</option>
                    <option value="spouse">My spouse/partner</option>
                    <option value="other">Other family member</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your needs (optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="4"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                    placeholder="Any specific concerns or questions?"
                    data-testid="consultation-message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50"
                  data-testid="consultation-submit"
                >
                  {isSubmitting ? 'Submitting...' : `Schedule ${consultationType === 'video' ? 'Video' : consultationType === 'phone' ? 'Phone' : 'In-Home'} Consultation`}
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Or call now: <a href="tel:4702645566" className="text-purple-600 font-bold">(470) 264-5566</a>
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center shadow-2xl" data-testid="consultation-success">
              <CheckCircle className="text-green-500 mx-auto mb-6" size={80} />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h3>
              <p className="text-xl text-gray-700 mb-6">
                Thank you for your interest. A care coordinator will contact you within 24 hours to schedule your complimentary assessment.
              </p>
              <p className="text-gray-600">
                Check your email for confirmation details.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;