import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 px-4">
        
        {/* F&D Section */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4">F&D</h3>
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-white"><FaFacebookF className="inline-block mr-2"/> Facebook</a>
            <a href="#" className="text-white"><FaInstagram className="inline-block mr-2"/> Instagram</a>
            <a href="#" className="text-white"><FaEnvelope className="inline-block mr-2"/> Email</a>
            <a href="#" className="text-white"><FaTwitter className="inline-block mr-2"/> Twitter</a>
          </div>
        </div>
        
        {/* Our Product */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Guide</a></li>
          </ul>
        </div>

        {/* Terms & Policies */}
        <div>
          <h3 className="text-lg font-bold mb-4">Terms & Policies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-300">(+62) 893912392190</li>
            <li className="text-gray-300">agencycr@gmail.com</li>
          </ul>
        </div>

        {/* Food Delivery */}
        <div>
          <h3 className="text-lg font-bold mb-4">Food Delivery</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">KFC Delivery</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Bungo Tanjung Delivery</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-400">
        © NameBrand 2022 - All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
