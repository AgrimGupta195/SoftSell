import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you with SoftSell today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const sampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does payment take?",
    "Is my data secure?"
  ];

  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    const userMessage = { text: inputValue, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const userInput = userMessage.text.toLowerCase();
      let botResponse = "I'm not sure about that. Can you try asking something else?";
      
      if (userInput.includes("sell") || userInput.includes("how") && userInput.includes("work")) {
        botResponse = "To sell your license, simply fill out the form on our website with details about your software. We'll provide a valuation within minutes, and you can accept or decline. If you accept, we'll guide you through the secure transfer process and send payment within 24 hours.";
      } else if (userInput.includes("accept") || userInput.includes("type")) {
        botResponse = "We accept licenses for most major software including Microsoft Office, Adobe Creative Cloud, AutoCAD, Windows OS, VMware, Oracle, Salesforce, and many more. If you have something specific, just ask!";
      } else if (userInput.includes("payment") || userInput.includes("long") || userInput.includes("paid")) {
        botResponse = "Once your license transfer is verified, we process payments within 24 hours via bank transfer, PayPal, or other preferred payment methods.";
      } else if (userInput.includes("secure") || userInput.includes("data") || userInput.includes("safe")) {
        botResponse = "Absolutely! We use bank-level encryption for all transactions. Your license data is only used for valuation purposes and is never shared with third parties without your consent.";
      } else if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("hey")) {
        botResponse = "Hello! Welcome to SoftSell. How can I assist you with software license sales today?";
      }
      
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 1500);
  };

  const handleSampleQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition duration-300"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed bottom-20 right-4 w-80 sm:w-96 h-96 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl flex flex-col z-10 overflow-hidden`}
          >
            <div className="bg-blue-600 text-white p-4 flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 mr-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">SoftSell Assistant</h3>
                <p className="text-xs text-blue-100">Online | Usually replies instantly</p>
              </div>
            </div>
            <div className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : darkMode 
                          ? 'bg-gray-700 text-white' 
                          : 'bg-white text-gray-800 shadow'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className={`rounded-lg px-4 py-2 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800 shadow'}`}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            <div className={`px-4 py-2 overflow-x-auto ${darkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'}`}>
              <p className={`text-xs mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Suggested questions:</p>
              <div className="flex space-x-2">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSampleQuestion(question)}
                    className={`whitespace-nowrap px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className={`p-4 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className={`flex-1 rounded-l-lg px-4 py-2 focus:outline-none ${
                    darkMode ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' : 'bg-gray-100 text-gray-800 border-gray-200'
                  } border`}
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg transition duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;