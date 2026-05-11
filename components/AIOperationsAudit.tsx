'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Users, TrendingUp, Download, ArrowRight } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function AIOperationsAudit() {
  const { openContactForm } = useContactForm();

  const auditSteps = [
    {
      number: 1,
      title: 'Discovery Call',
      description: 'Understand your business, current systems, and modernization goals',
      icon: Users,
      duration: '30 mins',
    },
    {
      number: 2,
      title: 'Operational Audit',
      description: 'Deep dive into processes, systems, pain points, and opportunities',
      icon: CheckCircle,
      duration: '2-3 weeks',
    },
    {
      number: 3,
      title: 'Analysis & Strategy',
      description: 'Identify automation opportunities and build implementation roadmap',
      icon: TrendingUp,
      duration: '1 week',
    },
    {
      number: 4,
      title: 'Detailed Report',
      description: 'Receive comprehensive audit report with ROI projections and action plan',
      icon: Download,
      duration: 'Delivered',
    },
  ];

  const auditIncludes = [
    'Current systems and infrastructure assessment',
    'Workflow analysis and bottleneck identification',
    'AI & automation opportunity mapping',
    'ROI and savings projections',
    'Implementation roadmap and timeline',
    'Required resources and investment estimate',
    'Risk analysis and mitigation strategies',
    'Quick wins identification',
    'Technology stack recommendations',
    'Change management and training plan',
    'Executive summary and presentation',
    'Ongoing support and optimization strategy',
  ];

  return (
    <motion.section
      className="relative py-16 md:py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              AI & Operations Audit
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Our premium operational audit service provides enterprise clients with comprehensive analysis of their current systems, workflows, and modernization opportunities.
            </p>
            <p className="text-slate-300 mb-8">
              Discover where AI-driven automation can deliver maximum ROI, eliminate operational inefficiencies, and transform your business at scale.
            </p>

            {/* Audit Process */}
            <h3 className="text-xl font-bold mb-6">The Audit Process</h3>
            <motion.div
              className="space-y-4 mb-8"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {auditSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300"
                    whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 text-white flex items-center justify-center flex-shrink-0 font-bold"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {step.number}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-300 mb-2">{step.description}</p>
                      <span className="text-xs text-slate-400 font-semibold">{step.duration}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={openContactForm}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule Audit
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Audit Details
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Audit Includes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm"
              whileHover={{ borderColor: 'rgba(255,255,255,0.3)', boxShadow: '0 20px 40px rgba(255,255,255,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-green-400" />
                Audit Includes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {auditIncludes.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Pricing Info */}
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl"
                whileHover={{ borderColor: 'rgba(96, 165, 250, 0.5)', backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
              >
                <p className="text-sm text-slate-300 mb-3">
                  <span className="font-bold text-white">Typical Investment:</span> $25K - $75K depending on complexity
                </p>
                <p className="text-xs text-slate-400">
                  Most enterprises see ROI within 3-6 months of implementation
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center p-8 md:p-12 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-white/10 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Operations?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join 50+ enterprises that have successfully modernized their operations with AI-driven systems and operational intelligence infrastructure.
          </p>
          <motion.button
            onClick={openContactForm}
            className="px-10 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 mx-auto"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your Audit Today <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
