'use client';

import { motion } from 'framer-motion';
import { Camera, Smartphone, LayoutDashboard, TrendingUp, Shield, Users } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import Image from 'next/image'; // Import Image component

export default function CaseStudyDiamondPhotographySoftware() {
  const { openContactForm } = useContactForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-gray-100 to-transparent rounded-full blur-3xl opacity-10" />
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
              Case Study: Diamond Photography Software
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              AI-powered diamond photography system with mobile app and device integration
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
                Hardware-Integrated SaaS System
              </h2>
              <p className="text-lg text-slate-600">
                We built an AI-powered diamond photography system that integrates with specialized hardware devices, includes a mobile app for field photography, and features a subscription-based model with export limits and an admin dashboard.
              </p>
              <ul className="space-y-3 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Hardware-integrated SaaS system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Mobile app + device integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Subscription model with export limits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600">✓</span>
                  <span>Admin dashboard for management</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactForm}
                className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all"
              >
                Get Started
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
                  src="/images/case-studies/diamond-photography-hero.jpg" // Placeholder image
                  alt="Diamond Photography Software"
                  fill
                  priority
                  quality={85}
                  className="object-cover rounded-2xl shadow-soft-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Diamond Photography</h3>
                    <p className="text-gray-100">Hardware-integrated SaaS system</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
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
              The Challenge
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The client needed a comprehensive system to manage diamond photography for jewelry businesses, with hardware integration, mobile capabilities, and subscription-based revenue model.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hardware Integration</h3>
              <p className="text-slate-600 leading-relaxed">
                Integration with specialized diamond photography hardware devices for high-quality image capture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile App</h3>
              <p className="text-slate-600 leading-relaxed">
                Mobile application for field photography and on-the-go diamond image capture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Admin Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive admin dashboard for managing users, subscriptions, and content.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Our Solution
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We built a comprehensive SaaS platform that integrates hardware, mobile, and web applications with a subscription-based revenue model.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hardware Integration</h3>
              <p className="text-slate-600 leading-relaxed">
                Seamless integration with diamond photography hardware for automated image capture and processing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Application</h3>
              <p className="text-slate-600 leading-relaxed">
                Native mobile app for iOS and Android with offline capabilities and cloud synchronization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Admin Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                Web-based admin dashboard with user management, subscription control, and analytics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
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
              Results & Impact
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The system has transformed how jewelry businesses manage diamond photography and customer relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Revenue Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Subscription-based model generating recurring revenue for the business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Enterprise-grade security protecting sensitive diamond photography data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600 to-gray-500 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">User Adoption</h3>
              <p className="text-slate-600 leading-relaxed">
                High user adoption rates with intuitive interface and mobile capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Ready to Build Your Hardware-Integrated SaaS System?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's build a comprehensive SaaS platform that integrates with your hardware and transforms your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openContactForm}
              className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}