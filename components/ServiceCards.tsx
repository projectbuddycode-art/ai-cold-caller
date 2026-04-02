'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Brain, Code2, Zap, X } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Brain,
    title: 'AI Automation Systems',
    color: 'from-blue-500 to-cyan-500',
    problem: 'Manual processes waste 30+ hours/week and drain your team',
    solution:
      'Custom AI workflows that automate repetitive tasks, integrate with your stack, and learn from patterns',
    result: '40% cost reduction. 50% faster execution.',
  },
  {
    id: 2,
    icon: Code2,
    title: 'SaaS & MVP Engineering',
    color: 'from-purple-500 to-pink-500',
    problem: 'Building fast is risky. Most startups ship MVP in 4-6 months',
    solution:
      'Production-ready systems in 6-8 weeks. Scalable architecture. Zero technical debt from the start.',
    result: 'Launch faster. Raise easier. Scale with confidence.',
  },
  {
    id: 3,
    icon: Zap,
    title: 'AI Integration & Optimization',
    color: 'from-orange-500 to-red-500',
    problem: 'Your product exists, but AI integration feels disconnected',
    solution:
      'Strategic audit + seamless integration. We identify AI opportunities and build systems that users actually use.',
    result: '20-35% improvement in engagement metrics.',
  },
];

export default function ServiceCards() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
          className="text-center mb-12"
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
            Services
          </motion.p>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What We Build
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
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
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                layoutId={`card-${service.id}`}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
                className={`relative cursor-pointer rounded-xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-blue-200 shadow-xl md:col-span-2'
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                }`}
                whileHover={{ y: -4 }}
              >
                {/* Main Content Area */}
                <div className="p-6 md:p-8">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Collapsed View */}
                  {!isExpanded && (
                    <motion.p
                      className="text-gray-600 text-sm line-clamp-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.solution}
                    </motion.p>
                  )}

                  {/* Expanded View */}
                  {isExpanded && (
                    <motion.div
                      className="space-y-4 mt-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                          Problem
                        </h4>
                        <p className="text-gray-700 text-sm">{service.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                          Our Solution
                        </h4>
                        <p className="text-gray-700 text-sm">{service.solution}</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="text-xs font-semibold text-green-700 uppercase mb-1">
                          Result
                        </h4>
                        <p className="text-green-900 font-semibold text-sm">
                          {service.result}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['Full Strategy', 'Implementation', '6-8 Week Delivery'].map(
                          (tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Close Button */}
                {isExpanded && (
                  <motion.button
                    className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">Not sure which service fits?</p>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
