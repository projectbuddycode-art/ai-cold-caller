'use client';

import { motion } from 'framer-motion';
import { Zap, Code2, Cpu } from 'lucide-react';

const floatingIcons = [
  {
    icon: Zap,
    color: 'text-blue-500',
    className: 'top-20 left-10 md:left-20 lg:left-32',
    duration: 5.5,
    delay: 0,
  },
  {
    icon: Code2,
    color: 'text-orange-500',
    className: 'top-32 right-10 md:right-20 lg:right-32',
    duration: 6.5,
    delay: 0.5,
  },
  {
    icon: Cpu,
    color: 'text-blue-600',
    className: 'bottom-32 right-10 md:right-20 lg:right-40',
    duration: 7,
    delay: 1,
  },
];

export default function FloatingIcons() {
  return (
    <>
      {floatingIcons.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={idx}
            className={`absolute ${item.className}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [20, -20, 20]
            }}
            transition={{
              duration: item.duration,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: 0.2 + item.delay,
            }}
          >
            <motion.div
              className={`w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer`}
              whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className={item.color} size={32} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}
