import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      quote: "SoftSell made it incredibly easy to get value back from our unused Adobe licenses. The process was smooth, and we received payment within hours of accepting the offer.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "CreativeWorks Agency"
    },
    {
      quote: "As a software asset manager, I've tried several license resale platforms, but SoftSell stands out with their transparent pricing and swift service. Highly recommended!",
      name: "David Chen",
      role: "Software Asset Manager",
      company: "TechGrowth Enterprises"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="testimonials" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't just take our word for it. Here's what companies using SoftSell have to say.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} shadow`}
              variants={itemVariants}
            >
              <div className="text-blue-500 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className={`mb-6 text-lg italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;