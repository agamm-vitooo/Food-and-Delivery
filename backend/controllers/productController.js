import { Product } from '../models/Product.js';

// Get all products
const getProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new product
const addProduct = async(req, res) => {
    const { name, price, description, stock, image } = req.body;

    try {
        const newProduct = new Product({ name, price, description, stock, image });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Export functions using ES Modules syntax
export { getProducts, addProduct };