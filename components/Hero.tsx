'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Palette, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const floatingElements = [
    { icon: Sparkles, delay: 0, position: 'top-20 left-20' },
    { icon: Palette, delay: 0.5, position: 'top-40 right-20' },
    { icon: TrendingUp, delay: 1, position: 'bottom-40 left-10' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-red-200 dark:text-red-400/30 floating-animation`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: element.delay, duration: 0.8 }}
          >
            <Icon size={48} />
          </motion.div>
        );
      })}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-red-600 dark:text-red-400 font-semibold text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello There! Welcome to My Portfolio
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white theme-transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I'm <span className="gradient-text">Mercy Adeoye</span>,
              <br />
              <span className="text-gray-800 dark:text-gray-200">Visual Designer</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl theme-transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              I help brands create lasting impression in the heart of their audience using captivating visual designs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#portfolio"
                className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg pulse-glow text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 border-red-600 dark:border-red-400 text-red-600 dark:text-red-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white dark:hover:bg-red-400 dark:hover:text-gray-900 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500 rounded-full opacity-20 dark:opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 bg-gradient-to-br from-red-500 to-yellow-500 dark:from-red-400 dark:to-yellow-400 rounded-full opacity-30 dark:opacity-40"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-8 bg-white dark:bg-gray-800 rounded-full shadow-2xl overflow-hidden theme-transition">
                <Image
                  src="/images/mercy.jpg"
                  alt="Mercy Adeoye"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="text-red-600 dark:text-red-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;