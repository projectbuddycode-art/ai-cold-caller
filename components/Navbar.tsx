'use client';

import { useState, useEffect } from 'react';
import { useContactForm } from '@/contexts/ContactFormContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '/', section: 'home' },
  { label: 'Services', href: '#services', section: 'services' },
  { label: 'Work', href: '#case-studies', section: 'work' },
  { label: 'About', href: '/about', section: 'about' },
  { label: 'Testimonials', href: '#testimonials', section: 'testimonials' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { openContactForm } = useContactForm();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/logo.jpg"
                  alt="Project Buddy Logo"
                  width={48}
                  height={48}
                  className="w-full h-full rounded-lg object-cover"
                  priority
                />
              </div>
              <motion.div
                className="hidden sm:flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="font-bold text-sm md:text-base text-slate-900">Project Buddy</span>
                <span className="text-xs text-blue-600 font-medium">Turn idea into reality</span>
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.section}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={openContactForm}
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all"
            whileHover={{ y: -2, boxShadow: '0 12px 24px rgba(37, 99, 235, 0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            Book Strategy Call
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-slate-900 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-slate-900 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-slate-900 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={isMobileMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pb-4 border-t border-slate-200 space-y-1 pt-4">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.section}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                initial={{ opacity: 0, x: -10 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: idx * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => { setIsMobileMenuOpen(false); openContactForm(); }}
              className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-lg text-center"
              whileTap={{ scale: 0.95 }}
            >
              Book Strategy Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
