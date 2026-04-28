'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Products Built', value: 50, prefix: '', suffix: '+' },
  { label: 'Client Retention', value: 100, prefix: '', suffix: '%' },
  { label: 'MVP Delivery (Weeks)', value: 8, prefix: '6-', suffix: '' },
  { label: 'Enterprise Pedigree', value: 15, prefix: '15+', suffix: ' Years' },
];

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <motion.div
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-gray-900">
        {prefix}{count}{suffix}
      </div>
    </motion.div>
  );
}

export default function TrustStrip() {
  return (
    <motion.section
      className="py-8 md:py-12 bg-gray-50 border-y border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted By Founders & Agencies
          </motion.p>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proven Track Record of Execution
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              variants={{
                  hidden: { opacity: 0, y: 20 }, // Consistent animation
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-xs md:text-sm text-gray-600 mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Line */}
        <motion.p
          className="text-center mt-12 text-sm text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Built by the same engineers who shipped systems at JP Morgan and Cisco.
          Now helping startups move at founder speed.
        </motion.p>
      </div>
    </motion.section>
  );
}
