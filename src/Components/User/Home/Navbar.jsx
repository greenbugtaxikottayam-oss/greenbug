"use client";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import fbg from '../../../assets/images/fbg.png';
import logo from '../../../assets/images/logo.png';
import logofo from '../../../assets/images/logo.png';

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#About" },
  { label: "Fleet", href: "#Fleet" },
  { label: "Contact us", href: "#Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuItemsRef = useRef([]);
  const menuBackgroundRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      const triggerPoint = window.innerHeight / 4; 
 
      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            closestSection = item.href.substring(1);
          }
        }
      });
      
      if (!closestSection && window.scrollY < window.innerHeight / 2) {
        closestSection = NAV_ITEMS[0].href.substring(1);
      }
      setActiveSection(closestSection);
    };
 
    window.addEventListener("scroll", handleScroll);
    handleScroll();
 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      gsap.fromTo(menuBackgroundRef.current, 
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.75, ease: "power3.inOut" }
      );

      gsap.fromTo(menuItemsRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, delay: 0.5, ease: "power3.out" }
      );
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuVariants = {
    hidden: { scaleY: 0, opacity: 0, originY: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 0.75, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, opacity: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  // Framer Motion variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    }
  };

  const contactButtonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const navItemVariants = {
    hover: { 
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const bookNowVariants = {
    hover: { 
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div style={{ height: '77px' }} className="">
      {!isOpen && (
        <motion.div 
          className="fixed top-0 left-0 right-0 z-[999] px-2 md:px-4"
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-8xl lg:px-4 mx-auto bg-white">
            <div className="container mx-auto flex items-center justify-between px-4 py-1">

              {/* Desktop contact information and button */}
              <div className="lg:flex hidden items-center space-x-16">
                <motion.div 
                  className="flex items-center space-x-3 bg-darkgreen py-2 px-2 rounded-full"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <motion.div 
                    className='flex border px-4 py-1 border-white rounded-full'
                    variants={contactButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <a href="tel:+918129994655" className="text-sm text-white">
                      +91 8129994655
                    </a>
                  </motion.div>
                  <motion.div 
                    className='flex border px-4 py-1 border-white rounded-full'
                    variants={contactButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <a href="tel:+918078591034" className="text-sm text-white">
                      +91 8078591034
                    </a>
                  </motion.div>
                  <motion.div 
                    className='flex border px-4 py-1 bg-white text-darkgreen rounded-full cursor-pointer'
                    variants={bookNowVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Book Now !
                  </motion.div>
                </motion.div>
              </div>
           
              {/* Logo */}
              <motion.div 
                className="flex justify-center cursor-pointer" 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                variants={logoVariants}
                whileHover="hover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <img src={logo} alt="Logo" className='w-auto md:h-16 h-16 py-2' />
              </motion.div>

              {/* Desktop navigation items */}
              <motion.div 
                className="lg:flex hidden items-center space-x-8"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`${activeSection === item.href.substring(1) ? 'border border-darkgreen' : 'bg-white text-darkgreen'} 
                    cursor-pointer text-sm font-normal px-5 py-2 rounded-full `}
                    variants={navItemVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.div 
                className={`lg:hidden rounded-md bg-darkgreen ${isOpen ? 'hidden' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuBackgroundRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-gradient-to-b from-darkgreen to-[#2E5B48] lg:hidden"
          >
            <motion.img
              src={fbg}
              alt="Background pattern"
              className="absolute inset-0 w-full h-full object-cover z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            <div className="flex flex-col h-full px-6 py-1">
              <div className="flex justify-between items-center pb-10">
                <div ref={el => menuItemsRef.current[0] = el} className="flex items-start pl-6">
                  <img src={logofo} alt="Logo" className="h-16 w-auto z-10 py-2" />
                </div>

                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white rounded-lg hover:bg-white/10 transition-colors z-10"
                  aria-label="Close menu"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-9 w-9 text-darkgreen bg-white rounded-lg m-1" />
                </motion.button>
              </div>
              <nav className="flex flex-col space-y-6 items-start px-6">
                {NAV_ITEMS.map((item, i) => (
                  <button
                    key={item.href}
                    ref={el => menuItemsRef.current[i + 1] = el}
                    onClick={() => {
                      scrollToSection(item.href.substring(1))
                    }}
                    className={`text-xl z-10 ${
                      activeSection === item.href.substring(1)
                        ? 'text-white font-semibold'
                        : 'text-white '
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div 
                  ref={el => menuItemsRef.current[NAV_ITEMS.length + 2] = el}
                  className="text-white text-start space-y-6 mt-auto z-10 pt-10"
                >
                  <div className="space-y-1">
                    <h3 className="font-medium text-xl pb-1">Contact</h3>
                    <a href="tel:+918129994655" className="text-base hover:text-white">
                      +91 8129994655 , 
                    </a>
                    <br />
                    <a href="tel:+918078591034" className="text-base hover:text-white">
                      +91 8078591034
                    </a>
                  </div>
                  <div className="space-y-0">
                    <h3 className="font-medium text-lg">Address</h3>
                    <p className="text-base">
                      Kottayam, Kerala
                    </p>
                  </div>
                  <div className="space-y-0">
                    <p className="text-base">greenbugtaxikottayam@gmail.com</p>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;