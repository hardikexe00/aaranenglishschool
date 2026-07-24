import React, { useState } from 'react';
import { BookOpen, GraduationCap, Sparkles, Check, ChevronRight, Layers, Award } from 'lucide-react';
import { ACADEMIC_GRADES, SCHOOL_INFO } from '../data/schoolData';
import { GradeLevel } from '../types';

export const AcademicsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pre-primary' | 'primary' | 'secondary'>('all');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(ACADEMIC_GRADES[0]);

  const filteredGrades = ACADEMIC_GRADES.filter((grade) => {
    if (selectedCategory === 'all') return true;
    return grade.category === selectedCategory;
  });

  return (
    <section id="academics" className="py-20 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md text-indigo-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-white/80 shadow-sm">
            <GraduationCap className="w-4 h-4 text-amber-600" />
            <span>Nursery to Grade 10</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 font-serif tracking-tight">
            Academic <span className="text-indigo-600">Curriculum</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3 font-semibold">
            Comprehensive learning progression tailored for every developmental milestone.
          </p>

          {/* Medium of Instruction Callout */}
          <div className="mt-6 inline-flex items-center gap-3 bg-indigo-950/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full shadow-lg border border-white/20">
            <Award className="w-5 h-5 text-amber-300" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wide">
              Medium of Instruction: <span className="text-amber-300 font-black">{SCHOOL_INFO.medium}</span>
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`h-11 px-5 rounded-xl text-xs sm:text-sm font-black transition-all backdrop-blur-md flex items-center justify-center ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200/60 border border-indigo-400/40 scale-105'
                : 'bg-white/50 text-slate-800 hover:bg-white/80 border border-white/60 shadow-sm hover:scale-102'
            }`}
            id="grade-filter-all"
          >
            All Grades (Nursery - Gr 10)
          </button>
          <button
            onClick={() => setSelectedCategory('pre-primary')}
            className={`h-11 px-5 rounded-xl text-xs sm:text-sm font-black transition-all backdrop-blur-md flex items-center justify-center ${
              selectedCategory === 'pre-primary'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200/60 border border-indigo-400/40 scale-105'
                : 'bg-white/50 text-slate-800 hover:bg-white/80 border border-white/60 shadow-sm hover:scale-102'
            }`}
            id="grade-filter-preprimary"
          >
            Pre-Primary (Nursery, Jr KG, Sr KG)
          </button>
          <button
            onClick={() => setSelectedCategory('primary')}
            className={`h-11 px-5 rounded-xl text-xs sm:text-sm font-black transition-all backdrop-blur-md flex items-center justify-center ${
              selectedCategory === 'primary'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200/60 border border-indigo-400/40 scale-105'
                : 'bg-white/50 text-slate-800 hover:bg-white/80 border border-white/60 shadow-sm hover:scale-102'
            }`}
            id="grade-filter-primary"
          >
            Primary (Grade 1 to 5)
          </button>
          <button
            onClick={() => setSelectedCategory('secondary')}
            className={`h-11 px-5 rounded-xl text-xs sm:text-sm font-black transition-all backdrop-blur-md flex items-center justify-center ${
              selectedCategory === 'secondary'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200/60 border border-indigo-400/40 scale-105'
                : 'bg-white/50 text-slate-800 hover:bg-white/80 border border-white/60 shadow-sm hover:scale-102'
            }`}
            id="grade-filter-secondary"
          >
            Secondary (Grade 6 to 10)
          </button>
        </div>

        {/* Grades Selector Grid & Detail View */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Grade Selector List */}
          <div className="lg:col-span-5 bg-white/40 backdrop-blur-xl p-4 rounded-3xl border border-white/60 space-y-2 max-h-[540px] overflow-y-auto shadow-lg">
            <p className="text-xs font-black text-indigo-950 uppercase tracking-wider px-2 mb-2">
              Select Grade to View Details ({filteredGrades.length} Grades)
            </p>
            {filteredGrades.map((grade) => {
              const isSelected = selectedGrade.id === grade.id;
              return (
                <button
                  key={grade.id}
                  onClick={() => setSelectedGrade(grade)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between border backdrop-blur-md ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-400/50 shadow-md'
                      : 'bg-white/60 hover:bg-white/90 text-slate-800 border-white/80 shadow-sm'
                  }`}
                  id={`grade-select-btn-${grade.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm ${
                        isSelected ? 'bg-amber-400 text-slate-950' : 'bg-indigo-100 text-indigo-950'
                      }`}
                    >
                      {grade.name.startsWith('Grade') ? grade.name.replace('Grade ', 'G') : grade.name.substring(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-sm leading-tight">{grade.name}</div>
                      <div className={`text-[11px] font-semibold ${isSelected ? 'text-amber-200' : 'text-slate-600'}`}>
                        Age: {grade.ageGroup}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Grade Detail Card */}
          <div className="lg:col-span-7 bg-indigo-950/85 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-800/50 space-y-6 relative overflow-hidden backdrop-blur-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/20">
              <div>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {selectedGrade.category.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-white mt-2">
                  {selectedGrade.name}
                </h3>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl text-right">
                <p className="text-[10px] text-slate-300 font-bold uppercase">Age Eligibility</p>
                <p className="text-sm font-black text-amber-300">{selectedGrade.ageGroup}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mb-1">
                Overview & Methodology
              </h4>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                {selectedGrade.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-300 mb-2">
                Core Subjects & Modules
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedGrade.keySubjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3.5 py-1.5 rounded-xl font-bold shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{subject}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-black uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Primary Educational Focus</span>
              </div>
              <p className="text-sm text-slate-100 font-semibold">{selectedGrade.focusArea}</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-slate-300 border-t border-white/20 font-semibold">
              <span>Medium: <strong className="text-white">English Medium</strong></span>
              <span>School Timings: Mon-Sat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
