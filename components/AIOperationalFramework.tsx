'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Brain, 
  GitBranch, 
  Zap, 
  TrendingUp, 
  Gauge,
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';

interface FrameworkStep {
  number: string;
  icon: any;
  title: string;
  description: string;
  details: string[];
  color: string;
}

export default function AIOperationalFramework() {
  const frameworkSteps: FrameworkStep[] = [
    {
      number: '01',
      icon: BarChart3,
      title: 'Operational Audit',
      description: 'Deep analysis of current processes, systems, and inefficiencies',
      details: [
        'Process mapping & analysis',
        'System integration assessment',
        'Pain point identification',
        'Opportunity quantification',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      icon: Brain,
      title: 'Intelligence Analysis',
      description: 'Identify data patterns and automation opportunities',
      details: [
        'Data source mapping',
        'Pattern recognition',
        'Bottleneck analysis',
        'ROI projection',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      number: '03',
      icon: GitBranch,
      title: 'Workflow Mapping',
      description: 'Document and optimize business processes',
      details: [
        'End-to-end workflow design',
        'Decision tree modeling',
        'Integration architecture',
        'Performance metrics definition',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '04',
      icon: Zap,
      title: 'AI Opportunity Mapping',
      description: 'Identify where AI can deliver maximum impact',
      details: [
        'AI implementation roadmap',
        'Model selection & design',
        'Training data strategy',
        'Performance benchmarks',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      number: '05',
      icon: TrendingUp,
      title: 'Modernization Implementation',
      description: 'Build and deploy intelligent systems',
      details: [
        'System architecture setup',
        'AI model development',
        'Integration & testing',
        'Phased deployment',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      number: '06',
      icon: Gauge,
      title: 'Optimization & Automation',
      description: 'Fine-tune systems and automate workflows',
      details: [
        'Performance tuning',
        'Workflow automation setup',
        'Error handling & edge cases',
        'Continuous improvement cycles',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      number: '07',
      icon: CheckCircle2,
      title: 'Reporting Intelligence',
      description: 'Deploy operational dashboards and insights',
      details: [
        'Real-time dashboards',
        'Automated reporting',
        'Alert systems',
        'Predictive insights',
      ],
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <motion.section
      className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            The AI Operational Intelligence Framework
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Our proven 7-step methodology to transform your business operations with AI-driven systems and intelligent automation
          </p>
        </motion.div>

        {/* Framework Steps - Vertical Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-500 transform -translate-x-1/2" />

          <motion.div
            className="space-y-12 md:space-y-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {frameworkSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Content - Left or Right */}
                  <motion.div
                    className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <motion.div
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
                      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(255,255,255,0.1)' }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center flex-shrink-0`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8" />
                        </motion.div>
                        <div>
                          <div className={`text-4xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                            {step.number}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-slate-300 mb-4">{step.description}</p>

                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center gap-2 text-slate-300 text-sm"
                            whileHover={{ x: 4 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>

                  {/* Center Dot */}
                  <motion.div
                    className="hidden lg:flex justify-center items-center relative z-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} shadow-lg`} />
                    <div className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${step.color} opacity-20 animate-pulse`} />
                  </motion.div>

                  {/* Arrow Connector - Desktop */}
                  <motion.div
                    className={`hidden lg:flex justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    {index < frameworkSteps.length - 1 && (
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4"
                      >
                        <ArrowRight className="w-6 h-6 text-slate-400 transform rotate-90" />
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-slate-300 mb-8 text-lg">
            This proven framework has been successfully implemented across 50+ enterprises
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
