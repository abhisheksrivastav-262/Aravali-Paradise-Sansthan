import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Programs from './pages/Programs';
import Objectives from './pages/Objectives';
import Strategies from './pages/Strategies';
import AreasOfExpertise from './pages/AreasOfExpertise';
import Beneficiaries from './pages/Beneficiaries';
import Governance from './pages/Governance';
import Team from './pages/Team';
import OperationalArea from './pages/OperationalArea';
import Education from './pages/Education';
import Health from './pages/Health';
import WomenYouth from './pages/WomenYouth';
import Environment from './pages/Environment';
import Livelihood from './pages/Livelihood';
import Gallery from './pages/Gallery';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/objectives" element={<Objectives />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/expertise" element={<AreasOfExpertise />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/team" element={<Team />} />
            <Route path="/operational-area" element={<OperationalArea />} />
            <Route path="/education" element={<Education />} />
            <Route path="/health" element={<Health />} />
            <Route path="/women-youth" element={<WomenYouth />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/livelihood" element={<Livelihood />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
