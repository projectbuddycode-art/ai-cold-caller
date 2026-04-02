import { Variants } from 'framer-motion';

// Fast & Smooth Animations (optimized for performance)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: custom * 0.08,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: custom * 0.05,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const heroLineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: custom * 0.12,
    },
  }),
};

// Smooth floating animations
export const floatingVariants = {
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const floatingSlow = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const floatingMedium = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5.5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const floatingSmooth = {
  animate: {
    y: [0, -10, -6, -12, 0],
    transition: {
      duration: 5,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const scaleOnHover = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  whileTap: {
    scale: 0.98,
    transition: {
      duration: 0.15,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: custom * 0.08,
    },
  }),
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: custom * 0.08,
    },
  }),
};

export const expandCollapse: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    overflow: 'hidden',
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    overflow: 'visible',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: custom * 0.04,
    },
  }),
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(59, 130, 246, 0.7)',
      '0 0 0 10px rgba(59, 130, 246, 0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const rotateAndScale = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const shimmer = {
  animate: {
    backgroundPosition: ['0% 0%', '100% 100%'],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: custom * 0.08,
    },
  }),
};

export const slideInFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: (custom = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: custom * 0.08,
    },
  }),
};

export const countUpVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Floating animation with custom delay for staggered effect
export const floatingWithDelay = (delayMultiplier: number = 0) => ({
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 4.5 + delayMultiplier * 0.3,
      ease: 'easeInOut',
      repeat: Infinity,
      delay: delayMultiplier * 0.15,
    },
  },
});

export const buttonHover = {
  whileHover: {
    y: -2,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  whileTap: {
    scale: 0.96,
  },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: custom * 0.08,
    },
  }),
};
