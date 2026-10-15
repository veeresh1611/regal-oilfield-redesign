import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Activity, 
  MapPin, 
  PhoneCall, 
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useRFQ } from '../context/RFQContext';

export default function Hero({ onSearchSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { setIsDrawerOpen } = useRFQ();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(searchTerm);
    }
    const productsSec = document.getElementById('products');
    if (productsSec) {
      productsSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const keyFacts = [
    { title: '16+ Divisions', subtitle: 'Mechanical & Instrumentation' },
    { title: 'Up to 30K PSI', subtitle: 'API Severe Pressure Class' },
    { title: 'ADNOC & ADWEA', subtitle: 'Approved Client Standing' },
    { title: 'Mussaffah Hub', subtitle: 'Abu Dhabi Strategic Stock' },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-36 sm:pt-40 pb-20 px-4 sm:px-8 overflow-hidden">
      {/* Background Cinematic Visual with Precision Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-offshore.jpg"
          alt="Offshore Oilfield Platform in Arabian Gulf"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle"
          loading="eager"
        />
        {/* Deep Industrial Gradient Overlays for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/95 via-[#0A1424]/85 to-[#070D18]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F] via-transparent to-[#070D18]/70" />
        {/* Subtle grid mesh overlay */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(rgba(229, 169, 60, 0.4) 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tagline Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2.5"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Trusted Shutdown Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Abu Dhabi &bull; MENA Region
              </span>
            </motion.div>

            {/* Impressive Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Mechanical & Instrumentation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Engineering Stockist
              </span> in UAE
            </motion.h1>

            {/* Preserved Authentic Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              {COMPANY_INFO.overview}
            </motion.p>

            {/* Quick Spec & Catalog Search Bar */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSearch}
              className="max-w-xl flex items-center p-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md shadow-2xl focus-within:border-amber-500/60 transition-all"
            >
              <div className="pl-3 text-slate-400">
                <Search className="w-5 h-5 text-amber-400" />
              </div>
              <input
                type="text"
                placeholder="Search products, ASTM grades, valves, Belzona, CuNi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all whitespace-nowrap shadow"
              >
                Find Specs
              </button>
            </motion.form>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Technical Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-all"
              >
                <FileSpreadsheet className="w-4 h-4 text-amber-400" />
                <span>Request RFQ Inquiry</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors ml-1"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Emergency: {COMPANY_INFO.phone}</span>
              </a>
            </motion.div>

          </div>

          {/* Right Highlights Panel */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0F192E]/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  <Activity className="w-4 h-4" />
                  Verified Corporate Credentials
                </div>
                <h3 className="font-display text-lg font-bold text-white mt-1">
                  Mussaffah Stockyard & Distribution
                </h3>
              </div>

              {/* Verified Sector Strengths */}
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Oil, Gas & Petrochemical:</strong> API 6A/16A fittings, valves up to 48", spark-tested clad piping.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Power Generation & Desalination:</strong> Heat exchanger U-tubes, finned tubes, CUNI 90/10 & 70/30.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Turnaround Support:</strong> 24/7 fast-track stock dispatches for scheduled & emergency shutdowns.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Global Principals:</strong> SWAGELOK, BELZONA, WIKA, SANDVIK, TUBACEX, VELODUR DURMETAL.</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp1}?text=${encodeURIComponent("Hello Regal Oilfield, I require technical specifications for project procurement.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/70 to-slate-900 border border-emerald-500/30 hover:border-emerald-500/60 transition-all text-xs text-emerald-300 font-medium group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live Procurement Engineer Desk</span>
                  </div>
                  <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">WhatsApp &rarr;</span>
                </a>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Live Stat Metric Counter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {keyFacts.map((fact, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {fact.title}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {fact.subtitle}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
