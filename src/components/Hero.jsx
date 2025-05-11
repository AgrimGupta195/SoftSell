import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="hero" className={`pt-24 pb-16 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
      <motion.div 
        className="container mx-auto px-4 flex flex-col md:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            <motion.span 
              className="text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 }
              }}
            >
              Unlock
            </motion.span>{" "}
            the Value of Your{" "}
            <motion.span 
              className="text-blue-600"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { delay: 0.8, duration: 0.5 }
              }}
            >
              Software Licenses
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            variants={itemVariants}
          >
            The fastest, safest way to sell unused software licenses and get top dollar. Instant valuations, quick payments.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sell My Licenses
            </motion.a>
            
            <motion.a 
              href="#how-it-works" 
              className={`border border-blue-600 font-semibold py-3 px-6 rounded-lg text-center transition duration-300 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-blue-600 hover:bg-blue-50'}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="md:w-1/2"
          variants={imageVariants}
        >
          <motion.img 
            src="https://denovosoftware.com/wp-content/uploads/publishingthoughtsharing.png" 
            alt="Software license marketplace" 
            className="rounded-lg shadow-xl w-full"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;