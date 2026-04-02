'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';
import {
  Zap,
  MessageCircle,
  Award,
} from 'lucide-react';

export default function WhyProjectBuddy() {
  const benefits = [
    {
      icon: Zap,
      title: 'Ship 3x Faster',
      description:
        'No red tape, no endless meetings. Senior engineer builds while you focus on business.',
      metric: '6-8 weeks',
      metricLabel: 'Avg. time to market',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-500',
    },
    {
      icon: MessageCircle,
      title: 'Crystal Clear Communication',
      description:
        'Direct line to the founder. No account managers, no middlemen, no confusion.',
      metric: '< 4 hours',
      metricLabel: 'Response time',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-500',
    },
    {
      icon: Award,
      title: 'Enterprise-Grade Quality',
      description:
        'Built by engineers from JP Morgan, Cisco, and Fortune 500 companies—at startup pricing.',
      metric: '100%',
      metricLabel: 'Client retention',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-500',
    },
  ];

  return (
    <motion.section
      className="py-20 md:py-32 bg-white"
      id="why-project-buddy"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6 border border-blue-200">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-700">Why Project Buddy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
            No Agencies. No Bloat.
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Just a Senior Engineer Who Ships
          </p>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Founded by a software engineer from JP Morgan Chase, Cisco, and [24]7.ai—with one mission: make enterprise-grade development accessible to every founder
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                className={`group relative border-2 ${benefit.borderColor} ${benefit.bgColor} rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-300`}
                variants={fadeInUp}
                custom={idx}
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Metric */}
                <div className="pt-6 border-t border-current border-opacity-10">
                  <div className="text-3xl font-bold text-neutral-900 mb-1">
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {benefit.metricLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
