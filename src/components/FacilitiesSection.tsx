import React, { useState } from 'react';
import {
  Tv,
  Camera,
  Laptop,
  Microscope,
  Droplets,
  Users,
  CheckCircle,
  Building,
  Sparkles,
  Eye,
  X,
} from 'lucide-react';
import { SCHOOL_FACILITIES } from '../data/schoolData';
import { FacilityItem } from '../types';

export const FacilitiesSection: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<FacilityItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv':
        return <Tv className="w-6 h-6 text-blue-900" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-blue-900" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-900" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6 text-blue-900" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-blue-900" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-900" />;
      default:
        return <Building className="w-6 h-6 text-blue-900" />;
    }
  };

  return (
    <section id="facilities" className="py-20 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md text-indigo-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-white/80 shadow-sm">
            <Building className="w-4 h-4 text-indigo-700" />
            <span>Modern Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 font-serif tracking-tight">
            School <span className="text-indigo-600">Facilities</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3 font-semibold">
            Designed for safety, digital innovation, hands-on science, and student well-being.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SCHOOL_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="bg-white/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/70 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/80 flex flex-col justify-between group"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md p-2.5 rounded-2xl shadow-lg border border-white">
                    {getIcon(facility.iconName)}
                  </div>

                  <button
                    onClick={() => setActiveFacility(facility)}
                    className="absolute bottom-3 right-3 bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 backdrop-blur-md shadow-md border border-indigo-400/30"
                    id={`view-facility-${facility.id}`}
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-300" />
                    <span>View Highlights</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-black text-indigo-950 font-serif group-hover:text-indigo-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {facility.description}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    {facility.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-bold">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/40 border-t border-white/60 flex items-center justify-between text-xs text-slate-500 font-bold">
                <span>Campus Guarantee</span>
                <span className="text-indigo-900 font-black">AAR AN English School</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Detail Modal */}
      {activeFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-950/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white/90 backdrop-blur-2xl rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white">
            <div className="relative h-56 bg-slate-900">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveFacility(null)}
                className="absolute top-3 right-3 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors backdrop-blur-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-slate-800">
              <div className="flex items-center gap-2 text-xs font-black text-indigo-900 uppercase">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Facility Detail</span>
              </div>
              <h3 className="text-2xl font-black font-serif text-indigo-950">
                {activeFacility.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                {activeFacility.description}
              </p>

              <div className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-wider text-indigo-950 mb-2">
                  Key Specifications:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {activeFacility.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-800 font-bold">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveFacility(null)}
                  className="bg-indigo-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-700 shadow-md"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
