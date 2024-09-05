import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import gambar-gambar makanan
import pizzaImg from '../../assets/images/pizza.svg';
import pancakeImg from '../../assets/images/pancake.svg';
import cakeImg from '../../assets/images/cake.svg';
import meatballImg from '../../assets/images/meatball.svg';
import burgerImg from '../../assets/images/burger.svg';

// Array berisi data slide
const foodItems = [
  {
    id: 1,
    name: 'Special Pizza',
    rating: 4.5,
    price: '$20',
    image: pizzaImg,
  },
  {
    id: 2,
    name: 'Pancake',
    rating: 4.5,
    price: '$10',
    image: pancakeImg,
  },
  {
    id: 3,
    name: 'Straw Cake',
    rating: 4.5,
    price: '$8',
    image: cakeImg,
  },
  {
    id: 4,
    name: 'Meatball',
    rating: 4.5,
    price: '$15',
    image: meatballImg,
  },
  {
    id: 5,
    name: 'Burger',
    rating: 4.5,
    price: '$12',
    image: burgerImg,
  },
];

const PopularDelivery = () => {
  return (
    <section className="bg-white py-12 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h3 className="text-orange-500 text-sm mb-2">- Popular Delivery -</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending food</h2>

        {/* Tambahkan class flex, justify-center, items-center */}
        <div className="flex justify-center items-center">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            centeredSlides={true}
            loop={true}
            className="pb-12 max-w-4xl" // Batasi lebar container Swiper
          >
            {foodItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-lg" />
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
      </div>
    </section>
  );
};

export default PopularDelivery;
