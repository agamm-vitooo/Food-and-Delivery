import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './component/layout/Navbar';
import Hero from './component/sections/Hero';
import SupportBy from './component/sections/SupportBy';
import OurServices from './component/sections/OurServices';
import PopularDelivery from './component/sections/PopularDelivery';
import Comment from './component/sections/Comment';
import ContactEmail from './component/ContactEmail';
import Footer from './component/layout/Footer';
import Menu from './pages/Menu';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail'; // Import ProductDetail
import Login from './component/auth/LoginForm';
import RegisterForm from './component/auth/RegisterForm';

function App() {
  // Data produk disimpan di App.js
  const products = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Pizza dengan saus tomat segar dan keju mozzarella.',
      price: 50000,
      image: 'https://example.com/pizza-margherita.jpg',
    },
    {
      id: 2,
      name: 'Burger Sapi',
      description: 'Burger sapi dengan keju, selada, dan saus BBQ.',
      price: 45000,
      image: 'https://example.com/burger-sapi.jpg',
    },
    {
      id: 3,
      name: 'Spaghetti Carbonara',
      description: 'Spaghetti dengan saus krim dan bacon yang renyah.',
      price: 55000,
      image: 'https://example.com/spaghetti-carbonara.jpg',
    },
    {
      id: 4,
      name: 'Nasi Goreng Spesial',
      description: 'Nasi goreng dengan telur, ayam, dan udang.',
      price: 30000,
      image: 'https://example.com/nasi-goreng.jpg',
    },
  ];

  // State untuk mengelola item di keranjang
  const [cartItems, setCartItems] = useState([]);

  // Fungsi untuk menambahkan item ke keranjang
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // Jika item sudah ada di keranjang, update quantity
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Jika item belum ada di keranjang, tambahkan sebagai item baru
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Fungsi untuk menghitung jumlah total item di keranjang
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <SupportBy />
                <OurServices />
                <PopularDelivery />
                <Comment />
                <ContactEmail />
                <Footer />
              </>
            } 
          />

          {/* Halaman menu, kirim products dan addToCart sebagai props */}
          <Route path="/menu" element={<Menu products={products} addToCart={addToCart} />} />

          {/* Halaman services */}
          <Route path="/services" element={<Services />} />

          {/* Halaman contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Halaman keranjang */}
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                removeItem={(id) => setCartItems(cartItems.filter(item => item.id !== id))} 
                updateQuantity={(id, newQuantity) => setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item))} 
              />
            } 
          />

          {/* Route untuk halaman ProductDetail */}
          <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
