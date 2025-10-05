// src/components/VehicleFleet.jsx

import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import f1 from '../../../assets/images/f1.png';
import f2 from '../../../assets/images/f2.png';
import f3 from '../../../assets/images/f3.png';
import f4 from '../../../assets/images/f4.png';
import f5 from '../../../assets/images/f5.png';
import f6 from '../../../assets/images/f6.png';
import f7 from '../../../assets/images/f7.png';
import f8 from '../../../assets/images/f8.png';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const vehicles = [
  {
    name: 'Toyota Etios',
    image: f1,
    description: 'The Toyota Etios is one of the most trusted choices in the taxi segment, known for its reliability and comfort. Its spacious cabin, large boot capacity and smooth suspension make it ideal for both city rides and long-distance travel. Passengers enjoy a comfortable ride with good legroom, headroom and boot space. White drivers benefit from easy handling and strong engine performance.',
    features: ['Seating capacity: 4', 'Luggage: 3 Large Suit Case + 1 Traveler Bag'],
  },
  {
    name: 'Suzuki Dzire',
    image: f2,
    description: 'One of the most sought out car for city travel and kerala tour packages alike, this is an ideal & compact sedan for cruising through the landscapes and beaches of kerala for you and your family.',
    features: ['Seating capacity: 4', 'Luggage: 2 Suitcase + 1 Traveler Bag'],
  },
  {
    name: 'Innova Crysta',
    image: f3,
    description: 'Experience seamless travel in kerala with our premier taxi fleet, featuring the toyota innova crysta. Renowned for its spacious interiors, reliability and performance, the Innova Crysta is the perfect companion for your journeys, whether for business or leisure. Trust us to elevate your travel experience and make a statement.',
    features: ['Seating capacity: 7', 'Luggage: 3 Suitcase + 1 Traveler Bag'],
  },
  {
    name: 'Mercedes Benz Luxury AC Coach',
    image: f4,
    description: 'Our greenbug taxi kottayam depot has a range of mercedes benz luxury coaches, with a seating capacity of either 35 seats or 45 seats. these vehicles are not only luxury but are equipped with modern amenities and safety features.',
  },
  {
    name: 'AC Air Bus',
    image: f5,
    description: 'If you are looking for a comfortable and economical way to travel in kerala with a large group of people, you might want to consider our range of air buses having seating capacity from 30 to 49 seater.',
  },
  {
    name: 'Executive Force AC Travellers',
    image: f6,
    description: 'Force Traveller is India\'s most sought after people mover, it comes in 12,14,17,20 and 26 seater configuration.',
  },
  {
    name: 'Toyota Innova',
    image: f7,
    description: 'The Toyota Innova (including models like the Crysta and Hycross) is widely praised for its excellent reliability, spaciousness for families, and strong performance, making it a top choice for comfortable long trips and everyday use.The Innova is an outstanding choice for those prioritizing comfort and space',
  },
  {
    name: 'Executive Force AC Travellers',
    image: f8,
    description: 'Force Traveller is India\'s most sought after people mover, it comes in 12,14,17,20 and 26 seater configuration.',
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

const VehicleCard = ({ vehicle, index }) => (
  <motion.div 
    className="bg-white rounded-xl relative border border-gray-400 overflow-hidden md:h-full h-140 flex flex-col"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    whileHover={{ y: -5, boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
  >
    <div className='absolute top-0 right-0 rounded-bl-3xl md:h-64 h-52 w-60 bg-green-700 '/>
    <div className="relative h-48 sm:h-56 md:h-64 flex items-center justify-center rounded-t-xl overflow-hidden">
      <img
        src={vehicle.image}
        alt={vehicle.name}
        className="object-contain object-center w-auto h-auto"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col justify-between md:mt-0 mt-2">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle.name}</h3>
        <p className="text-gray-600 leading-relaxed mb-4 md:text-base text-sm">{vehicle.description}</p>
        {vehicle?.features && ( 
        <p className="text-gray-800 font-semibold mb-2 text-lg">Features</p>
        )}
        <ul className="list-disc list-inside text-gray-600 md:text-base text-sm">
          {vehicle?.features?.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const VehicleFleet = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <section className="bg-white py-10 sm:py-24 px-4 md:px-0" id="Fleet">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block border border-[#10551E] text-[#10551E] text-sm font-base px-4 py-2 rounded-full lg:mb-8 mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Fleet
          </motion.div>
          <motion.h2 
            className="text-3xl md:text-5xl text-[#10551E] lg:mb-8 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Modern & Varied Fleet Of Vehicles <br className='md:block hidden '/> At Your Service.
          </motion.h2>
          <motion.p 
            className="text-gray-500 max-w-4xl mx-auto md:text-lg text-sm font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Green Bug Taxi Kottayam, we tout a diverse and well-maintained fleet of vehicles to suit your every need. 
            Whether you are looking for a budget-friendly and spacious sedan, a luxurious SUV, or a large coach, we have it all.
          </motion.p>
        </div>

        {isDesktop ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={index} vehicle={vehicle} index={index} />
            ))}
          </div>
        ) : (
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              loop={true}
              centeredSlides={true}
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              className="!py-4"
            >
              {vehicles.map((vehicle, index) => (
                <SwiperSlide key={index}>
                  <VehicleCard vehicle={vehicle} index={0} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center items-center gap-4 mt-0">
              <motion.button 
                className="swiper-button-prev-custom p-3 rounded-lg border border-green-700 text-white bg-darkgreen hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoIosArrowBack size={20} />
              </motion.button>
              <motion.button 
                className="swiper-button-next-custom p-3 rounded-lg border border-green-700 text-white bg-darkgreen hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoIosArrowForward size={20} />
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleFleet;