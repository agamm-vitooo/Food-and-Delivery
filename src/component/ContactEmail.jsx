import React from 'react';
import contactEmailImg from '../../src/assets/images/contact-email.svg'; // Update with your actual image path

const ContactEmail = () => {
  return (
    <section className="bg-orange-400 py-16 flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-7 md:px-14 flex flex-col lg:flex-row items-center gap-8">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={contactEmailImg}
            alt="Eating Donut"
            className="w-80 h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 text-white text-left">
          <h2 className="text-4xl font-bold mb-4">
            Get more discount if you order from us
          </h2>
          <p className="mb-8">
            Join with us then you must have get a discount and get promo from us to you, enjoy and happy to order.
          </p>

          {/* Email Input and Button */}
          <div className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-lg">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-grow p-3 text-gray-800 outline-none rounded-lg"
            />
            <button className="bg-gray-800 text-white px-6 py-3 mt-2 sm:mt-0 sm:ml-2 rounded-lg">
              Get
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEmail;
