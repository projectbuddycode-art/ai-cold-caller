'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Smartphone, Users, TrendingUp, Shield, BookOpen } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import Image from 'next/image'; // Import Image component

export default function CaseStudySchoolManagementAiSystem() {
  const { openContactForm } = useContactForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
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
              Case Study: School Management AI System
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              AI-powered school management platform with admin dashboard, teacher app, and parent app
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
                AI-Powered School Management Platform
              </h2>
              <p className="text-lg text-slate-600">
                We built a comprehensive school management system with AI-powered student performance analysis, real-time insights, and dedicated apps for administrators, teachers, and parents.
              </p>
              <ul className="space-y-3 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Admin dashboard for school management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Teacher app for classroom management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>Parent app for student progress tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600">✓</span>
                  <span>AI student performance analysis</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactForm}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all"
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
                  src="/images/case-studies/school-management-hero.jpg" // Placeholder image
                  alt="AI-Powered School Management Platform"
                  fill
                  priority
                  quality={85}
                  className="object-cover rounded-2xl shadow-soft-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">School Management</h3>
                    <p className="text-blue-100">AI-powered education platform</p>
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
              The school needed a comprehensive management system to handle student information, attendance, performance tracking, and communication between administrators, teachers, and parents.
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Admin Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive dashboard for school administrators to manage all aspects of school operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Teacher App</h3>
              <p className="text-slate-600 leading-relaxed">
                Mobile application for teachers to manage classes, take attendance, and track student performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Parent App</h3>
              <p className="text-slate-600 leading-relaxed">
                Mobile application for parents to track their child's progress and communicate with teachers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
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
              We built a comprehensive school management system with AI-powered analytics, real-time insights, and dedicated apps for all stakeholders.
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Admin Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                Complete school management dashboard with student information, attendance, and performance tracking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Teacher App</h3>
              <p className="text-slate-600 leading-relaxed">
                Mobile app for teachers to manage classes, take attendance, and provide feedback to students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Parent App</h3>
              <p className="text-slate-600 leading-relaxed">
                Mobile app for parents to track their child's progress, attendance, and communicate with teachers.
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
              The AI-powered school management system has transformed how schools manage student information and communicate with parents.
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Improvement</h3>
              <p className="text-slate-600 leading-relaxed">
                AI-powered analytics helping teachers identify and address student performance issues early.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Data Security</h3>
              <p className="text-slate-600 leading-relaxed">
                Enterprise-grade security protecting sensitive student information and academic records.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Parent Engagement</h3>
              <p className="text-slate-600 leading-relaxed">
                Real-time parent engagement through mobile app with instant notifications and updates.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Ready to Transform Your School Management?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's build an AI-powered school management system that streamlines operations and improves student outcomes.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openContactForm}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}