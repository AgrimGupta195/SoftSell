import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-10 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-xl font-bold text-blue-500">SoftSell</span>
            </div>
            <p className="mb-4 text-sm">
              The leading marketplace for software license resale. Get the best value for your unused licenses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-blue-400">How It Works</a></li>
              <li><a href="#why-choose-us" className="hover:text-blue-400">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2 text-blue-400"></i>
                <span>123 Tech Plaza, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2 text-blue-400"></i>
                <span>info@softsell.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-2 text-blue-400"></i>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;