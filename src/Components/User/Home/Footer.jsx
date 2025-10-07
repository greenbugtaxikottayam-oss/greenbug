// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import footerbg from '../../../assets/images/footerbg.png';
import logo from '../../../assets/images/logo.png';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative text-white rounded-t-3xl mx-4 my-4 md:mx-8 md:my-8 overflow-hidden py-12 md:py-16 lg:py-10 md:px-20 px-6">
      <motion.img
        src={footerbg}
        loading="lazy"
        alt="Green pattern background"
        className="absolute inset-0 z-0 object-cover w-full h-full rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 md:mb-12 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start text-left">
            <motion.img 
              src={logo} 
              alt="logo" 
              className='w-auto h-auto pb-4 cursor-pointer' 
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-gray-200 text-sm max-w-xs lg:pr-10 leading-relaxed">
              Welcome To Green Bug Taxi Kottayam, Your One-Stop Solution For Reliable
              Taxi Booking In The Heart Of Kerala.
            </p>

            <div className="text-left mt-8 md:mt-0 md:hidden block">
              <h3 className="text-lg md:mb-5 mb-1">Get the latest information</h3>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-grow bg-white bg-opacity-90 text-gray-800 rounded-l-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm" 
                />
                <button 
                  type="submit" 
                  className="bg-green-500 text-white rounded-r-full px-4 flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <FiSend className="text-lg" />
                </button>
              </form>
            </div>

            <div className="md:flex space-x-4 mt-6 hidden">
              <motion.a 
                href="https://www.facebook.com/share/1CsG1sXFb2/" 
                className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/greenbug_taxi__kottayam?igsh=ZGZyZTgxYm44cHc2" 
                className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FaInstagram />
              </motion.a>
              {/* <motion.a 
                href="#" 
                className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FaYoutube />
              </motion.a> */}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="text-left mt-7 md:mt-0">
            <h3 className="text-lg font-bold md:mb-5 mb-1">Navigation</h3>
            <ul className="md:space-y-3 space-y-2 text-sm text-gray-200">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-green-300 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('About')} 
                  className="hover:text-green-300 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('Fleet')} 
                  className="hover:text-green-300 transition-colors text-left"
                >
                  Fleet
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('Contact')} 
                  className="hover:text-green-300 transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('BookNow')} 
                  className="hover:text-green-300 transition-colors text-left"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-left mt-8 md:mt-0">
            <h3 className="text-lg font-bold md:mb-5 mb-1">Contact</h3>
            <div className="text-sm text-gray-200">
              <a href="tel:+918129994655" className="hover:text-green-300 transition-colors">
                8129994655
              </a>
              , 
              <a href="tel:+918078591034" className="hover:text-green-300 transition-colors">
                {' '}8078591034
              </a>
            </div>
            <h3 className="text-lg font-bold md:mb-5 mb-1 mt-9">Address</h3>
            <p className="text-sm text-gray-200">Kottayam, Kerala</p>
          </div>

          <div className="flex space-x-4 md:hidden">
            <motion.a 
             href="https://www.facebook.com/share/1CsG1sXFb2/"
              className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a 
             href="https://www.instagram.com/greenbug_taxi__kottayam?igsh=ZGZyZTgxYm44cHc2"  
              className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <FaInstagram />
            </motion.a>
            {/* <motion.a 
              href="#" 
              className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <FaYoutube />
            </motion.a> */}
          </div>

          {/* Column 4: Newsletter */}
          <div className="text-center md:text-left mt-8 md:mt-0 md:block hidden">
            <h3 className="text-lg font-bold md:mb-5 mb-1">Get the latest information</h3>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-grow bg-white bg-opacity-90 text-gray-800 rounded-l-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-300 text-sm" 
              />
              <button 
                type="submit" 
                className="bg-green-500 text-white rounded-r-full px-4 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FiSend className="text-lg" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      
      <hr className='h-[1px] absolute bottom-16 left-0 right-0 border-white/50'/>
      <div className="absolute bottom-6 right-14 md:right-20 md:text-right text-sm text-white font-light">
        <p>User Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;