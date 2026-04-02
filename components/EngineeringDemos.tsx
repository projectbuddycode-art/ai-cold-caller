'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';
import {
  BarChart3,
  MessageSquare,
  Zap,
  FileText,
  ShoppingCart,
  Users,
} from 'lucide-react';

export default function EngineeringDemos() {
  const projects = [
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      problem: 'Real-time data visualization for tracking ML model performance',
      solution:
        'Built a custom dashboard with real-time WebSocket updates, complex data filtering, and predictive analytics.',
      tech: ['Next.js', 'WebSocket', 'PostgreSQL', 'D3.js'],
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Agent',
      problem: 'Customer support was costing $50K+ per month',
      solution:
        'Deployed an LLM-powered chat system that handles 80% of queries autonomously.',
      tech: ['OpenAI API', 'Node.js', 'Vector DB', 'Redis'],
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      problem: 'Manual data entry was killing team productivity',
      solution:
        'Created an intelligent workflow engine that automates manual processes',
      tech: ['Python', 'FastAPI', 'Celery', 'MongoDB'],
    },
    {
      icon: FileText,
      title: 'Document Processing AI',
      problem: 'Processing 1000s of PDFs weekly took days',
      solution:
        'AI system that extracts, classifies, and indexes documents in minutes',
      tech: ['Claude API', 'PyPDF2', 'Elasticsearch', 'AWS S3'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platform',
      problem: 'Startup needed a scalable marketplace MVP in 8 weeks',
      solution:
        'Full-stack platform with payment processing, inventory, and AI recommendations.',
      tech: ['Next.js', 'Stripe', 'Supabase', 'React Query'],
    },
    {
      icon: Users,
      title: 'Collaboration Tool',
      problem: 'Teams needed real-time collaboration on projects',
      solution:
        'Built a production ready collaboration platform with live updates and conflicts resolution.',
      tech: ['Next.js', 'WebRTC', 'Firebase', 'TailwindCSS'],
    },
  ];

  return (
    <motion.section
      className="py-20 md:py-32 bg-brand-light border-t border-brand-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-sm font-semibold text-primary-600 mb-4 uppercase tracking-wide">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Engineering Excellence
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real projects. Real impact. Real results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                className="group relative bg-brand-bg border border-brand-border rounded-xl p-6 md:p-8 overflow-hidden hover:shadow-soft-lg transition-all duration-300"
                variants={fadeInUp}
                custom={idx}
                whileHover={{ y: -4 }}
              >
                {/* Gradient Background */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-100 to-transparent rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />

                {/* Icon */}
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3">
                  {project.title}
                </h3>

                {/* Problem */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wide">
                    Problem
                  </p>
                  <p className="text-sm text-neutral-600">{project.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-neutral-500 mb-1 uppercase tracking-wide">
                    Solution
                  </p>
                  <p className="text-sm text-neutral-600">{project.solution}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
