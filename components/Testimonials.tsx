'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './animations';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'They modernized our CRM and implemented AI workflows. Reduced manual data entry by 70%. Operational efficiency improved significantly.',
      author: 'Sarah Chen',
      role: 'VP Operations, Financial Services',
      rating: 5,
      gradient: 'from-blue-500 to-indigo-600',
      initial: 'SC',
    },
    {
      quote: 'Operational intelligence framework gave us real-time visibility. AI dashboards transformed decision-making. Outstanding technical execution.',
      author: 'James Rodriguez',
      role: 'COO, Enterprise Manufacturing',
      rating: 5,
      gradient: 'from-purple-500 to-pink-600',
      initial: 'JR',
    },
    {
      quote: 'Audited workflows, identified inefficiencies, built intelligent systems. Team productivity 3x higher. Results exceeded expectations.',
      author: 'Michael Park',
      role: 'Director of Operations, Global Enterprise',
      rating: 5,
      gradient: 'from-cyan-500 to-blue-600',
      initial: 'MP',
    },
    {
      quote: 'AI modernization project exceeded expectations. System integration seamless, immediate operational improvements. Highly professional team.',
      author: 'Priya Sharma',
      role: 'Head of Operations, Banking Group',
      rating: 5,
      gradient: 'from-orange-500 to-red-600',
      initial: 'PS',
    },
    {
      quote: 'Workflow automation reduced processing time by 60%. Clear ROI from day one. Highly recommended for enterprise modernization.',
      author: 'Amit Verma',
      role: 'Operations Manager, Supply Chain',
      rating: 5,
      gradient: 'from-emerald-500 to-teal-600',
      initial: 'AV',
    },
    {
      quote: 'Deep understanding of enterprise operations. Complex systems implementation seamless. True transformation partner for our organization.',
      author: 'Sneha Patel',
      role: 'Director of Digital Transformation',
      rating: 5,
      gradient: 'from-rose-500 to-pink-600',
      initial: 'SP',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
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
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what operations executives and enterprise leaders say about working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              variants={itemVariants}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />

              {/* Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all h-full flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-slate-700 mb-8 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
