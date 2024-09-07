import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../assets/style/customSwiperStyles.css';

// Import image assets
import pizzaImg from '../../assets/images/pizza.svg';
import pancakeImg from '../../assets/images/pancake.svg';
import cakeImg from '../../assets/images/cake.svg';
import meatballImg from '../../assets/images/meatball.svg';
import burgerImg from '../../assets/images/burger.svg';

// Slide data array
const foodItems = [
  { id: 1, name: 'Special Pizza', rating: 4.5, price: '$20', image: pizzaImg },
  { id: 2, name: 'Pancake', rating: 4.5, price: '$10', image: pancakeImg },
  { id: 3, name: 'Straw Cake', rating: 4.5, price: '$8', image: cakeImg },
  { id: 4, name: 'Meatball', rating: 4.5, price: '$15', image: meatballImg },
  { id: 5, name: 'Burger', rating: 4.5, price: '$12', image: burgerImg },
];

const PopularDelivery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#fdf8f5] py-12 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h3 className="text-orange-500 text-sm mb-2">- Popular Delivery -</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending food</h2>

        {/* Centered Carousel */}
        <div className="flex justify-center items-center">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} 
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000, // Interval antara slide (3 detik)
              disableOnInteraction: false, // Tetap autoplay meskipun pengguna berinteraksi
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              0: { slidesPerView: 1 },       // Tampilkan 1 slide untuk layar kecil
              640: { slidesPerView: 1 },     // Tampilkan 1 slide untuk layar mobile
              768: { slidesPerView: 2 },     // Tampilkan 2 slide untuk layar tablet
              1024: { slidesPerView: 3 },    // Tampilkan 3 slide untuk layar besar
            }}
            className="pb-20 max-w-6xl w-full custom-swiper"
          >
            {foodItems.map((item) => (
              <SwiperSlide key={item.id} className="custom-slide p-16 md:p-2">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 text-left">
                    <h3 className="text-white font-bold text-lg">{item.name}</h3>
                    <p className="text-yellow-400">{item.rating} ★★★★★</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg text-gray-800 font-bold">
                    {item.price}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom navigation buttons */}
        <div className="flex justify-center mt-4">
          <button
            ref={prevRef}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 mx-2"
          >
            <span className="text-lg">←</span>
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 mx-2"
          >
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDelivery;
