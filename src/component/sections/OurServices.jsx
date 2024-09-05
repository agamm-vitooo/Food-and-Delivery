import React from 'react';
import deliveryFoodImg from '../../assets/images/delivery-food.svg'; // Gambar untuk Delivery Food
import easyOrderImg from '../../assets/images/easy-order.svg'; // Gambar untuk Easy to Order
import fastestDeliveryImg from '../../assets/images/fastest-delivery.svg'; // Gambar untuk Fastest Delivery

const OurServices = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h3 className="text-orange-500 text-sm mb-2">- Our Services -</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our serve just for you</h2>
        
        {/* Service Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center">
            <img src={deliveryFoodImg} alt="Delivery Food" className="h-64 mb-4" /> {/* Perbesar gambar */}
            <h3 className="text-xl font-bold text-gray-800">Delivery Food</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur</p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center text-center">
            <img src={easyOrderImg} alt="Easy to order" className="h-64 mb-4" /> {/* Perbesar gambar */}
            <h3 className="text-xl font-bold text-gray-800">Easy to order</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur</p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center text-center">
            <img src={fastestDeliveryImg} alt="Fastest Delivery" className="h-64 mb-4" /> {/* Perbesar gambar */}
            <h3 className="text-xl font-bold text-gray-800">Fastest Delivery</h3>
            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
