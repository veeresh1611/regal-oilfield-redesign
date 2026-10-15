import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Globe2, 
  Wrench, 
  Factory, 
  Anchor, 
  Zap, 
  Droplets,
  CheckCircle,
  FileCheck
} from 'lucide-react';
import { COMPANY_INFO, VERIFIED_CLIENTELE } from '../data/companyData';

export default function AboutSection() {
  const engineeringPillars = [
    {
      title: "Heat Transfer & Process Vessels",
      desc: "Heat Exchangers, Pressure Vessels, Finned Tubes, Air Cooled Finned Exchangers, and U-Bend Tubes up to 14 meters.",
      icon: FlameIcon
    },
    {
      title: "Flow Control & Valves up to 48\"",
      desc: "Gate, Globe, Ball, Check, Butterfly, and Control Valves in Carbon Steel, Duplex, and Super Duplex metallurgy.",
      icon: Factory
    },
    {
      title: "Piping & Spark-Tested Linings",
      desc: "Line pipes from 1/2\" to 158\", induction bends, SS & Inconel 625/825 cladding, and spark-tested Cement/PTFE/PVDF linings.",
      icon: Wrench
    },
    {
      title: "High-Pressure API Fittings",
      desc: "Flanges, DSAF, Swivel Flanges, Hammer Unions, and Swivel Joints rated up to 30,000 PSI for severe drilling service.",
      icon: ShieldCheck
    },
    {
      title: "Precision Instrumentation",
      desc: "ASME/ASTM instrumentation tubes, double-ferrule compression fittings, 2/3/5-way manifolds, gauges & thermowells.",
      icon: Zap
    },
    {
      title: "Emergency Repair & Sealing",
      desc: "VELODUR / DURMETAL coldwelding systems, BELZONA protective compounds, and high-tensile coated fasteners.",
      icon: Droplets
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-[#070D18] relative overflow-hidden border-t border-slate-800/80">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Corporate Profile & UAE Heritage
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Regal Oilfield Equipments Trading LLC
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Established in Mussaffah, Abu Dhabi &bull; Strategically serving the United Arab Emirates and MENA region energy infrastructure.
          </p>
        </div>

        {/* Narrative & High-Tech Visual Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <img
                src="/assets/engineering-valves.jpg"
                alt="Regal Oilfield High-Pressure Valves & Manifolds Inspection"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A111F] via-[#0A111F]/30 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Abu Dhabi Operations
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      P.O. Box 128697, Mussaffah Industrial Area
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    UAE Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Experience Tag */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 p-3.5 rounded-xl bg-[#0F192E] border border-amber-500/30 shadow-xl text-xs text-white">
              <Award className="w-5 h-5 text-amber-400" />
              <div>
                <div className="font-bold">ADNOC GROUP</div>
                <div className="text-[11px] text-slate-400">Approved Supply Partner</div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Factual Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl font-bold text-white leading-snug">
              Leading Service Provider to Oil, Gas, Power & Marine Industries
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.overview}
            </p>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                Trusted Shutdown Specialist
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {COMPANY_INFO.shutdownRole}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Industrial Client Sectors:
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {VERIFIED_CLIENTELE.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-200">{c.name}</div>
                      <div className="text-[10px] text-slate-400">{c.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Procurement Scope Breakdown Grid */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Specialized Engineering Procurement Scope
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Direct sourcing from world-reputed principals with full mill test certification (EN 10204 3.1 & 3.2).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#0F192E]/80 border border-slate-800/90 hover:border-amber-500/40 hover:bg-[#14223E]/90 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function FlameIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}
