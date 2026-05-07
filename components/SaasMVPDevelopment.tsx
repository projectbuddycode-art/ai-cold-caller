'use client';

import { motion } from 'framer-motion';
import { Zap, Code, CheckCircle } from 'lucide-react';

export default function SaasMVPDevelopment() {
  const timeline = [
    {
      week: 'Phase 1',
      title: 'Requirements & Architecture',
      description: 'Detailed assessment of your systems, architecture design, and implementation strategy',
    },
    {
      week: 'Phase 2',
      title: 'Modernization & Integration',
      description: 'Build/integrate new systems, deploy automation, and set up AI capabilities',
    },
    {
      week: 'Phase 3',
      title: 'Testing, Deployment & Training',
      description: 'QA, security validation, production deployment, and team training',
    },
  ];

  const buildItems = [
    {
      icon: Code,
      title: 'CRM & ERP Systems',
      description: 'Modern, AI-ready enterprise systems that replace legacy platforms.',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Intelligent automation that streamlines operations and reduces manual work.',
    },
    {
      icon: CheckCircle,
      title: 'Operational Intelligence',
      description: 'Real-time dashboards and AI-driven insights for better decision-making.',
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
            System Modernization & Implementation Framework
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl">
            Replace outdated systems with modern, intelligent platforms. Our phased approach ensures smooth transitions and immediate operational improvements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Build & Deploy</h3>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Modernization Delivery Framework</h3>
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
