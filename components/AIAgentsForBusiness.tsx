'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Calendar, HelpCircle, BarChart3 } from 'lucide-react';

export default function AIAgentsForBusiness() {
  const aiCapabilities = [
    { icon: Phone, text: 'Qualify leads via phone with human-like conversation' },
    { icon: Mail, text: 'Send personalized emails that convert, with AI copywriting' },
    { icon: MessageSquare, text: 'Handle WhatsApp/SMS outreach at scale' },
    { icon: Calendar, text: 'Schedule meetings and send reminders automatically' },
    { icon: HelpCircle, text: 'Answer FAQs and handle customer support' },
    { icon: BarChart3, text: 'Track analytics and provide actionable insights' },
  ];

  const useCases = [
    { industry: 'SaaS Companies', result: 'AI support agents reduce support costs by 60%' },
    { industry: 'Agencies', result: 'Automated client onboarding and follow-ups' },
    { industry: 'Startups', result: 'Lead gen on a shoestring budget—zero salespeople needed initially' },
    { industry: 'E-Commerce', result: 'AI chatbots handling 80% of customer inquiries' },
    { industry: 'Real Estate', result: '24/7 property inquiry responses and scheduling' },
    { industry: 'B2B Services', result: 'Automated proposal generation and contract signing' },
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
          AI Agents & Intelligent Automation for Business
        </motion.h2>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-12 text-white mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Your Business Never Sleeps</h3>
          <p className="text-lg mb-6">
            Our AI agents handle customer interactions, lead qualification, scheduling, and support—24/7, in multiple languages, with zero fatigue or human error.
          </p>
          <p className="text-lg opacity-90">
            <strong>Real result:</strong> One client reduced sales cycle from 15 days to 3 days with AI lead qualification.
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What AI Agents Do</h3>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Use Cases</h3>
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
