'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { itemVariants, containerVariants } from './animations';
import { useContactForm } from '@/contexts/ContactFormContext';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        setIsVisible(true);
        hasStarted.current = true;
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startValue = 0;
    const increment = end / (duration * 60);
    let currentValue = startValue;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(currentValue));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
    </div>
  );
}

export default function BusinessImpact() {
  const { openContactForm } = useContactForm();
  const metrics = [
    {
      value: 65,
      suffix: '%',
      label: 'Lead Conversion Increase',
      description: 'Average improvement for our clients',
    },
    {
      value: 50,
      suffix: '+',
      label: 'Systems Delivered',
      description: 'Enterprise & startup projects',
    },
    {
      value: 100,
      suffix: '+',
      label: 'Hours Saved / Month',
      description: 'Per client on average',
    },
    {
      value: 6,
      suffix: '-8W',
      label: 'MVP Delivery Time',
      description: 'From concept to launch',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100 to-transparent rounded-full blur-3xl opacity-10" />
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Business Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from enterprise-grade AI & SaaS engineering
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              variants={itemVariants}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />

              {/* Card */}
              <motion.div
                className="relative bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-soft-lg hover:shadow-soft-xl transition-all"
                whileHover={{ y: -4 }}
              >
                {/* Metric Value */}
                <AnimatedCounter
                  end={metric.value}
                  suffix={metric.suffix}
                  duration={2.5}
                />

                {/* Label */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600">
                  {metric.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Ready to see similar results for your business?
          </p>
          <motion.button
            onClick={openContactForm}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Your Custom Analysis
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
