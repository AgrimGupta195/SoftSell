import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = ({ darkMode }) => {
  const steps = [
    {
      icon: "fas fa-upload",
      title: "Upload License",
      description: "Simply share your license details through our secure portal."
    },
    {
      icon: "fas fa-calculator",
      title: "Get Valuation",
      description: "Receive an instant market-based valuation within minutes."
    },
    {
      icon: "fas fa-money-bill-wave",
      title: "Get Paid",
      description: "Accept our offer and get paid within 24 hours via your preferred method."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.4,
        duration: 0.5
      }
    }
  };

  return (
    <section id="how-it-works" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We've simplified the process of selling your software licenses, making it quick and hassle-free.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`p-6 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} hover:shadow-lg`}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="inline-block p-4 rounded-full bg-blue-600 text-white mb-4"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className={`${step.icon} text-2xl`}></i>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                variants={titleVariants}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                variants={descriptionVariants}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;