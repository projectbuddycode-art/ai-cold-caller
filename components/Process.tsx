'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';
import { Compass, Palette, Code2, Rocket } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function Process() {
  const { openContactForm } = useContactForm();
  const steps = [
    {
      number: '01',
      icon: Compass,
      title: 'Discover',
      description:
        'We deep-dive into your business, market, and tech stack. Understanding your goals and constraints is non-negotiable.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design',
      description:
        'Architecting the solution. We design scalable systems, user flows, and technical specifications that align with your vision.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: Code2,
      title: 'Build',
      description:
        'Execution at speed. Agile sprints, daily updates, and collaborative development to ship your product fast.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Scale',
      description:
        'Post-launch support, optimization, and scaling. We ensure your product handles growth and evolves with your users.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <motion.section
      className="py-20 md:py-32 bg-brand-bg border-t border-brand-border"
      id="process"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-18"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wide">
            Our Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            The Project Buddy Process
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From discovery to scale, we follow a proven framework that
            eliminates uncertainty.
          </p>
        </motion.div>

        {/* Horizontal Process Flow */}
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-brand-border via-primary-300 to-brand-border" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  className="flex flex-col"
                  variants={fadeInUp}
                  custom={idx}
                >
                  {/* Step Card */}
                  <motion.div
                    className="bg-brand-light border border-brand-border rounded-2xl p-8 relative h-full hover:shadow-soft-lg transition-shadow"
                    whileHover={{ y: -4 }}
                  >
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-neutral-100 mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center mb-6 shadow-soft`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>

                    {/* Arrow Indicator */}
                    {idx < steps.length - 1 && (
                      <motion.div
                        className="hidden lg:flex absolute -right-12 top-1/2 -translate-y-1/2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="text-3xl text-primary-300">→</div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-neutral-600 mb-6 text-lg">
            Ready to start your project?
          </p>
          <motion.button
            onClick={openContactForm}
            className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-soft-xl transition-shadow"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
