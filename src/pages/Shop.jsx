import React, { useState } from 'react';
import Menu from './Menu';
import Cart from './Cart';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fungsi untuk menambahkan item ke keranjang
  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item._id === product._id); // Cek jika produk sudah ada di keranjang

    if (existingItem) {
      // Jika produk sudah ada, update kuantitas
      setCartItems(
        cartItems.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Jika produk belum ada, tambahkan sebagai produk baru
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Fungsi untuk mengupdate kuantitas produk di keranjang
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item._id === id ? { ...item, quantity } : item
      )
    );
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item._id !== id));
  };

  return (
    <div className="container mx-auto">
      <Menu addToCart={addToCart} />
      <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
    </div>
  );
};

export default Shop;
