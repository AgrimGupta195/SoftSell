import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "AutoCAD",
    "Windows OS",
    "Salesforce",
    "Oracle Database",
    "VMWare",
    "SAP",
    "Other"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) newErrors.company = "Company is required";
    
    if (!formData.licenseType) newErrors.licenseType = "Please select a license type";
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsLoading(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
      }, 1500);
    } else {
      setErrors(formErrors);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 }
    }
  };

  const loadingButtonVariants = {
    loading: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        duration: 0.8
      }
    }
  };

  const successIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Fill out the form below and we'll help you get the best value for your software licenses.
            </p>
          </motion.div>
          
          {submitted ? (
            <motion.div 
              className={`p-6 rounded-lg text-center ${darkMode ? 'bg-green-800' : 'bg-green-100'} mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                variants={successIconVariants}
                initial="hidden"
                animate="visible"
              >
                <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Thank You!
              </motion.h3>
              <motion.p 
                className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                We've received your inquiry and will get back to you within 24 hours.
              </motion.p>
              <motion.button 
                onClick={() => setSubmitted(false)} 
                className="mt-4 text-blue-600 hover:underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit another inquiry
              </motion.button>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Name *
                  </label>
                  <motion.div
                    variants={shakeVariants}
                    animate={errors.name ? "shake" : ""}
                  >
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'}`}
                      placeholder="Your name"
                    />
                  </motion.div>
                  {errors.name && (
                    <motion.p 
                      className="mt-1 text-red-500 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Email *
                  </label>
                  <motion.div
                    variants={shakeVariants}
                    animate={errors.email ? "shake" : ""}
                  >
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'}`}
                      placeholder="Your email"
                    />
                  </motion.div>
                  {errors.email && (
                    <motion.p 
                      className="mt-1 text-red-500 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    Company *
                  </label>
                  <motion.div
                    variants={shakeVariants}
                    animate={errors.company ? "shake" : ""}
                  >
                    <input 
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.company ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'}`}
                      placeholder="Your company"
                    />
                  </motion.div>
                  {errors.company && (
                    <motion.p 
                      className="mt-1 text-red-500 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {errors.company}
                    </motion.p>
                  )}
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="licenseType" className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    License Type *
                  </label>
                  <motion.div
                    variants={shakeVariants}
                    animate={errors.licenseType ? "shake" : ""}
                  >
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${errors.licenseType ? 'border-red-500' : darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'}`}
                    >
                      <option value="">Select license type</option>
                      {licenseTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </motion.div>
                  {errors.licenseType && (
                    <motion.p 
                      className="mt-1 text-red-500 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      {errors.licenseType}
                    </motion.p>
                  )}
                </motion.div>
              </div>
              
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="message" className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 rounded-lg border resize-none ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'}`}
                  placeholder="Tell us about your license requirements or any questions you have"
                ></textarea>
              </motion.div>
              
              <motion.div className="text-center" variants={itemVariants}>
                <motion.button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 relative overflow-hidden"
                  variants={isLoading ? loadingButtonVariants : buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate={isLoading ? "loading" : "idle"}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Get a Valuation"
                  )}
                </motion.button>
                <motion.p 
                  className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  We'll get back to you within 24 hours with a free valuation.
                </motion.p>
              </motion.div>
            </motion.form>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;