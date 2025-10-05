import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreed: false,
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ show: false, type: '', message: '' });

    const serviceID = 'service_tozsver';
    const templateID = 'template_gpzl4cs';
    const publicKey = 'aev_PSLInSyEg9lYr';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus({
          show: true,
          type: 'success',
          message: 'Thank you for your message! It has been sent successfully.',
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          agreed: false,
        });

        // ✅ Hide the status message after 3 seconds
        setTimeout(() => {
          setStatus({ show: false, type: '', message: '' });
        }, 3000);
      })
      .catch(() => {
        setStatus({
          show: true,
          type: 'error',
          message: 'Something went wrong. Please try again later.',
        });

        // ✅ Hide error after 3 seconds too
        setTimeout(() => {
          setStatus({ show: false, type: '', message: '' });
        }, 3000);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="bg-white py-6 md:py-16 lg:py-20 px-4" id="Contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-50 gap-10 items-start">
        
        {/* Left Column */}
        <motion.div
          className="text-gray-700"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700">Contact Us</h2>
          <p className="text-base text-gray-600 mt-4">
            We're here to help with your every step. Reach out anytime!
          </p>
          <div className="md:mt-12 mt-4 md:space-y-14 space-y-4">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 5 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-gray-700 rotate-45">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
              <a href="mailto:greenbugtaxikottayam@gmail.com"
                className="text-xl text-gray-700 font-medium tracking-wide hover:text-dark-red transition-colors">
                greenbugtaxikottayam@gmail.com
              </a>
            </motion.div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Mobile</h3>
              <p className="text-gray-600">8129994655</p>
              <p className="text-gray-600">8078591034</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Address</h3>
              <p className="text-gray-600">Kottayam, Kerala</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="bg-green-800 p-6 lg:p-8 md:rounded-2xl rounded-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:font-medium text-white md:mb-8 mb-4">Write us a message</h3>

          {/* ✅ Status Message */}
          <AnimatePresence>
            {status.show && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`mb-4 p-3 rounded-xl text-center font-medium ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-500'
                    : 'bg-red-100 text-red-800 border border-red-500'
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>

          <form ref={form} onSubmit={handleSubmit} className="md:space-y-6 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-6 gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full bg-white md:rounded-full rounded-lg md:py-2 py-4 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full bg-white md:rounded-full rounded-lg md:py-2 py-4 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-white md:rounded-full rounded-lg md:py-2 py-4 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="w-full bg-white rounded-2xl md:py-2 py-4 px-5 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            ></textarea>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="sr-only"
                required
              />
              <label htmlFor="agreed" className="flex items-center cursor-pointer">
                <div className={`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center transition-colors ${formData.agreed ? 'bg-white' : 'bg-transparent'}`}>
                  {formData.agreed && <div className="w-2.5 h-2.5 bg-green-800 rounded-full"></div>}
                </div>
                <span className="ml-3 text-white text-sm">I Agree The Privacy Policy</span>
              </label>
            </div>

            {/* ✅ Updated Button */}
            <motion.button
              type="submit"
              disabled={isSending}
              className={`w-full mt-4 bg-transparent md:border-2 border border-white text-white font-bold md:py-2 py-4 md:rounded-full rounded-lg transition-colors duration-300 ${
                isSending
                  ? 'opacity-70 cursor-not-allowed'
                  : 'hover:bg-white hover:text-green-800'
              }`}
              whileHover={!isSending ? { scale: 1.02 } : {}}
              whileTap={!isSending ? { scale: 0.98 } : {}}
            >
              {isSending ? 'Sending...' : 'Send'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
