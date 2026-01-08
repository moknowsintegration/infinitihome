import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import MedicareWaitlist from '@/pages/MedicareWaitlist';
import VAWaitlist from '@/pages/VAWaitlist';
import MedicaidPage from '@/pages/MedicaidPage';
import PeachstatePage from '@/pages/PeachstatePage';
import PrivatePayPage from '@/pages/PrivatePayPage';
import LTCInsurancePage from '@/pages/LTCInsurancePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import CareersPage from '@/pages/CareersPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medicare-waitlist" element={<MedicareWaitlist />} />
          <Route path="/va-benefits-waitlist" element={<VAWaitlist />} />
          <Route path="/medicaid" element={<MedicaidPage />} />
          <Route path="/peachstate" element={<PeachstatePage />} />
          <Route path="/private-pay" element={<PrivatePayPage />} />
          <Route path="/ltc-insurance" element={<LTCInsurancePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
