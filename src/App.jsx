

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PrivacyModal from './components/Confirm2';

import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import FAQAccordion from './pages/FAQ';
import { AuthProvider } from './hooks/context';
import LegalPage from './pages/LegalPage';
import TermsAndConditionsPage from './pages/TermsConditions';
function App() {
  

  return (
    <>
    <AuthProvider>
      <PrivacyModal />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQAccordion />} />
         <Route path="*" element={<NotFound />} />  
         <Route path='/legal' element={<LegalPage/>} />
         <Route path='/terms' element={<TermsAndConditionsPage/>} />

      </Routes>
    </Router>
    </AuthProvider>
    </>
  )
}

export default App
