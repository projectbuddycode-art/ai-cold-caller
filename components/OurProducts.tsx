'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './animations';
import { BookOpen, Phone } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function OurProducts() {
  const { openContactForm } = useContactForm();
  const products = [
    {
      icon: BookOpen,
      title: 'School SaaS Platform',
      features: [
        'Student Dashboard + Parent App',
        'Attendance & Attendance Tracking',
        'Digital Marks & Report Cards',
        'Payment Processing',
        'Push Notifications',
      ],
      status: 'Coming Soon',
      statusColor: 'from-blue-500 to-blue-600',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    },
    {
      icon: Phone,
      title: 'AI Calling Platform',
      features: [
        'Virtual Phone Numbers',
        'AI Inbound/Outbound Calls',
        'Appointment Booking Automation',
        'Call Recording & Analytics',
        'Integration Ready',
      ],
      status: 'Early Access',
      statusColor: 'from-indigo-500 to-purple-600',
      gradient: 'from-indigo-500 via-purple-500 to-pink-600',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-gradient-to-t from-indigo-100 to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Premium SaaS solutions built for scale and impact
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={idx}
                className="group relative"
                variants={itemVariants}
              >
                {/* Gradient Border */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${product.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10`} />

                {/* Card */}
                <motion.div
                  className="relative bg-white rounded-2xl p-8 border border-slate-200 overflow-hidden backdrop-blur-sm shadow-soft-lg hover:shadow-soft-xl transition-all"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {/* Glassmorphism Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Status Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.statusColor} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <motion.div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${product.statusColor} text-white text-xs font-semibold`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        {product.status}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      {product.title}
                    </h3>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, featureIdx) => (
                        <motion.li
                          key={featureIdx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + featureIdx * 0.05 + 0.2 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-slate-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      onClick={openContactForm}
                      className={`w-full px-6 py-3 bg-gradient-to-r ${product.statusColor} text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request Access
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
