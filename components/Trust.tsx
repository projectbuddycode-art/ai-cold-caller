'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';

export default function Trust() {
  return (
    <motion.section
      className="py-12 sm:py-16 md:py-20 lg:py-32 bg-brand-light border-t border-brand-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left */}
          <motion.div variants={fadeInUp} custom={0}>
            <div className="text-xs sm:text-sm font-semibold text-primary-600 mb-3 sm:mb-4 uppercase tracking-wide">
              Credibility
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4 sm:mb-6">
              Built by Engineers from JP Morgan & Cisco
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Our founder led engineering teams building enterprise-scale systems.
              We bring that rigor and expertise to every project, delivering
              production-ready solutions from day one.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { number: '50+', label: 'Products Built', subtext: 'Across industries' },
              { number: '100%', label: 'Client Retention', subtext: 'Year over year' },
              { number: '6-8W', label: 'MVP Delivery', subtext: 'From discovery' },
              {
                number: '15+',
                label: 'Years Experience',
                subtext: 'Combined expertise',
              },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                className="bg-brand-bg rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 border border-brand-border hover:shadow-soft-lg transition-shadow"
                variants={fadeInUp}
                custom={idx}
                whileHover={{ y: -4 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {metric.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base font-semibold text-neutral-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-neutral-600">
                  {metric.subtext}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
