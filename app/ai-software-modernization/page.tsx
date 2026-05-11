'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, BarChart3, Cpu, TrendingUp } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function AIModernizationPage() {
  const { openContactForm } = useContactForm();

  const benefits = [
    'Transform legacy systems into AI-ready platforms',
    '3x faster processing with modern architecture',
    '30-50% reduction in operational costs',
    'Enterprise-grade security and compliance',
    '100% uptime during transition',
    'Seamless integration with existing systems',
  ];

  const features = [
    {
      icon: Cpu,
      title: 'Modern Architecture',
      description: 'Build scalable, cloud-native systems with AI-ready infrastructure',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Embed intelligent automation throughout your systems',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: BarChart3,
      title: 'Data Intelligence',
      description: 'Unlock insights from your data with advanced analytics',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Improve speed, reliability, and scalability dramatically',
      color: 'from-green-500 to-green-600',
    },
  ];

  const faqs = [
    {
      question: 'What is AI software modernization?',
      answer:
        'AI software modernization is the process of upgrading legacy or outdated systems using AI-driven automation, modern architecture patterns, and intelligent automation to improve efficiency, scalability, and operational capability.',
    },
    {
      question: 'How long does software modernization take?',
      answer:
        'Most modernization projects take 8-16 weeks depending on complexity. We use phased rollout approaches to minimize disruption and ensure continuous operation.',
    },
    {
      question: 'What about data migration?',
      answer:
        'We handle comprehensive data migration with zero-downtime strategies, ensuring data integrity and security throughout the process.',
    },
    {
      question: 'Will my team need retraining?',
      answer:
        'Yes, we provide comprehensive training and change management support to ensure your team is fully prepared for the modernized systems.',
    },
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-15" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-200 to-transparent rounded-full blur-3xl opacity-10" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Enterprise-Grade Modernization • 50+ Successful Transformations
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              AI Software Modernization
            </motion.h1>

            <motion.p
              className="text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Transform legacy systems into intelligent, scalable platforms with AI-driven modernization. Improve efficiency, reduce costs, and enable digital transformation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.button
                onClick={openContactForm}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation →
              </motion.button>
              <motion.button
                className="px-10 py-5 border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Download Case Study
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Why Modernize Your Software?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Legacy systems limit your growth. Modern, AI-enabled platforms unlock new possibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-200 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-800 font-semibold text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Our Modernization Approach
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:border-blue-200 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Common Questions
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                className="p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-200 transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.summary className="font-bold text-slate-900 text-lg flex items-center justify-between">
                  {faq.question}
                  <ArrowRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform" />
                </motion.summary>
                <p className="text-slate-600 mt-4">{faq.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Ready to Modernize?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Join 50+ enterprises that have successfully modernized their software systems with AI-driven transformation.
            </p>
            <motion.button
              onClick={openContactForm}
              className="px-10 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all"
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Modernization Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
