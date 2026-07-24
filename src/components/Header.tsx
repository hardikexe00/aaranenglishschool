import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, GraduationCap, ChevronRight, MessageSquare, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full font-sans transition-all duration-300">
      {/* Top Info Utility Bar */}
      <div className="bg-slate-900/90 backdrop-blur-md text-slate-300 text-xs py-2 px-4 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${SCHOOL_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              id="header-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-white">{SCHOOL_INFO.phone}</span>
            </a>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{SCHOOL_INFO.address}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Est. {SCHOOL_INFO.establishedYear}</span>
            </div>
            <a
              href={`https://wa.me/${SCHOOL_INFO.whatsapp}?text=${encodeURIComponent(
                'Hello AAR AN ENGLISH SCHOOL, I would like to inquire about admission for my child.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-emerald-600/90 hover:bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-xs font-medium transition-colors backdrop-blur-sm border border-emerald-400/30"
              id="header-whatsapp-btn"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-indigo-100/40 py-3 border-b border-white/60'
            : 'bg-white/50 backdrop-blur-md py-4 border-b border-white/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Title */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            id="brand-logo-link"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-900 to-blue-800 text-amber-400 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-900/20 group-hover:scale-105 transition-transform shrink-0 border border-white/30 backdrop-blur-md">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg md:text-xl text-indigo-950 tracking-tight leading-none uppercase font-serif">
                  AAR AN ENGLISH SCHOOL
                </span>
                <span className="hidden xl:inline-block bg-white/60 backdrop-blur-md text-indigo-900 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase border border-white/80 shadow-sm">
                  Kongaon, Bhiwandi
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 font-semibold tracking-wide mt-0.5 line-clamp-1">
                {SCHOOL_INFO.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-slate-800 hover:text-indigo-950 hover:bg-white/70 hover:shadow-sm px-3 py-2 rounded-xl text-xs xl:text-sm font-extrabold transition-all border border-transparent hover:border-white/80 whitespace-nowrap flex items-center"
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-extrabold px-4.5 h-10 rounded-xl shadow-lg shadow-indigo-200/60 hover:shadow-indigo-300/80 transition-all transform hover:-translate-y-0.5 border border-indigo-400/40 backdrop-blur-md active:scale-95 animate-pulse-cta shrink-0 whitespace-nowrap"
              id="header-enquire-btn"
            >
              <Send className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Admissions Open</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-slate-800 hover:text-indigo-900 p-2 rounded-xl bg-white/50 hover:bg-white/80 border border-white/60 shadow-sm transition-colors backdrop-blur-md"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/80 backdrop-blur-2xl border-b border-white/60 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="p-3 mb-2 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-indigo-950 uppercase">Admissions Open 2026-27</p>
                <p className="text-[11px] text-indigo-700 font-medium">Nursery to Grade 10 • English Medium</p>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md border border-indigo-400/30"
                id="mobile-drawer-apply-btn"
              >
                Apply Now
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between px-3 py-2.5 text-slate-800 hover:text-indigo-900 hover:bg-white/60 rounded-xl text-sm font-bold transition-colors border border-transparent hover:border-white/60"
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-200/60 flex flex-col gap-2">
              <a
                href={`tel:${SCHOOL_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-slate-900/90 text-white py-2.5 rounded-xl text-xs font-bold shadow-md backdrop-blur-md border border-slate-700/50"
                id="mobile-call-btn"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Admissions: {SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
