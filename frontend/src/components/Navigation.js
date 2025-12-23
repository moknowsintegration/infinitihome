import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Centered container with max width */}
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - will be pushed in from left due to container padding */}
          <Link to="/" className="flex items-center">
            <img 
              src="/infiniti_logo_purple.png" 
              alt="INFINITI Home Care Enterprise"
              className="h-14 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Home
            </Link>
            <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Services
            </a>
            <a href="#calculator" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Calculator
            </a>
            <a href="#payment-options" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Payment
            </a>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Contact
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Careers
            </Link>
            <a
              href="tel:4702645566"
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              📞 (470) 264-5566
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <a
                href="#services"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#calculator"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Calculator
              </a>
              <a
                href="#payment-options"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Payment Options
              </a>
              <Link
                to="/about"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 font-medium rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <div className="px-4 pt-4 pb-2">
                <a
                  href="tel:4702645566"
                  className="block bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  📞 (470) 264-5566
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
