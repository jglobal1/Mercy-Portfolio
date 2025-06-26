'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Share2, BookOpen, Image, Megaphone, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Designs',
      description: 'Eye-catching social media posts, stories, and banners that boost engagement and brand awareness.',
      features: ['Instagram Posts', 'Facebook Ads', 'Twitter Headers', 'LinkedIn Banners']
    },
    {
      icon: BookOpen,
      title: 'Ebook Cover Designs',
      description: 'Professional ebook covers that grab attention and increase your book\'s marketability.',
      features: ['Digital Covers', 'Print Ready', 'Multiple Formats', 'Revisions Included']
    },
    {
      icon: Megaphone,
      title: 'Event & Course Designs',
      description: 'Compelling designs for courses, webinars, and conferences that drive attendance.',
      features: ['Course Thumbnails', 'Event Banners', 'Certificate Design', 'Promotional Materials']
    },
    {
      icon: Image,
      title: 'Thumbnail & Banners',
      description: 'High-converting thumbnails and cover banners for digital platforms and marketing.',
      features: ['YouTube Thumbnails', 'Blog Headers', 'Web Banners', 'Cover Photos']
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity packages including logos, color schemes, and style guides.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography Selection']
    },
    {
      icon: Layers,
      title: 'Print Design',
      description: 'Professional print materials including flyers, brochures, and business cards.',
      features: ['Business Cards', 'Flyers', 'Brochures', 'Posters']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white theme-transition">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto theme-transition">
            I offer a comprehensive range of design services to help your brand stand out and make a lasting impression.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 theme-transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 dark:from-red-400 dark:to-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors theme-transition">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed theme-transition">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 theme-transition"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.4 }}
                    >
                      <div className="w-1.5 h-1.5 bg-red-400 dark:bg-red-300 rounded-full mr-3"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.a
            href="https://wa.me/2347031494927"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;