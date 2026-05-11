'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Clock, CheckCircle2, Zap } from 'lucide-react';

interface MetricCard {
  icon: any;
  label: string;
  value: string | number;
  suffix?: string;
  description: string;
  color: string;
  bgGradient: string;
}

export default function AITransformationMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const increment = Math.ceil(target / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);

      return () => clearInterval(timer);
    }, [isVisible]);

    return (
      <>
        {count}
        {suffix}
      </>
    );
  };

  const metrics: MetricCard[] = [
    {
      icon: TrendingUp,
      label: 'Reduced Manual Work',
      value: <Counter target={60} suffix="%" />,
      description: 'Average reduction in repetitive manual tasks through AI automation',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100/30',
    },
    {
      icon: Clock,
      label: 'Process Acceleration',
      value: <Counter target={3} suffix="x" />,
      description: 'Faster workflow execution with intelligent automation',
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100/30',
    },
    {
      icon: CheckCircle2,
      label: 'Error Reduction',
      value: <Counter target={85} suffix="%" />,
      description: 'Decrease in operational errors through AI-driven systems',
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100/30',
    },
    {
      icon: Zap,
      label: 'Cost Savings',
      value: <Counter target={40} suffix="%" />,
      description: 'Average operational cost reduction within first year',
      color: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100/30',
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-100 to-transparent rounded-full blur-3xl opacity-10" />
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
            Transformation Metrics
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from AI-driven operational modernization across our enterprise clients
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                className={`relative group bg-gradient-to-br ${metric.bgGradient} border border-slate-200 rounded-2xl p-8 overflow-hidden hover:border-blue-200 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} text-white flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>

                {/* Metric Value */}
                <motion.div
                  className={`text-5xl font-black bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2 leading-tight`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                >
                  {metric.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-slate-900 font-bold text-lg mb-3">{metric.label}</h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">{metric.description}</p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-14 p-8 md:p-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-2xl border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-slate-800 font-semibold text-lg">
            These metrics represent average results across our portfolio of 50+ enterprise transformations. Your results will vary based on industry, process complexity, and implementation scope.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
