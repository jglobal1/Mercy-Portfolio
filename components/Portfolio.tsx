'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Fliers');
  const [showAll, setShowAll] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const categories = ['Fliers', 'Brands', 'Banners', 'T-shirt Designs'];

  const portfolioItems = [
    // Fliers
    { id: 1, title: 'Flier', category: 'Fliers', image: '/images/flier.jpg', description: 'A good flier design.' },
    { id: 2, title: 'Flier', category: 'Fliers', image: '/images/flier (2).jpg', description: 'A good flier design.' },
    { id: 3, title: 'Flier', category: 'Fliers', image: '/images/flier (3).jpg', description: 'A good flier design.' },
    { id: 4, title: 'Flier', category: 'Fliers', image: '/images/flier (4).jpg', description: 'A good flier design.' },
    { id: 5, title: 'Flier', category: 'Fliers', image: '/images/flier (5).jpg', description: 'A good flier design.' },
    { id: 6, title: 'Flier', category: 'Fliers', image: '/images/flier (6).jpg', description: 'A good flier design.' },
    { id: 7, title: 'Flier', category: 'Fliers', image: '/images/flier (7).jpg', description: 'A good flier design.' },
    { id: 8, title: 'Flier', category: 'Fliers', image: '/images/flier (8).jpg', description: 'A good flier design.' },
    { id: 9, title: 'Flier', category: 'Fliers', image: '/images/flier (9).jpg', description: 'A good flier design.' },
    { id: 10, title: 'Flier', category: 'Fliers', image: '/images/events.jpg', description: 'A good flier design.' },
    // Brands
    { id: 11, title: 'Brand Design', category: 'Brands', image: '/images/brand.jpg', description: 'A professional brand design.' },
    { id: 12, title: 'Brand Design', category: 'Brands', image: '/images/brand (2).jpg', description: 'A professional brand design.' },
    { id: 13, title: 'Brand Design', category: 'Brands', image: '/images/brand (3).jpg', description: 'A professional brand design.' },
    { id: 14, title: 'Brand Design', category: 'Brands', image: '/images/brand designs.jpg', description: 'A professional brand design.' },
    // Banners
    { id: 15, title: 'Banner', category: 'Banners', image: '/images/banner.jpg', description: 'A creative banner design.' },
    { id: 16, title: 'Banner', category: 'Banners', image: '/images/banners.jpg', description: 'A creative banner design.' },
    // T-shirt Designs
    { id: 17, title: 'T-shirt Design', category: 'T-shirt Designs', image: '/images/T shirt designs.jpg', description: 'A stylish T-shirt design.' },
    { id: 18, title: 'T-shirt Design', category: 'T-shirt Designs', image: '/images/t shirt designs (2).jpg', description: 'A stylish T-shirt design.' }
  ];

  let filteredItems = showAll
    ? (activeFilter && activeFilter !== 'All' ? portfolioItems.filter(item => item.category === activeFilter) : portfolioItems)
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white theme-transition">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 theme-transition">
            Here are some of my latest works that showcase my design expertise and creativity.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {showAll && (
              <motion.button
                key="All"
                onClick={() => setActiveFilter('')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  !activeFilter
                    ? 'bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md theme-transition'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All
              </motion.button>
            )}
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md theme-transition'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + showAll}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden theme-transition"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.button
                        className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setModalImage(item.image)}
                        aria-label={`View ${item.title}`}
                      >
                        <Eye size={20} />
                      </motion.button>
                      <motion.a
                        className="p-3 bg-red-600 dark:bg-red-500 rounded-full text-white hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={item.image}
                        download
                        aria-label={`Download ${item.title}`}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-red-600 dark:text-red-400 font-semibold mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors theme-transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm theme-transition">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal for viewing image */}
        {modalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setModalImage(null)}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 max-w-3xl w-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 text-2xl" onClick={() => setModalImage(null)}>&times;</button>
              <img src={modalImage} alt="Full Design" className="w-full h-auto rounded-xl" />
            </div>
          </div>
        )}

        {!showAll && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
            >
              View Full Portfolio
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;