import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-10 py-4 ${scrolled ? 'shadow-lg' : ''} ${darkMode ? 'bg-gray-900' : 'bg-white shadow'}`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="text-xl font-bold text-blue-600">SoftSell</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-6">
          {['How It Works', 'Why Choose Us', 'Testimonials', 'Contact'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`hover:text-blue-600 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {darkMode ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>
          
          <motion.a
            href="#contact"
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          
          <motion.button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`md:hidden overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto px-4 py-2">
              {['How It Works', 'Why Choose Us', 'Testimonials', 'Contact'].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block py-2 hover:text-blue-600 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  variants={mobileItemVariants}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="block py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center transition duration-300"
                variants={mobileItemVariants}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;