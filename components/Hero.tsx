'use client';

import { motion } from 'framer-motion';
import { Shield, Code, Zap, Award } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function Hero() {
  const { openContactForm } = useContactForm();
  
  const trustBadges = [
    { icon: Shield, label: 'Built by Engineers\nfrom JP Morgan & Cisco' },
    { icon: Code, label: 'Production-Ready\nArchitecture' },
    { icon: Zap, label: '6–8 Week MVP\nDelivery' },
    { icon: Award, label: 'Serving 50+\nGlobal Clients' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200 to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Centered Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
{/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-700">
              ✓ 6–8 Week MVP Delivery  •  Serving Startups Globally  •  AI + SaaS Specialists
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              AI Automation &
            </motion.span>{' '}
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20, filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' }}
              animate={{ 
                opacity: 1, 
                x: 0,
                filter: [
                  'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
                  'drop-shadow(0 0 25px rgba(59, 130, 246, 0.6))',
                  'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
                ]
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                filter: {
                  repeat: Infinity,
                  duration: 3,
                  delay: 0.8,
                }
              }}
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent inline-block"
            > 
              SaaS MVP Development
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block"
            >
              for Startups Worldwide
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Launch production-ready AI systems and SaaS products in 6–8 weeks. We help startups build intelligent automation that converts leads, scales workflows, and drives revenue.
          </motion.p>

          {/* Supporting Paragraph */}
          <motion.p
            className="text-base text-slate-500 mb-10 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From AI calling agents to CRM automation, we transform business processes with cutting-edge AI—remotely, efficiently, and built to scale globally.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={openContactForm}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Strategy Call →
            </motion.button>
            <motion.button
              onClick={openContactForm}
              className="px-10 py-5 border-2 border-orange-500 text-orange-500 font-bold text-lg rounded-2xl hover:bg-orange-50 transition-all"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free AI System Audit
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Trust Badges - Horizontal Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7 mb-18"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Consistent animation
              >
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </motion.div>
                <p className="text-slate-800 font-bold text-center text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {badge.label.replace('JP\nMorgan', 'JP Morgan').replace('6-8 Week MVP\nDelivery', '6-8 Week MVP Delivery')}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-slate-600 text-sm font-semibold mb-3">SCROLL DOWN</p>
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-blue-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
