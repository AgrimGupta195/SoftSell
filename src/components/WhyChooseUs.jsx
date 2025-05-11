import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = ({ darkMode }) => {
  const reasons = [
    {
      icon: "fas fa-bolt",
      title: "Fast Process",
      description: "Get valuations within minutes and payment within 24 hours of accepting an offer."
    },
    {
      icon: "fas fa-lock",
      title: "Secure Transactions",
      description: "Bank-level encryption and secure license transfer protocols keep your data safe."
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Top Dollar Value",
      description: "Our marketplace algorithms ensure you get the best possible price for your licenses."
    },
    {
      icon: "fas fa-headset",
      title: "Expert Support",
      description: "Our license specialists are available to help you through every step of the process."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="why-choose-us" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose SoftSell</h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We're revolutionizing the software license resale market with our innovative platform.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <motion.div 
                  className="mr-4 text-blue-600"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <i className={`${reason.icon} text-2xl`}></i>
                </motion.div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </motion.div>
              <motion.p 
                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {reason.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
