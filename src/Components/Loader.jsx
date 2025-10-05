import React from 'react';
import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div 
      className="fixed inset-0 bg-white flex flex-col items-center justify-center -pt-10 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Lotus-inspired Loading Animation */}
      <div className="relative">
        {/* Outer petals */}
    
        
        {/* Inner petals */}
        
        
        {/* Center dot */}
        <motion.div
          className="absolute w-3 h-3 bg-[#10551E] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [0.8, 1.3, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Green Bug Taxi Text Animation */}
      <motion.div 
        className="mt-12 flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {['G', 'R', 'E', 'E', 'N',' ','B','U','G'].map((letter, i) => (
          // --- THE FIX IS HERE ---
          <motion.span
            key={i}
            className="text-4xl font-playfair font-bold text-darkgreen tracking-widest"
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              // delay: i * 0.01,
              ease: "easeInOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Loading Text */}
      <motion.p 
        className="mt-6 text-darkgreen font-helvetica tracking-widest text-sm"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading ...
      </motion.p>

      {/* Progress Bar */}
      <div className="mt-8 w-48 h-1 bg-green-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#10551E]/30 to-[#10551E] rounded-full"
          animate={{
            x: [-200, 200],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  )
}

export default Loader;