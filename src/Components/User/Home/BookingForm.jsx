import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { IoChevronDown, IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import gl from '../../../assets/images/gl.svg';

const BookingForm = () => {
  const form = useRef();
  const [isWhatsApp, setIsWhatsApp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupDateTime: '',
    vehicleType: '',
    tripType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     setIsLoading(true); 

    const serviceID = 'service_tozsver';
    const templateID = 'template_g6yve73';
    const publicKey = 'aev_PSLInSyEg9lYr';

    const templateParams = {
      ...formData,
      isWhatsApp: isWhatsApp ? 'Yes' : 'No',
    };

     emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((result) => {
      console.log('SUCCESS!', result.text);
      showNotification('success', 'Your reservation has been made! We will contact you shortly.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        pickupDateTime: '',
        vehicleType: '',
        tripType: '',
      });
      setIsWhatsApp(true);
    })
    .catch((error) => {
      console.log('FAILED...', error.text);
      showNotification('error', 'Something went wrong with the reservation. Please try again later.');
    })
    .finally(() => {
      setIsLoading(false); // stop loading
    });

  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="bg-gray-200/70 p-6 sm:p-10 rounded-3xl mt-5 mb-10 px-2 mx-4"
      id="BookNow"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-10" variants={itemVariants}>
          <h2 className="text-2xl sm:text-4xl text-center text-gray-800 inline-block">
            Your Taxi is Waiting —
          </h2>
          <span className="text-2xl bg-green-800 text-white md:font-bold font-medium md:py-3 py-2 px-6 rounded-full ml-4 inline-block mt-2 md:mt-0">
            Book Now
          </span>
        </motion.div>

        {/* Notification Banner */}
     

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <img
              src={gl}
              alt="Person booking a taxi on their phone"
              className="rounded-2xl md:w-[80%] h-auto object-cover"
            />
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="md:space-y-6 space-y-4 px-2"
            variants={itemVariants}
          >
               <AnimatePresence>
          {notification.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                notification.type === 'success'
                  ? 'bg-green-100 border border-green-500 text-green-800'
                  : 'bg-red-100 border border-red-500 text-red-800'
              }`}
            >
              {notification.type === 'success' ? (
                <IoCheckmarkCircle className="text-2xl flex-shrink-0" />
              ) : (
                <IoCloseCircle className="text-2xl flex-shrink-0" />
              )}
              <p className="font-medium">{notification.message}</p>
              <button
                onClick={() => setNotification({ show: false, type: '', message: '' })}
                className="ml-auto text-xl hover:opacity-70"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" name="fullName" value={formData.fullName} placeholder="Full name" onChange={handleChange} className="w-full bg-white rounded-full py-3 px-5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600" required />
              <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} className="w-full bg-white rounded-full py-3 px-5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600" required />
            </div>

            <input type="tel" name="phone" value={formData.phone} placeholder="Phone" onChange={handleChange} className="w-full bg-white rounded-full py-3 px-5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600" required />

            <div>
              <label className="text-gray-700 font-medium mb-3 block">Is This Your WhatsApp Number?</label>
              <div className="flex gap-4">
                <button type="button" onClick={() => setIsWhatsApp(true)} className={`py-2 px-8 rounded-full font-semibold transition-colors ${isWhatsApp ? 'bg-green-800 text-white' : 'bg-white text-gray-700'}`}>Yes</button>
                <button type="button" onClick={() => setIsWhatsApp(false)} className={`py-2 px-8 rounded-full font-semibold transition-colors ${!isWhatsApp ? 'bg-green-800 text-white' : 'bg-white text-gray-700'}`}>No</button>
              </div>
            </div>

            <input type="text" name="pickupDateTime" value={formData.pickupDateTime} onFocus={(e) => (e.target.type = "datetime-local")} onBlur={(e) => (e.target.type = "text")} placeholder="Pickup Date And Time" onChange={handleChange} className="w-full bg-white rounded-full py-3 px-5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600" required />

            <div className="relative">
              <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="w-full bg-white rounded-full py-3 px-5 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 cursor-pointer" required>
                <option value="" disabled>Vehicle Type</option>
                <option value="toyota etios">Toyota Etios</option>
                <option value="Suzuki Dzire">Suzuki Dzire</option>
                <option value="Innova Crysta">Innova Crysta</option>
                <option value="Mercedes Benz Luxury AC Coach">Mercedes Benz Luxury AC Coach</option>
                <option value="AC Air Bus">AC Air Bus</option>
                <option value="Executive Force AC Travellers">Executive Force AC Travellers</option>
                <option value="Toyota Innova">Toyota Innova</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none bg-green-800 text-white rounded-full m-1.5">
                <IoChevronDown />
              </div>
            </div>

            <div className="relative">
              <select name="tripType" value={formData.tripType} onChange={handleChange} className="w-full bg-white rounded-full py-3 px-5 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 cursor-pointer" required>
                <option value="" disabled>Trip Type</option>
                <option value="one-way">One Way</option>
                <option value="round-trip">Round Trip</option>
                <option value="airport">Airport Transfer</option>
                <option value="local">Local Package</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none bg-green-800 text-white rounded-full m-1.5">
                <IoChevronDown />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`md:w-full mt-2 w-[60%] bg-green-800 text-white md:font-bold text-lg md:text-base md:py-4 py-2 rounded-full transition-colors duration-300 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-green-900'
              }`}
            >
              {isLoading ? 'Reserving...' : 'Reserve Now'}
            </button>

          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default BookingForm;