'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';
import { CheckCircle2, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function FounderSection() {
  const { openContactForm } = useContactForm();

  const achievements = [
    '2+ Years Experience in Software Development',
    'AI & SaaS Product Specialist',
    '100+ Projects Delivered',
    'End-to-End Development & Deployment',
  ];

  return (
    <motion.section
      className="py-18 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6"
            variants={fadeInUp}
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Meet The Visionary
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
            variants={fadeInUp}
          >
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Founder
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Building the future of AI & SaaS with engineering excellence and customer obsession
          </motion.p>
        </motion.div>

        {/* Founder Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 pb-20 border-b border-slate-200"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image Section */}
          <motion.div
            className="relative"
            variants={fadeInUp}
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 z-10" />
              <Image
                src="/images/founder.jpg"
                alt="Shivam Dubey - Founder & CEO"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-xs"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-sm font-medium text-slate-600 mb-2">
                "Turn Ideas into Reality"
              </p>
              <p className="text-2xl font-black text-blue-600">
                100+
              </p>
              <p className="text-sm text-slate-500">Projects Delivered</p>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
          >
            {/* Name & Title */}
            <div>
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-2"
                variants={fadeInUp}
              >
                Shivam Dubey
              </motion.h3>
              <motion.p
                className="text-lg font-semibold text-blue-600"
                variants={fadeInUp}
              >
                Founder & CEO, Project Buddy
              </motion.p>
            </div>

            {/* Bio */}
            <motion.p
              className="text-slate-700 leading-relaxed text-base md:text-lg"
              variants={fadeInUp}
            >
              As a software development company, Project Buddy is led by a seasoned Software Developer with 2+ years of experience in building scalable web applications, AI solutions, and SaaS products.
            </motion.p>

            <motion.p
              className="text-slate-700 leading-relaxed text-base md:text-lg"
              variants={fadeInUp}
            >
              I specialize in turning ideas into fully functional digital products with a strong focus on execution, speed, and real-world results.
            </motion.p>

            {/* Achievements */}
            <motion.div
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                  custom={idx}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  </motion.div>
                  <span className="text-slate-700 font-medium">{achievement}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={fadeInUp}
            >
              <motion.button
                onClick={openContactForm}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }} // Consistent button styling
              >
                Schedule a Call
              </motion.button>
              <a
                href="https://linkedin.com/in/shivam-dubey"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
              > {/* Consistent link styling */}
                <Linkedin className="w-5 h-5" />
                Connect
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
