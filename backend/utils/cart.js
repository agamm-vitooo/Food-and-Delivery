// Utility functions for handling cart operations with localStorage

// Save cart items to localStorage
exports.saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

// Load cart items from localStorage
exports.loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};