import React from 'react';
import { motion } from 'framer-motion';
import deliveryFoodImg from '../../assets/images/delivery-food.svg';
import easyOrderImg from '../../assets/images/easy-order.svg';
import fastestDeliveryImg from '../../assets/images/fastest-delivery.svg';

const OurServices = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 }, // Keadaan awal sebelum muncul di viewport
    visible: { opacity: 1, y: 0 },  // Animasi saat muncul di viewport
  };

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center py-12">
      {/* Background Lingkaran Oranye - Menyesuaikan ukuran dan posisi berdasarkan ukuran layar */}
      <div className="absolute -top-10 md:-top-20 left-1/4 md:left-1/3 w-64 h-64 md:w-96 md:h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
      <div className="absolute -bottom-10 md:-bottom-20 right-1/4 md:right-1/4 w-52 h-52 md:w-80 md:h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>

      <motion.div
        className="container mx-auto text-center relative z-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={sectionVariants}
      >
        {/* Header Section */}
        <h3 className="text-orange-500 text-sm mb-2">- Our Services -</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our serve just for you</h2>

        {/* Service Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white bg-transparent rounded-lg transition-transform transform hover:scale-105"
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={deliveryFoodImg} alt="Delivery Food" className="h-40 sm:h-64 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Delivery Food</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur</p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white bg-transparent rounded-lg transition-transform transform hover:scale-105"
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={easyOrderImg} alt="Easy to order" className="h-40 sm:h-64 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Easy to order</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur</p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="flex flex-col items-center text-center p-6 bg-white bg-transparent rounded-lg transition-transform transform hover:scale-105"
            variants={sectionVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={fastestDeliveryImg} alt="Fastest Delivery" className="h-40 sm:h-64 mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">Fastest Delivery</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;
