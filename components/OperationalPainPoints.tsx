'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Zap, BarChart3, Clock, Users, Lock } from 'lucide-react';
import { staggerContainer, itemVariants } from './animations';

export default function OperationalPainPoints() {
  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Fragmented Workflows',
      description: 'Systems and teams working in silos without integrated data flow',
      impact: 'Communication delays & inefficiencies',
      color: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100/30',
    },
    {
      icon: Users,
      title: 'Repetitive Manual Work',
      description: 'Teams spending hours on data entry and routine tasks',
      impact: '40% of operational time wasted',
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100/30',
    },
    {
      icon: BarChart3,
      title: 'Disconnected Systems',
      description: 'Legacy systems that cannot communicate or share data',
      impact: 'Data silos & redundant work',
      color: 'from-yellow-500 to-yellow-600',
      bgGradient: 'from-yellow-50 to-yellow-100/30',
    },
    {
      icon: Clock,
      title: 'Delayed Reporting',
      description: 'Manual report generation taking days instead of real-time insights',
      impact: 'Slow decision-making cycles',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100/30',
    },
    {
      icon: Zap,
      title: 'Lack of Visibility',
      description: 'No real-time operational intelligence or performance metrics',
      impact: 'Reactive vs. proactive management',
      color: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100/30',
    },
    {
      icon: Lock,
      title: 'Operational Bottlenecks',
      description: 'Critical processes constrained by manual steps and approvals',
      impact: 'Revenue leakage & customer churn',
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100/30',
    },
  ];

  return (
    <motion.section
      className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-br from-red-100 to-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Common Operational Inefficiencies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Businesses face these critical operational challenges that limit growth and waste resources
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                className={`relative group bg-gradient-to-br ${point.bgGradient} border border-slate-200 rounded-2xl p-8 overflow-hidden hover:border-blue-200 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} text-white flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{point.description}</p>

                {/* Impact Badge */}
                <motion.div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${point.color} text-white`}
                  whileHover={{ scale: 1.05 }}
                >
                  {point.impact}
                </motion.div>

                {/* Arrow Indicator */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-blue-600 font-bold text-xl">→</div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 mb-6">
            These inefficiencies compound over time, impacting revenue, customer satisfaction, and employee productivity.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
