'use client';

import { motion } from 'framer-motion';
import { staggerContainer, itemVariants } from './animations';

interface AIOptimizedContentProps {
  title: string;
  subtitle?: string;
  sections: {
    question: string;
    answer: string;
    relatedTerms?: string[];
  }[];
  semanticKeywords?: string[];
}

export default function AIOptimizedContent({
  title,
  subtitle,
  sections,
  semanticKeywords = [],
}: AIOptimizedContentProps) {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Semantic keywords meta (for AI engines) */}
        {semanticKeywords.length > 0 && (
          <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Related Topics:
            </h3>
            <div className="flex flex-wrap gap-2">
              {semanticKeywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Q&A Sections - AI-optimized structure */}
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {sections.map((section, idx) => (
            <motion.article
              key={idx}
              className="prose prose-lg max-w-none"
              variants={itemVariants}
              custom={idx}
            >
              {/* Question as H2 for SEO */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.question}
              </h2>

              {/* Answer - direct, AI-readable */}
              <div className="text-gray-700 leading-relaxed mb-6">
                {section.answer}
              </div>

              {/* Related terms for semantic clustering */}
              {section.relatedTerms && section.relatedTerms.length > 0 && (
                <div className="p-4 bg-gray-50 rounded-lg mt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Related Concepts:
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {section.relatedTerms.map((term, termIdx) => (
                      <li
                        key={termIdx}
                        className="text-sm text-gray-600 bg-white px-2 py-1 rounded border border-gray-200"
                      >
                        {term}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Structured definition block */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Key Takeaways
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>AI Modernization</strong> transforms outdated systems into
                intelligent platforms
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>Operational Intelligence</strong> provides real-time
                visibility into business processes
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                ✓
              </span>
              <span className="text-gray-700">
                <strong>Workflow Automation</strong> eliminates manual work and
                improves efficiency
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
