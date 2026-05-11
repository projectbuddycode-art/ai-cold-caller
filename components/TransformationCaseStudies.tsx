'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users2, Zap, BarChart3, Clock } from 'lucide-react';
import { staggerContainer, itemVariants, scrollReveal } from './animations';
import { useContactForm } from '@/contexts/ContactFormContext';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    label: string;
    icon: React.ComponentType<any>;
  }[];
  testimonial?: string;
  author?: string;
  role?: string;
  gradient: string;
  borderColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'logistics',
    title: 'Global Logistics Transformation',
    industry: 'Logistics & Supply Chain',
    challenge: 'Manual order processing, siloed systems, and lack of real-time visibility caused 3-day order-to-delivery delays and $2M annual operational waste.',
    solution: 'Implemented AI workflow automation to orchestrate 15+ integrated systems, providing real-time visibility and autonomous decision-making across the supply chain.',
    results: [
      {
        metric: '72%',
        value: '72',
        label: 'Faster Order Processing',
        icon: Clock,
      },
      {
        metric: '89%',
        value: '89',
        label: 'Manual Work Eliminated',
        icon: Zap,
      },
      {
        metric: '$8.2M',
        value: '$8.2',
        label: 'Annual Savings',
        icon: TrendingUp,
      },
      {
        metric: '99.7%',
        value: '99.7',
        label: 'Order Accuracy',
        icon: BarChart3,
      },
    ],
    testimonial: 'Project Buddy transformed our operations. We went from 3-day delivery to same-day processing. The ROI was immediate.',
    author: 'Sarah Chen',
    role: 'VP Operations',
    gradient: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-300',
  },
  {
    id: 'recruitment',
    title: 'Enterprise Recruitment Intelligence',
    industry: 'Human Resources & Recruitment',
    challenge: 'Manual candidate screening, inconsistent hiring decisions, and fragmented hiring workflow resulted in 60-day time-to-hire and high turnover.',
    solution: 'Deployed AI-powered candidate intelligence system with automated screening, intelligent matching, and streamlined hiring workflows.',
    results: [
      {
        metric: '65%',
        value: '65',
        label: 'Faster Hiring',
        icon: Clock,
      },
      {
        metric: '85%',
        value: '85',
        label: 'Manual Screening Automated',
        icon: Zap,
      },
      {
        metric: '42%',
        value: '42',
        label: 'Better Retention',
        icon: Users2,
      },
      {
        metric: '3x',
        value: '3',
        label: 'More Candidates Screened',
        icon: BarChart3,
      },
    ],
    testimonial: 'The AI recruitment system is a game-changer. Our hiring team now focuses on culture fit instead of administrative work.',
    author: 'Michael Rodriguez',
    role: 'Head of Talent',
    gradient: 'from-emerald-600 to-teal-500',
    borderColor: 'border-emerald-300',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Operations Intelligence',
    industry: 'Healthcare Administration',
    challenge: 'Paper-based processes, manual billing, and lack of patient data integration led to 40% billing errors and poor patient experience.',
    solution: 'Implemented comprehensive operational intelligence with automated billing, unified patient records, and predictive analytics.',
    results: [
      {
        metric: '94%',
        value: '94',
        label: 'Billing Error Reduction',
        icon: Zap,
      },
      {
        metric: '$15.8M',
        value: '$15.8',
        label: 'Revenue Recovery',
        icon: TrendingUp,
      },
      {
        metric: '78%',
        value: '78',
        label: 'Process Automation',
        icon: BarChart3,
      },
      {
        metric: '4.8★',
        value: '4.8',
        label: 'Patient Satisfaction',
        icon: Users2,
      },
    ],
    testimonial: 'This transformation improved our financial health and patient care simultaneously. Outstanding execution.',
    author: 'Dr. Patricia Lee',
    role: 'Chief Operations Officer',
    gradient: 'from-red-600 to-rose-500',
    borderColor: 'border-red-300',
  },
];

interface MetricCounterProps {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  gradient: string;
  isVisible: boolean;
}

function MetricCounter({ value, label, icon: Icon, gradient, isVisible }: MetricCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    const numericValue = parseInt(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericValue)) return;

    let current = 0;
    const increment = Math.max(numericValue / 50, 1);
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const displayValue = value.includes('%') 
    ? `${count}%`
    : value.includes('$')
    ? `$${(count / 1).toFixed(1)}M`
    : value.includes('★')
    ? `${(count / 10).toFixed(1)}★`
    : value.includes('x')
    ? `${(count / 10).toFixed(1)}x`
    : count.toString();

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} mb-3`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {displayValue}
      </div>
      <p className="text-gray-600 text-sm font-medium mt-2">{label}</p>
    </motion.div>
  );
}

function CaseStudyCard({ caseStudy, index }: { caseStudy: CaseStudy; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);
  const [metricsVisible, setMetricsVisible] = useState(index === 0);
  const { openContactForm } = useContactForm();

  return (
    <motion.div
      className="mb-8"
      variants={itemVariants}
      custom={index}
    >
      <motion.button
        onClick={() => {
          setIsExpanded(!isExpanded);
          setTimeout(() => setMetricsVisible(!isExpanded), 100);
        }}
        className="w-full text-left"
      >
        <div className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isExpanded ? 'bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200' : 'bg-white border border-gray-200 hover:border-gray-300'}`}>
          {/* Animated top border */}
          <motion.div
            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${caseStudy.gradient}`}
            animate={{ scaleX: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Card header */}
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <motion.div
                  className="inline-block mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r ${caseStudy.gradient} text-white`}>
                    {caseStudy.industry}
                  </span>
                </motion.div>
                <h3 className={`text-2xl md:text-3xl font-bold text-gray-900 transition-colors duration-300 ${isExpanded ? 'text-transparent bg-gradient-to-r ' + caseStudy.gradient + ' bg-clip-text' : ''}`}>
                  {caseStudy.title}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${caseStudy.gradient} flex items-center justify-center`}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
            </div>

            {/* Challenge section - visible when expanded */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mb-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3">The Challenge</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">{caseStudy.challenge}</p>

                    <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3">Our Solution</h4>
                    <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Metrics section - visible when expanded */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="px-6 md:px-8 pb-8 border-t border-gray-200"
              >
                <h4 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-6">Business Results</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {caseStudy.results.map((result, idx) => (
                    <MetricCounter
                      key={idx}
                      value={result.value}
                      label={result.label}
                      icon={result.icon}
                      gradient={caseStudy.gradient}
                      isVisible={metricsVisible}
                    />
                  ))}
                </div>

                {/* Testimonial */}
                {caseStudy.testimonial && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className={`mt-8 p-6 rounded-xl bg-gradient-to-br ${caseStudy.gradient} bg-opacity-5 border border-gray-200`}
                  >
                    <p className="text-gray-700 italic mb-4">"{caseStudy.testimonial}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{caseStudy.author}</p>
                      <p className="text-gray-600 text-sm">{caseStudy.role}</p>
                    </div>
                  </motion.div>
                )}

                {/* CTA Button */}
                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    openContactForm();
                  }}
                  className={`mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${caseStudy.gradient} hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Similar Transformation
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>
    </motion.div>
  );
}

export default function TransformationCaseStudies() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Enterprise Transformations
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Real Transformations, Real Results
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            See how we've transformed operations across industries
          </motion.p>
        </motion.div>

        {/* Case studies */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {caseStudies.map((caseStudy, idx) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={idx} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to start your transformation?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300">
              Schedule Transformation Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
