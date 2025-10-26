import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_doc-upload-portal/artifacts/p72lg9gm_IFCE%20LOGO%20Transparent.png" 
              alt="INFINITI Home Care Enterprise"
              className="h-20 mb-4"
            />
            <p className="text-gray-400 text-sm">
              Atlanta's Premier Private Home Care Service
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-purple-400" />
                <p className="text-gray-400 text-sm">
                  1 W Court Square, Suite 750<br />
                  Decatur, GA 30030
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-purple-400" />
                <a href="tel:4702645566" className="text-gray-400 hover:text-white text-sm">
                  (470) 264-5566
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-purple-400" />
                <a href="mailto:info@infinitihomecare.com" className="text-gray-400 hover:text-white text-sm">
                  info@infinitihomecare.com
                </a>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div>
            <h4 className="text-lg font-semibold mb-4">We Accept</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Georgia Medicaid Waiver Programs</li>
              <li>• Peachstate Health Plan</li>
              <li>• Private Pay</li>
              <li>• Long-Term Care Insurance</li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-purple-400 font-semibold">Coming Soon:</p>
              <ul className="space-y-2 text-sm text-gray-400 mt-2">
                <li>
                  • Medicare{' '}
                  <Link to="/medicare-waitlist" className="text-purple-400 hover:text-purple-300">
                    (Join Waitlist)
                  </Link>
                </li>
                <li>
                  • VA Benefits{' '}
                  <Link to="/va-benefits-waitlist" className="text-purple-400 hover:text-purple-300">
                    (Join Waitlist)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/medicaid" className="text-gray-400 hover:text-white">
                  Medicaid Services
                </Link>
              </li>
              <li>
                <Link to="/peachstate" className="text-gray-400 hover:text-white">
                  Peachstate Health Plan
                </Link>
              </li>
              <li>
                <Link to="/private-pay" className="text-gray-400 hover:text-white">
                  Private Pay Options
                </Link>
              </li>
              <li>
                <Link to="/ltc-insurance" className="text-gray-400 hover:text-white">
                  LTC Insurance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Georgia Healthcare Facility License #[INSERT]
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2025 INFINITI Home Care Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;