import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample images (replace with actual URLs or import)
import pizzaGirlImg from '../../assets/images/comment-girl1.svg'; // Left side image
import profileImg from '../../assets/images/profile1.svg'; // Profile image

const testimonials = [
  {
    id: 1,
    name: "Erick Smith",
    role: "Food Vlogger",
    text: "“All service provided is so perfect and fast, and I'm so happy to order from this company”",
    rating: 5,
    image: pizzaGirlImg,
    profileImage: profileImg,
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Chef",
    text: "“Great service and delicious food! I always recommend this place to my friends.”",
    rating: 4.5,
    image: pizzaGirlImg,
    profileImage: profileImg,
  },
  {
    id: 3,
    name: "John Snow",
    role: "Food Critic",
    text: "“The best food delivery experience I’ve ever had. Everything was on time and delicious!”",
    rating: 5,
    image: pizzaGirlImg,
    profileImage: profileImg,
  }
];

const Comment = () => {
  return (
    <section className="py-16 bg-[#fdf8f5]">
      <div className="container mx-auto px-7 md:px-14">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="w-96 h-auto" />
                  </div>
                </div>

                {/* Testimonial Text Section */}
                <div className="w-full lg:w-1/2 text-left">
                  <h3 className="text-orange-500 text-sm mb-2">- What they are say -</h3>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">What they are saying about us</h2>
                  <div className="flex items-center mb-4">
                    <img src={testimonial.profileImage} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div className='text-left'>
                      <h3 className="font-bold text-xl text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-left">{testimonial.text}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-xl mr-2">{testimonial.rating}</span>
                    <div className="flex">
                      {[...Array(Math.floor(testimonial.rating))].map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-yellow-500"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                      {testimonial.rating % 1 !== 0 && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 text-yellow-500"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Comment;
