import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  MessageCircle,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useRFQ } from '../context/RFQContext';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { rfqItems, setIsDrawerOpen } = useRFQ();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products & Speciality' },
    { id: 'shutdown', label: 'Shutdown Specialist' },
    { id: 'principals', label: 'Principals & Clients' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Corporate Strip */}
      <div className="bg-[#070D18] border-b border-slate-800/80 text-xs text-slate-400 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              ADNOC & ADWEA Registered
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              Mussaffah, Abu Dhabi, UAE
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors text-slate-300 font-mono"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">Tel:</span> {COMPANY_INFO.phone}
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors text-slate-300"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span className="hidden lg:inline">{COMPANY_INFO.email}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp1}?text=${encodeURIComponent("Hello Regal Oilfield, I have a procurement inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`px-4 sm:px-8 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A111F]/95 backdrop-blur-md border-b border-slate-800 shadow-xl py-3' 
            : 'bg-gradient-to-b from-[#0A111F]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative p-1.5 rounded-lg bg-white/95 border border-white/20 shadow-sm group-hover:scale-105 transition-all">
              <img 
                src="/assets/logo-original.png" 
                alt="Regal Oilfield Equipments Trading" 
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-extrabold text-base tracking-wider text-white uppercase flex items-center gap-1.5">
                REGAL OILFIELD
                <span className="text-[10px] font-semibold tracking-normal px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  UAE
                </span>
              </div>
              <div className="text-[10px] font-medium tracking-wider text-slate-400 uppercase">
                Equipments Trading LLC
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive 
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {link.id === 'products' && (
                    <span className="ml-1.5 text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-slate-800 text-amber-400 border border-slate-700">
                      16
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Technical RFQ Basket Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-xs sm:text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform active:scale-95"
              title="Review RFQ items & submit technical inquiry"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span className="hidden sm:inline">Technical RFQ</span>
              <span className="sm:hidden">RFQ</span>
              {rfqItems.length > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 text-[11px] font-extrabold bg-slate-950 text-amber-400 rounded-full shadow-inner">
                  {rfqItems.length}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none border border-slate-700"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0A111F]/98 backdrop-blur-xl border-b border-slate-800 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    activeSection === link.id
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  Call {COMPANY_INFO.phone}
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp1}?text=${encodeURIComponent("Hello Regal Oilfield, I have a technical equipment inquiry.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
