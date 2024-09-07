import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Menu = ({ products, addToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Arahkan pengguna ke halaman ProductDetail dengan ID produk
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Katalog Makanan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => handleCardClick(item.id)} // Arahkan ke ProductDetail
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-lg font-bold text-orange-500 mb-4">Rp {item.price.toLocaleString()}</p>
              <button
                className="flex items-center justify-center w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation(); // Menghentikan onClick card agar tidak trigger
                  addToCart(item);
                }}
              >
                <FaPlusCircle className="mr-2" /> Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
