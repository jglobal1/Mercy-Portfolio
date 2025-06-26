'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Social Media Design',
    'Ebook Covers',
    'Brand Identity',
    'Print Design'
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 relative theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Mercy Adeoye
            </h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4 theme-transition">
              Visual Designer helping brands create lasting impressions through captivating visual designs.
            </p>
            <div className="text-sm text-gray-400 dark:text-gray-500 theme-transition">
              Based in Abuja, Nigeria
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-300 transition-colors theme-transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-300 dark:text-gray-400 theme-transition">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300 dark:text-gray-400 theme-transition">
              <p>hello@mercyadeoye.com</p>
              <p>+234 (0) 801 234 5678</p>
              <p>452 connections on LinkedIn</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8">
          <div className="text-gray-400 dark:text-gray-500 text-sm theme-transition text-center w-full">
            © {new Date().getFullYear()} Mercy Adeoye. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="ml-0 md:ml-4 p-2 rounded-full bg-gray-800 dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-red-400 transition-colors theme-transition"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;