'use client';

import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './animations';
import Image from 'next/image';

export default function Authority() {
  const companies = [
    { name: 'Project Buddy', initials: 'PB', logo: '/images/logo.jpg' },
    { name: 'Founder', initials: 'SD', logo: '/images/founder.jpg' },
    { name: 'Muskan', initials: 'M', logo: '/images/muskan.jpg' },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Built with Enterprise-Level Engineering Standards
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by industry leaders and Fortune 500 companies
          </p>
        </motion.div>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              className="flex justify-center"
              variants={itemVariants}
            >
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Consistent animation
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />

                {/* Logo Card */}
                <div className="relative bg-white rounded-2xl p-12 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all">
                  {/* Logo - Image or Initials Fallback */}
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center mb-6 mx-auto group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 relative overflow-hidden">
                    <Image
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      width={96}
                      height={96}
                      className="object-contain w-full h-full p-2"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-white font-bold text-xl absolute">
                      {company.initials}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
                    {company.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 text-center max-w-xs mx-auto">
                    Enterprise-grade solutions powering global operations
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Enterprise Clients', value: '50+' },
            { label: 'Infrastructure Partners', value: '5+' },
            { label: 'SLAs Maintained', value: '99.99%' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
