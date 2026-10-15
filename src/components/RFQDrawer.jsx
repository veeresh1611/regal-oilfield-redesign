import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  FileSpreadsheet, 
  Send, 
  MessageCircle, 
  Mail, 
  Copy, 
  Check, 
  AlertCircle,
  FileCheck
} from 'lucide-react';
import { useRFQ } from '../context/RFQContext';
import { COMPANY_INFO } from '../data/companyData';

export default function RFQDrawer() {
  const { 
    rfqItems, 
    isDrawerOpen, 
    setIsDrawerOpen, 
    removeFromRFQ, 
    updateQuantity, 
    updateItemNote,
    clearRFQ 
  } = useRFQ();

  const [copied, setCopied] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    clientName: '',
    company: '',
    projectRef: ''
  });

  if (!isDrawerOpen) return null;

  const generateRFQText = () => {
    let text = `REGAL OILFIELD - TECHNICAL RFQ SUBMITTAL\n`;
    text += `Client: ${projectDetails.clientName || 'Procurement Engineer'}\n`;
    text += `Company: ${projectDetails.company || 'ADNOC / EPC Operator'}\n`;
    text += `Project / Tender Ref: ${projectDetails.projectRef || 'Urgent Turnaround'}\n`;
    text += `Date: ${new Date().toLocaleDateString()}\n\n`;
    text += `REQUESTED ITEMS & SPECIFICATIONS:\n`;

    rfqItems.forEach((item, idx) => {
      text += `\n[${idx + 1}] ${item.name} (${item.category})\n`;
      text += `    Quantity: ${item.quantity || 1} units/sets\n`;
      if (item.note) {
        text += `    Notes / Tolerances: ${item.note}\n`;
      }
    });

    text += `\nPlease supply technical datasheets, MTC, price, and delivery lead time to Mussaffah, Abu Dhabi.`;
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateRFQText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppSend = () => {
    const text = generateRFQText();
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp1}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Formal Technical RFQ (${rfqItems.length} Items) - ${projectDetails.company || 'Project Procurement'}`);
    const body = encodeURIComponent(generateRFQText());
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsDrawerOpen(false)}
          className="absolute inset-0 bg-[#070D18]/80 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="w-screen max-w-md bg-[#0F192E] border-l border-slate-800 shadow-2xl flex flex-col"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#0F192E]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">Technical RFQ Basket</h3>
                  <p className="text-xs text-slate-400">{rfqItems.length} product line(s) added</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {rfqItems.length > 0 && (
                  <button
                    onClick={clearRFQ}
                    className="text-xs text-slate-400 hover:text-red-400 px-2 py-1 rounded transition-colors"
                    title="Clear list"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {rfqItems.length === 0 ? (
                <div className="text-center py-16 px-4 space-y-3">
                  <FileSpreadsheet className="w-12 h-12 text-slate-600 mx-auto" />
                  <h4 className="text-base font-bold text-white">Your RFQ Basket is Empty</h4>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                    Browse our 16 technical divisions and click <strong>"+ RFQ"</strong> to build an itemized technical inquiry.
                  </p>
                  <button
                    onClick={() => {
                      setIsDrawerOpen(false);
                      const el = document.getElementById('products');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-3 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
                  >
                    Browse 16 Divisions
                  </button>
                </div>
              ) : (
                <>
                  {/* Project metadata inputs */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5 text-xs">
                    <div className="font-semibold text-slate-300">Project / Tender Information (Optional)</div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={projectDetails.clientName}
                        onChange={(e) => setProjectDetails(p => ({ ...p, clientName: e.target.value }))}
                        className="w-full px-2.5 py-1.5 rounded bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                      />
                      <input
                        type="text"
                        placeholder="Company / EPC"
                        value={projectDetails.company}
                        onChange={(e) => setProjectDetails(p => ({ ...p, company: e.target.value }))}
                        className="w-full px-2.5 py-1.5 rounded bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Project / Unit Ref (e.g. Ruwais Turnaround Workpack #4)"
                      value={projectDetails.projectRef}
                      onChange={(e) => setProjectDetails(p => ({ ...p, projectRef: e.target.value }))}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* List of items */}
                  <div className="space-y-3">
                    {rfqItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-10 h-10 rounded-lg object-cover bg-slate-950 shrink-0 border border-slate-800"
                              onError={(e) => { e.target.src = "/assets/engineering-valves.jpg"; }}
                            />
                            <div>
                              <h5 className="font-display text-xs font-bold text-white line-clamp-1">{item.name}</h5>
                              <span className="text-[10px] text-amber-400">{item.category}</span>
                            </div>
                          </div>

                          <button
                            onClick={() => removeFromRFQ(item.id)}
                            className="text-slate-500 hover:text-red-400 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Quantity and Custom notes */}
                        <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-800/60">
                          <span className="text-[11px] text-slate-400">Qty / Sets:</span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                              className="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs font-bold text-white w-6 text-center">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              className="w-6 h-6 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-xs"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Note field */}
                        <input
                          type="text"
                          placeholder="Specific size, schedule, alloy or rating..."
                          value={item.note || ''}
                          onChange={(e) => updateItemNote(item.id, e.target.value)}
                          className="w-full px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>

            {/* Drawer Footer Actions */}
            {rfqItems.length > 0 && (
              <div className="p-5 border-t border-slate-800 bg-[#0F192E] space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Prepared for Dispatch to:</span>
                  <strong className="text-amber-400">regal53@regaloilfield.ae</strong>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send WhatsApp</span>
                  </button>

                  <button
                    onClick={handleEmailSend}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email RFQ</span>
                  </button>
                </div>

                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors border border-slate-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied RFQ Text to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Formatted RFQ Text</span>
                    </>
                  )}
                </button>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
