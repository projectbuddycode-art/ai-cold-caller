'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function PoliciesPage() {
  return (
    <main className="overflow-hidden">
      <motion.section
        className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl md:text-6xl font-black text-slate-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Policies & Legal
          </motion.h1>

          {/* Privacy Policy */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                At Project Buddy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website.
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Information We Collect</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Personal information you provide directly (name, email, phone)</li>
                <li>Information collected automatically (IP address, browser type, pages visited)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">How We Use Your Information</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>To provide and improve our services</li>
                <li>To communicate with you about updates and offers</li>
                <li>To analyze usage patterns and troubleshoot issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
          </motion.div>

          {/* Terms of Service */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Terms of Service</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Use License</h3>
              <p className="text-slate-600 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Project Buddy's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
              </ul>
            </div>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Data Protection</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-4">
                We implement comprehensive technical and organizational security measures to protect your personal data.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Compliance with industry standards (GDPR, CCPA, etc.)</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8 border border-primary-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Questions?</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about our policies, please contact us at:
            </p>
            <a href="mailto:hello@projectbuddy.com" className="text-primary-600 font-semibold hover:text-primary-700">
              hello@projectbuddy.com
            </a>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </main>
  );
}
