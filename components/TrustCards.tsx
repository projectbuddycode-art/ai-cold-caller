'use client';

import { motion } from 'framer-motion';
import { Award, Users, Zap, Clock } from 'lucide-react';

const trustCards = [
  {
    icon: Award,
    title: 'Enterprise Experience',
    description: 'Built by engineers from JP Morgan & Cisco',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Direct Founder Access',
    description: '50+ Products Built & Deployed',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Production Ready',
    description: '100% Client Retention Rate',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Clock,
    title: 'Fast Execution',
    description: '6–8 Week MVP Delivery',
    color: 'from-green-500 to-green-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: idx * 0.12,
    },
  }),
};

const cardFloatingVariants = (idx: number) => ({
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4 + idx * 0.3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
});

export default function TrustCards() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {trustCards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={cardFloatingVariants(idx).animate}
            whileHover={{ y: -8, boxShadow: '0 16px 32px rgba(0, 0, 0, 0.12)' }}
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all cursor-pointer" // Consistent styling
          >
            {/* Icon Circle */}
            <motion.div 
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              <Icon size={24} className="text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
