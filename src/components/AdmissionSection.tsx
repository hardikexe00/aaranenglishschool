import React, { useState } from 'react';
import {
  FileText,
  CheckCircle,
  Clock,
  Send,
  Download,
  Printer,
  ChevronRight,
  ClipboardList,
  Sparkles,
  PhoneCall,
  UserCheck,
} from 'lucide-react';
import { ADMISSION_STEPS, REQUIRED_DOCUMENTS, SCHOOL_INFO } from '../data/schoolData';

interface AdmissionSectionProps {
  onOpenEnquiry: () => void;
  onShowToast: (msg: string) => void;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ onOpenEnquiry, onShowToast }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const toggleDocCheck = (id: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrintChecklist = () => {
    const readyCount = Object.values(checkedDocs).filter(Boolean).length;
    onShowToast(`Document Checklist ready: ${readyCount} of ${REQUIRED_DOCUMENTS.length} items checked! Opening print view...`);
    window.print();
  };

  return (
    <section id="admissions" className="py-20 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md text-indigo-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 border border-white/80 shadow-sm">
            <ClipboardList className="w-4 h-4 text-indigo-700" />
            <span>Enrollment Guidelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 font-serif tracking-tight">
            Admission <span className="text-indigo-600">Process & Documents</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-3 font-semibold">
            Seamless 6-step registration for Nursery to Grade 10 at AAR AN ENGLISH SCHOOL.
          </p>
        </div>

        {/* 6-Step Admission Journey Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-black font-serif text-indigo-950 text-center mb-8">
            6 Easy Steps to Admission
          </h3>

          {/* Stepper Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {ADMISSION_STEPS.map((step) => {
              const isActive = activeStep === step.stepNumber;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between backdrop-blur-md min-h-[92px] ${
                    isActive
                      ? 'bg-indigo-600 text-white border-indigo-400/50 shadow-lg scale-105 z-10'
                      : 'bg-white/50 hover:bg-white/80 text-slate-800 border-white/70 shadow-sm'
                  }`}
                  id={`admission-step-btn-${step.stepNumber}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                        isActive ? 'bg-amber-400 text-slate-950' : 'bg-indigo-100 text-indigo-950'
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  </div>
                  <p className="font-bold text-xs sm:text-sm line-clamp-2">{step.title}</p>
                </button>
              );
            })}
          </div>

          {/* Step Detail Display Card */}
          {(() => {
            const currentStepData = ADMISSION_STEPS.find((s) => s.stepNumber === activeStep) || ADMISSION_STEPS[0];
            return (
              <div className="bg-indigo-950/85 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 backdrop-blur-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-0.5 rounded-full uppercase shadow-sm">
                      Step {currentStepData.stepNumber} of 6
                    </span>
                    <span className="text-blue-200 text-xs font-semibold">• {currentStepData.actionHint}</span>
                  </div>
                  <h4 className="text-2xl font-black font-serif text-white">{currentStepData.title}</h4>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                    {currentStepData.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
                  <button
                    onClick={onOpenEnquiry}
                    className="w-full sm:w-auto h-12 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 rounded-xl text-xs sm:text-sm shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 border border-amber-300 shrink-0"
                    id="step-enquire-now-btn"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Submit Online Enquiry</span>
                  </button>

                  <a
                    href={`tel:${SCHOOL_INFO.phoneRaw}`}
                    className="w-full sm:w-auto h-12 bg-white/10 hover:bg-white/20 text-white font-bold px-6 rounded-xl text-xs sm:text-sm border border-white/30 backdrop-blur-md flex items-center justify-center gap-2 shadow shrink-0"
                    id="step-call-office-btn"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-300" />
                    <span>Call Office</span>
                  </a>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Required Documents Interactive Section */}
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/70 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-black text-indigo-950 uppercase">
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Verification Checklist</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-serif text-indigo-950 mt-1">
                Required Admission Documents
              </h3>
              <p className="text-slate-700 text-sm mt-1 font-semibold">
                Check off the documents you have ready for submission during your school visit.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrintChecklist}
                className="bg-white/80 hover:bg-white text-indigo-950 border border-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 transition-colors backdrop-blur-md"
                id="print-checklist-btn"
              >
                <Printer className="w-4 h-4 text-indigo-700" />
                <span>Print Checklist</span>
              </button>
            </div>
          </div>

          {/* Interactive Document Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REQUIRED_DOCUMENTS.map((doc) => {
              const isChecked = !!checkedDocs[doc.id];
              return (
                <div
                  key={doc.id}
                  onClick={() => toggleDocCheck(doc.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none backdrop-blur-md ${
                    isChecked
                      ? 'bg-emerald-500/20 border-emerald-400/80 shadow-md'
                      : 'bg-white/60 border-white/80 hover:bg-white/90 shadow-sm'
                  }`}
                  id={`doc-item-${doc.id}`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-indigo-950">{doc.title}</span>
                      {doc.isMandatory ? (
                        <span className="bg-rose-100 text-rose-900 text-[10px] font-black px-2 py-0.2 rounded-full uppercase border border-rose-200">
                          Mandatory
                        </span>
                      ) : (
                        <span className="bg-slate-100 text-slate-700 text-[10px] font-black px-2 py-0.2 rounded-full uppercase border border-slate-200">
                          Optional
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">{doc.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-white/60 backdrop-blur-md border border-white/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-indigo-950 shadow-sm">
            <span className="font-bold">
              Note: Please carry both original documents and 2 photocopies for verification during admission.
            </span>
            <span className="font-black text-indigo-700 shrink-0">Helpline: {SCHOOL_INFO.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
