'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './animations';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "They built our entire AI calling system in 6 weeks. The quality of engineering was top-notch, and they were responsive to every request. Highly recommended.",
      author: 'Sarah Chen',
      role: 'CEO, PropTech Startup',
      rating: 5,
      image: '👨‍💼',
    },
    {
      quote: "From concept to production, they handled everything. Our lead generation increased by 65% in the first month. Worth every penny.",
      author: 'James Rodriguez',
      role: 'Founder, SaaS Platform',
      rating: 5,
      image: '👩‍💼',
    },
    {
      quote: "The team understood our vision immediately and delivered beyond expectations. Their AI automation cut our operational costs in half.",
      author: 'Michael Park',
      role: 'Operations Director, Scale-up',
      rating: 5,
      image: '👨‍💻',
    },
    // Indian client reviews
    {
      quote: "Project Buddy's AI solutions transformed our customer outreach. We saw a 50% increase in engagement within weeks. The team is highly professional and understands the Indian market well.",
      author: 'Priya Sharma',
      role: 'Head of Marketing, Mumbai Fintech',
      rating: 5,
      image: '👩‍💼',
    },
    {
      quote: "Excellent service and support! Their automation helped us scale faster and reduced manual work drastically. Highly recommended for Indian startups.",
      author: 'Amit Verma',
      role: 'Co-Founder, Delhi SaaS Solutions',
      rating: 5,
      image: '👨‍💼',
    },
    {
      quote: "We were impressed by the quick turnaround and deep technical expertise. The results exceeded our expectations. Will work with them again!",
      author: 'Sneha Patel',
      role: 'Product Manager, Bangalore HealthTech',
      rating: 5,
      image: '👩‍💻',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-100 to-transparent rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Loved by Our Clients
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See what leading founders and executives say about working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              variants={itemVariants}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />

              {/* Card */}
              <motion.div
                className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-soft-lg hover:shadow-soft-xl transition-all h-full flex flex-col"
                whileHover={{ y: -4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-slate-700 mb-8 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
