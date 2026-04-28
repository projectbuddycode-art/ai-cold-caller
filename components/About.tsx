'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from './animations';
import { useContactForm } from '@/contexts/ContactFormContext';
import Image from 'next/image';

export default function About() {
  const { openContactForm } = useContactForm();
  return (
    <motion.section
      className="py-18 md:py-28 bg-brand-bg border-t border-brand-border"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wide">
            Meet the Founder
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Shivam Dubey
          </h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar Image - Full Size */}
            <motion.div
              className="mb-8 relative w-full max-w-md mx-auto aspect-square rounded-3xl bg-white border-2 border-slate-200 overflow-hidden shadow-2xl"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/founder.jpg"
                alt="Shivam Dubey - Founder & CTO"
                fill
                className="object-cover w-full h-full"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Floating accent */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-transparent rounded-full blur-2xl opacity-20" />
            </motion.div>
          </motion.div>

          {/* Right - Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Role */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Founder & CTO
              </h3>
              <p className="text-neutral-600">Project Buddy Engineering Studio</p>
            </div>

            {/* Background */}
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wide">
                  Enterprise Experience
                </h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 font-bold mt-1">→</span>
                    <span>
                      <strong>JP Morgan</strong> – Led engineering team building
                      real-time trading systems and risk management platforms
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-500 font-bold mt-1">→</span>
                    <span>
                      <strong>Cisco</strong> – Built scalable infrastructure and
                      security systems serving enterprise customers
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wide">
                  What Drives Us
                </h4>
                <p className="text-neutral-700 leading-relaxed">Project Buddy is a software development company.
                  We believe engineering should be{' '}
                  <strong>simple, scalable, and result-driven.</strong> No fluff,
                  no excuses. Every line of code has a purpose. Every product
                  decision centers on ROI.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={openContactForm}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-soft-xl transition-shadow"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a Call with Shivam
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
