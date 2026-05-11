'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader, CheckCircle, AlertCircle, Send, ChevronDown } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string;
  teamSize: string;
  challenges: string;
  currentTools: string;
  aiInterests: string;
  businessGoals: string;
  budget: string;
  additionalNotes: string;
}

interface FormErrors {
  [key: string]: string;
}

const industryOptions = [
  'Financial Services',
  'Manufacturing',
  'Healthcare',
  'Retail & E-Commerce',
  'Technology',
  'Supply Chain & Logistics',
  'Enterprise Software',
  'Other',
];

const teamSizeOptions = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '500+',
];

const budgetOptions = [
  '₹75K - ₹2L',
  '₹2L - ₹5L',
  '₹5L - ₹15L',
  '₹15L+',
];

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    teamSize: '',
    challenges: '',
    currentTools: '',
    aiInterests: '',
    businessGoals: '',
    budget: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.teamSize) newErrors.teamSize = 'Team size is required';
    if (!formData.challenges.trim()) newErrors.challenges = 'Operational challenges are required';
    if (!formData.businessGoals.trim()) newErrors.businessGoals = 'Business goals are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setOpenDropdown(null);
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formElement = formRef.current;
      if (!formElement) return;

      // Create FormData object
      const data = new FormData(formElement);

      // Add hidden fields for FormSubmit
      data.append('_subject', 'New Inquiry - Project Buddy AI Modernization');
      data.append('_captcha', 'false');
      data.append('_template', 'table');
      data.append('_autoresponse', 'Thank you for your inquiry. Our team will review your requirements and contact you shortly.');

      const response = await fetch('https://formsubmit.co/info@projectbuddy.co.in', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          industry: '',
          teamSize: '',
          challenges: '',
          currentTools: '',
          aiInterests: '',
          businessGoals: '',
          budget: '',
          additionalNotes: '',
        });

        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-700/50 my-4 sm:my-8 max-h-[90vh] sm:max-h-[95vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header with Close Button */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 pt-6 sm:pt-8 pb-5 sm:pb-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 sm:top-5 right-4 sm:right-5 p-1.5 hover:bg-blue-700 rounded-lg transition-colors text-white"
                aria-label="Close form"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-lg sm:text-2xl font-bold text-white pr-8">AI & Operational Intelligence</h2>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">Let's discuss your modernization strategy</p>
            </div>

            {/* Form Content */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Submitted Successfully</h3>
                  <p className="text-slate-300">Your AI & Operational Intelligence consultation request has been received successfully. Our team will review your requirements and contact you shortly.</p>
                </motion.div>
              ) : submitStatus === 'error' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Submission Error</h3>
                  <p className="text-slate-300 mb-6">There was an issue submitting your form. Please try again.</p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.fullName ? 'border-red-500' : 'border-slate-700'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.phone ? 'border-red-500' : 'border-slate-700'
                        }`}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Row 2: Email & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-700'
                        }`}
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                          errors.company ? 'border-red-500' : 'border-slate-700'
                        }`}
                        placeholder="Your company"
                      />
                      {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Row 3: Website & Industry */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Company Website</label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="www.company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Industry *</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(openDropdown === 'industry' ? null : 'industry')}
                          className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border rounded-lg text-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex justify-between items-center ${
                            errors.industry ? 'border-red-500' : 'border-slate-700'
                          }`}
                        >
                          <span className="truncate">{formData.industry || 'Select industry'}</span>
                          <motion.div animate={{ rotate: openDropdown === 'industry' ? 180 : 0 }} className="flex-shrink-0 ml-2">
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        {openDropdown === 'industry' && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg z-20 max-h-40 overflow-y-auto">
                            {industryOptions.map(option => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleSelectChange('industry', option)}
                                className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm text-slate-100 hover:bg-slate-600 transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      {errors.industry && <p className="text-red-400 text-xs mt-1">{errors.industry}</p>}
                    </div>
                  </div>

                  {/* Row 4: Team Size & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Team Size *</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(openDropdown === 'teamSize' ? null : 'teamSize')}
                          className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border rounded-lg text-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex justify-between items-center ${
                            errors.teamSize ? 'border-red-500' : 'border-slate-700'
                          }`}
                        >
                          <span className="truncate">{formData.teamSize || 'Select team size'}</span>
                          <motion.div animate={{ rotate: openDropdown === 'teamSize' ? 180 : 0 }} className="flex-shrink-0 ml-2">
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        {openDropdown === 'teamSize' && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg z-20 max-h-40 overflow-y-auto">
                            {teamSizeOptions.map(option => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleSelectChange('teamSize', option)}
                                className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm text-slate-100 hover:bg-slate-600 transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      {errors.teamSize && <p className="text-red-400 text-xs mt-1">{errors.teamSize}</p>}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Estimated Budget</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border border-slate-700 rounded-lg text-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all flex justify-between items-center"
                        >
                          <span className="truncate">{formData.budget || 'Select budget'}</span>
                          <motion.div animate={{ rotate: openDropdown === 'budget' ? 180 : 0 }} className="flex-shrink-0 ml-2">
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        {openDropdown === 'budget' && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-slate-700 border border-slate-600 rounded-lg shadow-lg z-20 max-h-40 overflow-y-auto">
                            {budgetOptions.map(option => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleSelectChange('budget', option)}
                                className="w-full px-3 sm:px-4 py-2 text-left text-xs sm:text-sm text-slate-100 hover:bg-slate-600 transition-colors"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Operational Challenges */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Current Operational Challenges *</label>
                    <textarea
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      rows={2}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                        errors.challenges ? 'border-red-500' : 'border-slate-700'
                      }`}
                      placeholder="Describe your operational bottlenecks, manual workflows, inefficiencies..."
                    />
                    {errors.challenges && <p className="text-red-400 text-xs mt-1">{errors.challenges}</p>}
                  </div>

                  {/* Current Tools */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Current Software & Tools Used</label>
                    <textarea
                      name="currentTools"
                      value={formData.currentTools}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="CRM, ERP, analytics tools, legacy systems..."
                    />
                  </div>

                  {/* AI & Automation Interests */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">AI & Automation Interests</label>
                    <textarea
                      name="aiInterests"
                      value={formData.aiInterests}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Workflow automation, operational intelligence, AI-powered systems..."
                    />
                  </div>

                  {/* Business Goals */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Primary Business Goals *</label>
                    <textarea
                      name="businessGoals"
                      value={formData.businessGoals}
                      onChange={handleChange}
                      rows={2}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${
                        errors.businessGoals ? 'border-red-500' : 'border-slate-700'
                      }`}
                      placeholder="Reduce operational workload, improve efficiency, modernize systems..."
                    />
                    {errors.businessGoals && <p className="text-red-400 text-xs mt-1">{errors.businessGoals}</p>}
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5 sm:mb-2">Additional Notes</label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Anything else you'd like to share..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full mt-4 sm:mt-6 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-slate-600 disabled:to-slate-600 text-white text-sm sm:text-base font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </motion.button>

                  {/* Disclaimer */}
                  <p className="text-xs text-slate-400 text-center">
                    Your information is secure and will be used only to contact you regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

