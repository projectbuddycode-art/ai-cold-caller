'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

const faqs = [
  {
    question: 'What is AI software modernization and how does it benefit enterprises?',
    answer:
      'AI software modernization transforms legacy systems with artificial intelligence and workflow automation, improving operational efficiency, reducing manual processes, and enabling data-driven decision-making. Enterprises typically see 30-50% cost reduction, 40-60% faster operations, and significantly improved customer experiences through intelligent automation and operational intelligence systems.',
  },
  {
    question: 'How does operational intelligence help improve business operations?',
    answer:
      'Operational intelligence uses real-time data, AI analytics, and intelligent dashboards to provide actionable insights into business processes. It enables proactive decision-making, identifies bottlenecks, predicts issues before they occur, optimizes resource allocation, and transforms raw data into strategic advantage. Organizations gain complete visibility into operations and can respond instantly to changes.',
  },
  {
    question: 'What is workflow automation and how can it transform our business?',
    answer:
      'Workflow automation uses AI to streamline repetitive business processes, eliminate manual tasks, and improve consistency. It accelerates cycle times (often by 50%+ ), reduces human error, frees teams for strategic work, improves compliance, and enables seamless integration across systems. Common applications include lead qualification, order processing, invoice handling, and customer service.',
  },
  {
    question: 'How long does an AI modernization project take?',
    answer:
      'Most operational modernization projects complete in 8-16 weeks from audit to deployment. This includes systems analysis, strategy development, AI implementation, integration, testing, and optimization with milestone-based delivery and regular progress reviews. Complex enterprise transformations may take 4-6 months. We provide transparent timelines before starting.',
  },
  {
    question: 'What is the typical cost for AI modernization and workflow automation?',
    answer:
      'Engagements range from $75K to $500K+ depending on scale and complexity. Initial operational audits and modernization strategies start at $75K. Full system implementation typically runs $200K-$350K. We provide transparent pricing with clear ROI projections and measure success by business impact, not implementation cost.',
  },
  {
    question: 'Can AI modernization integrate with our existing enterprise systems?',
    answer:
      'Yes. We modernize and integrate with all major systems: CRM (Salesforce, HubSpot, Pipedrive), ERP (SAP, Oracle), legacy mainframes, financial systems, supply chain management, and custom databases. We\'re technology-agnostic and work seamlessly with your existing tech stack to enhance, not replace, current infrastructure.',
  },
  {
    question: 'How does Project Buddy approach operational intelligence implementation?',
    answer:
      'We start with deep operational audits to understand current processes, pain points, and data infrastructure. We build AI models for your specific use cases, create intelligent dashboards for real-time visibility, integrate data sources, and implement continuous improvement. Our approach combines technical excellence with change management to ensure adoption.',
  },
  {
    question: 'What results can we expect from workflow modernization?',
    answer:
      'Typical results include: 30-50% reduction in operational costs, 40-60% faster process completion, 70%+ reduction in manual errors, improved compliance and audit readiness, faster employee onboarding, and significantly better customer experiences. ROI typically appears within 3-6 months of implementation with ongoing efficiency gains.',
  },
  {
    question: 'How does AI help with business process automation?',
    answer:
      'AI-powered business process automation uses machine learning to understand patterns, make intelligent decisions, and handle complex workflows without human intervention. It manages edge cases better than rule-based automation, improves over time through learning, and scales effortlessly. Common applications include customer support automation, financial reconciliation, and supply chain optimization.',
  },
  {
    question: 'How do you ensure smooth implementation with minimal disruption?',
    answer:
      'We use phased rollout approach with parallel systems, comprehensive testing, team training, and full documentation. We manage all technical risk to keep operations stable during transition. Post-launch support is included. We treat your business continuity as our top priority throughout the modernization process.',
  },
  {
    question: 'What makes Project Buddy different from traditional consulting firms?',
    answer:
      'We\'re engineer-first and implementation-focused, not sales-oriented. You get hands-on technical leadership delivering working systems, not theoretical reports. With experience building enterprise systems at JP Morgan and Cisco, we deeply understand operational challenges and deliver measurable business impact with proven expertise.',
  },
  {
    question: 'Does Project Buddy work with enterprises of all sizes?',
    answer:
      'Yes. We work with mid-market through Fortune 500 companies with revenue from $5M to billions. Our framework and approach scales across different organizational maturity levels. We understand enterprise complexity and customize solutions accordingly, whether you\'re growing rapidly or optimizing established operations.',
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
