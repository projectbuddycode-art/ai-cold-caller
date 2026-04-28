'use client';

import { motion } from 'framer-motion';
import { Zap, Lightbulb, Rocket, TrendingUp, Shield, Users } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import Image from 'next/image';

export default function AiLeadGenerationSystem() {
  const { openContactForm } = useContactForm();

  const features = [
    {
      icon: Zap,
      title: 'Multi-Channel Lead Capture',
      description: 'Automatically collect leads from website forms, WhatsApp, email, social media, and more.',
    },
    {
      icon: Lightbulb,
      title: 'AI-Powered Lead Scoring',
      description: 'Utilize AI to score leads based on engagement, fit, and likelihood to convert.',
    },
    {
      icon: Rocket,
      title: 'Instant Notifications',
      description: 'Get real-time alerts when high-value leads engage with your business.',
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Increase conversion rates with automated follow-ups and personalized nurturing.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your lead data and customer information.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless integration with your CRM and team communication tools.',
    },
  ];

  const howItWorks = [
    {
      title: 'Lead Capture',
      description: 'Collect leads from multiple channels including website forms, WhatsApp, email, and social media.',
    },
    {
      title: 'Data Normalization',
      description: 'Standardize and clean lead data, ensuring consistency and accuracy across all sources.',
    },
    {
      title: 'AI Scoring',
      description: 'Utilize AI to score leads based on engagement, fit, and likelihood to convert.',
    },
    {
      title: 'Instant Notification',
      description: 'Get real-time alerts when high-value leads engage with your business.',
    },
    {
      title: 'Automated Follow-up',
      description: 'Increase conversion rates with automated follow-ups and personalized nurturing.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Capture & Qualify 3x More Leads with AI Systems
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Transform your lead generation with AI-powered automation that captures, qualifies, and converts leads automatically.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">
                Stop Losing Revenue to Slow Response Times
              </h2>
              <p className="text-lg text-slate-600">
                Our AI-powered system automatically captures leads from multiple channels, scores them based on their likelihood to convert, and notifies your team instantly.
              </p>
              <ul className="space-y-4 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Multi-channel lead capture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>AI-powered lead scoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Instant notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Automated follow-ups</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactForm}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
              >
                Get Your Free AI Audit
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96">
                <Image
                  src="/images/services/lead-gen.jpg"
                  alt="AI Lead Generation System"
                  fill
                  priority
                  quality={85}
                  className="object-cover rounded-2xl shadow-soft-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Real-time Analytics</h3>
                    <p className="text-blue-100">Track lead performance and conversion metrics</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to automate your lead generation and increase conversions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our proven process to capture, qualify, and convert leads automatically
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Ready to Multiply Your Lead Volume?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's build an AI-powered system that captures, qualifies, and converts leads automatically.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openContactForm}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
            >
              Book My Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}