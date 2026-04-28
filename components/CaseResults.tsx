'use client';

import { motion } from 'framer-motion';

export default function CaseResults() {
  const cases = [
    {
      industry: 'FINTECH STARTUP',
      result: '3x Growth',
      description: 'AI lead qualification reduced sales cycle from 15 days to 3 days. Now closing deals 5x faster.',
      credit: '— Founder, SaaS Platform',
    },
    {
      industry: 'B2B AGENCY',
      result: '60% Cost Reduction',
      description: 'Custom CRM replaced 5 separate tools. Saved $50k/month in licensing and manual work.',
      credit: '— Operations Director, Agency',
    },
    {
      industry: 'E-COMMERCE STARTUP',
      result: '4x Leads',
      description: 'AI SMS + email campaigns generated 4x more qualified leads. Conversion rate jumped 2.8x.',
      credit: '— Marketing Manager, E-Commerce',
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
          Real Results from Real Startups
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
