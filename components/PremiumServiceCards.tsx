'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Zap, 
  Users2, 
  TrendingUp, 
  Lock, 
  Cpu, 
  Database,
  GitBranch,
  Shield
} from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import { staggerContainer, itemVariants } from './animations';

interface ServiceCardProps {
  icon: React.ComponentType<any>;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  metric: string;
  metricLabel: string;
  gradient: string;
  borderColor: string;
  index: number;
}

function PremiumServiceCard({
  icon: Icon,
  title,
  subtitle,
  description,
  benefits,
  metric,
  metricLabel,
  gradient,
  borderColor,
  index,
}: ServiceCardProps) {
  const { openContactForm } = useContactForm();

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      whileHover={{ y: -8 }}
      className="h-full group relative"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Glowing border effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl ${borderColor} border border-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        animate={{
          boxShadow: [
            `0 0 20px 0 ${gradient}22`,
            `0 0 40px 10px ${gradient}44`,
            `0 0 20px 0 ${gradient}22`,
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Card content */}
      <div className="relative h-full bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-xl rounded-2xl border border-white/20 p-8 flex flex-col overflow-hidden group-hover:bg-white/90 transition-colors duration-300">
        {/* Animated top border accent */}
        <motion.div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        />

        {/* Icon with animation */}
        <motion.div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} p-3 mb-6 flex items-center justify-center shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Metric badge */}
        <motion.div
          className="inline-flex items-center gap-2 mb-4 w-fit"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
        >
          <div className={`bg-gradient-to-r ${gradient} px-4 py-2 rounded-full`}>
            <span className="text-white font-bold text-sm">{metric}</span>
          </div>
          <span className="text-gray-600 text-xs font-medium">{metricLabel}</span>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-sm text-blue-600 font-semibold mb-4">{subtitle}</p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Benefits list with animation */}
        <motion.div
          className="space-y-2 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
            hidden: {},
          }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mt-0.5`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={openContactForm}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${gradient} hover:shadow-xl transition-all duration-300`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function PremiumServiceCards() {
  const services: ServiceCardProps[] = [
    {
      icon: Brain,
      title: 'AI Software Modernization',
      subtitle: 'Transform Legacy Systems',
      description: 'Replace outdated systems with AI-powered modern platforms that scale, automate, and drive intelligence throughout your operations.',
      benefits: [
        'Unified architecture replacing siloed systems',
        '300%+ productivity improvement',
        'AI-native capabilities from day one',
        'Reduced maintenance costs',
      ],
      metric: '3x',
      metricLabel: 'Efficiency',
      gradient: 'from-blue-600 to-cyan-500',
      borderColor: 'border-blue-300',
      index: 0,
    },
    {
      icon: BarChart3,
      title: 'Operational Intelligence Systems',
      subtitle: 'Real-Time Business Visibility',
      description: 'AI-powered dashboards that transform raw data into actionable intelligence, enabling faster decisions and proactive operations.',
      benefits: [
        'Real-time operational visibility',
        'Predictive analytics & alerts',
        'Automated performance optimization',
        'Data-driven decision making',
      ],
      metric: '70%',
      metricLabel: 'Faster Insights',
      gradient: 'from-emerald-600 to-teal-500',
      borderColor: 'border-emerald-300',
      index: 1,
    },
    {
      icon: Zap,
      title: 'Workflow Modernization',
      subtitle: 'Eliminate Manual Work',
      description: 'End-to-end workflow reimagining using AI to automate, orchestrate, and optimize every business process.',
      benefits: [
        'Eliminate repetitive manual tasks',
        '40-60% faster process execution',
        'Error rates reduced by 85%+',
        'Team focus on strategic work',
      ],
      metric: '60%',
      metricLabel: 'Time Saved',
      gradient: 'from-amber-600 to-orange-500',
      borderColor: 'border-amber-300',
      index: 2,
    },
    {
      icon: Users2,
      title: 'AI Workflow Automation',
      subtitle: 'Intelligent Process Execution',
      description: 'Deploy intelligent bots and automation that learn patterns, handle exceptions, and improve continuously.',
      benefits: [
        'Handles edge cases intelligently',
        'Learns and improves over time',
        'Seamless exception handling',
        '24/7 autonomous operation',
      ],
      metric: '90%',
      metricLabel: 'Automation',
      gradient: 'from-purple-600 to-pink-500',
      borderColor: 'border-purple-300',
      index: 3,
    },
    {
      icon: TrendingUp,
      title: 'Intelligent Reporting Systems',
      subtitle: 'Dynamic Operational Insights',
      description: 'AI-driven reporting that adapts to your needs, predicts trends, and surfaces critical insights automatically.',
      benefits: [
        'Automated report generation',
        'Predictive trend analysis',
        'Anomaly detection alerts',
        'Customizable dashboards',
      ],
      metric: '10x',
      metricLabel: 'Data Value',
      gradient: 'from-red-600 to-rose-500',
      borderColor: 'border-red-300',
      index: 4,
    },
    {
      icon: Database,
      title: 'CRM & ERP Modernization',
      subtitle: 'Next-Gen Business Systems',
      description: 'Upgrade your enterprise systems with cloud-native architectures that integrate, scale, and empower.',
      benefits: [
        'Cloud-native infrastructure',
        'Seamless system integration',
        'Enterprise scalability',
        'Advanced reporting & analytics',
      ],
      metric: '5x',
      metricLabel: 'Scalability',
      gradient: 'from-indigo-600 to-blue-500',
      borderColor: 'border-indigo-300',
      index: 5,
    },
    {
      icon: Cpu,
      title: 'Business Process Automation',
      subtitle: 'End-to-End Optimization',
      description: 'Comprehensive BPA solutions that orchestrate complex workflows, improve compliance, and reduce costs.',
      benefits: [
        'Complex workflow orchestration',
        'Compliance automation',
        '30-50% cost reduction',
        'Continuous process optimization',
      ],
      metric: '45%',
      metricLabel: 'Cost Down',
      gradient: 'from-green-600 to-emerald-500',
      borderColor: 'border-green-300',
      index: 6,
    },
    {
      icon: Lock,
      title: 'AI Operations Consulting',
      subtitle: 'Strategic Transformation',
      description: 'Expert consulting to align AI investments with business strategy, maximize ROI, and ensure successful implementation.',
      benefits: [
        'Operational maturity assessment',
        'AI roadmap development',
        'Implementation strategy',
        'Change management support',
      ],
      metric: '200%',
      metricLabel: 'ROI in Year 1',
      gradient: 'from-cyan-600 to-blue-500',
      borderColor: 'border-cyan-300',
      index: 7,
    },
    {
      icon: GitBranch,
      title: 'AI Assistants & AI Agents',
      subtitle: 'Intelligent Automation',
      description: 'Deploy conversational AI and autonomous agents that interact with systems, make decisions, and drive business outcomes.',
      benefits: [
        'Natural language understanding',
        'Autonomous decision making',
        '24/7 availability',
        'Continuous learning',
      ],
      metric: '80%',
      metricLabel: 'Task Handling',
      gradient: 'from-violet-600 to-purple-500',
      borderColor: 'border-violet-300',
      index: 8,
    },
    {
      icon: Shield,
      title: 'Operational Infrastructure Optimization',
      subtitle: 'Performance & Reliability',
      description: 'Optimize your technical infrastructure for intelligence, scale, security, and performance.',
      benefits: [
        'Cloud infrastructure optimization',
        'Enterprise security standards',
        '99.99% uptime SLA',
        'Disaster recovery readiness',
      ],
      metric: '99.99%',
      metricLabel: 'Uptime',
      gradient: 'from-orange-600 to-red-500',
      borderColor: 'border-orange-300',
      index: 9,
    },
  ];

  return (
    <motion.section
      className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Our Services
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Enterprise AI Transformation Services
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Comprehensive solutions to modernize operations, automate workflows, and unlock AI-driven operational intelligence
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => (
            <PremiumServiceCard key={idx} {...service} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to transform your operations with AI?
          </p>
          <motion.div
            className="inline-flex gap-4 flex-wrap justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300">
              Explore Full Services
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
