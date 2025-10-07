// src/components/FeatureSection.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import quickBookingIcon from '../../../assets/images/icon1.png'; 
import localTrustIcon from '../../../assets/images/icon2.png';
import safeEcoFriendlyIcon from '../../../assets/images/icon3.png';
import availability247Icon from '../../../assets/images/icon4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

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
    className="flex md:flex-row flex-col gap-3 items-center justify-between md:py-4 md:px-4 py-2 px-1 bg-[#EEEEEE]/80 rounded-2xl 
               border-1 border-[#10551E] md:h-36 h-38 shadow-sm"
  >
    <div 
      className="md:w-[60%] w-[90%] "
    >
      <h3
        className="md:text-lg text-xl capitalize text-green-800 whitespace-nowrap leading-tight"
        dangerouslySetInnerHTML={{ __html: feature.title }}
      ></h3>
    </div>
    <motion.div 
      className='md:w-[25%] md:flex-shrink-0'
    >
      <img 
        src={feature.icon} 
        alt={feature.alt} 
        className="h-auto w-full object-contain md:pl-0 pl-9"
      />
    </motion.div>
  </motion.div>
);

const FeatureSection = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <section className="md:py-12 py-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isDesktop ? (
          <div className="grid grid-cols-4 gap-6">
            {features.slice(0, 4).map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        ) : (
           <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className=''>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            slidesPerView={2.4}
            spaceBetween={15}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            className="!py-4"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
               
                <FeatureCard feature={feature} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;