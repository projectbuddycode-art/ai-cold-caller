'use client';

import { motion } from 'framer-motion';
import { 
  Truck, 
  Users2, 
  Stethoscope, 
  BookOpen, 
  Factory, 
  Briefcase, 
  Home,
  ArrowRight 
} from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import { staggerContainer, itemVariants } from './animations';

interface IndustrySolution {
  id: string;
  icon: any;
  industry: string;
  description: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  color: string;
  bgGradient: string;
}

export default function IndustrySolutions() {
  const { openContactForm } = useContactForm();

  const industries: IndustrySolution[] = [
    {
      id: 'logistics',
      icon: Truck,
      industry: 'Logistics & Supply Chain',
      description: 'Transform complex supply chain operations with AI visibility and automation',
      challenges: ['Route optimization delays', 'Manual inventory tracking', 'Shipment visibility gaps'],
      solutions: ['AI-powered route optimization', 'Real-time inventory systems', 'Predictive demand forecasting'],
      outcomes: ['20-30% fuel cost reduction', '40% faster delivery cycles', '95% inventory accuracy'],
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100/30',
    },
    {
      id: 'recruitment',
      icon: Users2,
      industry: 'Recruitment & HR',
      description: 'Streamline hiring with AI candidate matching and automated workflows',
      challenges: ['Manual resume screening', 'Long hiring cycles', 'Candidate communication delays'],
      solutions: ['AI resume parsing & matching', 'Automated candidate workflows', 'Intelligent scheduling'],
      outcomes: ['70% faster hiring', '40% cost reduction', 'Higher quality hires'],
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100/30',
    },
    {
      id: 'healthcare',
      icon: Stethoscope,
      industry: 'Healthcare',
      description: 'Improve patient care delivery and operational efficiency with intelligent systems',
      challenges: ['Manual patient data entry', 'Appointment no-shows', 'Billing delays'],
      solutions: ['Automated patient intake', 'Predictive no-show prevention', 'Claims automation'],
      outcomes: ['30% reduction in admin work', '25% fewer no-shows', '15% billing improvement'],
      color: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100/30',
    },
    {
      id: 'education',
      icon: BookOpen,
      industry: 'Education',
      description: 'Enhance learning outcomes with AI-driven student tracking and automation',
      challenges: ['Manual attendance tracking', 'Fragmented student data', 'Report generation delays'],
      solutions: ['AI attendance automation', 'Unified student management', 'Automated reporting'],
      outcomes: ['50% less admin time', 'Improved student outcomes', 'Real-time parent visibility'],
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100/30',
    },
    {
      id: 'manufacturing',
      icon: Factory,
      industry: 'Manufacturing',
      description: 'Optimize production with predictive maintenance and workflow automation',
      challenges: ['Unplanned downtime', 'Quality inconsistencies', 'Inventory mismanagement'],
      solutions: ['Predictive maintenance AI', 'Quality control automation', 'Smart inventory systems'],
      outcomes: ['35% uptime improvement', '45% fewer defects', '30% inventory optimization'],
      color: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100/30',
    },
    {
      id: 'b2b-services',
      icon: Briefcase,
      industry: 'B2B Services',
      description: 'Accelerate sales cycles and improve customer relationships with AI automation',
      challenges: ['Long sales cycles', 'Manual proposal generation', 'Customer data fragmentation'],
      solutions: ['AI lead scoring', 'Automated proposal generation', 'CRM modernization'],
      outcomes: ['25% faster sales cycles', '50% reduced proposal time', '3x productivity gain'],
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100/30',
    },
    {
      id: 'real-estate',
      icon: Home,
      industry: 'Real Estate',
      description: 'Streamline property management and sales with intelligent automation',
      challenges: ['Manual lead follow-up', 'Property data inconsistencies', 'Tenant management delays'],
      solutions: ['AI lead management', 'Unified property systems', 'Automated tenant workflows'],
      outcomes: ['60% faster lead conversion', '40% operational efficiency', 'Better tenant experience'],
      color: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 to-cyan-100/30',
    },
  ];

  return (
    <motion.section
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-100 to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Industry Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored AI modernization strategies for key industries
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                className={`group relative bg-gradient-to-br ${industry.bgGradient} border border-slate-200 rounded-2xl p-8 overflow-hidden hover:border-blue-200 transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} text-white flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>

                {/* Industry Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.industry}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{industry.description}</p>

                {/* Challenges */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Challenges</h4>
                  <ul className="space-y-1">
                    {industry.challenges.slice(0, 2).map((challenge, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-red-500 rounded-full" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="mb-6 pb-6 border-b border-slate-200 group-hover:border-blue-200 transition-colors">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Typical Outcomes</h4>
                  <ul className="space-y-1">
                    {industry.outcomes.slice(0, 2).map((outcome, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-green-500 rounded-full" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Arrow */}
                <motion.div
                  className="flex items-center gap-2 text-blue-600 font-semibold text-sm cursor-pointer"
                  whileHover={{ x: 4 }}
                  onClick={openContactForm}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-600 mb-6 text-lg">
            Don't see your industry? We work across all sectors with custom solutions.
          </p>
          <motion.button
            onClick={openContactForm}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Industry-Specific Proposal
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
