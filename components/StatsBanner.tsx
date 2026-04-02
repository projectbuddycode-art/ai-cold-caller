'use client';

import { motion } from 'framer-motion';

export default function StatsBanner() {
  const stats = [
    { number: '50+', label: 'Products Launched' },
    { number: '100%', label: 'Client Retention' },
    { number: '6 weeks', label: 'Avg. Time to Market' },
    { number: '300%', label: 'Avg. ROI Increase' },
  ];

  return (
    <motion.section
      className="relative py-16 md:py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Container */}
        <motion.div
          className="relative bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-100 rounded-3xl border-2 border-blue-200 p-12 md:p-16 shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative z-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-3 leading-tight"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.1, duration: 0.6 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-slate-700 font-semibold text-base md:text-lg">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Divider Line */}
            <motion.div
              className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            />

            {/* Tagline */}
            <motion.p
              className="text-center text-slate-800 font-bold text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Trusted by founders who value speed, clarity, and execution
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
