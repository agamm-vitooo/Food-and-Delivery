import React from 'react';

const Cart = ({ cartItems, removeItem, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Keranjang Belanja</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Keranjang Anda kosong.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Harga satuan: Rp {item.price.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">Total: Rp {(item.price * item.quantity).toLocaleString()}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">Total Keseluruhan: Rp {calculateTotal().toLocaleString()}</h3>
            <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
