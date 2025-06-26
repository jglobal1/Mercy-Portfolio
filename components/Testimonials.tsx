'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Isreal Emiyare',
      role: 'Performance-Driven Strategist | Driving Revenue Growth, Innovation & Competitive Advantage',
      company: '20k Community',
      image: '/images/isreal emiyare.jpg',
      link: 'https://www.linkedin.com/posts/israel-emiyare-strategic-operations_i-didnt-ask-she-simply-offered-last-week-activity-7343510977310593024-XWNa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuNNpQBl_kC5ssDd5LbrwV8sownt-iAtik',
      content: `I didn't ask. She simply offered.

Last week, a LinkedIn connection Mercy Adeoye reached out, not to pitch or sell, but to volunteer her skill to design a flyer for my 20k community milestone.

No charge. No conditions. Pure value.

I was moved. And I decided this gesture won't go unreciprocated.  I will do business with her. I will refer her. I will support her brand.

Because real value commands real reward.

Honestly, this little moment has left me with lessons on why genuine help and support is really powerful:

📌 Support unlocks doors money cannot buy. When you help sincerely, you plant seeds in places your pitch may never reach.

📌 People remember who showed up without being asked. Unsolicited value sticks deeply; it earns you a place in minds and networks.

📌 Helping others is the smartest marketing. Her simple act made her unforgettable to me, not an ad, not a message, but pure action.

📌 Relationships are built faster on help than on strategy. In one kind gesture, she created trust and loyalty.`,
      rating: 5
    },
    {
      id: 2,
      name: 'Johnson Adedokun',
      role: 'I Build Guaranteed Systems and Optimized Websites that bring Sales for Founders and Business Owners.',
      company: 'Banner Client',
      image: '/images/Johnson Adedokun.jpg',
      link: 'https://www.linkedin.com/posts/johnson-adedokun_someone-told-me-he-loved-my-recent-banner-activity-7331577557764427777-ayCs?utm_source=share&utm_medium=member_desktop&rcm=ACoAADuNNpQBl_kC5ssDd5LbrwV8sownt-iAtik',
      content: `Mercy designed a banner for my brand and it was nothing short of amazing. The creativity, attention to detail, and professionalism she brought to the project made the banner stand out and perfectly represent my vision. Highly recommended!`,
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white theme-transition">
            Client <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto theme-transition">
            Don't just take my word for it. Here's what my clients say about working with me.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto">
            {testimonials.map((testimonial, index) => {
              // Collapsible logic for Isreal's testimonial
              const isIsreal = testimonial.name === 'Isreal Emiyare';
              const [expanded, setExpanded] = useState(false);
              let shortContent = testimonial.content;
              if (isIsreal && !expanded) {
                const lines = testimonial.content.split('\n');
                shortContent = lines.slice(0, 2).join(' ');
              }
              return (
                <motion.div
                  key={testimonial.id}
                  className="mx-auto max-w-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600 relative theme-transition flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 dark:from-red-400 dark:to-yellow-400 rounded-full flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  >
                    <Quote className="w-4 h-4 text-white" />
                  </motion.div>

                  {/* Picture and headline in a row */}
                  <div className="flex items-center mb-4 space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-800 dark:text-white theme-transition">{testimonial.name}</h4>
                        {testimonial.link && (
                          <a href={testimonial.link} target="_blank" rel="noopener noreferrer" title="View LinkedIn post" className="inline-block align-middle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600 dark:text-blue-400"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + star * 0.05, duration: 0.3 }}
                      >
                        <Star
                          className={`w-4 h-4 ${
                            star <= testimonial.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm theme-transition text-center">
                    "{isIsreal ? shortContent : testimonial.content}"
                    {isIsreal && testimonial.content.split('\n').length > 2 && (
                      <>
                        {!expanded && (
                          <span className="text-blue-600 cursor-pointer ml-2" onClick={() => setExpanded(true)}>Read more</span>
                        )}
                        {expanded && (
                          <span className="text-blue-600 cursor-pointer ml-2" onClick={() => setExpanded(false)}>Show less</span>
                        )}
                      </>
                    )}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 theme-transition">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span>from 150+ client reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;