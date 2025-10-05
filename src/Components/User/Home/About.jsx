// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import car2 from '../../../assets/images/car2.png';
import car3 from '../../../assets/images/car3.png';
import car4 from '../../../assets/images/car4.png';

const About = () => {
  return (
    <section className="bg-white md:py-16 py-6 px-4 md:px-8 border-b border-gray-200" id="About">
      <div className='max-w-7xl mx-auto'>
        <motion.div 
          className="inline-block border border-[#10551E] text-[#10551E] text-sm font-base px-4 py-2 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Company
        </motion.div>

        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-4 md:pt-0">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-gray-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-[#10551E] mb-8">
              Green Bug Taxi <br /> Kottayam
            </h2>
            <p className="mb-4 max-w-xl font-light">
              Welcome to Green Bug Taxi Kottayam, your one-stop solution for reliable
              taxi booking in the heart of Kerala. Our mission is simple – to provide the
              people of Kottayam with a smarter, safer, and greener way to travel.
            </p>
            <p className="mb-4 max-w-xl font-light">
              In today's fast-paced world, time matters. That's why we've designed our
              service to be quick, convenient, and always available. With just a few
              clicks, you can book your ride online and have a trusted local driver at your
              doorstep. From short city trips to urgent travel needs, we ensure every
              journey is smooth, on time, and affordable.
            </p>
            <p className="mb-4 max-w-xl font-light">
              What makes us unique is our commitment to local service with a modern
              touch. We combine advanced booking technology with friendly,
              professional drivers who know Kottayam's roads like the back of their
              hand. Every ride with Green Bug Taxi means clean vehicles, safe routes,
              transparent pricing, and customer-first service.
            </p>
            <motion.button 
              className="bg-[#10551E] text-white px-8 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now!
            </motion.button>
          </motion.div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 md:gap-6 gap-4 md:p-4">
            <motion.div 
              className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src={car2}
                alt="Black SUV"
                className="w-auto h-auto object-contain"
              />
            </motion.div>

            <motion.div 
              className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={car3}
                alt="Car from above"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src={car4}
                alt="Green sports car"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;