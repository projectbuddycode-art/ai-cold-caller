'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Sparkles, Rocket, DollarSign, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Engineers, Not Marketers',
      description: 'Built by engineers from JP Morgan and Cisco. We write clean code, not sales pitches. Your product is built to scale.',
    },
    {
      icon: Zap,
      title: 'Speed Matters',
      description: 'Minutes matter. 6-8 weeks from idea to live product. We have zero meetings waste. Every day counts. Async communication everywhere.',
    },
    {
      icon: Sparkles,
      title: 'AI-First Thinking',
      description: 'Every product we build incorporates intelligent automation. We don\'t tack AI on. We architect it from the ground up.',
    },
    {
      icon: Rocket,
      title: 'Production-Ready from Day One',
      description: 'Not a prototype. Not beta. Your MVP launches with proper architecture, security, and scalability baked in.',
    },
    {
      icon: DollarSign,
      title: 'Fixed Project Pricing',
      description: 'Startups hate surprises. Fixed costs. Clear scope. Built-in contingency. You know exactly what you\'re paying.',
    },
    {
      icon: Headphones,
      title: 'Post-Launch Support',
      description: 'We don\'t disappear after launch. Maintenance, scaling, feature updates. We\'re your long-term partner.',
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
            Why Startups Choose Project Buddy
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            We're not a generic agency. We're built for startup speed and startup thinking.
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
