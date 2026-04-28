'use client';

import { motion } from 'framer-motion';
import { Phone, Settings, Zap } from 'lucide-react';

export default function AIAutomationServices() {
  const services = [
    {
      icon: Phone,
      title: 'AI Calling Agents',
      description: 'Autonomous AI agents that qualify leads, schedule meetings, and handle customer inquiries 24/7. Natural conversation, zero fatigue.',
      features: ['Multi-language support', 'Real-time qualification', 'CRM integration'],
    },
    {
      icon: Settings,
      title: 'CRM & Workflow Automation',
      description: 'Custom CRM systems that eliminate data silos and automate your entire sales pipeline. Built for your unique workflow.',
      features: ['Fully customized CRM', 'Workflow automation', 'Real-time analytics'],
    },
    {
      icon: Zap,
      title: 'Lead Generation Automation',
      description: 'AI systems that find, qualify, and nurture leads across email, SMS, WhatsApp, and web. Hands-free lead pipeline.',
      features: ['Multi-channel outreach', 'AI personalization', 'Conversion tracking'],
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
            AI Automation Services for Startups
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Automate critical business processes with AI. No more manual work. No more delays.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all group hover:border-blue-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-slate-600">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
