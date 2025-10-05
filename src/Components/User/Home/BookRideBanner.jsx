// src/components/BookRideBanner.jsx

import React from 'react';
import car5 from '../../../assets/images/car5.png';
import circle from '../../../assets/images/circle.png';
import { motion } from 'framer-motion';

const BookRideBanner = () => {
  return (
    <div id="Book" className="relative md:mx-4 mx-3 my-1 md:h-[80vh] h-[58vh] overflow-hidden bg-gradient-to-b from-green-950 to-green-800 rounded-3xl">     
      <motion.div 
        className="absolute right-0 -bottom-2 z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={circle} 
          alt="Luxury car"
          className="w-auto h-auto object-contain object-left-bottom md:opacity-100 opacity-0"
        />
      </motion.div>

      <motion.div 
        className="absolute left-0 -bottom-0 z-10"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={car5} 
          alt="Luxury car"
          className="md:w-auto w-[80%] h-auto object-contain object-left-bottom"
        />
      </motion.div>

      <motion.div 
        className="z-20 absolute right-[17%] md:top-20 top-10 mx-auto px-4 text-left"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-white">
          Book Your Ride <br className="hidden md:block"/> in Seconds
        </h2>
        <p className="text-white text-opacity-80 text-lg mb-8">
          Easy online booking, live tracking, and instant confirmation
        </p>
        <motion.button 
          className="bg-white text-green-800 font-semibold px-8 py-2 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default BookRideBanner;