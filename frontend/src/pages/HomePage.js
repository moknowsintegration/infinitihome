import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import CarePlanCalculator from '@/components/home/CarePlanCalculator';
import PaymentOptionsSection from '@/components/home/PaymentOptionsSection';
import WaitlistModal from '@/components/modals/WaitlistModal';

const HomePage = () => {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [waitlistType, setWaitlistType] = useState('');

  const openWaitlistModal = (type) => {
    setWaitlistType(type);
    setWaitlistModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <CarePlanCalculator openWaitlistModal={openWaitlistModal} />
      <PaymentOptionsSection openWaitlistModal={openWaitlistModal} />
      <Footer />
      
      <WaitlistModal
        isOpen={waitlistModalOpen}
        onClose={() => setWaitlistModalOpen(false)}
        waitlistType={waitlistType}
      />
    </div>
  );
};

export default HomePage;