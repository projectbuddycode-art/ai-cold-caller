'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, Lock, DollarSign } from 'lucide-react';

export default function GlobalClients() {
  const stats = [
    { number: '50+', label: 'Global Clients', description: 'Startups from Silicon Valley to Southeast Asia' },
    { number: '15+', label: 'Countries Served', description: 'Across multiple time zones and regions' },
    { number: '$50M+', label: 'Client Value Created', description: 'Through AI and SaaS automation' },
  ];

  const clients = [
    { name: 'Google', logo: '/images/logos/google.svg' },
    { name: 'Microsoft', logo: '/images/logos/microsoft.svg' },
    { name: 'Amazon', logo: '/images/logos/amazon.svg' },
    { name: 'Airbnb', logo: '/images/logos/airbnb.svg' },
    { name: 'Salesforce', logo: '/images/logos/salesforce.svg' },
    { name: 'IBM', logo: '/images/logos/ibm.svg' },
    { name: 'Meta', logo: '/images/logos/meta.svg' },
    { name: 'Spotify', logo: '/images/logos/spotify.svg' },
    { name: 'Slack', logo: '/images/logos/slack.svg' },
    { name: 'Uber', logo: '/images/logos/uber.svg' },
  ];

  const reasons = [
    {
      icon: Globe,
      title: 'Remote-First Operations',
      description: 'No location constraints. We work in your timezone.',
    },
    {
      icon: Zap,
      title: 'Fast Iteration',
      description: '6–8 week MVPs. Real products. Not prototypes.',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'SOC 2, GDPR compliance, encrypted data handling.',
    },
    {
      icon: DollarSign,
      title: 'Predictable Pricing',
      description: 'Fixed project costs. No surprise bills. No scope creep.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Serving Startups and Innovators Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're a remote-first, distributed team. Your location doesn't matter. Your timezone doesn't matter. We ship globally.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-5xl font-black text-blue-600 mb-2">{stat.number}</p>
              <p className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</p>
              <p className="text-slate-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Clients - Spotlight Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">Trusted by Leading Companies</h3>
          
          {/* Spotlight Container */}
          <div className="relative overflow-hidden">
            {/* Animated gradient spotlight background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent pointer-events-none opacity-50" />
            
            {/* Scrolling logos container */}
            <motion.div
              className="flex gap-8 pb-8"
              animate={{
                x: [0, -1200, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* First set */}
              {clients.map((client, idx) => (
                <motion.div
                  key={`first-${idx}`}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="object-contain max-h-12 group-hover:brightness-125 transition-all duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {clients.map((client, idx) => (
                <motion.div
                  key={`second-${idx}`}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="object-contain max-h-12 group-hover:brightness-125 transition-all duration-300"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.onerror = null;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Animated dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(5)].map((_, idx) => (
              <motion.div
                key={idx}
                className="w-2 h-2 rounded-full bg-slate-300"
                animate={{
                  backgroundColor: ['rgb(209, 213, 219)', 'rgb(59, 130, 246)', 'rgb(209, 213, 219)'],
                }}
                transition={{
                  duration: 3,
                  delay: idx * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl border border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Why Global Teams Choose Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{reason.title}</p>
                    <p className="text-slate-600">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
