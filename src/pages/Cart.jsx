import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart({ cartItems, removeItem, updateQuantity }) {
  const navigate = useNavigate();

  // Function to calculate the total price of all items in the cart
  const calculateTotal = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle checkout process
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Keranjang kosong, tidak bisa melakukan checkout!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-3/4 mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Keranjang Belanja</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Keranjang Anda kosong.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item._id} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-2">
                <div className="flex items-start space-x-4">
                  <img
                    src={`http://localhost:4000/images/${item.image}`}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Harga satuan: Rp {item.price.toLocaleString()}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right space-y-2 mt-4 md:mt-0">
                  <p className="text-gray-600">Total: Rp {(item.price * item.quantity).toLocaleString()}</p>
                  <button
                    onClick={() => removeItem(item._id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="md:ml-10 w-full md:w-1/4 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Ringkasan</h3>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>Rp {calculateTotal().toLocaleString()}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>Rp {calculateTotal().toLocaleString()}</span>
        </div>
        <input
          type="text"
          placeholder="Masukkan kode kupon"
          className="w-full mt-4 p-2 border rounded-lg"
        />
        <button
          className={`bg-blue-600 text-white w-full px-4 py-2 mt-4 rounded ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>

      {/* React Toastify container */}
      <ToastContainer />
    </div>
  );
}

export default Cart;
