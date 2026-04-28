'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/animations';
import { Cpu, Smartphone, LayoutDashboard, TrendingUp, Shield, Users } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import Image from 'next/image';

export default function CustomSaasDevelopmentIndia() {
  const { openContactForm } = useContactForm();

  const features = [
    {
      icon: Cpu,
      title: 'Custom SaaS Development',
      description: 'End-to-end SaaS platforms built for scale from MVP to enterprise.',
    },
    {
      icon: Smartphone,
      title: 'Mobile & Web Applications',
      description: 'Intuitive and high-performance mobile and web applications tailored to your business.',
    },
    {
      icon: LayoutDashboard,
      title: 'Scalable Architecture',
      description: 'Cloud-native architecture designed for growth and performance.',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Generation',
      description: 'SaaS solutions that help you acquire customers and generate revenue.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your customer data and business information.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration with your team throughout the development process.',
    },
  ];

  const howItWorks = [
    {
      title: 'Discovery & Planning',
      description: 'Understand your business requirements and plan the SaaS solution architecture.',
    },
    {
      title: 'Design & Development',
      description: 'Create intuitive designs and develop robust, scalable SaaS applications.',
    },
    {
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing to ensure your SaaS application is reliable and bug-free.',
    },
    {
      title: 'Deployment & Launch',
      description: 'Deploy your SaaS application to production with zero downtime.',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support to keep your SaaS application running smoothly.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-100 to-transparent rounded-full blur-3xl opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Ship Your SaaS MVP in 6-8 Weeks
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Build scalable, revenue-generating SaaS platforms with expert development teams in India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">
                Production-Ready Engineering Built to Scale
              </h2>
              <p className="text-lg text-slate-600">
                Our expert development teams in India build custom SaaS platforms that scale with your business and generate revenue.
              </p>
              <ul className="space-y-4 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600">✓</span>
                  <span>Custom SaaS development from MVP to enterprise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600">✓</span>
                  <span>Mobile and web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600">✓</span>
                  <span>Scalable cloud-native architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-600">✓</span>
                  <span>Revenue-generating solutions</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactForm}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
              >
                Start Your SaaS Journey
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96">
                <Image
                  src="/images/services/custom-saas.jpg"
                  alt="Custom SaaS Development India"
                  fill
                  priority
                  quality={85}
                  className="object-cover rounded-2xl shadow-soft-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">SaaS Development</h3>
                    <p className="text-indigo-100">Build scalable SaaS platforms</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to build scalable, revenue-generating SaaS platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our proven process to build custom SaaS platforms from concept to launch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Ready to Build Your SaaS Platform?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's build a custom SaaS platform that scales with your business and generates revenue.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openContactForm}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}