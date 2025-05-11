// App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <HowItWorks darkMode={darkMode} />
      <WhyChooseUs darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <ChatWidget darkMode={darkMode} />
    </div>
  );
}

export default App;