import React from 'react';
import {
  Languages,
  GraduationCap,
  UserCheck,
  MonitorPlay,
  ShieldCheck,
  FlaskConical,
  Building2,
  HeartHandshake,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/schoolData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Languages':
        return <Languages className="w-6 h-6 text-blue-800" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-amber-700" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-emerald-800" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-6 h-6 text-indigo-800" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-900" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6 text-purple-800" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-cyan-800" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-800" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-800" />;
      case 'Award':
        return <Award className="w-6 h-6 text-yellow-800" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-blue-800" />;
    }
  };

  return (
    <section id="why-us" className="py-20 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md text-indigo-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-white/80 shadow-sm">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Why AAR AN ENGLISH SCHOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 font-serif tracking-tight">
            10 Key Reasons <span className="text-indigo-600">Parents Trust Us</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3 font-semibold">
            Discover why families in Kongaon, Bhiwandi choose AAR AN ENGLISH SCHOOL for their children's education.
          </p>
        </div>

        {/* 10 Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="bg-white/50 backdrop-blur-xl border border-white/70 hover:border-indigo-400/80 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-white/80 shadow-xl text-slate-800 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Optional Top Right Badge */}
              {item.badge && (
                <span className="absolute top-4 right-4 bg-indigo-100 text-indigo-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase border border-indigo-200 shadow-sm">
                  {item.badge}
                </span>
              )}

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-md border border-white">
                  {getIcon(item.iconName)}
                </div>

                <div>
                  <h3 className="text-lg font-black text-indigo-950 group-hover:text-indigo-600 transition-colors font-serif">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mt-2 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                <span>Verified School Standard</span>
                <span className="text-indigo-900">Kongaon, Bhiwandi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
