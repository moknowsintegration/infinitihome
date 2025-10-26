import { Phone, Clock } from 'lucide-react';

const UrgentCareBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 sticky top-16 z-40 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center animate-pulse">
            <Clock className="mr-2" size={24} />
            <span className="font-bold text-lg">Need Care Today?</span>
          </div>
          <a
            href="tel:4702645566"
            className="flex items-center bg-white text-purple-700 px-6 py-2 rounded-lg font-bold hover:bg-purple-50 transition"
            data-testid="urgent-care-phone"
          >
            <Phone className="mr-2" size={20} />
            (470) 264-5566
          </a>
          <span className="text-purple-100">Our coordinators are standing by</span>
        </div>
      </div>
    </div>
  );
};

export default UrgentCareBanner;