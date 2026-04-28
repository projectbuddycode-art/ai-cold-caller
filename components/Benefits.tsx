'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Award } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Ship 3x Faster',
      description: 'No red tape, no endless meetings. Senior engineer builds while you focus on business.',
      highlight: '6-8 weeks',
      highlightLabel: 'Avg. time to market',
      bgGradient: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      iconBg: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Crystal Clear Communication',
      description: 'Direct line to the founder. No account managers, no middlemen, no confusion.',
      highlight: '< 4 hours',
      highlightLabel: 'Response time',
      bgGradient: 'from-pink-50 to-purple-100',
      borderColor: 'border-purple-300',
      iconBg: 'from-purple-500 to-pink-600',
    },
    {
      icon: Award,
      title: 'Enterprise-Grade Quality',
      description: 'Built by engineers from JP Morgan, Cisco, and Fortune 500 companies—at startup pricing.',
      highlight: '100%',
      highlightLabel: 'Client retention',
      bgGradient: 'from-green-50 to-emerald-100',
      borderColor: 'border-green-300',
      iconBg: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br from-blue-100 via-transparent to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-5xl sm:text-6xl font-black text-slate-900 mb-4 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            No Agencies. No Bloat.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Just a Senior Engineer Who Ships
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Founded by a software engineer from JP Morgan Chase, Cisco, and [24]7.ai—with one mission: make enterprise-grade development accessible to every founder
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                className={`relative bg-gradient-to-br ${benefit.bgGradient} rounded-3xl border-2 ${benefit.borderColor} p-8 md:p-10 overflow-hidden`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Consistent animation
                transition={{ delay: idx * 0.15, duration: 0.7, ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Top accent */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.iconBg}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.2, duration: 0.6 }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.iconBg} flex items-center justify-center mb-6 text-white`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 text-base leading-relaxed mb-8">
                  {benefit.description}
                </p>

                {/* Highlight Metric */}
                <motion.div
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-white/80"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className={`text-4xl font-black bg-gradient-to-r ${benefit.iconBg} bg-clip-text text-transparent mb-1`}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
                  >
                    {benefit.highlight}
                  </motion.div>
                  <p className="text-slate-600 font-semibold text-sm">
                    {benefit.highlightLabel}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
