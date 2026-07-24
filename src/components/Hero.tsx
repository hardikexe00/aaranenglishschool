import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Users,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 text-slate-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Frosted Glass Hero Container Card */}
        <div className="relative bg-indigo-950/85 backdrop-blur-2xl border border-indigo-800/50 shadow-2xl shadow-indigo-950/40 rounded-3xl p-6 sm:p-10 lg:p-12 text-white overflow-hidden">
          {/* Ambient Glows inside Glass Card */}
          <div className="absolute top-[-20%] left-[-10%] w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Main Hero Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top Announcement Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-amber-300 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Admissions Open for Academic Session 2026-27</span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="hidden sm:inline-block text-slate-200 font-medium">Nursery to Grade 10</span>
              </div>

              {/* Main Headline & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-serif text-white leading-tight">
                  AAR AN ENGLISH <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                    SCHOOL
                  </span>
                </h1>
                <p className="text-lg sm:text-2xl font-serif italic text-amber-200 font-semibold">
                  "{SCHOOL_INFO.tagline}"
                </p>
              </div>

              {/* School Core Highlights Description */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                A premier co-educational <strong className="text-white font-bold">100% English Medium School</strong> in Kongaon, Bhiwandi. Established in 2015, empowering young learners from <strong className="text-amber-300 font-bold">Nursery to Grade 10</strong> through smart classrooms, individual care, activity-based learning, and comprehensive CCTV safety.
              </p>

              {/* Quick Key Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pt-1">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-100 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Established 2015</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-100 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>CCTV Surveillance in All Classes</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-100 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>English Medium Only</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-sm sm:text-base font-black px-6 rounded-xl shadow-xl hover:shadow-amber-400/30 transition-all transform hover:-translate-y-0.5 active:scale-95 border border-amber-300/50 shrink-0"
                  id="hero-apply-btn"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </button>

                <a
                  href="#academics"
                  className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold px-6 rounded-xl border border-white/30 backdrop-blur-md transition-all shadow-md shrink-0"
                  id="hero-academics-btn"
                >
                  <BookOpen className="w-5 h-5 text-amber-300" />
                  <span>Explore Academics</span>
                </a>

                <a
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                  className="w-full sm:w-auto h-12 inline-flex items-center justify-center gap-2 bg-emerald-600/80 hover:bg-emerald-600 text-white text-sm sm:text-base font-bold px-6 rounded-xl border border-emerald-400/40 backdrop-blur-md transition-all shadow-md shrink-0"
                  id="hero-call-btn"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>Call Us: {SCHOOL_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Hero Visual Card Column */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Outer Frosted Glass Border Frame */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-3 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
                    alt="AAR AN English School Building and Happy Students"
                    className="w-full h-72 sm:h-80 lg:h-96 object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Frosted Card: Safe Smart Campus */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-amber-300">
                        Safe & Student-Friendly Campus
                      </span>
                      <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold px-2 py-0.5 rounded-lg uppercase border border-emerald-400/40">
                        Verified Security
                      </span>
                    </div>
                    <p className="text-xs text-slate-200 line-clamp-2 font-medium">
                      Kongaon, Bhiwandi • Smart Classrooms • Computer & Science Labs • 100% CCTV Coverage
                    </p>
                  </div>
                </div>

                {/* Floating Badge: 10+ Years Excellence */}
                <div className="absolute -top-4 -left-4 bg-amber-400 text-slate-950 font-black p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-slate-900/80 backdrop-blur-md">
                  <div className="p-2 bg-slate-950 text-amber-300 rounded-xl">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base leading-none font-black">10+ Years</div>
                    <div className="text-[10px] uppercase tracking-wider font-bold text-slate-900">
                      Of Excellence
                    </div>
                  </div>
                </div>

                {/* Floating Badge: Nursery to Grade 10 */}
                <div className="absolute -bottom-4 -right-4 bg-indigo-900/90 text-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-white/30 backdrop-blur-xl">
                  <div className="p-2 bg-amber-400 text-slate-950 rounded-xl">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black leading-tight">Nursery to Grade 10</div>
                    <div className="text-[10px] text-amber-200 font-semibold">Co-educational</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Counter Bar at Base of Hero */}
          <div className="mt-10 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center relative z-10">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <div className="text-2xl sm:text-3xl font-black text-amber-300 font-serif">2015</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Year Established</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <div className="text-2xl sm:text-3xl font-black text-white font-serif">100%</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">English Medium</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <div className="text-2xl sm:text-3xl font-black text-amber-300 font-serif">Nursery - Gr 10</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Complete Education</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md">
              <div className="text-2xl sm:text-3xl font-black text-white font-serif">24/7 CCTV</div>
              <div className="text-xs text-slate-200 font-semibold mt-1">Classroom Surveillance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
