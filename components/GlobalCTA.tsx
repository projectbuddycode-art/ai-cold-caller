'use client';

import { motion } from 'framer-motion';
import { useContactForm } from '@/contexts/ContactFormContext';

export default function GlobalCTA() {
  const { openContactForm } = useContactForm();

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Build Something Extraordinary?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl mb-8 opacity-95"
        >
          Let's talk about your product. Free 30-minute strategy call. No obligation. No fluff.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={openContactForm}
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-all"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Strategy Call
          </motion.button>
          <motion.button
            onClick={openContactForm}
            className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Free AI System Audit
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
