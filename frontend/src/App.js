import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import HomePage from '@/pages/HomePage';
import MedicareWaitlist from '@/pages/MedicareWaitlist';
import VAWaitlist from '@/pages/VAWaitlist';
import MedicaidPage from '@/pages/MedicaidPage';
import PeachstatePage from '@/pages/PeachstatePage';
import PrivatePayPage from '@/pages/PrivatePayPage';
import LTCInsurancePage from '@/pages/LTCInsurancePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medicare-waitlist" element={<MedicareWaitlist />} />
          <Route path="/va-benefits-waitlist" element={<VAWaitlist />} />
          <Route path="/medicaid" element={<MedicaidPage />} />
          <Route path="/peachstate" element={<PeachstatePage />} />
          <Route path="/private-pay" element={<PrivatePayPage />} />
          <Route path="/ltc-insurance" element={<LTCInsurancePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;