import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams(); // Mengambil id produk dari URL
  const product = products.find(item => item.id === parseInt(id)); // Cari produk berdasarkan ID

  if (!product) {
    return <div>Product not found</div>; // Jika produk tidak ditemukan
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row">
        {/* Bagian gambar produk */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {/* Gambar utama produk */}
          <div className="w-full md:w-auto">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Bagian informasi produk */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-700 mb-4">IDR {product.price.toLocaleString()}</p>
          
          {/* Tombol Add to Cart */}
          <button
            className="bg-pink-500 text-white px-6 py-3 rounded-full mb-6 flex items-center"
            onClick={() => addToCart(product)} // Tambahkan produk ke keranjang
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 5h14M9 21h6" />
            </svg>
            Add to Cart
          </button>

          {/* Deskripsi produk */}
          <div>
            <h2 className="text-xl font-semibold mb-2">About the product</h2>
            <p className="text-gray-600 mb-2">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
