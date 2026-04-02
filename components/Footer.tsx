'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-brand-border bg-neutral-50 py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-6">
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 relative"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/logo .jpg"
                  alt="Project Buddy Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-neutral-600">
              AI & SaaS Engineering Studio for growth-stage startups.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              {['Services', 'Process', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary-600 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-neutral-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              {['Blog', 'Docs', 'FAQ', 'Support'].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="hover:text-primary-600 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-neutral-900 mb-4">Get In Touch</h4>
            <motion.a
              href="mailto:info@projectbuddy.co.in"
              className="flex items-center space-x-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
              whileHover={{ x: 2 }}
            >
              <Mail className="w-4 h-4" />
              <span>info@projectbuddy.co.in</span>
            </motion.a>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-brand-border hover:bg-primary-100 flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-border my-8" />

        {/* Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            © {year} Project Buddy. All rights reserved. | Built with ❤️
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
