'use client';

import { motion } from 'framer-motion';

export default function CaseResults() {
  const cases = [
    {
      industry: 'FINANCIAL SERVICES',
      result: '70% Faster Processing',
      description: 'AI-powered document processing and workflow automation reduced manual document handling time by 70%, improving client onboarding speed.',
      credit: '— Operations Director, Financial Institution',
    },
    {
      industry: 'ENTERPRISE LOGISTICS',
      result: '3x Operational Visibility',
      description: 'Real-time operational intelligence dashboard provides complete visibility into operations. Decision-making time reduced by 60%.',
      credit: '— VP Operations, Logistics Company',
    },
    {
      industry: 'MANUFACTURING',
      result: '45% Cost Reduction',
      description: 'Workflow modernization and process automation eliminated redundant systems. Saved $2M annually in operational costs.',
      credit: '— Plant Manager, Manufacturing Facility',
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-900 mb-12"
        >
          Real Operational Improvements from Real Enterprises
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all"
            >
              <p className="text-sm text-blue-600 font-bold mb-3">{caseItem.industry}</p>
              <p className="text-3xl font-black text-slate-900 mb-2">{caseItem.result}</p>
              <p className="text-slate-600 mb-4">{caseItem.description}</p>
              <p className="text-sm text-slate-500">{caseItem.credit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
