import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  Navigation,
  CheckCircle,
  Building2,
} from 'lucide-react';
import { FAQS, SCHOOL_INFO } from '../data/schoolData';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) {
      alert('Please enter your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      onShowToast(`Thank you, ${formName}! Your message has been sent to AAR AN ENGLISH SCHOOL. We will call you at ${formPhone}.`);
      setIsSubmitting(false);
      setFormName('');
      setFormPhone('');
      setFormMsg('');
    }, 500);
  };

  return (
    <section id="contact" className="py-20 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md text-indigo-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-white/80 shadow-sm">
            <MapPin className="w-4 h-4 text-indigo-700" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 font-serif tracking-tight">
            Contact <span className="text-indigo-600">Information</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3 font-semibold">
            Visit our campus at Kongaon, Bhiwandi or reach out for inquiries and campus visits.
          </p>
        </div>

        {/* Contact Cards & Map Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/50 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/70 shadow-2xl space-y-6">
              <h3 className="text-xl font-black font-serif text-indigo-950 border-b border-slate-200/80 pb-3">
                School Campus Details
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 text-indigo-950 rounded-2xl shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-indigo-900">School Address</h4>
                    <p className="text-sm font-bold text-slate-800 leading-snug mt-1">
                      {SCHOOL_INFO.address}
                    </p>
                    <p className="text-xs text-indigo-700 font-bold mt-1">Landmark: Near Ekvira Mandir, Kongaon</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 text-amber-900 rounded-2xl shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-indigo-900">Call Admissions / Helpline</h4>
                    <a
                      href={`tel:${SCHOOL_INFO.phoneRaw}`}
                      className="text-base font-black text-indigo-600 hover:underline block mt-0.5"
                      id="contact-phone-link"
                    >
                      {SCHOOL_INFO.phone}
                    </a>
                    <p className="text-xs text-slate-600 font-semibold">Mon - Sat: 8:00 AM to 4:00 PM</p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/80 text-slate-800 rounded-2xl shrink-0 mt-0.5 shadow-sm border border-white">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-indigo-900">Office Working Hours</h4>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">
                      {SCHOOL_INFO.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 rounded-xl text-xs sm:text-sm text-center shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
                  id="contact-call-now-btn"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello, I would like to visit AAR AN ENGLISH SCHOOL in Kongaon, Bhiwandi for admission details.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 rounded-xl text-xs sm:text-sm text-center shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
                  id="contact-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Message Form */}
            <div className="bg-indigo-950/85 backdrop-blur-2xl text-white p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-4">
              <h3 className="text-lg font-black font-serif text-white">Send Us a Direct Message</h3>
              <form onSubmit={handleSubmitContact} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-xs font-bold text-white placeholder-slate-300 focus:outline-none focus:border-amber-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Your Mobile Number *"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-xs font-bold text-white placeholder-slate-300 focus:outline-none focus:border-amber-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Your Message..."
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    className="w-full p-3.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-xs font-bold text-white placeholder-slate-300 focus:outline-none focus:border-amber-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 rounded-xl text-xs shadow-md transition-colors flex items-center justify-center gap-2 border border-amber-300"
                  id="contact-submit-btn"
                >
                  <Send className="w-3.5 h-3.5 text-slate-950" />
                  <span>Send Quick Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Interactive Location Map Showcase */}
          <div className="lg:col-span-7 bg-white/50 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/70 shadow-2xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-black font-serif text-indigo-950">Campus Location & Route</h3>
                  <p className="text-xs text-slate-700 font-medium mt-0.5">Pimplas Road, Near Ekvira Mandir, Kongaon, Bhiwandi, Thane</p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    'AAR AN ENGLISH SCHOOL Pimplas Road Near Ekvira Mandir Kongaon Bhiwandi Thane Maharashtra'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 bg-white/80 text-indigo-950 border border-white font-black text-xs px-3.5 py-2 rounded-xl hover:bg-white shadow-sm transition-colors backdrop-blur-md"
                  id="google-maps-link"
                >
                  <Navigation className="w-3.5 h-3.5 text-indigo-700" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

              {/* Simulated Map Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/80 bg-slate-100 h-80 sm:h-96 shadow-inner flex items-center justify-center group">
                <iframe
                  title="AAR AN ENGLISH SCHOOL Map Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    'Pimplas Road Near Ekvira Mandir Kongaon Bhiwandi Thane Maharashtra'
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm">
                <span className="font-black text-indigo-950 block">Nearby Landmark</span>
                <span className="text-slate-700 font-semibold text-[11px]">Near Ekvira Mandir</span>
              </div>
              <div className="p-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm">
                <span className="font-black text-indigo-950 block">Locality</span>
                <span className="text-slate-700 font-semibold text-[11px]">Kongaon, Bhiwandi</span>
              </div>
              <div className="p-3 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm col-span-2 sm:col-span-1">
                <span className="font-black text-indigo-950 block">District</span>
                <span className="text-slate-700 font-semibold text-[11px]">Thane, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/70 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-indigo-950 uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4 text-amber-500" />
              <span>Parent Queries Answered</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-serif text-indigo-950">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-white/80 rounded-2xl overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 bg-white/60 hover:bg-white/80 backdrop-blur-md flex items-center justify-between font-black text-sm sm:text-base text-indigo-950"
                    id={`faq-accordion-toggle-${index}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-indigo-900 transition-transform ${
                        isOpen ? 'rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-white/40 backdrop-blur-md text-slate-800 text-xs sm:text-sm leading-relaxed border-t border-white/60 font-medium">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
