import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import UrgentCareBanner from '@/components/home/UrgentCareBanner';
import ServicesSection from '@/components/home/ServicesSection';
import CarePlanCalculator from '@/components/home/CarePlanCalculator';
import TechnologyShowcase from '@/components/home/TechnologyShowcase';
import PaymentOptionsSection from '@/components/home/PaymentOptionsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CaregiverShowcase from '@/components/home/CaregiverShowcase';
import TrustCredentials from '@/components/home/TrustCredentials';
import AtlantaServiceArea from '@/components/home/AtlantaServiceArea';
import BookConsultation from '@/components/home/BookConsultation';
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
      <UrgentCareBanner />
      <HeroSection />
      <ServicesSection />
      <CarePlanCalculator openWaitlistModal={openWaitlistModal} />
      <TechnologyShowcase />
      <PaymentOptionsSection openWaitlistModal={openWaitlistModal} />
      <TestimonialsSection />
      <CaregiverShowcase />
      <TrustCredentials />
      <AtlantaServiceArea />
      <BookConsultation />
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