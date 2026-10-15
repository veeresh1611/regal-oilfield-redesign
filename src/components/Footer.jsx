import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  MessageCircle, 
  ArrowUp, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_CATALOG } from '../data/companyData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050A14] border-t border-slate-800/80 text-slate-300 pt-16 pb-12 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-white/95 border border-white/20 shadow-sm">
                <img 
                  src="/assets/logo-original.png" 
                  alt="Regal Oilfield Equipments Trading" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-display font-extrabold text-sm sm:text-base text-white tracking-wider uppercase">
                  REGAL OILFIELD
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Equipments Trading LLC
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              Regal acts as an agent and stockist in UAE for a diverse range of products from reputed manufacturers from all over the world specialized in Mechanical and Instrumentation.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Shutdown Specialist &bull; ADNOC & ADWEA Registered</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white border-l-2 border-amber-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Our Products</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shutdown')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Shutdown Specialist</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('principals')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Principals & Clients</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: 16 Product Divisions Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white border-l-2 border-amber-500 pl-2">
              Technical Divisions
            </h4>
            <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-400">
              {PRODUCTS_CATALOG.slice(0, 8).map(p => (
                <button
                  key={p.id}
                  onClick={() => onNavigate('products')}
                  className="text-left hover:text-amber-400 transition-colors truncate"
                >
                  &bull; {p.name}
                </button>
              ))}
              <button
                onClick={() => onNavigate('products')}
                className="text-left text-amber-400 font-semibold hover:underline pt-1"
              >
                + View all 16 product lines &rarr;
              </button>
            </div>
          </div>

          {/* Column 4: Verified Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white border-l-2 border-amber-500 pl-2">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  P.O.Box 128697, <br />
                  Mussaffah, Abu Dhabi, UAE
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsapp1}`} target="_blank" rel="noopener noreferrer" className="font-mono hover:text-emerald-300 transition-colors">
                  {COMPANY_INFO.mobile1}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-mono text-amber-400 hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500">
                Fax: {COMPANY_INFO.fax}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Copyright &copy; 2026 Regal Oil Field Equipments Trading. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              Abu Dhabi, United Arab Emirates
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500 transition-all"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
