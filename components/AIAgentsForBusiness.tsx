'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Calendar, HelpCircle, BarChart3 } from 'lucide-react';

export default function AIAgentsForBusiness() {
  const aiCapabilities = [
    { icon: Phone, text: 'Monitor operations and alert on critical metrics in real-time' },
    { icon: Mail, text: 'Automatically process and route operational data and documents' },
    { icon: MessageSquare, text: 'Enable natural language queries against operational systems' },
    { icon: Calendar, text: 'Schedule and coordinate complex multi-system workflows automatically' },
    { icon: HelpCircle, text: 'Provide intelligent assistance to operations and support teams' },
    { icon: BarChart3, text: 'Generate real-time insights and predictive analytics' },
  ];

  const useCases = [
    { industry: 'Financial Services', result: 'AI agents process 10,000+ transactions daily with zero manual intervention' },
    { industry: 'Enterprise Operations', result: 'Autonomous workflow agents reduce manual tasks by 50%' },
    { industry: 'Supply Chain', result: 'Real-time monitoring and optimization of logistics operations' },
    { industry: 'Manufacturing', result: 'Predictive maintenance agents prevent equipment downtime' },
    { industry: 'Customer Operations', result: 'Intelligent routing and priority management for support teams' },
    { industry: 'Business Intelligence', result: 'Automated data aggregation and executive reporting' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-900 mb-12"
        >
          AI Agents & Intelligent Automation for Enterprise Operations
        </motion.h2>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-12 text-white mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Operations That Never Sleep</h3>
          <p className="text-lg mb-6">
            Our intelligent agents autonomously manage operational workflows, monitor systems, process data, and execute business logic—24/7, without human intervention, with zero errors.
          </p>
          <p className="text-lg opacity-90">
            <strong>Real result:</strong> One enterprise reduced operational workload by 50% with autonomous workflow agents processing complex business logic automatically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* What AI Agents Do */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Intelligent Agent Capabilities</h3>
            <div className="space-y-4">
              {aiCapabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-2xl">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-slate-600">
                      <strong>{item.text.split(' ')[0]}</strong> {item.text.substring(item.text.indexOf(' ') + 1)}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-xl border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Enterprise Use Cases</h3>
            <div className="space-y-4">
              {useCases.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-slate-100 last:border-b-0">
                  <p className="font-bold text-slate-900">{item.industry}</p>
                  <p className="text-slate-600 text-sm">{item.result}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
