'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  fadeInUp,
  staggerContainer,
  itemVariants,
} from './animations';
import {
  Brain,
  Code2,
  Zap,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
  icon: any;
}

interface Service {
  id: string;
  icon: any;
  title: string;
  subtitle: string;
  problem: string;
  benefit: string;
  metric: string;
  metricLabel: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  details: ServiceDetail[];
}

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(
    'automation'
  );

  const services: Service[] = [
    {
      id: 'automation',
      icon: Brain,
      title: 'AI Automation Systems',
      subtitle: 'Intelligent Workflows That Replace Manual Work',
      problem:
        'Your team is spending hours on work a system could do in seconds',
      benefit:
        'Save 20+ hours/week with AI-powered workflows that run 24/7 without error',
      metric: 'Save 20+ hours/week',
      metricLabel: 'Avg. time savings',
      color: 'from-blue-600 to-blue-400',
      bgGradient: 'from-blue-50 to-blue-100/30',
      borderColor: 'border-blue-200',
      details: [
        {
          title: 'Lead Qualification Automation',
          description: 'AI scores and routes leads automatically',
          icon: Lightbulb,
        },
        {
          title: 'CRM & Workflow Automation',
          description: 'End-to-end pipeline management without manual input',
          icon: TrendingUp,
        },
        {
          title: 'AI-Powered Sales Agents',
          description: 'Autonomous agents that handle outreach and follow-up',
          icon: Brain,
        },
        {
          title: 'Internal Process Automation',
          description: 'Eliminate repetitive team tasks with intelligent triggers',
          icon: CheckCircle,
        },
      ],
    },
    {
      id: 'saas',
      icon: Code2,
      title: 'SaaS & MVP Engineering',
      subtitle: 'Full-Stack Platforms Built for Scale',
      problem:
        'You have a product vision but no senior engineering team to execute it',
      benefit:
        'Production-ready SaaS MVP in 6-8 weeks, architected to scale from day one',
      metric: '6-8 weeks',
      metricLabel: 'Avg. time to market',
      color: 'from-orange-600 to-orange-400',
      bgGradient: 'from-orange-50 to-orange-100/30',
      borderColor: 'border-orange-200',
      details: [
        {
          title: 'Full-Stack Web Applications',
          description:
            'React, Node.js, scalable architecture from day one',
          icon: Code2,
        },
        {
          title: 'Backend Architecture',
          description: 'APIs, databases, auth systems, payment processing',
          icon: TrendingUp,
        },
        {
          title: 'API Development',
          description:
            'RESTful APIs and third-party integrations',
          icon: Brain,
        },
        {
          title: 'Scalable Cloud Infrastructure',
          description:
            'Deploy on AWS, GCP, or Vercel with CI/CD pipelines',
          icon: CheckCircle,
        },
      ],
    },
    {
      id: 'integration',
      icon: Zap,
      title: 'AI Integration & Enhancement',
      subtitle: 'Add AI to Your Existing Product or Business',
      problem:
        'Your product or operations lack the intelligence competitors are already leveraging',
      benefit:
        'AI-powered features that increase product value and automate decision-making',
      metric: '300%',
      metricLabel: 'Avg. ROI increase',
      color: 'from-green-600 to-green-400',
      bgGradient: 'from-green-50 to-green-100/30',
      borderColor: 'border-green-200',
      details: [
        {
          title: 'AI Feature Integration',
          description: 'Add LLM-powered features to any product',
          icon: Lightbulb,
        },
        {
          title: 'GPT-Powered Tools',
          description: 'Custom AI assistants and chatbots for your use case',
          icon: Brain,
        },
        {
          title: 'Intelligent Data Systems',
          description:
            'AI analytics and predictive dashboards',
          icon: TrendingUp,
        },
        {
          title: 'Operations Automation',
          description:
            'Internal AI workflows for teams',
          icon: CheckCircle,
        },
      ],
    },
  ];

  return (
    <motion.section
      className="relative py-20 md:py-32 overflow-hidden"
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-18"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Three Core Service Areas
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-neutral-900">Focused on </span>
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
              Revenue Impact
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We don&apos;t do everything. We do three things exceptionally well.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <motion.button
                key={service.id}
                onClick={() =>
                  setExpandedService(
                    isExpanded ? null : service.id
                  )
                }
                className={`relative group text-left rounded-2xl p-8 border-2 transition-all duration-300 ${
                  isExpanded
                    ? `${service.borderColor} bg-gradient-to-br ${service.bgGradient} shadow-lg`
                    : 'border-neutral-200 hover:border-neutral-300 bg-white hover:shadow-lg'
                }`}
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-all bg-gradient-to-br ${service.color}`}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Title and subtitle */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-semibold text-primary-600 mb-4">
                  {service.subtitle}
                </p>

                {/* Problem */}
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  <span className="font-semibold">Problem: </span>
                  {service.problem}
                </p>

                {/* Benefit */}
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  <span className="font-semibold">Solution: </span>
                  {service.benefit}
                </p>

                {/* Metric */}
                <div className="pt-6 border-t border-neutral-200">
                  <motion.p
                    className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1`}
                  >
                    {service.metric}
                  </motion.p>
                  <p className="text-xs text-neutral-600">
                    {service.metricLabel}
                  </p>
                </div>

                {/* Expand indicator */}
                <motion.div
                  className="absolute top-6 right-6"
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Expanded Service Details */}
        <AnimatePresence mode="wait">
          {expandedService && (
            <motion.div
              className={`rounded-2xl border-2 p-8 md:p-12 bg-gradient-to-br ${
                services.find((s) => s.id === expandedService)?.bgGradient
              } ${services.find((s) => s.id === expandedService)?.borderColor}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Find current service */}
              {services.map((service) =>
                service.id === expandedService ? (
                  <motion.div key={service.id}>
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <motion.h3
                          className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {service.title}
                        </motion.h3>
                        <motion.p
                          className="text-primary-600 font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {service.subtitle}
                        </motion.p>
                      </div>
                      <motion.button
                        onClick={() => setExpandedService(null)}
                        className="text-neutral-400 hover:text-neutral-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        ✕
                      </motion.button>
                    </div>

                    {/* Service details grid */}
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      {service.details.map((detail, idx) => {
                        const DetailIcon = detail.icon;
                        return (
                          <motion.div
                            key={idx}
                            className="flex gap-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/80 hover:bg-white/80 transition-colors"
                            variants={itemVariants}
                            whileHover={{ x: 4 }}
                          >
                            <motion.div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${service.color} shadow-sm`}
                              whileHover={{ scale: 1.1 }}
                            >
                              <DetailIcon className="w-5 h-5 text-white" />
                            </motion.div>
                            <div>
                              <h4 className="font-semibold text-neutral-900 mb-1">
                                {detail.title}
                              </h4>
                              <p className="text-sm text-neutral-600">
                                {detail.description}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      className={`mt-8 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${service.color} hover:shadow-lg transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Book Strategy Call
                    </motion.button>
                  </motion.div>
                ) : null
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
