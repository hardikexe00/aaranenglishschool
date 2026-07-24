export interface GradeLevel {
  id: string;
  name: string;
  category: 'pre-primary' | 'primary' | 'secondary';
  ageGroup: string;
  description: string;
  keySubjects: string[];
  focusArea: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  highlights: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  description: string;
  actionHint: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  isMandatory: boolean;
}

export interface AdmissionEnquiry {
  parentName: string;
  studentName: string;
  phone: string;
  email?: string;
  gradeApplying: string;
  message?: string;
  submittedAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Admissions' | 'Academics' | 'Safety';
}
