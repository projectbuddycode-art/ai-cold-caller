'use client';

import { motion } from 'framer-motion';
import { Compass, Pencil, Wrench, TrendingUp } from 'lucide-react';

const process = [
  {
    icon: Compass,
    title: 'Discovery',
    description: 'Understand goals, tech stack, and market',
    duration: 'Week 1-2',
  },
  {
    icon: Pencil,
    title: 'Design',
    description: 'Architecture, tech decisions, roadmap',
    duration: 'Week 2-3',
  },
  {
    icon: Wrench,
    title: 'Build',
    description: 'Development, testing, integration',
    duration: 'Week 4-7',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Launch, support, growth strategy',
    duration: 'Week 8+',
  },
];

export default function ProcessTimeline() {
  return (
    <motion.section
      className="py-12 md:py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Process
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            How We Work
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-600 to-blue-200 -z-10" />

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {process.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  className="relative"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  {/* Step Number Circle */}
                  <motion.div
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center font-bold text-sm text-blue-600">
                        {idx + 1}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {step.duration}
                    </div>
                  </motion.div>

                  {/* Arrow (except last) */}
                  {idx < process.length - 1 && (
                    <motion.div
                      className="hidden md:flex absolute -right-4 top-20 text-blue-600 text-2xl"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Total Timeline */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-600 mb-3">Complete cycle:</p>
          <div className="text-3xl font-bold text-gray-900">6-8 Weeks to MVP</div>
          <p className="text-gray-600 mt-2">Including strategy, architecture & deployment</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
