'use client';

import { motion } from 'framer-motion';
import { Zap, Code, CheckCircle } from 'lucide-react';

export default function SaasMVPDevelopment() {
  const timeline = [
    {
      week: 'Week 1–2',
      title: 'Design & Architecture',
      description: 'Product scoping, UX design, technical architecture review',
    },
    {
      week: 'Week 3–6',
      title: 'Development',
      description: 'Backend, frontend, API, integrations, and AI features',
    },
    {
      week: 'Week 7–8',
      title: 'Testing & Launch',
      description: 'QA, security review, deployment, monitoring setup',
    },
  ];

  const buildItems = [
    {
      icon: Code,
      title: 'SaaS Platforms',
      description: 'Multi-tenant, scalable web applications with modern tech stacks.',
    },
    {
      icon: Zap,
      title: 'AI-Powered Tools',
      description: 'Products that leverage ChatGPT, Claude, and custom AI models.',
    },
    {
      icon: CheckCircle,
      title: 'Integration Platforms',
      description: 'Connect your customers\' favorite tools with seamless APIs.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            SaaS MVP Development: From Idea to Market in 8 Weeks
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Stop waiting. Launch your SaaS product faster with our proven development framework.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Build</h3>
            <div className="space-y-4">
              {buildItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our MVP Delivery Promise</h3>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className={`pb-4 ${idx !== timeline.length - 1 ? 'border-b border-slate-200' : ''}`}>
                  <p className="text-sm text-blue-600 font-bold mb-1">{item.week}: {item.title}</p>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
