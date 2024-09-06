import React from 'react';
import womanImage from '../../assets/images/woman.svg';
import avatar1 from '../../assets/images/avatar1.svg';
import avatar2 from '../../assets/images/avatar2.svg';
import avatar3 from '../../assets/images/avatar3.svg';

const Hero = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-7 md:px-14 flex flex-wrap justify-between items-center">
        {/* Left section (text and buttons) */}
        <div className="w-full md:w-1/2 text-left md:pr-12">
          <h1 className="md:text-5xl text-4xl font-bold text-gray-900 mb-6">
            Don’t wanna<br />
            Make you have<br />
            A bad day
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Our job is delivering a delicious food with fast, free delivery and easy.
          </p>
          <div className="flex space-x-4 mb-8">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
              Order Now
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-100">
              How to order
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img src={avatar1} alt="Customer 1" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={avatar2} alt="Customer 2" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src={avatar3} alt="Customer 3" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-gray-700 font-bold">Customer Review</p>
              <p className="text-sm text-gray-500">★ 4.8 (8k reviews)</p>
            </div>
          </div>
        </div>

        {/* Right section (image and details) */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
          <div className="relative z-10">
            <img src={womanImage} alt="Woman Thinking" className="w-full max-w-[500px] mx-auto" />
          </div> 

          {/* Icon example */}
          <div className="absolute top-20 right-10 bg-white p-4 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.045 0 1.918.405 2.646 1.07L17 7m1-1h-6m0 0h-2a2 2 0 00-2 2v2a2 2 0 002 2h3.2m0 0a6.8 6.8 0 010 6m0-6H13" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
