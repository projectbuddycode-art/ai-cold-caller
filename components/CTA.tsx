'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';
import { CheckCircle2 } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function CTA() {
  const { openContactForm } = useContactForm();
  const benefits = [
    'Personalized strategy session with Shivam',
    'Free AI audit of your current tech stack',
    'Roadmap for your next 90 days',
    'Zero commitment, no sales pressure',
  ];

  return (
    <motion.section
      className="py-10 md:py-14 bg-brand-bg border-t border-brand-border"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="relative">
          {/* Gradient Blur */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-10 -z-10" />

          {/* Content */}
          <motion.div
            className="text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Headline */}
            <motion.h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6"
              variants={fadeInUp}
              custom={0}
            >
              Ready to Build Something
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                That Actually Converts?
              </span>
            </motion.h2>

            {/* Subheader */}
            <motion.p
              className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
              custom={1}
            >
              Let's talk about your goals. We'll audit your tech, identify
              opportunities, and build a plan to accelerate your growth.
            </motion.p>

            {/* Benefits */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-3"
                  variants={fadeInUp}
                  custom={idx + 2}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: idx * 0.3, repeat: Infinity }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-neutral-700 text-sm md:text-base">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
              custom={6}
            >
              <motion.button
                onClick={openContactForm}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-soft-xl transition-shadow text-base md:text-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Strategy Call
              </motion.button>
              <motion.button
                onClick={openContactForm}
                className="px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-semibold rounded-lg hover:bg-neutral-50 transition-colors text-base md:text-lg"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule AI Audit
              </motion.button>
            </motion.div>

            {/* Trust Footer */}
            <motion.p
              className="text-neutral-500 text-sm md:text-base mt-8"
              variants={fadeInUp}
              custom={7}
            >
              👋 Direct response. No bot. Shivam personally handles your inquiry.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
