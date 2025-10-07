import React from 'react';
import { motion } from 'framer-motion';
import banner from '../../../assets/images/banner.png';
import car1 from '../../../assets/images/car1.png';
import { FaWhatsapp } from "react-icons/fa";

function Banner() {

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 80;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });

      setActiveSection(id);
      setIsOpen(false);
    }
  };

  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const taglineVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headlineVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonsVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const carVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
     y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.7
      }
    }
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const whatsappButtonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 1)",
      color: "#166534",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative md:mx-4 mx-2 my-1 md:h-screen h-[67vh] overflow-hidden rounded-xl" id="home">
      <motion.img
        src={banner}
        loading="lazy"
        alt="Green pattern background"
        className="absolute inset-0 object-cover w-full h-full"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Main content wrapper */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-start h-full px-4 text-center pt-14 md:pt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Sub-headline / Tagline */}
        <motion.div 
          className="bg-white/30 bg-opacity-10 text-white text-xs px-5 py-1.5 rounded-full md:mb-6 mb-3 "
          variants={taglineVariants}
          whileHover={{ scale: 1.05 }}
        >
          Green Bug Taxi - Fast as a Bug, Safe as a Friend
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="text-4xl text-white sm:text-5xl md:text-5xl lg:text-6xl md:mb-7  mb-4 max-w-3xl"
          variants={headlineVariants}
        >
          Ride Smart, Ride<br/> Green in Kottayam
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-white text-opacity-80 text-sm md:text-base md:mb-10 mb-6  max-w-3xl"
          variants={descriptionVariants}
        >
          Book your taxi instantly with Green Bug Taxi – the fastest, most reliable way to travel across Kottayam city. Safe rides, eco-friendly fleet, and trusted local drivers.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8"
          variants={buttonsVariants}
        >
          <motion.button 
            onClick={() => scrollToSection('BookNow')} 
            className="bg-white text-green-800 px-8 py-1 rounded-full text-lg shadow-lg hover:bg-gray-100 transition duration-300"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book Now!
          </motion.button>
          
          <motion.a
          href="https://wa.me/918129994655" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-1 rounded-full text-lg shadow-lg hover:bg-white hover:text-green-800 transition duration-300"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}   
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <FaWhatsapp className='w-5 h-5' />
          </motion.div>
          Get a Quote
        </motion.a>

        </motion.div>

      </motion.div>

      {/* Car Image with Animation */}
      <motion.div 
        className="w-full absolute bottom-0 left-[50%] md:-translate-x-[30%] -translate-x-[50%]"
        variants={carVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img 
          src={car1} 
          alt="Green Bug Taxi Car" 
          className="w-auto h-auto object-contain"
        />
      </motion.div>
    </div>
  );
}

export default Banner;