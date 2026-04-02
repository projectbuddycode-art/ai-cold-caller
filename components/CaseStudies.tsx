'use client';

import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { containerVariants, itemVariants } from './animations';
import { useContactForm } from '@/contexts/ContactFormContext';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
    unit: string;
  }>;
  technologies: string[];
  gradient: string;
  icon: React.ElementType;
  bgColor: string;
  accentColor: string;
}

export default function CaseStudies() {
  const { openContactForm } = useContactForm();
  const caseStudies: CaseStudy[] = [
    {
      id: 'proptech',
      title: 'PropTech Startup',
      category: 'AI-Powered Lead Generation',
      problem:
        'Manual lead qualification was consuming 40+ hours/week. Sales team spending time on low-quality leads instead of closing deals.',
      solution:
        'Built AI qualification system that automatically scores leads, routes them to appropriate reps, and sends pre-qualified follow-ups. Integrated with CRM for seamless handoff.',
      results: [
        { metric: 'Lead Quality', value: '65', unit: '% improvement' },
        { metric: 'Time Saved', value: '40+', unit: 'hours/week' },
        { metric: 'Sales Velocity', value: '3x', unit: 'faster' },
        { metric: 'Cost Per Lead', value: '70', unit: '% reduction' },
      ],
      technologies: ['Next.js', 'OpenAI API', 'Zapier', 'Salesforce'],
      gradient: 'from-blue-600 to-cyan-500',
      icon: TrendingUp,
      bgColor: 'from-blue-50 to-cyan-50',
      accentColor: 'text-blue-600',
    },
    {
      id: 'saas-platform',
      title: 'B2B SaaS Platform',
      category: 'Full-Stack MVP Development',
      problem:
        'Founder had product vision but no technical team. Needed production-ready platform in 6 weeks to hit fundraising deadline.',
      solution:
        'Built complete full-stack SaaS platform with auth, subscription billing, analytics dashboard, and API integrations. Fully scalable architecture ready for growth.',
      results: [
        { metric: 'Time to Market', value: '6', unit: 'weeks' },
        { metric: 'Active Users', value: '500+', unit: 'within 3 months' },
        { metric: 'Funding Raised', value: '$1.2M', unit: 'Series A' },
        { metric: 'Uptime', value: '99.9', unit: '%' },
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      gradient: 'from-purple-600 to-pink-500',
      icon: Sparkles,
      bgColor: 'from-purple-50 to-pink-50',
      accentColor: 'text-purple-600',
    },
    {
      id: 'enterprise-automation',
      title: 'Enterprise Operations',
      category: 'Process Automation & AI',
      problem:
        'Manual data entry and workflows were causing delays. Team spending days on repetitive tasks that were error-prone.',
      solution:
        'Implemented intelligent automation workflows combining RPA and AI. Automated invoice processing, report generation, and decision triggers.',
      results: [
        { metric: 'Errors Reduced', value: '95', unit: '%' },
        { metric: 'Processing Time', value: '100x', unit: 'faster' },
        { metric: 'Cost Savings', value: '$500K', unit: 'annually' },
        { metric: 'Team Capacity', value: '+30%', unit: 'for high-value work' },
      ],
      technologies: ['Python', 'UiPath', 'GPT-4', 'Tableau', 'Azure'],
      gradient: 'from-emerald-600 to-teal-500',
      icon: TrendingUp,
      bgColor: 'from-emerald-50 to-teal-50',
      accentColor: 'text-emerald-600',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="case-studies">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200 via-transparent to-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-indigo-200 via-transparent to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-18"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Our Work
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Success Stories
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            See how we've helped startups and enterprises scale with AI & engineering solutions
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="group relative"
              variants={itemVariants}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${study.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />

              {/* Card */}
              <motion.div
                className={`relative h-full rounded-2xl border border-slate-200 bg-gradient-to-br ${study.bgColor} p-8 shadow-soft-lg group-hover:shadow-soft-xl transition-all`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center mb-6 shadow-md`}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <study.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Title & Category */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {study.title}
                </h3>
                <p className={`text-sm font-semibold ${study.accentColor} mb-4`}>
                  {study.category}
                </p>

                {/* Problem */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    Challenge
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Results Preview */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  {study.results.slice(0, 2).map((result, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/80"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className={`text-lg font-bold ${study.accentColor}`}>
                        {result.value}
                        <span className="text-xs ml-1">{result.unit}</span>
                      </p>
                      <p className="text-xs text-slate-600">{result.metric}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {study.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-white/70 text-slate-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <motion.button
                  onClick={openContactForm}
                  className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 font-semibold text-white bg-gradient-to-r ${study.gradient} hover:shadow-lg transition-all`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Ready to build something amazing together?
          </p>
          <motion.button
            onClick={openContactForm}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Strategy Call
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
