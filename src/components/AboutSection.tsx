import React from 'react';
import { Target, Compass, CheckCircle2, Shield, HeartHandshake, BookCheck, Lightbulb, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md text-indigo-900 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-white/80 shadow-sm">
            <BookCheck className="w-4 h-4 text-indigo-700" />
            <span>Welcome To Our School</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 font-serif tracking-tight">
            About <span className="text-indigo-600">AAR AN ENGLISH SCHOOL</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3 font-semibold">
            Nurturing knowledge, character, and leadership in Kongaon, Bhiwandi since 2015.
          </p>
        </div>

        {/* Main About Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white/40 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="AAR AN English School Class Session"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-indigo-950/90 text-white p-5 rounded-2xl shadow-2xl max-w-xs border border-white/20 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-400 text-slate-950 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-sm font-bold text-white mt-0.5">Kongaon, Bhiwandi</p>
                    <p className="text-[11px] text-blue-200 font-medium">Pimplas Road, Near Ekvira Mandir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black text-indigo-950 font-serif leading-snug">
                Dedicated to Academic Excellence & Holistic Development
              </h3>
              <p className="text-slate-700 leading-relaxed text-base font-medium">
                {SCHOOL_INFO.about}
              </p>
            </div>

            {/* Core Values / Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-md flex items-start gap-3">
                <div className="p-2.5 bg-indigo-100 text-indigo-800 rounded-xl shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950 text-sm">Safe & Caring Environment</h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    CCTV monitored campus with friendly staff & individual attention.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-md flex items-start gap-3">
                <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-950 text-sm">Creativity & Discipline</h4>
                  <p className="text-xs text-slate-600 mt-1 font-medium">
                    Activity-based learning encouraging curiosity, moral values, and life skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-indigo-950/85 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-indigo-800/50 backdrop-blur-xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Compass className="w-32 h-32 text-white" />
            </div>

            <div className="relative space-y-4 z-10">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Our Vision</span>
              </div>
              <h3 className="text-2xl font-black font-serif text-white">Empowering Future Leaders</h3>
              <p className="text-blue-100 text-base leading-relaxed italic font-serif font-medium">
                "{SCHOOL_INFO.vision}"
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-indigo-800/80 flex items-center justify-between text-xs text-blue-200 font-semibold relative z-10">
              <span>English Medium Education</span>
              <span className="text-amber-300 font-bold">Nursery to Grade 10</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white/60 text-slate-900 rounded-3xl p-8 shadow-xl border border-white/80 backdrop-blur-xl flex flex-col justify-between relative">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider border border-emerald-200">
                <Target className="w-4 h-4 text-emerald-700" />
                <span>Our Mission</span>
              </div>
              <h3 className="text-2xl font-black font-serif text-indigo-950">5 Guiding Pillars of Learning</h3>

              <ul className="space-y-3 pt-2">
                {SCHOOL_INFO.missionPillars.map((pillar, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-700">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span>Holistic Student Growth</span>
              <span className="text-indigo-950 font-bold">Safe & Secure Campus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
