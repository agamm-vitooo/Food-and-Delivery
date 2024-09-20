import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingFood, setEditingFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk visibility modal
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });

  const fetchFoods = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/food/list');
      if (response.data.success) {
        setFoods(response.data.data);
      } else {
        toast.error('Failed to fetch food list');
      }
    } catch (error) {
      console.error('Error fetching food list:', error);
      toast.error('Error fetching food list');
    }
  };

  const removeFood = async (id) => {
    try {
      const response = await axios.post('http://localhost:4000/api/food/remove', { id });
      if (response.data.success) {
        toast.success('Food item removed successfully');
        fetchFoods(); // Refresh the list after deletion
      } else {
        toast.error('Failed to remove food item');
      }
    } catch (error) {
      console.error('Error removing food item:', error);
      toast.error('Error removing food item');
    }
  };

  const handleEditClick = (food) => {
    setEditingFood(food._id);
    setFormData({
      name: food.name,
      description: food.description,
      price: food.price,
      image: null,
    });
    setIsModalOpen(true); // Buka modal saat edit diklik
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedData = new FormData();
    updatedData.append('name', formData.name);
    updatedData.append('description', formData.description);
    updatedData.append('price', formData.price);
    if (formData.image) {
      updatedData.append('image', formData.image);
    }
    updatedData.append('id', editingFood);

    try {
      const response = await axios.post('http://localhost:4000/api/food/update', updatedData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success('Food item updated successfully');
        fetchFoods(); // Refresh list after update
        setIsModalOpen(false); // Tutup modal setelah update berhasil
        setEditingFood(null);
      } else {
        toast.error('Failed to update food item');
      }
    } catch (error) {
      console.error('Error updating food item:', error);
      toast.error('Error updating food item');
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const formatRupiah = (value) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(value);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Food List</h1>

      <input
        type="text"
        placeholder="Search food..."
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div key={food._id} className="border p-4 rounded-md shadow-md bg-gray-50">
              <img
                src={`http://localhost:4000/images/${food.image}`}
                alt={food.name}
                className="h-32 w-32 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold">{food.name}</h2>
              <p className="text-gray-700">{food.description}</p>
              <p className="font-bold mt-2">{formatRupiah(food.price)}</p>
              <div className="flex space-x-2">
                <button
                  className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEditClick(food)}
                >
                  Edit
                </button>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => removeFood(food._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No food items found.</p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Food</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Product Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded shadow-sm"
                  rows="4"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Product Price</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border rounded shadow-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Upload Image</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border rounded shadow-sm"
                  accept="image/*"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update Product
                </button>
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
