import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Clock,
  ArrowUp,
  Heart,
  MessageSquare,
  ShieldCheck,
  Download,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-indigo-950/90 text-slate-200 font-sans border-t border-white/20 relative backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md text-amber-300 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="font-black text-xl text-white font-serif tracking-tight uppercase block leading-none">
                  AAR AN ENGLISH SCHOOL
                </span>
                <span className="text-xs text-amber-300 font-semibold">Est. 2015 • Kongaon, Bhiwandi</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-medium">
              Co-educational <strong className="text-white">English Medium School</strong> providing quality education from <strong className="text-amber-300 font-bold">Nursery to Grade 10</strong>. Focused on academic excellence, safety, and character building.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% CCTV Monitored Classrooms & Campus</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">Quick Navigation</h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Us & Vision
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-amber-300 transition-colors">
                  Academics (Nursery - Grade 10)
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-300 transition-colors">
                  School Facilities
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-300 transition-colors">
                  Admission Process & Documents
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact Us & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">Contact Information</h4>
            <div className="space-y-2.5 text-xs text-slate-200 font-semibold">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phoneRaw}`} className="text-white font-black hover:text-amber-300">
                  {SCHOOL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{SCHOOL_INFO.officeHours}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${encodeURIComponent(
                  'Hello AAR AN ENGLISH SCHOOL team, I am inquiring about admission.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black px-4 py-2.5 rounded-xl transition-colors shadow-md border border-emerald-400/40"
                id="footer-whatsapp-btn"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="/aar-an-english-school-code.zip"
                download="aar-an-english-school-code.zip"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black px-4 py-2.5 rounded-xl transition-colors shadow-md border border-indigo-400/40"
                id="footer-download-zip-btn"
              >
                <Download className="w-3.5 h-3.5 text-amber-300" />
                <span>Download Source ZIP</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-semibold">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-bold">AAR AN ENGLISH SCHOOL</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-300">Pimplas Road, Kongaon, Bhiwandi</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-amber-300 rounded-xl transition-colors shadow border border-white/20 backdrop-blur-md"
              aria-label="Scroll to top"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
