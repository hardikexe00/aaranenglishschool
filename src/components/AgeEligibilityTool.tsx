import React, { useState } from 'react';
import { Calculator, Sparkles, Check, ArrowRight, HelpCircle } from 'lucide-react';
import { ACADEMIC_GRADES } from '../data/schoolData';

interface AgeEligibilityToolProps {
  onOpenEnquiry: () => void;
}

export const AgeEligibilityTool: React.FC<AgeEligibilityToolProps> = ({ onOpenEnquiry }) => {
  const [childAge, setChildAge] = useState<number>(3);

  // Helper function to match age with grade
  const getRecommendedGrade = (age: number) => {
    if (age < 2.5) return { name: 'Too Young for Nursery', category: 'pre-primary', detail: 'Child must be at least 2.5 years by June.' };
    if (age <= 3.5) return ACADEMIC_GRADES.find((g) => g.id === 'nursery')!;
    if (age <= 4.5) return ACADEMIC_GRADES.find((g) => g.id === 'jr-kg')!;
    if (age <= 5.5) return ACADEMIC_GRADES.find((g) => g.id === 'sr-kg')!;
    if (age <= 6.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-1')!;
    if (age <= 7.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-2')!;
    if (age <= 8.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-3')!;
    if (age <= 9.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-4')!;
    if (age <= 10.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-5')!;
    if (age <= 11.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-6')!;
    if (age <= 12.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-7')!;
    if (age <= 13.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-8')!;
    if (age <= 14.5) return ACADEMIC_GRADES.find((g) => g.id === 'grade-9')!;
    if (age <= 16) return ACADEMIC_GRADES.find((g) => g.id === 'grade-10')!;
    return { name: 'Grade 10 / Above', category: 'secondary', detail: 'Contact school admissions office for age relaxation guidelines.' };
  };

  const rec = getRecommendedGrade(childAge);

  return (
    <section className="py-16 text-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/70 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Calculator className="w-64 h-64 text-slate-900" />
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Input Slider */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/60 text-indigo-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 border border-white/80 shadow-sm">
                  <Calculator className="w-3.5 h-3.5 text-indigo-700" />
                  <span>Interactive Tool</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-indigo-950">
                  Grade Eligibility Calculator
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm mt-1 font-medium">
                  Adjust child's age to discover recommended academic level from Nursery to Grade 10.
                </p>
              </div>

              {/* Slider Control */}
              <div className="space-y-4 bg-white/60 backdrop-blur-md p-5 rounded-2xl border border-white/80 shadow-sm">
                <div className="flex items-center justify-between">
                  <label htmlFor="child-age-range" className="text-xs font-black uppercase tracking-wider text-indigo-950">
                    Child's Age:
                  </label>
                  <span className="text-xl font-black text-indigo-600 font-serif">
                    {childAge} Years Old
                  </span>
                </div>

                <input
                  type="range"
                  id="child-age-range"
                  min="2"
                  max="16"
                  step="0.5"
                  value={childAge}
                  onChange={(e) => setChildAge(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />

                <div className="flex justify-between text-[11px] text-slate-600 font-bold">
                  <span>2 Yrs (Nursery)</span>
                  <span>5.5 Yrs (Grade 1)</span>
                  <span>10.5 Yrs (Grade 6)</span>
                  <span>15+ Yrs (Grade 10)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Recommended Grade Output */}
            <div className="md:col-span-5 bg-indigo-950/90 text-white backdrop-blur-2xl p-6 rounded-3xl border border-white/20 shadow-xl space-y-4 text-center md:text-left">
              <div className="text-xs font-black uppercase tracking-wider text-blue-200">
                Recommended Grade
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-300 font-serif">
                  {rec.name}
                </div>
                {'ageGroup' in rec && (
                  <p className="text-xs text-blue-100 mt-1 font-semibold">
                    Standard Age Bracket: {rec.ageGroup}
                  </p>
                )}
              </div>

              {'description' in rec ? (
                <p className="text-xs text-slate-200 leading-relaxed bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 font-medium">
                  {rec.description}
                </p>
              ) : (
                <p className="text-xs text-slate-200 leading-relaxed bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 font-medium">
                  {rec.detail}
                </p>
              )}

              <button
                onClick={onOpenEnquiry}
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 border border-amber-300"
                id="age-calculator-apply-btn"
              >
                <span>Enquire For {rec.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
