import React, { useState, useEffect } from 'react';
import { RFQProvider } from './context/RFQContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductsCatalog from './components/ProductsCatalog';
import ShutdownSpecialist from './components/ShutdownSpecialist';
import PrincipalsAndClients from './components/PrincipalsAndClients';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import RFQDrawer from './components/RFQDrawer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [searchQuery, setSearchQuery] = useState('');

  // Intersection observer to automatically update active navbar item on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'products', 'shutdown', 'principals', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <RFQProvider>
      <div className="min-h-screen bg-[#0A111F] text-slate-100 flex flex-col antialiased selection:bg-[#E5A93C] selection:text-[#0A111F]">
        
        {/* Navigation Bar */}
        <Navbar 
          activeSection={activeSection} 
          setActiveSection={handleNavigate} 
        />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero onSearchSubmit={handleHeroSearch} />

          {/* About Us & Heritage */}
          <AboutSection />

          {/* 16 Products & Speciality Catalog */}
          <ProductsCatalog 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />

          {/* Turnaround & Shutdown Specialist Spotlight */}
          <ShutdownSpecialist />

          {/* Reputed Principals & Verified Clients */}
          <PrincipalsAndClients />

          {/* Contact Us, Mussaffah Map & RFQ Submittal */}
          <ContactSection />
        </main>

        {/* Corporate Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Full Specifications Product Modal */}
        <ProductDetailModal />

        {/* Slide-out Technical RFQ Basket Drawer */}
        <RFQDrawer />

      </div>
    </RFQProvider>
  );
}
