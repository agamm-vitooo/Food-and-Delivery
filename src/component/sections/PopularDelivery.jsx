import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import pizzaImg from '../../assets/images/nasi_liwet.jpg';
import pancakeImg from '../../assets/images/tahu_sumedang.jpg';
import cakeImg from '../../assets/images/sate_maranggi.jpg';
import meatballImg from '../../assets/images/gudeg_jogja.jpg';
import burgerImg from '../../assets/images/lumpia_semarang.jpg';

// Slide data array
const foodItems = [
  { id: 1, name: 'Special Pizza', rating: 4.5, price: '$20', image: pizzaImg },
  { id: 2, name: 'Pancake', rating: 4.5, price: '$10', image: pancakeImg },
  { id: 3, name: 'Straw Cake', rating: 4.5, price: '$8', image: cakeImg },
  { id: 4, name: 'Meatball', rating: 4.5, price: '$15', image: meatballImg },
  { id: 5, name: 'Burger', rating: 4.5, price: '$12', image: burgerImg },
];

const PopularDelivery = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="relative min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Slanted Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-1/2 bg-orange-400 transform -translate-y-40 -skew-y-6 origin-top-left"></div>
        <div className="absolute w-full h-1/2 top-1/2"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h3 className="text-orange-500 text-sm mb-2">- Popular Delivery -</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Food</h2>

        {/* Horizontal Accordion Layout */}
        <div className="flex space-x-2 justify-center accordion-container max-w-6xl mx-auto overflow-x-auto flex-nowrap">
          {foodItems.map((item) => (
            <motion.div
              key={item.id}
              className={`accordion-item flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out ${
                activeItem === item.id ? 'w-56 sm:w-72 md:w-80 lg:w-96 xl:w-104' : 'w-20 sm:w-24'
              }`} 
              onMouseEnter={() => toggleAccordion(item.id)}
              onMouseLeave={() => toggleAccordion(null)}
              initial={{ width: '5rem' }} 
              animate={{
                width: activeItem === item.id ? '20rem' : '5rem',
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              style={{
                height: '200px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
              {activeItem === item.id && (
                <motion.div
                  className="absolute bottom-4 left-4 text-left bg-opacity-50 bg-black p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-yellow-400 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
                    {item.rating} ★★★★★
                  </p>
                  <p className="text-white mt-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
                    {item.price}
                  </p>
                  <button className="mt-4 px-4 py-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600">
                    Order Now
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDelivery;
