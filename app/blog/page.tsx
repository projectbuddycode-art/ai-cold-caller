'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from '@/components/animations';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { useContactForm } from '@/contexts/ContactFormContext';
import Image from 'next/image';

export default function Blog() {
  const { openContactForm } = useContactForm();

  const posts = [
    {
      title: 'How AI Lead Generation Systems Increase Conversions by 3x',
      slug: 'how-ai-lead-generation-systems-increase-conversions-by-3x',
      excerpt: 'Discover how AI-powered lead generation systems can dramatically increase your conversion rates by automating lead capture, scoring, and nurturing processes.',
      date: 'April 15, 2026',
      author: 'John Doe',
      tags: ['AI', 'Lead Generation', 'Automation'],
      readingTime: '8 min read',
      featuredImage: '/images/blog/ai-lead-generation.jpg',
    },
    {
      title: 'WhatsApp Automation vs Manual Follow-Ups',
      slug: 'whatsapp-automation-vs-manual-follow-ups',
      excerpt: 'Compare the effectiveness of WhatsApp automation versus manual follow-ups and learn how to scale your customer communication efficiently.',
      date: 'April 10, 2026',
      author: 'Jane Smith',
      tags: ['WhatsApp', 'Automation', 'Customer Service'],
      readingTime: '6 min read',
      featuredImage: '/images/blog/whatsapp-automation.jpg',
    },
    {
      title: 'How AI Can Transform School Management Systems',
      slug: 'how-ai-can-transform-school-management-systems',
      excerpt: 'Explore the impact of AI on school management systems and how it can improve student performance tracking and parent communication.',
      date: 'April 5, 2026',
      author: 'Michael Johnson',
      tags: ['AI', 'Education', 'School Management'],
      readingTime: '7 min read',
      featuredImage: '/images/blog/school-management.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-slate-100 to-transparent rounded-full blur-3xl opacity-10" />
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
              Insights on AI & SaaS Engineering
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Expert strategies for AI automation, high-converting lead systems, and scalable product growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {posts.map((post, idx) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        quality={75}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-slate-900">
                        <a href={`/blog/${post.slug}`} className="text-slate-900 hover:text-blue-600 transition-colors">
                          {post.title}
                        </a>
                      </h2>
                      <p className="text-slate-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          {post.readingTime}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <div className="flex gap-1">
                          {post.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="inline-flex items-center gap-1 text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                              <Tag className="w-4 h-4" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
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
              Get Expert Growth Strategies
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join 500+ founders receiving weekly insights on AI automation and business scaling.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openContactForm} // Consistent button styling
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-soft-lg hover:shadow-soft-xl transition-all"
            >
              Join the Insider List
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}