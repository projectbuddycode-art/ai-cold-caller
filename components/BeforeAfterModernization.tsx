'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

interface ComparisonItem {
  before: string;
  after: string;
  improvement: string;
}

export default function BeforeAfterModernization() {
  const comparisons: ComparisonItem[] = [
    {
      before: 'Manual data entry across multiple systems',
      after: 'Automated data flow with real-time synchronization',
      improvement: '80% less manual work',
    },
    {
      before: 'Weekly manual reporting cycles',
      after: 'Real-time operational dashboards & AI-driven insights',
      improvement: '5-7 day acceleration',
    },
    {
      before: 'Fragmented workflows across disconnected tools',
      after: 'Unified, intelligent operational infrastructure',
      improvement: '3x faster processes',
    },
    {
      before: 'Limited visibility into operations',
      after: 'Complete operational intelligence and performance metrics',
      improvement: '100% visibility',
    },
    {
      before: 'Reactive problem-solving and incident response',
      after: 'Predictive AI models identifying issues before they occur',
      improvement: 'Proactive management',
    },
    {
      before: 'High operational costs due to manual labor',
      after: 'Optimized costs with intelligent automation',
      improvement: '30-50% cost reduction',
    },
  ];

  return (
    <motion.section
      className="relative py-16 md:py-24 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-green-100 to-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-100 to-transparent rounded-full blur-3xl opacity-10" />
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
            The Transformation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            How AI-driven modernization transforms your business operations
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="space-y-4 md:space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Before */}
              <motion.div
                className="bg-red-50 border border-red-200 rounded-xl p-5 md:p-6 relative group hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3">
                  <div className="text-red-400 mt-1 flex-shrink-0">✕</div>
                  <p className="text-slate-700 font-semibold text-sm md:text-base leading-relaxed">
                    {item.before}
                  </p>
                </div>
              </motion.div>

              {/* Arrow & Icon */}
              <motion.div
                className="flex justify-center items-center"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-6 h-6 text-blue-600 hidden md:block" />
                  <div className="md:hidden w-full h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent my-2" />
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                className="bg-green-50 border border-green-200 rounded-xl p-5 md:p-6 relative group hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-700 font-semibold text-sm md:text-base leading-relaxed mb-1">
                      {item.after}
                    </p>
                    <motion.span
                      className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.improvement}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-16 p-8 md:p-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-2xl border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start gap-4">
            <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Average Results After Modernization</h3>
              <ul className="space-y-2 text-slate-700">
                <li><span className="font-bold text-green-600">30-50%</span> reduction in operational costs</li>
                <li><span className="font-bold text-green-600">40-60%</span> faster process execution</li>
                <li><span className="font-bold text-green-600">70%+</span> reduction in manual errors</li>
                <li><span className="font-bold text-green-600">3x</span> improvement in operational efficiency</li>
                <li><span className="font-bold text-green-600">ROI in 3-6 months</span> from implementation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
