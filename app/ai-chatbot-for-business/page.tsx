'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/animations';
import { MessageCircle, Settings, TrendingUp, Shield, Users } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import Image from 'next/image'; // Import Image component

export default function AiChatbotForBusiness() {
  const { openContactForm } = useContactForm();

  const features = [
    {
      icon: MessageCircle,
      title: 'Intelligent Chatbot Development',
      description: 'Build AI-powered chatbots that understand and respond to customer queries naturally.',
    },
{
      icon: MessageCircle,
      title: 'Multi-Platform Integration',
      description: 'Deploy chatbots across websites, WhatsApp, Facebook Messenger, and other platforms.',
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Capture and qualify leads through intelligent chatbot conversations.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect customer data and conversations.',
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Create custom chatbot workflows and automation rules tailored to your business.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on chatbot development and management.',
    },
  ];

  const howItWorks = [
    {
      title: 'Chatbot Design',
      description: 'Design intelligent chatbot conversations and user flows for optimal engagement.',
    },
    {
      title: 'AI Training',
      description: 'Train your chatbot with AI to understand and respond to customer queries effectively.',
    },
    {
      title: 'Platform Integration',
      description: 'Integrate your chatbot with websites, WhatsApp, and other communication platforms.',
    },
    {
      title: 'Testing & Optimization',
      description: 'Test and optimize your chatbot for maximum performance and user satisfaction.',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track chatbot performance, user engagement, and conversion metrics.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-100 to-transparent rounded-full blur-3xl opacity-10" />
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
              Scale Support 24/7 with Intelligent AI Chatbots
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Transform your customer service and lead generation with intelligent AI chatbots that work 24/7.
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
                Reduce Support Costs while Multiplying Lead Capture
              </h2>
              <p className="text-lg text-slate-600">
                Our AI chatbots provide instant customer support, qualify leads, and book appointments automatically.
              </p>
              <ul className="space-y-3 text-lg text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>Intelligent chatbot development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>Multi-platform integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>Lead generation and qualification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600">✓</span>
                  <span>24/7 customer support automation</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openContactForm}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
              >
                Build Your AI Agent
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
                  src="/images/services/ai-chatbot.jpg" // Placeholder image
                  alt="AI Chatbot for Business"
                  fill
                  priority
                  quality={85}
                  className="object-cover rounded-2xl shadow-soft-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">AI Chatbot</h3>
                    <p className="text-orange-100">24/7 customer support automation</p>
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
              Everything you need to automate customer service and generate leads with AI chatbots
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center mb-6">
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50 to-red-50">
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
              Our proven process to develop and deploy intelligent AI chatbots
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center mb-6">
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
              Ready to Scale Your Customer Service?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's build an AI chatbot that provides instant support and generates leads automatically.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openContactForm}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all" // Consistent button styling
            >
              Get a Free Demo Call
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}