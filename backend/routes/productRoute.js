// productRoute.js

import express from 'express';
import { getProducts, addProduct } from '../controllers/productController.js';

const router = express.Router();

// Route untuk mendapatkan semua produk
router.get('/', getProducts);

// Route untuk menambah produk baru
router.post('/', addProduct);

export default router;