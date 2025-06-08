import React from 'react';
import { motion } from 'framer-motion';
import CV from '../../assets/cv/cv.pdf';
import profileImg from '../../assets/img/Cortez, Francis Emil M..jpg';

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-7xl w-full">
        {/* Left column - Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-full object-cover w-full h-full shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Right column - Text content */}
        <motion.div 
          className="w-full md:w-1/2 text-left space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="space-y-2">
            <motion.h2 
              className="text-3xl md:text-4xl text-gray-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi! I'm
            </motion.h2>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Francis Emil M. Cortez
            </motion.h1>
          </div>
          
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Aspiring Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-md md:text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Passionate web developer with strong computer literacy, actively expanding my development skills.
          </motion.p>
          
          <motion.div 
            className="pt-4 pb-8 md:pt-6 md:pb-12 flex flex-row gap-4 w-full justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <motion.a 
              href={CV}
              download="Francis_Cortez_CV.pdf"
              className="inline-block px-6 sm:px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 