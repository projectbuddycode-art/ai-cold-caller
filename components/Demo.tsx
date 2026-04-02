'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

const demoSteps = [
  {
    id: 1,
    title: 'Lead Inbound',
    icon: '📧',
    description: 'New lead arrives via email or form',
  },
  {
    id: 2,
    title: 'AI Scores Lead',
    icon: '🤖',
    description: 'AI analyzes fit and engagement likelihood',
  },
  {
    id: 3,
    title: 'CRM Updates',
    icon: '📊',
    description: 'Score and data automatically synced',
  },
  {
    id: 4,
    title: 'Team Action',
    icon: '⚡',
    description: 'Team follows up with highest-value leads',
  },
];

export default function Demo() {
  const { openContactForm } = useContactForm();
  const [activeStep, setActiveStep] = useState(1);

  return (
    <motion.section
      className="py-12 md:py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            See It In Action
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How Our AI Systems Work
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Watch how our AI automation systems handle lead scoring and CRM integration in real-time
          </motion.p>
        </motion.div>

        {/* Main Demo Area */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Left: Steps */}
          <motion.div
            className="space-y-3"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {demoSteps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left p-4 rounded-lg transition-all border-2 ${
                  activeStep === step.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{step.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{step.title}</div>
                    <div className="text-sm text-gray-500">{step.description}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Interactive Demo */}
          <motion.div
            className="md:col-span-2 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 p-8 min-h-96 flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Demo Content */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-sm font-semibold text-gray-900 mb-2">
                      📧 New Email Received
                    </div>
                    <code className="text-xs text-gray-600 block">
                      From: startup@example.com
                      <br />
                      Subject: AI Development for Growth
                    </code>
                  </div>
                  <p className="text-sm text-gray-700">
                    Lead information is automatically captured and queued for analysis
                  </p>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-900">Lead Score</span>
                      <span className="text-xl font-bold text-green-600">8.5/10</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-700">Budget: $50K+</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-700">Timeline: Immediate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-700">Fit: 95% match</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    AI analyzes company details, email sentiment, and historical patterns
                  </p>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-3">
                      CRM Sync Status
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-700">Contact created</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-700">Opportunity linked</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-700">Score field updated</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    All data synced to your CRM within seconds
                  </p>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-3">
                      ⚡ Team Action Queue
                    </div>
                    <code className="text-xs text-gray-600 block">
                      Priority: HIGH
                      <br />
                      Assigned to: Sales Team
                      <br />
                      Action: Send follow-up (customized)
                      <br />
                      Timing: Immediate
                    </code>
                  </div>
                  <p className="text-sm text-gray-700">
                    Your team is notified and can take action on high-value leads instantly
                  </p>
                </div>
              )}
            </motion.div>

            {/* Navigation */}
            <motion.div
              className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
                className="px-4 py-2 text-sm font-semibold text-gray-700 disabled:opacity-50"
              >
                ← Back
              </button>
              <div className="flex gap-2">
                {demoSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    className={`w-2 h-2 rounded-full ${
                      activeStep === step.id ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
                disabled={activeStep === 4}
                className="px-4 py-2 text-sm font-semibold text-gray-700 disabled:opacity-50 flex items-center gap-1"
              >
                Next →
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">
            This same automation works with any CRM or data pipeline
          </p>
          <motion.button
            onClick={openContactForm}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See Complete Integration
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
