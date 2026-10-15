import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  FileText, 
  Plus, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  Layers,
  Award,
  CheckCircle2
} from 'lucide-react';
import { useRFQ } from '../context/RFQContext';
import { COMPANY_INFO } from '../data/companyData';

export default function ProductDetailModal() {
  const { selectedProductForModal, closeProductModal, addToRFQ, rfqItems } = useRFQ();

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;
  const isInRFQ = rfqItems.some(i => i.id === product.id);

  const handleWhatsAppInquiry = () => {
    const text = `Hello Regal Oilfield, I am inquiring about *${product.name}* (Category: ${product.category}). Please provide technical specs & quote.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp1}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProductModal}
          className="fixed inset-0 bg-[#070D18]/85 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F192E] border border-slate-700/80 shadow-2xl z-10 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0F192E]/95 backdrop-blur-md border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
                {product.category}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Verified Regal Specification
              </span>
            </div>

            <button
              onClick={closeProductModal}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Title and Top Row */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Product Visual */}
              <div className="lg:col-span-5 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative group aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = "/assets/engineering-valves.jpg";
                  }}
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-slate-900/90 text-amber-400 text-xs font-bold border border-slate-700">
                  {product.badge}
                </div>
              </div>

              {/* Title & Overview */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {product.name}
                </h3>
                <p className="text-amber-400 text-sm font-medium">
                  {product.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Highlights Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {product.highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-slate-800/80 text-slate-200 border border-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Complete Technical Specifications Table */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <FileText className="w-5 h-5 text-amber-400" />
                <h4 className="font-display text-lg font-bold text-white">
                  Technical Specifications & Engineering Standards
                </h4>
              </div>

              <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-900/50 divide-y divide-slate-800">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="grid sm:grid-cols-12 p-3.5 text-xs sm:text-sm">
                    <div className="sm:col-span-4 font-semibold text-amber-400">
                      {spec.label}
                    </div>
                    <div className="sm:col-span-8 text-slate-200 mt-1 sm:mt-0 font-mono leading-relaxed">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QA & Compliance Note */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Mill Test Certificate & Traceability:</strong> All shipments from Regal Oilfield include full EN 10204 3.1 / 3.2 material test reports, NACE MR0175 sour service verification where applicable, and hydrostatic/NDE testing documentation.
              </span>
            </div>

          </div>

          {/* Sticky Modal Footer Actions */}
          <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-[#0F192E] border-t border-slate-800">
            <button
              onClick={handleWhatsAppInquiry}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>

            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={closeProductModal}
                className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  addToRFQ(product);
                  closeProductModal();
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  isInRFQ
                    ? 'bg-emerald-600 text-white'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                }`}
              >
                {isInRFQ ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to RFQ Basket</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>Add to Technical RFQ</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
