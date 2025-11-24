import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import AllProjects from './pages/AllProjects';
import CustomCursor from './components/CustomCursor';
import ChatBot from './components/ChatBot';

const LandingPage = () => (
  <>
    <Hero />
    <Skills />
    <Projects />
    <Contact />
  </>
);

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ErrorBoundary>
      <ReactLenis root>
        <Router>
          <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-blue-500/30">
            <CustomCursor />
            <Navbar onOpenChat={() => setIsChatOpen(true)} />
            <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ReactLenis>
    </ErrorBoundary>
  );
};

export default App;
