// src/components/FeatureSection.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import quickBookingIcon from '../../../assets/images/icon1.png'; 
import localTrustIcon from '../../../assets/images/icon2.png';
import safeEcoFriendlyIcon from '../../../assets/images/icon3.png';
import availability247Icon from '../../../assets/images/icon4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const features = [
  {
    title: 'Quick<br/> booking',
    icon: quickBookingIcon,
    alt: 'Quick booking icon',
  },
  {
    title: 'Local <br/> trust',
    icon: localTrustIcon,
    alt: 'Local trust icon',
  },
  {
    title: 'Safe &<br/> eco-friendly <br/>rides',
    icon: safeEcoFriendlyIcon,
    alt: 'Safe and eco-friendly rides icon',
  },
  {
    title: '24/7 <br/> availability',
    icon: availability247Icon,
    alt: '24/7 availability icon',
  },
  {
    title: 'Quick booking',
    icon: quickBookingIcon,
    alt: 'Quick booking icon',
  },
  {
    title: 'Local <br/> trust',
    icon: localTrustIcon,
    alt: 'Local trust icon',
  },
];

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

const FeatureCard = ({ feature, index }) => (
  <motion.div 
    className="flex md:flex-row flex-col gap-3 items-center justify-between md:py-4 md:px-4 py-2 px-1 bg-[#EEEEEE] rounded-2xl 
               border-2 border-[#10551E] md:h-36 h-44 shadow-sm"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(16, 85, 30, 0.2)" }}
  >
    <motion.div 
      className="w-[60%]"
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
    >
      <h3
        className="text-lg capitalize text-green-800 whitespace-nowrap"
        dangerouslySetInnerHTML={{ __html: feature.title }}
      ></h3>
    </motion.div>
    <motion.div 
      className='md:w-[25%] flex-shrink-0'
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring" }}
    >
      <img 
        src={feature.icon} 
        alt={feature.alt} 
        className="h-auto w-full object-contain md:pl-0 pl-8"
      />
    </motion.div>
  </motion.div>
);

const FeatureSection = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isDesktop ? (
          <div className="grid grid-cols-4 gap-6">
            {features.slice(0, 4).map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        ) : (
          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView={2.3}
            spaceBetween={15}
            className="!py-4"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <FeatureCard feature={feature} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;