'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from './animations';
import { Zap, Cpu, Phone, Smartphone, LayoutDashboard, Workflow, BookOpen, Users } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      icon: Zap,
      title: 'AI Automation Systems',
      description: 'Intelligent workflows that capture leads, qualify prospects, and automate repetitive tasks. Scale without scaling your team.',
      color: 'from-blue-500 to-blue-600',
      lightColor: 'from-blue-50 to-blue-100',
      link: '/ai-lead-generation-system',
    },
    {
      icon: Cpu,
      title: 'Custom SaaS Development',
      description: 'End-to-end SaaS platforms built for scale. From MVP to enterprise, we handle architecture, infrastructure, and everything in between.',
      color: 'from-indigo-500 to-indigo-600',
      lightColor: 'from-indigo-50 to-indigo-100',
      link: '/custom-saas-development-india',
    },
    {
      icon: Workflow,
      title: 'AI Automation Systems',
      description: 'Streamline operations, reduce manual effort, and boost efficiency with intelligent automation across your business processes.',
      color: 'from-green-500 to-green-600',
      lightColor: 'from-green-50 to-green-100',
      link: '/crm-automation-system', // Or a more general AI automation page
    },
    {
      icon: Smartphone,
      title: 'Mobile & Web Applications',
      description: 'Deliver intuitive and high-performance mobile and web applications tailored to your business needs and user experience.',
      color: 'from-red-500 to-red-600',
      lightColor: 'from-red-50 to-red-100',
      link: '/custom-saas-development-india', // Can link to a general development page
    },
  ];

  const industries = [
    {
      icon: LayoutDashboard,
      title: 'Real Estate',
      description: 'Automate lead capture, property management, and client communication for real estate businesses.',
      color: 'from-yellow-500 to-yellow-600',
      lightColor: 'from-yellow-50 to-yellow-100',
    },
    {
      icon: Phone,
      title: 'Service Businesses',
      description: 'Enhance customer service, appointment booking, and operational efficiency for various service industries.',
      color: 'from-teal-500 to-teal-600',
      lightColor: 'from-teal-50 to-teal-100',
    },
    {
      icon: BookOpen, // Assuming BookOpen is imported from lucide-react
      title: 'Education (Schools)',
      description: 'Implement AI-powered systems for student management, performance analysis, and administrative tasks in educational institutions.',
      color: 'from-cyan-500 to-cyan-600',
      lightColor: 'from-cyan-50 to-cyan-100',
    },
    {
      icon: Users, // Assuming Users is imported from lucide-react
      title: 'Agencies',
      description: 'Streamline client acquisition, project management, and reporting for marketing and creative agencies.',
      color: 'from-pink-500 to-pink-600',
      lightColor: 'from-pink-50 to-pink-100',
    },
  ];


  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Project Buddy is a software development company specializing in:</p>
          <ul className="text-lg text-slate-600 max-w-2xl mx-auto list-disc list-inside text-left mt-4">
            <li>SaaS product development</li>
            <li>AI automation systems</li>
            <li>Custom business software</li>
            <li>Mobile & web applications</li>
          </ul>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
            Three core capabilities that power your business growth
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className="group relative"
                variants={itemVariants}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />

                {/* Card */}
                <motion.div
                  className={`relative bg-white rounded-2xl p-8 border border-slate-200 h-full shadow-soft-lg hover:shadow-soft-xl transition-all`}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {/* Icon */}
<div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                     <Icon className={`w-7 h-7 text-transparent bg-gradient-to-br ${service.color} bg-clip-text`} />
                   </div>

                   {/* Content */}
                   <h3 className="text-2xl font-bold text-slate-900 mb-3">
                     {service.title}
                   </h3>
                   <p className="text-slate-600 leading-relaxed mb-6">
                     {service.description}
                   </p>

                   {/* Arrow Badge */}
                   <motion.div
                     className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                     whileHover={{ x: 4 }} // Consistent transition for hover
                   >
                     <a href={service.link} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                       Learn more <span>→</span>
                     </a>
                   </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
