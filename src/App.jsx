import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
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
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import LoginForm from './component/auth/LoginForm';
import RegisterForm from './component/auth/RegisterForm';
import Profile from './component/auth/Profile';
import Shop from './pages/Shop';
import ContactUs from './pages/Contact';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage for token on page load (or refresh)
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true); // User is logged in if there's a token
    }
  }, []);

  // Fetch Products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Pastikan path fetch sesuai dengan lokasi file JSON Anda
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
        console.error('Error fetching the products:', error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []); // [] to run this effect only once when the component mounts

  const handleLogout = () => {
    // Remove token from localStorage and update login state
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  const addToCart = (item) => {
    const itemExists = cartItems.find(cartItem => cartItem._id === item._id);
    if (itemExists) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item._id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map(item =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryFee = subtotal > 0 ? 2 : 0;
    const total = subtotal + deliveryFee;
    return { subtotal, deliveryFee, total };
  };

  const totals = calculateTotal();

  return (
    <Router>
      <div className="App">
        <Navbar 
          isLoggedIn={isLoggedIn} 
          handleLogout={handleLogout} 
          cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} 
        />
        <Routes>
          <Route path="/" element={(
            <>
              <Hero />
              <SupportBy />
              <OurServices />
              <PopularDelivery />
              <Comment />
              <ContactEmail />
              <Footer />
            </>
          )} />
          <Route path="/menu" element={loading ? <div>Loading...</div> : error ? <div>{error}</div> : <Menu products={products} addToCart={addToCart} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeItem={removeItem} updateQuantity={updateQuantity} />} />
          <Route path="/checkout" element={<Checkout totals={totals} />} />
          <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
