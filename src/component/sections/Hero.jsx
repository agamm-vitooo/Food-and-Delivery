import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import womanImage from '../../assets/images/woman.svg';
import avatar1 from '../../assets/images/avatar1.svg';
import avatar2 from '../../assets/images/avatar2.svg';
import avatar3 from '../../assets/images/avatar3.svg';

const Hero = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add event listener on scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-7 md:px-14 flex flex-wrap justify-between items-center">
        {/* Left section (text and buttons) */}
        <motion.div
          className="w-full md:w-1/2 text-left md:pr-12"
          initial={{ opacity: 0, x: -50 }} // Awal animasi
          animate={{ opacity: 1, x: 0 }} // Animasi masuk
          transition={{ duration: 1.4, ease: 'easeOut' }} // Durasi animasi
        >
          <h1 className="md:text-5xl text-4xl font-bold text-gray-900 mb-6">
            Rasakan Kenikmatan<br />
            Setiap Gigitan<br />
            Tanpa Penantian Lama
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Kami hadir untuk menyajikan makanan lezat dengan pengiriman cepat, gratis, dan mudah.
          </p>
          <div className="flex space-x-4 mb-8">
            <motion.button
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/menu')}
            >
              Pesan Sekarang
            </motion.button>
            <motion.button
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
            >
              Jelajahi
            </motion.button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img src={avatar1} alt="Pelanggan 1" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={avatar2} alt="Pelanggan 2" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={avatar3} alt="Pelanggan 3" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-gray-700 font-bold">Ulasan Pelanggan</p>
              <p className="text-sm text-gray-500">★ 4.8 (8k ulasan)</p>
            </div>
          </div>
        </motion.div>

        {/* Right section (image and details) */}
        <motion.div
          className="w-full md:w-1/2 mt-10 md:mt-0 relative"
          initial={{ opacity: 0, y: 50 }} // Awal animasi
          animate={{ opacity: 1, y: 0 }} // Animasi masuk
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }} // Durasi dan delay animasi
          style={{ transform: `translateY(${scrollY * 0.2}px)` }} // Parallax effect on scroll
        >
          <div className="relative z-10">
            <img src={womanImage} alt="Wanita Berpikir" className="w-full max-w-[500px] mx-auto" />
          </div> 

          {/* Icon example */}
          <motion.div
            className="absolute top-20 right-10 bg-white p-4 rounded-full shadow-lg"
            initial={{ scale: 0 }} // Awal animasi
            animate={{ scale: 1 }} // Animasi masuk
            transition={{ duration: 0.6, delay: 0.5 }} // Durasi dan delay animasi
            style={{ transform: `translateY(${scrollY * 0.3}px)` }} // Parallax effect on scroll
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.045 0 1.918.405 2.646 1.07L17 7m1-1h-6m0 0h-2a2 2 0 00-2 2v2a2 2 0 002 2h3.2m0 0a6.8 6.8 0 010 6m0-6H13" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
