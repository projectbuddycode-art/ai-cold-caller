'use client';

import { motion } from 'framer-motion';

interface AnimatedGradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedGradientHeading({
  children,
  className = '',
}: AnimatedGradientHeadingProps) {
  return (
    <motion.div
      className={`bg-gradient-to-r from-primary-600 via-purple-600 to-red-500 bg-clip-text text-transparent bg-[length:200%_200%] ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'ease-in-out',
      }}
    >
      {children}
    </motion.div>
  );
}
