'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './animations';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

import { useContactForm } from '@/contexts/ContactFormContext';
import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  linkedin: string;
}

const team: TeamMember[] = [
  {
    name: 'Shivam Dubey',
    role: 'Founder & CEO',
    image: '/images/founder.jpg',
    bio: 'Founder, AI engineer, and product builder. 2+ years experience turning ideas into scalable SaaS businesses.',
    expertise: ['AI/SaaS Architecture', '100+ Projects', 'Rapid Prototyping', 'Leadership'],
    linkedin: 'https://www.linkedin.com/in/dshiv2414/',
  },
  {
    name: 'Vaibhav Jain',
    role: 'Advisory - Full-Stack',
    image: '/images/vaibhav.jpg',
    bio: 'Advisory engineer. CS grad, cloud & security specialist, passionate about robust systems.',
    expertise: ['Cloud Architecture', 'Full-Stack', 'Security', 'Python/C#'],
    linkedin: 'https://www.linkedin.com/in/vaibhavjain1233/',
  },
  {
    name: 'Muskan Sureka',
    role: 'Advisory - Data & Risk',
    image: '/images/muskan.jpg',
    bio: 'Advisory - Data & Risk. 5+ years in fraud detection and fintech risk management.',
    expertise: ['Fraud Detection', 'Risk Analysis', 'Data Strategy', 'Payments'],
    linkedin: 'https://www.linkedin.com/in/muskansureka/',
  },
];

export default function LeadershipTeam() {
  const { openContactForm } = useContactForm();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleOpen = (idx: number) => setOpenIdx(idx);
  const handleClose = () => setOpenIdx(null);

  return (
    <motion.section
      className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4"
            variants={fadeInUp}
          >
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-blue-700">Leadership</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3"
            variants={fadeInUp}
          >
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Experienced engineers and strategists building the future of AI-powered SaaS
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-slate-100 cursor-pointer"
              variants={fadeInUp}
              custom={idx}
              whileHover={{ y: -4 }}
              onClick={() => handleOpen(idx)}
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden flex items-center justify-center">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role} at Project Buddy`}
                  fill
                  quality={80}
                  className="object-cover object-center transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                />
              </div>
              {/* Name & Role */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-blue-600">{member.role}</p>
                <button className="mt-2 text-xs text-blue-700 underline hover:text-blue-900">View Details</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* CTA */}
        <motion.div
          className="text-center mt-12 pt-8 border-t border-slate-200"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.button
            onClick={openContactForm}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }} // Consistent button styling
          >
            Work With Us
          </motion.button>
        </motion.div>

        {/* Side Panel for Details */}
        {openIdx !== null && (
          <div className="fixed inset-0 z-50 flex">
            <div className="flex-1 bg-black/30" onClick={handleClose}></div>
            <div className="w-full max-w-md bg-white shadow-2xl h-full overflow-y-auto p-8 relative animate-slideInRight">
              <button
                className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 text-2xl"
                onClick={handleClose}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src={team[openIdx].image}
                    alt={`${team[openIdx].name} - ${team[openIdx].role}`}
                    fill
                    quality={90}
                    className="object-cover object-center rounded-full border-4 border-blue-200"
                    sizes="160px"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{team[openIdx].name}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-2">{team[openIdx].role}</p>
                <p className="text-base text-slate-700 mb-4 text-center">{team[openIdx].bio}</p>
                <div className="mb-4">
                  {team[openIdx].expertise.map((skill, sIdx) => (
                    <span key={sIdx} className="inline-block bg-blue-100 text-blue-700 text-xs rounded-full px-3 py-1 mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={team[openIdx].linkedin}
                    target="_blank"
                    rel="noopener noreferrer" // Added rel="noopener noreferrer" for security
                    className="w-10 h-10 rounded-lg bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${team[openIdx].name.toLowerCase().replace(' ', '.')}@projectbuddy.co.in`}
                    className="w-10 h-10 rounded-lg bg-indigo-100 hover:bg-indigo-600 text-indigo-600 hover:text-white flex items-center justify-center transition-all"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
