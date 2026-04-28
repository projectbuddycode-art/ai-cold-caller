'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { useContactForm } from '@/contexts/ContactFormContext';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Vaibhav Jain',
    role: 'Core Team Member',
    bio: 'Enthusiastic Computer Science graduate with a strong passion for solving real-world problems through technology.',
    highlights: [
      'Full-Stack Web Development Expert',
      'Vehicle Recognition & YOLO Systems',
      'AWS Cloud Architecture Certified',
      'Python & C# Specialist',
      '90% Reduction in Security Breaches',
      '80% Faster Page Load Implementation',
    ],
    image: '/images/vaibhav.jpg',
  },
  {
    name: 'Muskan Sureka',
    role: 'Data & Risk Strategy Lead',
    bio: 'Results-driven Fraud Risk and Data Analyst with 5+ years of experience in fraud detection and transaction monitoring.',
    highlights: [
      '5+ Years Fraud Detection Experience',
      'Expert in Payment Fraud Analysis',
      'Power BI & Advanced Analytics',
      'Cross-Functional Team Leadership',
      'Built Scalable Fraud Defenses',
      'Platform Integrity Specialist',
    ],
    image: '/images/muskan.jpg',
  },
];

export default function AdvisoryTeam() {
  const { openContactForm } = useContactForm();

  return (
    <motion.section
      className="py-18 md:py-28 bg-white overflow-hidden"
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
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
            variants={fadeInUp}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Exceptional Talent
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
            variants={fadeInUp}
          >
            Meet Our{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Advisory Team
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Expert professionals driving innovation and excellence across technology and data strategy
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              variants={fadeInUp}
              custom={idx}
              whileHover={{ y: -8 }}
            >
              {/* Image Section */}
              <div className="relative h-80 md:h-96 bg-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 z-10" />
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Project Buddy`}
                  fill
                  quality={80}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 space-y-4">
                {/* Name & Role */}
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-slate-900 mb-1"
                    variants={fadeInUp}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-base font-semibold text-indigo-600"
                    variants={fadeInUp}
                  >
                    {member.role}
                  </motion.p>
                </div>

                {/* Bio */}
                <motion.p
                  className="text-slate-700 leading-relaxed text-sm md:text-base"
                  variants={fadeInUp}
                >
                  {member.bio}
                </motion.p>

                {/* Highlights */}
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {member.highlights.map((highlight, hIdx) => (
                    <motion.div
                      key={hIdx}
                      className="flex items-start gap-2"
                      variants={fadeInUp}
                      custom={hIdx}
                    >
                      <span className="text-indigo-600 font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-slate-600 text-sm md:text-base">{highlight}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex gap-3 pt-4"
                  variants={fadeInUp}
                >
                  <a
                    href={`https://linkedin.com/in/${member.name.toLowerCase().replace(' ', '-')}`}
                    target="_blank"
                    rel="noopener noreferrer" // Added rel="noopener noreferrer" for security
                    className="p-2 bg-indigo-100 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-lg transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@projectbuddy.co.in`}
                    className="p-2 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 pt-14 border-t border-slate-200 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
            variants={fadeInUp}
          >
            Ready to Work with Our Team?
          </motion.h3>
          <motion.button
            onClick={openContactForm}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }} // Consistent button styling
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
