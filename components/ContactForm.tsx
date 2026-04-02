'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Loader, CheckCircle, AlertCircle, Send } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  budget: string;
  projectType: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const budgetOptions = [
  '< ₹50K',
  '₹50K – ₹2L',
  '₹2L – ₹5L',
  '₹5L+',
];

const projectTypeOptions = [
  'AI Automation',
  'SaaS Development',
  'AI Integration',
  'Other',
];

const timelineOptions = [
  'ASAP',
  '1 Month',
  '2–3 Months',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.budget) {
      newErrors.budget = 'Budget range is required';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Project type is required';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Timeline is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleDropdownSelect = (field: string, value: string) => {
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

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          company: '',
          budget: '',
          projectType: '',
          timeline: '',
          message: '',
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get Your Free Strategy Call</h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Fill out the form below and our team will reach out within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 transition-all duration-200 placeholder:text-gray-400 focus:outline-none text-sm sm:text-base ${
                  errors.fullName
                    ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.fullName && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-xs sm:text-sm mt-1"
                >
                  {errors.fullName}
                </motion.p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 transition-all duration-200 placeholder:text-gray-400 focus:outline-none text-sm sm:text-base ${
                  errors.email
                    ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-xs sm:text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                Company Name <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border-2 border-gray-200 transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 text-sm sm:text-base"
              />
            </div>

            {/* Budget Range */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                Budget Range <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'budget' ? null : 'budget')}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-between text-left ${
                    errors.budget
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-200 hover:border-gray-300 focus:border-blue-500'
                  } ${!formData.budget && 'text-gray-400'}`}
                >
                  <span>{formData.budget || 'Select budget range'}</span>
                  <motion.div
                    animate={{ rotate: openDropdown === 'budget' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openDropdown === 'budget' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10"
                    >
                      {budgetOptions.map(option => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleDropdownSelect('budget', option)}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {errors.budget && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.budget}
                </motion.p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                Project Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'projectType' ? null : 'projectType')}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-between text-left ${
                    errors.projectType
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-200 hover:border-gray-300 focus:border-blue-500'
                  } ${!formData.projectType && 'text-gray-400'}`}
                >
                  <span>{formData.projectType || 'Select project type'}</span>
                  <motion.div
                    animate={{ rotate: openDropdown === 'projectType' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openDropdown === 'projectType' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10"
                    >
                      {projectTypeOptions.map(option => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleDropdownSelect('projectType', option)}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {errors.projectType && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.projectType}
                </motion.p>
              )}
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
                Timeline <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'timeline' ? null : 'timeline')}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 flex items-center justify-between text-left ${
                    errors.timeline
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-200 hover:border-gray-300 focus:border-blue-500'
                  } ${!formData.timeline && 'text-gray-400'}`}
                >
                  <span>{formData.timeline || 'Select timeline'}</span>
                  <motion.div
                    animate={{ rotate: openDropdown === 'timeline' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openDropdown === 'timeline' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10"
                    >
                      {timelineOptions.map(option => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleDropdownSelect('timeline', option)}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {errors.timeline && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.timeline}
                </motion.p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Tell us about your project <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What are you looking to build? Any specific challenges you're facing?"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 placeholder:text-gray-400 focus:outline-none resize-none ${
                  errors.message
                    ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                }`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Loader size={20} />
                </motion.div>
                Submitting...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Inquiry
              </>
            )}
          </motion.button>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-start gap-3"
              >
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-green-900">Inquiry submitted successfully!</p>
                  <p className="text-green-700 text-sm mt-1">
                    Check your email for confirmation. We'll be in touch shortly.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3"
              >
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold text-red-900">Something went wrong</p>
                  <p className="text-red-700 text-sm mt-1">
                    Please check the form and try again.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </motion.div>
  );
}
