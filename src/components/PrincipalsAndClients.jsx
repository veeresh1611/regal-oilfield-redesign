import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building, 
  ShieldCheck, 
  Globe2, 
  Award, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { REPUTED_PRINCIPALS, VERIFIED_CLIENTELE } from '../data/companyData';

export default function PrincipalsAndClients() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Instrumentation & Valves', 'Repair Composites & Coatings', 'High Pressure Forged Fittings', 'Piping & Metallurgy', 'Sealing & Fasteners'];

  const filteredPrincipals = REPUTED_PRINCIPALS.filter(p => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Instrumentation & Valves') return p.category.includes('Instrumentation') || p.category.includes('Valves') || p.category.includes('Gauges');
    if (selectedCategory === 'Repair Composites & Coatings') return p.category.includes('Repair') || p.category.includes('Welding');
    if (selectedCategory === 'High Pressure Forged Fittings') return p.category.includes('Fittings') || p.category.includes('Flanges');
    if (selectedCategory === 'Piping & Metallurgy') return p.category.includes('Steel') || p.category.includes('Piping') || p.category.includes('Tubulars') || p.category.includes('Alloys');
    if (selectedCategory === 'Sealing & Fasteners') return p.category.includes('Fasteners') || p.category.includes('Sealing');
    return true;
  });

  return (
    <section id="principals" className="py-24 px-4 sm:px-8 bg-[#0A111F] relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Clientele Tier */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <Award className="w-3.5 h-3.5" />
              Verified Client Ecosystem
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Premier Energy & Infrastructure Operators
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Regal Oilfield supplies mission-critical mechanical and instrumentation packages to the UAE's foremost energy producers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFIED_CLIENTELE.map((client, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F192E] border border-slate-800 hover:border-emerald-500/40 hover:bg-[#14223E] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {client.category}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {client.name}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {client.role}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-3">
                    {client.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Approved Vendor Standing</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Principals Ticker & Directory */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
                <Globe2 className="w-3.5 h-3.5" />
                International Manufacturers
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Reputed International Principals & Brands
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
                Authorized stockist and agent in the United Arab Emirates for leading engineering manufacturers worldwide.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === c
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Principals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {filteredPrincipals.map((principal, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0F192E] border border-slate-800 hover:border-amber-500/40 hover:bg-[#14223E] transition-all flex flex-col justify-between text-center group"
              >
                <div className="font-display text-sm font-extrabold text-white tracking-wide group-hover:text-amber-400 transition-colors">
                  {principal.name}
                </div>
                <div className="text-[10px] text-slate-400 mt-1.5 truncate">
                  {principal.category}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
