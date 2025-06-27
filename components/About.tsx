'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { icon: Award, number: '3+', label: 'Years Experience' },
  { icon: Users, number: '50+', label: 'Happy Clients' },
  { icon: Clock, number: '50+', label: 'Projects Completed' },
  { icon: Star, number: '98%', label: 'Client Satisfaction' },
];

const skills = [
  'Brand Identity & Visual Design',
  'Social Media Design & Strategy',
  'Print & Digital Marketing Materials',
  'UI/UX Design Consultation',
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white theme-transition">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto theme-transition">
            Passionate visual designer with expertise in creating compelling designs that drive engagement and conversions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Image
                src="/images/mercy.jpg"
                alt="Mercy"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl theme-transition"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Connections</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white theme-transition">Why Choose Me?</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 theme-transition">
              Over the past 3 years, as a Marketing and Advertising designer I've weaned my creative ability to help small and large businesses, brands, solopreneurs and creators scale the part of visual mediocrity to achieving good and attractive designs that captures attention - increasing perception and sales conversion.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 theme-transition">
              I specialize in creating visual content that not only looks stunning but also tells your brand's story effectively and drives meaningful results.
            </p>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 theme-transition">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Icon className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2 theme-transition">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 theme-transition">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(About);