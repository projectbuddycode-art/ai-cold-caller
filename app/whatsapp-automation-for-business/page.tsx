'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, MessageSquare, TrendingUp, Shield, Users } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import Image from 'next/image';

export default function WhatsappAutomationForBusiness() {
  const { openContactForm } = useContactForm();

  const features = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Business API Integration',
      description: 'Connect your WhatsApp Business API for seamless automation and messaging.',
    },
    {
      icon: Phone,
      title: 'Automated Messaging',
      description: 'Send automated messages, responses, and follow-ups to customers.',
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Integration',
      description: 'Build intelligent chatbots to handle customer queries and support.',
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Capture leads directly through WhatsApp and nurture them automatically.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect customer data and conversations.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on customer conversations and support.',
    },
  ];

  const howItWorks = [
    {
      title: 'WhatsApp Integration',
      description: 'Connect your WhatsApp Business API for seamless automation and messaging.',
    },
    {
      title: 'Automated Messaging',
      description: 'Send automated messages, responses, and follow-ups to customers.',
    },
    {
      title: 'Chatbot Setup',
      description: 'Build intelligent chatbots to handle customer queries and support.',
    },
    {
      title: 'Lead Capture',
      description: 'Capture leads directly through WhatsApp and nurture them automatically.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track message performance, response rates, and customer engagement.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-green-100 to-transparent rounded-full blur-3xl opacity-10" />
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
              Turn WhatsApp into a 24/7 Revenue Engine
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Automate your customer communication and lead generation with WhatsApp Business API integration.
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
                Engage Thousands of Prospects via WhatsApp API
              </h2>
              <p className="text-lg text-slate-600">
                Our WhatsApp automation system helps you engage customers, generate leads, and provide support at scale.
              </p>
              <ul className="space-y-3 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span>WhatsApp Business API integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Automated messaging and responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Intelligent chatbot integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Lead generation and nurturing</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactForm}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
              >
                Automate My WhatsApp
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
                  src="/images/services/whatsapp-automation.jpg"
                  alt="WhatsApp Automation for Business"
                  fill
                  priority
                  quality={85}
                  className="object-cover rounded-2xl shadow-soft-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">WhatsApp Integration</h3>
                    <p className="text-green-100">Connect your WhatsApp Business API</p>
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
              Everything you need to automate your WhatsApp communication and grow your business
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center mb-6">
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-green-50 to-teal-50">
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
              Our proven process to automate your WhatsApp communication and generate leads
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
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6 text-white" />
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
              Ready to Automate Your WhatsApp Communication?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's build a WhatsApp automation system that engages customers and generates leads automatically.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openContactForm}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}