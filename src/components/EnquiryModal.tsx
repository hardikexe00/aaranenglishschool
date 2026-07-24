import React, { useState } from 'react';
import { X, Send, GraduationCap, Phone, User, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';
import { ACADEMIC_GRADES, SCHOOL_INFO } from '../data/schoolData';
import { AdmissionEnquiry } from '../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (enquiry: AdmissionEnquiry) => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, onSubmitSuccess }) => {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [gradeApplying, setGradeApplying] = useState('Nursery');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !phone.trim() || !studentName.trim()) {
      alert('Please fill in your name, student name, and phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newEnquiry: AdmissionEnquiry = {
        parentName,
        studentName,
        phone,
        gradeApplying,
        message,
        submittedAt: new Date().toLocaleString(),
      };

      onSubmitSuccess(newEnquiry);
      setIsSubmitting(false);
      onClose();

      // Reset Form
      setParentName('');
      setStudentName('');
      setPhone('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-200 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Session 2026-27</span>
          </div>
          <h3 className="text-2xl font-bold font-serif text-white">Admission Enquiry Form</h3>
          <p className="text-xs text-blue-100 mt-1">
            Fill in details below and our admissions counsellor will contact you promptly.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-slate-800">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1" htmlFor="modal-parent-name">
              Parent / Guardian Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                id="modal-parent-name"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1" htmlFor="modal-student-name">
                Student Name *
              </label>
              <input
                type="text"
                id="modal-student-name"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Aarav Kumar"
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1" htmlFor="modal-phone">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  id="modal-phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1" htmlFor="modal-grade">
              Grade Applying For *
            </label>
            <div className="relative">
              <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <select
                id="modal-grade"
                value={gradeApplying}
                onChange={(e) => setGradeApplying(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none appearance-none"
              >
                {ACADEMIC_GRADES.map((g) => (
                  <option key={g.id} value={g.name}>
                    {g.name} ({g.ageGroup})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1" htmlFor="modal-message">
              Additional Questions / Message (Optional)
            </label>
            <textarea
              id="modal-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="E.g. Requesting a school tour on Saturday morning..."
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-900 focus:bg-white outline-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 text-sm"
              id="modal-submit-btn"
            >
              {isSubmitting ? (
                <span>Submitting Enquiry...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Submit Admission Enquiry</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-500 font-medium">
            Direct Helpline: <a href={`tel:${SCHOOL_INFO.phoneRaw}`} className="text-blue-900 font-bold">{SCHOOL_INFO.phone}</a>
          </p>
        </form>
      </div>
    </div>
  );
};
