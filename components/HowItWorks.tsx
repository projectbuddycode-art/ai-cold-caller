"use client";

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './animations';
import { Compass, Lightbulb, Hammer, Rocket, TrendingUp } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function HowItWorks() {
  const { openContactForm } = useContactForm();
  const steps = [
    { // New step: Capture
      icon: Compass, // Reusing Compass icon
      title: 'Capture',
      description: 'Automatically collect leads from various channels like website forms, WhatsApp, and email.',
      number: '01',
    },
    { // New step: Normalize
      icon: Lightbulb, // Reusing Lightbulb icon
      title: 'Normalize',
      description: 'Standardize and clean lead data, ensuring consistency and accuracy across all sources.',
      number: '02',
    },
    { // New step: AI Score
      icon: Hammer, // Reusing Hammer icon
      title: 'AI Score',
      description: 'Utilize AI to score leads based on engagement, fit, and likelihood to convert, prioritizing high-value prospects.',
      number: '03',
    },
    { // New step: Notify
      icon: Rocket, // Reusing Rocket icon
      title: 'Notify',
      description: 'Instantly alert your sales team with detailed lead information and recommended next steps.',
      number: '04',
    },
    { // New step: Convert
      icon: TrendingUp, // Reusing TrendingUp icon
      title: 'Convert',
      description: 'Empower your team to engage with pre-qualified leads, leading to higher conversion rates and increased revenue.',
      number: '05',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-100 to-transparent rounded-full blur-3xl opacity-10" />
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
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our proven process from concept to scale
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full" />

          {/* Steps Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  className="relative"
                  variants={itemVariants}
                >
                  {/* Circle with Number */}
                  <motion.div
                    className="flex flex-col items-center lg:items-center text-center mb-8 lg:mb-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-20">
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 shadow-soft-xl">
                       <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center relative">
                         <Icon className="w-10 h-10 text-blue-600" />
                       </div>
                     </div>
                   </div>
                   {/* Step Number */}
                   <motion.div
                     className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md"
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ delay: idx * 0.1 + 0.4, type: 'spring', stiffness: 500, damping: 20 }}
                   >
                     {step.number}
                   </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 max-w-xs">
                      {step.description}
                    </p>

                    {/* Hidden on desktop - Vertical Line */}
                    {idx !== steps.length - 1 && (
                      <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-blue-500 to-transparent mt-8 mb-4" />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Ready to start your transformation journey?
          </p>
          <motion.button
            onClick={openContactForm}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }} // Consistent button styling
          >
            Schedule Strategy Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
