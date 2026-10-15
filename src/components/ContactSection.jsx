import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Printer, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Copy,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_CATALOG } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: 'API Fittings',
    timeline: 'Standard Procurement',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    copied: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        success: false,
        copied: false,
        error: 'Please complete all required fields (Name, Corporate Email, and Message).'
      });
      return;
    }

    setFormStatus({
      submitted: true,
      success: true,
      copied: false,
      error: null
    });
  };

  const getInquirySummaryText = () => {
    return `REGAL OILFIELD PROCUREMENT INQUIRY:
Name: ${formData.name}
Company: ${formData.company || 'Not specified'}
Email: ${formData.email}
Phone: ${formData.phone || 'Not specified'}
Product Division: ${formData.category}
Timeline: ${formData.timeline}
Technical Details:
${formData.message}`;
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(getInquirySummaryText());
    setFormStatus(prev => ({ ...prev, copied: true }));
    setTimeout(() => {
      setFormStatus(prev => ({ ...prev, copied: false }));
    }, 3000);
  };

  const handleSendViaMailto = () => {
    const subject = encodeURIComponent(`RFQ: ${formData.category} - ${formData.company || formData.name}`);
    const body = encodeURIComponent(getInquirySummaryText());
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSendViaWhatsApp = () => {
    const body = encodeURIComponent(getInquirySummaryText());
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp1}?text=${body}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-[#070D18] relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Direct Procurement Desk
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Regal Oilfield Equipments
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Connect with our sales and technical engineering team in Mussaffah, Abu Dhabi for immediate stock checks, technical submittals, and formal tenders.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Verified Contact Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-[#0F192E] border border-slate-800 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">Abu Dhabi Headquarters</h3>
                  <p className="text-xs text-slate-400">P.O.Box 128697, Mussaffah, Abu Dhabi, UAE</p>
                </div>
              </div>

              <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-300 divide-y divide-slate-800/80">
                
                {/* Telephone */}
                <div className="flex items-center justify-between pt-3">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-4 h-4 text-amber-400" />
                    Office Landline
                  </span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-mono text-white hover:text-amber-400 transition-colors font-medium">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                {/* Fax */}
                <div className="flex items-center justify-between pt-3">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Printer className="w-4 h-4 text-slate-400" />
                    Office Fax
                  </span>
                  <span className="font-mono text-slate-300">
                    {COMPANY_INFO.fax}
                  </span>
                </div>

                {/* WhatsApp Lines */}
                <div className="flex flex-col gap-1.5 pt-3">
                  <span className="flex items-center gap-2 text-slate-400 mb-1">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    Mobile & WhatsApp Turnaround Lines
                  </span>
                  <div className="flex items-center justify-between font-mono pl-6">
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp1}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                      {COMPANY_INFO.mobile1}
                    </a>
                    <span className="text-[10px] text-slate-400 uppercase">Line 1 (24/7)</span>
                  </div>
                  <div className="flex items-center justify-between font-mono pl-6">
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp2}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                      {COMPANY_INFO.mobile2}
                    </a>
                    <span className="text-[10px] text-slate-400 uppercase">Line 2</span>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-center justify-between pt-3">
                  <span className="flex items-center gap-2 text-slate-400">
                    <Mail className="w-4 h-4 text-amber-400" />
                    Official RFQ Email
                  </span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="font-mono text-amber-400 hover:underline font-medium">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                {/* Working Hours */}
                <div className="flex items-start justify-between pt-3">
                  <span className="flex items-center gap-2 text-slate-400 shrink-0">
                    <Clock className="w-4 h-4 text-slate-400" />
                    Working Hours
                  </span>
                  <span className="text-xs text-slate-300 text-right">
                    Mon – Fri: 8:00 AM – 5:30 PM <br />
                    <span className="text-[11px] text-amber-400">Turnaround emergency 24/7</span>
                  </span>
                </div>

              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[16/10] relative shadow-xl">
              <iframe
                title="Regal Oilfield Equipments Trading Mussaffah Abu Dhabi Location"
                src={COMPANY_INFO.googleMapsEmbed}
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:filter-none hover:opacity-100 transition-all duration-300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-slate-900/90 text-[11px] text-white border border-slate-700/80 backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Mussaffah, Abu Dhabi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive RFQ Submission Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0F192E] border border-slate-800 shadow-2xl relative">
              
              <div className="border-b border-slate-800 pb-5 mb-6">
                <h3 className="font-display text-xl font-bold text-white">
                  Request Technical Quotation / Scope Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your project requirements for an expedited response from our technical estimating engineers.
                </p>
              </div>

              {formStatus.error && (
                <div className="p-3.5 mb-6 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{formStatus.error}</span>
                </div>
              )}

              {formStatus.success ? (
                /* Success State with Actionable Next Steps */
                <div className="space-y-6 py-4">
                  <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3">
                    <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base">
                      <CheckCircle2 className="w-6 h-6" />
                      <span>Technical Inquiry Ready for Transmission</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Your inquiry has been compiled cleanly on the frontend. Since direct backend email delivery requires an SMTP service, you can now immediately send this formatted inquiry to <strong>{COMPANY_INFO.email}</strong> or directly to our procurement engineer via WhatsApp.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 whitespace-pre-wrap max-h-52 overflow-y-auto">
                    {getInquirySummaryText()}
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleSendViaMailto}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Default Email Client</span>
                    </button>

                    <button
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Transmit to WhatsApp (+971-50-7949521)</span>
                    </button>

                    <button
                      onClick={handleCopyInquiry}
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{formStatus.copied ? 'Copied!' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setFormStatus({ submitted: false, success: false, copied: false, error: null })}
                    className="text-xs text-slate-400 hover:text-white underline pt-2 block"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Eng. Tariq Al-Mansoor"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tariq@energycompany.ae"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Company / EPC Contractor
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Petrofac / ADNOC Contractor"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Mobile
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+971-50-XXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Primary Product Division
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        {PRODUCTS_CATALOG.map(p => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Required Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="Urgent Turnaround (Within 24-48 Hours)">Urgent Turnaround (Within 24-48 Hours)</option>
                        <option value="Standard Procurement (1-2 Weeks)">Standard Procurement (1-2 Weeks)</option>
                        <option value="Scheduled Plant Shutdown / Outage">Scheduled Plant Shutdown / Outage</option>
                        <option value="Annual Rate Contract / Tender">Annual Rate Contract / Tender</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Technical Specifications, Sizes, Pressure Ratings, Quantities *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please list exact sizes (e.g. 2 inch 1500# API 6A flanges, ASTM A193 B7 stud bolts, or Belzona 1111 repair compound quantity)..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-400">
                      Inquiries handled by technical engineers in Abu Dhabi.
                    </p>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all transform active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare Official RFQ</span>
                    </button>
                  </div>

                </form>
              )}

              {/* Backend Integration Note required by prompt guidelines */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
                <span>* Form operates in frontend verified mode. Submissions connect directly to email and WhatsApp.</span>
                <span className="font-mono text-slate-400">P.O.Box 128697</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
