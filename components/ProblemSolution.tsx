'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle2, AlertCircle, Zap, Target } from 'lucide-react';

const tabContent = [
  {
    id: 'problem',
    label: 'The Problem',
    icon: AlertCircle,
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50',
    accentColor: 'text-red-600',
    points: [
      'Agencies move too slow',
      'Poor communication and ownership',
      'Excessive costs with minimal ROI',
      'Fragmented tech stacks',
      'No founder-level accountability',
    ],
  },
  {
    id: 'solution',
    label: 'Our Solution',
    icon: Zap,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    accentColor: 'text-blue-600',
    points: [
      'Founder-led execution from day one',
      'Direct access to engineering leads',
      'Transparent, predictable timelines',
      'Zero technical debt architecture',
      'Quarterly strategy reviews included',
    ],
  },
  {
    id: 'outcome',
    label: 'The Outcome',
    icon: Target,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    accentColor: 'text-green-600',
    points: [
      'Launch 60% faster than agencies',
      'Reduce operational costs by 40%',
      'Scale without rebuilding',
      'Your team learns during process',
      'Sustainable competitive advantage',
    ],
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('problem');

  return (
    <motion.section
      className="py-12 md:py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why Project Buddy is Different
          </motion.h2>
          <p className="text-gray-600 text-sm sm:text-lg">
            From problem identification to scalable solution
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex gap-3 md:gap-6 justify-center mb-12 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {tabContent.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all text-sm md:text-base flex items-center gap-2 group ${
                  isActive
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} className={isActive ? '' : `group-hover:scale-110 transition-transform`} />
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {tabContent.map((tab) =>
            activeTab === tab.id ? (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left: Visual Icon Box */}
                  <motion.div
                    className={`relative h-80 rounded-2xl bg-gradient-to-br ${tab.bgGradient} p-8 flex items-center justify-center overflow-hidden`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    {/* Animated Background Orbs */}
                    <motion.div
                      className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${tab.gradient} rounded-full blur-3xl opacity-30`}
                      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                      className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br ${tab.gradient} rounded-full blur-3xl opacity-20`}
                      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="relative z-10"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className={`bg-white rounded-2xl p-6 shadow-lg`}>
                        {tab.icon && <tab.icon size={80} className={`${tab.accentColor}`} />}
                      </div>
                    </motion.div>

                    {/* Decorative Ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-br ${tab.gradient}`}
                      style={{ backgroundClip: 'padding-box' }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>

                  {/* Right: Points */}
                  <motion.div
                    className="space-y-4"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.12,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {tab.points.map((point, idx) => (
                      <motion.div
                        key={idx}
                        className="flex gap-4 items-start p-4 rounded-lg bg-gradient-to-r from-gray-50 to-transparent hover:from-gray-100 transition-colors group"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                        }}
                        whileHover={{ x: 4 }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, delay: idx * 0.3, repeat: Infinity }}
                        >
                          <CheckCircle2 className={`w-6 h-6 ${tab.accentColor} flex-shrink-0 mt-0.5`} />
                        </motion.div>
                        <span className="text-gray-700 font-semibold text-base">{point}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
