import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_doc-upload-portal/artifacts/cbdxw1p3_Infiniti%20purple%20logo%20website.png" 
              alt="INFINITI Home Care Enterprise"
              className="h-12 md:h-16"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">
              Home
            </Link>
            <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium">
              Services
            </a>
            <a href="#calculator" className="text-gray-700 hover:text-purple-600 font-medium">
              Calculator
            </a>
            <a href="#payment-options" className="text-gray-700 hover:text-purple-600 font-medium">
              Payment Options
            </a>
            <a
              href="tel:4702645566"
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition"
            >
              📞 (470) 264-5566
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-purple-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <a
              href="#services"
              className="block text-gray-700 hover:text-purple-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#calculator"
              className="block text-gray-700 hover:text-purple-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Calculator
            </a>
            <a
              href="#payment-options"
              className="block text-gray-700 hover:text-purple-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Payment Options
            </a>
            <a
              href="tel:4702645566"
              className="block bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-2 rounded-lg font-semibold text-center"
            >
              📞 (470) 264-5566
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;