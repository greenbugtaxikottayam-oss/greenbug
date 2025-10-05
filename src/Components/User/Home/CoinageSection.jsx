import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Why Choose Us',
    description:
      'At Green Bug Taxi Kottayam, we put our customers first in everything we do. Choosing us means choosing reliability, safety, and comfort every time you travel. With trusted local drivers who know kottayam inside out, a clean and well-maintained fleet, and round-the-clock availability, we ensure your journey is smooth and stress-free. Our simple online booking system saves you time, while our transparent pricing keeps your rides affordable with no hidden charges. Whether it\'s a short trip across town or a late-night pickup, green bug taxi is your dependable travel partner in kottayam.',
  },
  {
    title: 'Our Mission',
    description:
      'Our mission is to make everyday travel in kottayam easy, safe, and eco-friendly. We aim to provide a modern taxi booking experience that combines technology with the warmth of local service. By offering quick booking, professional drivers, and affordable rides, we strive to simplify commuting for individuals, families, and businesses while building trust with every journey.',
  },
  {
    title: 'Our Vision',
    description:
      'Our vision is to become kottayam\'s most trusted taxi service, setting a standard for reliability, affordability, and sustainability in local transportation. We aspire to expand our services while staying true to our roots – delivering rides that are fast, friendly, and green. In the long run, we see green bug taxi as a brand that not only moves people but also contributes to a cleaner and smarter way of traveling in kerala.',
  },
];

const CoinageSection = () => {
  return (
    <section className="bg-white py-10 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {values.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 border border-gray-200/80 rounded-xl md:p-8 p-4 shadow-sm h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoinageSection;