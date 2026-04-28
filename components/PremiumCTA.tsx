'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function PremiumCTA() {
  const { openContactForm } = useContactForm();
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 -z-10" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-100">
              Limited Availability
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            Ready to Scale Your Business
            <span className="block bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
              with AI?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join 50+ leading companies that have transformed their operations with our AI systems and SaaS platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <motion.button
              onClick={openContactForm}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-slate-900 font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }} // Consistent button styling
            >
              Apply to Work With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={openContactForm}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all" // Consistent button styling
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Demo Call
            </motion.button>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            className="mt-12 text-blue-100/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            No credit card required • 30-minute strategy call • Enterprise-grade support
          </motion.p>
        </motion.div>

        {/* Feature Row */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          {[
            { icon: '⚡', label: 'Fast Execution', desc: 'MVP in 6-8 weeks' },
            { icon: '🚀', label: 'Scalable', desc: 'Enterprise-ready' },
            { icon: '🎯', label: 'ROI Focused', desc: 'Revenue driven' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-1">{feature.label}</h3>
              <p className="text-blue-100/60 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
