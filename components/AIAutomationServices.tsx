'use client';

import { motion } from 'framer-motion';
import { Phone, Settings, Zap } from 'lucide-react';

export default function AIAutomationServices() {
  const services = [
    {
      icon: Phone,
      title: 'AI & Operations Audit',
      description: 'Deep analysis of your workflows, systems, and bottlenecks. Identify automation opportunities and AI modernization potential.',
      features: ['Workflow analysis', 'Bottleneck identification', 'AI opportunity mapping'],
    },
    {
      icon: Settings,
      title: 'Workflow Modernization',
      description: 'Streamline operations by modernizing legacy systems and replacing manual workflows with intelligent automation.',
      features: ['Process optimization', 'System integration', 'Automation deployment'],
    },
    {
      icon: Zap,
      title: 'Operational Intelligence Systems',
      description: 'Build real-time dashboards and AI-powered reporting systems that provide complete visibility into business operations.',
      features: ['Real-time monitoring', 'AI-driven insights', 'Executive dashboards'],
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
            Operational Intelligence & Modernization Services
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Transform how your business operates. From AI audits to intelligent automation, we modernize your systems and improve operational efficiency.
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
