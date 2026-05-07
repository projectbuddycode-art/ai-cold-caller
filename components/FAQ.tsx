'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

const faqs = [
  {
    question: 'How long does a typical AI modernization project take?',
    answer:
      'Most operational modernization projects complete in 8-16 weeks from audit to full deployment. This includes systems analysis, strategy development, system implementation, testing, and optimization. We provide milestone-based delivery with regular progress reviews.',
  },
  {
    question: 'What is the typical cost for an AI modernization engagement?',
    answer:
      'Engagements range from $75K to $500K+ depending on scale and complexity. An operational audit and modernization strategy starts at $75K. Full system implementation typically runs $200K-$350K. We provide transparent pricing with clear ROI projections before starting any work.',
  },
  {
    question: 'How is Project Buddy different from traditional consulting firms?',
    answer:
      'We\'re engineer-first, not sales-focused. You get hands-on technical leadership and implementation, not theoretical recommendations. We\'ve built systems at JP Morgan and Cisco. We understand enterprise operations deeply and deliver working systems, not just reports.',
  },
  {
    question: 'Do you work with enterprises of all sizes?',
    answer:
      'Yes. We work with mid-market through Fortune 500 companies. Our framework scales from $5M revenue companies to massive enterprises. We understand different operational maturity levels and customize our approach accordingly.',
  },
  {
    question: 'What systems do you modernize and integrate with?',
    answer:
      'We build and integrate with: CRM systems (Salesforce, HubSpot, custom), ERP platforms, legacy mainframe systems, financial systems, supply chain management, and custom databases. We\'re framework-agnostic and work with your existing tech stack to modernize and improve it.',
  },
  {
    question: 'How do you ensure minimal disruption during implementation?',
    answer:
      'We follow a phased rollout approach with parallel systems running, comprehensive testing, team training, and full documentation. We manage all technical risk so your operations stay stable during the transition. Post-launch support is included.',
  },
];

export default function FAQ() {
  const { openContactForm } = useContactForm();
  const [activeId, setActiveId] = useState<number | null>(0);

  // SEO Schema
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <motion.section
      className="py-12 md:py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FAQ
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Common Questions
          </motion.h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Everything you need to know about our services
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-3"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <motion.button
                onClick={() => setActiveId(activeId === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
                whileHover={{ backgroundColor: '#f9fafb' }}
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeId === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeId === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <motion.div
                      className="px-6 py-4 bg-gray-50 text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <motion.button
            onClick={openContactForm}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
