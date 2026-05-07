'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Sparkles, Rocket, DollarSign, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Enterprise Operations Experts',
      description: 'Built by engineers from JP Morgan and Cisco. We understand enterprise complexity, security, and scale. Your operations are in expert hands.',
    },
    {
      icon: Zap,
      title: 'Proven Modernization Framework',
      description: 'Our operational intelligence framework has been deployed across 50+ enterprises. We know how to modernize systems at scale without disruption.',
    },
    {
      icon: Sparkles,
      title: 'AI-First Operational Design',
      description: 'Every system we build is designed for AI integration from day one. Automation and intelligence are built in, not bolted on.',
    },
    {
      icon: Rocket,
      title: 'Enterprise-Grade Infrastructure',
      description: 'Not MVP-quality. Your systems launch with proper security, compliance, scalability, and monitoring from day one.',
    },
    {
      icon: DollarSign,
      title: 'Clear ROI & Transparent Pricing',
      description: 'You know exactly what you\'re investing. Clear scope, fixed pricing, and measurable operational improvements built into every engagement.',
    },
    {
      icon: Headphones,
      title: 'Long-Term Operational Partner',
      description: 'We don\'t disappear after launch. Continuous optimization, support, and adaptation as your operations evolve.',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Enterprises Choose Project Buddy
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            We\'re the operational intelligence partner for enterprises serious about modernization and efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
