import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Menu = ({ products, addToCart }) => {
  const [currentPage, setCurrentPage] = useState(1); // Halaman saat ini
  const itemsPerPage = 8; // Jumlah item per halaman

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Hitung indeks produk yang akan ditampilkan
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Mengatur jumlah halaman
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Fungsi untuk berpindah halaman
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Katalog Makanan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => handleCardClick(item.id)}
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-lg font-bold text-orange-500 mb-4">Rp {item.price.toLocaleString()}</p>
              <button
                className="flex items-center justify-center w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
              >
                <FaPlusCircle className="mr-2" /> Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          className={`px-4 py-2 mr-2 ${currentPage === 1 ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white rounded-lg`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-orange-500' : 'bg-green-500 hover:bg-green-600'} text-white rounded-lg`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 ml-2 ${currentPage === totalPages ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white rounded-lg`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Menu;
