import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import contactEmailImg from '../../src/assets/images/contact-email.svg'; // Update with your actual image path

const ContactEmail = () => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const inputButtonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="bg-orange-400 py-16 flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-7 md:px-14 flex flex-col lg:flex-row items-center gap-8">
        
        {/* Image Section with Motion */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src={contactEmailImg}
            alt="Eating Donut"
            className="w-80 h-auto"
          />
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="w-full lg:w-1/2 text-white text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold mb-4">
            Get more discount if you order from us
          </h2>
          <p className="mb-8">
            Join with us then you must have get a discount and get promo from us to you, enjoy and happy to order.
          </p>

          {/* Email Input and Button with Motion */}
          <motion.div
            className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-lg"
            initial="hidden"
            animate="visible"
            variants={inputButtonVariants}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow p-3 text-gray-800 outline-none rounded-lg"
            />
            <button className="bg-gray-800 text-white px-6 py-3 mt-2 sm:mt-0 sm:ml-2 rounded-lg">
              Get
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactEmail;
