import React from 'react';
import { motion } from 'framer-motion';
import deliveryFoodImg from '../../assets/images/delivery-food.svg';
import easyOrderImg from '../../assets/images/easy-order.svg';
import fastestDeliveryImg from '../../assets/images/fastest-delivery.svg';

const OurServices = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 }, // Keadaan awal sebelum muncul di viewport, termasuk scale
    visible: { opacity: 1, y: 0, scale: 1 },  // Animasi saat muncul di viewport, scale menjadi 1
  };

  // Array untuk setiap card
  const services = [
    {
      img: deliveryFoodImg,
      title: 'Delivery Food',
      description: 'With our reliable delivery service, enjoy delicious meals brought straight to your doorstep. We ensure that your food arrives fresh and on time, so you can savor every bite without any hassle.',
      delay: 0.1,
    },
    {
      img: easyOrderImg,
      title: 'Easy to order',
      description: 'Ordering your favorite meals has never been easier. Our intuitive platform allows you to browse menus, customize your order, and place it with just a few clicks. We aim to make your experience seamless and convenient.',
      delay: 0.2,
    },
    {
      img: fastestDeliveryImg,
      title: 'Fastest Delivery',
      description: 'Experience lightning-fast delivery with our service. We prioritize efficiency without compromising on quality, ensuring that your order reaches you in record time. Your satisfaction is our top priority.',
      delay: 0.3,
    },
  ];

  return (
    <section className="relative bg-orange-400 min-h-screen flex items-center justify-center py-12">
      <motion.div
        className="container mx-auto text-center relative z-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }} // Durasi lebih cepat
        variants={sectionVariants}
      >
        {/* Header Section */}
        <h3 className="text-white text-sm mb-2">- Our Services -</h3>
        <h2 className="text-3xl font-bold text-white mb-8">Our serve just for you</h2>

        {/* Service Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white bg-transparent rounded-lg"
              whileHover={{ scale: 1.1 }} // Animasi zoom in saat di-hover
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: service.delay }} // Durasi dipercepat untuk setiap card
              variants={sectionVariants}
            >
              <img src={service.img} alt={service.title} className="h-40 sm:h-64 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;
