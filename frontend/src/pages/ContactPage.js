import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { submitContactForm } from '@/utils/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    form_type: 'general',
    name: '',
    email: '',
    phone: '',
    zip_code: '',
    preferred_contact: 'phone',
    care_recipient: 'loved-one',
    description: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await submitContactForm(formData);
      setSubmitSuccess(true);
      setFormData({
        form_type: 'general',
        name: '',
        email: '',
        phone: '',
        zip_code: '',
        preferred_contact: 'phone',
        care_recipient: 'loved-one',
        description: ''
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an error submitting your message. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-purple-100">
              We're here to help. Reach out today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <a 
              href="tel:4702645566"
              className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
              <p className="text-purple-600 font-semibold">(470) 264-5566</p>
            </a>
            
            <a 
              href="mailto:info@infinitihomecare.com"
              className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition group"
            >
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-purple-600 font-semibold text-sm">info@infinitihomecare.com</p>
            </a>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600 text-sm">1 W Court Square, Suite 750<br />Decatur, GA 30030</p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
              <p className="text-gray-600 text-sm">24/7 Care Available<br />Office: Mon-Fri 9am-5pm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-purple-100">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <div className="p-8">
                {submitSuccess ? (
                  <div className="text-center py-12">
                    <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                    <h3 className="text-2xl font-bold text-green-700 mb-3">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                        {error}
                      </div>
                    )}
                    
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
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
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    {/* Phone & Zip */}
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                          placeholder="(555) 123-4567"
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
                        />
                      </div>
                    </div>
                    
                    {/* Preferred Contact & Care Recipient */}
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Contact Method
                        </label>
                        <select
                          value={formData.preferred_contact}
                          onChange={(e) => setFormData({ ...formData, preferred_contact: e.target.value })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                        >
                          <option value="phone">Phone Call</option>
                          <option value="email">Email</option>
                          <option value="text">Text Message</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Who Needs Care?
                        </label>
                        <select
                          value={formData.care_recipient}
                          onChange={(e) => setFormData({ ...formData, care_recipient: e.target.value })}
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                        >
                          <option value="loved-one">A Loved One</option>
                          <option value="myself">Myself</option>
                          <option value="client">I'm a Healthcare Professional</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Message */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        How Can We Help? *
                      </label>
                      <textarea
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows="4"
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 outline-none"
                        placeholder="Tell us about your care needs, questions, or how we can assist you..."
                      />
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
            <div className="bg-gray-200 rounded-xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5714!2d-84.2963!3d33.7748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ2JzI5LjMiTiA4NMKwMTcnNDYuNyJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="INFINITI Home Care Location"
              ></iframe>
            </div>
            <p className="text-gray-600 mt-4">
              1 W Court Square, Suite 750, Decatur, GA 30030
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
