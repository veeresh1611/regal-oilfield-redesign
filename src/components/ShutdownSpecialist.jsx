import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Clock, 
  ShieldAlert, 
  Wrench, 
  PackageCheck, 
  PhoneCall, 
  CheckCircle2, 
  AlertTriangle,
  Zap
} from 'lucide-react';
import { SHUTDOWN_SERVICES, COMPANY_INFO } from '../data/companyData';

export default function ShutdownSpecialist() {
  const iconMap = {
    ShieldAlert: ShieldAlert,
    Clock: Clock,
    Wrench: Wrench,
    PackageCheck: PackageCheck
  };

  return (
    <section id="shutdown" className="py-24 px-4 sm:px-8 bg-gradient-to-b from-[#070D18] to-[#0A111F] relative overflow-hidden border-t border-slate-800/80">
      {/* Background industrial accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              {SHUTDOWN_SERVICES.badge}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {SHUTDOWN_SERVICES.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-3xl leading-relaxed">
              {SHUTDOWN_SERVICES.intro}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md text-xs space-y-2 max-w-xs">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>Turnaround Hotline (24/7)</span>
              </div>
              <div className="font-mono text-sm font-extrabold text-white">
                {COMPANY_INFO.mobile1}
              </div>
              <div className="text-slate-400 text-[11px]">
                Expedited emergency dispatch across all UAE emirates.
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SHUTDOWN_SERVICES.capabilities.map((cap, idx) => {
            const Icon = iconMap[cap.icon] || Zap;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F192E] border border-slate-800/90 hover:border-amber-500/40 hover:bg-[#14223E] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-amber-400/90">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Mussaffah Stock Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Trust Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0F192E] to-slate-900 border border-slate-800 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Proven Turnaround Material Supplies For
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {SHUTDOWN_SERVICES.verifiedClients.map((client, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-slate-800/80 text-slate-200 text-xs sm:text-sm font-bold border border-slate-700/80 shadow"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
