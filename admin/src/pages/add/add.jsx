import React, { useState } from 'react';
import axios from 'axios'; // Untuk mengirimkan request ke backend
import { ToastContainer, toast } from 'react-toastify'; // Import React Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS Toastify

const Add = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('Salad');
  const [productPrice, setProductPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Menyimpan file gambar yang akan diunggah
    }
  };

  // Function to format input price to Rupiah format
  const formatRupiah = (value) => {
    const numberString = value.replace(/[^,\d]/g, '').toString();
    const split = numberString.split(',');
    const sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    return split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setProductPrice(formatRupiah(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('description', productDescription);
    formData.append('category', productCategory);
    formData.append('price', productPrice.replace(/\./g, '')); // Kirimkan harga tanpa titik pemisah ribuan
    formData.append('image', image); // Tambahkan gambar ke formData

    try {
      const response = await axios.post('http://localhost:4000/api/food/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success('Product Added Successfully'); // Menampilkan notifikasi sukses
        // Reset form setelah berhasil
        setProductName('');
        setProductDescription('');
        setProductCategory('Salad');
        setProductPrice('');
        setImage(null);
      } else {
        toast.error('Failed to add product'); // Menampilkan notifikasi error
      }
    } catch (error) {
      console.error('Error adding product', error);
      toast.error('Error adding product'); // Menampilkan notifikasi error
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Upload Image</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-gray-300 group">
              <div className="flex flex-col items-center justify-center pt-7">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Uploaded"
                    className="h-20 w-20 object-cover mb-2"
                  />
                ) : (
                  <>
                    <svg
                      className="w-10 h-10 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16l-4-4m0 0l4-4m-4 4h18M13 12h7"
                      />
                    </svg>
                    <p className="text-sm text-gray-400 group-hover:text-gray-600 pt-1 tracking-wider">
                      Upload Image
                    </p>
                  </>
                )}
              </div>
              <input
                type="file"
                className="opacity-0"
                onChange={handleImageChange}
                accept="image/*"
              />
            </label>
          </div>
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Product Name</label>
          <input
            type="text"
            placeholder="Type here"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Product Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Product Description</label>
          <textarea
            placeholder="Write content here"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Product Price (in Rupiah)</label>
          <input
            type="text"
            placeholder="Rp 20.000"
            value={productPrice}
            onChange={handlePriceChange}
            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            ADD
          </button>
        </div>
      </form>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Add;
