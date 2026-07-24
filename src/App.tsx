import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AgeEligibilityTool } from './components/AgeEligibilityTool';
import { AdmissionSection } from './components/AdmissionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { NotificationToast } from './components/NotificationToast';
import { AdmissionEnquiry } from './types';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [enquiries, setEnquiries] = useState<AdmissionEnquiry[]>([]);

  const handleEnquirySubmitSuccess = (newEnquiry: AdmissionEnquiry) => {
    setEnquiries((prev) => [newEnquiry, ...prev]);
    setToastMessage(
      `Enquiry submitted successfully for ${newEnquiry.studentName} (${newEnquiry.gradeApplying})! Our admissions office will call you at ${newEnquiry.phone}.`
    );
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100/70 to-teal-50 text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Background Ambient Soft Orbs for Frosted Glass Depth */}
      <div className="fixed top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-[30%] right-[-10%] w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] bg-teal-200/40 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-indigo-200/40 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Sticky Top Header */}
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      {/* Main Page Sections */}
      <main id="main-content" className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

        {/* About Us & Vision/Mission */}
        <AboutSection />

        {/* Academics (Nursery - Grade 10) */}
        <AcademicsSection />

        {/* Why Choose Us (10 Key Reasons) */}
        <WhyChooseUs />

        {/* School Facilities */}
        <FacilitiesSection />

        {/* Interactive Age & Grade Calculator */}
        <AgeEligibilityTool onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

        {/* Admission Process & Required Documents */}
        <AdmissionSection
          onOpenEnquiry={() => setIsEnquiryModalOpen(true)}
          onShowToast={handleShowToast}
        />

        {/* Contact Info, Location Map & FAQs */}
        <ContactSection onShowToast={handleShowToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Popups & Toast Notifications */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        onSubmitSuccess={handleEnquirySubmitSuccess}
      />

      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
