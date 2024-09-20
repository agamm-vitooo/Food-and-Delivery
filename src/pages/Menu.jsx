import React, { useState, useEffect } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Menu = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 8;

  const navigate = useNavigate();

  // Fetch products dari server
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/food/list');
      if (response.data.success) {
        setProducts(response.data.data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Variants untuk grid dan produk
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Setiap produk akan muncul bertahap
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Katalog Makanan</h1>
      
      {/* Search input */}
      <input
        type="text"
        placeholder="Search food..."
        className="mb-6 p-2 border border-gray-300 rounded-md w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Bungkus grid dengan motion.div untuk stagger efek */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {currentItems.map((item, index) => (
          <motion.div
            key={item._id}
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleCardClick(item._id)}
            variants={itemVariants} // Setiap item memiliki animasi muncul
            whileHover={{ scale: 1.05 }} // Animasi hover
            whileTap={{ scale: 0.95 }} // Animasi saat ditekan
          >
            <img src={`http://localhost:4000/images/${item.image}`} alt={item.name} className="w-full h-48 object-cover" />
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
          </motion.div>
        ))}
      </motion.div>

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
